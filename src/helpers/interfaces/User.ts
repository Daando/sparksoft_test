import { iAddress } from "./Address";
import { iCompany } from "./Company";


export interface iUser {
    id?: number | string;
    name: string;
    username: string;
    email: string;
    address: iAddress;
    phone: string;
    website: string;
    company: iCompany;
}

export interface iDBUserData {
    apicallstate: 'idle' | 'pending' | 'fullfilled' | 'failed';
    users: iUser[];
}
