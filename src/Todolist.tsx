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
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle:string)=>void
    changeIsDone: (id:string, newIsDone:boolean)=>void

}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string|null>(null)
    const [btnName, setBtnName] = useState<'all'|'active'|'completed'>('all')
    const removeTaskHandler = (tId:string) => {
        props.removeTask(tId)
    }
    const changeFilter = (value:FilterValuesType) => {
        props.changeFilter(value)
        setBtnName(value)
    }
    const addTaskHandler = () => {
        if (title.trim()) {
            props.addTask(title.trim())
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
    const changeIsDoneHandler = (tId: string, isDone:boolean) => {
        props.changeIsDone(tId, isDone ) /////
    }

    const mappedTasks =
        props.tasks.map(t => {
            // const changeIsDoneHandler = (event: ChangeEvent<HTMLInputElement>) => {
            //     props.changeIsDone(t.id, event.currentTarget.checked)
            // }
                return <li key={t.id} className={t.isDone ? s.isDone : ''}>
                    <CheckBox1 checked={t.isDone} callBack={(isDone)=>changeIsDoneHandler(t.id, isDone)} />
                    <span>{t.title}</span>
                    <Button name={"x"} callBack={() => removeTaskHandler(t.id)}/>
                </li>
            }
        )
    return <div>
        <h3>{props.title}</h3>
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
            <button className={btnName==='all' ? s.activeFilter: ''} name={"Completed"} onClick={()=>changeFilter("all")}>all</button>
            <button className={btnName==='active' ? s.activeFilter: ''} name={"active"} onClick={()=>changeFilter("active")}>active</button>
            <button className={btnName==='completed' ? s.activeFilter: ''} name={"Completed"} onClick={()=>changeFilter("completed")}>completed</button>
        </div>
    </div>
}
