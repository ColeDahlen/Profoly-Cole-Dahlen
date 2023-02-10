import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAllForumPosts(){
    try{
        const response = yield axios({
            method: 'GET',
            url: '/api/forum'
          })       
        yield put({
            type: 'SET_FORUM',
            payload: response.data
        })
    }
    catch (error){
        console.log('SAGA/FETCH_POSTS ERROR:', error)
    }
}

function* forumSaga(){
    yield takeLatest('SAGA/FETCH_POSTS', getAllForumPosts)
}
export default forumSaga;