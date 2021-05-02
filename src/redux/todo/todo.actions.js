import TodoActionTypes from './todo.types';

export const addTodo = (text) => ({
    type: TodoActionTypes.ADD_TODO,
    payload: text
});

export const completeTodo = () => ({
    type: TodoActionTypes.COMPLETE_TODO,
    index: 5
});

export const setVisibilityFilter = () => ({
    type: TodoActionTypes.SET_VISIBILITY_FILTER,
    filter: 'SHOW_COMPLETED'
});