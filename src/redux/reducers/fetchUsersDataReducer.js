import { ActionTypes } from "../constants/action-types";

const defaultUsersState = {
    UsersData: [],
    FetchError: ''
}

export const fetchUsersDataReducer = (state = defaultUsersState, {type, payload}) => {
    switch (type) {
        case ActionTypes.FETCH_USERS_DATA : 
        return {
            ...state,
            UsersData: [...payload]
        }

        case ActionTypes.ERROR_FETCH_USERS_DATA: 
        return {
            ...state,
            FetchError: payload
        }
        default: 
        return state
    }
}