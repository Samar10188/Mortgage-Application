import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';
import { authData } from '../authentication/Authdata';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: any = null;
  password: any = null;
  myData: authData = {
    username: null,
    password: null
  };
  authenticate: any = null;
  headerProperty: string;
  token: string;
  // myData: any;
  constructor(private Auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    // this.Auth.getUserDetails(this.myData).subscribe(data => {
    //   console.log("we got", data);
    //   this.authenticate = data;

    // });
  }


  loginUser() {
    // console.log("login details", this.myData)
    this.Auth.authenticateUserDetails(this.myData).subscribe(data => {
      console.log("value of authenticate", data);
      localStorage.setItem("token", data.token.toString());
      this.token = localStorage.getItem("token");
      console.log("Token value :", this.token);
      this.router.navigate(['home/calculation']);
      this.Auth.setLoggedIn(true);
    }, error => {
      console.log("Error :", error.message);
      window.alert("Wrong Credentials")
    });
  }

}
