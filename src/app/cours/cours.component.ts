import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursService } from './cours.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';




@Component({
    selector:'cours',
    templateUrl:'./cours.component.html',
    inputs:['starAble']
})



export class Cours{
    isActive = true;
    @Input('is-star') starAble;
    @Output('btata') tat = new EventEmitter();

    faCoffee = faCoffee;
    
    public title = "test";

    public paragraphe = "";

    switchValue;

    changeStar(){
       this.starAble = !this.starAble;  
       //this.log(this.starAble);
      this.tat.emit({subj:this.starAble});
       
   }
   
    coreses = [{
        id: 12,
        title: "php"
    },
    {
        id: 12,
        title: "php"
    },
    {
        id: 1,
        title: "php"
    }];

    corse = {
        titre:"ouhamza",
        price:32.88,
        tph:"0788990"
    }

    body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur omnis repellat alias. Officiis, voluptatibus exercitationem! Esse, culpa quo vel repudiandae quia iusto quibusdam tempore, possimus laboriosam dolorem eaque aliquam.";

    courses;

    constructor(coursesService : CoursService){
               this.courses = coursesService.getCourses();
              
    }
    
    log = a => console.log(a);

    showAlert=($event)=>this.log($event);

    onClick(event){
        console.log(event.target.value);
        this.paragraphe = event.target.value;
      
    }

    listeCourses = false;
    seeCourses(){
        this.listeCourses = true;
    }

    tracking(index, corse){
        return corse ? corse.id : undefined;
    }

    addItemToCourses(){
        this.coreses.push({id:13,title:"reactJs"});
    }

   
    removeItem(course){
       let index = this.coreses.indexOf(course);
       this.coreses.splice(index,1);
    }

    editItem(course){
        course.id=20;
        course.title="zakaria";
    }

    personne = {
        name : 'EL BAQAL',
        firstName:'zakaria',
        adresse:{
            tph : 567899 ,
            city:'rabat'
        }
    }

}