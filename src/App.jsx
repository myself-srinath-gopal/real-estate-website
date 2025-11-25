import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import "./App.css"
import Home from './pages/Home'
import PropertyListing from './pages/PropertyListing'
import Footer from './components/Footer'
import AgentDirectory from './pages/AgentDirectory'
import NeighbourhoodGuides from './pages/NeighbourhoodGuides'
import MarketReports from './pages/MarketReports'
import AboutUs from './pages/AboutUs'
import ContactSupport from './pages/ContactSupport'
import IndividualProperty from './pages/IndividualProperty'

const App = () => {
  return (
    <div className='font-body bg-white'>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/property_listings_advanced_search_results' element={<PropertyListing />} />
        <Route path='/agent_directory_professional_network' element={<AgentDirectory />} />
        <Route path='/neighborhood_guides_market_intelligence' element={<NeighbourhoodGuides />} />
        <Route path='/market_reports_thought_leadership' element={<MarketReports />} />
        <Route path='/about_estate_elite_brand_authority' element={<AboutUs />} />
        <Route path='/contact_support_multi_level_engagement' element={<ContactSupport />} />
        <Route path='/individual_property_details' element={<IndividualProperty />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App