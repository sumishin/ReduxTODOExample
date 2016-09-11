import objectAssign = require('object-assign');

import IAction from '../actions/IAction';
import {VisibilityFilter} from '../models';
import {SET_VISIBILITY_FILTER} from '../actions/doSetVisibilityFilter';

const initialState = VisibilityFilter.ShowAll;

export const visibilityFilterStateReducer = (state: VisibilityFilter = initialState, action: IAction<any>): VisibilityFilter => {
    if (action.type === SET_VISIBILITY_FILTER) {
        let payload: SET_VISIBILITY_FILTER = <SET_VISIBILITY_FILTER> action.payload;
        return payload.filter;
    }
    return state;
};
