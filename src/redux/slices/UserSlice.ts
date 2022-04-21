import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sampleApi } from "../../helpers/api/ApiCall";
import { iDBUserData, iUser } from "../../helpers/interfaces/User";
import { fetchUsers } from "../thunks/RemoteUserThunk";

const initialState: iDBUserData = {
    apicallstate: 'idle',
    users: [] as iUser[]
}

const userSlice = createSlice({
    name: 'remoteUsers',
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
                if (!action.payload.error) {
                    state.apicallstate = "fullfilled";
                    state.users = action.payload.data;
                }
                else{
                    state.apicallstate = 'failed';
                    state.users = [];
                }
            })
    }
})

export default userSlice.reducer;