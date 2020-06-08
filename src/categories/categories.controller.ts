import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from "./categoriesDto";

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @Get()
    getAllCategories() {
        return this.categoriesService.displayAllCategories();
    }
    
    @Get('popular')
    getPopularCategory() {
        return this.categoriesService.displayPopularCategories();
    }

    @Post('create')
    createCategory(@Body() category: CategoriesDto) {
        return this.categoriesService.addCategory(category);
    }
}
