import { IsNumber, IsOptional, IsString, Length, Max, MaxLength, MinLength } from "class-validator"


export class CreateUserDto{
    
    @IsString()
    @MaxLength(8)
    @MinLength(3)
    name:string

    @IsOptional()
    @IsNumber()
    age:number
}