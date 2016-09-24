import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

import Constants from './constants/const';
import * as reducers from './reducers';
import promisesMiddleware from './middleware/promises'



const reducer = combineReducers(reducers);
let createStoreWithMiddleware = applyMiddleware(promisesMiddleware, createLogger())(createStore);

const store = createStoreWithMiddleware(reducer, {
    YTItems: [],
    number: 0
});

export default store;