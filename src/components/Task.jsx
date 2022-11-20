import React, { useState } from 'react'

function Task({ task, index }) {
    const [ done, setDone ] = useState(false)
    const clickHandler = (event) => {
        event.preventDefault();
        setDone(!done)
    } 
    
  return (
    <article key={index}>
        <h2>{(task.id) + 1}. {task.name}</h2>
        <button onClick={clickHandler}>{done? "done": "pending"}</button>
    </article>
  )
}

export default Task