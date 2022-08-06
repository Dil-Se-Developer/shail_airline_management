import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await axios.get(`http://localhost:5000/users`);
        // console.log(response.data);
        return response.data;
    }
);

export const addUserData = createAsyncThunk(
    "users/addUser",
    async (data) => {
        const response = await axios.post(
            `http://localhost:5000/users`,
            data
        );
        // return response
    }
);


const defaultUserState = {
    loginStatus: false,
    singleUserData: {},
    UsersData: [],
    FetchError: "",
};

const userDataSlice = createSlice({
    name: 'userData',
    initialState: defaultUserState,
    reducers: {
        setLoginUserStatus(state, { payload }) {
            localStorage.setItem("loginStaus", JSON.stringify(payload));
            return {
                ...state
            };
        },
        getLoginUserStatus(state) {
            const loginState = localStorage.getItem("loginStaus");
            return {
                ...state,
                loginStatus: JSON.parse(loginState),
            };
        },
        setSingleUser(state, { payload }) {
            localStorage.setItem("singleUserData", JSON.stringify(payload));
            return {
                ...state
            };
        },
        getSingleUser(state) {
            const singleState = localStorage.getItem("singleUserData");
            return {
                ...state,
                singleUserData: { ...JSON.parse(singleState) },
            };
        },
    },
    extraReducers: {
        [fetchUsers.pending]: () => {
            console.log("Pending UserData");
        },
        [fetchUsers.fulfilled]: (state, { payload }) => {
            console.log("Fetched UserData Successfully!");
            return { ...state, UsersData: [...payload] }
        },
        [fetchUsers.rejected]: () => {
            console.log("Rejected UserData");
        },
        [addUserData.pending]: () => {
            console.log("Pending AddUserData");
        },
        [addUserData.fulfilled]: () => {
            console.log("Fetched AddUserData Successfully!");
        },
        [addUserData.rejected]: () => {
            console.log("Rejected AddUserData");
        },
    },
});


export const { setLoginUserStatus, getLoginUserStatus, setSingleUser, getSingleUser } = userDataSlice.actions;
export default userDataSlice.reducer;