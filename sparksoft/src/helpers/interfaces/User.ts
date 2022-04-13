import { iAddress } from "./Address";
import { iCompany } from "./Company";


export interface iUser {
    id?: number;
    name: string;
    username: string;
    email: string;
    address: iAddress;
    phone: string;
    website: string;
    company: iCompany;
}

export interface iDBUserData {
    loading: 'idle' | 'pending' | 'fullfilled' | 'failed';
    users: iUser[];
}

export interface iLocalUserData {
    tempUsers: iUser[];
    newUser: iUser;
}