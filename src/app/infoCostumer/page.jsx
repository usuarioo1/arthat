// pages/nueva-ruta.js
'use client'
import { useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { apiUrlDataForm } from '@/utils/api';
import { CartContext } from '@/contexts/CartContext';

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
        surname: '',
        address: '',
        city: '',
        postalCode: '',
        rut: '',
        mail: '',
        phone: '',
        region: '',
        additionalInfo: ''
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
        try {
            const response = await axios.post(`${apiUrlDataForm}`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Detalles del cliente guardados con éxito');
            localStorage.setItem('customerData', JSON.stringify(formData));
            router.push('/revision');
        } catch (error) {
            alert('Error guardando los detalles del cliente');
            console.error('Error saving customer details', error);
        }
    };

    return (
        <div className="w-5/6 mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
                        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="mail" className="block text-sm font-medium text-gray-700">Email</label>
                                <input 
                                    type="email" 
                                    id="mail" 
                                    name="mail" 
                                    value={formData.mail} 
                                    onChange={handleChange} 
                                    required 
                                    className="input input-bordered w-full bg-white text-black"
                                />
                            </div>
                            <div>
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
                        </div>
                        <h2 className="text-2xl font-semibold mb-4">Dirección de envío</h2>
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
                            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Apellidos</label>
                            <input 
                                type="text" 
                                id="surname" 
                                name="surname" 
                                value={formData.surname} 
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
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
                            <input 
                                type="text" 
                                id="city" 
                                name="city" 
                                value={formData.city} 
                                onChange={handleChange} 
                                required 
                                className="input input-bordered w-full bg-white text-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Código Postal</label>
                            <input 
                                type="text" 
                                id="postalCode" 
                                name="postalCode" 
                                value={formData.postalCode} 
                                onChange={handleChange} 
                                required 
                                className="input input-bordered w-full bg-white text-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rut" className="block text-sm font-medium text-gray-700">RUT</label>
                            <input 
                                type="text" 
                                id="rut" 
                                name="rut" 
                                value={formData.rut} 
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
                        <h2 className="text-2xl font-semibold mb-4">Información adicional</h2>
                        <div className="mb-4">
                            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Referencias</label>
                            <textarea 
                                id="additionalInfo" 
                                name="additionalInfo" 
                                value={formData.additionalInfo} 
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
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Resumen del pedido</h2>
                    <ResumenPedido />
                </div>
            </div>
        </div>
    );
};

const ResumenPedido = () => {
    const { cartItems } = useContext(CartContext);

    const precioTotal = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
    const cantidadTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <p className="text-sm font-medium text-gray-700">Productos: {cantidadTotal}</p>
            <p className="text-sm font-medium text-gray-700">Subtotal: ${precioTotal}</p>
            <p className="text-sm font-medium text-gray-700">Descuentos: $0</p>
            <p className="text-lg font-semibold text-gray-700">Total: ${precioTotal}</p>
            <button className="btn w-full text-white mt-4">IR la Caja</button>
        </div>
    );
};

export default CustomerDetailsForm;
