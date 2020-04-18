import { Body, Controller, Get, Post } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { NewUserDto } from './users.interface';

export const UserFieldsMinLength = {
    username: 3,
    login: 3,
    password: 8,
    email: 5
}

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get('list')
    getUsersList() {
        return this.usersService.displayAllUsers();
    }
    
    @Post('create')
    createNewUser(@Body() newUser: NewUserDto) {
        const { username, email, password, type } = newUser;

        if (!this.usersService.checkFieldsLength(username, UserFieldsMinLength.username)) {
            return { status: 200, type: 'error', message: 'Username should contain minimum 3 characters' };
        }
        
        if (!this.usersService.checkFieldsLength(email, UserFieldsMinLength.email)) {
            return { status: 200, type: 'error', message: 'User email is too short. Please enter properly address email' };
        }
    
        if (!this.usersService.checkFieldsLength(password, UserFieldsMinLength.password)) {
            return { status: 200, type: 'error', message: 'Password should contain minimum 8 characters' };
        }
        
        return { status: 200, type: 'success', message: 'Account created. Redirecting to login page...' };
    }
}
