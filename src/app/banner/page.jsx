'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page = () => {
    const [banners, setBanners] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetchBanners();
    }, []);

    const fetchBanners = async () => {
        try {
            const response = await axios.get('http://localhost:8080/banner');
            if (response.data.success) {
                setBanners(response.data.info);
            } else {
                console.error('Error fetching banners:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching banners:', error);
        }
    };

    const handleInputChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleUpload = async () => {
        if (!imageUrl) return;

        try {
            await axios.post('http://localhost:8080/banner', { imageUrl });
            setImageUrl(''); // Clear input field
            fetchBanners(); // Refresh banners after upload
        } catch (error) {
            console.error('Error uploading banner:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!id) return;
        try {
            await axios.delete(`http://localhost:8080/banner/${id}`);
            fetchBanners(); // Refresh banners after deletion
        } catch (error) {
            console.error('Error deleting banner:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-black text-center">Banner Manager</h1>
            <div className="mb-4 flex flex-col items-center">
                <input
                    type="text"
                    value={imageUrl}
                    onChange={handleInputChange}
                    placeholder="Link de la imagen"
                    className="input input-bordered w-full max-w-xs bg-white mb-2"
                />
                <button 
                    onClick={handleUpload} 
                    className="btn btn-wide text-white"
                >
                    Subir Banner
                </button>
            </div>
            <div>
                {banners.length > 0 ? (
                    banners.map((banner) => (
                        <div key={banner._id} className="flex items-center mb-4 p-4 border rounded shadow-sm">
                            <img
                                src={banner.img}
                                alt={`Banner ${banner._id}`}
                                className="w-24 h-24 mr-4"
                            />
                            <button 
                                onClick={() => handleDelete(banner._id)} 
                                className="bg-red-500 text-white p-2 rounded"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No banners found.</p>
                )}
            </div>
        </div>
    );
};

export default Page;

