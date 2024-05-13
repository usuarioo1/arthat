import React from "react";


export async function generateStaticParams() {
    const res = await fetch('http://localhost:8080/amuletos');
    const data = await res.json();

    if (Array.isArray(data.info)) {
        return data.info.map((amuleto) => ({
            params: {
                amuletoId: amuleto._id.toString(),
            },
        }));
    } else {
        return []; // Retorna un array vacío si data.info no es un array   
    }
}

export async function getAmuletoById(id) {
    const res = await fetch(`http://localhost:8080/amuletos/${id}`);
    const data = await res.json();
    return data.amuletoById; // Aquí accedemos directamente al objeto del producto
}
