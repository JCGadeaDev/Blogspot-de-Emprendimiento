import React, { useState } from 'react';
// PostCard ya no se importa aquí porque no se usa directamente en este componente.

const BlogArticlesSection = ({ posts, setFilter }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Corregido: Ahora se usan los datos de la prop 'posts' para generar las categorías
    const categories = [...new Set(posts.map(post => post.category))];

    return (
        <section id="articulos" className="py-12">
            <h2 className="text-center font-bold text-black text-2xl mb-8">Todos los Artículos</h2>
            <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Barra de búsqueda y categorías */}
                <aside className="md:w-1/4 mb-8 md:mb-0">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="mb-6">
                            <label htmlFor="search" className="block text-black font-bold mb-2">Buscar</label>
                            <input 
                                type="text" 
                                id="search" 
                                placeholder="Escribe para buscar..." 
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                style={{"--tw-ring-color": "#f89831"}}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-black mb-3">Categorías</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <button onClick={() => setFilter(null)} className="transition duration-200" style={{color: '#666'}} onMouseEnter={(e) => e.target.style.color = '#f89831'} onMouseLeave={(e) => e.target.style.color = '#666'}>
                                        Todas las Categorías ({posts.length})
                                    </button>
                                </li>
                                {categories.map(category => (
                                    <li key={category}>
                                        <button onClick={() => setFilter(category)} className="transition duration-200" style={{color: '#666'}} onMouseEnter={(e) => e.target.style.color = '#f89831'} onMouseLeave={(e) => e.target.style.color = '#666'}>
                                            {category} ({posts.filter(p => p.category === category).length})
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
                
                {/* Lista de artículos */}
                <div className="md:w-3/4">
                    <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
                        {filteredPosts.map(post => (
                            <article key={post.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                                <h3 className="text-2xl font-bold text-black mb-2">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">Publicado el {post.date} en <span className="font-semibold" style={{color: '#f89831'}}>{post.category}</span></p>
                                <p className="text-gray-700">{post.excerpt}</p>
                                <a href="#" className="font-medium hover:underline mt-2 inline-block" style={{color: '#f89831'}}>Leer más →</a>
                            </article>
                        ))}
                        {filteredPosts.length === 0 && (
                            <p className="text-center text-gray-500">No se encontraron artículos.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogArticlesSection;
