/**
 *Created by qiaozm on 2018/7/24
 * 首页reducer 处理首页的state变化
 */
'use strict';
import * as type from '../action/type';
//初始状态
const initialState={
    auth:{data: {}},
    responsive:{data: {}}
};
const handleData = (state = {isFetching: true, data: {}}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return {...state, isFetching: true};
        case type.RECEIVE_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};
const httpData = (state = initialState, action) => {
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return {...state};
    }
};
export default httpData