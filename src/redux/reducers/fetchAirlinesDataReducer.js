import { ActionTypes } from "../constants/action-types";

const defaultAirlinesState  = {
    AirlinesData: []
}

export const fetchAirlinesDataReducer = (state = defaultAirlinesState, {type, payload}) => {
    switch (type) {
        case ActionTypes.FETCH_AIRLINES_DATA:
            return {
                ...state, 
                AirlinesData: [...payload]
            }
        default:
            return state    
    }
}