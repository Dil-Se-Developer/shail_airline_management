import { ActionTypes } from "../constants/action-types";

const defaultState = {
  singleUserData: {},
};

export const singleUserDataReducer = (
  state = defaultState,
  { type, payload }
) => {
  switch (type) {
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
        singleUserData: {...JSON.parse(singleState)},
      };
    default:
      return state;
  }
};
