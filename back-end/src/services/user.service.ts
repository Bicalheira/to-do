import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/dto/user/create-user.dto";
import { sign } from 'jsonwebtoken';
import { LoginUserDto } from "src/dto/user/login-user.dto";
import { User } from "src/models/user.model";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        protected readonly userRepository: Repository<User>
    ) { }

    async createUser(createUserProjectDto: CreateUserDto, user: any) {
        return await this.userRepository.save({
            ...createUserProjectDto,
            user,
        })
    }

    async login(loginUserDto: LoginUserDto) {
        const user = await this.userRepository.findOne({
            where: { username: loginUserDto.username }
        });

        if (!user) {
            throw new NotFoundException();
        }

        if (user.password !== loginUserDto.password) {
            throw new NotFoundException();
        }

        return this.getToken(user);
    }

    async getToken(user: User) {
        const expiresIn = '12h';

        delete user.password;

        const token = sign(Object.assign({}, user), 'secret', { expiresIn });

        return {
            accessToken: token,
            expiresIn
        }
    }

}