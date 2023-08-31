import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import AppWithReducer from "./AppWithReducer";
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/store";

const container  = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<Provider store={store}>
    <AppWithRedux />
 </Provider>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



//спринт 3 неделя 3
// import React, {useCallback, useMemo, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// type ButtonType = {
//     id: number
//     title: string
//     forAdminOnly: boolean
// }
// const buttons: ButtonType[] = [
//     {id: 1, title: 'delete', forAdminOnly: true},
//     {id: 2, title: 'update', forAdminOnly: true},
//     {id: 3, title: 'create', forAdminOnly: false},
// ]
//
// export const App = ({isAdmin}: { isAdmin: boolean }) => {
//
//     const [seconds, setSeconds] = useState(0)
//
//     const increaseSeconds = () => setSeconds(seconds + 10)
//
//     const correctButtons = xxx(() => { //useMemo
//         return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//     }, [yyy])//??
//
//     return <>
//         <ButtonsPanel buttons={correctButtons}/>
//         <div>
//             <p>
//                 <b>Секунды: {seconds}</b>
//             </p>
//             <button onClick={increaseSeconds}>
//                 Увеличить на 10 секунд
//             </button>
//         </div>
//     </>
// }
//
// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//     console.log('Render ButtonsPanel')
//     return (
//         <div style={{marginBottom: '15px'}}>
//             <div style={{marginBottom: '15px'}}>
//                 <b>Панель с кнопками</b>
//             </div>
//             <div>
//                 {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//             </div>
//         </div>
//     )
// })
//
// ReactDOM.render(<App isAdmin={true}/>, document.getElementById('root'))
//
// // Что нужно написать вместо XXX и YYY,
// // чтобы избавиться от лишнего перерендера компонента ButtonsPanel
// // при нажатии на кнопку "Увеличить на 10 секунд" ?
//
// // Ответ дайте через пробел: 111 222

// import React, {useMemo, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// export const TempManager = () => {
//     const [temp, setTemp] = useState(0)
//     const [seconds, setSeconds] = useState(0)
//
//     const resetTemp = (() => setTemp(0)
//     const resetTemp = useMemo(() => setTemp(0), [])
//     const increaseSeconds = () => setSeconds(seconds + 100)
//
//     return (
//         <>
//             <TempDisplay temp={temp} reset={resetTemp}/>
//             <div>
//                 <p><b>Секунды:</b> {seconds} с</p>
//                 <button onClick={increaseSeconds}>
//                     Увеличить время на 100 секунд
//                 </button>
//             </div>
//         </>
//     )
// }
//
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div>
//             <p><b>Температура</b>: {props.temp} &#176;</p>
//             <button onClick={props.reset}>Reset</button>
//         </div>
//     )
// })
//
// ReactDOM.render(<TempManager/>, document.getElementById('root'))
//
//
// //При увеличении времени (при клике на button) компонент TempDisplay
// //тоже перерисовывается. Эта перерисовка является избыточной.
// //Найдите в чем причина лишних перерисовок.
// //Исправленную версию строки напишите в качестве ответа.
//
// //Пример ответа: const increaseSeconds = () => setSeconds(seconds + 100)

// import React, { useCallback, useState } from 'react'
// import ReactDOM from 'react-dom'
//
// export const App = () => {
//     const [temp, setTemp] = useState(100)
//     const [seconds, setSeconds] = useState(0)
//
//     const resetTemp = useCallback(() => setTemp(0), [])
//
//     const incSec = useCallback(() => setSeconds(seconds + 1), [])
//     const incSec = useCallback(() => setSeconds(prevState => prevState + 1), [])
//
//     return <>
//         <TempDisplay temp={temp} resetTemp={resetTemp}/>
//         <SecDisplay seconds={seconds} incSec={incSec}/>
//     </>
// }
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div style={{marginBottom: '10px'}} onClick={props.reset}>
//             <p>
//                 <b>Температура: </b>{props.temp} &#176;
//             </p>
//             <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
//         </div>
//     )
// })
//
// const SecDisplay = React.memo((props: any) => {
//     console.log('Render SecDisplay')
//     return (
//         <div>
//             <p><b>Секунды:</b> {props.seconds} c </p>
//             <button style={{marginRight: '20px'}}
//                     onClick={props.incSec}>
//                 Увеличить время на 1 секунду
//             </button>
//         </div>
//     )
// })
//
// ReactDOM.render(<App/>, document.getElementById('root'))
//
// // Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// // Найдите в чем причина.
// // Исправленную версию строки напишите в качестве ответа
//
// // Пример ответа: const incSec = () => setSeconds(seconds + 1)

// import React, {memo, useCallback, useMemo, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// export const App = () => {
//     const [temp, setTemp] = useState(10)
//     const [seconds, setSeconds] = useState(100)
//
//     const increaseSeconds = () => setSeconds(seconds + 10)
//     const increaseTemp = xxx
//     const increaseTemp = useCallback(()=>setTemp(prevState => prevState+1),[temp])
//
//     return <>
//         <TempDisplay temp={temp} increaseTemp={increaseTemp}/>
//
//         <div>
//             <b>Секунды :</b> {seconds} с
//             <button style={{marginLeft: '15px'}}
//                     onClick={increaseSeconds}>
//                 Увеличить на 10 секунд
//             </button>
//         </div>
//     </>
// }
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div style={{marginBottom: '15px'}}
//              onClick={props.reset}>
//             <b>Температура:</b> {props.temp} &#176;
//             <button style={{marginLeft: '15px'}}
//                     onClick={props.increaseTemp}>
//                 Увеличить температуру на 1 градус
//             </button>
//         </div>
//     )
// })
//
// ReactDOM.render(<App/>, document.getElementById('root'));
//
// // Что надо написать вместо XXX для того, чтобы обязательно выполнялись 2 условия:
// // 1) При нажатии на кнопку "Увеличить температуру на 1 градус" температура увеличивалась
// // 2) Компонент TempDisplay не должен перерисовываться при нажатии на кнопку "Увеличить на 10 секунд"
//
// // Пример ответа: useEffect(() => setCounter(count + 1), [count])





















//спринт 3 неделя 2
// import {combineReducers, createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector} from 'react-redux'
// import React from 'react'
//
// let initialState = {items:
//         [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Ignat'}
//         ]
// }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }
//
// let rootReducer = combineReducers({
//     users: usersReducer,
//     auth: authReducer
// })
//
// const store = createStore(rootReducer)
// type RootStateType = ReturnType<typeof rootReducer>
//
// const selector = (state: RootStateType) => state.users.items
//
// const Users = () => {
//
//     const users =  XXX//selector(store.getState())
//
//     return <ul>
//         {users.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
// }
//
// ReactDOM.render(<div>
//         <Provider store={store}>
//             <Users/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )
//
// // Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// // ❗ Ответ дать минимально возможным объёмом кода
//
//
// import {combineReducers, createStore} from 'redux'
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// const store = createStore(combineReducers({
//     users: usersReducer
// }))
//
// store.subscribe(() => {
//     const state = xxx
//     console.log(state)
// })
//
// store.dispatch({type: 'ANY'})
//
// //Что нужно написать вместо XXX, чтобы получить актуальный стейт?

// import React, {useState, useReducer, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// const changeCounter = (state: number, action: any): number => {
//     switch (action.type) {
//         case "INC_VALUE":
//             return state + 1
//         case "RESET":
//             return 0
//         case "DEC_VALUE":
//             return state - 1
//         default:
//             return state
//     }
// }
//
// function Counter() {
//     const [value, setValue] = useReducer(changeCounter, 0)
//     const [isCounter, setIsCounter] = useState(true)
//     const commonStyles: React.CSSProperties = {
//         border: "1px solid black",
//         margin: "100px auto",
//         width: "300px",
//         height: "150px",
//         textAlign: "center",
//     }
//     const btnStyles: React.CSSProperties = {
//         color: "white",
//         fontWeight: "bold",
//         backgroundColor: "darkgray",
//         borderRadius: "3px",
//         minWidth: "40px"
//     }
//
//     return (
//         <div style={commonStyles}>{
//             isCounter
//                 ? <div >
//                     <div style={{marginBottom: "20px"}}>
//                         <h2>{value}</h2>
//                         <button
//                             style={{...btnStyles, backgroundColor: "red"}}
//                             onClick={() => setIsCounter(false)}>OFF</button>
//                     </div>
//                     <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
//                     <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
//                     <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>
//
//                 </div>
//                 : <div style={{textAlign: "center"}}>
//                     <h2>Counter not working</h2>
//                     <button
//                         style={{...btnStyles, backgroundColor: "green"}}
//                         onClick={() => setIsCounter(true)}>ON</button>
//                 </div>
//         }
//         </div>
//     )
// }
//
//
// ReactDOM.render(
//     <Counter/>, document.getElementById('root')
// );
// // Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.
// //прикольный счетчик!!!! сделано





















