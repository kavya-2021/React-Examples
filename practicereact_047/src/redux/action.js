import {INC_COUNT,DEC_COUNT,ADD_TODO,ADD_TODO_LOADING,ADD_TODO_SUCCESS,GET_TODO_LOADING,GET_TODO_SUCCESS} from './actionTypes'

export const incCount = (payload) =>({
     type : INC_COUNT,
     payload
})

export const decCount = (payload) =>({
    type : DEC_COUNT,
    payload
});

export const addTodo = (payload) =>({
    type : ADD_TODO,
    payload
});

export const addTodoLoading = () =>({
    type :ADD_TODO_LOADING
});

export const addTodoSuccess = (payload) =>({
    type :ADD_TODO_SUCCESS,
    payload
});

export const getTodoLoading = () =>({
    type :GET_TODO_LOADING
});

export const getTodoSuccess = (payload) =>({
    type :GET_TODO_SUCCESS,
    payload
});