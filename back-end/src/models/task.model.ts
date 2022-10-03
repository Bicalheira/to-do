import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { BaseEntity } from "./base";
import { Project } from "./project.model"

export enum TaskStatus {
    TODO,
    DONE,
}


@Entity()
export class Task extends BaseEntity {
    @PrimaryColumn()
    id: number

    @Column()
    text: string

    @ManyToOne(() => Project, (project) => project.tasks, { onDelete: "CASCADE" })
    @JoinColumn()
    project: Project;

    @Column()
    projectId: number;

    @Column({
        type: "enum",
        enum: TaskStatus,
        default: TaskStatus.TODO
    })
    status: TaskStatus;

}