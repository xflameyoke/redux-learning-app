import { createStore } from 'redux'

const counterReducer = (
    state = { counter: 0, showCounter: true },
    action: { type: string; value: number }
) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'multiply') {
        return {
            counter: state.counter * 2,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'divide') {
        return {
            counter: state.counter / 2,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'clear') {
        return {
            counter: state.counter - state.counter,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter,
        }
    }

    return state
}

const store = createStore(counterReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
