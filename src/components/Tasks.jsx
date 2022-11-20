import React from 'react'
import Task from './Task'
function Tasks({ tasks, handleDelete, toggle }) {
    
  return (
    <div className='tasks'>
        { tasks.map((task, index) => (
                <Task task={task} key={index} handleDelete={handleDelete} toggle={toggle} />
               
            ))}
    </div>
  )
}

export default Tasks