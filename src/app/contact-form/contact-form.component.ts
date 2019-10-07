import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [{id:1, title:"Email"}, {id:2, title:"Phone"}, {id:3, title:"SMS"}];
  genres = [{id:1, title:"HOMME"}, {id:2, title:"FEMME"}];

  constructor() { }

  ngOnInit() {
  }

  log(ngModel){
    console.log(ngModel.value);
  }

  onSubmit(f){
    console.log(f.value);
  }

}
