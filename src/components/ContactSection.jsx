import React from 'react';
import { FaWhatsapp, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

const CONTACT_EMAIL = 'alemanespinozaca@gmail.com';

const socialLinks = [
    {
        icon: FaWhatsapp,
        href: 'https://wa.me/50584104315',
        label: 'WhatsApp',
    },
    {
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/carlos-alem%C3%A1n-espinoza-b37289123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        label: 'LinkedIn',
    },
    {
        icon: FaFacebook,
        href: 'https://www.facebook.com/share/17FPp148sg/',
        label: 'Facebook',
    },
];

const ContactSection = () => (
    <section
        id="contacto"
        style={{
            background: '#ffffff',
            padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 6%, 7rem)',
            borderTop: '1px solid var(--border)',
            textAlign: 'center',
        }}
    >
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
            <div className="eyebrow">Contacto</div>
            <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--black)',
                marginBottom: '1.25rem',
            }}>
                Hablemos de<br />
                <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>tu negocio</em>
            </h2>

            <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--warm-gray)',
                lineHeight: 1.75,
                maxWidth: '420px',
                margin: '0 auto 2.5rem',
            }}>
                ¿Tienes una pregunta, sugerencia o historia que quieras compartir?
                Estoy aquí para escucharte.
            </p>

            <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn-amber"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '1rem',
                    padding: '0.9rem 2rem',
                    textDecoration: 'none',
                    marginBottom: '3rem',
                }}
            >
                <FaEnvelope size={16} />
                Contáctame
            </a>

            <div>
                <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--warm-gray)',
                    marginBottom: '1rem',
                }}>
                    También en
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center' }}>
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="social-icon-ef"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;
