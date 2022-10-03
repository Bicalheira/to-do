import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { LoginForm, UserForm } from "src/app/models/user.model";


@Injectable({
    providedIn: "root"
})

export class UserRepository {

    constructor(private http: HttpClient) {

    }

    login(login: LoginForm) {
        return this.http.post(environment.CONS_URL_APIBASE + "login", login);
    }

    register(user: UserForm) {
        return this.http.post(environment.CONS_URL_APIBASE + "users", user);
    }
}