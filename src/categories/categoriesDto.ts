import {IsNotEmpty, MinLength} from "class-validator";
import {ValidationErrorMessage} from "../resources/validation.resources";

export class CategoriesDto {
    @IsNotEmpty({message: ValidationErrorMessage.CategoryTitleRequired})
    @MinLength(3, {message: ValidationErrorMessage.CategoryTitleTooShort})
    title: string;

    description: string;
}
