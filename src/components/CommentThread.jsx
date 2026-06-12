import React, { useState } from 'react';
import { useComments } from '../hooks/useComments';

const CommentThread = ({ postId, postTitle }) => {
    const { comments, loading, addComment } = useComments(postId);
    const [form, setForm] = useState({ name: '', email: '', comment: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await addComment({ ...form, postTitle });
            setStatus('success');
            setForm({ name: '', email: '', comment: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    // Format Firestore timestamp
    const formatDate = (ts) => {
        if (!ts) return '';
        const date = ts.toDate ? ts.toDate() : new Date(ts);
        return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <div style={{ marginTop: '4rem' }}>
            {/* Section header */}
            <div style={{ marginBottom: '2.5rem' }}>
                <div className="eyebrow">Comunidad</div>
                <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    letterSpacing: '-0.02em',
                    color: 'var(--black)',
                    lineHeight: 1.1,
                }}>
                    {comments.length > 0
                        ? `${comments.length} comentario${comments.length !== 1 ? 's' : ''}`
                        : 'Sé el primero en comentar'}
                </h3>
            </div>

            {/* Comments list */}
            {loading ? (
                <div style={{
                    padding: '2rem 0',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--warm-gray)',
                }}>
                    Cargando comentarios…
                </div>
            ) : comments.length > 0 ? (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    marginBottom: '3rem',
                }}>
                    {comments.map(c => (
                        <div
                            key={c.id}
                            style={{
                                background: '#fff',
                                border: '1px solid var(--border)',
                                padding: '1.5rem',
                                borderRadius: '2px',
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '0.85rem',
                            }}>
                                {/* Avatar initial */}
                                <div style={{
                                    width: '36px', height: '36px',
                                    background: 'var(--amber)',
                                    color: 'var(--black)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    flexShrink: 0,
                                }}>
                                    {c.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <div style={{
                                        fontFamily: 'var(--font-body)',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        color: 'var(--black)',
                                    }}>
                                        {c.name}
                                    </div>
                                    <div style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.75rem',
                                        color: 'var(--warm-gray)',
                                    }}>
                                        {formatDate(c.timestamp)}
                                    </div>
                                </div>
                            </div>
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.95rem',
                                color: '#3a3530',
                                lineHeight: 1.7,
                            }}>
                                {c.comment}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{
                    padding: '2rem 0 2.5rem',
                    borderTop: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    marginBottom: '2.5rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: 'var(--warm-gray)',
                }}>
                    Aún no hay comentarios aprobados. ¡Sé el primero!
                </div>
            )}

            {/* Comment form */}
            <div style={{
                background: 'var(--cream)',
                border: '1px solid var(--border)',
                padding: '2rem',
                borderRadius: '2px',
            }}>
                <h4 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: 'var(--black)',
                    marginBottom: '0.35rem',
                }}>
                    Deja tu comentario
                </h4>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--warm-gray)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                }}>
                    <span style={{
                        display: 'inline-block',
                        width: '6px', height: '6px',
                        background: 'var(--amber)',
                        borderRadius: '50%',
                        flexShrink: 0,
                    }} />
                    Los comentarios son moderados antes de publicarse.
                </p>

                {status === 'success' ? (
                    <div style={{
                        padding: '1.5rem',
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderLeft: '3px solid var(--amber)',
                    }}>
                        <div style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            color: 'var(--black)',
                            marginBottom: '0.3rem',
                        }}>
                            ¡Comentario enviado!
                        </div>
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.875rem',
                            color: 'var(--warm-gray)',
                        }}>
                            Será visible una vez aprobado por el equipo. Gracias por participar.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem',
                    }}>
                        <div>
                            <label htmlFor="name" style={{
                                display: 'block',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: 'var(--warm-gray)',
                                marginBottom: '0.45rem',
                            }}>
                                Nombre *
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="ef-input"
                                placeholder="Tu nombre"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" style={{
                                display: 'block',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: 'var(--warm-gray)',
                                marginBottom: '0.45rem',
                            }}>
                                Email <span style={{ fontWeight: 400, letterSpacing: 0 }}>(privado)</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="ef-input"
                                placeholder="tu@correo.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div style={{ gridColumn: '1 / -1' }}>
                            <label htmlFor="comment" style={{
                                display: 'block',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: 'var(--warm-gray)',
                                marginBottom: '0.45rem',
                            }}>
                                Comentario *
                            </label>
                            <textarea
                                id="comment"
                                rows="4"
                                className="ef-input"
                                placeholder="Comparte tu opinión o experiencia sobre este tema..."
                                value={form.comment}
                                onChange={handleChange}
                                required
                                style={{ resize: 'vertical' }}
                            />
                        </div>

                        <div style={{ gridColumn: '1 / -1' }}>
                            {status === 'error' && (
                                <p style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.82rem',
                                    color: '#c0392b',
                                    marginBottom: '0.75rem',
                                }}>
                                    No se pudo enviar el comentario. Verifica tu conexión e intenta de nuevo.
                                </p>
                            )}
                            <button
                                type="submit"
                                className="btn-amber"
                                disabled={status === 'sending'}
                                style={{ opacity: status === 'sending' ? 0.65 : 1 }}
                            >
                                {status === 'sending' ? 'Enviando…' : 'Publicar comentario'}
                            </button>
                        </div>

                        <style>{`
                            @media (max-width: 480px) {
                                form { grid-template-columns: 1fr !important; }
                            }
                        `}</style>
                    </form>
                )}
            </div>
        </div>
    );
};

export default CommentThread;
