import { iUser } from "./User";

export interface iMainState{
    isLoading:boolean;
    users:iUser[];
    tempUsers:iUser[];
    newUser:iUser
}