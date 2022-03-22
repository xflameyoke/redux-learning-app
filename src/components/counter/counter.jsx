import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterStyled, ValueStyled } from './counter.styled';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment'})
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement'})
  };

  return (
    <CounterStyled>
      <h1>Redux Counter</h1>
      <ValueStyled>{counter}</ValueStyled>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </CounterStyled>
  );
};

export default Counter;
