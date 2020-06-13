import {Param, Body, Get, Post, Put, Delete, JsonController, QueryParam} from "routing-controllers";

@JsonController()
export class UserController {

    @Get("/users/exist")
    getUsers(@QueryParam("limit") limit: number) {
    }

    @Post("/user/register")
    post(@Body() user:{email:any, name:any, password:any }) {
        return user;
    }

    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }
}
