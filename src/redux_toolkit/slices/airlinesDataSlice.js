import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAirlinesData = createAsyncThunk(
  "airlines/fetchAirlinesData",
  async () => {
    const response = await axios.get(`http://localhost:5000/airlinesdata`);
    // console.log(response.data);
    return response.data;
  }
);

const defaultAirlinesDataState = {
  AirlinesData: [],
  bookTicketStatus: false,
  bookTicketDetails: {},
};

const airlinesDataSlice = createSlice({
  name: "airlinesData",
  initialState: defaultAirlinesDataState,
  reducers: {
    setBookTicketStatus: (state, { payload }) => {
      localStorage.setItem("bookTicketStatus", JSON.stringify(payload));
      return state;
    },
    getBookTicketStatus: (state) => {
      const bookState = localStorage.getItem("bookTicketStatus");
      state.bookTicketStatus = JSON.parse(bookState);
    },
    bookTicketDetail: (state, { payload }) => {
      state.bookTicketDetails = { ...payload };
    },
  },
  extraReducers: {
    [fetchAirlinesData.pending]: () => {
      console.log("Pending AirlinesData");
    },
    [fetchAirlinesData.fulfilled]: (state, { payload }) => {
      console.log("Fetched AirlinesData Successfully!");
      state.AirlinesData = [...payload];
    },
    [fetchAirlinesData.rejected]: () => {
      console.log("Rejected AirlinesData");
    },
  },
});

export const { setBookTicketStatus, getBookTicketStatus, bookTicketDetail } =
  airlinesDataSlice.actions;
export default airlinesDataSlice.reducer;
