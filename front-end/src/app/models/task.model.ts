import { Project } from "./project.model"

export class Task {

    id: number
    text: string
    status: number
    updatedAt: string;
    project: Project;

    constructor(id: number, text: string, status: number,updatedAt: string, project: Project) {
        this.id = id;
        this.updatedAt = updatedAt
        this.text = text;
        this.status = status
        this.project = project
    }
}

export type FormTask = Pick<Task, "text"> & { projectId: number }
export type UpdateTask = Pick<Task, "id" | "text">
export type UpdateStatusTask = Pick<Task, "id" | "status">