import { TODO_ADD } from '../type/TodoType';

export const addTodo = data => {
    console.log('Data addTodo di TodoAction, ', data)
    return {
        type: TODO_ADD,
        payload: data
    }
}