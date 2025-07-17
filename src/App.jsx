import { useState } from 'react'
import './App.css'
import PublicNavbar from './components/PublicNavbar'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <PublicNavbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
        
    </BrowserRouter>
  )
}

export default App
