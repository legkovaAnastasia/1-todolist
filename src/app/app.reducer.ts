import { AnyAction, createSlice, isFulfilled, isPending, isRejected, PayloadAction } from "@reduxjs/toolkit";

export type AppInitialStateType = typeof initialState;
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

const initialState = {
  status: "idle" as RequestStatusType,
  error: null as string | null,
  isInitialized: false,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error;
    },
    setAppInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, (state: AppInitialStateType) => {
        state.status = "loading";
        console.log("✅ addMatcher reducer");
      })
      .addMatcher(isFulfilled, (state: AppInitialStateType) => {
        state.status = "succeeded";
        console.log("✅ addMatcher reducer");
      })
      .addMatcher(isRejected, (state: AppInitialStateType, action: AnyAction) => {
        state.status = "failed";
        if (action.payload) {
          if (action.type === "todo/addTodolist/rejected") return;
          state.error = action.payload.messages[0];
        } else {
          state.error = action.error.message ? action.error.message : "Some error occurred";
        }
      });
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
