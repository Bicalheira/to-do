import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Task } from "./task.model";
import { User } from "./user.model";

@Entity()
export class Project extends BaseEntity {
    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Task, (task) => task.project)
    tasks: Task[];

    @ManyToOne(() => User, (user) => user.projects)
    user: User;
}