import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { HomeService } from 'src/app/pages/home/home.service';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'bolttech-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() project!: Project
  @Output() projectUpdated = new EventEmitter()

  form = this.formBuilder.nonNullable.group({
    name: "",
    text: ""
  })

  constructor(private homeService: HomeService, private formBuilder: FormBuilder) { }


  async deleteProject(id: number) {
    await this.homeService.deleteProject(id);
    this.projectUpdated.emit(true)
  }

  async updateProject(id: number) {
    const projectName = prompt("Write the new project name")

    if (projectName) {
      await this.homeService.updateProject({ id, name: projectName });
      this.projectUpdated.emit(true)
    }
  }

  async createTask(projectId: number) {
    const text = this.form.getRawValue().text

    if (text) {
      await this.homeService.createTask({ text, projectId });
      this.form.reset()
      this.projectUpdated.emit(true)
    }
  }

  taskUpdated() { this.projectUpdated.emit(true) }
}