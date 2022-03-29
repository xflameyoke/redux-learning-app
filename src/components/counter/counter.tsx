import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CounterStyled, ValueStyled } from './counter.styled'

interface RootState {
    showCounter: boolean
    counter: number
}

const numberChange = (state: RootState) => state.counter
const showChange = (state: RootState) => state.showCounter

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(numberChange)
    const show = useSelector(showChange)

    const incrementHandler = () => {
        dispatch({ type: 'increment' })
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement' })
    }

    const multiplyHandler = () => {
        dispatch({ type: 'multiply' })
    }

    const divideHandler = () => {
        dispatch({ type: 'divide' })
    }

    const clearHandler = () => {
        dispatch({ type: 'clear' })
    }

    const increaseHandler = () => {
        dispatch({ type: 'increase', value: 5 })
    }

    const toggleHandler = () => {
        dispatch({ type: 'toggle' })
    }

    return (
        <CounterStyled>
            <h1>Redux Counter</h1>
            {show && <ValueStyled>{counter}</ValueStyled>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={multiplyHandler}>Multiply by 2</button>
                <button onClick={divideHandler}>Divide by 2</button>
                <button onClick={clearHandler}>Clear</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={toggleHandler}>Toggle Counter</button>
            </div>
        </CounterStyled>
    )
}

export default Counter
