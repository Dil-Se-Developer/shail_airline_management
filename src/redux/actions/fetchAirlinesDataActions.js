import axios from "axios";
import { fetchAirlinesData } from "./apiActions";

export const fetchAirlinesDataAction = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`http://localhost:5000/airlinesdata`);
      // console.log(response.data, 'fetchsection');
      dispatch(fetchAirlinesData(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
