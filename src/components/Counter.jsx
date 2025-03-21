import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1)
        console.log(count);
    }
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <p>counter: {count}</p>
        </div>
    )
}

export default Counter
