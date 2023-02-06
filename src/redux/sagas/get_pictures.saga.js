import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAllPictures(action){
    try{
        console.log(action.payload)
        const response = yield axios({
            method: 'GET',
            url: `/api/images/${action.payload}`
          })       
        yield put({
            type: 'SET_IMAGES',
            payload: response.data
        })
    }
    catch (error){
        console.log('SAGA-GET-PICTURES ERROR:', error)
    }
}

function* pictureSaga(){
    yield takeLatest('SAGA-GET-PICTURES', getAllPictures)
}
export default pictureSaga;