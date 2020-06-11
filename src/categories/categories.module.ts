import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CategoriesController} from './categories.controller';
import {CategoriesService} from './categories.service';
import {Categories} from './categories.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Categories])],
    controllers: [CategoriesController],
    providers: [CategoriesService],
    exports: [TypeOrmModule]
})
export class CategoriesModule {
}
