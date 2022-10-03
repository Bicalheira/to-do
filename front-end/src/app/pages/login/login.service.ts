import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { UserRepository } from "src/app/repositories/user.repository";
import { LoginForm } from "src/app/models/user.model";
import { DataService } from "src/app/services/data.service";

@Injectable({
    providedIn: "root"
})

export class LoginService {

    constructor(private userRepository: UserRepository, private dataService: DataService) {

    }

    async login(user: LoginForm) {
        const response = await firstValueFrom(this.userRepository.login(user));

        if (response) {
            this.dataService.setSession("token", response)
        }
    }
}