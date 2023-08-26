import {combineReducers, legacy_createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {todolistsReducer} from "./todolists-reducer";

//объединяя редьюсеры с помощью combineReducers
//мы задаем структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolist: todolistsReducer
})

//создаем сам стор
export const store=legacy_createStore(rootReducer)
//определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

//это чтобы можно было в консоли браузера в любой момент обращаться к стор
//@ts-ignore
window.store=store

