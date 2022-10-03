import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(user:string, password:string){
    if (user === 'matheus' && password === 'worksAtKeeps'){
      return 200;
    } else {
      return 403;
    }
  }

  constructor(private router: Router) { }
  logout(){
    this.router.navigate(['login'])
  }
}
