import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { FormTask, UpdateStatusTask, UpdateTask } from "src/app/models/task.model";

@Injectable({
    providedIn: "root"
})

export class TaskRepository {

    constructor(private http: HttpClient) {

    }

    createTask(task: FormTask) {
        return this.http.post(environment.CONS_URL_APIBASE + "tasks", task);
    }

    updateTask(task: UpdateTask) {
        return this.http.put(environment.CONS_URL_APIBASE + "tasks/" + task.id, task);
    }

    updateStatusTask(task: UpdateStatusTask) {
        return this.http.put(environment.CONS_URL_APIBASE + "tasks/" + task.id, task);
    }

    deleteTask(id: number) {
        return this.http.delete(environment.CONS_URL_APIBASE + "tasks/" + id);
    }

    getTasks() {
        return this.http.get(environment.CONS_URL_APIBASE + "tasks");
    }
}