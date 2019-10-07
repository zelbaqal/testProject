import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  ajouter=()=>{
      this.route.navigate(['followers', 12, 'zakaria'], {
        queryParams:{page:12, type:"admin"}
      });
  }

}
