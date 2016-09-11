import * as assert from 'power-assert';
import {SET_VISIBILITY_FILTER, VisibilityFilter, doSetVisibilityFilter} from '../../src/actions/doSetVisibilityFilter';

describe('doSetVisibilityFilter', () => {
    it('create action', () => {
        let action = doSetVisibilityFilter(VisibilityFilter.ShowAll);
        assert(action.type === SET_VISIBILITY_FILTER);
        assert(action.payload.filter === VisibilityFilter.ShowAll);
    });
});
