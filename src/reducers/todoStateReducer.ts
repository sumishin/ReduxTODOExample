import objectAssign = require('object-assign');

import IAction from '../actions/IAction';
import {TodoTask, TodoList} from '../models';
import {ADD_TODO} from '../actions/doAddTodo';
import {TOGGLE_TODO} from '../actions/doToggleTodo';

const initialState = new TodoList();

export const todoStateReducer = (state: TodoList = initialState, action: IAction<any>): TodoList => {
    if (action.type === ADD_TODO) {
        let payload: ADD_TODO = <ADD_TODO> action.payload;
        let newState = objectAssign(new TodoList(), state);
        newState.addNewTask(payload.text);
        return newState;
    } else if(action.type === TOGGLE_TODO) {
        let payload: TOGGLE_TODO = <TOGGLE_TODO> action.payload;
        let target = state.findById(payload.id);
        if(!!target) {
            target.completed = !target.completed;
        } else {
            throw 'not found';
        }
        return state;
    }
    return state;
};
