import { Injectable } from "@nestjs/common";
import fs from "fs"
import { join } from "path";
import { CreateUserDto } from "./dto/users.create.dto";
@Injectable()
 
export class UsersService{
    private filePath= join(process.cwd(),"src","modules","users.json")
  
    async getAllUsers(){
        let data: CreateUserDto[]= JSON.parse(fs.readFileSync(this.filePath,"utf-8")) 
        return data
    } 
    async createUser(user:CreateUserDto){
        const data= await this.getAllUsers()
        data.push(user)
        fs.writeFileSync(this.filePath,JSON.stringify(data,null,4))
        return "User succesfully created"
    }
}