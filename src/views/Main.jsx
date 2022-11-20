import { useEffect, useState } from 'react';
import Tasks from '../components/Tasks'



function Main() {
    const [ isForm, setForm ] = useState(false);
    const [ task, setTask ] = useState({});
    const [ tasks, setTasks ] = useState([]);

    const clickHandler = (event) => {
        event.preventDefault()
        setForm(!isForm)
        if(isForm){
            setTasks((prev) => [task, ...prev ])
        }
    }
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(tasks))
        setTask({})
    }, [tasks])
    
    const handleInput = (event) => {
        setTask({
            ...task,
            [event.target.name]: event.target.value,
        });
    }
  return (
    <main className='main'>
        
            <h1>Todo</h1>
            
            { isForm && <form>
            {/* <p>{task.name}</p> */}
            <input type="text" placeholder="Add a Task" onChange={handleInput} value={task.name} name="name"></input>
        </form>}
        
        <button onClick={clickHandler}>{isForm? `Done` : `+ Add a Task`}</button>
        
            <Tasks tasks={tasks} />
    </main>
  )
}

export default Main;