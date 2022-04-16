import { APPROVE_BOOKING_FAIL, APPROVE_BOOKING_REQUEST, APPROVE_BOOKING_RESET, APPROVE_BOOKING_SUCCESS, COUNT_LIST_FAIL, COUNT_LIST_REQUEST, COUNT_LIST_SUCCESS, GET_BOOKING_LIST_FAIL, GET_BOOKING_LIST_REQUEST, GET_BOOKING_LIST_SUCCESS, REJECT_BOOKING_FAIL, REJECT_BOOKING_REQUEST, REJECT_BOOKING_RESET, REJECT_BOOKING_SUCCESS } from "../constants/adminConstants";

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


  


 