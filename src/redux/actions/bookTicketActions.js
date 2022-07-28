import { ActionTypes } from "../constants/action-types";

export const bookTicketActions = (payload) => {
    return {
        type: ActionTypes.BOOK_TICKET_STATUS,
        payload: payload
    }
}