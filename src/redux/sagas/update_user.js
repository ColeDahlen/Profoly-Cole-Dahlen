import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateUser(action){
    try{
        console.log(action.payload)
        yield axios({
            method: 'PUT',
            url: '/api/user/profile',
            data: action.payload
          })     
        yield put({
            type: 'FETCH_USER'
        })
    }
    catch (error){
        console.log('SAGA/UPDATE_USER ERROR:', error)
    }
}

function* profileSaga(){
    yield takeLatest('SAGA/UPDATE_USER', updateUser)
}
export default profileSaga;