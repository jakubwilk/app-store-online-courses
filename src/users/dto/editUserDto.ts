import {Length, IsEmail, IsNotEmpty, MinLength} from 'class-validator';
import {ValidationErrorMessage} from "../../resources/validation.resources";

export class EditUserDto {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    description: string;
    photo: string;
}