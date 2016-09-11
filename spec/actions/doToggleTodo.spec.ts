import * as assert from 'power-assert';
import {doToggleTodo} from '../../src/actions/doToggleTodo';

describe('doToggleTodo', () => {
    it('create action', () => {
        let action = doToggleTodo(999);
        assert(action.type === 'TOGGLE_TODO');
        assert(action.payload.id === 999);
    });
});
