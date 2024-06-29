// components/CustomerDetailsForm.js
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const regions = [
    'Arica y Parinacota',
    'Tarapacá',
    'Antofagasta',
    'Atacama',
    'Coquimbo',
    'Valparaíso',
    'Metropolitana de Santiago',
    'Libertador General Bernardo O’Higgins',
    'Maule',
    'Ñuble',
    'Biobío',
    'La Araucanía',
    'Los Ríos',
    'Los Lagos',
    'Aysén del General Carlos Ibáñez del Campo',
    'Magallanes y de la Antártica Chilena'
];

const CustomerDetailsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        region: '',
        comuna: '',
        departamento: '',
        referencias: ''
    });
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Enviar datos a la base de datos
        const response = await fetch('/api/saveCustomerDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            router.push('/checkout');
        } else {
            // Manejar error
            console.error('Error saving customer details');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mb-10">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="input input-bordered w-full bg-white text-black"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
                <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    required 
                    className="input input-bordered w-full bg-white text-black"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="input input-bordered w-full bg-white text-black"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="input input-bordered w-full bg-white text-black"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">Región</label>
                <select 
                    id="region" 
                    name="region" 
                    value={formData.region} 
                    onChange={handleChange} 
                    required 
                    className="select w-full bg-white text-black"
                >
                    <option value="">Seleccione una región</option>
                    {regions.map((region, index) => (
                        <option key={index} value={region}>{region}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="comuna" className="block text-sm font-medium text-gray-700">Comuna</label>
                <input 
                    type="text" 
                    id="comuna" 
                    name="comuna" 
                    value={formData.comuna} 
                    onChange={handleChange} 
                    required 
                    className="input input-bordered w-full bg-white text-black"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="departamento" className="block text-sm font-medium text-gray-700">Departamento (Opcional)</label>
                <input 
                    type="text" 
                    id="departamento" 
                    name="departamento" 
                    value={formData.departamento} 
                    onChange={handleChange} 
                    className="input input-bordered w-full bg-white text-black"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="referencias" className="block text-sm font-medium text-gray-700">Referencias</label>
                <textarea 
                    id="referencias" 
                    name="referencias" 
                    value={formData.referencias} 
                    onChange={handleChange} 
                    className="textarea textarea-bordered w-full bg-white text-black"
                />
            </div>
            <button 
                type="submit" 
                className="btn w-full text-white"
            >
                Enviar
            </button>
        </form>
    );
};

export default CustomerDetailsForm;
