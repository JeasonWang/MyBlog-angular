import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user';
import { LoginserviceService } from './loginservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  back = false;
  user: User;

  constructor(private LoginService: LoginserviceService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.user = new User();
    this.user.username = this.username;
    this.user.password = this.password;
    this.LoginService.login(this.user).subscribe(
      (user1: User) => { this.user = user1;}
    );
    setTimeout(() => {
      if(this.user != null){
        this.back = true;
        return;
      }
    }, 100);
    if (this.back) {
      this.router.navigateByUrl('/back');
    }
  }



}
