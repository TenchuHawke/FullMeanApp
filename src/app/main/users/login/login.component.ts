import { User } from './../user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() startReg : boolean
  @Output() updateReg = new EventEmitter();
  loginUser : User = new User

  constructor() {
  }

  ngOnInit() {
  }

  StartReg(){
    console.log("StartReg")
    this.startReg = true
    this.updateReg.emit({value: true})
  }

  checkUser(){
    console.log("Check User")

  }
}
