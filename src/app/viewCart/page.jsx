'use client'
import React, { useContext } from 'react';
import { CartContext } from "@/contexts/CartContext";
import { PDFDownloadLink, Document, Page, Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import Link from 'next/link';
import { IoDocumentOutline } from "react-icons/io5";

function ViewCart() {
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

    const Pdf = ({ cartItems, total }) => (
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

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4 text-black text-center">Carrito de compras</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-black">Tus productos</h3>
                    <div className="space-y-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row border rounded-lg p-4">
                                <img src={item.img} alt={item.nombre} className="w-24 h-24 object-cover mr-4" />
                                <div className="flex flex-col justify-between flex-grow">
                                    <div>
                                        <h4 className="font-semibold text-lg text-black">{item.nombre}</h4>
                                        <p className="text-black">Precio: $ {item.precio}</p>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 text-sm mr-2"
                                            onClick={() => handleRemoveItem(item._id)}
                                        >
                                            Disminuir
                                        </button>
                                        <span className="text-black mx-2">{item.quantity}</span>
                                        <button
                                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 text-sm"
                                            onClick={() => handleToItem(item)}
                                        >
                                            Aumentar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-black">Resumen del pedido</h3>
                    <div className="border rounded-lg p-4">
                        <p className="text-black">Productos: {cartItems.length}</p>
                        <p className="text-black">Subtotal: $ {precioTotal}</p>
                        <p className="text-black">Descuentos: $ 0</p>
                        <p className="text-xl font-semibold text-black">Total: $ {precioTotal}</p>
                        <div className="mt-4">
                            <Link href={'/infoCostumer'}>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full" onClick={guardarCarrito}>
                                    IR a la Caja
                                </button>
                            </Link>
                            <Link href={'/'}>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                                    Seguir comprando
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4">
                        {typeof window !== 'undefined' && (
                            <PDFDownloadLink document={<Pdf cartItems={cartItems} total={precioTotal} />} fileName='cotizacion'>
                                {({ loading }) => loading ? (
                                    <button className="bg-gray-500 text-white px-4 py-2 rounded w-full">
                                        Generando cotización...
                                    </button>
                                ) : (
                                    <button className="bg-gray-500 text-white px-4 py-2 rounded w-full">
                                        Descargar Cotización <IoDocumentOutline />
                                    </button>
                                )}
                            </PDFDownloadLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCart;
