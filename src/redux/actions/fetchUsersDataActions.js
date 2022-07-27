import { fetchUsersData, errorFetchUsersData } from "./apiActions";
import axios from "axios";

export const fetchUsersAction = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`http://localhost:5000/users`);
      // console.log(response.data);
      dispatch(fetchUsersData(response.data));
    } catch (error) {
      dispatch(errorFetchUsersData(error.message));
    }
  };
};

export const addUserData = (data) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/users`,
        data
      );
      dispatch(fetchUsersAction());
      return response
    } catch (error) {
      return error.message
    }
  };
};

