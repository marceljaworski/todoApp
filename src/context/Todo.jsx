import { useState, createContext } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
    const [ isForm, setForm ] = useState(false)
    const [ task, setTask ] = useState({})
    const [ tasks, setTasks ] = useState([])
  return (
    <TodoContext.Provider value={{task, tasks, isForm }}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider;