import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "src/models/project.model";
import { Repository } from "typeorm";

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        protected readonly projectRepository: Repository<Project>
    ) { }

    getProjects(user) {
        return this.projectRepository.find({
            where: { user: { id: user.id } }
        })
    }
}