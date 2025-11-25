import React from 'react'

const AboutUs = () => {
    return (
        <>
            <section className="relative bg-linear-to-br from-primary-50 to-white overflow-hidden py-20">
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-display font-semibold text-text-primary leading-tight">
                                Transforming Real Estate Through
                                <span className="text-accent">Intelligence</span>
                            </h1>
                            <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                                Estate Elite was founded on the belief that real estate decisions should be empowered by sophisticated data, not limited by traditional platforms. We're building the future of property discovery and professional networking.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 mt-12">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                                <div className="text-sm text-text-secondary">Active Users</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent mb-2">2,500+</div>
                                <div className="text-sm text-text-secondary">Elite Agents</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-success mb-2">$2.8B</div>
                                <div className="text-sm text-text-secondary">Properties Sold</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                                <div className="text-sm text-text-secondary">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-semibold text-text-primary">Our Mission</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    To democratize access to premium real estate intelligence while maintaining the sophistication that discerning buyers and top-tier professionals demand. We believe that everyone deserves data-driven insights when making life's biggest investment decisions.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-primary mb-2">Transparency First</h3>
                                        <p className="text-text-secondary">Complete market data, honest pricing, and clear transaction processes that build trust through openness.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-primary mb-2">Information Empowerment</h3>
                                        <p className="text-text-secondary">Sophisticated analytics and market insights that enable confident decision-making at every level.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-primary mb-2">Premium Accessibility</h3>
                                        <p className="text-text-secondary">Making luxury real estate experiences available to all serious buyers while maintaining exceptional standards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-premium">
                                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Modern office space representing Estate Elite's mission" className="w-full h-96 object-cover" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-text-primary mb-4">Leadership Team</h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">Our founding team combines decades of real estate expertise with cutting-edge technology experience to deliver unparalleled market intelligence.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card text-center">
                            <div className="relative inline-block mb-6">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="CEO and Co-founder professional headshot" className="w-32 h-32 rounded-full object-cover mx-auto" loading="lazy" />
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary mb-1">David Chen</h3>
                            <p className="text-accent font-medium mb-3">CEO & Co-founder</p>
                            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                                Former VP of Product at Zillow with 15+ years in real estate technology. MBA from Wharton, passionate about democratizing market intelligence.
                            </p>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-text-secondary hover:text-primary transition-micro">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-text-secondary hover:text-primary transition-micro">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="card text-center">
                            <div className="relative inline-block mb-6">
                                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="CTO and Co-founder professional headshot" className="w-32 h-32 rounded-full object-cover mx-auto" loading="lazy" />
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary mb-1">Sarah Rodriguez</h3>
                            <p className="text-accent font-medium mb-3">CTO & Co-founder</p>
                            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                                Former Senior Engineering Manager at Google with expertise in machine learning and data analytics. Stanford CS graduate, focused on scalable real estate solutions.
                            </p>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-text-secondary hover:text-primary transition-micro">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-text-secondary hover:text-primary transition-micro">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="card text-center">
                            <div className="relative inline-block mb-6">
                                <img src="https://images.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg" alt="VP of Real Estate professional headshot" className="w-32 h-32 rounded-full object-cover mx-auto" loading="lazy" />
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary mb-1">Michael Thompson</h3>
                            <p className="text-accent font-medium mb-3">VP of Real Estate</p>
                            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                                20+ years in luxury real estate with $500M+ in career sales. Former Sotheby's International Realty top producer, expert in high-end market dynamics.
                            </p>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-text-secondary hover:text-primary transition-micro">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-text-secondary hover:text-primary transition-micro">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-text-primary mb-4">What Sets Us Apart</h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">Estate Elite transcends traditional MLS portals through proprietary technology, curated networks, and lifestyle-focused experiences.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary">Proprietary Market Analytics</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Advanced algorithms analyze market trends, price predictions, and investment opportunities that traditional platforms miss. Our data science team processes millions of data points daily.
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary">Elite Agent Network</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Rigorously vetted professionals with proven track records, specialized expertise, and commitment to exceptional client experiences. Only the top 10% of agents qualify.
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary">Lifestyle-Focused Discovery</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Properties are curated and presented through lifestyle lenses—urban professional, family-focused, luxury amenities—helping clients envision their perfect life, not just their next home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-text-primary mb-4">Industry Recognition</h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">Our commitment to excellence has been recognized by leading industry publications and organizations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="card text-center">
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">Best PropTech Platform</h3>
                            <p className="text-sm text-text-secondary mb-2">Real Estate Tech Awards 2024</p>
                            <p className="text-xs text-accent">Innovation in Market Intelligence</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">Fastest Growing Platform</h3>
                            <p className="text-sm text-text-secondary mb-2">PropTech Breakthrough 2024</p>
                            <p className="text-xs text-primary">300% Year-over-Year Growth</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">Top User Experience</h3>
                            <p className="text-sm text-text-secondary mb-2">UX Design Awards 2024</p>
                            <p className="text-xs text-success">Excellence in Digital Design</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">Industry Disruptor</h3>
                            <p className="text-sm text-text-secondary mb-2">Forbes PropTech 50 2024</p>
                            <p className="text-xs text-warning">Transforming Real Estate</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-text-primary mb-4">Trust & Security</h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">Your privacy and security are paramount. We maintain the highest standards of data protection and transaction security.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center space-y-3">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary">SSL Encrypted</h3>
                            <p className="text-sm text-text-secondary">Bank-level security for all transactions</p>
                        </div>

                        <div className="text-center space-y-3">
                            <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary">GDPR Compliant</h3>
                            <p className="text-sm text-text-secondary">Full privacy protection and data control</p>
                        </div>

                        <div className="text-center space-y-3">
                            <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary">Verified Agents</h3>
                            <p className="text-sm text-text-secondary">Licensed professionals with background checks</p>
                        </div>

                        <div className="text-center space-y-3">
                            <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-text-primary">NAR Member</h3>
                            <p className="text-sm text-text-secondary">National Association of Realtors certified</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-linear-to-br from-primary to-primary-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-display font-semibold">
                                Ready to Experience the Future of Real Estate?
                            </h2>
                            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
                                Join thousands of discerning buyers and top-tier professionals who trust Estate Elite for their real estate intelligence needs.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="property_listings_advanced_search_results.html" className="bg-accent text-white font-semibold py-3 px-8 rounded-md transition-micro hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2">
                                Explore Properties
                            </a>
                            <a href="agent_directory_professional_network.html" className="bg-white text-primary font-semibold py-3 px-8 rounded-md transition-micro hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                                Find an Agent
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs