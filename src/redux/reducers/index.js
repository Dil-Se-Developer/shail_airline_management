import { combineReducers } from "redux";
import { userDataReducer } from "./userDataReducer";
import { airlinesDataReducer } from "./airlinesDataReducer";


const reducers = combineReducers({
  userData: userDataReducer,
  airlinesData: airlinesDataReducer,
});

export default reducers;
