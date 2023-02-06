import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editDatabase(action){
    try{
        console.log(action.payload)
        const editObject = action.payload
        const response = yield axios({
            method: 'PUT',
            url: '/api/details',
            data: editObject
          })       
        yield put({
            type: 'SAGA-GET-PICTURES',
            payload: editObject.user_id
        })
    }
    catch (error){
        console.log('SAGA/EDIT_DATABASE ERROR:', error)
    }
}

function* editSaga(){
    yield takeLatest('SAGA/EDIT_DATABASE', editDatabase)
}
export default editSaga;