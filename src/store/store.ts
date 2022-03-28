import { createStore } from 'redux'

const counterReducer = (state = { counter: 0 }, action: { type: string }) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        }
    }

    if (action.type === 'multiply') {
        return {
            counter: state.counter * 2,
        }
    }

    if (action.type === 'divide') {
        return {
            counter: state.counter / 2,
        }
    }

    if (action.type === 'clear') {
        return {
            counter: state.counter - state.counter,
        }
    }

    return state
}

const store = createStore(counterReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store