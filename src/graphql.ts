
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum Roles {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}

export interface CreateUserInput {
    username: string;
    password: string;
    fullname: string;
    role: Roles;
}

export interface LoginInput {
    username: string;
    password: string;
}

export interface LoginResponse {
    token?: string;
    role?: string;
}

export interface IMutation {
    createUser(input?: CreateUserInput): User | Promise<User>;
    login(input?: LoginInput): LoginResponse | Promise<LoginResponse>;
    deleteAllUser(): boolean | Promise<boolean>;
    changePassword(newPassword?: string, idUser?: string): User | Promise<User>;
}

export interface IQuery {
    me(): User | Promise<User>;
    users(): User[] | Promise<User[]>;
    user(id?: string): User | Promise<User>;
}

export interface User {
    _id?: string;
    fullname?: string;
    username?: string;
    password?: string;
    isLocked?: boolean;
    reason?: string;
    createdAt?: string;
    role?: Roles;
}
