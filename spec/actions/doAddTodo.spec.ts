import * as assert from 'power-assert';
import {doAddTodo} from '../../src/actions/doAddTodo';

describe('doAddTodo', () => {
    it('create action', () => {
        let action = doAddTodo('hogehoge');
        assert(action.type === 'ADD_TODO');
        assert(action.payload.text === 'hogehoge');
    });
});
