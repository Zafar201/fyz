import axios from "axios";
import { ADD_PROPERTIES_FAIL, ADD_PROPERTIES_REQUEST, ADD_PROPERTIES_SUCCESS, ADD_ROOM_FAIL, ADD_ROOM_REQUEST, ADD_ROOM_SUCCESS, CHECK_PROPERTIES_FAIL, CHECK_PROPERTIES_REQUEST, CHECK_PROPERTIES_SUCCESS, CHECK_PROPERty_FAIL, CHECK_PROPERty_REQUEST, CHECK_PROPERty_SUCCESS, CONFIRM_BOOING_FAIL, CONFIRM_BOOING_REQUEST, CONFIRM_BOOING_SUCCESS, DELETE_PROPERTIES_FAIL, DELETE_PROPERTIES_REQUEST, DELETE_PROPERTIES_SUCCESS, DELETE_ROOM_FAIL, DELETE_ROOM_REQUEST, DELETE_ROOM_SUCCESS, GET_ROOMS_DETAILS_FAIL, GET_ROOMS_DETAILS_REQUEST, GET_ROOMS_DETAILS_SUCCESS, GET_ROOM_DETAILS_FAIL, GET_ROOM_DETAILS_REQUEST, GET_ROOM_DETAILS_SUCCESS, PROPERTIES_DETAILS_FAIL, PROPERTIES_DETAILS_REQUEST, PROPERTIES_DETAILS_SUCCESS, PROPERTIES_LIST_FAIL, PROPERTIES_LIST_REQUEST, PROPERTIES_LIST_SUCCESS, ROOM_DETAILS_FAIL, ROOM_DETAILS_REQUEST, ROOM_DETAILS_SUCCESS, UPDATE_PROPERTIES_FAIL, UPDATE_PROPERTIES_REQUEST, UPDATE_PROPERTIES_SUCCESS, UPDATE_ROOM_FAIL, UPDATE_ROOM_REQUEST, UPDATE_ROOM_SUCCESS } from "../constants/generalConstants";

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
 
  

  export const addproperty = (name,address,location,map,description) =>async(dispatch)=>{
    dispatch({type:ADD_PROPERTIES_REQUEST,payload:name,address,location,map,description});

    try{
        const {data} =await axios.post("https://tawi-backend.herokuapp.com/api/users/add-property",{name,address,location,map,description})
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
  dispatch({type:UPDATE_PROPERTIES_REQUEST,property});
  console.log(property,'id');
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

export const addRoom = (name,description,adult,child,size,bedType,amenities,first,second,third,fourth,propId) =>async(dispatch)=>{
    dispatch({type:ADD_ROOM_REQUEST,payload:name,description,adult,child,size,bedType,amenities,price:{first,second,third,fourth},propId});
    console.log('am1');
    try{
        const {data} = await axios.post('https://tawi-backend.herokuapp.com/api/users/add-room',{name,description,adult,child,size,bedType,amenities,price:{first,second,third,fourth},propId})
         dispatch({type:ADD_ROOM_SUCCESS,payload:data})
         console.log(amenities,'am2');
    }catch(error){
      const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: ADD_ROOM_FAIL, error: message });
    }
}
export const getRoomsDetails = (propertyId) => async (dispatch) => {
  dispatch({ type: GET_ROOMS_DETAILS_REQUEST, payload: propertyId });
  try {
    const { data } = await axios.get(`https://tawi-backend.herokuapp.com/api/users/get-rooms/${propertyId}`);
    dispatch({ type: GET_ROOMS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ROOMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};  

export const detailsRoom = (propId,roomId) => async(dispatch)=>{
  dispatch({type:ROOM_DETAILS_REQUEST,propId,roomId});
  console.log(roomId,'prop,roomo');
  try{
     const {data} = await axios.get(`https://tawi-backend.herokuapp.com/api/users/get-a-room/id?propId=${propId}&roomId=${roomId}`,)
     dispatch({type:ROOM_DETAILS_SUCCESS,payload:data})
    //  console.log(data,'dts');
  }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: ROOM_DETAILS_FAIL, error: message });
      }
  }

  
  export const deleteRooms = (propId,roomId) => async (dispatch) => {
    dispatch({ type: DELETE_ROOM_REQUEST ,propId,roomId});
    try {
    const {data}=  await axios.delete(`https://tawi-backend.herokuapp.com/api/users/delete-room/id?propId=${propId}&roomId=${roomId}`)
       
      dispatch({ type: DELETE_ROOM_SUCCESS ,payload:data.room});
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DELETE_ROOM_FAIL, payload: message });
    }
  };


  export const updateRoom=(room)=>async(dispatch)=>{
    dispatch({type:UPDATE_ROOM_REQUEST,room});
    console.log('1');
    try{
      const {data} = await axios.put('https://tawi-backend.herokuapp.com/api/users/update-room/',room)
      dispatch({type:UPDATE_ROOM_SUCCESS,payload:data});
      console.log('2');
      console.log(data,'dts');
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: UPDATE_ROOM_FAIL, error: message });
       console.log('3');
    }
  }
  

  export const checkProperty = (location,adult,child,from,to) =>async(dispatch)=>{
    dispatch({type:CHECK_PROPERTIES_REQUEST,payload:location,adult,child,from,to});

    try{
        const {data} =await axios.post("https://tawi-backend.herokuapp.com/api/clients/check-availability",{location,adult,child,from,to})
        dispatch({type:CHECK_PROPERTIES_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:CHECK_PROPERTIES_FAIL,payload:error.message})
    }
}

// export const checkProperties = (location,adult,child,from,to,propId,roomId) =>async(dispatch)=>{
//   dispatch({type:CHECK_PROPERty_REQUEST,payload:location,adult,child,from,to});

//   try{
//       const {data} =await axios.post("https://tawi-backend.herokuapp.com/api/clients/check-availability",{location,adult,child,from,to})
//       dispatch({type:CHECK_PROPERty_SUCCESS,payload:data.find((e)=>e._id == propId ).rooms.find((e)=>e._id == roomId)})

//   }catch(error){
//       dispatch({type:CHECK_PROPERty_FAIL,payload:error.message})
//   }
// }



export const confirmBooking = (propId,roomId,name,email,code,phone,country,from,to,price) =>async(dispatch)=>{
  dispatch({type:CONFIRM_BOOING_REQUEST,propId,roomId,name,email,phone,country,from,to,price});

  try{
      const {data} =await axios.post("https://tawi-backend.herokuapp.com/api/clients/confirm-booking",{propId,roomId,name,email,phone:code+phone,country,from,to,price})
      dispatch({type:CONFIRM_BOOING_SUCCESS,payload:data})

  }catch(error){
      dispatch({type:CONFIRM_BOOING_FAIL,payload:error.message})
  }
}