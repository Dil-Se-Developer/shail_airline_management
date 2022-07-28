import { ActionTypes } from "../constants/action-types";

const defaultState = {
    bookTicketDetails : {}
}

export const bookTicketDetailReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ActionTypes.BOOK_TICKET_DETAILS:
            return {
                ...state,
                bookTicketDetails : {...payload},
            }
        default:
            return state
    }
}