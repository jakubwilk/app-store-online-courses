import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CategoriesController} from './categories.controller';
import {CategoriesService} from './categories.service';
import {Categories} from './categories.entity';
import {CoursesService} from "../courses/courses.service";
import {Courses} from "../courses/courses.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Categories, Courses])],
    controllers: [CategoriesController],
    providers: [CategoriesService, CoursesService],
    exports: [TypeOrmModule]
})
export class CategoriesModule {
}
