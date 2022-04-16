import React, { Component, FC, Props, ReactElement, useEffect, useState } from "react";
import validator from 'validator';
import CreateUserFormUI from "./ui/CreateUserFormUI";
import { connect, createSelectorHook, useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/UserSlice";
import { AnyAction, bindActionCreators } from "redux";
import { iDBUserData, iUser } from "../helpers/interfaces/User";
import UserContainerUI from "./ui/UserContainerUI";
import { ThunkDispatch } from "redux-thunk";
import { createSelector } from "reselect";
import { RootState, store } from "../redux/Store";

const UserContainer = () => {
    //const remoteUsersSelector = createSelector((state: RootState) => state.remoteUsers, (state: iDBUserData) => state)
    //const [remoteUsers, setremoteUsers] = useState(useSelector(remoteUsersSelector));
    const remoteUsers: iDBUserData = useSelector((state: RootState) => state.remoteUsers);
    const [userInfoDialogOpen, setuserInfoDialogOpen] = useState<boolean>(false);
    const [selectedUser, setselectedUser] = useState<iUser | undefined>(undefined);

    const openInfoModal = (user: iUser): void => {
        setselectedUser(user);
        setuserInfoDialogOpen(true);
    }

    useEffect(() => {
        store.dispatch(fetchUsers());
    }, [])

    return (<UserContainerUI
        remoteUserData={remoteUsers}
        selectedUser={selectedUser as iUser}
        dialogIsOpen={userInfoDialogOpen}
        onDialogClose={() => setuserInfoDialogOpen(false)}
        openInfoModal={openInfoModal}
    />);
}

export default UserContainer;
