import * as assert from 'power-assert';
import IAction from '../../src/actions/IAction';
import {VisibilityFilter} from '../../src/models';
import {SET_VISIBILITY_FILTER} from '../../src/actions/doSetVisibilityFilter';
import {visibilityFilterStateReducer} from '../../src/reducers/visibilityFilterStateReducer';

describe('visibilityFilterStateReducer', () => {
    it('initial should handle SET_VISIBILITY_FILTER', () => {
        let action :IAction<SET_VISIBILITY_FILTER> = {
            type: SET_VISIBILITY_FILTER,
            payload: {
                filter: VisibilityFilter.ShowCompleted,
            },
        };
        let newState = visibilityFilterStateReducer(undefined, action);
        assert(newState === VisibilityFilter.ShowCompleted);
    });
    it('should handle SET_VISIBILITY_FILTER', () => {
        let action :IAction<SET_VISIBILITY_FILTER> = {
            type: SET_VISIBILITY_FILTER,
            payload: {
                filter: VisibilityFilter.ShowActive,
            },
        };
        let prevSate = VisibilityFilter.ShowCompleted;
        let newState = visibilityFilterStateReducer(prevSate, action);
        assert(newState === VisibilityFilter.ShowActive);
    });
});
