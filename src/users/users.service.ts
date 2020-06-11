import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { ValidationErrorMessage } from '../resources/validation.resources';
import { ErrorMessage, SuccessMessage } from '../resources/base.resources';
import { HttpStatusMessage } from '../resources/http.resources';
import { validationMessage } from '../utils/customMessages';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    async displayAllUsers(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async checkWhiteSpaces(field: string) {
        const whiteSpaceRegex = /\s+/g;

        return whiteSpaceRegex.test(field);
    }

    async checkIfFieldIsCorrect(password: string): Promise<boolean> {
        const PasswordRegex = /([ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/g;

        return PasswordRegex.test(password);
    }

    async checkIfPasswordsAreTheSame(password: string, repassword: string): Promise<boolean> {
        return password === repassword;
    }

    async checkIfUsernameAlreadyExist(username: string): Promise<boolean> {
        const user = await this.usersRepository.findOne({ username: username });

        if (!user) return false;
        else return true;
    }

    async checkIfEmailAlreadyExist(email: string): Promise<boolean> {
        const userEmail = await this.usersRepository.findOne({ email: email })

        if (!userEmail) return false;
        else return true;
    }

    async checkToken(token: string): Promise<any> {
        try {
            return await jwt.verify(token, process.env.JWT_SECRET);
        } catch(err) {
            return { userId: 0, username: null, message: "Invalid token" }
        }
    }

    async createNewUser(username: string, email: string, password: string, repassword: string, accountType: number) {
        const validUser = await this.checkIfUsernameAlreadyExist(username);
        const validUsername = await this.checkIfFieldIsCorrect(username);
        const validEmail = await this.checkIfEmailAlreadyExist(email);
        const validPassword = await this.checkIfFieldIsCorrect(password);
        const validRepassword = await this.checkIfFieldIsCorrect(repassword);
        const validRepeatPassword = await this.checkIfPasswordsAreTheSame(password, repassword);

        if (validUser) {
            return validationMessage(400, HttpStatusMessage.BadRequest, 'username', ValidationErrorMessage.UsernameAlreadyExist);
        } else if (validUsername) {
            return validationMessage(400, HttpStatusMessage.BadRequest, 'username', ValidationErrorMessage.UsernameIncorrect);
        } else if (validEmail) {
            return validationMessage(400, HttpStatusMessage.BadRequest, 'email', ValidationErrorMessage.EmailAlreadyExist);
        } else if (validPassword && validRepassword) {
            return validationMessage(400, HttpStatusMessage.BadRequest, 'password', ValidationErrorMessage.PasswordIncorrect);
        } else if (!validRepeatPassword) {
            return validationMessage(400, HttpStatusMessage.BadRequest, 'repassword', ValidationErrorMessage.PasswordsAreNotTheSame);
        } else {
            const User = new Users();
            User.username = username;
            User.password = password;
            User.email = email;
            User.accountType = accountType;

            const query = await this.usersRepository.save(User);

            if (query) {
                return { statusCode: 201, success: HttpStatusMessage.Created, message: SuccessMessage.UserCreated }
            } else {
                return validationMessage(500, HttpStatusMessage.ServerError, 'none', ErrorMessage.ServerUnableContinue);
            }
        }
    }

    async loginUser(login: string, password: string) {
        const user = await this.usersRepository.findOne({ where: { username: login } });
        const email = await this.usersRepository.findOne({ where: { email: login } });
        const verifyLogin = await this.checkWhiteSpaces(login);

        if (verifyLogin) {
            return validationMessage(400, HttpStatusMessage.BadRequest, 'login', ValidationErrorMessage.UsernameIncorrect);
        }

        if (user) {
            const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET);
            if (await argon2.verify(user.password, password)) {
                return { statusCode: 200, success: HttpStatusMessage.Logged, message: SuccessMessage.UserLogged, authToken: token };
            } else {
                return validationMessage(400, HttpStatusMessage.BadRequest, 'password', ValidationErrorMessage.PasswordWrong);
            }
        }

        if (email) {
            const token = jwt.sign({ userId: email.id, username: email.username }, process.env.JWT_SECRET);
            if (await argon2.verify(email.password, password)) {
                return { statusCode: 200, success: HttpStatusMessage.Logged, message: SuccessMessage.UserLogged, authToken: token };
            } else {
                return validationMessage(400, HttpStatusMessage.BadRequest, 'password', ValidationErrorMessage.PasswordWrong);
            }
        }

        return validationMessage(400, HttpStatusMessage.BadRequest, 'login', ValidationErrorMessage.LoginDoesntExist);
    }
}