import {
	Entity,
	ObjectIdColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert,
	BeforeUpdate
} from 'typeorm'
import * as uuid from 'uuid'
import * as bcrypt from 'bcrypt'
import{ 
    IsNotEmpty,
    Length,
    IsEmail,
    Min,
    Max,
    IsDate,
    IsString,
    MinLength,
    IsBoolean
}
from 'class-validator'

export class CreateUserInput {
	@MinLength(4, {
		message: 'Your username must be at least 4 characters'
	})
	@IsString()
	@IsNotEmpty({ message: 'Your username can not be blank' })
    username: string

    @MinLength(4, {
		message: 'Your username must be at least 4 characters'
	})
	@IsString()
	@IsNotEmpty({ message: 'Your fullname can not be blank' })
	fullname: string

	@Length(1, 8, {
		message: 'Your password must be between 1 and 8 characters'
	})
	@IsString()
	@IsNotEmpty({ message: 'Your password can not be blank' })
	password: string

	@IsString()
	@IsNotEmpty({ message: 'Your password can not be blank' })
	role: string

}

export class UpdateUserInput {
	@Length(1, 8, {
		message: 'Your password must be between 1 and 8 characters.'
	})
	@IsString()
	@IsNotEmpty({ message: 'Your password can not be blank.' })
    password: string
    
    @Length(1, 8, {
		message: 'Your password must be between 1 and 8 characters.'
	})
	@IsString()
	@IsNotEmpty({ message: 'Your password can not be blank.' })
    username: string
}

@Entity()
export class UserEntity {

    @ObjectIdColumn()
    _id: string

    @Column()
    @IsNotEmpty()
    username: string

    @Column()
    @IsNotEmpty()
    fullname: string

    @Column()
    @IsNotEmpty()
    password: string

    @Column()
	@IsBoolean()
	@IsNotEmpty()
	isLocked: boolean

	@Column()
	@IsString()
	reason: string

	@CreateDateColumn()
	createdAt: Date

    @BeforeInsert()
    async beforeRegister(){
        this._id = await uuid.v1()
        this.password = await bcrypt.hash(this.password, 10)
        this.createdAt = new Date()
        this.isLocked = false
        this.reason = ""
    }

    async matchPassword(password){
        return await bcrypt.compare(password, this.password)
    }
}