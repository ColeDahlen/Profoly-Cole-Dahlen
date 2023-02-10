import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAllUsers(action){
    try{
        console.log(action.payload)
        const response = yield axios({
            method: 'GET',
            url: '/api/all_users'
          })       
        yield put({
            type: 'SET_ALL_USERS',
            payload: response.data
        })
    }
    catch (error){
        console.log('SAGA/GET_ALL_USERS ERROR:', error)
    }
}

function* allUserSaga(){
    yield takeLatest('SAGA/GET_ALL_USERS', getAllUsers)
}
export default allUserSaga;