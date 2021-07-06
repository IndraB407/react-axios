import {combineReducers} from 'redux'

import authReducer from './auth'
import userReducer from './auth'


const reducer = combineReducers ({
    auth : authReducer,
    user: userReducer,
})

export default reducer