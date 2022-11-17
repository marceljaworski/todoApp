import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Main from './views/Main';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
       
      </BrowserRouter>
      
    </div>
  )
}

export default App
