import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import * as bcrypt from 'bcrypt';
import { ValidationErrorMessage } from '../resources/validation.resources';
import { SuccessMessage } from '../resources/base.resources';
import { validationMessage } from '../utils/customMessages';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    async displayAllUsers(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    hashPassword(password: string) {
        const rounds = parseInt(process.env.HASH_PASSWORD_ROUND);

        bcrypt.genSalt(rounds, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                return hash;
            });
        });
    }

    async checkIfPasswordIsCorrect(password: string): Promise<boolean> {
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

    async createNewUser(username: string, email: string, password: string, repassword: string, accountType: boolean) {
        const validUser = await this.checkIfUsernameAlreadyExist(username);
        const validEmail = await this.checkIfEmailAlreadyExist(email);
        const validPassword = await this.checkIfPasswordIsCorrect(password);
        const validRepassword = await this.checkIfPasswordIsCorrect(repassword);
        const validRepeatPassword = await this.checkIfPasswordsAreTheSame(password, repassword);

        if (validUser) {
            return validationMessage(400, 'Bad Request', 'username', ValidationErrorMessage.UsernameAlreadyExist);
        }

        if (validEmail) {
            return validationMessage(400, 'Bad Request', 'email', ValidationErrorMessage.EmailAlreadyExist);
        }

        if (validPassword && validRepassword) {
            return validationMessage(400, 'Bad Request', 'password', ValidationErrorMessage.PasswordIncorrect);
        }

        if (!validRepeatPassword) {
            return validationMessage(400, 'Bad Request', 'repassword', ValidationErrorMessage.PasswordsAreNotTheSame);
        }

        return { statusCode: 201, success: 'Created', message: SuccessMessage.UserCreated }
    }
}