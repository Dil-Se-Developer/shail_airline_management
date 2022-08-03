import { ActionTypes } from "../constants/action-types";

const defaultBookTicketState = {
    bookTicketStatus: false
}

export const bookTicketReducer = (state = defaultBookTicketState, { type, payload }) => {
    switch (type) {
        case ActionTypes.BOOK_TICKET_STATUS:
            return {
                ...state
            }
        case ActionTypes.BOOK_TICKET_STATUS_SET:
            localStorage.setItem("bookTicketStatus", JSON.stringify(payload));
            return {
                ...state
            }
        case ActionTypes.BOOK_TICKET_STATUS_GET:
            const bookState = localStorage.getItem("bookTicketStatus");
            return {
                ...state,
                bookTicketStatus: JSON.parse(bookState)
            }
        default:
            return state
    }
}