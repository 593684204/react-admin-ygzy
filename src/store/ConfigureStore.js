/**
 *Created by qiaozm on 2018/7/24
 * description 管理所有的store
 */
'use strict';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer/index';
const createStoreWithMiddleware=applyMiddleware(thunkMiddleware)(createStore);
export default function configureStore(initialState){
    return createStoreWithMiddleware(rootReducer,initialState);
}