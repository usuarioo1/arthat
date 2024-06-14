'use client'
import { apiUrlBase } from '@/utils/api';
import React, { useState } from 'react';

const Page = () => {
    const [titulo, setTitulo] = useState('');
    const [img, setImg] = useState('');
    const [contenido, setContenido] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleTitleChange = (event) => {
        setTitulo(event.target.value);
    };

    const handleImageChange = (event) => {
        setImg(event.target.value);
    };

    const handleContentChange = (event) => {
        setContenido(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            titulo,
            img,
            contenido
        };

        try {
            const response = await fetch(`${apiUrlBase}/createBlog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const result = await response.json();
            console.log(result);

            // Mostrar mensaje de éxito
            setSuccessMessage('¡Entrada del blog creada exitosamente!');
            setErrorMessage('');

            // Restablecer el formulario
            setTitulo('');
            setImg('');
            setContenido('');

            // Ocultar el mensaje de éxito después de unos segundos
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
            // Mostrar mensaje de error
            setErrorMessage('Hubo un error al crear la entrada del blog. Inténtalo de nuevo.');
            setSuccessMessage('');

            // Ocultar el mensaje de error después de unos segundos
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mb-10">
            {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <span className="block sm:inline">{successMessage}</span>
                </div>
            )}
            {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <span className="block sm:inline">{errorMessage}</span>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
                    <input
                        type="text"
                        id="title"
                        value={titulo}
                        onChange={handleTitleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Imagen (URL):</label>
                    <input
                        type="text"
                        id="image"
                        value={img}
                        onChange={handleImageChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Contenido:</label>
                    <textarea
                        id="content"
                        value={contenido}
                        onChange={handleContentChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 bg-white"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Crear Entrada</button>
            </form>
        </div>
    );
};

export default Page;
