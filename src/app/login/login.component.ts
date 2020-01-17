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
  users: User[] = null;
  user: User = new User();
  back: any;

  constructor(private LoginService: LoginserviceService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.user.username = this.username;
    this.user.password = this.password;
    this.back = this.LoginService.checkUser(this.user);
    console.log(this.back);
    if (this.back) {
      this.router.navigateByUrl('/home');
    }
  }



}
