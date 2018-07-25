/**
 *Created by qiaozm on 2018/7/24
 * reducer 统一处理入口
 */
'use strict';
import {combineReducers} from 'redux';
import mainReducer from './mainReducer';//导入首页的redux处理
const rootReducer =combineReducers({//将所有的redux处理逻辑包装在一起
    mainReducer:mainReducer
});
export default rootReducer;
