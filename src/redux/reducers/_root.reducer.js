import {combineReducers} from 'redux'
import equations from './equations.reducer.js'

// root reducer
const rootReducer = combineReducers({
    equations,
})

export default rootReducer;