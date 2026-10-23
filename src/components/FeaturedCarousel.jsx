import React, { useRef, useState, useEffect, useCallback } from 'react';
import PostCard from './PostCard';

const FeaturedCarousel = ({ posts }) => {
    const trackRef = useRef(null);
    const [edges, setEdges] = useState({ atStart: true, atEnd: true });

    const updateEdges = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        setEdges({
            atStart: el.scrollLeft <= 4,
            atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
        });
    }, []);

    useEffect(() => {
        updateEdges();
        window.addEventListener('resize', updateEdges);
        return () => window.removeEventListener('resize', updateEdges);
    }, [updateEdges, posts.length]);

    const scrollByCard = (direction) => {
        const el = trackRef.current;
        if (!el) return;
        const slide = el.querySelector('.carousel-slide');
        const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
        const step = slide ? slide.offsetWidth + gap : el.clientWidth;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollBy({ left: direction * step, behavior: reduceMotion ? 'auto' : 'smooth' });
    };

    const hasOverflow = !(edges.atStart && edges.atEnd);

    return (
        <div role="region" aria-roledescription="carousel" aria-label="Artículos destacados">
            <div ref={trackRef} className="carousel-track" onScroll={updateEdges}>
                {posts.map((post, index) => (
                    <div
                        key={post.id}
                        className={`carousel-slide animate-fade-in-up delay-${Math.min(index + 2, 5)}`}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${index + 1} de ${posts.length}`}
                    >
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

            {hasOverflow && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
                    <button
                        type="button"
                        className="carousel-btn"
                        onClick={() => scrollByCard(-1)}
                        disabled={edges.atStart}
                        aria-label="Artículo anterior"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        className="carousel-btn"
                        onClick={() => scrollByCard(1)}
                        disabled={edges.atEnd}
                        aria-label="Artículo siguiente"
                    >
                        →
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedCarousel;
