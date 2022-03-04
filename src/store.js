// const { createStore } = require("redux");
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { propertyListReducer } from './reducers/generalReducer';

const initialState ={};
const reducer=combineReducers({
 propertyList:propertyListReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store

