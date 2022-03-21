import { ADD_PROPERTIES_FAIL, ADD_PROPERTIES_REQUEST, ADD_PROPERTIES_RESET, ADD_PROPERTIES_SUCCESS, DELETE_PROPERTIES_FAIL, DELETE_PROPERTIES_REQUEST, DELETE_PROPERTIES_RESET, DELETE_PROPERTIES_SUCCESS, DELETE_ROOM_FAIL, DELETE_ROOM_REQUEST, DELETE_ROOM_RESET, DELETE_ROOM_SUCCESS, GET_ROOMS_DETAILS_FAIL, GET_ROOMS_DETAILS_REQUEST, GET_ROOMS_DETAILS_SUCCESS, PROPERTIES_DETAILS_FAIL, PROPERTIES_DETAILS_REQUEST, PROPERTIES_DETAILS_SUCCESS, PROPERTIES_LIST_FAIL, PROPERTIES_LIST_REQUEST, PROPERTIES_LIST_SUCCESS, ROOM_DETAILS_FAIL, ROOM_DETAILS_REQUEST, ROOM_DETAILS_SUCCESS, UPDATE_PROPERTIES_FAIL, UPDATE_PROPERTIES_REQUEST, UPDATE_PROPERTIES_RESET, UPDATE_PROPERTIES_SUCCESS, UPDATE_ROOM_FAIL, UPDATE_ROOM_REQUEST, UPDATE_ROOM_RESET, UPDATE_ROOM_SUCCESS } from "../constants/generalConstants";

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


export const addRoomReducer = (state = { loading: true }, action) => {
  switch (action.type) {
      case ADD_PROPERTIES_REQUEST:
          return { loading: true }
      case ADD_PROPERTIES_SUCCESS:
          return { loading: false, newroom: action.payload ,}
      case ADD_PROPERTIES_FAIL:
          return { loading: false, error: action.payload }
      default:
          return state;
  }
}
export const getRoomsDetailsReducer =(state={loading:true,rooms:[]},action)=>{
  switch(action.type){
    case GET_ROOMS_DETAILS_REQUEST:
      return {loading:true}
    case GET_ROOMS_DETAILS_SUCCESS:
      return {loading:false,rooms:action.payload.rooms}
    case GET_ROOMS_DETAILS_FAIL:
      return {loading:false, error:action.payload}
    default:
      return state;      
  }
}


export const roomDetailsReducer =(state={loading:true},action)=>{
  switch(action.type){
    case ROOM_DETAILS_REQUEST:
      return {loading:true}
    case ROOM_DETAILS_SUCCESS:
      return {loading:false,room:action.payload}
    case ROOM_DETAILS_FAIL:
      return {loading:false, error:action.payload}
    default:
      return state;      
  }
}

export const roomDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ROOM_REQUEST:
      return { loading: true };
    case DELETE_ROOM_SUCCESS:
      return { loading: false, success: true };
    case DELETE_ROOM_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_ROOM_RESET:
      return {};
    default:
      return state;
  }
};



export const roomUpdateReducer= (state= {}, action)=>{
  switch(action.type){
    case UPDATE_ROOM_REQUEST:
      return {loading:true};
    case UPDATE_ROOM_SUCCESS:
      return {loading:false,success:true};
    case UPDATE_ROOM_FAIL:
      return {loading:false,error:action.payload}
    case UPDATE_ROOM_RESET:
      return {};
    default:
      return state;        
  }
}