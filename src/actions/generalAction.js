import axios from "axios";
import { ADD_PROPERTIES_FAIL, ADD_PROPERTIES_REQUEST, ADD_PROPERTIES_SUCCESS, ADD_ROOM_FAIL, ADD_ROOM_REQUEST, ADD_ROOM_SUCCESS, DELETE_PROPERTIES_FAIL, DELETE_PROPERTIES_REQUEST, DELETE_PROPERTIES_SUCCESS, GET_ROOM_DETAILS_FAIL, GET_ROOM_DETAILS_REQUEST, GET_ROOM_DETAILS_SUCCESS, PROPERTIES_DETAILS_FAIL, PROPERTIES_DETAILS_REQUEST, PROPERTIES_DETAILS_SUCCESS, PROPERTIES_LIST_FAIL, PROPERTIES_LIST_REQUEST, PROPERTIES_LIST_SUCCESS, ROOM_DETAILS_FAIL, ROOM_DETAILS_REQUEST, ROOM_DETAILS_SUCCESS, UPDATE_PROPERTIES_FAIL, UPDATE_PROPERTIES_REQUEST, UPDATE_PROPERTIES_SUCCESS } from "../constants/generalConstants";

export const listProperties = () => async (dispatch) => {
    dispatch({ type: PROPERTIES_LIST_REQUEST });
    console.log("heloo1");
    try {    
      const { data } = await axios.get('https://tawi-backend.herokuapp.com/api/users/get-properties')      
      dispatch({ type: PROPERTIES_LIST_SUCCESS, payload: data.properties }); 
      // console.log(data.properties,'data');
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PROPERTIES_LIST_FAIL, payload: message });
  
    }
  };
 
  

  export const addproperty = (name,address,map,description) =>async(dispatch)=>{
    dispatch({type:ADD_PROPERTIES_REQUEST,payload:name,address,map,description});

    try{
        const {data} =await axios.post("https://tawi-backend.herokuapp.com/api/users/add-property",{name,address,map,description})
        dispatch({type:ADD_PROPERTIES_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:ADD_PROPERTIES_FAIL,payload:error.message})
    }
}


export const deleteProperty = (propertytId) => async (dispatch) => {
  dispatch({ type: DELETE_PROPERTIES_REQUEST, payload: propertytId });
  try {
    await axios.delete(`https://tawi-backend.herokuapp.com/api/users/delete-property/${propertytId}`)
     
    dispatch({ type: DELETE_PROPERTIES_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_PROPERTIES_FAIL, payload: message });
  }
};

export const detailsProperty = (propertyId) => async (dispatch) => {
  dispatch({ type: PROPERTIES_DETAILS_REQUEST, payload: propertyId });
  try {
    const { data } = await axios.get(`https://tawi-backend.herokuapp.com/api/users/get-property/${propertyId}`);
    dispatch({ type: PROPERTIES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROPERTIES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};  

export const updateProperty=(property)=>async(dispatch)=>{
  dispatch({type:UPDATE_PROPERTIES_REQUEST,payload:property});
  console.log('1');
  try{
    const {data} = await axios.put(`https://tawi-backend.herokuapp.com/api/users/update-property/${property._id}`,property)
    dispatch({type:UPDATE_PROPERTIES_SUCCESS,payload:data});
    console.log('2');
    console.log(data,'dts');
  }catch(error){
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: UPDATE_PROPERTIES_FAIL, error: message });
     console.log('3');
  }
}

export const addRoom = (name,description,occupancy,size,price1,price2,price3,price4,propId) =>async(dispatch)=>{
    dispatch({type:ADD_ROOM_REQUEST,payload:name,description,occupancy,size,price1,price2,price3,price4,propId});
    try{
        const {data} = await axios.post('https://tawi-backend.herokuapp.com/api/users/add-room',{name,description,occupancy,size,price1,price2,price3,price4,propId})
         dispatch({type:ADD_ROOM_SUCCESS,payload:data})
    }catch(error){
      const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: ADD_ROOM_FAIL, error: message });
    }
}
export const getRoomsDetails = (propertyId) => async (dispatch) => {
  dispatch({ type: GET_ROOM_DETAILS_REQUEST, payload: propertyId });
  try {
    const { data } = await axios.get(`https://tawi-backend.herokuapp.com/api/users/get-rooms/${propertyId}`);
    dispatch({ type: GET_ROOM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ROOM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};  

export const detailsRoom = (propId) => async(dispatch)=>{
  dispatch({type:ROOM_DETAILS_REQUEST,payload:propId});
  try{
     const {data} = await axios.get(`https://tawi-backend.herokuapp.com/api/users/get-a-room/${propId}`)
     dispatch({type:ROOM_DETAILS_SUCCESS,payload:data})
  }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: ROOM_DETAILS_FAIL, error: message });
      }
  }

  
  