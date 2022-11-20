import React from 'react'
import Task from './Task'
function Tasks({ tasks, handleDelete }) {
    
  return (
    <div className='tasks'>
        { tasks.map((task, index) => (
                <Task task={task} key={index} handleDelete={handleDelete} />
               
            ))}
    </div>
  )
}

export default Tasks