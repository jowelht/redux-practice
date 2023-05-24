import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../../store/counter/counterSlice'

export function Counter() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(counterActions.increment())}
        >
          Increment
        </button>
        <br />
        <span>{counter.totalQuantity}</span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(counterActions.decrement())}
        >
          Decrement
        </button>
        <br />
        <button
          aria-label="Increment value 10"
          onClick={() => dispatch(counterActions.addby(10))}
        >
          Increment 10 
        </button>
      </div>
    </div>
  )
}