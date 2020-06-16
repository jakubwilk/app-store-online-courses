import {Controller, Get, Post, Body, Req, UseInterceptors, UploadedFile, Res, Param} from '@nestjs/common';
import {CategoriesService} from './categories.service';
import {CategoriesDto} from "./categoriesDto";
import {FileInterceptor} from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from 'path';

export const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};

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
    createCategory(@Body() category) {
        return this.categoriesService.addCategory(category.data);
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

    @Get(':path')
    seeUploadedFile(@Param('path') image, @Res() res) {
        return res.sendFile(image, { root: './uploads' });
    }
}
