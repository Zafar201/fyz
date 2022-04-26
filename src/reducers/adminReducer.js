import {CREATE_PASSWORD_REQUEST,CREATE_PASSWORD_SUCCESS,CREATE_PASSWORD_FAIL,CREATE_PASSWORD_RESET, APPROVE_BOOKING_FAIL, APPROVE_BOOKING_REQUEST, APPROVE_BOOKING_RESET, APPROVE_BOOKING_SUCCESS,APPROVE_USER_REQUEST,APPROVE_USER_SUCCESS,APPROVE_USER_FAIL,APPROVE_USER_RESET, COUNT_LIST_FAIL, COUNT_LIST_REQUEST, COUNT_LIST_SUCCESS, GET_BOOKING_LIST_FAIL, GET_BOOKING_LIST_REQUEST, GET_BOOKING_LIST_SUCCESS, GET_SIGNUP_REQUEST,GET_SIGNUP_SUCCESS,GET_SIGNUP_FAIL, REJECT_BOOKING_FAIL, REJECT_BOOKING_REQUEST, REJECT_BOOKING_RESET, REJECT_BOOKING_SUCCESS ,REJECT_USER_REQUEST,REJECT_USER_SUCCESS,REJECT_USER_FAIL,REJECT_USER_RESET} from "../constants/adminConstants";

export const countListReducer = (state = { loading:true,count:[] }, action) => {
    switch (action.type) {
      case COUNT_LIST_REQUEST:
        return { loading: true };
      case COUNT_LIST_SUCCESS:
        return { loading: false, count: action.payload }; 
      case COUNT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const bookingListReducer = (state = { loading:true,property:[] }, action) => {
    switch (action.type) {
      case GET_BOOKING_LIST_REQUEST:
        return { loading: true };
      case GET_BOOKING_LIST_SUCCESS:
        return { loading: false, property: action.payload }; 
      case GET_BOOKING_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const approveBookingReducer= (state= {}, action)=>{
    switch(action.type){
      case APPROVE_BOOKING_REQUEST:
        return {loading:true};
      case APPROVE_BOOKING_SUCCESS:
        return {loading:false,success:true};
      case APPROVE_BOOKING_FAIL:
        return {loading:false,error:action.payload}
      case APPROVE_BOOKING_RESET:
        return {};
      default:
        return state;        
    }
  }


  export const rejectBookingReducer= (state= {}, action)=>{
    switch(action.type){
      case REJECT_BOOKING_REQUEST:
        return {loading:true};
      case REJECT_BOOKING_SUCCESS:
        return {loading:false,success:true};
      case REJECT_BOOKING_FAIL:
        return {loading:false,error:action.payload}
      case REJECT_BOOKING_RESET:
        return {};
      default:
        return state;        
    }
  }


  export const getSignupRequestReducer=(state={loading:true,users:[]},action)=>{
    switch(action.type){
      case GET_SIGNUP_REQUEST:
        return {loading:true};
      case GET_SIGNUP_SUCCESS:
        return {loading:false,users:action.payload.users};
      case GET_SIGNUP_FAIL:
        return {loading:false,error:action.payload}
      
      default:
        return state;        
    }
  }

  export const userApproveReducer= (state= {}, action)=>{
    switch(action.type){
      case APPROVE_USER_REQUEST:
        return {loading:true};
      case APPROVE_USER_SUCCESS:
        return {loading:false,success:true};
      case APPROVE_USER_FAIL:
        return {loading:false,error:action.payload}
      case APPROVE_USER_RESET:
        return {};
      default:
        return state;        
    }
  }

  
  export const userRejectReducer= (state= {}, action)=>{
    switch(action.type){
      case REJECT_USER_REQUEST:
        return {loading:true};
      case REJECT_USER_SUCCESS:
        return {loading:false,success:true};
      case REJECT_USER_FAIL:
        return {loading:false,error:action.payload}
      case REJECT_USER_RESET:
        return {};
      default:
        return state;        
    }
  }

  export const passwordCreateReducer= (state= {}, action)=>{
    switch(action.type){
      case CREATE_PASSWORD_REQUEST:
        return {loading:true};
      case CREATE_PASSWORD_SUCCESS:
        return {loading:false,success:true};
      case CREATE_PASSWORD_FAIL:
        return {loading:false,error:action.payload}
      case CREATE_PASSWORD_RESET:
        return {};
      default:
        return state;        
    }
  }