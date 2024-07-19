// components/UserProfile.js
'use client'
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '@/contexts/AuthContext';
import AddReviewForm from '@/components/AddReviews';
import { apiUrlUsers } from '@/utils/api';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        mail: '',
        phone: '',
        region: '',
        comuna: '',
        departamento: '',
        referencias: ''
    });

    useEffect(() => {
        if (user) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`${apiUrlUsers}/${user._id}`, {
                        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                    });
                    setProfileData(response.data.info);
                    setFormData(response.data.info); // Inicializa el formulario con los datos actuales
                } catch (err) {
                    setError('Error al cargar los datos del perfil');
                    console.error(err);
                }
            };

            fetchData();
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`${apiUrlUsers}/${user._id}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setProfileData(response.data.info);
            setIsEditing(false);
        } catch (err) {
            setError('Error al actualizar los datos del perfil');
            console.error(err);
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!profileData) {
        return <div>No se encontraron datos del perfil</div>;
    }

    return (
        <div className="flex flex-wrap max-w-6xl mx-auto mt-10 gap-6">
            <div className="flex-1 max-w-2xl p-6 bg-white shadow-md rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 text-black">Perfil de Usuario</h2>
                {isEditing ? (
                    <div className="ml-4">
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700">Nombre:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="input input-bordered w-full max-w-full"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700">Dirección:</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="input input-bordered w-full max-w-full"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700">Correo Electrónico:</label>
                            <input
                                type="email"
                                name="mail"
                                value={formData.mail}
                                onChange={handleInputChange}
                                className="input input-bordered w-full max-w-full"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700">Teléfono:</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="input input-bordered w-full max-w-full"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700">Región:</label>
                            <input
                                type="text"
                                name="region"
                                value={formData.region}
                                onChange={handleInputChange}
                                className="input input-bordered w-full max-w-full"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700">Comuna:</label>
                            <input
                                type="text"
                                name="comuna"
                                value={formData.comuna}
                                onChange={handleInputChange}
                                className="input input-bordered w-full max-w-full"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700">Departamento:</label>
                            <input
                                type="text"
                                name="departamento"
                                value={formData.departamento}
                                onChange={handleInputChange}
                                className="input input-bordered w-full max-w-full"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700">Referencias:</label>
                            <input
                                type="text"
                                name="referencias"
                                value={formData.referencias}
                                onChange={handleInputChange}
                                className="input input-bordered w-full max-w-full"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button onClick={handleSave} className="btn btn-active btn-accent">
                                Guardar
                            </button>
                            <button onClick={() => setIsEditing(false)} className="btn btn-error">
                                Cancelar
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="ml-4">
                        <div className="mb-4">
                            <label className="block text-gray-700">Nombre:</label>
                            <p className="text-gray-900">{profileData.name}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Dirección:</label>
                            <p className="text-gray-900">{profileData.address}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Correo Electrónico:</label>
                            <p className="text-gray-900">{profileData.mail}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Teléfono:</label>
                            <p className="text-gray-900">{profileData.phone}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Región:</label>
                            <p className="text-gray-900">{profileData.region}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Comuna:</label>
                            <p className="text-gray-900">{profileData.comuna}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Departamento:</label>
                            <p className="text-gray-900">{profileData.departamento}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Referencias:</label>
                            <p className="text-gray-900">{profileData.referencias}</p>
                        </div>
                        <button onClick={() => setIsEditing(true)} className="btn btn-neutral text-white">
                            Editar Usuario
                        </button>
                    </div>
                )}

            </div>
            <div className="flex-none w-full md:w-1/3 p-6 bg-white">
        <AddReviewForm />
    </div>
        </div>

    );
}

export default UserProfile;
