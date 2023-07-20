import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";
import s from './Todolist.module.css'
import {CheckBox1} from "./components/CheckBox1";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string,taskId: string) => void
    changeFilter: (todolistId: string,value: FilterValuesType) => void
    addTask: (todolistId: string,newTitle:string)=>void
    changeIsDone: (todolistId: string,id:string, newIsDone:boolean)=>void
    filter:FilterValuesType
    removeTodoList: (todolistId: string,)=>void
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string|null>(null)
    const [btnName, setBtnName] = useState<'all'|'active'|'completed'>('all')
    const removeTaskHandler = (todolistId: string, tId:string) => {
        props.removeTask(todolistId,tId)
    }
    const changeFilter = (todolistId: string,value:FilterValuesType) => {
        props.changeFilter(props.todolistId, value)
        setBtnName(value)
    }
    const addTaskHandler = () => {
        if (title.trim()) {
            props.addTask(props.todolistId,title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const onKeyHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter"){
            addTaskHandler()
        }
    }
    const changeIsDoneHandler = (todolistId: string,tId: string, isDone:boolean) => {
        props.changeIsDone(props.todolistId,tId, isDone )
    }
    const removeTodoListHandler= (todolistId: string) => {
        props.removeTodoList(props.todolistId)
    }

    const mappedTasks =
        props.tasks.map(t => {
                return <li key={t.id} className={t.isDone ? s.isDone : ''}>
                    <CheckBox1 checked={t.isDone} callBack={(isDone)=>changeIsDoneHandler(props.todolistId, t.id, isDone)} />
                    <span>{t.title}</span>
                    <Button name={"x"} callBack={() => removeTaskHandler(props.todolistId, t.id)}/>
                </li>
            }
        )
    return <div>
        <h3>{props.title}</h3>
        <Button name={'removeTodoList'} callBack={()=>removeTodoListHandler(props.todolistId)}/>
        <div>
            <input className={error ? s.error : ''} value={title}
                   onKeyDown={onKeyHandler}
                   onChange={onChangeHandler}/>
            <button onClick={addTaskHandler}>+</button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
        <ul>
            {mappedTasks}
        </ul>
        <div>
            {/*<Button name={"All"} callBack={()=>changeFilter("all")}/>*/}
            {/*<Button name={"Active"} callBack={()=>changeFilter("active")}/>*/}
            {/*<Button name={"Completed"} callBack={()=>changeFilter("completed")}/>*/}
            <button className={btnName==='all' ? s.activeFilter: ''} name={"Completed"} onClick={()=>changeFilter(props.todolistId, "all")}>all</button>
            <button className={btnName==='active' ? s.activeFilter: ''} name={"active"} onClick={()=>changeFilter(props.todolistId, "active")}>active</button>
            <button className={btnName==='completed' ? s.activeFilter: ''} name={"Completed"} onClick={()=>changeFilter(props.todolistId, "completed")}>completed</button>
        </div>
    </div>
}
