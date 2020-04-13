import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './categories.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Categories)
        private categoriesRepository: Repository<Categories>,
    ) {}
    
    async displayAllCategories(): Promise<Categories[]> {
        return this.categoriesRepository.find();
    }
    
    async displayPopularCategories() {
        return [
            {
                id: 1,
                name: 'Azure',
                courses: 4028,
                coverPhoto: 'https://i.imgur.com/GFbGZFw.jpg'
            },
            {
                id: 2,
                name: 'HTML5 & CSS3',
                courses: 3982,
                coverPhoto: 'https://i.imgur.com/5G5zWWj.jpg'
            },
            {
                id: 3,
                name: 'ReactJS',
                courses: 3320,
                coverPhoto: 'https://i.imgur.com/Cl1NAwK.jpg'
            },
            {
                id: 4,
                name: 'VueJS',
                courses: 3199,
                coverPhoto: 'https://i.imgur.com/jxcPQKj.jpg'
            },
            {
                id: 5,
                name: 'jQuery',
                courses: 2981,
                coverPhoto: 'https://i.imgur.com/aqK7xsi.png'
            },
            {
                id: 6,
                name: 'Angular',
                courses: 2733,
                coverPhoto: 'https://i.imgur.com/aqK7xsi.png'
            },
            {
                id: 7,
                name: 'JavaScript',
                courses: 2137,
                coverPhoto: 'https://i.imgur.com/aqK7xsi.png'
            },
            {
                id: 8,
                name: 'Java',
                courses: 1337,
                coverPhoto: 'https://i.imgur.com/cjli7SU.jpg'
            }
        ]
    }
}
