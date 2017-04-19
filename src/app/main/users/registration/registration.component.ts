import { RequestOptions } from '@angular/http';
import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() startReg : boolean
  @Output() updateReg = new EventEmitter();
  
  createdUser : User = new User;
  
  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  StopReg(){
    console.log("stopReg")
    this.startReg = false
    this.updateReg.emit({value: false})
  }

  createUser(){
    console.log("Start Create User")
    this._userService.createUser(this.createdUser);
  }
}
