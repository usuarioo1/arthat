import { AmuletosContext } from "./amuletosContext";
import { useReducer } from "react";
import amuletosReducer from "./amuletosReducer";
import React from 'react'
import axiosClient from "@/config/axiosClient";

const AmuletoProvider = ({ children }) => {

    const initialState = {
        products:[],
        product:[{
            id:'',
            nombre:'',
            categoria:"",
            descripcion:"",
            precio:0,
            codigo:"",
            alto:0,
            ancho:0,
            diametro:0,
            peso:0,
            color:"",
            stock:0,
            img:"",
        }]
    }

    const [amuletosState, dispatch] = useReducer(amuletosReducer, initialState)

    const getAmuletos = async () => {
        const response = await axiosClient.get('games')
        const amuletos = response.data.info;
        dispatch({
            type: "GET_AMULETOS",
            payload: amuletos
        })
    };

    const getAmuletosById = async(id) => {
        try {
            const response = await axiosClient.get(`/games/${id}`)
            const amuletoInfo = response.data.product

            dispatch({
                type:"GET_AMULETO",
                payload: amuletoInfo
            })
        } catch (error) {
            console.error(error)
        }
    }

    const reduceStock = async(cartItems) => {
        const productos = {cartItems}
        const result = await axiosClient.put('/reduceStock', productos)
    }

    return (
        <div>
            <AmuletosContext.Provider value={{getAmuletos, getAmuletosById, products: amuletosState.products, reduceStock}}>{children}</AmuletosContext.Provider >
        </div>
    )

}

export default AmuletoProvider;
