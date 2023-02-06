import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getOnePicture(action){
    try{
        console.log(action.payload)
        const response = yield axios({
            method: 'GET',
            url: `/api/details/${action.payload}`
          })       
        yield put({
            type: 'SET_IMAGE_DETAIL',
            payload: response.data
        })
    }
    catch (error){
        console.log('SAGA/FETCH_ONE_IMAGE_DETAILS ERROR:', error)
    }
}

function* detailsSaga(){
    yield takeLatest('SAGA/FETCH_ONE_IMAGE_DETAILS', getOnePicture)
}
export default detailsSaga;