import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import contactSaga from './Contact/saga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(contactSaga);