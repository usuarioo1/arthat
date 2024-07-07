'use client'
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { apiUrlReviews } from '@/utils/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { title: 'Excelente Producto', content: 'Muy buena calidad y servicio rápido.', author: 'Juan Pérez' },
    { title: 'Muy Satisfecho', content: 'Producto tal como se describe. Recomiendo.', author: 'María López' },
    { title: 'Gran Compra', content: 'Vale cada centavo, lo amo.', author: 'Carlos García' }
  ]);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await axios.get(apiUrlReviews);
  //       setReviews(response.data);
  //     } catch (error) {
  //       console.error('Error fetching reviews:', error);
  //     }
  //   };

  //   fetchReviews();
  // }, []);

  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="text-2xl font-bold mb-6 text-black">Reseñas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">{review.title}</h3>
              <p>{review.content}</p>
              <div className="card-actions justify-end">
                <span className="text-sm text-gray-500">- {review.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
