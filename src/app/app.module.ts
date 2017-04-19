import { UserService } from './main/users/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './main/users/users.component';
import { LoginComponent } from './main/users/login/login.component';
import { RegistrationComponent } from './main/users/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
