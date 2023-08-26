import { useState } from 'react';
import './Counter.scss'

export const Counter= () => {

    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleCounter}>increment</button>
        </div>
    )
}