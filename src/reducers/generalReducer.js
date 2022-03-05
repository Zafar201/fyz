import { PROPERTIES_LIST_FAIL, PROPERTIES_LIST_REQUEST, PROPERTIES_LIST_SUCCESS } from "../constants/generalConstants";

export const propertyListReducer = (state = { loading:true,property:[] }, action) => {
    switch (action.type) {
      case PROPERTIES_LIST_REQUEST:
        return { loading: true };
      case PROPERTIES_LIST_SUCCESS:
        return { loading: false, property: action.payload };
    
      case PROPERTIES_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };