
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum Roles {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}

export interface CreateSiteInput {
    name: string;
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

export interface UpdateSiteInput {
    name?: string;
}

export interface LoginResponse {
    token?: string;
    role?: string;
}

export interface IMutation {
    createSite(input: CreateSiteInput): Site | Promise<Site>;
    updateSite(_id: string, input: UpdateSiteInput): boolean | Promise<boolean>;
    deleteSite(_id: string): boolean | Promise<boolean>;
    deleteSites(): boolean | Promise<boolean>;
    createUser(input?: CreateUserInput): User | Promise<User>;
    login(input?: LoginInput): LoginResponse | Promise<LoginResponse>;
    deleteAllUser(): boolean | Promise<boolean>;
    changePassword(newPassword?: string, idUser?: string): User | Promise<User>;
    lockAndUnlockUser(idUser?: string, reason?: string): boolean | Promise<boolean>;
}

export interface IQuery {
    sites(): Site[] | Promise<Site[]>;
    sitesByIds(ids?: string[]): Site[] | Promise<Site[]>;
    site(_id: string): Site | Promise<Site>;
    me(): User | Promise<User>;
    users(): User[] | Promise<User[]>;
    user(id?: string): User | Promise<User>;
}

export interface Site {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
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
