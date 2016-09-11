export enum VisibilityFilter {
  ShowAll,
  ShowCompleted,
  ShowActive
}

export class TodoTask {
    public text: string;
    public completed: boolean;
    private _id: number;
    public get id(): number {
        return this._id;
    }
    constructor(id: number, aText: string) {
        this._id = id;
        this.text = aText;
        this.completed = false;
    }
}

export class TodoList extends Array<TodoTask> {
    public addNewTask(aText: string): TodoTask {
        let task = new TodoTask(this.length, aText);
        this.push(task);
        return task;
    }
    public findById(id: number): TodoTask {
        for (let todo of this) {
            if (todo.id === id) {
                return todo;
            }
        }
        return undefined;
    }
}
