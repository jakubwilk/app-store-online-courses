import { Controller, Get, Post, Body, Req } from '@nestjs/common';
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

    @Post('edit')
    editCategory(@Body() category: CategoriesDto, @Req() req) {
        const { id } = req.body;

        return this.categoriesService.editCategory(category, id);
    }

    @Post('delete')
    deleteCategory(@Req() req) {
        const { id } = req.body;

        return this.categoriesService.deleteCategory(id);
    }

    @Get('category/:id')
    getCategory(@Req() req) {
        const { id } = req.params;

        return this.categoriesService.getCategory(id);
    }
}
