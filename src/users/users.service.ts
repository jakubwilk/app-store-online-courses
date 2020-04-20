import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import * as bcrypt from 'bcrypt';
import { ValidationErrorMessage } from '../resources/validation.resources';
import { SuccessMessage } from '../resources/base.resources';

export const customValidationMessage = (status: number, error: string, property: string, message: string) => {
    return {
        statusCode: status,
        error: error,
        message: [
            {
                property: property,
                children: [],
                constraints: {
                    value: message
                }
            }
        ]
    }
}

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    hashPassword(password: string) {
        const rounds = parseInt(process.env.HASH_PASSWORD_ROUND);

        bcrypt.genSalt(rounds, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                const newPassword = hash;

                return newPassword;
            });
        });
    }

    async checkIfPasswordIsCorrect(password: string): Promise<boolean> {
        const PasswordRegex = /([ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/g;

        return PasswordRegex.test(password);
    }

    async displayAllUsers(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async checkIfUsernameAlreadyExist(username: string) {
        const user = await this.usersRepository.findOne({ username: username });

        if (!user) return false;
        else return true;
    }

    async createNewUser(username: string, email: string, password: string, accountType: boolean) {
        const validUser = await this.checkIfUsernameAlreadyExist(username);
        const validPassword = await this.checkIfPasswordIsCorrect(password);

        if (validUser) {
            return customValidationMessage(400, 'Bad Request','username', ValidationErrorMessage.UsernameAlreadyExist);
        }

        if (validPassword) {
            return customValidationMessage(400, 'Bad Request','password', ValidationErrorMessage.PasswordIncorrect)
        }

        return { statusCode: 201, success: 'Created', message: SuccessMessage.UserCreated }
    }
}