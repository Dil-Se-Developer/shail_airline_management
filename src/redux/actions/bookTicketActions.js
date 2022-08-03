import { ActionTypes } from "../constants/action-types";

export const bookTicketActions = (payload) => {
    return {
        type: ActionTypes.BOOK_TICKET_STATUS,
        payload: payload
    }
}

export const bookTicketSetActions = (payload) => {
    return {
        type: ActionTypes.BOOK_TICKET_STATUS_SET,
        payload:payload
    }
}


export const bookTicketGetActions = () => {
    return {
        type: ActionTypes.BOOK_TICKET_STATUS_GET
    }
}
