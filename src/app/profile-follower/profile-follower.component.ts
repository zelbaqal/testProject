import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {

  id:number;
  username:string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    /* let params = this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.username = params.get('username');
    }); */

    //Snapshot
    this.id = +this.route.snapshot.paramMap.get('id');
    this.username = this.route.snapshot.paramMap.get('username');
    

    let queryPara = this.route.queryParamMap.subscribe(queryPms =>{
         console.log(queryPms.get('type'));
    });
  }

}
