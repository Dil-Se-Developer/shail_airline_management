import { ActionTypes } from "../constants/action-types";

const defaultAirlinesDataState = {
  AirlinesData: [],
  bookTicketStatus: false,
  bookTicketDetails: {},
};

export const airlinesDataReducer = (
  state = defaultAirlinesDataState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCH_AIRLINES_DATA:
      return {
        ...state,
        AirlinesData: [...payload],
      };
    case ActionTypes.BOOK_TICKET_STATUS:
      return {
        ...state,
      };
    case ActionTypes.BOOK_TICKET_STATUS_SET:
      localStorage.setItem("bookTicketStatus", JSON.stringify(payload));
      return {
        ...state,
      };
    case ActionTypes.BOOK_TICKET_STATUS_GET:
      const bookState = localStorage.getItem("bookTicketStatus");
      return {
        ...state,
        bookTicketStatus: JSON.parse(bookState),
      };
    case ActionTypes.BOOK_TICKET_DETAILS:
      return {
        ...state,
        bookTicketDetails: { ...payload },
      };
    default:
      return state;
  }
};
