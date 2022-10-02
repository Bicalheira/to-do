import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = this.formBuilder.group({
    name: [],
    username: [],
    password: [],
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  send(){
    
  }

}
