import React, { useState } from "react";

function New () {

    const [newWords, setNewWords] = useState('Initial Phrase')
    const [count, setCount] = useState(0)

    let changeText = (event) => {
        let change = event.target.value
        setNewWords(change)
    }

    let increase = () => {
        setCount(count + 1)
    }

    let decrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <input onChange={changeText} type="text" />
            <p>{newWords}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <span>{count}</span>
        </div>
    )
}

export default New