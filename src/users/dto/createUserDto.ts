import { Length, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ValidationErrorMessage } from "../../resources/validation.resources";

export class CreateUserDto {
    @Length(3, 25, { message: ValidationErrorMessage.UsernameWrongFormat })
    @IsNotEmpty({ message: ValidationErrorMessage.UsernameRequired })
    username: string;

    @IsEmail({}, { message: ValidationErrorMessage.EmailWrongFormat })
    @IsNotEmpty({ message: ValidationErrorMessage.EmailRequired })
    email: string;

    @MinLength(8, { message: ValidationErrorMessage.PasswordWrongFormat })
    @IsNotEmpty({ message: ValidationErrorMessage.PasswordRequired })
    password: string;

    @IsNotEmpty({ message: ValidationErrorMessage.PasswordRequired })
    repassword: string

    @IsNotEmpty({ message: ValidationErrorMessage.AccountRequired })
    type: boolean;
}