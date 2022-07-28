import { combineReducers } from "redux";
import { loginUserReducer } from "./loginUserReducer";
import { singleUserDataReducer } from "./singleUserDataReducer";
import { fetchUsersDataReducer } from "./fetchUsersDataReducer";
import { fetchAirlinesDataReducer } from "./fetchAirlinesDataReducer";
import { bookTicketReducer } from "./bookTicketReducer";
import { bookTicketDetailReducer } from "./bookTicketDetailReducer";


const reducers = combineReducers({
  loginStatus: loginUserReducer,
  singleUserData: singleUserDataReducer,
  fetchUsersData: fetchUsersDataReducer,
  airlinesData: fetchAirlinesDataReducer,
  bookTicketStatus: bookTicketReducer,
  bookTicketDetails: bookTicketDetailReducer
});

export default reducers;
