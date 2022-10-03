import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/pages/home/home.service';
import { DataService } from 'src/app/services/data.service';
import { Task } from 'src/app/models/task.model';


@Component({
  selector: 'bolttech-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() isButtonsDisabled: boolean = false
  @Input() task!: Task;
  @Input() isDone = false;
  @Output() taskUpdated = new EventEmitter()


  constructor(private homeService: HomeService) { }


  async deleteTask(id: number) {
    await this.homeService.deleteTask(id);
    this.taskUpdated.emit(true)
  }

  async updateTask(id: number) {
    const taskName = prompt("Write the new task name")

    if (taskName) {
      await this.homeService.updateTask({ id, text: taskName });
      this.taskUpdated.emit(true)
    }
  }

  async updateStatusTask(task: Task) {
    await this.homeService.updateStatusTask({ id: task.id, status: task.status == 0 ? 1 : 0 });
    this.taskUpdated.emit(true)
  }
}