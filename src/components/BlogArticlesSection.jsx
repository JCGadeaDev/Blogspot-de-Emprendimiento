import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categoryColors = {
    'Finanzas':          { bg: '#0d0d0d', text: '#f89831' },
    'Productividad':     { bg: '#f89831', text: '#0d0d0d' },
    'Marketing Digital': { bg: '#2a2a2a', text: '#f89831' },
    'Ideas de Negocio':  { bg: '#f89831', text: '#0d0d0d' },
};

const BlogArticlesSection = ({ posts, setFilter }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState(null);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const categories = [...new Set(posts.map(post => post.category))];

    const handleFilter = (cat) => {
        setActiveCategory(cat);
        setFilter(cat);
    };

    return (
        <section
            id="articulos"
            style={{
                background: 'var(--cream)',
                padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 6%, 7rem)',
            }}
        >
            {/* Section Header */}
            <div style={{ marginBottom: '3.5rem' }}>
                <div className="eyebrow">Explorar</div>
                <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: 'var(--black)',
                }}>
                    Todos los Artículos
                </h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(200px, 22%, 280px) 1fr',
                gap: 'clamp(2rem, 4vw, 4rem)',
                alignItems: 'start',
            }}
            className="articles-layout"
            >
                {/* Sidebar */}
                <aside>
                    {/* Search */}
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{
                            display: 'block',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: 'var(--warm-gray)',
                            marginBottom: '0.6rem',
                        }}>
                            Buscar
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Buscar artículos..."
                                className="ef-input"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                            <span style={{
                                position: 'absolute', right: '0.85rem', top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'var(--warm-gray)', fontSize: '0.85rem',
                                pointerEvents: 'none',
                            }}>⌕</span>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <label style={{
                            display: 'block',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: 'var(--warm-gray)',
                            marginBottom: '0.6rem',
                        }}>
                            Categorías
                        </label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <button
                                className={`cat-btn ${activeCategory === null ? 'active' : ''}`}
                                onClick={() => handleFilter(null)}
                            >
                                <span>Todos</span>
                                <span style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                }}>{posts.length}</span>
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => handleFilter(cat)}
                                >
                                    <span>{cat}</span>
                                    <span style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                    }}>
                                        {posts.filter(p => p.category === cat).length}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Articles List */}
                <div>
                    {filteredPosts.length === 0 ? (
                        <div style={{
                            padding: '4rem 0',
                            textAlign: 'center',
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.5rem',
                            color: 'var(--warm-gray)',
                            fontStyle: 'italic',
                        }}>
                            No se encontraron artículos.
                        </div>
                    ) : (
                        filteredPosts.map((post, index) => {
                            const colors = categoryColors[post.category] || { bg: '#0d0d0d', text: '#f89831' };
                            const num = String(index + 1).padStart(2, '0');
                            return (
                                <article key={post.id} className="article-row">
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'auto 1fr',
                                        gap: '1.5rem',
                                        alignItems: 'start',
                                    }}>
                                        {/* Number */}
                                        <div style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                                            fontWeight: 300,
                                            color: 'var(--border)',
                                            lineHeight: 1,
                                            letterSpacing: '-0.04em',
                                            minWidth: '3.5rem',
                                            userSelect: 'none',
                                        }}>
                                            {num}
                                        </div>

                                        {/* Content */}
                                        <div>
                                            {/* Meta */}
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                marginBottom: '0.6rem',
                                                flexWrap: 'wrap',
                                            }}>
                                                <span style={{
                                                    background: colors.bg,
                                                    color: colors.text,
                                                    fontFamily: 'var(--font-body)',
                                                    fontSize: '0.65rem',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.14em',
                                                    textTransform: 'uppercase',
                                                    padding: '0.25rem 0.6rem',
                                                    borderRadius: '2px',
                                                }}>
                                                    {post.category}
                                                </span>
                                                <span style={{
                                                    fontFamily: 'var(--font-body)',
                                                    fontSize: '0.78rem',
                                                    color: 'var(--warm-gray)',
                                                }}>
                                                    {post.date}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 style={{
                                                fontFamily: 'var(--font-display)',
                                                fontWeight: 600,
                                                fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                                                lineHeight: 1.2,
                                                letterSpacing: '-0.01em',
                                                color: 'var(--black)',
                                                marginBottom: '0.65rem',
                                            }}>
                                                {post.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p style={{
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.9rem',
                                                color: 'var(--warm-gray)',
                                                lineHeight: 1.7,
                                                marginBottom: '1rem',
                                                maxWidth: '620px',
                                            }}>
                                                {post.excerpt}
                                            </p>

                                            {/* Link */}
                                            <Link
                                                to={post.slug ? `/articulos/${post.slug}` : '#'}
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.35rem',
                                                    fontFamily: 'var(--font-body)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    color: 'var(--amber)',
                                                    transition: 'gap 0.2s ease',
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.gap = '0.65rem'}
                                                onMouseLeave={e => e.currentTarget.style.gap = '0.35rem'}
                                            >
                                                Leer artículo <span>→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })
                    )}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .articles-layout {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default BlogArticlesSection;
