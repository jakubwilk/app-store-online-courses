import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get('list')
    getUsersList() {
        return this.usersService.displayAllUsers();
    }

    @Post('create')
    createNewUser(@Body() newUser: CreateUserDto) {
        const { username, email, password, type } = newUser;

        return this.usersService.createNewUser(username, email, password, type);
    }
}
