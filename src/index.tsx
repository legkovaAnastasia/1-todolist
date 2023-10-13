import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './app/App';
import {Provider} from 'react-redux';
import {store} from './app/store';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client';
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import axios, { AxiosError } from 'axios';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
// import {Simulate} from "react-dom/test-utils";
// import error = Simulate.error;
//
//
// // Types
// type NullableType<T> = null | T
//
// type LoginFieldsType = {
//     email: string
//     password: string
// }
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//     login(data: LoginFieldsType) {
//         return instance.post('auth/login', data)
//     },
// }
//
//
// // Reducer
// const initState = {
//     isLoading: false,
//     error: null as NullableType<string>,
//     isLoggedIn: false,
// }
//
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case 'APP/SET-IS-LOGGED-IN':
//             return {...state, isLoggedIn: action.isLoggedIn}
//         case 'APP/IS-LOADING':
//             return {...state, isLoading: action.isLoading}
//         case 'APP/SET-ERROR':
//             return {...state, error: action.error}
//         default:
//             return state
//     }
// }
//
// // Actions
// const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'APP/SET-IS-LOGGED-IN', isLoggedIn} as const)
// const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
// const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
// type ActionsType = | ReturnType<typeof setIsLoggedIn> | ReturnType<typeof setLoadingAC> | ReturnType<typeof setError>
//
// // Thunk
// const loginTC = (values: LoginFieldsType): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true))
//     api.login(values)
//         .then((res) => {
//             dispatch(setIsLoggedIn(true))
//             alert('Вы залогинились успешно')
//         })
//         .catch((e) => {
//             dispatch(setError(e.data.error))
//         })
//         .finally(() => {
//             dispatch(setLoadingAC(false))
//         })
// }
//
// // Store
// const rootReducer = combineReducers({
//     app: appReducer,
// })
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
//
// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>
// }
//
// // App
// export const App = () => {
//
//     const dispatch = useAppDispatch()
//
//     const [form, setForm] = useState<LoginFieldsType>({email: '', password: ''})
//
//     const error = useAppSelector(state => state.app.error)
//     const isLoading = useAppSelector(state => state.app.isLoading)
//
//     const changeFormValuesHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
//         if (field === 'email') {
//             setForm({...form, email: e.currentTarget.value})
//         }
//         if (field === 'password') {
//             setForm({...form, password: e.currentTarget.value})
//         }
//     };
//
//     const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault()
//         dispatch(loginTC(form))
//     };
//
//     return (
//         <div>
//             {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
//             {isLoading && <Loader/>}
//             <form>
//                 <div>
//                     <input placeholder={'Введите email'}
//                            value={form.email}
//                            onChange={(e) => changeFormValuesHandler(e, 'email')}
//                     />
//                 </div>
//                 <div>
//                     <input type={'password'}
//                            placeholder={'Введите пароль'}
//                            value={form.password}
//                            onChange={(e) => changeFormValuesHandler(e, 'password')}
//                     />
//                 </div>
//                 <button type="submit" onClick={submitForm}>Залогиниться</button>
//             </form>
//         </div>
//     );
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)
//
// // 📜 Описание:
// // Перед вами форма логинизации. Введите любые логин и пароль и попробуйте залогиниться.
// // У вас это навряд ли получится 😈, т.к. вы не знаете email и пароль.
// // Откройте Network и проанализируйте запрос.
// // Задача: вывести сообщение об ошибке, которую возвращает сервера говорящую о том что email или password некорректны.
//
// // В качестве ответа указать строку коду, которая позволит это осуществить.
// // 🖥 Пример ответа: dispatch('Error message')
// // ❗ Типизировать ошибку не надо, т.к. там есть много нюансов, о которых вы узнаете позже


// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import axios, { AxiosError } from 'axios';
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
//
// // Types
// type PhotoType = {
//     albumId: string
//     id: string
//     title: string
//     url: string
// }
//
// // Api
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const photosAPI = {
//     getPhotos() {
//         return instance.get<PhotoType[]>('pictures?delay=3')
//     },
// }
//
//
// // Reducer
// const initState = {
//     isLoading: false,
//     error: null as string | null,
//     photos: [] as PhotoType[]
// }
//
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case 'PHOTO/GET-PHOTOS':
//             return {...state, photos: action.photos}
//         case 'PHOTO/IS-LOADING':
//             return {...state, isLoading: action.isLoading}
//         case 'PHOTO/SET-ERROR':
//             return {...state, error: action.error}
//         default:
//             return state
//     }
// }
//
// const getPhotosAC = (photos: PhotoType[]) => ({type: 'PHOTO/GET-PHOTOS', photos} as const)
// const setLoadingAC = (isLoading: boolean) => ({type: 'PHOTO/IS-LOADING', isLoading} as const)
// const setError = (error: string | null) => ({type: 'PHOTO/SET-ERROR', error} as const)
// type ActionsType =
//     | ReturnType<typeof getPhotosAC>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setError>
//
// const getPhotosTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true))
//     photosAPI.getPhotos()
//         .then((res) => {
//             dispatch(getPhotosAC(res.data))
//         })
//         .catch((e: AxiosError) => {
//             dispatch(setError(e.message))
//         })
// }
//
// // Store
// const rootReducer = combineReducers({
//     app: appReducer
// })
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
//
// // Loader
// export const Loader = () => {
//     return (
//         <h1>Loading ...</h1>
//     )
// }
//
// // App
// const App = () => {
//     const dispatch = useAppDispatch()
//
//     const photos = useAppSelector(state => state.app.photos)
//     const isLoading = useAppSelector(state => state.app.isLoading)
//     const error = useAppSelector(state => state.app.error)
//
//     const getPhotosHandler = () => {
//         dispatch(getPhotosTC())
//     };
//
//     return (
//         <>
//             <h1>📸 Фото</h1>
//             <h2 style={{color: 'red'}}>{!!error && error}</h2>
//             {isLoading && <Loader/>}
//             <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//             <div style={{display: 'flex', gap: '20px', margin: '20px'}}>
//                 {
//                     photos.map(p => {
//                         return <div key={p.id}>
//                             <b>title</b>: {p.title}
//                             <div><img src={p.url} alt=""/></div>
//                         </div>
//                     })
//                 }
//             </div>
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)
//
//
// // 📜 Описание:
// // При нажатии на кнопку "Подгрузить фотографии" появляется Loading... и сообщение об ошибке.
// // Ваша задача состоит в том, чтобы спрятать Loader независимо от того, как завершится запрос на сервер.
// // Т.е. если ответ придет успешный - Loader убираем
// //      если ответ придет с ошибкой - Loader тоже убираем.
// // Напишите код, с помощью которого можно реализовать данную задачу
// // В качестве ответа напишите строку кода.
//
// // 🖥 Пример ответа: .then(() =>  dispatch(getPhotosAC(res.data)))

// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import axios from 'axios';
// import {isDisabled} from "@testing-library/user-event/utils/misc/isDisabled";
//
//
// // Types
// type PostDomainType = PostType & {
//     isDisabled: boolean
// }
//
// type PostType = {
//     body: string
//     id: string
//     title: string
//     userId: string
// }
//
//
// // Api
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>('posts')
//     },
//     deletePost(id: string) {
//         return instance.delete<{ message: string }>(`posts/${id}?delay=3`)
//     }
// }
//
//
// // Reducer
// const initState = {
//     isLoading: false,
//     posts: [] as PostDomainType[]
// }
//
// type InitStateType = typeof initState
//
// const postsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case 'POSTS/GET-POSTS':
//             return {
//                 ...state, posts: action.posts.map(t => {
//                     return {...t, isDisabled: false}
//                 })
//             }
//
//         case 'POSTS/DELETE-POST':
//             return {...state, posts: state.posts.filter(t => t.id !== action.id)}
//
//         case 'POSTS/IS-LOADING':
//             return {...state, isLoading: action.isLoading}
//
//         case 'POSTS/IS-DISABLED':
//             return {
//                 ...state, posts: state.posts.map((t) => {
//                     if (t.id === action.id) {
//                         return {...t, isDisabled: action.isDisabled}
//                     } else {
//                         return t
//                     }
//                 })
//             }
//
//         default:
//             return state
//     }
// }
//
// const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
// const deletePostAC = (id: string) => ({type: 'POSTS/DELETE-POST', id} as const)
// const setLoadingAC = (isLoading: boolean) => ({type: 'POSTS/IS-LOADING', isLoading} as const)
// const setIsDisabled = (isDisabled: boolean, id: string) => ({type: 'POSTS/IS-DISABLED', isDisabled, id} as const)
// type ActionsType =
//     | ReturnType<typeof getPostsAC>
//     | ReturnType<typeof deletePostAC>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setIsDisabled>
//
// // Thunk
// const getPostsTC = (): AppThunk => (dispatch) => {
//     postsAPI.getPosts()
//         .then((res) => {
//             dispatch(getPostsAC(res.data))
//         })
// }
//
// const deletePostTC = (id: string): AppThunk => (dispatch) => {
//     dispatch(setIsDisabled(true, id))
//     dispatch(setLoadingAC(true))
//     postsAPI.deletePost(id)
//         .then((res) => {
//             dispatch(deletePostAC(id))
//             dispatch(setLoadingAC(false))
//         })
// }
//
// // Store
// const rootReducer = combineReducers({
//     posts: postsReducer,
// })
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
//
// // Loader
// export const Loader = () => {
//     return (
//         <h1>Loading ...</h1>
//     )
// }
//
// // App
// const App = () => {
//     const dispatch = useAppDispatch()
//     const posts = useAppSelector(state => state.posts.posts)
//     const isLoading = useAppSelector(state => state.posts.isLoading)
//
//     useEffect(() => {
//         dispatch(getPostsTC())
//     }, [])
//
//     const deletePostHandler = (id: string) => {
//         dispatch(deletePostTC(id))
//     };
//
//     return (
//         <div>
//             <div style={{position: 'absolute', top: '0px'}}>
//                 {isLoading && <Loader/>}
//             </div>
//             <div style={{marginTop: '100px'}}>
//                 <h1>📜 Список постов</h1>
//                 {posts.map(p => {
//                     return (
//                         <div key={p.id}>
//                             <b>title</b>: {p.title}
//                             <button style={{marginLeft: '15px'}}
//                                     onClick={() => deletePostHandler(p.id)}
//                             >
//                                 удалить пост
//                             </button>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)
//
// // 📜 Описание:
// // Перед вами список постов.
// // Откройте network и быстро нажмите на кнопку удалить пост несколько раз подряд.
// // Откройте вкладку Preview и проанализируйте ответ с сервера
// // Первое сообщение будет "Post has been successfully deleted",
// // а следующие "Post with id: 63626ac315d01f80765587ee does not exist"
// // Т.е. бэкенд первый раз удаляет, а потом уже не может, т.к. пост удален из базы данных.
//
// // Ваша задача при первом клике задизаблить кнопку удаления,
// // соответсвенно не давать пользователю возможности слать повторные запросы
// // Необходимую строку кода для решения этой задачи напишите в качестве ответа.
//
// // 🖥 Пример ответа: style={{marginRight: '20px'}}

