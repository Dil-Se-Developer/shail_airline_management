import { ActionTypes } from "../constants/action-types";

export const fetchUsersData = (usersdata) => {
  return {
    type: ActionTypes.FETCH_USERS_DATA,
    payload: usersdata,
  };
};

export const errorFetchUsersData = (error) => {
  return {
    type: ActionTypes.ERROR_FETCH_USERS_DATA,
    payload: error,
  };
};

export const fetchAirlinesData = (airlinesdata) => {
  return {
    type: ActionTypes.FETCH_AIRLINES_DATA,
    payload: airlinesdata,
  };
};
