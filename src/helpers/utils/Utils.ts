import { iUser } from "../interfaces/User";

export function isEmptyOrSpaces(str: string): boolean {
    return str === null || str.match(/^ *$/) !== null;
}

export function isUser(arg: any): arg is iUser {
    const argAsiUser = arg as iUser;
    return argAsiUser.name !== undefined && argAsiUser.username !== undefined && argAsiUser.phone !== undefined && argAsiUser.email !== undefined && argAsiUser.website !== undefined;
}

export function isUserArray(arg: any): arg is iUser[] {
    if (!Array.isArray(arg))
        return false;

    return arg.filter<iUser>(isUser).length === arg.length;
}