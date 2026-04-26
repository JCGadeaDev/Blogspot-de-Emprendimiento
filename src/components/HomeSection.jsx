import React from 'react';

const HomeSection = () => {
    const stats = [
        { num: '10+', label: 'Años de experiencia' },
        { num: '6',   label: 'Artículos publicados' },
        { num: '4',   label: 'Categorías' },
    ];

    return (
        <section
            id="inicio"
            style={{
                minHeight: '100vh',
                background: '#0d0d0d',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Decorative vertical accent line */}
            <div style={{
                position: 'absolute',
                top: 0, right: '28%',
                width: '1px', height: '100%',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(248,152,49,0.18) 35%, rgba(248,152,49,0.18) 65%, transparent 100%)',
                pointerEvents: 'none',
            }} />

            {/* Decorative concentric circles */}
            <div style={{
                position: 'absolute', top: '50%', right: '-5%',
                transform: 'translateY(-50%)',
                width: '70vmin', height: '70vmin',
                border: '1px solid rgba(248,152,49,0.06)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', top: '50%', right: '-5%',
                transform: 'translateY(-50%)',
                width: '50vmin', height: '50vmin',
                border: '1px solid rgba(248,152,49,0.09)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', top: '50%', right: '-5%',
                transform: 'translateY(-50%)',
                width: '30vmin', height: '30vmin',
                border: '1px solid rgba(248,152,49,0.14)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />

            {/* Amber dot accent */}
            <div style={{
                position: 'absolute', top: '38%', right: '25%',
                width: '6px', height: '6px',
                background: '#f89831',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />

            {/* Main content */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                padding: 'clamp(6rem, 12vh, 9rem) clamp(1.5rem, 6%, 7rem) clamp(3rem, 6vh, 5rem)',
            }}>
                <div style={{ maxWidth: '820px', width: '100%' }}>
                    <div className="eyebrow animate-fade-in-up delay-1" style={{ color: 'var(--amber)' }}>
                        Blog de Emprendimiento
                    </div>

                    <h1
                        className="animate-fade-in-up delay-2"
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 600,
                            fontSize: 'clamp(3rem, 9vw, 7.5rem)',
                            lineHeight: 1.04,
                            color: '#ffffff',
                            letterSpacing: '-0.02em',
                            marginBottom: '2rem',
                        }}
                    >
                        Transforma tu{' '}
                        <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>visión</em>
                        <br />
                        en un negocio
                        <br />
                        extraordinario
                    </h1>

                    <p
                        className="animate-fade-in-up delay-3"
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                            color: '#7a736b',
                            lineHeight: 1.8,
                            marginBottom: '3rem',
                            maxWidth: '460px',
                        }}
                    >
                        Recursos, estrategias y guías prácticas para
                        emprendedores que quieren construir algo que perdure.
                    </p>

                    <div
                        className="animate-fade-in-up delay-4"
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    >
                        <a href="#articulos" className="btn-amber">
                            Explorar artículos <span>→</span>
                        </a>
                        <a href="#acerca" className="btn-outline-white">
                            Sobre el autor
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats bar */}
            <div
                className="animate-fade-in-up delay-5"
                style={{
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    padding: 'clamp(1.5rem, 3vh, 2.25rem) clamp(1.5rem, 6%, 7rem)',
                }}
            >
                <div style={{
                    display: 'flex',
                    gap: 'clamp(2rem, 5vw, 4rem)',
                    flexWrap: 'wrap',
                }}>
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <div style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                                fontWeight: 600,
                                color: 'var(--amber)',
                                lineHeight: 1,
                                marginBottom: '0.3rem',
                            }}>{stat.num}</div>
                            <div style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.72rem',
                                color: '#4a4540',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                fontWeight: 500,
                            }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
