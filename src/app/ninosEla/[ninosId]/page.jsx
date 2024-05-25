'use client'
import { useState, useEffect, useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { apiUrlNinos } from "@/utils/api";


const NinosPage = ({ params }) => {

    const {ninosId} = params;
    const { id } = params; // Obtener el parámetro dinámico de la URL
    const [product, setProduct] = useState(null);

    const { addItem } = useContext(CartContext);

    // Obtener los detalles del producto con el ID especificado
    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`${apiUrlNinos}/${ninosId}`);
            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Data from API:', data);
            // Verifica si 'amuletoById' está presente en los datos recibidos
            if (data && data.NinoById) {
                setProduct(data.NinoById);
            } else {
                console.log("Producto no encontrado en los datos recibidos");
            }
        } catch (error) {
            console.log(error, "error al obtener los datos");
        }
    };
    
    

    useEffect(() => {
        console.log("ID del producto:", id); // Agrega este console.log para verificar el ID del producto
        fetchProductDetails();
    }, [id]);

    if (!product) {
        return (
            <div>
                <h2>Producto no encontrado</h2>
            </div>
        );
    }

    const handleAddToCart = () => {
        addItem(product);
        console.log('Product added to cart:', product); // Console log to verify if the product was added to the cart
        console.log('Cart contents:', /* Code to access and display cart contents */); // Console log to display the contents of the cart
    };
    

    return (
        
    
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-9/12 m-auto mt-32 mb-20">
            <div className="w-full md:flex"> {/* Adjust the width and flex behavior based on screen size */}
                <img className="h-full w-full object-cover md:w-1/4 md:h-auto" src={product.img} alt={product.nombre} /> {/* Adjust image size and flex behavior based on screen size */}
                <div className="w-full md:w-3/4 p-4 md:pl-8 flex flex-col justify-start items-start"> {/* Centered content */}
                    <h2 className="text-gray-800 font-semibold text-3xl">{product.nombre}</h2>
                    <p className="text-gray-600 mt-2">SKU: {product.sku}</p> {/* SKU */}
                    <hr className="border-gray-300 my-2 w-full" /> {/* Divider */}
                    <div className="flex items-center mt-2"> {/* Flex container for price and button */}
                        <p className="text-gray-900 font-bold text-xl mr-4">Precio: ${product.precio}</p> {/* Price */}
                        <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button> {/* Add to cart button */}
                    </div>
                    <hr className="border-gray-300 my-2 w-full" /> {/* Divider */}
                    <p className="text-gray-600 mt-2">{product.descripcion}</p>
                    <p className="text-gray-600 mt-2">
                        <strong>Diametro:</strong> {product.diametro}<br />
                        <strong>Peso:</strong> {product.peso}<br />
                        <strong>Material:</strong> {product.material}
                    </p>
                </div>
            </div>
        </div>
    

    );
};



export default NinosPage;
