import {Controller, Get} from '@nestjs/common';
import {CoursesService} from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {
    }

    @Get()
    getAllCourses() {
        return this.coursesService.displayAllCourses();
    }

    @Get('popular')
    getPopularCourses() {
        return this.coursesService.displayPopularCourses();
    }
}