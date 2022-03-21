// const { createStore } = require("redux");
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { addproperrtyReducer, addRoomReducer, getRoomDetailsReducer, getRoomsDetailsReducer, propertyCreateReducer, propertyDeleteReducer, propertyDetailsReducer, propertyListReducer, propertyUpdateReducer, roomDeleteReducer, roomDetailsReducer, roomUpdateReducer } from './reducers/generalReducer';

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
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store

