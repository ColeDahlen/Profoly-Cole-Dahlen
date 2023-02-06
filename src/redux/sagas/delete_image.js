import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteImage(action){
    try{
        console.log(action.payload)
        const idToDelete = action.payload
        yield axios({
            method: 'DELETE',
            url: `/api/details/${idToDelete}`
          })       
    }
    catch (error){
        console.log('SAGA/DELETE ERROR:', error)
    }
}

function* deleteSaga(){
    yield takeLatest('SAGA/DELETE', deleteImage)
}
export default deleteSaga;