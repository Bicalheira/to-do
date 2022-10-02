import { Task } from "./task.model";
import { User } from "./user.model";

export class Project {
    id: number

    name: string

    tasks: Task[];

    user: User;
}