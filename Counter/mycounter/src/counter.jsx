import { useState } from 'react'
import './counter.css'

function CounterApp(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }
    
    const decrement = () => {
        setCount(count - 1)
    }

    

    return(
        <>
          <h1>COUNTER</h1>
          <h1> {count} </h1>
          <button onClick={increment} className='btn1'>INCREMENT</button>
          <button onClick={reset} className='btn2'> RESET </button>
          <button onClick={decrement} disabled = {count == 0} className='btn3'> DECREMENT </button>
        </>
    )

}
export default CounterApp