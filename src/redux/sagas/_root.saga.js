import {all} from 'redux-saga/effects'
import equationsSaga from './equations.saga.js'

// root saga
function* rootSaga(){
    yield all([
        equationsSaga()
    ])
}

export default rootSaga;