import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import TodoProvider from "./context/Todo";
import Main from './views/Main';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <TodoProvider>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </TodoProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default App
