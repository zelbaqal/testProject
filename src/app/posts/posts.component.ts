import { RequestError } from './../commun/interceptor/request-error';
import { BadInput } from './../commun/interceptor/bad-input-error';
import { AppError } from './../commun/interceptor/app-error';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../commun/interceptor/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title:string;
  body:string;
  statut=true;

  post :User = {
    userId:0,
    id : 0,
    title:"",
    body:""
  };
 

  posts : User[];

  constructor(private postService : PostService) { 
    
  }
    
  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.postService.getAll()
    .subscribe(response => {
     
      this.posts = response;
     
      }, (error: AppError) => {
        if(error instanceof RequestError){
            alert("Probleme de connexion");
        }else{
          alert("Erreur inatendue");
        }
      })
  }

  createPost(){
    this.postService.create(this.post)
    .subscribe(response => {
        this.post.id = response.id;
        //this.post.userId = response.userId;
        this.posts.unshift(this.post);
        this.post = {
          userId:0,
          id : 0,
          title:"",
          body:""
        };
    }, (error: AppError) => {
      if(error instanceof BadInput){
          alert("Merci de verifier vos informations");
      }else{
          alert("Erreur inatendue");
          console.log(error);
      }
    });
 
   
  }

  editPost(post){
      this.post = post;
      this.statut =false;
  }

  updatePost(){
    this.postService.update(this.post)
    .subscribe(() => {
      alert("Le post "+this.post.title+" a ete modifier avec suucces");
      this.post = {
        userId:0,
        id : 0,
        title:"",
        body:""
      };
      this.statut = true;

    }, (error : AppError) => {
      
      if(error instanceof RequestError){
        alert("requete erreur");
    }else{
        alert("Erreur inatendue");
        console.error(error);
    }   
    }); 
  }

  deletePost(post){
    
    this.postService.delete(post.id)
      .subscribe(() => {
        
        let index = this.posts.indexOf(post);
        if (index >= 0) {
          this.posts.splice(index, 1);
        }
      }, (error: AppError) => {
        if(error instanceof NotFoundError){
            alert("Ce post est deja supprime");
        }else{
            alert("Erreur inatendue");
        }
      });

    

  }

}
