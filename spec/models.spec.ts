import * as assert from 'power-assert';
import {TodoTask, TodoList} from '../src/models';

describe('TodoTask', () => {

    it('create', () => {
        let todo = new TodoTask(1, 'hogehoge');
        assert(todo.id === 1);
        assert(todo.text === 'hogehoge');
        assert(todo.completed === false);
    });

    it('update text', () => {
        let todo = new TodoTask(1, 'hogehoge');
        todo.text = 'fugefuge';
        assert(todo.text === 'fugefuge');
    });

    it('update completed', () => {
        let todo = new TodoTask(1, 'hogehoge');
        todo.completed = true;
        assert(todo.completed === true);
    });

    it('throw ex update id', () => {
        let todo = new TodoTask(1, 'hogehoge');
        assert.throws(() => {
            todo.id = 10;
        });
    });

});

describe('TodoList', () => {

    it('add new task', () => {
        let list = new TodoList();
        let task1 = list.addNewTask('hogehoge');
        let task2 = list.addNewTask('hagehage');

        assert(task1.id === 0);
        assert(task1.text === 'hogehoge');
        assert(task2.id === 1);
        assert(task2.text === 'hagehage');
    });

    it('find by id', () => {
        let list = new TodoList();

        let task1 = list.addNewTask('1');
        let task2 = list.addNewTask('2');
        let task3 = list.addNewTask('3');
        let task4 = list.addNewTask('4');
        let task5 = list.addNewTask('5');

        assert(list.findById(task3.id) === task3);
        assert(list.findById(999) === undefined);
    });
});
