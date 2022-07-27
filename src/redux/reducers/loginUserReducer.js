import { ActionTypes } from "../constants/action-types";

const defaultUserState = {
    loginStatus: false
}

export const loginUserReducer = (state = defaultUserState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGIN_STATUS:
            return {
                ...state,
                loginStatus: payload
            }
        default:
            return state
    }
}