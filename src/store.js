// const { createStore } = require("redux");
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { addproperrtyReducer, addRoomReducer, getRoomDetailsReducer, propertyCreateReducer, propertyDeleteReducer, propertyDetailsReducer, propertyListReducer, propertyUpdateReducer, roomDetailsReducer } from './reducers/generalReducer';

const initialState ={};
const reducer=combineReducers({
 propertyList:propertyListReducer,
 propertyCreate:addproperrtyReducer,
 propertyDelete:propertyDeleteReducer,
 propertyDetails:propertyDetailsReducer,
 propertyUpdate:propertyUpdateReducer,
 roomAdd:addRoomReducer,
 roomDetails:roomDetailsReducer,
 getRooms:getRoomDetailsReducer,
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store
