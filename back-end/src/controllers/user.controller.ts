import { Body, Controller, Post, Request } from "@nestjs/common";
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/dto/user/create-user.dto";
import { LoginUserDto } from "src/dto/user/login-user.dto";
import { UserService } from "src/services/user.service";

@Controller("")
@ApiTags("Users")
export class UserController {
    constructor(
        protected readonly userService: UserService,
    ) { }

    @Post("/login")
    @ApiOperation({ summary: 'Signed' })
    @ApiResponse({ status: 403, description: "Invalid credentials" })
    @ApiResponse({ status: 200, description: "Success Response" })
    @ApiHeader({ name: 'Authorization', description: 'Authorization Code' })
    login(@Body() loginUserDto: LoginUserDto) {
        return this.userService.login(loginUserDto);
    }

    @Post("/users")
    @ApiOperation({ summary: 'Create user' })
    @ApiResponse({ status: 403, description: "Invalid credentials" })
    @ApiResponse({ status: 200, description: "Success Response" })
    @ApiHeader({ name: 'Authorization', description: 'Authorization Code' })
    createUser(@Request() request, @Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto, request.user);
    }
}