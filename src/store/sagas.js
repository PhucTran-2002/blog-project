import { takeEvery, put, delay } from 'redux-saga/effects';
import { showNotification, clearNotification } from './notificationSlice';

function* handleShowNotification(action) {
  yield delay(2000); // Show notification for 2 seconds
  yield put(clearNotification());
}

export default function* rootSaga() {
  yield takeEvery(showNotification.type, handleShowNotification);
} 