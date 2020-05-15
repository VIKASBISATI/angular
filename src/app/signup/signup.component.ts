import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: number;
  public confirmPassword: number;

  constructor(private router:Router ,private authService:AuthServiceService) { }

  ngOnInit(): void {}

  register(){
    console.log("tihs", this.email)
   }
   navigateToCart(){
    this.router.navigate(['/card']);
   }

}
