import React, { useState } from 'react'

function Task({ task, index, handleDelete, toggle }) {
    const [ done, setDone ] = useState(task.done)
    const clickHandler = () => {
        // event.preventDefault();
        setDone(!done)
        toggle(task.id, done)
    } 
   
    const deleteHandle = () => {
        handleDelete(task.id)  
    }
  return (
    <article key={index}>
        <h2>{(task.id) + 1}. {task.name}</h2>
        <button className={done?"yellow":"green"} onClick={clickHandler}>{done? "pending": "done"}</button>
        {done && <button className='red' onClick={deleteHandle}>delete</button>}
    </article>
  )
}

export default Task