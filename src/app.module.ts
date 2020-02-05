import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { GraphqlService } from './config/graphql/graphql.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync({
      useClass: GraphqlService
    })
  ],
})
export class AppModule { }
