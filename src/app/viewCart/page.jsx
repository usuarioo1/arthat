'use client'
import React, { useContext } from 'react';
import { CartContext } from "@/contexts/CartContext";
import { Document, Text, Page, PDFDownloadLink, StyleSheet, View, Image } from "@react-pdf/renderer";

function ViewCart() {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#E4E4E4',
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
            backgroundColor: '#f2f2f2',
        }
    });

    const Pdf = ({ cartItems }) => {
        return (
            <Document>
                <Page size='A4' style={styles.page}>
                    <Image 
                        style={{ alignSelf: 'center', width: 50, height: 50, marginBottom: 20 }} 
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
            const response = await fetch(`http://localhost:8080/cart`, {
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
        <div>
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Carrito de compras</h2>
                    <br />
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">Nombre producto</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Precio</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Cantidad</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Alto:cm</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Ancho:cm</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Diámetro:cm</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Peso:gr</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Color</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Disminuir</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Aumentar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((row, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                    <td className="border border-gray-300 px-4 py-2 text-left">{row.nombre}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">{row.precio}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">{row.quantity}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">{row.alto}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">{row.ancho}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">{row.diametro}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">{row.peso}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">{row.color}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                            onClick={() => handleRemoveItem(row._id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">
                                        <button
                                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
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
                    <h2 className="text-xl font-semibold">Total: {precioTotal}</h2>
                    <br />
                    <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700" onClick={guardarCarrito}>
                        Pagar
                    </button>
                    <br />
                    <br />
                    {typeof window !== 'undefined' && (
                        <PDFDownloadLink document={<Pdf cartItems={cartItems} />} fileName='cotizacion'>
                            {({ loading }) => loading ? (
                                <button className="bg-gray-500 text-white px-6 py-2 rounded cursor-not-allowed">
                                    Generando cotización
                                </button>
                            ) : (
                                <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700">
                                    Descargar
                                </button>
                            )}
                        </PDFDownloadLink>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ViewCart;
