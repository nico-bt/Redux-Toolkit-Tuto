import './App.css';
import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/counter'

export function App() {
  
  // useSelector for Reading data from store. state.<nombreReducerEnStore>.<valorDelState> 
  const count = useSelector(state => state.counter.count)
  
  // useDispatch to send actions (imported "decrement / increment/ etc..." from ""./redux/counter")
  const dispatch = useDispatch()

  //Local state for the amount to pass to incrementByAmount action
  const [amount, setAmount] = useState(1)

  return (
    <div className='App'>
      <header> Redux Toolkit </header>
      
      
      <button onClick={ () => dispatch(increment()) }> Increment </button>
      
      <span> {count} </span>
      
      <button onClick={ () => dispatch(decrement()) }> Decrement </button>

      <div>
        <button onClick={ () => dispatch(incrementByAmount(amount)) }> Increment by: </button>
        <input type={"number"} value={amount} onChange={(e)=>setAmount(parseInt(e.target.value))} />
      </div>
      
      <button onClick={ () => dispatch(reset()) }> Reset </button>
    </div>
  )
}

export default App;
