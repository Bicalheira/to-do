import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/user.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.formBuilder.nonNullable.group<LoginForm>({
    username: "",
    password: "",
  })

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    await this.loginService.login(this.form.getRawValue());
    this.router.navigate(["home"]);
  }

}
