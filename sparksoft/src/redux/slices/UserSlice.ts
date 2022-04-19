import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sampleApi } from "../../helpers/api/ApiCall";
import { iDBUserData, iUser } from "../../helpers/interfaces/User";

export const fetchUsers = createAsyncThunk(
    'users/fetch',
    async () => {
        const response = await sampleApi.get('/users');
        return response.data
    }
);

const initialState: iDBUserData = {
    apicallstate: 'idle',
    users: [] as iUser[]
}

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.apicallstate = 'pending';
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.apicallstate = 'failed';
                state.users = [];
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.apicallstate = "fullfilled";
                state.users = action.payload;
            })
    }
})

export default userSlice.reducer;