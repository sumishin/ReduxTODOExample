import { combineReducers } from 'redux'
import { todoStateReducer } from './todoStateReducer'
import { visibilityFilterStateReducer } from './visibilityFilterStateReducer'

const appReducers = combineReducers({
  todoStateReducer,
  visibilityFilterStateReducer
});

export default appReducers;
