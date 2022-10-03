import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';

import { DataService } from 'src/app/services/data.service';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[] = []

  form = this.formBuilder.nonNullable.group({
    name: "",
    text: ""
  })

  constructor(private formBuilder: FormBuilder,
    private homeService: HomeService,
    private dataService: DataService,
    private router: Router) { }

  async ngOnInit() {
    this.getProjects()
  }

  async getProjects(){
    this.projects = await this.homeService.getProjects();
  }

  async createProject() {
    const name = this.form.getRawValue().name
    if (name) {
      await this.homeService.createProject({ name });
      this.form.reset()
      this.projects = await this.homeService.getProjects();
    }
  }



 


}