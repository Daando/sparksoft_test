import { createAsyncThunk } from "@reduxjs/toolkit";
import { sampleApi } from "../../helpers/api/ApiCall";
import { iUser } from "../../helpers/interfaces/User";
import { isUserArray } from "../../helpers/utils/Utils";

interface iApiRequestResponse {
    data: any;
    error: boolean;
}

export const fetchUsers = createAsyncThunk<iApiRequestResponse>(
    'remoteUsers/fetch',
    async () => {
        const response = await sampleApi.get('/users');
        if (isUserArray(response.data))
            return { data: response.data as iUser[], error: false };

        return { data: [], error: true }
    }
);