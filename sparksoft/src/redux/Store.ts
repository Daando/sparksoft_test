import { configureStore, createStore, applyMiddleware } from '@reduxjs/toolkit';
import UserActions from './actions/UserActions';
import thunk from "redux-thunk"

export const store = configureStore({
    reducer: {
        remoteUsers: UserActions
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch