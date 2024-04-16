import React from 'react';

export async function generateStaticParams() {
    const res = await fetch('https://backend-gamelink.onrender.com/games');
    const data = await res.json();

    if (Array.isArray(data.info)) {
        return data.info.map((producto) => ({
            params: {
                ninosId: producto._id.toString(),
            },
        }));
    } else {
        return []; // Retorna un array vacío si data.info no es un array
    }
}


async function getProductById(id) {
    const res = await fetch(`https://backend-gamelink.onrender.com/games/${id}`);
    const data = await res.json();
    return data.product; // Aquí accedemos directamente al objeto del producto
}

const page = async ({ params }) => {
    const product = await getProductById(params.ninosId);

    return (
        <div>
            {product && (
                <>
                    <img src={product.img} alt={product.nombre} />
                    <div>
                        <div>{product.nombre}</div>
                        <p>Precio: ${product.precio}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default page;
