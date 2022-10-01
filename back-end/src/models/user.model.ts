import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { BaseEntity } from "./base";
import { Project } from "./project.model"

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    username: string

    @Column()
    password: string

    @OneToMany(() => Project, (project) => project.user)
    projects: Project[];
}