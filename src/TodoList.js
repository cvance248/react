import React, {useState, useEffect} from 'react';

function TodoList(props) {

    const [count, setCount] = useState(0);
    let increment = () => setCount(count + 1)

    const [words, setWords] = useState('first')
    let replace = (event) => {
       let newWords = event.target.value
       setWords(newWords)
    }

    useEffect( () => {
        console.log('here')
    }, [count])


   
    return (
        <div>
            Hello World {props.name}
            <br />
            <span>{count}</span>
            <button onClick={increment}>increment</button>
            <p>{words}</p>
            <input type="text" onChange={replace} />
        </div>
    )
}

export default TodoList;