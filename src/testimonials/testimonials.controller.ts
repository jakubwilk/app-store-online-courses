import {Controller, Get} from '@nestjs/common';
import {TestimonialsService} from './testimonials.service';

@Controller('testimonials')
export class TestimonialsController {
    constructor(private testimonialsService: TestimonialsService) {
    }

    @Get('homepage')
    getHomePageOpinions() {
        return this.testimonialsService.displayIndexOpinions();
    }
}
