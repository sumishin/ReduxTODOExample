import IAction from './IAction';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export enum VisibilityFilter {
  ShowAll,
  ShowCompleted,
  ShowActive
}
export type SET_VISIBILITY_FILTER = { filter: VisibilityFilter };

export function doSetVisibilityFilter(aFilter: VisibilityFilter): IAction<SET_VISIBILITY_FILTER> {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter: aFilter,
        },
    };
}
