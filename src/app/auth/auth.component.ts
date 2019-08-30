import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthResponse, AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector:'app-auth',
  templateUrl:'./auth.component.html',
  styleUrls:['./auth.component.css']
})

export class AuthComponent {

  isLogginMode = false;
  isLoading = false;
  error:string;

  constructor(private authService:AuthService,
              private router:Router){}

  onSwitch(){
    this.isLogginMode = !this.isLogginMode;
  }

  onAuthenticate(authForm:NgForm){

    this.error = null;
    let userData = authForm.value;
    this.isLoading = true;

    let resObs :Observable<AuthResponse>;

    if(this.isLogginMode){
      resObs = this.authService.login(userData);
    }else{
      resObs =  this.authService.signUP(userData);
    }

    resObs.subscribe(
      resData => {
        this.router.navigate(['/recipes'])
        this.isLoading = false;
      },
      error => {
        this.error = error;
        this.isLoading = false;
      }
    )

    authForm.reset();
  }


}
