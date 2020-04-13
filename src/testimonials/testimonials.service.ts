import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testimonials } from './testimonials.entity';

@Injectable()
export class TestimonialsService {
    constructor(
        @InjectRepository(Testimonials)
        private testimonialsRepository: Repository<Testimonials>,
    ) {}
    
    async displayIndexOpinions() {
        return [
            {
                id: 1,
                author: 'David Benioff',
                description: 'The best e-learing platform in the whole Internet',
                created: '10/04/2020',
                status: true
            },
            {
                id: 2,
                author: 'Mark Wallberg',
                description: 'Movies and series are really boring. I needed something new in my life and I decided to be a programmer. This platform really helps me.',
                created: '09/04/2020',
                status: true,
            },
            {
                id: 3,
                author: 'Sara Mara',
                description: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
                created: '08/04/2020',
                status: true
            }
        ]
    }
}
