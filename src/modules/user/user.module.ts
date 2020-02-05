import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { UserResolver } from './user.resolver';

@Module({
    providers: [UserResolver],
    exports: [UserResolver]
})
export class UserModule { }
