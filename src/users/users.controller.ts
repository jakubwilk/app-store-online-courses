import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { customValidationMessage, UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
import { ValidationErrorMessage } from "../resources/validation.resources";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get('list')
    getUsersList() {
        return this.usersService.displayAllUsers();
    }

    @HttpCode(201)
    @Post('create')
    createNewUser(@Body() newUser: CreateUserDto) {
        const { username, email, password, type } = newUser;

        if (this.usersService.checkIfUsernameAlreadyExist(username)) {
            customValidationMessage('username', ValidationErrorMessage.UsernameAlreadyExist);
        }
        
        return { statusCode: 201, success: 'Created', message: 'Account created. Redirecting to login page...' };
    }
}
