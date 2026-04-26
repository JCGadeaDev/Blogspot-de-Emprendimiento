import React from 'react';
import { FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    const navLinks = [
        { label: 'Inicio',     href: '/#inicio' },
        { label: 'Artículos',  href: '/#articulos' },
        { label: 'Comunidad',  href: '/#comunidad' },
        { label: 'Acerca de', href: '/#acerca' },
        { label: 'Contacto',  href: '/#contacto' },
    ];

    const socialLinks = [
        { icon: FaWhatsapp, href: 'https://wa.me/50584104315',         label: 'WhatsApp' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/carlos-alem%C3%A1n-espinoza-b37289123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
        { icon: FaFacebook, href: 'https://www.facebook.com/share/17FPp148sg/', label: 'Facebook' },
    ];

    return (
        <footer style={{
            background: '#0d0d0d',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            padding: 'clamp(3rem, 6vh, 4.5rem) clamp(1.5rem, 6%, 7rem) clamp(1.5rem, 3vh, 2.5rem)',
        }}>
            {/* Upper footer */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '3rem',
                alignItems: 'start',
                marginBottom: '3rem',
            }}
            className="footer-upper"
            >
                {/* Brand */}
                <div>
                    <a href="#inicio" style={{ display: 'inline-block', marginBottom: '1rem' }}>
                        <img
                            src="/logo.png"
                            alt="EmprenFactor"
                            style={{ height: '52px', width: 'auto', filter: 'brightness(0.9)' }}
                        />
                    </a>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.35)',
                        lineHeight: 1.7,
                        maxWidth: '340px',
                    }}>
                        Recursos, estrategias y guías prácticas para emprendedores
                        que quieren construir algo extraordinario.
                    </p>
                </div>

                {/* Nav + Social */}
                <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                    {/* Navigation */}
                    <div>
                        <div style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.3)',
                            marginBottom: '1rem',
                        }}>
                            Navegación
                        </div>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {navLinks.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.875rem',
                                        color: 'rgba(255,255,255,0.45)',
                                        transition: 'color 0.2s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Social */}
                    <div>
                        <div style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.3)',
                            marginBottom: '1rem',
                        }}>
                            Redes
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.875rem',
                                        color: 'rgba(255,255,255,0.45)',
                                        transition: 'color 0.2s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                                >
                                    <Icon size={14} />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                paddingTop: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
            }}>
                <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.03em',
                }}>
                    © 2025 EmprenFactor. Todos los derechos reservados.
                </span>
                <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.2)',
                    letterSpacing: '0.03em',
                }}>
                    Desarrollado con{' '}
                    <span style={{ color: 'var(--amber)' }}>♥</span>
                    {' '}para emprendedores
                </span>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .footer-upper {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
