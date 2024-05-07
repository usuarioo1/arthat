'use client'
import React from 'react';
import { useState } from 'react';

function AgregarProducto() {

  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [codigo, setCodigo] = useState('');
  const [alto, setAlto] = useState('');
  const [ancho, setAncho] = useState('');
  const [diametro, setDiametro] = useState('');
  const [peso, setPeso] = useState('');
  const [color, setColor] = useState('');
  const [stock, setStock] = useState('');

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:8080/${categoria}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          precio,
          codigo,
          alto,
          ancho,
          diametro,
          peso,
          color,
          stock
        })
      });

      setCategoria('');
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setCodigo('');
      setAlto('');
      setAncho('');
      setDiametro('');
      setPeso('');
      setColor('');
      setStock('');

      // Aquí puedes manejar la respuesta de la solicitud
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  }






  return (
    <div className="container mx-auto px-4">

      <div className="flex justify-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
          Añadir Producto
        </button>
      </div>
      <h1 className="text-4xl font-bold mb-4">Agregar Producto</h1>
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2" htmlFor="nombre">
          Nombre del Producto
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
          id="nombre"
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />

      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2" htmlFor="categoria">
          Categoría
        </label>
        <select className="shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white" id="categoria" onChange={handleCategoriaChange}>
          <option value="">Selecciona una categoría</option>
          <option value="createNino">Niños Ela</option>
          <option value="createMadre">Madres y Niños</option>
          <option value="createAnillo">Anillos</option>
          <option value="createAmuleto">Amuletos</option>
          <option value="createRuna">Runas</option>
          <option value="createProfesion">Profesiones</option>
          {/* Aquí puedes agregar las categorías que necesites */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2" htmlFor="descripcion">
          Descripción del Producto
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white" id="descripcion" placeholder="Descripción del producto" value={descripcion} onChange={(event) => setDescripcion(event.target.value)}></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2" htmlFor="precio">
          Precio
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white" id="precio" type="number" placeholder="Precio del producto" value={precio} onChange={(event) => setPrecio(event.target.value)}  />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2" htmlFor="codigo">
          Código del Producto
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white" id="codigo" type="text" placeholder="Código del producto" value={codigo} onChange={(event) => setCodigo(event.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white" id="alto" type="number" placeholder="Alto" value={alto} onChange={(event) => setAlto(event.target.value)} />
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white" id="ancho" type="number" placeholder="Ancho" value={ancho} onChange={(event) => setAncho(event.target.value)} />
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white" id="diametro" type="number" placeholder="Diámetro" value={diametro} onChange={(event) => setDiametro(event.target.value)} />
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white" id="peso" type="number" placeholder="Peso" value={peso} onChange={(event) => setPeso(event.target.value) } />
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white" id="color" type="text" placeholder="Color" value={color} onChange={(event) => setColor(event.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2" htmlFor="stock">
          Stock
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white" id="stock" type="number" placeholder="Stock del producto" value={stock} onChange={(event) => setStock(event.target.value)} />
      </div>
    </div>

  );
}

export default AgregarProducto;
