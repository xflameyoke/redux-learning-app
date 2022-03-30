import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CounterStyled, ValueStyled } from './counter.styled'
import { counterActions } from '../../store/store'

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
        dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const multiplyHandler = () => {
        dispatch(counterActions.multiply())
    }

    const divideHandler = () => {
        dispatch(counterActions.divide())
    }

    const clearHandler = () => {
        dispatch(counterActions.clear())
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }

    const toggleHandler = () => {
        dispatch(counterActions.toggle())
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
