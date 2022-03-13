import { ADD_PROPERTIES_FAIL, ADD_PROPERTIES_REQUEST, ADD_PROPERTIES_RESET, ADD_PROPERTIES_SUCCESS, DELETE_PROPERTIES_FAIL, DELETE_PROPERTIES_REQUEST, DELETE_PROPERTIES_RESET, DELETE_PROPERTIES_SUCCESS, PROPERTIES_DETAILS_FAIL, PROPERTIES_DETAILS_REQUEST, PROPERTIES_DETAILS_SUCCESS, PROPERTIES_LIST_FAIL, PROPERTIES_LIST_REQUEST, PROPERTIES_LIST_SUCCESS, UPDATE_PROPERTIES_FAIL, UPDATE_PROPERTIES_REQUEST, UPDATE_PROPERTIES_RESET, UPDATE_PROPERTIES_SUCCESS } from "../constants/generalConstants";

export const propertyListReducer = (state = { loading:true,properties:[] }, action) => {
    switch (action.type) {
      case PROPERTIES_LIST_REQUEST:
        return { loading: true };
      case PROPERTIES_LIST_SUCCESS:
        return { loading: false, properties: action.payload };
    
      case PROPERTIES_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };




  export const addproperrtyReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ADD_PROPERTIES_REQUEST:
            return { loading: true }
        case ADD_PROPERTIES_SUCCESS:
            return { loading: false, newproperty: action.payload }
        case ADD_PROPERTIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


export const propertyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROPERTIES_REQUEST:
      return { loading: true };
    case DELETE_PROPERTIES_SUCCESS:
      return { loading: false, success: true };
    case DELETE_PROPERTIES_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_PROPERTIES_RESET:
      return {};
    default:
      return state;
  }
};

export const propertyDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PROPERTIES_DETAILS_REQUEST:
      return { loading: true };
    case PROPERTIES_DETAILS_SUCCESS:
      return { loading: false, property: action.payload.property };
    case PROPERTIES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const propertyUpdateReducer= (state= {}, action)=>{
  switch(action.type){
    case UPDATE_PROPERTIES_REQUEST:
      return {loading:true};
    case UPDATE_PROPERTIES_SUCCESS:
      return {loading:false,success:true};
    case UPDATE_PROPERTIES_FAIL:
      return {loading:false,error:action.payload}
    case UPDATE_PROPERTIES_RESET:
      return {};
    default:
      return state;        
  }
}