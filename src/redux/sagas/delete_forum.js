import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteForum(action){
    try{
        console.log(action.payload)
        const idToDelete = action.payload
        yield axios({
            method: 'DELETE',
            url: `/api/forum/${idToDelete}`
          })
        yield put({
            type: 'SAGA/FETCH_POSTS'
        })       
    }
    catch (error){
        console.log('SAGA/DELETE_FORUM ERROR:', error)
    }
}

function* deleteForumSaga(){
    yield takeLatest('SAGA/DELETE_FORUM', deleteForum)
}
export default deleteForumSaga;