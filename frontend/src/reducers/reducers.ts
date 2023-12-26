// src/store/reducers.ts
import { combineReducers } from 'redux';
import counterReducer from './reducers/counter';

export const rootReducer = combineReducers({
  counter: counterReducer,
  // Adicione outros redutores aqui
});
