import { combineReducers } from 'redux';
import todoReducers from './todoReducers';

export const rootReducer = combineReducers({
  todoReducers,
});
