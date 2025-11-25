import React from 'react'

const IndividualProperty = () => {
    return (
        <>
            <section className="bg-surface py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-4">
                            <li>
                                <a href="homepage_premium_real_estate_platform.html" className="text-text-secondary hover:text-primary transition-micro">Home</a>
                            </li>
                            <li>
                                <svg className="shrink-0 h-4 w-4 text-text-secondary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </li>
                            <li>
                                <a href="property_listings_advanced_search_results.html" className="text-text-secondary hover:text-primary transition-micro">Properties</a>
                            </li>
                            <li>
                                <svg className="shrink-0 h-4 w-4 text-text-secondary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </li>
                            <li>
                                <span className="text-text-primary font-medium">Luxury Penthouse - SoHo</span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="relative">
                <div className="relative h-96 lg:h-128 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Luxury penthouse living room with city views" className="w-full h-full object-cover" loading="eager" />

                    <div className="absolute bottom-4 left-4 flex space-x-2">
                        <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-soft flex items-center justify-center hover:bg-white transition-micro">
                            <svg className="w-5 h-5 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-soft flex items-center justify-center hover:bg-white transition-micro">
                            <svg className="w-5 h-5 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-soft flex items-center justify-center hover:bg-white transition-micro">
                            <svg className="w-5 h-5 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        1 / 24 Photos
                    </div>
                </div>

                <div className="bg-white border-t border-gray-200 p-4">
                    <div className="flex space-x-2 overflow-x-auto">
                        <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2" alt="Living room" className="w-20 h-16 object-cover rounded-lg border-2 border-primary cursor-pointer" loading="lazy" />
                        <img src="https://images.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg" alt="Kitchen" className="w-20 h-16 object-cover rounded-lg border border-gray-300 cursor-pointer hover:border-primary transition-micro" loading="lazy" />
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=300&auto=format&fit=crop" alt="Bedroom" className="w-20 h-16 object-cover rounded-lg border border-gray-300 cursor-pointer hover:border-primary transition-micro" loading="lazy" />
                        <img src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2" alt="Bathroom" className="w-20 h-16 object-cover rounded-lg border border-gray-300 cursor-pointer hover:border-primary transition-micro" loading="lazy" />
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=300&auto=format&fit=crop" alt="Terrace" className="w-20 h-16 object-cover rounded-lg border border-gray-300 cursor-pointer hover:border-primary transition-micro" loading="lazy" />
                    </div>
                </div>

                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-white rounded-full shadow-floating border border-gray-200 px-6 py-3">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-700 transition-micro">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm font-medium">Schedule Tour</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-700 transition-micro">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-sm font-medium">Contact Agent</span>
                        </button>
                        <button className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-gray-200 transition-micro">
                            <svg className="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <button className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-gray-200 transition-micro">
                            <svg className="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <span className="px-3 py-1 bg-success-100 text-success text-sm font-medium rounded-full">For Sale</span>
                                        <span className="px-3 py-1 bg-accent-100 text-accent text-sm font-medium rounded-full">Luxury</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-display font-semibold text-text-primary">$2,850,000</p>
                                        <p className="text-sm text-text-secondary">$1,425 per sq ft</p>
                                    </div>
                                </div>
                                <h1 className="text-3xl lg:text-4xl font-display font-semibold text-text-primary">
                                    Stunning Penthouse with Panoramic City Views
                                </h1>
                                <div className="flex items-center space-x-4 text-text-secondary">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>123 Spring Street, SoHo, New York, NY 10012</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center p-4 bg-surface rounded-lg">
                                    <div className="text-2xl font-bold text-text-primary">3</div>
                                    <div className="text-sm text-text-secondary">Bedrooms</div>
                                </div>
                                <div className="text-center p-4 bg-surface rounded-lg">
                                    <div className="text-2xl font-bold text-text-primary">2.5</div>
                                    <div className="text-sm text-text-secondary">Bathrooms</div>
                                </div>
                                <div className="text-center p-4 bg-surface rounded-lg">
                                    <div className="text-2xl font-bold text-text-primary">2,000</div>
                                    <div className="text-sm text-text-secondary">Sq Ft</div>
                                </div>
                                <div className="text-center p-4 bg-surface rounded-lg">
                                    <div className="text-2xl font-bold text-text-primary">2019</div>
                                    <div className="text-sm text-text-secondary">Year Built</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-semibold text-text-primary">About This Property</h2>
                                <div className="prose prose-lg text-text-secondary">
                                    <p>
                                        Experience the pinnacle of SoHo living in this breathtaking penthouse that seamlessly blends industrial heritage with contemporary luxury. Floor-to-ceiling windows flood the open-concept living space with natural light while showcasing unobstructed views of the Manhattan skyline.
                                    </p>
                                    <p>
                                        The chef's kitchen features premium Miele appliances, custom Italian cabinetry, and a stunning waterfall island perfect for entertaining. The master suite offers a private sanctuary with a spa-like ensuite bathroom and walk-in closet designed by California Closets.
                                    </p>
                                    <p>
                                        Step onto your private 800-square-foot terrace, an urban oasis complete with built-in seating, professional landscaping, and panoramic city views that extend from the Hudson River to the Brooklyn Bridge.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-text-primary">Key Features</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-secondary">Private 800 sq ft terrace</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-secondary">Floor-to-ceiling windows</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-secondary">Premium Miele appliances</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-secondary">Central air conditioning</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-secondary">Hardwood floors throughout</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-secondary">In-unit washer/dryer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="card">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Sarah Chen - Listing Agent" className="w-16 h-16 rounded-full object-cover" loading="lazy" />
                                    <div>
                                        <h3 className="font-semibold text-text-primary">Sarah Chen</h3>
                                        <p className="text-sm text-text-secondary">Luxury Properties Specialist</p>
                                        <div className="flex items-center mt-1">
                                            <div className="flex text-accent">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>
                                            <span className="text-xs text-text-secondary ml-1">5.0 (47 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Recent Sales</span>
                                        <span className="font-medium text-text-primary">$47M</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">SoHo Expertise</span>
                                        <span className="font-medium text-success">8 years</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <button className="w-full btn-primary">Contact Agent</button>
                                    <button className="w-full btn-secondary">View Profile</button>
                                </div>
                            </div>

                            <div className="card">
                                <h3 className="font-semibold text-text-primary mb-4">Mortgage Calculator</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-1">Home Price</label>
                                        <input type="text" value="$2,850,000" className="input-field" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-1">Down Payment</label>
                                        <input type="text" value="$570,000 (20%)" className="input-field" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-1">Interest Rate</label>
                                        <input type="text" value="6.75%" className="input-field" />
                                    </div>
                                    <div className="pt-4 border-t border-gray-200">
                                        <div className="flex justify-between items-center">
                                            <span className="text-text-secondary">Monthly Payment</span>
                                            <span className="text-xl font-bold text-text-primary">$14,782</span>
                                        </div>
                                        <p className="text-xs text-text-secondary mt-1">Principal & Interest</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <h3 className="font-semibold text-text-primary mb-4">Property Insights</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-secondary">Price per sq ft</span>
                                        <span className="text-sm font-medium text-text-primary">$1,425</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-secondary">Neighborhood avg</span>
                                        <span className="text-sm font-medium text-text-primary">$1,380</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-secondary">Price trend</span>
                                        <span className="text-sm font-medium text-success">+8.2% this year</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-secondary">Days on market</span>
                                        <span className="text-sm font-medium text-text-primary">12 days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-display font-semibold text-text-primary">Price History & Market Analysis</h2>
                            <div className="bg-white rounded-xl p-6 shadow-soft">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-semibold text-text-primary">Price Trend</h3>
                                    <div className="flex space-x-2">
                                        <button className="px-3 py-1 bg-primary text-white text-sm rounded-full">1Y</button>
                                        <button className="px-3 py-1 bg-gray-200 text-text-secondary text-sm rounded-full hover:bg-gray-300 transition-micro">3Y</button>
                                        <button className="px-3 py-1 bg-gray-200 text-text-secondary text-sm rounded-full hover:bg-gray-300 transition-micro">5Y</button>
                                    </div>
                                </div>
                                <div className="h-64 bg-linear-to-r from-primary-50 to-accent-50 rounded-lg flex items-end justify-between p-4 relative">
                                    <div className="w-8 bg-primary-200 rounded-t h-[40%]"></div>
                                    <div className="w-8 bg-primary-300 rounded-t h-[55%]"></div>
                                    <div className="w-8 bg-primary-400 rounded-t h-[45%]"></div>
                                    <div className="w-8 bg-primary-500 rounded-t h-[70%]"></div>
                                    <div className="w-8 bg-primary-600 rounded-t h-[65%]"></div>
                                    <div className="w-8 bg-accent rounded-t h-[85%]"></div>
                                    <div className="absolute top-4 left-4 text-sm text-text-secondary">$3.0M</div>
                                    <div className="absolute bottom-16 right-4 text-sm font-medium text-success">+12.5%</div>
                                </div>
                                <div className="flex justify-between text-xs text-text-secondary mt-2">
                                    <span>Jan 2024</span>
                                    <span>Mar 2024</span>
                                    <span>May 2024</span>
                                    <span>Jul 2024</span>
                                    <span>Sep 2024</span>
                                    <span>Dec 2024</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-display font-semibold text-text-primary">Comparable Sales</h2>
                            <div className="space-y-4">
                                <div className="bg-white rounded-lg p-4 shadow-soft">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=100&h=80&dpr=2" alt="Comparable property" className="w-16 h-12 object-cover rounded-lg" loading="lazy" />
                                        <div className="flex-1">
                                            <h4 className="font-medium text-text-primary">127 Spring Street</h4>
                                            <p className="text-sm text-text-secondary">3 bed, 2 bath • 1,950 sq ft</p>
                                            <p className="text-sm text-success">Sold 2 months ago</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-text-primary">$2,750,000</p>
                                            <p className="text-sm text-text-secondary">$1,410/sq ft</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 shadow-soft">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=100&auto=format&fit=crop" alt="Comparable property" className="w-16 h-12 object-cover rounded-lg" loading="lazy" />
                                        <div className="flex-1">
                                            <h4 className="font-medium text-text-primary">89 Mercer Street</h4>
                                            <p className="text-sm text-text-secondary">3 bed, 2.5 bath • 2,100 sq ft</p>
                                            <p className="text-sm text-success">Sold 1 month ago</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-text-primary">$2,950,000</p>
                                            <p className="text-sm text-text-secondary">$1,405/sq ft</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 shadow-soft">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://images.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="Comparable property" className="w-16 h-12 object-cover rounded-lg" loading="lazy" />
                                        <div className="flex-1">
                                            <h4 className="font-medium text-text-primary">156 Sullivan Street</h4>
                                            <p className="text-sm text-text-secondary">2 bed, 2 bath • 1,800 sq ft</p>
                                            <p className="text-sm text-success">Sold 3 weeks ago</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-text-primary">$2,650,000</p>
                                            <p className="text-sm text-text-secondary">$1,472/sq ft</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-text-primary mb-4">Neighborhood Intelligence</h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">Discover what makes SoHo one of Manhattan's most desirable neighborhoods for luxury living.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="card text-center">
                            <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">Walk Score</h3>
                            <div className="text-3xl font-bold text-success mb-1">98</div>
                            <p className="text-sm text-text-secondary">Walker's Paradise</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">Transit Score</h3>
                            <div className="text-3xl font-bold text-primary mb-1">95</div>
                            <p className="text-sm text-text-secondary">Excellent Transit</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">School Rating</h3>
                            <div className="text-3xl font-bold text-accent mb-1">8.5</div>
                            <p className="text-sm text-text-secondary">Above Average</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">Safety Score</h3>
                            <div className="text-3xl font-bold text-success mb-1">92</div>
                            <p className="text-sm text-text-secondary">Very Safe</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-text-primary">Nearby Places</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-text-primary">Spring Street Station</h4>
                                            <p className="text-sm text-text-secondary">Subway • 6 Train</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-text-primary">2 min walk</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6M8 11H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-text-primary">Whole Foods Market</h4>
                                            <p className="text-sm text-text-secondary">Grocery Store</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-text-primary">4 min walk</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-text-primary">SoHo Grand Hotel</h4>
                                            <p className="text-sm text-text-secondary">Luxury Hotel & Dining</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-text-primary">3 min walk</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-text-primary">Lifestyle & Culture</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-surface rounded-lg">
                                    <h4 className="font-medium text-text-primary mb-2">Shopping & Dining</h4>
                                    <p className="text-sm text-text-secondary">World-className boutiques, art galleries, and Michelin-starred restaurants within walking distance. SoHo's cobblestone streets offer unparalleled shopping and cultural experiences.</p>
                                </div>

                                <div className="p-4 bg-surface rounded-lg">
                                    <h4 className="font-medium text-text-primary mb-2">Arts & Entertainment</h4>
                                    <p className="text-sm text-text-secondary">Home to numerous art galleries, the New York City Fire Museum, and close proximity to Broadway theaters and cultural landmarks.</p>
                                </div>

                                <div className="p-4 bg-surface rounded-lg">
                                    <h4 className="font-medium text-text-primary mb-2">Parks & Recreation</h4>
                                    <p className="text-sm text-text-secondary">Washington Square Park and Hudson River Park are nearby, offering green spaces and recreational activities in the heart of Manhattan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-text-primary mb-4">Similar Properties</h2>
                        <p className="text-lg text-text-secondary">Explore other luxury properties in SoHo and nearby neighborhoods</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-floating transition-smooth cursor-pointer">
                            <div className="relative">
                                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&auto=format&fit=crop" alt="Luxury apartment in SoHo" className="w-full h-48 object-cover" loading="lazy" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-2 py-1 bg-success text-white text-xs font-medium rounded-full">New Listing</span>
                                </div>
                                <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-micro">
                                    <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-semibold text-text-primary">$2,650,000</h3>
                                    <span className="text-sm text-text-secondary">$1,472/sq ft</span>
                                </div>
                                <p className="text-text-secondary mb-3">156 Sullivan Street, SoHo</p>
                                <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                                    <span>2 bed</span>
                                    <span>2 bath</span>
                                    <span>1,800 sq ft</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2" alt="Agent" className="w-6 h-6 rounded-full object-cover" loading="lazy" />
                                    <span className="text-sm text-text-secondary">Michael Rodriguez</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-floating transition-smooth cursor-pointer">
                            <div className="relative">
                                <img src="https://images.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="Luxury loft in Tribeca" className="w-full h-48 object-cover" loading="lazy" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-2 py-1 bg-accent text-white text-xs font-medium rounded-full">Price Reduced</span>
                                </div>
                                <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-micro">
                                    <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-semibold text-text-primary">$3,200,000</h3>
                                    <span className="text-sm text-text-secondary">$1,391/sq ft</span>
                                </div>
                                <p className="text-text-secondary mb-3">78 Reade Street, Tribeca</p>
                                <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                                    <span>3 bed</span>
                                    <span>2.5 bath</span>
                                    <span>2,300 sq ft</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img src="https://images.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg" alt="Agent" className="w-6 h-6 rounded-full object-cover" loading="lazy" />
                                    <span className="text-sm text-text-secondary">Emily Johnson</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-floating transition-smooth cursor-pointer">
                            <div className="relative">
                                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400&auto=format&fit=crop" alt="Modern penthouse in NoLita" className="w-full h-48 object-cover" loading="lazy" />
                                <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-micro">
                                    <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-semibold text-text-primary">$2,950,000</h3>
                                    <span className="text-sm text-text-secondary">$1,405/sq ft</span>
                                </div>
                                <p className="text-text-secondary mb-3">89 Mercer Street, NoLita</p>
                                <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                                    <span>3 bed</span>
                                    <span>2.5 bath</span>
                                    <span>2,100 sq ft</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=40&auto=format&fit=crop" alt="Agent" className="w-6 h-6 rounded-full object-cover" loading="lazy" />
                                    <span className="text-sm text-text-secondary">Sarah Chen</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a href="property_listings_advanced_search_results.html" className="btn-primary">View More Properties</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndividualProperty