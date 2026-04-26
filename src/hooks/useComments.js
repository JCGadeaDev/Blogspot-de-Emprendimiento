import { useState, useEffect } from 'react';
import {
    collection,
    query,
    where,
    orderBy,
    onSnapshot,
    addDoc,
    serverTimestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

const FORMSPREE_COMMENTS_ID = import.meta.env.VITE_FORMSPREE_COMMENTS_ID;

/**
 * Custom hook for per-post comment management via Firebase Firestore.
 * Comments are stored under: /comments/{postId}/entries
 * New comments are created with approved: false — the owner approves them
 * from the Firebase Console before they become publicly visible.
 */
export const useComments = (postId) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!postId) return;

        const ref = collection(db, 'comments', String(postId), 'entries');
        const q = query(
            ref,
            where('approved', '==', true),
            orderBy('timestamp', 'asc')
        );

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            },
            (err) => {
                console.error('Error cargando comentarios:', err);
                setError(err);
                setLoading(false);
            }
        );

        return unsubscribe;
    }, [postId]);

    /**
     * Adds a new comment (pending approval) to Firestore.
     * Also notifies the blog owner via Formspree email.
     * @param {{ name: string, email: string, comment: string, postTitle: string }} data
     */
    const addComment = async ({ name, email, comment, postTitle }) => {
        // 1. Save to Firestore (pending moderation)
        await addDoc(collection(db, 'comments', String(postId), 'entries'), {
            name,
            email,          // stored but never shown publicly
            comment,
            approved: false,
            timestamp: serverTimestamp(),
        });

        // 2. Notify owner by email via Formspree (non-blocking)
        if (FORMSPREE_COMMENTS_ID) {
            fetch(`https://formspree.io/f/${FORMSPREE_COMMENTS_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _subject: `Nuevo comentario en: "${postTitle}"`,
                    nombre: name,
                    email,
                    comentario: comment,
                    articulo: postTitle,
                    nota: 'Aprueba o rechaza en https://console.firebase.google.com',
                }),
            }).catch(() => {
                // Notification failure is non-critical
            });
        }
    };

    return { comments, loading, error, addComment };
};
