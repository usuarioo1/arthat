'use client';

import { useState, useContext } from 'react';
import Link from 'next/link';
import AuthContext from '@/contexts/AuthContext';

export default function Login() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ mail, password })
            });

            const data = await response.json();

            if (!data.success) {
                setError(data.message);
            } else {
                // Guardar el token en local storage
                localStorage.setItem('token', data.token);
                // Llamar al método de login en el contexto
                login(data.token);
                window.location.href = '/';
                alert('Inicio de sesión exitoso');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Hubo un problema al iniciar sesión. Inténtalo nuevamente.');
        }
    };

    return (
        <div className="min-h-screen flex items-start justify-center bg-white pt-16">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-8 text-black">Iniciar sesión</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Email"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="password"
                                className="grow"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="btn w-full text-white">
                            Iniciar sesión
                        </button>
                    </div>
                    <div>
                        <Link href={'/register'}>
                            <button className="btn w-full bg-slate-500 text-white">
                                Registrarme
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
