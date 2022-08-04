import { ActionTypes } from "../constants/action-types";

const defaultUserState = {
  loginStatus: false,
  singleUserData: {},
  UsersData: [],
  FetchError: "",
};

export const userDataReducer = (
  state = defaultUserState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.LOGIN_STATUS:
      return {
        ...state,
      };
    case ActionTypes.LOGIN_STATUS_SET:
      localStorage.setItem("loginStaus", JSON.stringify(payload));
      return {
        ...state,
      };
    case ActionTypes.LOGIN_STATUS_GET:
      const loginState = localStorage.getItem("loginStaus");
      return {
        ...state,
        loginStatus: JSON.parse(loginState),
      };
    case ActionTypes.SINGLE_USER_DATA:
      return {
        ...state,
        singleUserData: { ...payload },
      };
    case ActionTypes.SINGLE_USER_SET_DATA:
      localStorage.setItem("singleUserData", JSON.stringify(payload));
      return {
        ...state,
      };
    case ActionTypes.SINGLE_USER_GET_DATA:
      const singleState = localStorage.getItem("singleUserData");
      return {
        ...state,
        singleUserData: { ...JSON.parse(singleState) },
      };
    case ActionTypes.FETCH_USERS_DATA:
      return {
        ...state,
        UsersData: [...payload],
      };

    case ActionTypes.ERROR_FETCH_USERS_DATA:
      return {
        ...state,
        FetchError: payload,
      };
    default:
      return state;
  }
};
