import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { BaseEntity } from "./base";
import { Project } from "./project.model"

@Entity()
export class Task extends BaseEntity {
    @PrimaryColumn()
    id: number

    @Column()
    text: string

    @ManyToOne(() => Project, (project) => project.tasks)
    project: Project;
}