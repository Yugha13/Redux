import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchUser = createAsyncThunk(
    "userInfo",
    async () => {
        const datas = axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res:any) => {
            console.log(res.data);
            return res.data
        })
        return datas;
    }
)
