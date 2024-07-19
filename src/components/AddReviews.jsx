import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import axios from 'axios';
import { apiUrlReviews } from '@/utils/api';

const AddReviewForm = () => {
    const { user } = useAuth();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            setError('Debes estar logueado para agregar una review.');
            return;
        }
1
        try {
            const response = await axios.post(apiUrlReviews, {
                title,
                content,
                author: user.name,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                setSuccess('Review agregada exitosamente.');
                setTitle('');
                setContent('');
                alert('¡Review agregada exitosamente!');
            } else {
                setError('Error al agregar la review.');
            }
        } catch (err) {
            setError('Error al agregar la review.');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 mb-9">
            <h2 className="text-2xl font-bold mb-4 text-black">Deja Tu Review</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            {success && <p className="text-green-500 mb-2">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Título</label>
                    <input
                        type="text"
                        id="title"
                        className="input input-bordered w-full max-w-xs bg-white text-black"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="review" className="block text-gray-700 font-bold mb-2">Tu Review</label>
                    <textarea
                        id="review"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="input input-bordered w-full max-w-xs bg-white text-black"
                        placeholder="Escribe tu review aquí..."
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Autor</label>
                    <p className="text-gray-900">{user.name}</p>
                </div>
                <button type="submit" className="btn btn-neutral text-white">Enviar Review</button>
            </form>
        </div>
    );
};

export default AddReviewForm;
