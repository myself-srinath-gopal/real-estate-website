import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import "./App.css"
import Home from './pages/Home'

const App = () => {
  return (
    <div className='font-body bg-white'>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App