import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios'

// link to heroku server https://infinite-river-98527.herokuapp.com/api/equations
// local host http://localhost:5000/api/equations

// function w/ axios to send new equation to server
function* addEquation(action){
    try{
        yield axios.post('https://infinite-river-98527.herokuapp.com/api/equations', action.payload);
        yield put({type: 'GET_EQUATIONS'});
    }catch{
        console.log('ERROR IN ADD EQUATIONS SAGA: ');
    }
}

// function w/ axios to get past equations
function* getEquations(){
    try{
        let response = yield axios.get('https://infinite-river-98527.herokuapp.com/api/equations');
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