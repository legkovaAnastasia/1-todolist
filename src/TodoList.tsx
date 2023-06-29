import React from "react";

type TodoListPropsType = {
    title: string
    title2?: number
    title3?: boolean
    task: TaskPropsType[]
    removeTask: (id: number) => void
    taskFilter: (value:string) => void
}

type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}


export const TodoList = (props: TodoListPropsType) => {
    return <div>
        <h3>{props.title} {props.title2} {props.title3}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.task.map((el => {
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
            <button onClick={() => props.taskFilter('all')}>All</button>
            <button onClick={() => props.taskFilter('active')}>Active</button>
            <button onClick={() => props.taskFilter('completed')}>Completed</button>
        </div>
    </div>
}