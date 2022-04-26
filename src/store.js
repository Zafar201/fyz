// const { createStore } = require("redux");
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import {passwordCreateReducer, userRejectReducer,countListReducer,bookingListReducer ,approveBookingReducer,rejectBookingReducer,getSignupRequestReducer,userApproveReducer} from './reducers/adminReducer';
import { addproperrtyReducer,accountCreateReducer, addRoomReducer, bookingConfirmReducer, checkPropertyReducer, getRoomDetailsReducer, getRoomsDetailsReducer, propertyCreateReducer, propertyDeleteReducer, propertyDetailsReducer, propertyListReducer, propertyUpdateReducer, roomDeleteReducer, roomDetailsReducer, roomUpdateReducer } from './reducers/generalReducer';

const initialState ={};
const reducer=combineReducers({
 propertyList:propertyListReducer,
 propertyCreate:addproperrtyReducer,
 propertyDelete:propertyDeleteReducer,
 propertyDetails:propertyDetailsReducer,
 propertyUpdate:propertyUpdateReducer,
 roomAdd:addRoomReducer,
 roomDetails:roomDetailsReducer,
 getRooms:getRoomsDetailsReducer,
 roomDelete:roomDeleteReducer,
 roomUpdate:roomUpdateReducer,
 checkPropertys:checkPropertyReducer,
 bookingConfirm:bookingConfirmReducer,
 countList:countListReducer,
 bookingList:bookingListReducer,
 approveBooking:approveBookingReducer,
 rejectBooking:rejectBookingReducer,
 accountCreate:accountCreateReducer,
 signupCreate:getSignupRequestReducer,
 approveUser:userApproveReducer,
 rejectUser:userRejectReducer,
 createPssword:passwordCreateReducer,
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store

