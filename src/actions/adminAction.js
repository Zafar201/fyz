import { APPROVE_BOOKING_FAIL, APPROVE_BOOKING_REQUEST, APPROVE_BOOKING_SUCCESS, COUNT_LIST_FAIL, COUNT_LIST_REQUEST, COUNT_LIST_SUCCESS, GET_BOOKING_LIST_FAIL, GET_BOOKING_LIST_REQUEST, GET_BOOKING_LIST_SUCCESS, REJECT_BOOKING_FAIL, REJECT_BOOKING_REQUEST, REJECT_BOOKING_SUCCESS } from "../constants/adminConstants";
import axios from 'axios'

export const getCountDetails = () => async (dispatch) => {
    dispatch({ type: COUNT_LIST_REQUEST });
    try {
      const { data } = await axios.get(`https://tawi-backend.herokuapp.com/api/admin/`);
      dispatch({ type: COUNT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: COUNT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };  

  export const getBookings = () => async (dispatch) => {
    dispatch({ type: GET_BOOKING_LIST_REQUEST });
    try {
      const { data } = await axios.get(`https://tawi-backend.herokuapp.com/api/admin/get-all-bookings/`);
      dispatch({ type: GET_BOOKING_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_BOOKING_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };  

  export const approveBooking=(bookId)=>async(dispatch)=>{
    dispatch({type:APPROVE_BOOKING_REQUEST});
    try{
      const {data} = await axios.put(`https://tawi-backend.herokuapp.com/api/admin/approve-booking/${bookId}`)
      dispatch({type:APPROVE_BOOKING_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: APPROVE_BOOKING_FAIL, error: message });
    }
  }

  export const rejectBooking=(bookId)=>async(dispatch)=>{
    dispatch({type:REJECT_BOOKING_REQUEST});
    try{
      const {data} = await axios.put(`https://tawi-backend.herokuapp.com/api/admin/reject-booking/${bookId}`)
      dispatch({type:REJECT_BOOKING_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: REJECT_BOOKING_FAIL, error: message });
    }
  }