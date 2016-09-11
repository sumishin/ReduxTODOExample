import IAction from './IAction';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export type TOGGLE_TODO = { index: number };

export function doToggleTodo(aIndex: number): IAction<TOGGLE_TODO> {
    return {
        type: TOGGLE_TODO,
        payload: {
            index: aIndex,
        },
    };
}
