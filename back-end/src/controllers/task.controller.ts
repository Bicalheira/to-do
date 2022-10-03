import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from "@nestjs/common";
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTaskDto } from "src/dto/task/create-task.dto";
import { UpdateTaskDto } from "src/dto/task/update-task.dto";
import { AuthGuard } from "src/guards/auth-guard";
import { TaskService } from "src/services/task.service";


@UseGuards(AuthGuard)
@Controller("/tasks")
@ApiTags("Tasks")
export class TaskController {
    constructor(
        protected readonly tasksService: TaskService,
    ) { }

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 403, description: "Invalid credentials" })
    @ApiResponse({ status: 200, description: "Success Response" })
    @ApiHeader({ name: 'Authorization', description: 'Authorization Code' })
    getTasks(@Param() projectId) {
        return this.tasksService.getTasks(projectId);
    }

    @Post()
    @ApiOperation({ summary: 'Create task' })
    @ApiResponse({ status: 403, description: "Invalid credentials" })
    @ApiResponse({ status: 200, description: "Success Response" })
    @ApiHeader({ name: 'Authorization', description: 'Authorization Code' })
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.createTask(createTaskDto);
    }

    @Put(":id")
    @ApiOperation({ summary: 'Update task' })
    @ApiResponse({ status: 403, description: "Invalid credentials" })
    @ApiResponse({ status: 200, description: "Success Response" })
    @ApiHeader({ name: 'Authorization', description: 'Authorization Code' })
    updateTask(@Param() id: { id: number }, @Body() updateTaskDto: UpdateTaskDto) {
        return this.tasksService.updateTask(id.id, updateTaskDto)
    }

    @Delete(":id")
    @ApiOperation({ summary: 'Delete task' })
    @ApiResponse({ status: 403, description: "Invalid credentials" })
    @ApiResponse({ status: 200, description: "Success Response" })
    @ApiHeader({ name: 'Authorization', description: 'Authorization Code' })
    deleteTask(@Param() id: number ) {
        return this.tasksService.deleteTask(id)
    }
}

