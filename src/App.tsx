// import React, {useState} from 'react';
// import './App.css';
// import {TaskType, Todolist} from './Todolist';
// import {v1} from 'uuid';
// import AddItemForm from "./AddItemForm";
//
// export type FilterValuesType = "all" | "active" | "completed";
// type TodolistType = {
//     id: string
//     title: string
//     filter: FilterValuesType
// }
//
// type TasksStateType = {
//     [key: string]: Array<TaskType>
// }
//
//
// function App() {
//     let todolistId1 = v1();
//     let todolistId2 = v1();
//
//     let [todolists, setTodolists] = useState<Array<TodolistType>>([
//         {id: todolistId1, title: "What to learn", filter: "all"},
//         {id: todolistId2, title: "What to buy", filter: "all"}
//     ])
//
//     let [tasks, setTasks] = useState<TasksStateType>({
//         [todolistId1]: [
//             {id: v1(), title: "HTML&CSS", isDone: true},
//             {id: v1(), title: "JS", isDone: true}
//         ],
//         [todolistId2]: [
//             {id: v1(), title: "Milk", isDone: true},
//             {id: v1(), title: "React Book", isDone: true}
//         ]
//     });
//
//
//     function removeTask(id: string, todolistId: string) {
//         //достанем нужный массив по todolistId:
//         let todolistTasks = tasks[todolistId];
//         // перезапишем в этом объекте массив для нужного тудулиста отфилтрованным массивом:
//         tasks[todolistId] = todolistTasks.filter(t => t.id != id);
//         // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
//         setTasks({...tasks});
//     }
//
//     function addTask(title: string, todolistId: string) {
//         let task = {id: v1(), title: title, isDone: false};
//         //достанем нужный массив по todolistId:
//         let todolistTasks = tasks[todolistId];
//         // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску:
//         tasks[todolistId] = [task, ...todolistTasks];
//         // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
//         setTasks({...tasks});
//     }
//
//     function changeStatus(id: string, isDone: boolean, todolistId: string) {
//         //достанем нужный массив по todolistId:
//         let todolistTasks = tasks[todolistId];
//         // найдём нужную таску:
//         let task = todolistTasks.find(t => t.id === id);
//         //изменим таску, если она нашлась
//         if (task) {
//             task.isDone = isDone;
//             // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
//             setTasks({...tasks});
//         }
//     }
//
//     function changeFilter(value: FilterValuesType, todolistId: string) {
//         let todolist = todolists.find(tl => tl.id === todolistId);
//         if (todolist) {
//             todolist.filter = value;
//             setTodolists([...todolists])
//         }
//     }
//
//     function removeTodolist(id: string) {
//         // засунем в стейт список тудулистов, id которых не равны тому, который нужно выкинуть
//         setTodolists(todolists.filter(tl => tl.id != id));
//         // удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
//         delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
//         // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
//         setTasks({...tasks});
//     }
//
//     const addTodolist = (newTitle: string) => {
//         const todolistId = v1()
//         let newTodoList: TodolistType = {id: todolistId, title: newTitle, filter: "all"}
//         setTodolists([newTodoList, ...todolists])
//         setTasks({...tasks, [todolistId]: []})
//     }
//     const updateTask = (todolistId: string, taskId: string, newTitle: string) => {
//         setTasks({
//             ...tasks,
//             [todolistId]: tasks[todolistId].map(el => el.id === taskId ? {...el, title: newTitle} : el)
//         })
//     }
//     const updateTodoListTitle = (todolistId: string, title: string) => {
//         setTodolists(todolists.map(el => el.id === todolistId ? {...el, title} : el)) // можно было бы записть через приходящий newTitle, т.е. title:newTitle, но так (прочто через совпадающие ключ-значение - взрослее типа
//         // console.log(newTitle)
//     }
//     return (
//         <div className="App">
//             <AddItemForm callback={addTodolist}/>
//
//             {
//                 todolists.map(tl => {
//                     let allTodolistTasks = tasks[tl.id];
//                     let tasksForTodolist = allTodolistTasks;
//
//                     if (tl.filter === "active") {
//                         tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
//                     }
//                     if (tl.filter === "completed") {
//                         tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
//                     }
//
//                     return <Todolist
//                         key={tl.id}
//                         id={tl.id}
//                         title={tl.title}
//                         tasks={tasksForTodolist}
//                         removeTask={removeTask}
//                         changeFilter={changeFilter}
//                         addTask={addTask}
//                         changeTaskStatus={changeStatus}
//                         filter={tl.filter}
//                         removeTodolist={removeTodolist}
//                         updateTask={updateTask}
//                         updateTodoListTitle={updateTodoListTitle}
//                     />
//                 })
//             }
//
//         </div>
//     );
// }
//
// export default App;


import React, {useEffect, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

type TodoFromServerType = {
    title: string
    filter: FilterValuesType
    tasks: Array<TasksType>
    students: Array<string>
}
export type TasksType = {
    taskId: string
    title: string
    isDone: boolean
}
type TodoType= TodoFromServerType&{
    todolistId:string
}
export type FilterValuesType = "all" | "active" | "completed";



function App() {
    // let todolistId1 = v1();
    // let todolistId2 = v1();
    //
    // let [todolists, setTodolists] = useState<Array<TodolistType>>([
    //     {id: todolistId1, title: "What to learn", filter: "all"},
    //     {id: todolistId2, title: "What to buy", filter: "all"}
    // ])
    //
    // let [tasks, setTasks] = useState<TasksStateType>({
    //     [todolistId1]: [
    //         {id: v1(), title: "HTML&CSS", isDone: true},
    //         {id: v1(), title: "JS", isDone: true}
    //     ],
    //     [todolistId2]: [
    //         {id: v1(), title: "Milk", isDone: true},
    //         {id: v1(), title: "React Book", isDone: true}
    //     ]
    // });

    const todoFromServer: TodoFromServerType[]=[
        {
            title: "What to learn",
            filter: "all",
            tasks: [
                {taskId: v1(), title: "HTML&CSS", isDone: true},
                {taskId: v1(), title: "JS", isDone: true}
            ],
            students: [
                'Rick Kane',
                'Finnlay Bentley',
                'Samia North',
                'Isaac Morton',
                'Lily-Ann Clifford',
                'Thalia Park',
                'Sapphire Cruz',
                'Cieran Vazquez',
                'Anya Estes',
                'Dominika Field',
                'Rosanna Chung',
                'Safiyah Davey',
                'Ryley Beasley',
                'Kalvin Trejo',
                'Evie-Mae Farrell',
                'Juliet Valencia',
                'Astrid Austin',
                'Lyle Montgomery',
                'Nisha Mora',
                'Kylie Callaghan',
                'Star Wilks',
                'Marissa Colley',
                'Asa Fuller',
                'Leigh Kemp',
                'Avleen Dawson',
                'Sammy Bonilla',
                'Acacia Becker',
                'Coral Shepherd',
                'Melina Molina',
                'Kiran Bailey',
                'Clara Escobar',
                'Alexandru Horn',
                'Brandon-Lee Mercado',
                'Elouise Weston',
                'King Long',
                'Kerri Searle',
                'Kanye Hamer',
                'Elwood Benitez',
                'Mikail Whitaker',
                'Bobby Hardy',
                'Talha Ferry',
                'Priscilla Landry',
                'Olivia-Grace Cain',
                'Kiaan Wallace',
                'Wesley Padilla90',
                'Ella-Grace Wooten91',
                'Kaif Molloy92',
                'Kamal Broadhurst93',
                'Bianca Ferrell94',
                'Micheal Talbot95',
            ]
        },
        {
            title: "What to do",
            filter: "all",
            tasks: [
                {taskId: v1(), title: "HTML&CSS2", isDone: true},
                {taskId: v1(), title: "JS2", isDone: true}
            ],
            students: [
                'Jago Wormald1',
                'Saul Milne2',
                'Aariz Hester3',
                'Dion Reeve4',
                'Anisa Ortega5',
                'Blade Cisneros6',
                'Malaikah Phelps7',
                'Zeeshan Gallagher8',
                'Isobella Vo9',
                'Rizwan Mathis10',
                'Menaal Leach11',
                'Kian Walton12',
                'Orion Lamb13',
                'Faizah Huynh14',
                'Crystal Vaughan15',
                'Vivien Hickman16',
                'Stuart Lu17',
                'Karol Davison18',
                'Dario Burns19',
                'Chloe Rich20',
                'Martyna Felix',
                'Nida Glass',
                'Maeve Miles',
                'Hasnain Puckett',
                'Ayman Cano',
                'Safwan Perry',
                'Fox Kelly',
                'Louise Barlow',
                'Malaki Mcgill',
                'Leanna Cline',
                'Willard Hodge',
                'Amelia Dorsey',
                'Kiah Porter',
                'Jeanne Daly',
                'Mohsin Armstrong',
                'Laurie Rangel',
                'Princess Tierney',
                'Kasim Kendall',
                'Darryl Cope',
                'Elysha Ray',
                'Liyana Harris',
                'Kashif Blackburn',
                'Atif Zimmerman',
                'Sila Hartley',
                'Ralphie Hebert',
            ]
        }
    ]

    const [todo, setTodo]=useState<TodoType[]>([])
    useEffect(()=>{
        setTodo(todoFromServer.map(el=>({...el, todolistId:v1()})))
    }, [])
    function removeTask(id: string, todolistId: string) {
        setTodo(todo.map(el=>el.todolistId===id ? {...el, tasks:el.tasks.filter(t=>t.taskId!==id)}:el))
    }
    function addTask(title: string, todolistId: string) {
        let newTask = {taskId: v1(), title: title, isDone: false};
        setTodo(todo.map(el=>el.todolistId===todolistId? {...el, tasks:[...el.tasks, newTask ]}:el))
    }
    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        setTodo(todo.map(el=>el.todolistId===todolistId?{...el, tasks:el.tasks.map(t=>t.taskId===id? {...t, isDone}:t)}:el))
    }
    function changeFilter(value: FilterValuesType, todolistId: string) {
        setTodo(todo.map(t=>t.todolistId===todolistId? {...t, filter:value}:t))
    }

    function removeTodolist(id: string) {
        setTodo(todo.filter(el=>el.todolistId!==id))
    }

    return (
        <div className="App">
            {
                todo.map(tl => {
                    let allTodolistTasks = tl.tasks;
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }

                    return <Todolist
                        key={tl.todolistId}
                        id={tl.todolistId}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                    />
                })
            }

        </div>
    );
}

export default App;
