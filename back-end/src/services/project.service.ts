import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProjectDto } from "src/dto/project/creade-project.dto";
import { UpdateProjectDto } from "src/dto/project/update-project.dto";
import { Project } from "src/models/project.model";
import { Repository } from "typeorm";

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        protected readonly projectRepository: Repository<Project>
    ) { }

    async getProjects(user: any) {
        return await this.projectRepository.find({
            where: { user: { id: user.id } }
        })
    }

    async createProject(createProjectDto: CreateProjectDto, user: any) {
        return await this.projectRepository.save({
            ...createProjectDto,
            user,
        })
    }

    async updateProject(id: number, updateProjectDto: UpdateProjectDto) {
        return await this.projectRepository.update({
            id,
        }, updateProjectDto);
    }

    async deleteProject(id: number) {
        await this.projectRepository.delete(id);
    }
}