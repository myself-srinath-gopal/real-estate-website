import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import "./App.css"
import Home from './pages/Home'
import PropertyListing from './pages/PropertyListing'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='font-body bg-white'>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/property_listings_advanced_search_results' element={<PropertyListing />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App