import { Task } from "./task.model";
import { User } from "./user.model";

export class Project {
    id: number
    name: string
    tasks: Task[];
    user: User;

    constructor(id: number, name: string, tasks: Task[], user: User) {
        this.id = id;
        this.name = name;
        this.tasks = tasks;
        this.user = user
    }
}

export type FormProject = Pick<Project, "name">
export type UpdateProject = Pick<Project, "id" | "name">