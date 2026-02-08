import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, Query, Redirect, Req, Res } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/users.create.dto";




@Controller("users")


export class UsersController{
    constructor(private readonly usersService: UsersService){}

    // @Get('single/:id/:userId')
    // getAllUsers(
    //     @Param('id',ParseIntPipe) id:number,
    //     @Param("userId",ParseIntPipe) userId:number,
    //     @Query("name") name: string,
    //     @Query("search") search: string
    // ){
    //     console.log(id,userId,name,search);
        
    //     return this.usersService.getAllUsers()
    // }
    // @Get("all")
    // // @Redirect("http://google.com",301)
    // getAll(@Req() req:Request,@Res() res){
    //     // console.log(res.json({name:"Ali"}));
    //     // return
        
    // }
    // @Post()
    // createUser(@Body() payload: CreateUserDto){
    //     console.log(payload);
        
    // }
  @Get()
    getAllusers(){
        return this.usersService.getAllUsers()
    }   
  @Post()
  async createUser(@Body() payload:CreateUserDto){
     const data= await this.usersService.createUser(payload)
     return data

  }
  @Put("update/:id")
  async updateUser(@Param("id",ParseIntPipe) id: number,@Body() payload:CreateUserDto) {
    const data= await this.usersService.updateUser(id,payload)
    return data
  }
  @Delete("delete/:id")
  async deleteUser(@Param("id",ParseIntPipe) id:number){
    const data= await this.usersService.deleteUser(id)
    return data
  }
}