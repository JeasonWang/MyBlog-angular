import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user';
import { LoginserviceService } from './loginservice.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  users: User[] = null;
  user: User = null;

  constructor(private LoginService: LoginserviceService) { }

  ngOnInit() {
  }

  getUsers() {
    return this.LoginService.getUsers().subscribe(users => this.users = users);
  }

  getUserById(id: number) {
    return this.LoginService.getUser(id).subscribe(user => this.user = user);
  }



}
