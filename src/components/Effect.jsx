import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount] = useState(0);
    const effectHandler = () => {
        console.log("Runs after the component is commited to the real dom .... ");
        console.log(count);
    };
    const dependencies = [count];
    useEffect(effectHandler, dependencies);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Use Effect</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Effect
