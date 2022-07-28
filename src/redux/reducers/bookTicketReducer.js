import { ActionTypes } from "../constants/action-types";

const defaultBookTicketState = {
    bookTicketStatus: false
}

export const bookTicketReducer = (state = defaultBookTicketState, { type, payload }) => {
    switch (type) {
        case ActionTypes.BOOK_TICKET_STATUS:
            return {
                ...state,
                bookTicketStatus: payload
            }
        default:
            return state
    }
}