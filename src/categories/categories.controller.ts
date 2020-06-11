import {Controller, Get, Post, Body, Req, UseInterceptors, UploadedFile} from '@nestjs/common';
import {CategoriesService} from './categories.service';
import {CategoriesDto} from "./categoriesDto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {
    }

    @Get()
    getAllCategories() {
        return this.categoriesService.displayAllCategories();
    }

    @Get('popular')
    getPopularCategory() {
        return this.categoriesService.displayPopularCategories();
    }

    @Post('create')
    @UseInterceptors(FileInterceptor('file'))
    createCategory(@Body() category, @UploadedFile() file) {
        return this.categoriesService.addCategory(category, file);
    }

    @Post('edit')
    editCategory(@Body() category: CategoriesDto, @Req() req) {
        const {id} = req.body;

        return this.categoriesService.editCategory(category, id);
    }

    @Post('delete')
    deleteCategory(@Req() req) {
        const {id} = req.body;

        return this.categoriesService.deleteCategory(id);
    }

    @Get('category/:id')
    getCategory(@Req() req) {
        const {id} = req.params;

        return this.categoriesService.getCategory(id);
    }
}
