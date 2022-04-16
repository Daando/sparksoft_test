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
    loading: 'idle',
    users: [] as iUser[]
}

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = 'failed';
                state.users = [];
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = "fullfilled";
                state.users = action.payload;
            })
    }
})

export default userSlice.reducer;