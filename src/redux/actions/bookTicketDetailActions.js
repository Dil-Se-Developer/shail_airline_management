import { ActionTypes } from "../constants/action-types";

export const bookTicketDetailActions = (payload) => {
    return {
        type: ActionTypes.BOOK_TICKET_DETAILS,
        payload: payload
    }
}