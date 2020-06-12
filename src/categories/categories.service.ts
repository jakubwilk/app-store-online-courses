import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ValidationErrorMessage} from '../resources/validation.resources';
import {ErrorMessage, SuccessMessage} from '../resources/base.resources';
import {HttpStatusMessage} from '../resources/http.resources';
import {Categories} from './categories.entity';
import {CategoriesDto} from './categoriesDto';
import {validationMessage} from '../utils/customMessages';
import {Courses} from "../courses/courses.entity";

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Categories)
        private categoriesRepository: Repository<Categories>,

        @InjectRepository(Courses)
        private coursesRepository: Repository<Courses>,
    ) {
    }

    async displayAllCategories(): Promise<Categories[]> {
        return this.categoriesRepository.find();
    }

    async displayPopularCategories() {
        return [
            {
                id: 1,
                name: 'Azure',
                courses: 4028,
                coverPhoto: 'https://i.imgur.com/GFbGZFw.jpg'
            },
            {
                id: 2,
                name: 'HTML5 & CSS3',
                courses: 3982,
                coverPhoto: 'https://i.imgur.com/5G5zWWj.jpg'
            },
            {
                id: 3,
                name: 'ReactJS',
                courses: 3320,
                coverPhoto: 'https://i.imgur.com/Cl1NAwK.jpg'
            },
            {
                id: 4,
                name: 'VueJS',
                courses: 3199,
                coverPhoto: 'https://i.imgur.com/jxcPQKj.jpg'
            },
            {
                id: 5,
                name: 'jQuery',
                courses: 2981,
                coverPhoto: 'https://i.imgur.com/aqK7xsi.png'
            },
            {
                id: 6,
                name: 'Angular',
                courses: 2733,
                coverPhoto: 'https://i.imgur.com/aqK7xsi.png'
            },
            {
                id: 7,
                name: 'JavaScript',
                courses: 2137,
                coverPhoto: 'https://i.imgur.com/aqK7xsi.png'
            },
            {
                id: 8,
                name: 'Java',
                courses: 1337,
                coverPhoto: 'https://i.imgur.com/cjli7SU.jpg'
            }
        ]
    }

    async addCategory(category: CategoriesDto, file) {
        const {name, description, isVisible} = category;
        const path = 'http://localhost:44125/categories/';
        const filename = file === undefined ? 'default-category.jpg' : file.filename;

        const categoryName = await this.categoriesRepository.findOne({name: name});
        if (categoryName) {
            return {statusCode: 400, type: 'error', message: 'Category with this name actually exists'};
        }

        const Category = new Categories();
        Category.name = name;
        Category.description = description;
        Category.coverPhoto = path + filename;
        Category.isVisible = isVisible;

        const query = await this.categoriesRepository.save(Category);

        if (query) {
            return {statusCode: 201, success: HttpStatusMessage.Created, messages: SuccessMessage.CategoryCrated};
        } else {
            return validationMessage(500, HttpStatusMessage.ServerError, 'none', ErrorMessage.ServerUnableContinue);
        }
    }

    async editCategory(category: CategoriesDto, id: number, file) {
        const {name, description, isVisible} = category;
        const path = 'http://localhost:44125/categories/';
        const filename = file === undefined ? 'default-category.jpg' : file.filename;

        const _category = await this.categoriesRepository.findOne({id: id});

        if (!_category) {
            return {statusCode: 400, type: 'error', message: 'Category not found'};
        }

        _category.name = name;
        _category.description = description;
        _category.isVisible = isVisible;

        if (file !== undefined) {
            _category.coverPhoto = path + filename;
        }

        const query = await this.categoriesRepository.save(_category);

        if (!query) {
            return validationMessage(500, HttpStatusMessage.ServerError, 'none', ErrorMessage.ServerUnableContinue);
        }

        return {statusCode: 200, type: 'success', message: 'Category updated'};
    }

    async deleteCategory(id: number) {
        const category = await this.categoriesRepository.findOne({id: id});

        if (!category) {
            return {statusCode: 400, type: 'error', message: 'Category not found'};
        }

        const query = await this.categoriesRepository.delete({id: id});

        if (!query) {
            return validationMessage(500, HttpStatusMessage.ServerError, 'none', ErrorMessage.ServerUnableContinue);
        }

        const courses = await this.coursesRepository.find({ categoryId: id })

        if (courses.length > 0) {
            courses.forEach(item => item.categoryId = 0);

            const updateCourses = await this.coursesRepository.save(courses);

            if (!updateCourses) {
                return validationMessage(500, HttpStatusMessage.ServerError, 'none', ErrorMessage.ServerUnableContinue);
            }

            return {statusCode: 200, type: 'success', message: 'Category removed and all related courses change category to Not Set'};
        }

        return {statusCode: 200, type: 'success', message: 'Category removed'};
    }

    async getCategory(id: number) {
        const category = await this.categoriesRepository.findOne({id: id});

        if (!category) {
            return {statusCode: 400, type: 'error', message: 'Category not found'};
        }

        return {statusCode: 200, type: 'success', message: category};
    }
}
