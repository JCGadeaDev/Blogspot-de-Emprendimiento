import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeSection from './components/HomeSection';
import PostCard from './components/PostCard';
import BlogArticlesSection from './components/BlogArticlesSection';
import CommunitySection from './components/CommunitySection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PostPage from './components/PostPage';
import { blogPosts } from './data/blogPosts';

// ── Shared Header ──────────────────────────────────────────────────
const Header = ({ navLinks }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'rgba(13,13,13,0.97)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
            {/* Top amber accent line */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, var(--amber) 0%, transparent 55%)',
            }} />

            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 clamp(1.5rem, 5%, 5rem)',
                maxWidth: '1400px',
                margin: '0 auto',
                height: '70px',
            }}>
                {/* Logo */}
                <a
                    href="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexShrink: 0,
                        transition: 'opacity 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                    <img
                        src="/logo.png"
                        alt="EmprenFactor"
                        style={{ height: '60px', width: 'auto' }}
                    />
                </a>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
                    className="desktop-nav">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    className="mobile-menu-btn"
                    aria-label="Abrir menú"
                    style={{
                        background: 'none',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: 'rgba(255,255,255,0.7)',
                        width: '38px', height: '38px',
                        display: 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        borderRadius: '2px',
                        padding: 0,
                        transition: 'border-color 0.2s ease',
                        flexShrink: 0,
                    }}
                >
                    {isMenuOpen ? (
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(10,10,10,0.98)',
                }}>
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
            `}</style>
        </header>
    );
};

// ── Main (home) page ───────────────────────────────────────────────
const MainPage = () => {
    const [filterCategory, setFilterCategory] = useState(null);

    const displayedPosts = filterCategory
        ? blogPosts.filter(post => post.category === filterCategory)
        : blogPosts;

    return (
        <main>
            <HomeSection />

            {/* Featured Posts */}
            <section style={{
                background: '#ffffff',
                padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 6%, 7rem)',
                borderTop: '1px solid var(--border)',
            }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div className="eyebrow animate-fade-in-up">Selección editorial</div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        gap: '1rem',
                        flexWrap: 'wrap',
                    }}>
                        <h2
                            className="animate-fade-in-up delay-1"
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 600,
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                                color: 'var(--black)',
                            }}
                        >
                            Artículos Destacados
                        </h2>
                        <a
                            href="#articulos"
                            className="animate-fade-in-up delay-2"
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                color: 'var(--amber)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                whiteSpace: 'nowrap',
                                paddingBottom: '0.4rem',
                                transition: 'gap 0.2s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.gap = '0.7rem'}
                            onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
                        >
                            Ver todos <span>→</span>
                        </a>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: '1.5rem',
                }}>
                    {blogPosts.slice(0, 3).map((post, index) => (
                        <div key={post.id} className={`animate-fade-in-up delay-${index + 2}`}>
                            <PostCard
                                title={post.title}
                                description={post.excerpt}
                                imageUrl={post.imageUrl}
                                category={post.category}
                                date={post.date}
                                slug={post.slug}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <BlogArticlesSection posts={displayedPosts} setFilter={setFilterCategory} />
            <CommunitySection />
            <AboutUsSection />
            <ContactSection />
        </main>
    );
};

// ── Root App ───────────────────────────────────────────────────────
const navLinks = [
    { label: 'Inicio',     href: '/#inicio' },
    { label: 'Artículos',  href: '/#articulos' },
    { label: 'Comunidad',  href: '/#comunidad' },
    { label: 'Acerca de', href: '/#acerca' },
    { label: 'Contacto',  href: '/#contacto' },
];

const App = () => (
    <BrowserRouter>
        <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
            <Header navLinks={navLinks} />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/articulos/:slug" element={<PostPage />} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
);

export default App;
