import { Project } from "./project.model"


export class User {

    id: number
    name: string
    username: string
    password: string
    projects: Project[];

    constructor(id: number, name: string, username: string, password: string, projects: Project[]) {
        this.id = id
        this.name = name;
        this.username = username;
        this.password = password;
        this.projects = projects;
    }


}

export type UserForm = Pick<User, "name" | "username" | "password">
export type LoginForm = Pick<User, "username" | "password">