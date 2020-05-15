import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: number;
  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {}

  loginUser(){
    console.log("tihs", this.userName)
   }

}
