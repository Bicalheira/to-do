import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { User } from "src/models/user.model";


@Injectable({
    providedIn: "root"
})

export class UserRepository {

    constructor(private http: HttpClient) {

    }

    login(login: Pick<User, "username" | "password">) {
        return this.http.post(environment.CONS_URL_APIBASE + "/login", login);
    }

    register(user: User) {
        return this.http.post(environment.CONS_URL_APIBASE + "/users", user);
    }
}