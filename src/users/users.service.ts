import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}
    
    async displayAllUsers(): Promise<Users[]> {
        return this.usersRepository.find();
    }
    
    checkFieldsLength(userData: string, fieldMinLength: number): boolean {
        if (userData.length >= fieldMinLength) {
            return true;
        }
        return false;
    }
}
