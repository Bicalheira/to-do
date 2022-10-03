import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { ProjectRepository } from "src/app/repositories/project.repository";
import { TaskRepository } from "src/app/repositories/task.repository";
import { FormProject, Project, UpdateProject } from "src/app/models/project.model";
import { FormTask, Task, UpdateStatusTask, UpdateTask } from "src/app/models/task.model";

@Injectable({
    providedIn: "root"
})

export class HomeService {

    constructor(private projectRepository: ProjectRepository, private taskRepository: TaskRepository) {

    }

    createProject(project: FormProject) {
        return firstValueFrom(this.projectRepository.createProject(project))
    }

    deleteProject(id: number) {
        return firstValueFrom(this.projectRepository.deleteProject(id))
    }

    updateProject(project: UpdateProject) {
        return firstValueFrom(this.projectRepository.updateProject(project))
    }

    async getProjects() {
        const projects = await firstValueFrom(this.projectRepository.getProjects())
        projects.forEach(f => f.tasks = f.tasks ?? [])
        return projects
    }

    createTask(task: FormTask) {
        return firstValueFrom(this.taskRepository.createTask(task))
    }

    deleteTask(id: number) {
        return firstValueFrom(this.taskRepository.deleteTask(id))
    }

    updateTask(task: UpdateTask) {
        return firstValueFrom(this.taskRepository.updateTask(task))
    }

    updateStatusTask(task: UpdateStatusTask) {
        return firstValueFrom(this.taskRepository.updateStatusTask(task))
    }

}