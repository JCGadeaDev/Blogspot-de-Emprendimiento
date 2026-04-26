import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
import CommentThread from './CommentThread';

const categoryColors = {
    'Finanzas':          { bg: '#0d0d0d', text: '#f89831' },
    'Productividad':     { bg: '#f89831', text: '#0d0d0d' },
    'Marketing Digital': { bg: '#2a2a2a', text: '#f89831' },
    'Ideas de Negocio':  { bg: '#f89831', text: '#0d0d0d' },
    'Liderazgo':         { bg: '#0d0d0d', text: '#f89831' },
    'Emprendimiento':    { bg: '#f89831', text: '#0d0d0d' },
};

const PostPage = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [slug]);

    if (!post) {
        return (
            <div style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 2rem',
                textAlign: 'center',
            }}>
                <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(4rem, 10vw, 8rem)',
                    fontWeight: 700,
                    color: 'var(--border)',
                    lineHeight: 1,
                    marginBottom: '1rem',
                }}>404</div>
                <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    color: 'var(--black)',
                    marginBottom: '1rem',
                }}>
                    Artículo no encontrado
                </h2>
                <Link to="/" className="btn-amber" style={{ display: 'inline-flex' }}>
                    ← Volver al inicio
                </Link>
            </div>
        );
    }

    const colors = categoryColors[post.category] || { bg: '#0d0d0d', text: '#f89831' };
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(post.title);

    const shareLinks = [
        {
            icon: FaWhatsapp,
            href: `https://wa.me/?text=${pageTitle}%20${pageUrl}`,
            label: 'WhatsApp',
        },
        {
            icon: FaLinkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
            label: 'LinkedIn',
        },
        {
            icon: FaFacebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
            label: 'Facebook',
        },
    ];

    const related = blogPosts
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 2);

    return (
        <article style={{ background: 'var(--cream)', minHeight: '100vh' }}>

            {/* ── Hero ───────────────────────────────────────── */}
            <div style={{
                position: 'relative',
                background: '#0d0d0d',
                overflow: 'hidden',
            }}>
                {/* Background image */}
                <img
                    src={post.imageUrl}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        opacity: 0.2,
                    }}
                />
                {/* Gradient overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.95) 100%)',
                }} />

                <div style={{
                    position: 'relative',
                    maxWidth: '860px',
                    margin: '0 auto',
                    padding: 'clamp(4rem, 10vh, 7rem) clamp(1.5rem, 6%, 4rem) clamp(3rem, 6vh, 5rem)',
                }}>
                    {/* Breadcrumb */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '2rem',
                        flexWrap: 'wrap',
                    }}>
                        <Link
                            to="/"
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.8rem',
                                color: 'rgba(255,255,255,0.45)',
                                transition: 'color 0.2s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                        >
                            Inicio
                        </Link>
                        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>›</span>
                        <span style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.8rem',
                            color: 'rgba(255,255,255,0.35)',
                        }}>
                            {post.category}
                        </span>
                    </div>

                    {/* Category */}
                    <span style={{
                        display: 'inline-block',
                        background: colors.bg,
                        color: colors.text,
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '2px',
                        marginBottom: '1.25rem',
                        border: '1px solid rgba(248,152,49,0.3)',
                    }}>
                        {post.category}
                    </span>

                    {/* Title */}
                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        color: '#ffffff',
                        marginBottom: '1.5rem',
                    }}>
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        flexWrap: 'wrap',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <img
                                src="/lider.webp"
                                alt="Carlos Alberto Alemán"
                                style={{
                                    width: '32px', height: '32px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '2px solid rgba(248,152,49,0.5)',
                                }}
                            />
                            <span style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.82rem',
                                color: 'rgba(255,255,255,0.65)',
                                fontWeight: 500,
                            }}>
                                Carlos Alemán
                            </span>
                        </div>
                        <span style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.8rem',
                            color: 'rgba(255,255,255,0.4)',
                        }}>
                            {post.date}
                        </span>
                        <span style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.8rem',
                            color: 'rgba(255,255,255,0.4)',
                        }}>
                            {post.readTime} min lectura
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Body ───────────────────────────────────────── */}
            <div style={{
                maxWidth: '860px',
                margin: '0 auto',
                padding: 'clamp(3rem, 6vh, 5rem) clamp(1.5rem, 6%, 4rem)',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '4rem',
                alignItems: 'start',
            }}
            className="post-body-grid"
            >
                {/* Content */}
                <div>
                    {/* Excerpt/lead */}
                    <p style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        color: '#3a3530',
                        lineHeight: 1.65,
                        marginBottom: '2rem',
                        paddingBottom: '2rem',
                        borderBottom: '1px solid var(--border)',
                    }}>
                        {post.excerpt.replace('...', '.')}
                    </p>

                    {/* Article paragraphs */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                        {post.content.map((paragraph, i) => (
                            <p
                                key={i}
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                                    lineHeight: 1.85,
                                    color: '#2a2520',
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* References */}
                    {post.references && post.references.length > 0 && (
                        <div style={{
                            marginTop: '2.5rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--border)',
                        }}>
                            <div style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.68rem',
                                fontWeight: 600,
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                color: 'var(--warm-gray)',
                                marginBottom: '0.85rem',
                            }}>
                                Referencias
                            </div>
                            <ol style={{
                                paddingLeft: '1.25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                margin: 0,
                            }}>
                                {post.references.map((ref, i) => (
                                    <li key={i} style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.8rem',
                                        color: 'var(--warm-gray)',
                                        lineHeight: 1.65,
                                    }}>
                                        {ref}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}

                    {/* Share */}
                    <div style={{
                        marginTop: '3rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                    }}>
                        <span style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--warm-gray)',
                        }}>
                            Compartir
                        </span>
                        {shareLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Compartir en ${label}`}
                                className="social-icon-ef"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>

                    {/* Comment Thread */}
                    <CommentThread postId={post.id} postTitle={post.title} />
                </div>

                {/* Sidebar */}
                <aside style={{ width: '220px', position: 'sticky', top: '90px' }}
                    className="post-sidebar"
                >
                    {/* Author card */}
                    <div style={{
                        border: '1px solid var(--border)',
                        padding: '1.5rem',
                        background: '#fff',
                        marginBottom: '1.5rem',
                        borderRadius: '2px',
                    }}>
                        <img
                            src="/lider.webp"
                            alt="Carlos Alberto Alemán Espinoza"
                            style={{
                                width: '64px', height: '64px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '2px solid rgba(248,152,49,0.4)',
                                marginBottom: '0.85rem',
                            }}
                        />
                        <div style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'var(--amber)',
                            marginBottom: '0.3rem',
                        }}>
                            Autor
                        </div>
                        <div style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: 'var(--black)',
                            lineHeight: 1.2,
                            marginBottom: '0.5rem',
                        }}>
                            Carlos Alemán
                        </div>
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.8rem',
                            color: 'var(--warm-gray)',
                            lineHeight: 1.6,
                        }}>
                            Emprendedor en serie, 10 años de experiencia.
                        </p>
                    </div>

                    {/* Related articles */}
                    {related.length > 0 && (
                        <div>
                            <div style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.68rem',
                                fontWeight: 600,
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                color: 'var(--warm-gray)',
                                marginBottom: '0.85rem',
                            }}>
                                Relacionados
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {related.map(r => (
                                    <Link
                                        key={r.id}
                                        to={`/articulos/${r.slug}`}
                                        style={{
                                            display: 'block',
                                            borderBottom: '1px solid var(--border)',
                                            paddingBottom: '1rem',
                                            transition: 'color 0.2s ease',
                                        }}
                                    >
                                        <div style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '0.95rem',
                                            fontWeight: 600,
                                            color: 'var(--black)',
                                            lineHeight: 1.3,
                                            marginBottom: '0.25rem',
                                            transition: 'color 0.2s ease',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'var(--black)'}
                                        >
                                            {r.title}
                                        </div>
                                        <div style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.72rem',
                                            color: 'var(--warm-gray)',
                                        }}>
                                            {r.date}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>

            {/* ── Back button ────────────────────────────────── */}
            <div style={{
                maxWidth: '860px',
                margin: '0 auto',
                padding: '0 clamp(1.5rem, 6%, 4rem) 4rem',
            }}>
                <Link
                    to="/"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--warm-gray)',
                        border: '1px solid var(--border)',
                        padding: '0.65rem 1.25rem',
                        transition: 'all 0.2s ease',
                        borderRadius: '2px',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--amber)';
                        e.currentTarget.style.color = 'var(--amber)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.color = 'var(--warm-gray)';
                    }}
                >
                    ← Todos los artículos
                </Link>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .post-body-grid { grid-template-columns: 1fr !important; }
                    .post-sidebar { display: none !important; }
                }
            `}</style>
        </article>
    );
};

export default PostPage;
