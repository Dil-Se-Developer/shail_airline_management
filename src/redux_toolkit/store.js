import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from './slices/userDataSlice';
import airlinesDataReducer from './slices/airlinesDataSlice';

const store = configureStore({
    reducer: {
        userData: userDataReducer,
        airlinesData: airlinesDataReducer,
    }
});

export default store;