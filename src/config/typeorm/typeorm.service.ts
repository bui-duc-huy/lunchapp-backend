import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { getMetadataArgsStorage, createConnection } from 'typeorm'

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        return {
            type: 'mongodb',
            database:'lunchapp',
            url: 'mongodb+srv://duchuy:123@cluster0-i92zv.mongodb.net/test?retryWrites=true&w=majority',
            entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
            synchronize: true,
            useNewUrlParser: true,
            logging: true,
            useUnifiedTopology: true
        }
    }
}