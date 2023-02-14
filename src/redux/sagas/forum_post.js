import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* forumPost(action){
    try{
        console.log(action.payload)

        yield axios({
            method: 'POST',
            url: '/api/forum',
            data: action.payload
          })    
        yield put({
            type: 'SAGA/FETCH_POSTS'
        })   
    }
    catch (error){
        console.log('SAGA/FORUM_POST ERROR:', error)
    }
}

function* forumPostSaga(){
    yield takeLatest('SAGA/FORUM_POST', forumPost)
}
export default forumPostSaga;