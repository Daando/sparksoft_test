import React from "react";
import { iUser } from '../helpers/interfaces/User';
import validator from 'validator';
import CreateUserFormUI from "./ui/CreateUserFormUI";

interface iUserContainerState {
    dbUsers: iUser[];
    tempUsers: iUser[];
}

class UserContainer extends React.Component {
    state: iUserContainerState = {
        dbUsers:[],
        tempUsers:[]
    }


}


