import React from 'react'

const NeighbourhoodGuides = () => {
    return (
        <>
            <section class="relative bg-linear-to-br from-primary-50 to-white overflow-hidden">
                <div class="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent"></div>
                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div class="text-center space-y-8">
                        <div class="space-y-4">
                            <h1 class="text-4xl lg:text-6xl font-display font-semibold text-text-primary leading-tight">
                                Neighborhood
                                <span class="text-accent">Intelligence</span> That Guides Your Decision
                            </h1>
                            <p class="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                                Discover communities through comprehensive market data, lifestyle insights, and local expertise. Make informed decisions with our neighborhood intelligence platform.
                            </p>
                        </div>

                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-xl shadow-floating p-6 border border-gray-200">
                                <div class="flex items-center space-x-4">
                                    <svg class="h-6 w-6 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <input type="text" placeholder="Search neighborhoods, zip codes, or landmarks..." class="flex-1 px-4 py-3 border-0 focus:outline-none text-base" />
                                    <button class="btn-primary">Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-display font-semibold text-text-primary mb-4">Featured Neighborhoods</h2>
                        <p class="text-lg text-text-secondary max-w-2xl mx-auto">Explore our most popular neighborhoods with comprehensive market insights and lifestyle guides.</p>
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="group cursor-pointer">
                            <div class="relative overflow-hidden rounded-xl shadow-soft group-hover:shadow-floating transition-smooth">
                                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="SoHo neighborhood street view" class="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                <div class="absolute top-4 right-4">
                                    <span class="bg-success text-white text-sm font-medium px-3 py-1 rounded-full">+8.2% Growth</span>
                                </div>
                                <div class="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 class="text-xl font-semibold mb-2">SoHo</h3>
                                    <p class="text-sm opacity-90 mb-3">Artistic heritage meets luxury living</p>
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <p class="text-lg font-bold">$2.8M</p>
                                            <p class="text-xs opacity-75">Median Price</p>
                                        </div>
                                        <div>
                                            <p class="text-lg font-bold">9.1</p>
                                            <p class="text-xs opacity-75">Walk Score</p>
                                        </div>
                                        <div>
                                            <p class="text-lg font-bold">47</p>
                                            <p class="text-xs opacity-75">Properties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="group cursor-pointer">
                            <div class="relative overflow-hidden rounded-xl shadow-soft group-hover:shadow-floating transition-smooth">
                                <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Tribeca neighborhood architecture" class="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                <div class="absolute top-4 right-4">
                                    <span class="bg-success text-white text-sm font-medium px-3 py-1 rounded-full">+6.7% Growth</span>
                                </div>
                                <div class="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 class="text-xl font-semibold mb-2">Tribeca</h3>
                                    <p class="text-sm opacity-90 mb-3">Celebrity haven with historic charm</p>
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <p class="text-lg font-bold">$4.2M</p>
                                            <p class="text-xs opacity-75">Median Price</p>
                                        </div>
                                        <div>
                                            <p class="text-lg font-bold">9.5</p>
                                            <p class="text-xs opacity-75">Walk Score</p>
                                        </div>
                                        <div>
                                            <p class="text-lg font-bold">23</p>
                                            <p class="text-xs opacity-75">Properties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="group cursor-pointer">
                            <div class="relative overflow-hidden rounded-xl shadow-soft group-hover:shadow-floating transition-smooth">
                                <img src="https://images.pixabay.com/photo/2017/07/21/23/57/concert-hall-2526528_1280.jpg" alt="Chelsea neighborhood modern buildings" class="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                                <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                <div class="absolute top-4 right-4">
                                    <span class="bg-success text-white text-sm font-medium px-3 py-1 rounded-full">+5.4% Growth</span>
                                </div>
                                <div class="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 class="text-xl font-semibold mb-2">Chelsea</h3>
                                    <p class="text-sm opacity-90 mb-3">Art galleries and High Line access</p>
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <p class="text-lg font-bold">$1.9M</p>
                                            <p class="text-xs opacity-75">Median Price</p>
                                        </div>
                                        <div>
                                            <p class="text-lg font-bold">8.8</p>
                                            <p class="text-xs opacity-75">Walk Score</p>
                                        </div>
                                        <div>
                                            <p class="text-lg font-bold">62</p>
                                            <p class="text-xs opacity-75">Properties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-surface">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-display font-semibold text-text-primary mb-4">Explore Neighborhoods Interactively</h2>
                        <p class="text-lg text-text-secondary max-w-2xl mx-auto">Use our interactive map to discover neighborhoods based on your lifestyle priorities and investment goals.</p>
                    </div>

                    <div class="grid lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-2">
                            <div class="bg-white rounded-xl shadow-soft overflow-hidden">
                                <div class="relative h-96 bg-gray-100">
                                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Interactive neighborhood map" class="w-full h-full object-cover" loading="lazy" />
                                    <div class="absolute inset-0 bg-primary/20"></div>

                                    <div class="absolute top-1/4 left-1/3 w-6 h-6 bg-accent rounded-full border-2 border-white shadow-soft animate-pulse cursor-pointer"></div>
                                    <div class="absolute top-1/2 right-1/3 w-6 h-6 bg-success rounded-full border-2 border-white shadow-soft animate-pulse cursor-pointer"></div>
                                    <div class="absolute bottom-1/3 left-1/2 w-6 h-6 bg-primary rounded-full border-2 border-white shadow-soft animate-pulse cursor-pointer"></div>

                                    <div class="absolute top-4 right-4 space-y-2">
                                        <button class="w-10 h-10 bg-white rounded-lg shadow-soft flex items-center justify-center hover:bg-gray-50 transition-micro">
                                            <svg class="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </button>
                                        <button class="w-10 h-10 bg-white rounded-lg shadow-soft flex items-center justify-center hover:bg-gray-50 transition-micro">
                                            <svg class="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="absolute bottom-4 left-4 bg-white rounded-lg shadow-soft p-3">
                                        <div class="space-y-2 text-sm">
                                            <div class="flex items-center space-x-2">
                                                <div class="w-3 h-3 bg-accent rounded-full"></div>
                                                <span class="text-text-secondary">Luxury Properties</span>
                                            </div>
                                            <div class="flex items-center space-x-2">
                                                <div class="w-3 h-3 bg-success rounded-full"></div>
                                                <span class="text-text-secondary">Investment Opportunities</span>
                                            </div>
                                            <div class="flex items-center space-x-2">
                                                <div class="w-3 h-3 bg-primary rounded-full"></div>
                                                <span class="text-text-secondary">Family Homes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-6">
                            <div class="card">
                                <h3 class="font-semibold text-text-primary mb-4">Filter by Lifestyle</h3>
                                <div class="space-y-3">
                                    <label class="flex items-center">
                                        <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" checked />
                                        <span class="ml-2 text-sm text-text-secondary">Schools (9+ rating)</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                                        <span class="ml-2 text-sm text-text-secondary">Public Transit</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" checked />
                                        <span class="ml-2 text-sm text-text-secondary">Restaurants & Dining</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                                        <span class="ml-2 text-sm text-text-secondary">Parks & Recreation</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                                        <span class="ml-2 text-sm text-text-secondary">Shopping Centers</span>
                                    </label>
                                </div>
                            </div>

                            <div class="card">
                                <h3 class="font-semibold text-text-primary mb-4">Price Range</h3>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm text-text-secondary">$500K</span>
                                        <span class="text-sm text-text-secondary">$5M+</span>
                                    </div>
                                    <div class="relative">
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="w-[60%] bg-primary h-2 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <span class="text-sm font-medium text-text-primary">$500K - $3M</span>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <h3 class="font-semibold text-text-primary mb-4">Market Overview</h3>
                                <div class="space-y-3">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm text-text-secondary">Avg. Price/SqFt</span>
                                        <span class="text-sm font-medium text-text-primary">$1,247</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm text-text-secondary">Days on Market</span>
                                        <span class="text-sm font-medium text-text-primary">28</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm text-text-secondary">Price Growth (YoY)</span>
                                        <span class="text-sm font-medium text-success">+7.2%</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm text-text-secondary">Inventory Level</span>
                                        <span class="text-sm font-medium text-warning">Low</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-display font-semibold text-text-primary mb-4">Neighborhood Deep Dive</h2>
                        <p class="text-lg text-text-secondary max-w-2xl mx-auto">Get comprehensive insights into what makes each neighborhood unique, from market trends to lifestyle amenities.</p>
                    </div>

                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-8">
                            <div class="space-y-4">
                                <h3 class="text-2xl font-display font-semibold text-text-primary">SoHo Market Analysis</h3>
                                <p class="text-text-secondary leading-relaxed">
                                    SoHo continues to attract discerning buyers with its unique blend of artistic heritage and luxury amenities. Recent market data shows strong appreciation potential with limited inventory driving competitive pricing.
                                </p>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="bg-surface rounded-lg p-4">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                                            <svg class="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="text-sm text-text-secondary">Price Appreciation</p>
                                            <p class="text-lg font-bold text-success">+8.2%</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-surface rounded-lg p-4">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="text-sm text-text-secondary">Median Price</p>
                                            <p class="text-lg font-bold text-text-primary">$2.8M</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-surface rounded-lg p-4">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                                            <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="text-sm text-text-secondary">Avg. Days on Market</p>
                                            <p class="text-lg font-bold text-text-primary">22</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-surface rounded-lg p-4">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-10 h-10 bg-warning-100 rounded-lg flex items-center justify-center">
                                            <svg class="w-5 h-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="text-sm text-text-secondary">Inventory Level</p>
                                            <p class="text-lg font-bold text-warning">Limited</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4">
                                <h4 class="text-lg font-semibold text-text-primary">Lifestyle Highlights</h4>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div class="flex items-center space-x-3">
                                        <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <span class="text-sm text-text-secondary">Art Galleries & Museums</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span class="text-sm text-text-secondary">Luxury Shopping</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                        </svg>
                                        <span class="text-sm text-text-secondary">Fine Dining</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                        <span class="text-sm text-text-secondary">Excellent Transit Access</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-6">
                            <div class="card">
                                <h4 class="font-semibold text-text-primary mb-4">Price Trend (12 Months)</h4>
                                <div class="h-48 bg-gray-50 rounded-lg flex items-end justify-between p-4">
                                    <div class="w-8 bg-primary-200 rounded-t h-[30%]"></div>
                                    <div class="w-8 bg-primary-300 rounded-t h-[45%]"></div>
                                    <div class="w-8 bg-primary-400 rounded-t h-[60%]"></div>
                                    <div class="w-8 bg-primary-500 rounded-t h-[75%]"></div>
                                    <div class="w-8 bg-primary-600 rounded-t h-[85%]"></div>
                                    <div class="w-8 bg-accent rounded-t h-[100%]"></div>
                                </div>
                                <div class="flex justify-between text-xs text-text-secondary mt-2">
                                    <span>Jan</span>
                                    <span>Mar</span>
                                    <span>May</span>
                                    <span>Jul</span>
                                    <span>Sep</span>
                                    <span>Nov</span>
                                </div>
                            </div>

                            <div class="card">
                                <h4 class="font-semibold text-text-primary mb-4">Transportation Score</h4>
                                <div class="space-y-4">
                                    <div>
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-sm text-text-secondary">Walk Score</span>
                                            <span class="text-sm font-medium text-text-primary">91/100</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="bg-success h-2 rounded-full w-[91%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-sm text-text-secondary">Transit Score</span>
                                            <span class="text-sm font-medium text-text-primary">88/100</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="bg-primary h-2 rounded-full w-[88%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-sm text-text-secondary">Bike Score</span>
                                            <span class="text-sm font-medium text-text-primary">76/100</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="bg-accent h-2 rounded-full w-[76%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-surface">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-display font-semibold text-text-primary mb-4">Local Business Spotlight</h2>
                        <p class="text-lg text-text-secondary max-w-2xl mx-auto">Discover the businesses and amenities that make each neighborhood special and contribute to its unique character.</p>
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="card text-center">
                            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-text-primary mb-2">Balthazar</h3>
                            <p class="text-sm text-text-secondary mb-3">French bistro institution</p>
                            <div class="flex justify-center items-center space-x-1 mb-2">
                                <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span class="text-sm font-medium text-text-primary">4.8</span>
                            </div>
                            <p class="text-xs text-text-secondary">2 min walk</p>
                        </div>

                        <div class="card text-center">
                            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-text-primary mb-2">Blue Bottle Coffee</h3>
                            <p class="text-sm text-text-secondary mb-3">Artisanal coffee roasters</p>
                            <div class="flex justify-center items-center space-x-1 mb-2">
                                <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span class="text-sm font-medium text-text-primary">4.6</span>
                            </div>
                            <p class="text-xs text-text-secondary">1 min walk</p>
                        </div>

                        <div class="card text-center">
                            <div class="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-text-primary mb-2">Gagosian Gallery</h3>
                            <p class="text-sm text-text-secondary mb-3">Contemporary art exhibitions</p>
                            <div class="flex justify-center items-center space-x-1 mb-2">
                                <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span class="text-sm font-medium text-text-primary">4.7</span>
                            </div>
                            <p class="text-xs text-text-secondary">3 min walk</p>
                        </div>

                        <div class="card text-center">
                            <div class="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-text-primary mb-2">Equinox SoHo</h3>
                            <p class="text-sm text-text-secondary mb-3">Premium fitness club</p>
                            <div class="flex justify-center items-center space-x-1 mb-2">
                                <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span class="text-sm font-medium text-text-primary">4.5</span>
                            </div>
                            <p class="text-xs text-text-secondary">4 min walk</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-display font-semibold text-text-primary mb-4">Education Excellence</h2>
                        <p class="text-lg text-text-secondary max-w-2xl mx-auto">Top-rated schools and educational opportunities that make neighborhoods attractive to families.</p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="card">
                            <div class="flex items-start justify-between mb-4">
                                <div>
                                    <h3 class="font-semibold text-text-primary mb-1">PS 234 Independence</h3>
                                    <p class="text-sm text-text-secondary">Elementary School</p>
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-success">9.2</div>
                                    <div class="text-xs text-text-secondary">Rating</div>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div class="flex justify-between text-sm">
                                    <span class="text-text-secondary">Student-Teacher Ratio</span>
                                    <span class="font-medium text-text-primary">12:1</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-text-secondary">Distance</span>
                                    <span class="font-medium text-text-primary">0.3 miles</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-text-secondary">Test Scores</span>
                                    <span class="font-medium text-success">Above Average</span>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="flex items-start justify-between mb-4">
                                <div>
                                    <h3 class="font-semibold text-text-primary mb-1">MS 131 Lanza</h3>
                                    <p class="text-sm text-text-secondary">Middle School</p>
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-success">8.8</div>
                                    <div class="text-xs text-text-secondary">Rating</div>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div class="flex justify-between text-sm">
                                    <span class="text-text-secondary">Student-Teacher Ratio</span>
                                    <span class="font-medium text-text-primary">14:1</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-text-secondary">Distance</span>
                                    <span class="font-medium text-text-primary">0.5 miles</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-text-secondary">Test Scores</span>
                                    <span class="font-medium text-success">Above Average</span>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="flex items-start justify-between mb-4">
                                <div>
                                    <h3 class="font-semibold text-text-primary mb-1">Stuyvesant High School</h3>
                                    <p class="text-sm text-text-secondary">Specialized High School</p>
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-success">9.7</div>
                                    <div class="text-xs text-text-secondary">Rating</div>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div class="flex justify-between text-sm">
                                    <span class="text-text-secondary">Student-Teacher Ratio</span>
                                    <span class="font-medium text-text-primary">16:1</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-text-secondary">Distance</span>
                                    <span class="font-medium text-text-primary">1.2 miles</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-text-secondary">College Prep</span>
                                    <span class="font-medium text-success">Excellent</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-primary text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div class="space-y-8">
                        <div class="space-y-4">
                            <h2 class="text-3xl font-display font-semibold">Ready to Explore Your Next Neighborhood?</h2>
                            <p class="text-lg text-primary-100 max-w-2xl mx-auto">
                                Connect with our local market experts who can provide personalized insights and guide you through your neighborhood discovery journey.
                            </p>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="property_listings_advanced_search_results.html" class="btn-accent">Browse Properties</a>
                            <a href="agent_directory_professional_network.html" class="bg-white text-primary font-semibold py-3 px-6 rounded-md transition-micro hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">Find an Agent</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NeighbourhoodGuides