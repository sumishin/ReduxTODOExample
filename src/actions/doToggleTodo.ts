import IAction from './IAction';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export type TOGGLE_TODO = { id: number };

export function doToggleTodo(aId: number): IAction<TOGGLE_TODO> {
    return {
        type: TOGGLE_TODO,
        payload: {
            id: aId,
        },
    };
}
