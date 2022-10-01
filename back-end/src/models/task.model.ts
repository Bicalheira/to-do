import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { Project } from "./project.model"

@Entity()
export class Task extends BaseEntity {
    @PrimaryColumn()
    id: number

    @Column()
    text: string

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date
    
    @Column()
    finishedAt: Date

    @ManyToOne(() => Project, (project) => project.tasks)
    project: Project;
}