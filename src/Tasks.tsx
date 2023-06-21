import React from "react";

// type TasksPropsType = {
//     data: DataPropsType[]
// }
type TasksPropsType = {
    title:string
    tasks: TodoPropsType[]
    students: string[]
}
type TodoPropsType = {
    taskId: number
    title: string
    isDone: boolean
}

// type VozrastPropsType = {
//     vozrast: number
// }

export const Tasks = (props: TasksPropsType) => {
 return(
     <div>
         <h3>
             {props.title}
         </h3>
         <div>
             <input/>
             <button>+</button>
         </div>
         <ul>
             {props.tasks.map((el=>{
                 return(
                         <li><input type="checkbox" checked={el.isDone}/>
                             <span>{el.title}</span></li>
                 )
                         }))}
         </ul>
         <ul>
             {props.students.map((el=>{
                 return(
                     <li>{el}</li>
                 )
             }))}
         </ul>
         <div>
             <button>All</button>
             <button>Active</button>
             <button>Completed</button>
         </div>
     </div>
 )
}
