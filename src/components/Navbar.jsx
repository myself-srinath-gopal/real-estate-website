import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="shrink-0">
                        <a href="/" className="flex items-center">
                            <svg className="h-8 w-8 text-(--primary)" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16 2L4 12v18h6v-8h12v8h6V12L16 2zm0 4l8 6v14h-2v-8H10v8H8V12l8-6z" />
                            </svg>
                            <span className="ml-2 text-3xl font-display font-bold text-(--primary) tracking-tighter">Estate Elite</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <NavLink to="/" className="navlink text-(--text-secondary) hover:text-(--primary) transition-micro">Home</NavLink>
                            <NavLink to="/property_listings_advanced_search_results" className="navlink text-(--text-secondary) hover:text-(--primary) transition-micro">Properties</NavLink>
                            <NavLink to="/agent_directory_professional_network" className="navlink text-(--text-secondary) hover:text-(--primary) transition-micro">Agents</NavLink>
                            <NavLink to="/neighborhood_guides_market_intelligence" className="navlink text-(--text-secondary) hover:text-(--primary) transition-micro">Neighborhoods</NavLink>
                            <NavLink to="/market_reports_thought_leadership" className="navlink text-(--text-secondary) hover:text-(--primary) transition-micro">Market Reports</NavLink>
                            <NavLink to="/about_estate_elite_brand_authority" className="navlink text-(--text-secondary) hover:text-(--primary) transition-micro">About</NavLink>
                            <NavLink to="/contact_support_multi_level_engagement" className="btn-primary">Contact</NavLink>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button type="button" className="text-(--text-secondary) hover:text-(--primary) focus:outline-none focus:text-(--primary)">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar