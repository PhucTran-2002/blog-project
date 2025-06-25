import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import notificationReducer from './notificationSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    posts: postsReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store; 