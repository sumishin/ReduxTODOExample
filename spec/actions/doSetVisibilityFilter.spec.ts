import * as assert from 'power-assert';
import {VisibilityFilter, doSetVisibilityFilter} from '../../src/actions/doSetVisibilityFilter';

describe('doSetVisibilityFilter', () => {
    it('create action1', () => {
        let action = doSetVisibilityFilter(VisibilityFilter.ShowAll);
        assert(action.type === 'SET_VISIBILITY_FILTER');
        assert(action.payload.filter === VisibilityFilter.ShowAll);
    });
    it('create action2', () => {
        let action = doSetVisibilityFilter(VisibilityFilter.ShowCompleted);
        assert(action.type === 'SET_VISIBILITY_FILTER');
        assert(action.payload.filter === VisibilityFilter.ShowCompleted);
    });
    it('create action3', () => {
        let action = doSetVisibilityFilter(VisibilityFilter.ShowActive);
        assert(action.type === 'SET_VISIBILITY_FILTER');
        assert(action.payload.filter === VisibilityFilter.ShowActive);
    });
});
