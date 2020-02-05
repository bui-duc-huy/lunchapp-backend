import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { getMetadataArgsStorage, createConnection } from 'typeorm'

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        return {
            type: 'mongodb',
            url: '',
            entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
            synchronize: true,
            useNewUrlParser: true,
            logging: true
        }
    }
}