import {Body, Get, Post, JsonController, QueryParam, NotFoundError, ForbiddenError} from "routing-controllers";
import {User} from "../Entity/User";
import {getConnectionManager, Repository} from "typeorm";
import {EntityFromBody} from "typeorm-routing-controllers-extensions";
import {LoginRequest} from "../Types/LoginRequest";
import {Authorization} from "../Utils/Authorization";
import * as crypto from "crypto";

const passwordSalt: string = "anotherRandomString";

@JsonController()
export class UserController {

    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getConnectionManager().get().getRepository(User);
    }

    // check user exist
    @Get("/users/exist")
    async getUsers(@QueryParam("email_id") emailId: string) {
        const count: number = await this.userRepository.count({email: emailId});
        return count == 1;
    }

    // user registration
    @Post("/users")
    post(@EntityFromBody() user: User) {
        user.password = UserController.generateHash(user.password);
        return this.userRepository.save(user);
    }

    private static generateHash(string: string) {
        // @ts-ignore
        return crypto.createHash('sha256', passwordSalt)
            .update(string)
            .digest('base64');
    }

    // user login
    @Post("/users/login")
    async login(@Body({validate: true}) loginRequest: LoginRequest) {

        const queryParams = {
            email: loginRequest.email,
            password: UserController.generateHash(loginRequest.password)
        }
        const users = await this.userRepository.find(queryParams);

        if (users.length == 0) throw new ForbiddenError();

        return {token: Authorization.sign({user: users[0]})};
    }
}
