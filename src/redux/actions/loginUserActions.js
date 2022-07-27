import { ActionTypes } from "../constants/action-types";

export const loginUserActions = (payload) => {
    return {
        type: ActionTypes.LOGIN_STATUS,
        payload: payload
    }
}

