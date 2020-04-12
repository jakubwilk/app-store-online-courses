import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Courses } from './courses.entity';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Courses)
        private coursesRepository: Repository<Courses>,
    ) {}
    
    async displayAllCourses(): Promise<Courses[]> {
        return this.coursesRepository.find();
    }
    
    async displayPopularCourses() {
        return [
            {
                id: 1,
                name: 'WordPress Ninja - Tutorial for beginners!',
                rate: 9,
                author: 'John Krasinsky',
                category: 'Wordpress'
            },
            {
                id: 2,
                name: 'Java for donkeys',
                rate: 9,
                author: 'Bob Johnson',
                category: 'Java'
            },
            {
                id: 3,
                name: 'Write own plugins in Wordpress',
                rate: 8.8,
                author: 'Andrew Buda',
                category: 'Wordpress'
            },
            {
                id: 4,
                name: 'Spring is better than cool - Java for true hero',
                rate: 8,
                author: 'Matt Reves',
                category: 'Java'
            },
            {
                id: 5,
                name: 'Why you should learn Kotlin?',
                rate: 8,
                author: 'Ash Ketchup',
                category: 'Android'
            },
            {
                id: 6,
                name: 'Every single web page needs some HTML',
                rate: 7.9,
                author: 'Daniel Abrams',
                category: 'HTML'
            },
            {
                id: 7,
                name: 'NodeJS is everything what you need to be a truly programmer',
                rate: 7.8,
                author: 'Jason Born',
                category: 'JavaScript'
            },
            {
                id: 8,
                name: `Why you shouldn't use Hooks in your app?`,
                rate: 7.7,
                author: 'Gaben Potts',
                category: 'React'
            }
        ]
    }
}
