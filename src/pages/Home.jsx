import React from 'react'

const Home = () => {
    return (
        <>
            <section className="relative bg-linear-to-br from-(--primary-200) via-(--secondary-100) to-(--primary-100) overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-(--primary/10) to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-6xl font-display font-semibold text-(--primary) leading-tighter tracking-tighter">
                                    Real Estate Intelligence That <span className="text-(--accent)">Empowers</span> Better Decisions
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg text-(--text-secondary) leading-relaxed">
                                    Where market expertise meets lifestyle aspiration. Discover premium properties through our sophisticated platform designed for discerning buyers and top-tier professionals.
                                </p>
                            </div>

                            <div className="glass-effect rounded-xl p-6 animate-slide-up">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <svg className="h-5 w-5 text-(--primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <span className="text-sm font-medium text-(--text-secondary)">Intelligent Search</span>
                                    </div>
                                    <input type="text" placeholder="Find luxury condos near Central Park with city views..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent text-base" />
                                    <div className="flex flex-wrap gap-2">
                                        <button className="px-3 py-1 bg-(--primary-50) text-(--primary) text-sm rounded-full hover:bg-(--primary-100) transition-micro">Luxury</button>
                                        <button className="px-3 py-1 bg-(--primary-50) text-(--primary) text-sm rounded-full hover:bg-(--primary-100) transition-micro">Investment</button>
                                        <button className="px-3 py-1 bg-(--primary-50) text-(--primary) text-sm rounded-full hover:bg-(--primary-100) transition-micro">Family Homes</button>
                                        <button className="px-3 py-1 bg-(--primary-50) text-(--primary) text-sm rounded-full hover:bg-(--primary-100) transition-micro">Urban Living</button>
                                    </div>
                                    <button className="w-full btn-primary">Search Properties</button>
                                </div>
                            </div>
                        </div>
                        <div className="relative animate-slide-up">
                            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-premium">
                                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Luxury modern home exterior" className="w-full h-96 object-cover" loading="lazy" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-linear-to-r from-(--primary-500) to-(--secondary-500) rounded-lg flex items-center justify-center">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-(--text-secondary)">Market Growth</p>
                                        <p className="text-lg font-semibold text-(--success)">+12.5%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-semibold tracking-tighter text-(--text-primary) mb-4">Real-Time Market Intelligence</h2>
                        <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">Stay ahead with live market data, trending neighborhoods, and investment opportunities curated for informed decision-making.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="card glass-effect">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-(--text-primary)">Trending Areas</h3>
                                <svg className="h-5 w-5 text-(--accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-(--text-secondary)">SoHo</span>
                                    <span className="text-sm font-medium text-(--success)">+8.2%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-(--text-secondary)">Tribeca</span>
                                    <span className="text-sm font-medium text-(--success)">+6.7%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-(--text-secondary)">Chelsea</span>
                                    <span className="text-sm font-medium text-(--success)">+5.4%</span>
                                </div>
                            </div>
                        </div>

                        <div className="card glass-effect">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-(--text-primary)">Price Trends</h3>
                                <svg className="h-5 w-5 text-(--primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-2xl font-bold text-(--text-primary)">₹2.4M</p>
                                    <p className="text-sm text-(--text-secondary)">Avg. Luxury Price</p>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="w-3/4 bg-linear-to-r from-(--primary-500) to-(--secondary-500) h-2 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="card glass-effect">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-(--text-primary)">Investment ROI</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-indian-rupee-icon lucide-indian-rupee text-(--success)"><path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-2xl font-bold text-(--success)">14.2%</p>
                                    <p className="text-sm text-(--text-secondary)">Annual Return</p>
                                </div>
                                <div className="text-xs text-(--text-secondary)">
                                    Based on 5-year average
                                </div>
                            </div>
                        </div>

                        <div className="card glass-effect">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-(--text-primary)">Market Activity</h3>
                                <svg className="h-5 w-5 text-(--warning)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-(--text-secondary)">New Listings</span>
                                    <span className="text-sm font-medium text-(--text-primary)">247</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-(--text-secondary)">Sold This Week</span>
                                    <span className="text-sm font-medium text-(--text-primary)">89</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-(--text-secondary)">Avg. Days on Market</span>
                                    <span className="text-sm font-medium text-(--text-primary)">32</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-semibold tracking-tighter text-(--text-primary) mb-4">Curated Property Collections</h2>
                        <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">Discover properties that match your lifestyle aspirations, from urban professional havens to family legacy homes.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl shadow-soft group-hover:shadow-floating transition-smooth">
                                <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern urban apartment with city views" className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div className="absolute inset-0 bg-linear-to-t from-(--primary-900)/80 to-transparent backdrop-blur-xs group-hover:backdrop-blur-none"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Urban Professional Havens</h3>
                                    <p className="text-sm opacity-90">Sophisticated city living for ambitious professionals</p>
                                    <div className="flex items-center mt-3 space-x-4">
                                        <span className="text-sm">47 Properties</span>
                                        <span className="text-sm">From ₹850K</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl shadow-soft group-hover:shadow-floating transition-smooth">
                                <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Beautiful family home with garden" className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div className="absolute inset-0 bg-linear-to-t from-(--secondary-900)/80 to-transparent backdrop-blur-xs group-hover:backdrop-blur-none"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Family Legacy Homes</h3>
                                    <p className="text-sm opacity-90">Spacious homes perfect for growing families</p>
                                    <div className="flex items-center mt-3 space-x-4">
                                        <span className="text-sm">32 Properties</span>
                                        <span className="text-sm">From ₹1.2M</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl shadow-soft group-hover:shadow-floating transition-smooth">
                                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Modern apartment building for investment" className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div className="absolute inset-0 bg-linear-to-t from-(--accent-900)/80 to-transparent backdrop-blur-xs group-hover:backdrop-blur-none"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Investment Goldmines</h3>
                                    <p className="text-sm opacity-90">High-yield properties with strong ROI potential</p>
                                    <div className="flex items-center mt-3 space-x-4">
                                        <span className="text-sm">23 Properties</span>
                                        <span className="text-sm">From ₹650K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a href="property_listings_advanced_search_results.html" className="btn-primary">Explore All Collections</a>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gradient-premium">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-semibold tracking-tighter text-(--text-primary) mb-4">Top-Performing Professionals</h2>
                        <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">Connect with elite agents who combine market expertise with exceptional client service.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card-glass glass-effect text-center">
                            <div className="relative inline-block mb-4">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Professional headshot of real estate agent" className="w-20 h-20 rounded-full object-cover mx-auto" loading="lazy" />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-linear-to-r from-(--primary-500) to-(--secondary-500) rounded-full border-2 border-white flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-(--text-primary) mb-1">Sarah Chen</h3>
                            <p className="text-sm text-(--text-secondary) mb-3">Luxury Properties Specialist</p>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Recent Sales</span>
                                    <span className="font-medium text-(--text-primary)">₹47M</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Client Satisfaction</span>
                                    <span className="font-medium text-(--success)">98%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Avg. Days to Sale</span>
                                    <span className="font-medium text-(--text-primary)">28</span>
                                </div>
                            </div>
                            <button className="w-full btn-secondary text-sm py-2">Connect</button>
                        </div>

                        <div className="card-glass glass-effect text-center">
                            <div className="relative inline-block mb-4">
                                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Professional headshot of real estate agent" className="w-20 h-20 rounded-full object-cover mx-auto" loading="lazy" />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-linear-to-r from-(--primary-500) to-(--secondary-500) rounded-full border-2 border-white flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-(--text-primary) mb-1">Michael Rodriguez</h3>
                            <p className="text-sm text-(--text-secondary) mb-3">Investment Properties Expert</p>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Recent Sales</span>
                                    <span className="font-medium text-(--text-primary)">₹32M</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Client Satisfaction</span>
                                    <span className="font-medium text-(--success)">96%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Avg. Days to Sale</span>
                                    <span className="font-medium text-(--text-primary)">35</span>
                                </div>
                            </div>
                            <button className="w-full btn-secondary text-sm py-2">Connect</button>
                        </div>

                        <div className="card-glass glass-effect text-center">
                            <div className="relative inline-block mb-4">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Professional headshot of real estate agent" className="w-20 h-20 rounded-full object-cover mx-auto" loading="lazy" />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-linear-to-r from-(--primary-500) to-(--secondary-500) rounded-full border-2 border-white flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-(--text-primary) mb-1">Emily Johnson</h3>
                            <p className="text-sm text-(--text-secondary) mb-3">Family Homes Specialist</p>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Recent Sales</span>
                                    <span className="font-medium text-(--text-primary)">₹28M</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Client Satisfaction</span>
                                    <span className="font-medium text-(--success)">99%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Avg. Days to Sale</span>
                                    <span className="font-medium text-(--text-primary)">22</span>
                                </div>
                            </div>
                            <button className="w-full btn-secondary text-sm py-2">Connect</button>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a href="agent_directory_professional_network.html" className="btn-primary">View All Agents</a>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-semibold tracking-tighter text-(--text-primary) mb-4">Neighborhood Discovery</h2>
                        <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">Explore neighborhoods with interactive data on schools, amenities, and market trends to find your perfect community.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Interactive neighborhood map" className="w-full h-full object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-linear-to-br from-(--primary-900)/20 to-(--secondary-900)/20 backdrop-blur-xs"></div>

                                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-(--accent) rounded-full border-2 border-white shadow-soft animate-pulse-soft"></div>
                                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-(--success) rounded-full border-2 border-white shadow-soft animate-pulse-soft"></div>
                                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-(--primary) rounded-full border-2 border-white shadow-soft animate-pulse-soft"></div>

                                <div className="absolute top-4 right-4 space-y-2">
                                    <button className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/90 transition-micro">
                                        <svg className="w-5 h-5 text-(--text-secondary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                    <button className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/90 transition-micro">
                                        <svg className="w-5 h-5 text-(--text-secondary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-display font-semibold tracking-tighter text-(--text-primary)">Discover Your Perfect Community</h3>
                                <p className="text-(--text-secondary)">Get comprehensive insights into neighborhoods including schools, amenities, transportation, and market trends.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg">
                                    <div className="w-12 h-12 bg-linear-to-r from-(--primary-500) to-(--secondary-500) rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-(--text-primary)">School Ratings</h4>
                                        <p className="text-sm text-(--text-secondary)">Top-rated schools within walking distance</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-(--success)">9.2/10</div>
                                        <div className="text-xs text-(--text-secondary)">Average Rating</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg">
                                    <div className="w-12 h-12 bg-linear-to-r from-(--primary-500) to-(--accent-500) rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-(--text-primary)">Transportation</h4>
                                        <p className="text-sm text-(--text-secondary)">Multiple transit options available</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-(--text-primary)">3 min</div>
                                        <div className="text-xs text-(--text-secondary)">To Subway</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg">
                                    <div className="w-12 h-12 bg-linear-to-r from-(--secondary-500) to-(--accent-500) rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-(--text-primary)">Local Amenities</h4>
                                        <p className="text-sm text-(--text-secondary)">Parks, restaurants, and shopping nearby</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-(--text-primary)">47</div>
                                        <div className="text-xs text-(--text-secondary)">Within 0.5mi</div>
                                    </div>
                                </div>
                            </div>

                            <a href="neighborhood_guides_market_intelligence.html" className="btn-primary inline-block">Explore Neighborhoods</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home