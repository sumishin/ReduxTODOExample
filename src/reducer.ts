import { combineReducers } from 'redux';
import { todoStateReducer } from './reducers/todoStateReducer';
import { visibilityFilterStateReducer } from './reducers/visibilityFilterStateReducer';

const appReducer = combineReducers({
  todoStateReducer,
  visibilityFilterStateReducer,
});

export default appReducer;
