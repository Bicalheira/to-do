import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { User } from "src/models/user.model";
import { Project } from "src/models/project.model";


@Injectable({
    providedIn: "root"
})

export class ProjectRepository {

    constructor(private http: HttpClient) {

    }

    createProject(project: Pick<Project, "name">) {
        return this.http.post(environment.CONS_URL_APIBASE + "/projects", project);
    }

    updateProject(project: Project) {
        return this.http.put(environment.CONS_URL_APIBASE + "/projects/" + project.id, project);
    }

    deleteProject(project: Project) {
        return this.http.post(environment.CONS_URL_APIBASE + "/projects/" + project.id, project);
    }

    getProjects() {
        return this.http.get(environment.CONS_URL_APIBASE + "/projects");
    }
}