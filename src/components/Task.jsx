import React, { useState } from 'react'

function Task({ task, index, handleDelete }) {
    const [ done, setDone ] = useState(false)
    const clickHandler = (event) => {
        event.preventDefault();
        setDone(!done)
    } 
    const deleteHandle = () => {
        handleDelete(task.id)  
    }
  return (
    <article key={index}>
        <h2>{(task.id) + 1}. {task.name}</h2>
        <button onClick={clickHandler}>{done? "done": "pending"}</button>
        {done && <button onClick={deleteHandle}>delete</button>}
    </article>
  )
}

export default Task