import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { GraphqlService } from './config/graphql/graphql.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from './config/typeorm/typeorm.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync({
      useClass: GraphqlService
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeormService
    }),
    UserModule
  ],
})
export class AppModule { }
