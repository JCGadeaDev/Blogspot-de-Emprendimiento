import React, { useState } from 'react';
import HomeSection from './components/HomeSection';
import PostCard from './components/PostCard';
import BlogArticlesSection from './components/BlogArticlesSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { blogPosts } from './data/blogPosts';

const App = () => {
    const [filterCategory, setFilterCategory] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const displayedPosts = filterCategory 
        ? blogPosts.filter(post => post.category === filterCategory) 
        : blogPosts;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            {/* Header y Navegación */}
            <header className="bg-black/95 backdrop-blur-sm shadow-2xl sticky top-0 z-50 border-b border-gray-800">
                <nav className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <a href="#inicio" className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300">
                        <img 
                            src="/logo.png" 
                            alt="Logo de EmprenFactor" 
                            className="h-16 w-auto md:h-20 lg:h-24 transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg"
                        />
                    </a>
                    
                    {/* Navegación Desktop */}
                    <div className="hidden md:flex space-x-1">
                        <a href="#inicio" className="relative px-4 py-2 text-white hover:text-orange-500 font-semibold transition-all duration-300 rounded-lg group overflow-hidden">
                            <span className="relative z-10">Inicio</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-black/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                            <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                        </a>
                        <a href="#articulos" className="relative px-4 py-2 text-white hover:text-orange-500 font-semibold transition-all duration-300 rounded-lg group overflow-hidden">
                            <span className="relative z-10">Artículos</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-black/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                            <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                        </a>
                        <a href="#acerca" className="relative px-4 py-2 text-white hover:text-orange-500 font-semibold transition-all duration-300 rounded-lg group overflow-hidden">
                            <span className="relative z-10">Acerca de</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-black/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                            <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                        </a>
                        <a href="#contacto" className="relative px-4 py-2 text-white hover:text-orange-500 font-semibold transition-all duration-300 rounded-lg group overflow-hidden">
                            <span className="relative z-10">Contacto</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-black/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                            <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                        </a>
                    </div>
                    
                    {/* Botón de menú móvil */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-white hover:text-orange-500 focus:outline-none focus:text-orange-500 transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                            aria-label="Abrir menú"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Menú móvil actualizado */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black/95 border-t border-gray-700 shadow-lg">
                        <div className="px-4 py-2 space-y-1">
                            <a 
                                href="#inicio" 
                                onClick={closeMenu}
                                className="block px-3 py-3 text-white hover:text-orange-500 hover:bg-white/10 font-semibold transition-all duration-200 rounded-lg"
                            >
                                Inicio
                            </a>
                            <a 
                                href="#articulos" 
                                onClick={closeMenu}
                                className="block px-3 py-3 text-white hover:text-orange-500 hover:bg-white/10 font-semibold transition-all duration-200 rounded-lg"
                            >
                                Artículos
                            </a>
                            <a 
                                href="#acerca" 
                                onClick={closeMenu}
                                className="block px-3 py-3 text-white hover:text-orange-500 hover:bg-white/10 font-semibold transition-all duration-200 rounded-lg"
                            >
                                Acerca de
                            </a>
                            <a 
                                href="#contacto" 
                                onClick={closeMenu}
                                className="block px-3 py-3 text-white hover:text-orange-500 hover:bg-white/10 font-semibold transition-all duration-200 rounded-lg"
                            >
                                Contacto
                            </a>
                        </div>
                    </div>
                )}
            </header>

            <main>
                <HomeSection />

                {/* Contenido Destacado */}
                <section className="py-20 bg-white relative overflow-hidden">
                    {/* Decoración de fondo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>
                    <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-blue-400/10 rounded-full blur-3xl"></div>
                    
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                                Posts <span className="text-transparent" style={{background: 'linear-gradient(90deg, #f89831, #000000)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Destacados</span>
                            </h2>
                            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                                Descubre nuestros artículos más populares y aprende de los mejores expertos
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.slice(0, 3).map((post, index) => (
                                <div 
                                    key={post.id} 
                                    className="animate-fade-in-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <PostCard 
                                        title={post.title}
                                        description={post.excerpt}
                                        imageUrl={post.imageUrl}
                                        category={post.category}
                                        date={post.date}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <BlogArticlesSection posts={displayedPosts} setFilter={setFilterCategory} />
                <AboutUsSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default App;