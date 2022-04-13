import { createReducer, createSlice } from "@reduxjs/toolkit";
import { iMainState } from "../../helpers/interfaces/MainState";

const initialState: iMainState = {
    isLoading: false,
    users: [],
    newUser: {
        email: '',
        name: '',
        company: {
            bs: '',
            catchPhrase: '',
            name: ''
        },
        address: {
            city: '',
            geo: {
                lat: '',
                lng: ''
            },
            street: '',
            suite: '',
            zipcode: ''
        },
        phone: '',
        username: '',
        website: ''
    },
    tempUsers: []
}
