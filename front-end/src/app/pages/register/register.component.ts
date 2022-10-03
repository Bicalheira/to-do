import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForm } from 'src/app/models/user.model';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = this.formBuilder.nonNullable.group<UserForm>({
    name: "",
    username: "",
    password: "",
  })

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  async send() {
    const response = await this.registerService.register(this.form.getRawValue());

    if (response) {
      alert("You are registered now :)")
      this.router.navigate([""])
    }
  }

}
