import { createAction, nanoid } from "@reduxjs/toolkit";
import { iUser } from "../../helpers/interfaces/User";

export const addUser = createAction('users/add', (user: iUser) => {
    user.id = nanoid();
    return {
        payload: user as iUser
    }
});

export const deleteUser = createAction('users/delete', (id: string) => {
    return { payload: id }
});