import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { BaseEntity } from "./base";
import { Project } from "./project.model"

@Entity()
export class Task extends BaseEntity {
    @PrimaryColumn()
    id: number

    @Column()
    text: string

    @JoinColumn({ name: "projectId" })
    @ManyToOne(() => Project, (project) => project.tasks, { onDelete: "CASCADE" })
    project: Project;
}