import {Body, Controller, Get, HttpCode, Param, Post, Req, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/createUserDto';
import {ExistingUserDto} from './dto/existingUserDto';
import { diskStorage } from "multer";
import { extname } from 'path';
import {FileInterceptor} from "@nestjs/platform-express";
import {EditUserDto} from "./dto/editUserDto";

export const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Get()
    getUsersList() {
        return this.usersService.displayAllUsers();
    }

    @Post('create')
    createNewUser(@Body() newUser: CreateUserDto) {
        const {username, email, password, repassword, type} = newUser;

        return this.usersService.createNewUser(username, email, password, repassword, type);
    }

    @Post('login')
    loginUser(@Body() existingUser: ExistingUserDto) {
        const {login, password} = existingUser;

        return this.usersService.loginUser(login, password);
    }

    @Get('auth/:token')
    checkUserToken(@Req() req) {
        const { token } = req.params;
        return this.usersService.checkToken(token)
    }

    @Get('user/:id')
    getUser(@Req() req) {
        const {id} = req.params;

        return this.usersService.getUserData(id);
    }

    @Post('newUser')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: editFileName
        })
    }))
    addNewUser(@Body() data: EditUserDto, @UploadedFile() file) {
        return this.usersService.addNewUser(data, file);
    }

    @Post('edit')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: editFileName
        })
    }))
    editUser(@Req() req, @UploadedFile() file) {
        const {username} = req.params;

        return username;
    }

    @Get(':path')
    seeUploadedFile(@Param('path') image, @Res() res) {
        return res.sendFile(image, { root: './uploads' });
    }
}
