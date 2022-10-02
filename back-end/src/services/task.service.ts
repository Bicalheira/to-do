import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTaskDto } from "src/dto/task/create-task.dto";
import { UpdateTaskDto } from "src/dto/task/update-task.dto";
import { Project } from "src/models/project.model";
import { Task } from "src/models/task.model";
import { Repository } from "typeorm";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        protected readonly taskRepository: Repository<Task>
    ) { }

    async getTasks(project: any) {
        return await this.taskRepository.find({
            where: { project: { id: project.id } }
        })
    }

    async createTask(createTaskDto: CreateTaskDto) {
        return await this.taskRepository.save({
            ...createTaskDto,
        })
    }

    async updateTask(id: number, updateTasktDto: UpdateTaskDto) {
        return await this.taskRepository.update({
            id,
        }, updateTasktDto);
    }

    async deleteTask(id: number) {
        await this.taskRepository.delete(id);
    }
}