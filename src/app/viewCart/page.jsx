'use client'
import React, { useContext } from 'react';
import { CartContext } from "@/contexts/CartContext";
import { Document, Text, Page, PDFDownloadLink, StyleSheet, View, Image } from "@react-pdf/renderer";
import { apiUrlCart } from '@/utils/api';
import { IoDocumentOutline } from "react-icons/io5";
import Link from 'next/link';

function ViewCart() {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            padding: 30,
            height: '100%',
        },
        table: {
            display: "table",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: '#bfbfbf',
            margin: "0 auto",
        },
        tableRow: {
            flexDirection: "row",
        },
        tableCol: {
            width: "12.5%",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: '#bfbfbf',
            padding: 5,
        },
        tableCell: {
            margin: "auto",
            marginTop: 5,
            fontSize: 10,
        },
        header: {
            backgroundColor: '#ffffff',
        },
        totalSection: {
            marginTop: 20,
            alignItems: 'center',
        },
        totalText: {
            fontSize: 14,
            fontWeight: 'bold',
        },
    });

    const Pdf = ({ cartItems, total }) => {
        return (
            <Document>
                <Page size='A4' style={styles.page}>
                    <Image
                        style={{ alignSelf: 'center', width: 100, height: 75, marginBottom: 20 }}
                        src='https://res.cloudinary.com/dpbpyzl96/image/upload/v1714527762/arthat/guwmrw9dq6l9fspfnxhs.jpg'
                    />
                    <View style={styles.table}>
                        {/* Table Header */}
                        <View style={[styles.tableRow, styles.header]}>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Nombre producto</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Precio</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Cantidad</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Alto (cm)</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Ancho (cm)</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Diámetro (cm)</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Peso (gr)</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Color</Text></View>
                        </View>
                        {/* Table Body */}
                        {cartItems.map((item, index) => (
                            <View style={styles.tableRow} key={index}>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.nombre}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.precio}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.quantity}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.alto}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.ancho}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.diametro}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.peso}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.color}</Text></View>
                            </View>
                        ))}
                    </View>
                    {/* Total Section */}
                    <View style={styles.totalSection}>
                        <Text style={styles.totalText}>Total: $ {total}</Text>
                    </View>
                </Page>
            </Document>
        );
    }

    const { cartItems, removeItem, addItem } = useContext(CartContext);

    const precioTotal = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);

    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    const guardarCarrito = async () => {
        try {
            const response = await fetch(`${apiUrlCart}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "items": cartItems,
                    "usuario": "Test"
                })
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleToItem = (producto) => {
        addItem(producto);
    };

    return (
        <div className="sm:container mx-auto sm:px-4 px-1">
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-black text-center sm:text-left">Carrito de compras</h2>
        <br />
        <table className="min-w-full border-collapse">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-2 py-1 w-24 hidden sm:table-cell"></th>
                    <th className="border border-gray-300 px-2 py-1 text-left text-black">Producto</th>
                    <th className="border border-gray-300 px-2 py-1 text-left text-black">Precio</th>
                    <th className="border border-gray-300 px-2 py-1 text-left text-black">Cantidad</th>
                    <th className="border border-gray-300 px-2 py-1 text-left text-black hidden sm:table-cell">Alto (mm)</th>
                    <th className="border border-gray-300 px-2 py-1 text-left text-black hidden sm:table-cell">Ancho (mm)</th>
                    <th className="border border-gray-300 px-2 py-1 text-left text-black hidden sm:table-cell">Diámetro (mm)</th>
                    <th className="border border-gray-300 px-2 py-1 text-left text-black hidden sm:table-cell">Peso (gr)</th>
                    <th className="border border-gray-300 px-2 py-1 text-left text-black hidden sm:table-cell">Color</th>
                    <th className="border border-gray-300 px-2 py-1 text-left text-black">Disminuir</th>
                    <th className="border border-gray-300 px-2 py-1 text-left text-black">Aumentar</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="border border-gray-300 px-2 py-1 text-left hidden sm:table-cell">
                            <img src={row.img} alt="" className='w-16' />
                        </td>
                        <td className="border border-gray-300 px-2 py-1 text-left text-black">{row.nombre}</td>
                        <td className="border border-gray-300 px-2 py-1 text-left text-black">{row.precio}</td>
                        <td className="border border-gray-300 px-2 py-1 text-left text-black">{row.quantity}</td>
                        <td className="border border-gray-300 px-2 py-1 text-left text-black hidden sm:table-cell">{row.alto}</td>
                        <td className="border border-gray-300 px-2 py-1 text-left text-black hidden sm:table-cell">{row.ancho}</td>
                        <td className="border border-gray-300 px-2 py-1 text-left text-black hidden sm:table-cell">{row.diametro}</td>
                        <td className="border border-gray-300 px-2 py-1 text-left text-black hidden sm:table-cell">{row.peso}</td>
                        <td className="border border-gray-300 px-2 py-1 text-left text-black hidden sm:table-cell">{row.color}</td>
                        <td className="border border-gray-300 px-2 py-1 text-left">
                            <button
                                className="bg-red-500 text-white px-1 py-0.5 rounded hover:bg-red-700 text-xs"
                                onClick={() => handleRemoveItem(row._id)}
                            >
                                Eliminar
                            </button>
                        </td>
                        <td className="border border-gray-300 px-2 py-1 text-left">
                            <button
                                className="bg-green-500 text-white px-1 py-0.5 rounded hover:bg-green-700 text-xs"
                                onClick={() => handleToItem(row)}
                            >
                                Aumentar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br />
        <h2 className="btn btn-outline text-xl font-semibold mb-4 text-black">Total: $ {precioTotal}</h2>
        <br />
        <div className='gap-5'>
            <Link href={'/infoCostumer'}>
                <button className="btn btn-primary" onClick={guardarCarrito}>
                    Continuar con el pago
                </button>
            </Link>
            {typeof window !== 'undefined' && (
                <PDFDownloadLink document={<Pdf cartItems={cartItems} total={precioTotal} />} fileName='cotizacion'>
                    {({ loading }) => loading ? (
                        <button className="btn btn-neutral ml-5">
                            Generando cotización
                        </button>
                    ) : (
                        <button className="btn btn-neutral ml-5">
                            Descargar Cotización <IoDocumentOutline />
                        </button>
                    )}
                </PDFDownloadLink>
            )}
        </div>
        <br />
        <br />
    </div>
</div>



    );
}

export default ViewCart;
