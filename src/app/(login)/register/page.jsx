'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { apiUrlRegister } from '@/utils/api';

const Page = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, mail, password };

        try {
            const response = await axios.post(`${apiUrlRegister}`, data);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            setSuccess(true);
            setError(null);
            router.push('/login'); // Redirecciona a la página de login
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setError(`Hubo un problema al enviar el formulario. Inténtalo nuevamente. Detalles: ${error.message}`);
            setSuccess(false);
        }
    };

    return (
        <div className="min-h-screen flex items-start justify-center bg-gray-100 pt-16">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-8 text-black">Registro</h2>
                {success && <p className="text-green-500 text-center">Registro exitoso</p>}
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black">
                            Nombre
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-black">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-neutral w-full text-white bg-yellow-500">
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
