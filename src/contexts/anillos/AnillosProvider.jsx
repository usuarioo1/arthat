import { AnillosContext } from "./AnillosContext";
import { useReducer } from "react";
import anillosReducer from "./anillosReducer";
import React from 'react'
import axiosClient from "@/config/axiosClient";

const AnillosProvider = ({ children }) => {

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

    const [anillosState, dispatch] = useReducer(anillosReducer, initialState)

    const getAnillos = async () => {
        const response = await axiosClient.get('games')
        const anillos = response.data.info;
        dispatch({
            type: "GET_ANILLOS",
            payload: anillos
        })
    };

    const getAnillosById = async(id) => {
        try {
            const response = await axiosClient.get(`/games/${id}`)
            const anilloInfo = response.data.product

            dispatch({
                type:"GET_ANILLO",
                payload: anilloInfo
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
            <AnillosContext.Provider value={{getAnillos, getAnillosById, products: anillosState.products, reduceStock}}>{children}</AnillosContext.Provider>
        </div>
    )

}

export default AnillosProvider;
