import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


export const todolistReducer = (state: TodolistType[], action: MainType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload)
        }
        case 'ADD-TODOLIST': {
            let newTodolistId = v1()
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.title, filter: 'all'}
            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return  state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title}: el);

        }
        case 'CHANGE-FILTER': {
            return state.map(el=>el.id===action.payload.todolistId ? {...el,filter: action.payload.value}: el)
        }
        default:
            return {...state}
    }
}

type MainType = removeTodolistACType | addTodolistACType | changeTodolistTitleACType | changeFilterACType
type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: id
    } as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {title}
    } as const
}

type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {id, title}
    }as const
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (value: FilterValuesType, todolistId: string) => {
    return{
        type: 'CHANGE-FILTER',
        payload: {value, todolistId}
    }as const
}