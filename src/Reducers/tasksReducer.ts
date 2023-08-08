import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const tasksReducer = (state: TaskType[], action: MainType):TaskType[] => {
    switch (action.type) {
        case "REMOVE-TASK":{
            return state.filter(el=>el.id!==action.payload.id)
        }
        case "ADD-TASK":{
            let newTask = { id: v1(), title: action.payload.title, isDone: false };
            return [...state, newTask]
        }
        default:
            return state
    }
}

type MainType=RemoveTaskACType | AddTaskACType
type RemoveTaskACType=ReturnType<typeof removeTaskAC>
type AddTaskACType=ReturnType<typeof addTaskAC>


export const removeTaskAC=(id:string)=>{
    return{
        type:'REMOVE-TASK',
        payload:{
            id
        }
    }as const
}

export const addTaskAC=(title:string)=>{
    return{
        type: 'ADD-TASK',
        payload:{
            title
        }
    }as const
}
