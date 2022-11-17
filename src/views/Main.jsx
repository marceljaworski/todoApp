import React, { useState } from 'react';



function Main() {
    // test
    const [ isForm, setForm ] = useState(false);
    const [ task, setTask ] = useState({});
    const [ tasks, setTasks ] = useState([]);

    // const { task, tasks, isForm, handleTask, handleTasks} = useContext( TodoContext );
    const clickHandler = () => {
        // handleTasks()
        setForm(!isForm)
        if(isForm){
            setTasks((prev) => [...prev, task])
        }
    }
    const handleInput = (event) => {
        setTask({
            ...task,
            [event.target.name]: event.target.value,
        });
    }
  return (
    <main className='main'>
        {/* tasks.length > 0 &&  */}
            <h1>Tasks</h1>
            { tasks.map((task, index) => (
                <article key={index}>
                    <h2 key={index}>{task.name}</h2>
                </article>
            ))}
        
        
        { isForm && <form>
            {/* <p>{task.name}</p> */}
            <input type="text" placeholder="Add a Task" onChange={handleInput} value={task.name} name="name"></input>
        </form>}
        <button onClick={clickHandler}>{isForm? `Done` : `+ Add a Task`}</button>
    </main>
  )
}

export default Main;