import { Resolver, Query, Context, Args, Mutation } from "@nestjs/graphql";
import { UserEntity, CreateUserInput, LoginInput } from "./user.entity";
import { Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ApolloError } from 'apollo-server-core'
import { LoginResponse } from "src/graphql";
import * as jwt from 'jsonwebtoken'

@Resolver()
export class UserResolver {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository : MongoRepository<UserEntity>,
    ){}

    @Query()
    async users(): Promise<UserEntity[]>{
        return await this.userRepository.find({})
    }

    @Query()
    async me(@Context('currentUser') currentUser: UserEntity) : Promise<UserEntity>{
        return currentUser  
    }

    @Mutation()
    async createUser(@Args('input') input: CreateUserInput){
        const { username, password, fullname, role } = input

        const existedUser = await this.userRepository.findOne({ username })

        if (existedUser) {
            throw new ApolloError('username has existed', '409')
        }

        const newUser = new UserEntity()
        newUser.password = password
        newUser.username = username
        newUser.fullname = fullname
        newUser.role = role

        const savedUser = await this.userRepository.save(newUser)

        return savedUser
    }

    @Mutation()
    async deleteAllUser(): Promise<Boolean>{
        await this.userRepository.deleteMany({})
        return true
    }

    @Mutation()
    async changePassword(@Args('newPassword') newPassword: string, @Args('idUser') idUser: string): Promise<UserEntity>{
        const _id = idUser
        
        const foundUser = await this.userRepository.findOne({_id})

        foundUser.password = await foundUser.newPassword(newPassword)

        const savedUser = await this.userRepository.save(foundUser)

        return savedUser
    }

    @Mutation()
    async login(@Args('input') input: LoginInput): Promise<LoginResponse>{
        const { username, password } = input

        const foundUser = await this.userRepository.findOne({username})

        if (!foundUser || !(await foundUser.matchPassword(password))) {
            throw new ApolloError('Incorrect username or password' , '409')
        }

        const hashToken = {
            currentUser : foundUser
        }

        const token = await jwt.sign(hashToken, process.env.SECRET_KEY)

        return {
            role: foundUser.role,
            token: token
        }
    }
}