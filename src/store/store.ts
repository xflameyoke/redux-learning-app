import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state: { counter: number }) {
            state.counter++
        },
        decrement(state: { counter: number }) {
            state.counter--
        },
        multiply(state: { counter: number }) {
            state.counter = state.counter * 2
        },
        divide(state: { counter: number }) {
            state.counter = state.counter / 2
        },
        clear(state: { counter: number }) {
            state.counter = 0
        },
        increase(state: { counter: number }, action: PayloadAction<number>) {
            state.counter = state.counter + action.payload
        },
        toggle(state: { showCounter: boolean }) {
            state.showCounter = !state.showCounter
        },
    },
})

const store = configureStore({
    reducer: counterSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const counterActions = counterSlice.actions

export default store
