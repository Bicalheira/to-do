import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { UserRepository } from "src/app/repositories/user.repository";
import { UserForm } from "src/app/models/user.model";

@Injectable({
    providedIn: "root"
})

export class RegisterService {

    constructor(private userRepository: UserRepository) {

    }

    register(user: UserForm) {
        return firstValueFrom(this.userRepository.register(user));
    }
}