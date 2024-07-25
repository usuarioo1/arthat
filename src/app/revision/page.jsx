// pages/resumen-cliente.js
'use client'
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/contexts/CartContext';

const ResumenCliente = () => {
    const [customerData, setCustomerData] = useState(null);
    const router = useRouter();
    
    useEffect(() => {
        const data = localStorage.getItem('customerData');
        if (data) {
            setCustomerData(JSON.parse(data));
        } else {
            router.push('/nueva-ruta');
        }
    }, [router]);

    if (!customerData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="w-5/6 mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Datos del Cliente</h2>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <p><strong>Nombre:</strong> {customerData.name}</p>
                        <p><strong>Apellidos:</strong> {customerData.surname}</p>
                        <p><strong>Dirección:</strong> {customerData.address}</p>
                        <p><strong>Ciudad:</strong> {customerData.city}</p>
                        <p><strong>Código Postal:</strong> {customerData.postalCode}</p>
                        <p><strong>RUT:</strong> {customerData.rut}</p>
                        <p><strong>Email:</strong> {customerData.mail}</p>
                        <p><strong>Teléfono:</strong> {customerData.phone}</p>
                        <p><strong>Región:</strong> {customerData.region}</p>
                        <p><strong>Información adicional:</strong> {customerData.additionalInfo}</p>
                    </div>
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

export default ResumenCliente;
