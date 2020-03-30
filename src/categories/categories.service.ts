import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
    displayPopularCategories() {
        return [
            {
                id: 1,
                name: 'Azure',
                courses: 4028
            },
            {
                id: 2,
                name: 'HTML5 & CSS3',
                courses: 3982
            },
            {
                id: 3,
                name: 'ReactJS',
                courses: 3320
            },
            {
                id: 4,
                name: 'VueJS',
                courses: 3199
            },
            {
                id: 5,
                name: 'jQuery',
                courses: 2981
            },
            {
                id: 6,
                name: 'Angular',
                courses: 2733
            },
            {
                id: 7,
                name: 'JavaScript',
                courses: 2137
            },
            {
                id: 8,
                name: 'Java',
                courses: 1337
            }
        ]
    }
}
