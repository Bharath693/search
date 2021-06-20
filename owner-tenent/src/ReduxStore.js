import {combineReducers , applyMiddleware , createStore} from 'redux'
import thunk from 'redux-thunk'
import {UserReducer} from './DataReducer.js/DataReducer'

const rootReducer =combineReducers({
    UserR:UserReducer
})

const middleWare = [thunk]

export const store = createStore(rootReducer ,applyMiddleware(...middleWare))