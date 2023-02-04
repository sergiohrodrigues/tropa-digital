import './reset.css'
import Home from './Paginas/Home';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Paginas/Login';

function App() {

  const [email, setEmail] = useState();

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setEmail={setEmail}/>} />
        <Route path="/Home" element={<Home email={email}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
