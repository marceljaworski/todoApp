import React from 'react'

function Tasks({ tasks }) {
  return (
    <div className='tasks'>
        { tasks.map((task, index) => (
                <article key={index}>
                    <h2 key={index}>{task.name}</h2>
                </article>
            ))}
    </div>
  )
}

export default Tasks