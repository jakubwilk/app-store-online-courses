import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

export const customValidationMessage = (property: string, message: string) => {
    return {
        statusCode: 400,
        error: 'Bad Request',
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
    
    async displayAllUsers(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async checkIfUsernameAlreadyExist(username: string): Promise<boolean> {
        const user = await this.usersRepository.findOne({ username: username });

        if (user) return true;
        else return false;
    }
}