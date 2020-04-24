import { IsNotEmpty } from 'class-validator';
import { ValidationErrorMessage } from "../../resources/validation.resources";

export class ExistingUserDto {
    @IsNotEmpty({message: ValidationErrorMessage.UsernameRequired})
    login: string;

    @IsNotEmpty({message: ValidationErrorMessage.PasswordRequired})
    password: string;
}