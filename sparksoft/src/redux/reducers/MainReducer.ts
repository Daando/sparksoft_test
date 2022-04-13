import { combineReducers } from 'redux'
import UserActions from '../actions/UserActions';

export const MainReducer = combineReducers({ users:UserActions });