import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from "@nestjs/common";
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateProjectDto } from "src/dto/project/creade-project.dto";
import { UpdateProjectDto } from "src/dto/project/update-project.dto";
import { AuthGuard } from "src/guards/auth-guard";
import { ProjectService } from "src/services/project.service";


@UseGuards(AuthGuard)
@Controller("/projects")
@ApiTags("Projects")
export class ProjectController {
    constructor(
        protected readonly projectsService: ProjectService,
    ) { }

    @Get()
    @ApiOperation({ summary: 'Get all projects' })
    @ApiResponse({ status: 403, description: "Invalid credentials" })
    @ApiResponse({ status: 200, description: "Success Response" })
    @ApiHeader({ name: 'Authorization', description: 'Authorization Code' })
    getProjects(@Request() request) {
        return this.projectsService.getProjects(request.user);
    }

    @Post()
    @ApiOperation({ summary: 'Create project' })
    @ApiResponse({ status: 403, description: "Invalid credentials" })
    @ApiResponse({ status: 200, description: "Success Response" })
    @ApiHeader({ name: 'Authorization', description: 'Authorization Code' })
    createProject(@Request() request, @Body() createProjectDto: CreateProjectDto) {
        return this.projectsService.createProject(createProjectDto, request.user);
    }

    @Put(":id")
    @ApiOperation({ summary: 'Update project' })
    @ApiResponse({ status: 403, description: "Invalid credentials" })
    @ApiResponse({ status: 200, description: "Success Response" })
    @ApiHeader({ name: 'Authorization', description: 'Authorization Code' })
    updateProject(@Param() id: { id: number }, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectsService.updateProject(id.id, updateProjectDto)
    }

    @Delete(":id")
    @ApiOperation({ summary: 'Delete project' })
    @ApiResponse({ status: 403, description: "Invalid credentials" })
    @ApiResponse({ status: 200, description: "Success Response" })
    @ApiHeader({ name: 'Authorization', description: 'Authorization Code' })
    deleteProject(@Param() id: number) {
        return this.projectsService.deleteProject(id)
    }
}

