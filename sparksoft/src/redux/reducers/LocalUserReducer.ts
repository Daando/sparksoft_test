import { createReducer } from "@reduxjs/toolkit";
import { iUser } from "../../helpers/interfaces/User";
import { addUser, deleteUser } from "../actions/UserActions";

const localUserReducer = createReducer([] as iUser[], (builder) => {
    builder
        .addCase(addUser, (state, action) => [...state, action.payload])
        .addCase(deleteUser, (state, action) => [...state.filter(x => x.id !== action.payload)])
})

export default localUserReducer;