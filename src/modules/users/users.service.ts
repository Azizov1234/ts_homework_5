import { Body, Injectable, Param, ParseIntPipe } from "@nestjs/common";
import fs from "fs"
import { join } from "path";
import { CreateUserDto } from "./dto/users.create.dto";
interface User{
    id:number,
    name:string,
    age:number
}
@Injectable()

export class UsersService{
    private filePath= join(process.cwd(),"src","modules","users.json")
  
    async getAllUsers(){
        let data = JSON.parse(fs.readFileSync(this.filePath,"utf-8")) 
        return data
    } 
    async createUser(user:CreateUserDto){
        const data= await this.getAllUsers()
        let id: number = data.length ? data[data.length - 1].id + 1 : 1
         let newuser={
            id,
            ...user
        }
        data.push(newuser) 

        fs.writeFileSync(this.filePath,JSON.stringify(data,null,4))
        return "User succesfully created"
    }
    async updateUser(id:number,payload:CreateUserDto){
        const data= await this.getAllUsers()
        const findUserIndex:number=data.findIndex((user:User)=>user.id===id)
        data[findUserIndex]={...data[findUserIndex] ,...payload}
        
        fs.writeFileSync(this.filePath,JSON.stringify(data,null,4))
        return "User succesfully updated"
        
        
    }
    async deleteUser(id:number){
        const data= await this.getAllUsers()

        const findUser=data.findIndex((user:User)=>user.id===id)
        console.log(findUser);
        
        if(findUser==-1){
            return "User is not found !"
        }
        data.splice(findUser,1)
        fs.writeFileSync(this.filePath,JSON.stringify(data,null,4))

        return "User succesfully deleted"
    }
}