import React from 'react'

const NeighbourhoodGuides = () => {
    return (
        <>
            <section className="relative bg-linear-to-br from-(--primary-50) to-white overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-(--primary/10) to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-display font-semibold text-(--text-primary) leading-tighter tracking-tighter">
                                Neighborhood&nbsp;
                                <span className="text-(--accent)">Intelligence</span> That Guides Your Decision
                            </h1>
                            <p className="text-lg text-(--text-secondary) leading-relaxed max-w-3xl mx-auto">
                                Discover communities through comprehensive market data, lifestyle insights, and local expertise. Make informed decisions with our neighborhood intelligence platform.
                            </p>
                        </div>

                        <div className="hidden sm:block max-w-2xl mx-auto">
                            <div className="bg-white rounded-full shadow-floating p-3 border border-gray-200">
                                <div className="flex items-center space-x-4">
                                    <svg className="h-6 w-6 text-(--primary) shrink-0 ml-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <input type="text" placeholder="Search neighborhoods, zip codes, or landmarks..." className="flex-1 px-4 py-3 border-0 focus:outline-none text-base" />
                                    <button className="btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search block md:hidden"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                                        <span className='hidden md:block'>Explore</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-(--text-primary) tracking-tighter mb-4">Featured Neighborhoods</h2>
                        <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">Explore our most popular neighborhoods with comprehensive market insights and lifestyle guides.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl shadow-soft group-hover:shadow-floating transition-smooth">
                                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="SoHo neighborhood street view" className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-(--success) text-white text-sm font-medium px-3 py-1 rounded-full">+8.2% Growth</span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-semibold mb-2">SoHo</h3>
                                    <p className="text-sm opacity-90 mb-3">Artistic heritage meets luxury living</p>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-lg font-bold">$2.8M</p>
                                            <p className="text-xs opacity-75">Median Price</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold">9.1</p>
                                            <p className="text-xs opacity-75">Walk Score</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold">47</p>
                                            <p className="text-xs opacity-75">Properties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl shadow-soft group-hover:shadow-floating transition-smooth">
                                <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Tribeca neighborhood architecture" className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-(--success) text-white text-sm font-medium px-3 py-1 rounded-full">+6.7% Growth</span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Tribeca</h3>
                                    <p className="text-sm opacity-90 mb-3">Celebrity haven with historic charm</p>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-lg font-bold">$4.2M</p>
                                            <p className="text-xs opacity-75">Median Price</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold">9.5</p>
                                            <p className="text-xs opacity-75">Walk Score</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold">23</p>
                                            <p className="text-xs opacity-75">Properties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl shadow-soft group-hover:shadow-floating transition-smooth">
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Chelsea neighborhood modern buildings" className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-(--success) text-white text-sm font-medium px-3 py-1 rounded-full">+5.4% Growth</span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Chelsea</h3>
                                    <p className="text-sm opacity-90 mb-3">Art galleries and High Line access</p>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-lg font-bold">$1.9M</p>
                                            <p className="text-xs opacity-75">Median Price</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold">8.8</p>
                                            <p className="text-xs opacity-75">Walk Score</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold">62</p>
                                            <p className="text-xs opacity-75">Properties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-(--surface)">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-(--text-primary) mb-4">Explore Neighborhoods Interactively</h2>
                        <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">Use our interactive map to discover neighborhoods based on your lifestyle priorities and investment goals.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                                <div className="relative h-96 bg-gray-100">
                                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Interactive neighborhood map" className="w-full h-full object-cover" loading="lazy" />
                                    <div className="absolute inset-0 bg-(--primary/20)"></div>

                                    <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-(--accent) rounded-full border-2 border-white shadow-soft animate-pulse cursor-pointer"></div>
                                    <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-(--success) rounded-full border-2 border-white shadow-soft animate-pulse cursor-pointer"></div>
                                    <div className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-(--primary) rounded-full border-2 border-white shadow-soft animate-pulse cursor-pointer"></div>

                                    <div className="absolute top-4 right-4 space-y-2">
                                        <button className="w-10 h-10 bg-white rounded-lg shadow-soft flex items-center justify-center hover:bg-gray-50 transition-micro">
                                            <svg className="w-5 h-5 text-(--text-secondary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </button>
                                        <button className="w-10 h-10 bg-white rounded-lg shadow-soft flex items-center justify-center hover:bg-gray-50 transition-micro">
                                            <svg className="w-5 h-5 text-(--text-secondary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-soft p-3">
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-(--accent) rounded-full"></div>
                                                <span className="text-(--text-secondary)">Luxury Properties</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-(--success) rounded-full"></div>
                                                <span className="text-(--text-secondary)">Investment Opportunities</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-(--primary) rounded-full"></div>
                                                <span className="text-(--text-secondary)">Family Homes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="card">
                                <h3 className="font-semibold text-(--text-primary) mb-4">Filter by Lifestyle</h3>
                                <div className="space-y-3">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 text-(--primary) focus:ring-(--primary)" checked onChange={() => { }} />
                                        <span className="ml-2 text-sm text-(--text-secondary)">Schools (9+ rating)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 text-(--primary) focus:ring-(--primary)" onChange={() => { }} />
                                        <span className="ml-2 text-sm text-(--text-secondary)">Public Transit</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 text-(--primary) focus:ring-(--primary)" checked onChange={() => { }} />
                                        <span className="ml-2 text-sm text-(--text-secondary)">Restaurants & Dining</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 text-(--primary) focus:ring-(--primary)" onChange={() => { }} />
                                        <span className="ml-2 text-sm text-(--text-secondary)">Parks & Recreation</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 text-(--primary) focus:ring-(--primary)" onChange={() => { }} />
                                        <span className="ml-2 text-sm text-(--text-secondary)">Shopping Centers</span>
                                    </label>
                                </div>
                            </div>

                            <div className="card">
                                <h3 className="font-semibold text-(--text-primary) mb-4">Price Range</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-(--text-secondary)">$500K</span>
                                        <span className="text-sm text-(--text-secondary)">$5M+</span>
                                    </div>
                                    <div className="relative">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="w-[60%] bg-(--primary) h-2 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-sm font-medium text-(--text-primary)">$500K - $3M</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <h3 className="font-semibold text-(--text-primary) mb-4">Market Overview</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-(--text-secondary)">Avg. Price/SqFt</span>
                                        <span className="text-sm font-medium text-(--text-primary)">$1,247</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-(--text-secondary)">Days on Market</span>
                                        <span className="text-sm font-medium text-(--text-primary)">28</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-(--text-secondary)">Price Growth (YoY)</span>
                                        <span className="text-sm font-medium text-(--success)">+7.2%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-(--text-secondary)">Inventory Level</span>
                                        <span className="text-sm font-medium text-(--warning)">Low</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-(--text-primary) mb-4">Neighborhood Deep Dive</h2>
                        <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">Get comprehensive insights into what makes each neighborhood unique, from market trends to lifestyle amenities.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-semibold text-(--text-primary)">SoHo Market Analysis</h3>
                                <p className="text-(--text-secondary) leading-relaxed">
                                    SoHo continues to attract discerning buyers with its unique blend of artistic heritage and luxury amenities. Recent market data shows strong appreciation potential with limited inventory driving competitive pricing.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-(--surface) rounded-lg p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-(--success-100) rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-(--success)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-(--text-secondary)">Price Appreciation</p>
                                            <p className="text-lg font-bold text-(--success)">+8.2%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-(--surface) rounded-lg p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-(--primary-100) rounded-lg flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-indian-rupee-icon lucide-indian-rupee w-5 h-5 text-(--primary)"><path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-(--text-secondary)">Median Price</p>
                                            <p className="text-lg font-bold text-(--text-primary)">$2.8M</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-(--surface) rounded-lg p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-(--accent-100) rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-(--accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-(--text-secondary)">Avg. Days on Market</p>
                                            <p className="text-lg font-bold text-(--text-primary)">22</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-(--surface) rounded-lg p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-(--warning-100) rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-(--warning)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-(--text-secondary)">Inventory Level</p>
                                            <p className="text-lg font-bold text-(--warning)">Limited</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-(--text-primary)">Lifestyle Highlights</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark-icon lucide-landmark w-5 h-5 text-(--primary)"><path d="M10 18v-7" /><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" /><path d="M14 18v-7" /><path d="M18 18v-7" /><path d="M3 22h18" /><path d="M6 18v-7" /></svg>
                                        <span className="text-sm text-(--text-secondary)">Art Galleries & Museums</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag-icon lucide-shopping-bag w-5 h-5 text-(--primary)"><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></svg>
                                        <span className="text-sm text-(--text-secondary)">Luxury Shopping</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-platter-icon lucide-hand-platter w-5 h-5 text-(--primary)"><path d="M12 3V2" /><path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" /><path d="M2 14h12a2 2 0 0 1 0 4h-2" /><path d="M4 10h16" /><path d="M5 10a7 7 0 0 1 14 0" /><path d="M5 14v6a1 1 0 0 1-1 1H2" /></svg>
                                        <span className="text-sm text-(--text-secondary)">Fine Dining</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-left-icon lucide-arrow-right-left w-5 h-5 text-(--primary)"><path d="m16 3 4 4-4 4" /><path d="M20 7H4" /><path d="m8 21-4-4 4-4" /><path d="M4 17h16" /></svg>
                                        <span className="text-sm text-(--text-secondary)">Excellent Transit Access</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="card">
                                <h4 className="font-semibold text-(--text-primary) mb-4">Price Trend (12 Months)</h4>
                                <div className="h-48 bg-gray-50 rounded-lg flex items-end justify-around p-4">
                                    <div className="w-8 bg-(--primary-200) rounded-t h-[25%]"></div>
                                    <div className="w-8 bg-(--primary-300) rounded-t h-[18%]"></div>
                                    <div className="w-8 bg-(--primary-400) rounded-t h-[85%]"></div>
                                    <div className="w-8 bg-(--primary-500) rounded-t h-[47%]"></div>
                                    <div className="w-8 bg-(--primary-600) rounded-t h-[63%]"></div>
                                    <div className="w-8 bg-(--accent) rounded-t h-full"></div>
                                </div>
                                <div className="flex justify-around text-xs text-(--text-secondary) mt-2">
                                    <span>Jan</span>
                                    <span>Mar</span>
                                    <span>May</span>
                                    <span>Jul</span>
                                    <span>Sep</span>
                                    <span>Nov</span>
                                </div>
                            </div>

                            <div className="card">
                                <h4 className="font-semibold text-(--text-primary) mb-4">Transportation Score</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-(--text-secondary)">Walk Score</span>
                                            <span className="text-sm font-medium text-(--text-primary)">91/100</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-(--success) h-2 rounded-full w-[91%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-(--text-secondary)">Transit Score</span>
                                            <span className="text-sm font-medium text-(--text-primary)">88/100</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-(--primary) h-2 rounded-full w-[88%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-(--text-secondary)">Bike Score</span>
                                            <span className="text-sm font-medium text-(--text-primary)">76/100</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-(--accent) h-2 rounded-full w-[76%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-(--surface)">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-semibold text-(--text-primary) mb-4 tracking-tighter">Local Business Spotlight</h2>
                        <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">Discover the businesses and amenities that make each neighborhood special and contribute to its unique character.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="card text-center">
                            <div className="w-16 h-16 bg-(--accent-100) rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-school-icon lucide-school w-8 h-8 text-(--accent)"><path d="M14 21v-3a2 2 0 0 0-4 0v3" /><path d="M18 5v16" /><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" /><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" /><path d="M6 5v16" /><circle cx="12" cy="9" r="2" /></svg>
                            </div>
                            <h3 className="font-semibold text-(--text-primary) mb-2">Balthazar</h3>
                            <p className="text-sm text-(--text-secondary) mb-3">French bistro institution</p>
                            <div className="flex justify-center items-center space-x-1 mb-2">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-medium text-(--text-primary)">4.8</span>
                            </div>
                            <p className="text-xs text-(--text-secondary)">2 min walk</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-(--primary-100) rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee-icon lucide-coffee w-8 h-8 text-(--primary)"><path d="M10 2v2" /><path d="M14 2v2" /><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" /><path d="M6 2v2" /></svg>
                            </div>
                            <h3 className="font-semibold text-(--text-primary) mb-2">Blue Bottle Coffee</h3>
                            <p className="text-sm text-(--text-secondary) mb-3">Artisanal coffee roasters</p>
                            <div className="flex justify-center items-center space-x-1 mb-2">
                                <svg className="w-4 h-4 text-(--accent)" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-medium text-(--text-primary)">4.6</span>
                            </div>
                            <p className="text-xs text-(--text-secondary)">1 min walk</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-(--success-100) rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-(--success)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-(--text-primary) mb-2">Gagosian Gallery</h3>
                            <p className="text-sm text-(--text-secondary) mb-3">Contemporary art exhibitions</p>
                            <div className="flex justify-center items-center space-x-1 mb-2">
                                <svg className="w-4 h-4 text-(--accent)" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-medium text-(--text-primary)">4.7</span>
                            </div>
                            <p className="text-xs text-(--text-secondary)">3 min walk</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-(--warning-100) rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-(--warning)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-(--text-primary) mb-2">Equinox SoHo</h3>
                            <p className="text-sm text-(--text-secondary) mb-3">Premium fitness club</p>
                            <div className="flex justify-center items-center space-x-1 mb-2">
                                <svg className="w-4 h-4 text-(--accent)" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-medium text-(--text-primary)">4.5</span>
                            </div>
                            <p className="text-xs text-(--text-secondary)">4 min walk</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-semibold text-(--text-primary) mb-4 tracking-tighter">Education Excellence</h2>
                        <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">Top-rated schools and educational opportunities that make neighborhoods attractive to families.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="font-semibold text-(--text-primary) mb-1">PS 234 Independence</h3>
                                    <p className="text-sm text-(--text-secondary)">Elementary School</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-(--success)">9.2</div>
                                    <div className="text-xs text-(--text-secondary)">Rating</div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Student-Teacher Ratio</span>
                                    <span className="font-medium text-(--text-primary)">12:1</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Distance</span>
                                    <span className="font-medium text-(--text-primary)">0.3 miles</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Test Scores</span>
                                    <span className="font-medium text-(--success)">Above Average</span>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="font-semibold text-(--text-primary) mb-1">MS 131 Lanza</h3>
                                    <p className="text-sm text-(--text-secondary)">Middle School</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-(--success)">8.8</div>
                                    <div className="text-xs text-(--text-secondary)">Rating</div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Student-Teacher Ratio</span>
                                    <span className="font-medium text-(--text-primary)">14:1</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Distance</span>
                                    <span className="font-medium text-(--text-primary)">0.5 miles</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Test Scores</span>
                                    <span className="font-medium text-(--success)">Above Average</span>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="font-semibold text-(--text-primary) mb-1">Stuyvesant High School</h3>
                                    <p className="text-sm text-(--text-secondary)">Specialized High School</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-(--success)">9.7</div>
                                    <div className="text-xs text-(--text-secondary)">Rating</div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Student-Teacher Ratio</span>
                                    <span className="font-medium text-(--text-primary)">16:1</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">Distance</span>
                                    <span className="font-medium text-(--text-primary)">1.2 miles</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-(--text-secondary)">College Prep</span>
                                    <span className="font-medium text-(--success)">Excellent</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-(--primary) text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-display font-semibold">Ready to Explore Your Next Neighborhood?</h2>
                            <p className="text-lg text-(--primary-100) max-w-2xl mx-auto">
                                Connect with our local market experts who can provide personalized insights and guide you through your neighborhood discovery journey.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/property_listings_advanced_search_results" className="btn-accent">Browse Properties</a>
                            <a href="/agent_directory_professional_network" className="bg-white text-(--primary) font-semibold py-3 px-6 rounded-md transition-micro hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-(--primary)">Find an Agent</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NeighbourhoodGuides