import { Injectable } from "@nestjs/common";
import { LoginInput, User, CreateUserInput } from "src/graphql";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
    async createUser(input: CreateUserInput): Promise<User>{
        const newUser = new UserEntity()
        newUser.password = input.password
        newUser.username = input.username
        newUser.fullname = input.fullName
        return
    }
}