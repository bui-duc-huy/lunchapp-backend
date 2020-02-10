import {
    Entity,
    ObjectIdColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert
} from 'typeorm'
import * as uuid from 'uuid'

@Entity()
export class SiteEntity {
    @ObjectIdColumn()
    _id: string

    @Column()
    name: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @BeforeInsert()
    async b4create() {
        this._id = await uuid.v1()
        this.createdAt = (new Date()).toString()
    }
}