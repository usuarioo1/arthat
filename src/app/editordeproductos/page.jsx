'use client'
import { useState } from 'react';

const ProductEditor = ({ onUpdate }) => {
    const [productCode, setProductCode] = useState('');
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const categories = ['amuletos', 'ninos', 'profesiones', 'madres', 'anillos', 'runas']; // Tus categorías

    const handleFetchProduct = async () => {
        setLoading(true);
        setError(null);
        setSuccess(null);
        let foundProduct = null;
        let productCategory = '';

        for (const category of categories) {
            try {
                const response = await fetch(`http://localhost:8080/${category}`);
                if (response.ok) {
                    const data = await response.json();
                    const product = data.info.find(item => item.codigo === productCode);
                    if (product) {
                        foundProduct = product;
                        productCategory = category;
                        break;
                    }
                }
            } catch (err) {
                // Maneja el error en silencio y continúa con la siguiente categoría
            }
        }

        if (foundProduct) {
            setProductData({ ...foundProduct, category: productCategory });
        } else {
            setError('Producto no encontrado');
            setProductData(null);
        }

        setLoading(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        if (!productData) return;

        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch(`http://localhost:8080/${productData.category}/${productData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });
            if (!response.ok) throw new Error('Error al actualizar producto');
            const updatedData = await response.json();
            setProductData(updatedData);
            if (onUpdate) onUpdate(updatedData);
            setSuccess('Producto actualizado correctamente');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md mt-10 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Editor de Productos</h2>
            <div className="flex items-center mb-4">
                <input
                    className="flex-1 border border-gray-300 rounded-md p-2 mr-2"
                    type="text"
                    placeholder="Introduce el Código"
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                />
                <button
                    className={`p-2 rounded-md ${loading ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                    onClick={handleFetchProduct}
                    disabled={loading}
                >
                    {loading ? 'Cargando...' : 'Solicitar Producto'}
                </button>
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {success && <div className="text-green-500 mb-4">{success}</div>}
            {productData && (
                <div>
                    <h3 className="text-xl font-semibold mb-2">Detalles del Producto</h3>
                    <form className="space-y-4">
                        {[
                            { label: 'Nombre', name: 'nombre', type: 'text' },
                            { label: 'Descripción', name: 'descripcion', type: 'text' },
                            { label: 'Precio', name: 'precio', type: 'number' },
                            { label: 'Alto', name: 'alto', type: 'number' },
                            { label: 'Ancho', name: 'ancho', type: 'number' },
                            { label: 'Diámetro', name: 'diametro', type: 'number' },
                            { label: 'Peso', name: 'peso', type: 'number' },
                            { label: 'Color', name: 'color', type: 'text' },
                            { label: 'Stock', name: 'stock', type: 'number' },
                            { label: 'Imagen', name: 'img', type: 'text' },
                        ].map(({ label, name, type }) => (
                            <div key={name}>
                                <label className="block text-gray-700">{label}:</label>
                                <input
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    type={type}
                                    name={name}
                                    value={productData[name] || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        ))}
                        <button
                            className={`w-full p-2 rounded-md ${loading ? 'bg-gray-300' : 'bg-green-500 text-white'}`}
                            type="button"
                            onClick={handleSave}
                            disabled={loading}
                        >
                            {loading ? 'Guardando...' : 'Guardar Cambios'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ProductEditor;
