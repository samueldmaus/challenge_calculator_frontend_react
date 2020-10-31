import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios'

// function w/ axios to send new equation to server
function* addEquation(action){
    try{
        yield axios.post('/api/equations', action.payload);
        yield put({type: 'GET_EQUATIONS'});
    }catch{
        console.log('ERROR IN ADD EQUATIONS SAGA: ');
    }
}

// function w/ axios to get past equations
function* getEquations(){
    try{
        let response = yield axios.get('/api/equations');
        yield put({type: 'SAVE_EQUATIONS', payload: response.data})
    }catch{
        console.log('ERROR IN GET EQUATIONS SAGA: ')
    }
}

function* equationsSaga(){
    yield takeEvery('ADD_EQUATION', addEquation);
    yield takeEvery('GET_EQUATIONS', getEquations);
}

export default equationsSaga;