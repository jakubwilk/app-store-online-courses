import { Body, Controller, Get, Post } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { NewUserDto } from './users.interface';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get('list')
    getUsersList() {
        return this.usersService.displayAllUsers();
    }
    
    @Post('create')
    createNewUser(@Body() newUser: NewUserDto) {
        console.log(newUser);
    }
}
