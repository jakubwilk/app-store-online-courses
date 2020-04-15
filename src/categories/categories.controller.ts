import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}
    
    @Get('popular')
    getPopularCategory() {
        return this.categoriesService.displayPopularCategories();
    }
}
