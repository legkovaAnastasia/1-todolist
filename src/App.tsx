import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {Tasks} from "./Tasks";

function App() {

    let title = 'whant to learn1'
    let title0 = 'whant to learn2'
    let title2 = 2304834
    let title3 = true

    // let task = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "REACTJS", isDone: false},
    //     {id: 4, title: "REACTJS", isDone: false}
    // ]

    let [task, setTask] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "REACTJS", isDone: false},
        {id: 4, title: "REACTJS", isDone: false}
    ])
    const removeTask = (taskId:number) => {
        task = task.filter(el => el.id !==taskId)
        setTask(task)
    }
    const taskFilter = (value:string) => {
console.log(value)
    }
    return (
        <div className="App">
            <TodoList title={title} title2={title2} task={task} taskFilter={taskFilter} removeTask={removeTask}/>
        </div>
    );
}

// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.

export default App;
