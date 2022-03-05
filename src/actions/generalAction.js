import axios from "axios";
import { PROPERTIES_LIST_FAIL, PROPERTIES_LIST_REQUEST, PROPERTIES_LIST_SUCCESS } from "../constants/generalConstants";

export const listProperties = () => async (dispatch) => {
    dispatch({ type: PROPERTIES_LIST_REQUEST });
    console.log("heloo1");
    try {    
      const { data } = await axios.get('https://tawi-backend.herokuapp.com/api/users/get-properties')      
      dispatch({ type: PROPERTIES_LIST_SUCCESS, payload: data.properties }); 
      console.log(data.properties,'data');
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PROPERTIES_LIST_FAIL, payload: message });
  
    }
  };