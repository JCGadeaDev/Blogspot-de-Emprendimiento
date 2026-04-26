import React from 'react';
import { Link } from 'react-router-dom';

const categoryColors = {
    'Finanzas':          { bg: '#0d0d0d', text: '#f89831' },
    'Productividad':     { bg: '#f89831', text: '#0d0d0d' },
    'Marketing Digital': { bg: '#2a2a2a', text: '#f89831' },
    'Ideas de Negocio':  { bg: '#f89831', text: '#0d0d0d' },
    'Liderazgo':         { bg: '#0d0d0d', text: '#f89831' },
    'Emprendimiento':    { bg: '#f89831', text: '#0d0d0d' },
};

const PostCard = ({ title, description, imageUrl, category, date, slug }) => {
    const colors = categoryColors[category] || { bg: '#0d0d0d', text: '#f89831' };

    return (
        <article className="post-card-ef" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Image */}
            <div className="img-wrap">
                <img src={imageUrl} alt={title} loading="lazy" />
            </div>

            {/* Content */}
            <div style={{
                padding: '1.5rem 1.75rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            }}>
                {/* Category + Date */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                }}>
                    <span style={{
                        display: 'inline-block',
                        background: colors.bg,
                        color: colors.text,
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '2px',
                    }}>
                        {category}
                    </span>
                    {date && (
                        <span style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.75rem',
                            color: 'var(--warm-gray)',
                            letterSpacing: '0.02em',
                        }}>
                            {date}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 'clamp(1.35rem, 2vw, 1.6rem)',
                    lineHeight: 1.25,
                    color: 'var(--black)',
                    marginBottom: '0.85rem',
                    letterSpacing: '-0.01em',
                }}>
                    {title}
                </h3>

                {/* Excerpt */}
                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--warm-gray)',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                    flex: 1,
                }}>
                    {description}
                </p>

                {/* CTA */}
                <Link
                    to={slug ? `/articulos/${slug}` : '#'}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--amber)',
                        transition: 'gap 0.2s ease',
                        alignSelf: 'flex-start',
                    }}
                    onMouseEnter={e => e.currentTarget.style.gap = '0.7rem'}
                    onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
                >
                    Leer artículo <span>→</span>
                </Link>
            </div>
        </article>
    );
};

export default PostCard;
