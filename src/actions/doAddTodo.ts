import IAction from './IAction';
export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = { text: string };

export function doAddTodo(message: string): IAction<ADD_TODO> {
    return {
        type: ADD_TODO,
        payload: {
            text: message,
        },
    };
}
