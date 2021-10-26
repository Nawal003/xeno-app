import { Component, OnInit } from '@angular/core';
import { IId } from 'src/app/system/models/iid';
import { UserI } from 'src/app/system/models/user-i';
import { IdService } from 'src/app/system/services/id.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  user:UserI=<UserI>{}
  

  constructor(public idServ:IdService) { }

  ngOnInit(): void {
   
    
  }
  

  logUser(){
    console.log(this.user);
    
  }
  valideId(){
    this.idServ.login(this.user)
  }
 



}
