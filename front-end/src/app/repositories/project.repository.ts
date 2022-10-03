import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { FormProject, Project, UpdateProject } from "src/app/models/project.model";


@Injectable({
    providedIn: "root"
})

export class ProjectRepository {

    constructor(private http: HttpClient) {

    }

    createProject(project: FormProject) {
        return this.http.post(environment.CONS_URL_APIBASE + "projects", project);
    }

    updateProject(project: UpdateProject) {
        return this.http.put(environment.CONS_URL_APIBASE + "projects/" + project.id, project);
    }

    deleteProject(id: number) {
        return this.http.delete(environment.CONS_URL_APIBASE + "projects/" + id);
    }

    getProjects() {
        return this.http.get<Project[]>(environment.CONS_URL_APIBASE + "projects");
    }
}