import {Param, Body, Get, Post, Put, Delete, JsonController, QueryParam} from "routing-controllers";
import {User} from "../Entity/User";
import {getConnectionManager, Repository} from "typeorm";
import {EntityFromBody, EntityFromParam} from "typeorm-routing-controllers-extensions";

@JsonController()
export class UserController {

    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getConnectionManager().get().getRepository(User);
    }

    // check user exist
    @Get("/users/exist")
    async getUsers(@QueryParam("email_id") emailId: string) {
        const count : number = await this.userRepository.count({ email: emailId});
        return count == 1;
    }

    // user registration
    @Post("/users")
    post(@EntityFromBody() user: User ){
        return this.userRepository.save(user);
    }

    // user login
    @Post("/users/login")
    async getOne(@Body() body:object  ) {
        // @ts-ignore
        const count : number  = await  this.userRepository.count({email:body.email, password: body.password});
        return count == 1;
    }
}
