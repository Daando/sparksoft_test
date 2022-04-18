import { configureStore } from '@reduxjs/toolkit';
import UserActions from './slices/UserSlice';
import localUserReducer from './reducers/LocalUserReducer';

export const store = configureStore({
    reducer: {
        remoteUsers: UserActions,
        localUsers: localUserReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch