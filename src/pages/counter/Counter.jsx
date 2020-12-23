import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment, decrement } from '../../store/counter'

function Counter() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  return (
    <div className="counter-container">
        <p>
          Clicked: <span id="value">{ counter }</span> times
          <button id="increment" onClick={() => dispatch(increment())}>+</button>
          <button id="decrement" onClick={() => dispatch(decrement())}>-</button>
          <button id="incrementIfOdd">Increment if odd</button>
          <button id="incrementAsync">Increment async</button>
        </p>
    </div>
  );
}

export default Counter
