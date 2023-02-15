import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* commentPost(action){
    try{
        console.log(action.payload)

        yield axios({
            method: 'POST',
            url: '/api/comment',
            data: action.payload
        })    
        yield put({
            type: 'SAGA/FETCH_POSTS'
        })   
    }
    catch (error){
        console.log('SAGA/POST_COMMENT ERROR:', error)
    }
}

function* commentPostSaga(){
    yield takeLatest('SAGA/POST_COMMENT', commentPost)
}
export default commentPostSaga;