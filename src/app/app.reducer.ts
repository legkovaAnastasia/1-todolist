import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type AppInitialStateType = typeof initialState;
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

const initialState = {
  status: "idle" as RequestStatusType,
  error: null as string | null,
  isInitialized: false
}

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
    setAppInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        (action) => {
          console.log('addMatcher matcher: ', action.type)
          return action.type.endsWith('/pending')
        },
        (state: AppInitialStateType, action) => {
          state.status = 'loading'
          console.log('✅ addMatcher reducer')
        }
      )
      .addMatcher(
        (action) => {
          console.log('addMatcher matcher: ', action.type)
          return action.type.endsWith('/fulfilled')
        },
        (state: AppInitialStateType, action) => {
          state.status = 'succeeded'
          console.log('✅ addMatcher reducer')
        }
      )
      .addMatcher(
        (action) => {
          console.log('addMatcher matcher: ', action.type)
          return action.type.endsWith('/rejected')
        },
        (state: AppInitialStateType, action) => {
          state.status = 'failed'
          console.log('✅ addMatcher reducer')
        }
      )
  }
  })

export const appReducer = slice.reducer
export const appActions = slice.actions
