import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from '../commun/validator/username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    username : new FormControl('',[Validators.required, Validators.minLength(2), UsernameValidator.cannotContainSpace]),
    password : new FormControl('',Validators.required),
  
});
  
getAttribute = (attribut) => this.form.get(attribut);
 
get username() { return this.form.get('username'); }
get password() { return this.form.get('password'); }
      
    
  

}


