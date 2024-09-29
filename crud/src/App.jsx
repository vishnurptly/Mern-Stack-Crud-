

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateUser from './UpdateUser';
import Users from './Users';
import CreateUser from './CreateUser';
import Header from './Header';

function App() {
 
  return (
    <>
  <BrowserRouter>
    <Header/>
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
