import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/github.followers.service';

@Component({
  selector: 'git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {

  followers:any[];

  constructor(private followerService : FollowersService) { }

  ngOnInit() {
    this.getAllFollowers();
  }


  getAllFollowers(){
    this.followerService.getAll()
      .subscribe(response =>{
        this.followers = response;
      });
  }

  





}
