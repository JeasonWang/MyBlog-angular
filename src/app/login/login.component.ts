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
  user1: User;

  constructor(private LoginService: LoginserviceService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.user = new User();
    this.user1 = new User();
    this.user.username = this.username;
    this.user.password = this.password;
    this.LoginService.login(this.user).subscribe(
      (re: User) => { 
        this.user1 = re;
      }
    );
    setTimeout(() => {
      if(this.user1 !== null && this.user.username === this.user1.username && this.user.password === this.user1.password){
        this.back = true;
      }
      if (this.back) {
        this.router.navigateByUrl('/back');
      }else{
        alert("用户名或者密码错误！")
      }
    }, 1000);
    
  }
}
