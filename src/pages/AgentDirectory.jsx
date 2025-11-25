import React from 'react'

const AgentDirectory = () => {

    const agents = [
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
            name: 'Sarah Chen',
            role: 'Luxury Properties Specialist',
            noOfStars: 5,
            review: 4.9,
            noOfReviews: 127,
            badges: [
                { label: 'Mandarin', color: '--primary' },
                { label: 'English', color: '--secondary' },
                { label: 'Top 1%', color: '--accent' },
            ],
            stats: [
                { label: 'Recent Sales', value: '$47M', color: '--primary' },
                { label: 'Avg. Days to Sale', value: '28 days', color: '--success' },
                { label: 'Years Exp.', value: '12 years', color: '--primary' },
                { label: 'Response Time', value: '2 hours', color: '--accent' },
            ],
            skills: [
                { label: 'CLHMS' },
                { label: 'ABR' },
                { label: 'GRI' },
            ],
            message: 'Message Sarah'
        },
        {
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            name: 'Michael Rodriguez',
            role: 'Investment Properties Expert',
            noOfStars: 4,
            review: 4.8,
            noOfReviews: 94,
            badges: [
                { label: 'Spanish', color: '--primary' },
                { label: 'English', color: '--secondary' },
                { label: 'Investment Pro', color: '--accent' },
            ],
            stats: [
                { label: 'Recent Sales', value: '$32M', color: '--primary' },
                { label: 'Avg. Days to Sale', value: '35 days', color: '--success' },
                { label: 'Years Exp.', value: '15 years', color: '--primary' },
                { label: 'Response Time', value: '1 hour', color: '--accent' },
            ],
            skills: [
                { label: 'CCIM' },
                { label: 'CRS' },
                { label: 'GRI' },
            ],
            message: 'Message Michael'
        },
        {
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg',
            name: 'Emily Johnson',
            role: 'Family Homes Specialist',
            noOfStars: 5,
            review: 4.9,
            noOfReviews: 94,
            badges: [
                { label: 'English', color: '--primary' },
                { label: 'French', color: '--secondary' },
                { label: 'Family Expert', color: '--accent' },
            ],
            stats: [
                { label: 'Recent Sales', value: '$28M', color: '--primary' },
                { label: 'Avg. Days to Sale', value: '22 days', color: '--success' },
                { label: 'Years Exp.', value: '9 years', color: '--primary' },
                { label: 'Response Time', value: '30 mins', color: '--accent' },
            ],
            skills: [
                { label: 'ABR' },
                { label: 'SRES' },
                { label: 'GRI' },
            ],
            message: 'Message Michael'
        },
    ]

    const clients = [
        {
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
            name: 'Jennifer Martinez',
            type: 'First-time buyer',
            noOfStars: 5,
            message: 'Estate Elite\'s matching system connected me with Emily, who made my first home purchase seamless. Her patience and expertise were exactly what I needed as a first-time buyer.'
        },
        {
            image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            name: 'David Kim',
            type: 'Investment Buyer',
            noOfStars: 5,
            message: 'Michael\'s investment expertise helped me identify properties with the best ROI potential. The platform\'s data-driven approach to agent matching is incredibly effective.'
        },
        {
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8MXwwfHx8Mg%3D%3D',
            name: 'Robert Thompson',
            type: 'Luxury Buyer',
            noOfStars: 4,
            message: 'Sarah\'s luxury market expertise and attention to detail exceeded my expectations. The quality of agents on Estate Elite is truly exceptional.'
        },
    ]
    return (
        <>
            <section className="relative bg-linear-to-br from-(--primary-50) to-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-display font-semibold tracking-tighter text-(--text-primary) mb-6">
                            Connect with <span className="text-(--accent)">Elite</span> Real Estate Professionals
                        </h1>
                        <p className="text-base md:text-lg text-(--text-secondary) max-w-3xl mx-auto mb-8">
                            Discover top-performing agents with verified credentials, specialized expertise, and proven track records. Our sophisticated matching system connects you with professionals who understand your unique needs.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="text-xl md:text-3xl font-bold text-(--primary)">247</div>
                                <div className="text-sm text-(--text-secondary)">Elite Agents</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-3xl font-bold text-(--success)">98.5%</div>
                                <div className="text-sm text-(--text-secondary)">Client Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-3xl font-bold text-(--text-secondary)">$2.8B</div>
                                <div className="text-sm text-(--text-secondary)">Sales Volume</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-3xl font-bold text-(--primary)">23</div>
                                <div className="text-sm text-(--text-secondary)">Avg. Days to Sale</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-(--surface)">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-floating p-8 border border-gray-200">
                        <div className="mb-6">
                            <h2 className="text-2xl font-display font-semibold text-(--text-primary) mb-2 tracking-tighter">Find Your Perfect Agent Match</h2>
                            <p className="text-(--text-secondary)">Use our advanced filters to find agents with the exact expertise you need</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-(--text-primary) mb-2">Specialization</label>
                                <select className="input-field">
                                    <option>All Specializations</option>
                                    <option>Luxury Condos</option>
                                    <option>Historic Properties</option>
                                    <option>Investment Opportunities</option>
                                    <option>Family Homes</option>
                                    <option>Commercial Properties</option>
                                    <option>New Construction</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-(--text-primary) mb-2">Geographic Expertise</label>
                                <select className="input-field">
                                    <option>All Locations</option>
                                    <option>Manhattan</option>
                                    <option>Brooklyn</option>
                                    <option>Queens</option>
                                    <option>Bronx</option>
                                    <option>Staten Island</option>
                                    <option>Westchester</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-(--text-primary) mb-2">Languages</label>
                                <select className="input-field">
                                    <option>All Languages</option>
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>Mandarin</option>
                                    <option>French</option>
                                    <option>Russian</option>
                                    <option>Arabic</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-(--text-primary) mb-2">Minimum Rating</label>
                                <select className="input-field">
                                    <option>Any Rating</option>
                                    <option>4.5+ Stars</option>
                                    <option>4.7+ Stars</option>
                                    <option>4.8+ Stars</option>
                                    <option>4.9+ Stars</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                            <button className="px-4 py-2 bg-(--primary-50) text-(--primary) text-sm rounded-full hover:bg-(--primary-100) transition-micro">First-Time Buyers</button>
                            <button className="px-4 py-2 bg-(--primary-50) text-(--primary) text-sm rounded-full hover:bg-(--primary-100) transition-micro">Luxury Market</button>
                            <button className="px-4 py-2 bg-(--primary-50) text-(--primary) text-sm rounded-full hover:bg-(--primary-100) transition-micro">Investment Focus</button>
                            <button className="px-4 py-2 bg-(--primary-50) text-(--primary) text-sm rounded-full hover:bg-(--primary-100) transition-micro">Relocation Specialist</button>
                            <button className="px-4 py-2 bg-(--primary-50) text-(--primary) text-sm rounded-full hover:bg-(--primary-100) transition-micro">International Clients</button>
                        </div>

                        <div className="flex flex-col space-y-4 sm:flex-row justify-between sm:items-center sm:space-y-0 mt-6">
                            <div className="text-sm text-(--text-secondary)">
                                Showing 24 of 247 agents
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-(--text-secondary)">Sort by:</span>
                                <select className="text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary)">
                                    <option>Client Rating</option>
                                    <option>Recent Sales</option>
                                    <option>Years Experience</option>
                                    <option>Response Time</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-(--text-primary) mb-4 tracking-tighter">Top Performing Agents</h2>
                        <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">Meet our highest-rated professionals with exceptional track records and client satisfaction</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            agents?.map((agent, index) => (
                                <div key={index} className="card group cursor-pointer hover:shadow-premium transition-smooth">
                                    <div className="relative">
                                        <div className="relative mb-6">
                                            <img src={agent.image} alt={agent.name} className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-soft" loading="lazy" />
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                                <div className="w-8 h-8 bg-(--success) rounded-full border-3 border-white flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center mb-6">
                                            <h3 className="text-xl font-semibold text-(--text-primary) mb-1">{agent.name}</h3>
                                            <p className="text-(--text-secondary) text-sm mb-2">{agent.role}</p>
                                            <div className="flex items-center justify-center space-x-1 mb-3">
                                                <div className="flex text-(--primary)">
                                                    {
                                                        Array.from({ length: agent.noOfStars }).map((_, index) => (
                                                            <svg key={index} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))
                                                    }
                                                </div>
                                                <span className="text-sm text-(--text-secondary) ml-2">{agent.review} ({agent.noOfReviews} reviews)</span>
                                            </div>
                                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                                {
                                                    agent.badges.map((badge, index) => (
                                                        <span key={index} className="px-2 py-1 bg-(--primary-50) text-(--primary) text-xs rounded-full">{badge.label}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            {
                                                agent.stats.map((stat, index) => (
                                                    <div key={index} className="flex justify-between items-center">
                                                        <span className="text-sm text-(--text-secondary)">{stat.label}</span>
                                                        <span className="font-semibold text-(--text-primary)">{stat.value}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div className="flex justify-center space-x-3 mb-6">
                                            {
                                                agent.skills.map((skill, index) => (
                                                    <div key={index} className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center" title={skill.label}>
                                                        <span className="text-xs font-bold text-primary">{skill.label}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div className="space-y-3">
                                            <button className="w-full btn-primary text-sm py-2">
                                                <svg className="w-4 h-4 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 20l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                                                </svg>
                                                {agent.message}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="text-center mt-12">
                        <button className="btn-secondary">Load More Agents</button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-semibold text-text-primary tracking-tighter">
                                    Smart Agent Matching
                                </h2>
                                <p className="text-lg text-text-secondary">
                                    Our advanced algorithm analyzes your preferences, transaction history, and property interests to suggest the perfect agent match for your unique needs.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-primary mb-1">Specialization Match</h3>
                                        <p className="text-sm text-text-secondary">Connects you with agents who specialize in your property type and price range</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin w-6 h-6"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-primary mb-1">Geographic Expertise</h3>
                                        <p className="text-sm text-text-secondary">Matches you with agents who have deep knowledge of your target neighborhoods</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee-icon lucide-indian-rupee w-6 h-6"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-primary mb-1">Performance History</h3>
                                        <p className="text-sm text-text-secondary">Considers track record, client satisfaction, and transaction success rates</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle w-6 h-6"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-primary mb-1">Communication Style</h3>
                                        <p className="text-sm text-text-secondary">Matches communication preferences and response time expectations</p>
                                    </div>
                                </div>
                            </div>

                            <button className="btn-primary">Get My Agent Recommendations</button>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-xl shadow-floating p-8 border border-gray-200">
                                <div className="text-center mb-6">
                                    <h3 className="text-lg font-semibold text-text-primary mb-2">Your Perfect Match</h3>
                                    <p className="text-sm text-text-secondary">Based on your preferences</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-secondary">Specialization Match</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                                <div className="w-[95%] bg-success h-2 rounded-full"></div>
                                            </div>
                                            <span className="text-sm font-medium text-success">95%</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-secondary">Location Expertise</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                                <div className="w-[88%] bg-accent h-2 rounded-full"></div>
                                            </div>
                                            <span className="text-sm font-medium text-accent">88%</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-secondary">Performance Score</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                                <div className="w-[92%] bg-primary h-2 rounded-full"></div>
                                            </div>
                                            <span className="text-sm font-medium text-primary">92%</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-secondary">Communication Fit</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                                <div className="w-[97%] bg-success h-2 rounded-full"></div>
                                            </div>
                                            <span className="text-sm font-medium text-success">97%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-success-50 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-success mb-1">93%</div>
                                    <div className="text-sm text-success">Overall Match Score</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-semibold text-text-primary mb-4 tracking-tighter">What Our Clients Say</h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">Real experiences from clients who found their perfect agent match through Estate Elite</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {
                            clients?.map((client, index) => (
                                <div key={index} className="card">
                                    <div className="flex items-center mb-4">
                                        <img src={client.image} alt="Client testimonial" className="w-12 h-12 rounded-full object-cover mr-4" loading="lazy" />
                                        <div>
                                            <h4 className="font-semibold text-text-primary">{client.name}</h4>
                                            <p className="text-sm text-text-secondary">{client.type}</p>
                                        </div>
                                    </div>
                                    <div className="flex text-accent mb-3">
                                        {
                                            Array.from({ length: client.noOfStars }).map((_, index) => (
                                                <svg key={index} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))
                                        }
                                    </div>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        "{client.message}"
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default AgentDirectory