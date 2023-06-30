import React, {useState} from "react";
import {FilterType} from "./App";

type TodoListPropsType = {
    title: string
    title2?: number
    title3?: boolean
    task: TaskPropsType[]
    removeTask: (id: number) => void
    // taskFilter: (value:FilterType) => void
}

type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {

    let [filter, setFilter] = useState<FilterType>('all')
    const taskFilter = (value: FilterType) => {
        setFilter(value)
    }
   const durshlag = () => {
       let task = props.task
       // if (filter === 'active') {
       //     task = task.filter(el => !el.isDone)
       // }
       // if (filter === 'completed') {
       //     task = task.filter(el => el.isDone)
       // }
       // return task
        switch (filter) {
            case "active": {
               return  task = task.filter(el => !el.isDone)
            }

        case "completed": {
           return  task = task.filter(el => el.isDone)
       }
       default: return task
    }}

    return <div>
        <h3>{props.title} {props.title2} {props.title3}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {durshlag().map((el => {
                return (
                    <li>
                        <button onClick={() => {
                            props.removeTask(el.id)
                        }}>x
                        </button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span></li>
                )
            }))}

        </ul>
        <div>
            <button onClick={() => taskFilter('all')}>All</button>
            <button onClick={() => taskFilter('active')}>Active</button>
            <button onClick={() => taskFilter('completed')}>Completed</button>
        </div>
    </div>
}