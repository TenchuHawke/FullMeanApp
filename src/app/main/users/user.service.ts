import { User } from './user';
import { Injectable } from '@angular/core';
import { Http, Request, Headers, RequestOptions, Response } from '@angular/http';
import "rxjs"

@Injectable()
export class UserService {
  USERS : User[] =[]

  constructor(private http: Http) { }

  createUser(user){
    const headers = new Headers({"Content-Type": "application/json"})
    const options = new RequestOptions({headers: headers})
    this.http.post("/createUser", user, options).subscribe(response => this.get_users())
    }
  get_users(){
    this.http.get('/users')
        .map((response : Response) => response.json())
        .subscribe(data => {this.USERS = data}, e=> console.log(e), () => console.log("UserService.Get: Continue."))
  }
}
