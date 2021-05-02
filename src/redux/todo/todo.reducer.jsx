import {addTodo, completeTodo} from './todo.actions';
import {VisibilityFilters, TodoActionTypes} from './todo.types';

const INITIAL_STATE = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

const todoApp = (state, action) => {
    switch(action.type){
        case TodoActionTypes.SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case TodoActionTypes.ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case TodoActionTypes.COMPLETE_TODO:
            return Object.assign({}. state, {
                todos: state.todos.map((todo, index) => {
                    if(index == action.index){
                        return Object.assign({}, todo, {
                            completed: true
                        })
                    }
                    return todo
                })
            })    
        default:
            return state;        
    }
}
