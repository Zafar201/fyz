import {SUSPEND_USER_REQUEST,SUSPEND_USER_SUCCESS,SUSPEND_USER_FAIL,GET_ALL_APPROVED_USER_REQUEST,GET_ALL_APPROVED_USER_SUCCESS,GET_ALL_APPROVED_USER_FAIL,CREATE_PASSWORD_REQUEST,CREATE_PASSWORD_SUCCESS,CREATE_PASSWORD_FAIL, APPROVE_BOOKING_FAIL, APPROVE_BOOKING_REQUEST, APPROVE_BOOKING_SUCCESS, APPROVE_USER_REQUEST,APPROVE_USER_SUCCESS,APPROVE_USER_FAIL, COUNT_LIST_FAIL, COUNT_LIST_REQUEST, COUNT_LIST_SUCCESS, GET_BOOKING_LIST_FAIL, GET_BOOKING_LIST_REQUEST, GET_BOOKING_LIST_SUCCESS, GET_SIGNUP_FAIL, GET_SIGNUP_REQUEST, GET_SIGNUP_SUCCESS, REJECT_BOOKING_FAIL, REJECT_BOOKING_REQUEST, REJECT_BOOKING_SUCCESS } from "../constants/adminConstants";
import axios from 'axios'
import { URL, USER_SIGNIN_SUCCESS } from "../constants/generalConstants";

export const getCountDetails = () => async (dispatch) => {
    dispatch({ type: COUNT_LIST_REQUEST });
    try {
      const { data } = await axios.get(`${URL}/api/admin/`);
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
       dispatch({ type: APPROVE_BOOKING_FAIL, payload: message });
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
       dispatch({ type: REJECT_BOOKING_FAIL,payload: message });
    }
  }

  export const getSignUpRequest=()=>async(dispatch)=>{
    dispatch({type:GET_SIGNUP_REQUEST})
    try{
      const {data}= await axios.get('https://tawi-backend.herokuapp.com/api/admin/get-signup-requests')
      dispatch({type:GET_SIGNUP_SUCCESS,payload:data})
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: GET_SIGNUP_FAIL, payload: message });
    
    }
  }

  export const approveUser=(userId)=>async(dispatch)=>{
    dispatch({type:APPROVE_USER_REQUEST});
    try{
      const {data} = await axios.put(`https://tawi-backend.herokuapp.com/api/admin/approve-user/${userId}`)
      dispatch({type:APPROVE_USER_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: APPROVE_USER_FAIL, payload: message });
    }
  }

  export const rejectUser=(userId)=>async(dispatch)=>{
    dispatch({type:REJECT_BOOKING_REQUEST});
    try{
      const {data} = await axios.put(`https://tawi-backend.herokuapp.com/api/admin/reject-user/${userId}`)
      dispatch({type:REJECT_BOOKING_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: REJECT_BOOKING_FAIL, payload: message });
    }
  }


  //6263cba1b6efdf5f1e2bd59e
  export const createPassword=(password,userId)=>async(dispatch)=>{
    dispatch({type:CREATE_PASSWORD_REQUEST});
    console.log(password,userId)
    try{
      const {data} = await axios.put(`https://tawi-backend.herokuapp.com/api/users/update-password/${userId}`,{password})
      dispatch({type:CREATE_PASSWORD_SUCCESS,payload:data});
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: CREATE_PASSWORD_FAIL, payload: message });
    }
  }

  export const getAllApprovedUsers=()=>async(dispatch)=>{
    dispatch({type:GET_ALL_APPROVED_USER_REQUEST})
    try{
      const {data}= await axios.get(`${URL}/api/admin/get-all-users`)
      dispatch({type:GET_ALL_APPROVED_USER_SUCCESS,payload:data.users})
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: GET_ALL_APPROVED_USER_FAIL, payload: message });
    
    }
  }

  export const suspendUser=(userId)=>async(dispatch)=>{
    dispatch({type:SUSPEND_USER_REQUEST});
    try{
      const {data} = await axios.put(`${URL}/api/admin/suspend-user/${userId}`)
      dispatch({type:SUSPEND_USER_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: SUSPEND_USER_FAIL, payload: message });
    }
  }