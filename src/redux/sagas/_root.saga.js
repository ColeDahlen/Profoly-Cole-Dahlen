import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import pictureSaga from './get_pictures.saga';
import detailsSaga from './get_one_picture';
import editSaga from './edit_database';
import deleteSaga from './delete_image';
import addSaga from './add_image';
import profileSaga from './update_user';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    pictureSaga(),
    detailsSaga(),
    editSaga(),
    deleteSaga(),
    addSaga(),
    profileSaga(),
  ]);
}
