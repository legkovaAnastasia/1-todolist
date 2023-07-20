import React, {useState} from 'react';
import './App.css';
// import {Todolist} from '/Todolistist';
import {v1} from "uuid";
import {Todolist} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed";
type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {
    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });
    const changeisDone = (todolistId: string, taskId: string, newIsDone: boolean) => {
        // setTasks(tasks.map(el=>el.id===todolistId ? {...el, isDone: newIsDone} : el))
        setTasks({...tasks, [todolistId]:tasks[todolistId].map(el=>el.id===taskId?{...el, isDone:newIsDone} : el)})
        // setTasks(tasks.map(el => el.id === newId ? {...el, isDone: newIsDone} : el))
    }

    const addTask = (todolistId: string,newTitle: string) => {
        let newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks({...tasks, [todolistId]:[newTask,...tasks[todolistId]]})
    }

    function removeTask(todolistId: string, id: string) {
        setTasks({...tasks, [todolistId]:tasks[todolistId].filter(el=>el.id!=id)})
    }

    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTodolists(todolists.map(el=>el.id===todolistId ? {...el, filter:value} : el))
    }

    function removeTodoList(todolistId: string) {
        setTodolists(todolists.filter(el=>el.id!=todolistId))
        delete tasks[todolistId]
    }

    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id];
                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                }

                return <Todolist key={el.id}
                                 todolistId={el.id}
                                 title={el.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeIsDone={changeisDone}
                                 filter={el.filter}
                                 removeTodoList={removeTodoList}
                />
            })}
        </div>
    );
}

export default App;

