import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = ''
  password = ''
  errorMsg = ''

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.user.trim().length === 0){
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0){
      this.errorMsg = 'Password is required';
    } else {
      this.errorMsg = '';
      let res = this.auth.login(this.user, this.password)
      if(res === 200){
        this.router.navigate(['home'])
      }
      if (res = 403){
        this.errorMsg = 'Invalid Credentials';
      }
    }
  }

}
