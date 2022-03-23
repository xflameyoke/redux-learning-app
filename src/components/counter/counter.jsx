import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterStyled, ValueStyled } from './counter.styled';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  };

  const multiplyHandler = () => {
    dispatch({ type: 'multiply' })
  };

  const divideHandler = () => {
    dispatch({ type: 'divide' })
  };

  const clearHandler = () => {
    dispatch({ type: 'clear' })
  }

  return (
    <CounterStyled>
      <h1>Redux Counter</h1>
      <ValueStyled>{counter}</ValueStyled>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={multiplyHandler}>Multiply</button>
        <button onClick={divideHandler}>Divide</button>
        <button onClick={clearHandler}>Clear</button>
      </div>
    </CounterStyled>
  );
};

export default Counter;
