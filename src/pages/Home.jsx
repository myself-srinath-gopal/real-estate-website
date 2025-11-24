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
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-semibold text-(--primary) leading-10 lg:leading-15 tracking-tighter">
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
                                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
                                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Luxury modern home exterior" className="w-full h-96 object-cover" loading="lazy" onerror="this.src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-linear-to-r from-(--primary-500) to-(--secondary-500) rounded-lg flex items-center justify-center">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
        </>
    )
}

export default Home