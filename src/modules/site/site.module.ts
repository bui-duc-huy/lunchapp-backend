import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { SiteEntity } from './site.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteResolver } from './site.resolver';


@Module({
    imports: [TypeOrmModule.forFeature([SiteEntity])],
    providers: [SiteResolver],
    exports: [SiteResolver]
})
export class SiteModule { }
