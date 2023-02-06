import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addImage(action){
    try{
        console.log(action.payload)
        const addObject = action.payload
        yield axios({
            method: 'POST',
            url: '/api/images',
            data: addObject
          })    
        yield put({
            type: 'SAGA-GET-PICTURES',
            payload: addObject.user_id
        })   
    }
    catch (error){
        console.log('SAGA/ADD_PICTURE ERROR:', error)
    }
}

function* addSaga(){
    yield takeLatest('SAGA/ADD_PICTURE', addImage)
}
export default addSaga;