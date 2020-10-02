import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import IndexSaga from '../saga/index'
import rootReducer from '../redux/reducer/index';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'auth',
    'user',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(IndexSaga)
    // ...createStore(rootReducer)
  };
};

// Middleware: Redux Persist Persister
let persistor = persistStore(configureStore());

export { configureStore, persistor };
