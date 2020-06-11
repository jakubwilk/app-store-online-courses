import { Body, Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
import { ExistingUserDto } from './dto/existingUserDto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get('list')
    getUsersList() {
        return this.usersService.displayAllUsers();
    }

    @Post('create')
    createNewUser(@Body() newUser: CreateUserDto) {
        const { username, email, password, repassword, type } = newUser;

        return this.usersService.createNewUser(username, email, password, repassword, type);
    }

    @Post('login')
    loginUser(@Body() existingUser: ExistingUserDto) {
        const { login, password } = existingUser;

        return this.usersService.loginUser(login, password);
    }

    @Get('auth/:token')
    checkUserToken(@Req() req) {
        const { token } = req.params;
        return this.usersService.checkToken(token)
    }

    @Get('user/:id')
    getUser(@Req() req) {
        const { id } = req.params;
        
        return this.usersService.getUserData(id);
    }

    @Post('edit')
    editUser(@Req() req) {
        const { username } = req.params;

        return username;
    }
}
