

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateUser from './UpdateUser';
import Users from './Users';
import CreateUser from './CreateUser';

function App() {
 
  return (
    <>
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path="/update/:id" element={<UpdateUser/>}/>

      </Routes>
  
  </BrowserRouter>
      
    </>
  )
}

export default App
