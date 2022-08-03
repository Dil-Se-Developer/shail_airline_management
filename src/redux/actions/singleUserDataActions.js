import { ActionTypes } from "../constants/action-types";

export const singleUserDataActions = (payload) => {
    return {
        type: ActionTypes.SINGLE_USER_DATA,
        payload: payload
    }
}

export const singleUserSetActions = (payload) => {
    return {
        type: ActionTypes.SINGLE_USER_SET_DATA,
        payload:payload
    }
}


export const singleUserGetActions = () => {
    return {
        type: ActionTypes.SINGLE_USER_GET_DATA
    }
}