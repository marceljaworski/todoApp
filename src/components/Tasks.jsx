import React from 'react'
import Task from './Task'
function Tasks({ tasks }) {
    
  return (
    <div className='tasks'>
        { tasks.map((task, index) => (
                <Task task={task} key={index} />
               
            ))}
    </div>
  )
}

export default Tasks