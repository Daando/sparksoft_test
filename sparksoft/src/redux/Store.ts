import { configureStore } from '@reduxjs/toolkit';
import { iDBUserData } from '../helpers/interfaces/User';
import UserActions from './actions/UserActions';
import { MainReducer } from './reducers/MainReducer';

export default configureStore({
    reducer: {
        users: UserActions
    }
});