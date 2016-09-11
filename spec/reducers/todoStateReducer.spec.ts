import * as assert from 'power-assert';
import IAction from '../../src/actions/IAction';
import {TodoTask, TodoList} from '../../src/models';
import {ADD_TODO} from '../../src/actions/doAddTodo';
import {TOGGLE_TODO} from '../../src/actions/doToggleTodo';
import {todoStateReducer} from '../../src/reducers/todoStateReducer';

describe('todoStateReducer', () => {
    it('initial should handle ADD_TODO', () => {
        let action :IAction<ADD_TODO> = {
            type: ADD_TODO,
            payload: {
                text: 'hogehoge',
            },
        };
        let newState = todoStateReducer(undefined, action);
        assert(newState.length === 1);
        assert(newState[0].text === 'hogehoge');
    });
    it('should handle ADD_TODO', () => {
        let action :IAction<ADD_TODO> = {
            type: ADD_TODO,
            payload: {
                text: 'hogehoge',
            },
        };
        let prevSate = new TodoList();
        let prevTask = prevSate.addNewTask('hagehage');

        let newState = todoStateReducer(prevSate, action);
        assert(prevSate.length === 1);
        assert(newState.length === 2);
        assert(newState[0].id === prevTask.id);
        assert(newState[0].text === prevTask.text);
        assert(newState[0].completed === prevTask.completed);
        assert(newState[1].text === 'hogehoge');
    });

    it('initial should handle TOGGLE_TODO', () => {
        let action :IAction<TOGGLE_TODO> = {
            type: TOGGLE_TODO,
            payload: {
                id: 0,
            },
        };
        let newState = todoStateReducer(undefined, action);
        assert(newState.length === 0);
    });

    it('should handle TOGGLE_TODO', () => {
        let action :IAction<TOGGLE_TODO> = {
            type: TOGGLE_TODO,
            payload: {
                id: 0,
            },
        };
        let prevSate = new TodoList();
        let prevTaskCompleted = prevSate.addNewTask('hagehage').completed;

        let newState = todoStateReducer(prevSate, action);
        assert(newState.length === 1);
        assert(newState[0].id === 0);
        assert(newState[0].text === 'hagehage');
        assert(newState[0].completed !== prevTaskCompleted);

        newState = todoStateReducer(prevSate, action);
        assert(newState.length === 1);
        assert(newState[0].id === 0);
        assert(newState[0].text === 'hagehage');
        assert(newState[0].completed === prevTaskCompleted);
    });

    it('should handle not found TOGGLE_TODO', () => {
        let action: IAction<TOGGLE_TODO> = {
            type: TOGGLE_TODO,
            payload: {
                id: 3,
            },
        };
        let prevSate = new TodoList();
        prevSate.addNewTask('0');
        prevSate.addNewTask('1');
        prevSate.addNewTask('2');

        let newState = todoStateReducer(prevSate, action);
        assert(newState[0].completed === false);
        assert(newState[1].completed === false);
        assert(newState[2].completed === false);
    });
});
