import React from 'react';

const AboutUsSection = () => {
    return (
        <section
            id="acerca"
            style={{
                background: '#111111',
                padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 6%, 7rem)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative background text */}
            <div style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-1rem',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(8rem, 18vw, 18rem)',
                fontWeight: 700,
                color: 'rgba(248,152,49,0.04)',
                lineHeight: 1,
                letterSpacing: '-0.05em',
                userSelect: 'none',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
            }}>
                EMPRENDE
            </div>

            {/* Thin amber top border */}
            <div style={{
                position: 'absolute',
                top: 0, left: 'clamp(1.5rem, 6%, 7rem)',
                width: '60px', height: '2px',
                background: 'var(--amber)',
            }} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(3rem, 6vw, 6rem)',
                alignItems: 'center',
                position: 'relative',
            }}
            className="about-grid"
            >
                {/* Left: Text */}
                <div>
                    <div className="eyebrow" style={{ color: 'var(--amber)' }}>
                        Acerca de Nosotros
                    </div>

                    {/* Opening quote */}
                    <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.4,
                        marginBottom: '2rem',
                        borderLeft: '2px solid var(--amber)',
                        paddingLeft: '1.5rem',
                    }}>
                        "Cualquier persona con una gran idea y la orientación adecuada puede crear algo extraordinario."
                    </div>

                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        color: '#ffffff',
                        marginBottom: '1.5rem',
                    }}>
                        Nuestra Historia<br />y Misión
                    </h2>

                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.8,
                        marginBottom: '2rem',
                    }}>
                        Este blog nació de la pasión por el emprendimiento y la creencia de que
                        cualquier persona con una gran idea y la orientación adecuada puede crear
                        algo extraordinario. Nuestra misión es proporcionar el conocimiento y la
                        inspiración que necesitas para iniciar, hacer crecer y escalar tu negocio.
                    </p>

                    {/* Author highlight */}
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '1.75rem',
                        marginTop: '0.5rem',
                    }}>
                        <div style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'var(--amber)',
                            marginBottom: '0.5rem',
                        }}>
                            El Autor
                        </div>
                        <div style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                            fontWeight: 600,
                            color: '#ffffff',
                            letterSpacing: '-0.01em',
                            marginBottom: '0.5rem',
                        }}>
                            Carlos Alberto Alemán Espinoza
                        </div>
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.45)',
                            lineHeight: 1.7,
                        }}>
                            Emprendedor en serie con 10 años de experiencia en la industria.
                            He enfrentado los mismos desafíos que tú y estoy aquí para compartir
                            las lecciones que he aprendido.
                        </p>
                    </div>
                </div>

                {/* Right: Photo */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }}>
                    {/* Amber ring accent */}
                    <div style={{
                        position: 'absolute',
                        width: 'clamp(260px, 36vw, 420px)',
                        height: 'clamp(260px, 36vw, 420px)',
                        border: '1px solid rgba(248,152,49,0.25)',
                        borderRadius: '50%',
                        transform: 'translate(16px, 16px)',
                    }} />

                    <div style={{
                        position: 'relative',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        width: 'clamp(220px, 30vw, 380px)',
                        height: 'clamp(220px, 30vw, 380px)',
                        border: '3px solid rgba(248,152,49,0.6)',
                        flexShrink: 0,
                    }}>
                        <img
                            src="/lider.webp"
                            alt="Carlos Alberto Alemán Espinoza — Autor del blog"
                            style={{
                                width: '100%', height: '100%',
                                objectFit: 'cover',
                                filter: 'grayscale(20%)',
                            }}
                        />
                        {/* Subtle amber overlay */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to top, rgba(248,152,49,0.15) 0%, transparent 50%)',
                        }} />
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .about-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .about-grid > div:last-child {
                        order: -1;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutUsSection;
