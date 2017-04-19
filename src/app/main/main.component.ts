import { User } from './users/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentUser: User
  // logged in user.
  constructor() {
    this.currentUser=null;
  }

  ngOnInit() {
  }
  authUser(){
    console.log("authUser()")
    //check to see if user exists in session, if so set Current User to the Session User.    
  }
}
