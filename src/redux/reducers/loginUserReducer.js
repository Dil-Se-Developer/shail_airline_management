import { ActionTypes } from "../constants/action-types";

// const loginState = localStorage.getItem("loginStaus");

const defaultUserState = {
    loginStatus: false
}

export const loginUserReducer = (state = defaultUserState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGIN_STATUS:
            return {
                ...state
            }
        case ActionTypes.LOGIN_STATUS_SET:
            localStorage.setItem("loginStaus", JSON.stringify(payload));
            return {
                ...state
            }
        case ActionTypes.LOGIN_STATUS_GET:
            const loginState = localStorage.getItem("loginStaus");
            return {
                ...state,
                loginStatus: JSON.parse(loginState)
            }
        default:
            return state
    }
}