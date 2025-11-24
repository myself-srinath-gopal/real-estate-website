import React from 'react'

const PropertyListing = () => {
    return (
        <>
            <section className="bg-white border-b border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex-1 max-w-2xl">
                            <div className="relative">
                                <input type="text" placeholder="Search by location, property type, or lifestyle preference..." value="Luxury condos near Central Park" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base" onChange={() => { }} />
                                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex bg-gray-100 rounded-lg p-1">
                                <button className="px-3 py-2 bg-primary text-white rounded-md text-sm font-medium transition-micro">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                                <button className="px-3 py-2 text-text-secondary hover:text-primary rounded-md text-sm font-medium transition-micro">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                </button>
                                <button className="px-3 py-2 text-text-secondary hover:text-primary rounded-md text-sm font-medium transition-micro">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </button>
                            </div>

                            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                                <option>Price: High to Low</option>
                                <option>Price: Low to High</option>
                                <option>Newest First</option>
                                <option>Days on Market</option>
                                <option>Investment Score</option>
                                <option>Lifestyle Match</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="lg:w-80 space-y-6">
                        <div className="card">
                            <h3 className="font-semibold text-text-primary mb-4">Quick Filters</h3>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-3 py-1 bg-primary text-white text-sm rounded-full">Luxury</button>
                                <button className="px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full hover:bg-primary-50 transition-micro">Investment</button>
                                <button className="px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full hover:bg-primary-50 transition-micro">Family Homes</button>
                                <button className="px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full hover:bg-primary-50 transition-micro">New Construction</button>
                                <button className="px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full hover:bg-primary-50 transition-micro">Waterfront</button>
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="font-semibold text-text-primary mb-4">Price Range</h3>
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                                    <input type="text" placeholder="Min Price" className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm" />
                                    <input type="text" placeholder="Max Price" className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm" />
                                </div>
                                <div className="relative">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="w-3/5 ml-[20%] bg-primary h-2 rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-text-secondary mt-1">
                                        <span>$500K</span>
                                        <span>$5M+</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="font-semibold text-text-primary mb-4">Property Type</h3>
                            <div className="space-y-3">
                                <label className="flex items-center">
                                    <input type="checkbox" checked className="rounded border-gray-300 text-primary focus:ring-primary" onChange={()=>{}}/>
                                    <span className="ml-2 text-sm text-text-secondary">Condos & Co-ops</span>
                                    <span className="ml-auto text-xs text-text-secondary">(47)</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary"  onChange={()=>{}}/>
                                    <span className="ml-2 text-sm text-text-secondary">Single Family</span>
                                    <span className="ml-auto text-xs text-text-secondary">(23)</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary"  onChange={()=>{}}/>
                                    <span className="ml-2 text-sm text-text-secondary">Townhouses</span>
                                    <span className="ml-auto text-xs text-text-secondary">(12)</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary"  onChange={()=>{}}/>
                                    <span className="ml-2 text-sm text-text-secondary">Multi-Family</span>
                                    <span className="ml-auto text-xs text-text-secondary">(8)</span>
                                </label>
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="font-semibold text-text-primary mb-4">Smart Analytics</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Investment Potential Score</label>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xs text-text-secondary">Low</span>
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div className="w-3/4 bg-success h-2 rounded-full"></div>
                                        </div>
                                        <span className="text-xs text-text-secondary">High</span>
                                    </div>
                                    <div className="text-xs text-success mt-1">7.5+ Score</div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Lifestyle Match Rating</label>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xs text-text-secondary">Poor</span>
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div className="w-[85%] bg-accent h-2 rounded-full"></div>
                                        </div>
                                        <span className="text-xs text-text-secondary">Perfect</span>
                                    </div>
                                    <div className="text-xs text-accent mt-1">8.5+ Match</div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Market Momentum</label>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xs text-text-secondary">Slow</span>
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div className="w-[65%] bg-primary h-2 rounded-full"></div>
                                        </div>
                                        <span className="text-xs text-text-secondary">Hot</span>
                                    </div>
                                    <div className="text-xs text-primary mt-1">Strong Growth</div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="font-semibold text-text-primary mb-4">Amenities</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                    <span className="ml-2 text-xs text-text-secondary">Doorman</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                    <span className="ml-2 text-xs text-text-secondary">Gym</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                    <span className="ml-2 text-xs text-text-secondary">Pool</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                    <span className="ml-2 text-xs text-text-secondary">Parking</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                    <span className="ml-2 text-xs text-text-secondary">Balcony</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                    <span className="ml-2 text-xs text-text-secondary">Laundry</span>
                                </label>
                            </div>
                        </div>

                        <button className="w-full btn-secondary text-sm py-2">Reset All Filters</button>
                    </aside>

                    <main className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                            <div>
                                <h1 className="text-2xl font-display font-semibold text-text-primary">Premium Properties</h1>
                                <p className="text-text-secondary mt-1">47 properties match your criteria</p>
                            </div>
                            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                                <button className="flex items-center space-x-2 text-sm text-text-secondary hover:text-primary transition-micro">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span>Save Search</span>
                                </button>
                                <button className="flex items-center space-x-2 text-sm text-text-secondary hover:text-primary transition-micro">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4 17h5l-5 5v-5zM4 7h5L4 2v5zM15 7h5l-5-5v5z" />
                                    </svg>
                                    <span>Compare</span>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="card group cursor-pointer hover:shadow-premium transition-smooth">
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <div className="lg:w-80 relative">
                                        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Luxury Manhattan penthouse with city views" className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                        </div>
                                        <div className="absolute top-3 left-3 flex flex-col space-y-2">
                                            <span className="px-2 py-1 bg-accent text-white text-xs font-medium rounded">Featured</span>
                                            <span className="px-2 py-1 bg-success text-white text-xs font-medium rounded">New</span>
                                        </div>
                                        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-micro">
                                            <svg className="w-4 h-4 text-text-secondary hover:text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                                            1 / 24
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-micro">
                                                    <a href="individual_property_details_immersive_showcase.html">Luxury Manhattan Penthouse</a>
                                                </h3>
                                                <p className="text-text-secondary">123 Park Avenue, Upper East Side, NY 10021</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-text-primary">$3,250,000</p>
                                                <p className="text-sm text-text-secondary">$1,625/sq ft</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-6 text-sm text-text-secondary">
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                                </svg>
                                                <span>3 Beds</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                                </svg>
                                                <span>2.5 Baths</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                </svg>
                                                <span>2,000 sq ft</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>12 days on market</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="text-center p-3 bg-success-50 rounded-lg">
                                                <div className="text-lg font-bold text-success">8.9</div>
                                                <div className="text-xs text-text-secondary">Investment Score</div>
                                            </div>
                                            <div className="text-center p-3 bg-accent-50 rounded-lg">
                                                <div className="text-lg font-bold text-accent">9.2</div>
                                                <div className="text-xs text-text-secondary">Lifestyle Match</div>
                                            </div>
                                            <div className="text-center p-3 bg-primary-50 rounded-lg">
                                                <div className="text-lg font-bold text-primary">Hot</div>
                                                <div className="text-xs text-text-secondary">Market Trend</div>
                                            </div>
                                        </div>

                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            Stunning penthouse with panoramic city views, featuring floor-to-ceiling windows, private terrace, and premium finishes throughout. Located in prestigious building with full amenities.
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <div className="flex items-center space-x-4">
                                                <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary-700 transition-micro">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    <span>Call Agent</span>
                                                </button>
                                                <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary-700 transition-micro">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>Schedule Tour</span>
                                                </button>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Agent Sarah Chen" className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                                                <div className="text-xs">
                                                    <div className="font-medium text-text-primary">Sarah Chen</div>
                                                    <div className="text-text-secondary">Luxury Specialist</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card group cursor-pointer hover:shadow-premium transition-smooth">
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <div className="lg:w-80 relative">
                                        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                                            <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern Brooklyn townhouse with garden" className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy"  />
                                        </div>
                                        <div className="absolute top-3 left-3 flex flex-col space-y-2">
                                            <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded">Investment</span>
                                        </div>
                                        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-micro">
                                            <svg className="w-4 h-4 text-error" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                                            1 / 18
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-micro">
                                                    <a href="individual_property_details_immersive_showcase.html">Modern Brooklyn Townhouse</a>
                                                </h3>
                                                <p className="text-text-secondary">456 Carroll Gardens, Brooklyn, NY 11231</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-text-primary">$1,850,000</p>
                                                <p className="text-sm text-text-secondary">$925/sq ft</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-6 text-sm text-text-secondary">
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                                </svg>
                                                <span>4 Beds</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                                </svg>
                                                <span>3 Baths</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                </svg>
                                                <span>2,000 sq ft</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>28 days on market</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="text-center p-3 bg-success-50 rounded-lg">
                                                <div className="text-lg font-bold text-success">9.1</div>
                                                <div className="text-xs text-text-secondary">Investment Score</div>
                                            </div>
                                            <div className="text-center p-3 bg-accent-50 rounded-lg">
                                                <div className="text-lg font-bold text-accent">8.7</div>
                                                <div className="text-xs text-text-secondary">Lifestyle Match</div>
                                            </div>
                                            <div className="text-center p-3 bg-primary-50 rounded-lg">
                                                <div className="text-lg font-bold text-primary">Rising</div>
                                                <div className="text-xs text-text-secondary">Market Trend</div>
                                            </div>
                                        </div>

                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            Beautifully renovated townhouse with private garden, modern kitchen, and original architectural details. Perfect for families seeking space and character in trendy neighborhood.
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <div className="flex items-center space-x-4">
                                                <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary-700 transition-micro">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    <span>Call Agent</span>
                                                </button>
                                                <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary-700 transition-micro">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>Schedule Tour</span>
                                                </button>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Agent Michael Rodriguez" className="w-8 h-8 rounded-full object-cover" loading="lazy"  />
                                                <div className="text-xs">
                                                    <div className="font-medium text-text-primary">Michael Rodriguez</div>
                                                    <div className="text-text-secondary">Investment Expert</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card group cursor-pointer hover:shadow-premium transition-smooth">
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <div className="lg:w-80 relative">
                                        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                                            <img src="https://images.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="Elegant family home with spacious yard" className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                        </div>
                                        <div className="absolute top-3 left-3 flex flex-col space-y-2">
                                            <span className="px-2 py-1 bg-warning text-white text-xs font-medium rounded">Price Drop</span>
                                        </div>
                                        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-micro">
                                            <svg className="w-4 h-4 text-text-secondary hover:text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                                            1 / 32
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-micro">
                                                    <a href="individual_property_details_immersive_showcase.html">Elegant Family Estate</a>
                                                </h3>
                                                <p className="text-text-secondary">789 Westchester Avenue, Scarsdale, NY 10583</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-text-primary">$2,750,000</p>
                                                <p className="text-sm text-warning line-through">$2,950,000</p>
                                                <p className="text-sm text-text-secondary">$687/sq ft</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-6 text-sm text-text-secondary">
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                                </svg>
                                                <span>5 Beds</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                                </svg>
                                                <span>4 Baths</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                </svg>
                                                <span>4,000 sq ft</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>45 days on market</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="text-center p-3 bg-success-50 rounded-lg">
                                                <div className="text-lg font-bold text-success">8.3</div>
                                                <div className="text-xs text-text-secondary">Investment Score</div>
                                            </div>
                                            <div className="text-center p-3 bg-accent-50 rounded-lg">
                                                <div className="text-lg font-bold text-accent">9.5</div>
                                                <div className="text-xs text-text-secondary">Lifestyle Match</div>
                                            </div>
                                            <div className="text-center p-3 bg-warning-50 rounded-lg">
                                                <div className="text-lg font-bold text-warning">Stable</div>
                                                <div className="text-xs text-text-secondary">Market Trend</div>
                                            </div>
                                        </div>

                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            Magnificent colonial estate on 2 acres with pool, tennis court, and mature landscaping. Recently renovated with luxury finishes while preserving classNameic charm. Top-rated school district.
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <div className="flex items-center space-x-4">
                                                <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary-700 transition-micro">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    <span>Call Agent</span>
                                                </button>
                                                <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary-700 transition-micro">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>Schedule Tour</span>
                                                </button>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <img src="https://images.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg" alt="Agent Emily Johnson" className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                                                <div className="text-xs">
                                                    <div className="font-medium text-text-primary">Emily Johnson</div>
                                                    <div className="text-text-secondary">Family Homes Specialist</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button className="btn-primary">Load More Properties</button>
                            <p className="text-sm text-text-secondary mt-2">Showing 3 of 47 properties</p>
                        </div>
                    </main>
                </div>
            </div>

            <section className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-text-primary mb-4">AI-Powered Recommendations</h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">Based on your search behavior and preferences, we've found properties that might interest you.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg mb-4">
                                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Similar property recommendation" className="w-full h-48 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-2 py-1 bg-accent text-white text-xs font-medium rounded">95% Match</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">Chelsea Luxury Condo</h3>
                            <p className="text-text-secondary text-sm mb-3">Similar to your saved properties</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-text-primary">$2,850,000</span>
                                <button className="text-primary hover:text-primary-700 text-sm font-medium transition-micro">View Details</button>
                            </div>
                        </div>

                        <div className="card group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg mb-4">
                                <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Investment opportunity recommendation" className="w-full h-48 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-2 py-1 bg-success text-white text-xs font-medium rounded">High ROI</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">Investment Opportunity</h3>
                            <p className="text-text-secondary text-sm mb-3">Strong rental potential in your area</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-text-primary">$1,650,000</span>
                                <button className="text-primary hover:text-primary-700 text-sm font-medium transition-micro">View Details</button>
                            </div>
                        </div>

                        <div className="card group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg mb-4">
                                <img src="https://images.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="Lifestyle match recommendation" className="w-full h-48 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded">Perfect Fit</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">Family Dream Home</h3>
                            <p className="text-text-secondary text-sm mb-3">Matches your lifestyle preferences</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-text-primary">$2,200,000</span>
                                <button className="text-primary hover:text-primary-700 text-sm font-medium transition-micro">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PropertyListing