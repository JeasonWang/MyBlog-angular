import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public login(): void {
    console.log('login');
    this.http.get('url');
  }

}
