import { Resolver, Query, Context, Args, Mutation } from "@nestjs/graphql";
import { UserEntity } from "./user.entity";

@Resolver()
export class UserResolver {
    private usersList = new UserEntity()

    @Query()
    async users(){
        return this.usersList
    }

    @Query()
    async me(@Context('currentUser') currentUser){
        return currentUser  
    }

    @Mutation()
    async createUser(@Args('input') input){
        const newUser = new UserEntity()
        newUser.password = input.password
        newUser.username = input.username
        newUser.fullname = input.fullname
        return newUser
    }
}