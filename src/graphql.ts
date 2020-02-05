
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum Roles {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER",
    GUEST = "GUEST"
}

export interface CreateUserInput {
    username: string;
    password: string;
    fullName: string;
}

export interface LoginInput {
    username: string;
    password: string;
}

export interface LoginResponse {
    token?: string;
    roles?: string;
}

export interface IMutation {
    createUser(input?: CreateUserInput): User | Promise<User>;
    login(input?: LoginInput): LoginResponse | Promise<LoginResponse>;
}

export interface IQuery {
    me(): User | Promise<User>;
    users(): User[] | Promise<User[]>;
    user(id?: string): User | Promise<User>;
}

export interface User {
    _id: string;
    fullName: string;
    username: string;
    password: string;
    idLocked?: boolean;
    reason: string;
    createAt: number;
    roles: Roles;
}
