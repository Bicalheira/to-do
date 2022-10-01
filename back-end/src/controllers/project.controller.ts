import { Controller, Get, Request } from "@nestjs/common";
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProjectService } from "src/services/project.service";


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
}

