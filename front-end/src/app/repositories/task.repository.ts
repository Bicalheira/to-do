import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Task } from "src/models/task.model";


@Injectable({
    providedIn: "root"
})

export class TaskRepository {

    constructor(private http: HttpClient) {

    }

    createTask(task: Pick<Task, "text">) {
        return this.http.post(environment.CONS_URL_APIBASE + "/tasks", task);
    }

    updateTask(task: Task) {
        return this.http.put(environment.CONS_URL_APIBASE + "/tasks/" + task.id, task);
    }

    deleteTask(task: Task) {
        return this.http.post(environment.CONS_URL_APIBASE + "/tasks/" + task.id, task);
    }

    getTasks() {
        return this.http.get(environment.CONS_URL_APIBASE + "/tasks");
    }
}