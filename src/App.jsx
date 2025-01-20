import React from 'react'
import FetchUser from './components/FetchUser'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info'

const App = () => {
  return (
    <div className=' p-2 bg-slate-300 h-[100vh]'>
      <FetchUser/>


        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/info' element={<Info/>} />
        </Routes>
    </div>
  )
}

export default App