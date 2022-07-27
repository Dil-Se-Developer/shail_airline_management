import { combineReducers } from "redux";
import { loginUserReducer } from "./loginUserReducer";
import { singleUserDataReducer } from "./singleUserDataReducer";
import { fetchUsersDataReducer } from "./fetchUsersDataReducer";
import { fetchAirlinesDataReducer } from "./fetchAirlinesDataReducer";

const reducers = combineReducers({
  loginStatus: loginUserReducer,
  singleUserData: singleUserDataReducer,
  fetchUsersData: fetchUsersDataReducer,
  airlinesData: fetchAirlinesDataReducer,
});

export default reducers;
