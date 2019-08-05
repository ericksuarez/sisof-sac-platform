import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login(loginForm): void {
    console.log(loginForm.value['email']);
    this.auth.login(loginForm.value);
  }

}
