import { TaskPriorities, TaskStatuses, TaskType, todolistsAPI, UpdateTaskModelType } from "api/todolists-api"
import { Dispatch } from "redux"
import { AppThunk } from "app/store"
import { appActions } from "app/app-reducer"
import { handleServerAppError, handleServerNetworkError } from "utils/error-utils"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { todolistsActions } from "features/TodolistsList/todolists-reducer"

const slice = createSlice({
  name: "tasks",
  initialState: {} as TasksStateType,
  reducers: {
    removeTask: (state, action: PayloadAction<{ taskId: string; todolistId: string }>) => {
      const tasksForTodolist = state[action.payload.todolistId]
      const index = tasksForTodolist.findIndex((task) => task.id === action.payload.taskId)
      if (index !== -1) tasksForTodolist.splice(index, 1)
    },
    addTask: (state, action: PayloadAction<{ task: TaskType }>) => {
      const tasksForTodolist = state[action.payload.task.todoListId]
      tasksForTodolist.unshift(action.payload.task)
    },
    updateTask: (state, action: PayloadAction<{ taskId: string; model: UpdateDomainTaskModelType; todolistId: string }>) => {
      const tasksForTodolist = state[action.payload.todolistId]
      const index = tasksForTodolist.findIndex((task) => task.id === action.payload.taskId)
      if (index !== -1) {
        tasksForTodolist[index] = { ...tasksForTodolist[index], ...action.payload.model }
      }
    },
    setTasks: (state, action: PayloadAction<{ tasks: Array<TaskType>; todolistId: string }>) => {
      state[action.payload.todolistId] = action.payload.tasks
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(todolistsActions.addTodolist, (state, action) => {
        state[action.payload.todolist.id] = []
      })
      .addCase(todolistsActions.removeTodolist, (state, action) => {
        delete state[action.payload.id]
      })
      .addCase(todolistsActions.setTodolists, (state, action) => {
        action.payload.todolists.forEach((tl) => (state[tl.id] = []))
      })
  },
})

export const tasksReducer = slice.reducer
export const tasksAction = slice.actions

// thunks
export const fetchTasksTC =
  (todolistId: string): AppThunk =>
  (dispatch: Dispatch) => {
    dispatch(appActions.setAppStatus({ status: "loading" }))
    todolistsAPI.getTasks(todolistId).then((res) => {
      const tasks = res.data.items
      dispatch(tasksAction.setTasks({ tasks, todolistId }))
      dispatch(appActions.setAppStatus({ status: "succeeded" }))
    })
  }
export const removeTaskTC =
  (taskId: string, todolistId: string): AppThunk =>
  (dispatch: Dispatch) => {
    todolistsAPI.deleteTask(todolistId, taskId).then(() => {
      dispatch(tasksAction.removeTask({ taskId, todolistId }))
    })
  }
export const addTaskTC =
  (title: string, todolistId: string): AppThunk =>
  (dispatch: Dispatch) => {
    dispatch(appActions.setAppStatus({ status: "loading" }))
    todolistsAPI
      .createTask(todolistId, title)
      .then((res) => {
        if (res.data.resultCode === 0) {
          const task = res.data.data.item
          const action = tasksAction.addTask({ task })
          dispatch(action)
          dispatch(appActions.setAppStatus({ status: "succeeded" }))
        } else {
          handleServerAppError(res.data, dispatch)
        }
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch)
      })
  }
export const updateTaskTC =
  (taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string): AppThunk =>
  (dispatch, getState) => {
    const state = getState()
    const task = state.tasks[todolistId].find((t) => t.id === taskId)
    if (!task) {
      //throw new Error("task not found in the state");
      console.warn("task not found in the state")
      return
    }

    const apiModel: UpdateTaskModelType = {
      deadline: task.deadline,
      description: task.description,
      priority: task.priority,
      startDate: task.startDate,
      title: task.title,
      status: task.status,
      ...domainModel,
    }

    todolistsAPI
      .updateTask(todolistId, taskId, apiModel)
      .then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(tasksAction.updateTask({ taskId, model: domainModel, todolistId }))
        } else {
          handleServerAppError(res.data, dispatch)
        }
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch)
      })
  }

// types
export type UpdateDomainTaskModelType = {
  title?: string
  description?: string
  status?: TaskStatuses
  priority?: TaskPriorities
  startDate?: string
  deadline?: string
}
export type TasksStateType = {
  [key: string]: Array<TaskType>
}
