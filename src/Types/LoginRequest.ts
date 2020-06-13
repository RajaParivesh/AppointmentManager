import {IsEmail, MinLength} from "class-validator";

class LoginRequest {
    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}

export {LoginRequest}