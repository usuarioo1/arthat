import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import axios from 'axios';

const AddReviewForm = () => {
    const { user } = useAuth();
    const [review, setReview] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            setError('Debes estar logueado para agregar una review.');
            return;
        }

        try {
            const response = await axios.post('https://backendjwl.onrender.com/reviews', {
                userId: user.id,
                review,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                setSuccess('Review agregada exitosamente.');
                setReview('');
            } else {
                setError('Error al agregar la review.');
            }
        } catch (err) {
            setError('Error al agregar la review.');
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Agregar Review</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            {success && <p className="text-green-500 mb-2">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="review" className="block text-gray-700 font-bold mb-2">Tu Review</label>
                    <textarea
                        id="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Escribe tu review aquí..."
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar Review</button>
            </form>
        </div>
    );
};

export default AddReviewForm;
