import { ActionTypes } from "../constants/action-types";

export const loginUserActions = (payload) => {
    return {
        type: ActionTypes.LOGIN_STATUS,
        payload: payload
    }
}

export const loginUserStatusSetActions = (payload) => {
    return {
        type: ActionTypes.LOGIN_STATUS_SET,
        payload:payload
    }
}


export const loginUserStatusGetActions = () => {
    return {
        type: ActionTypes.LOGIN_STATUS_GET
    }
}



