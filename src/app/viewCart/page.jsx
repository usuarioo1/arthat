'use client'
import React, { useContext } from 'react';
import { CartContext } from "@/contexts/CartContext";
import { Document, Text, Page, PDFDownloadLink, StyleSheet, View, Image } from "@react-pdf/renderer";
import { apiUrlCart } from '@/utils/api';
import { IoDocumentOutline } from "react-icons/io5";

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
                                <th className="border border-gray-300 px-4 py-2 text-left">Alto (mm)</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Ancho (mm)</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Diámetro (mm)</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Peso (gr)</th>
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
                    <h2 className=" btn btn-outline text-xl font-semibold mb-4">Total: $ {precioTotal}</h2>
                    <br />
                    <div className='gap-5 '>
                    <button className="btn btn-primary" onClick={guardarCarrito}>
                        Pagar
                    </button>
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
        </div>
    );
}

export default ViewCart;
