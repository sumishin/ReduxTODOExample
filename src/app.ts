import { createStore } from 'redux';
import reducer from './reducer';

import {doAddTodo} from './actions/doAddTodo';
import {doToggleTodo} from './actions/doToggleTodo';
import {doSetVisibilityFilter} from './actions/doSetVisibilityFilter';
import {VisibilityFilter} from './models';

const store = createStore(reducer);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(doAddTodo('Learn about actions'))
store.dispatch(doAddTodo('Learn about reducers'))
store.dispatch(doAddTodo('Learn about store'))
store.dispatch(doToggleTodo(0));
store.dispatch(doToggleTodo(1));
store.dispatch(doSetVisibilityFilter(VisibilityFilter.ShowCompleted));

// Stop listening to state updates
unsubscribe();
