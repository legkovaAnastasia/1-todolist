export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as string|null
}

type InitialStateType = typeof initialState
export type SetStatusType = ReturnType<typeof setStatusAC>
export type SetErrorType = ReturnType<typeof setErrorAC>
export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR": {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

export const setStatusAC = (status: RequestStatusType)=> ({type: 'APP/SET-STATUS', status} as const)
export const setErrorAC = (error: string|null)=> ({type: 'APP/SET-ERROR', error} as const)
type ActionsType = SetStatusType | SetErrorType