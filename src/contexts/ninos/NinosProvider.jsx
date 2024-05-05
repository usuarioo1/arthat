import { NinosContext } from "./NinosContext";
import { useReducer } from "react";
import ninoReducer from "./ninosReducer";

import React from 'react'
import axiosClient from "@/config/axiosClient";

const NinosProvider = ({ children }) => {

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

    const [ninosState, dispatch] = useReducer(ninoReducer, initialState)

    const getNinos = async () => {
        const response = await axiosClient.get('games')
        const ninos = response.data.info;
        dispatch({
            type: "GET_NINOS",
            payload: ninos
        })
    };

    const getNinoById = async(id) => {
        try {
            const response = await axiosClient.get(`/games/${id}`)
            const ninoInfo = response.data.product

            dispatch({
                type:"GET_NINO",
                payload: ninoInfo
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
            <NinosContext.Provider value={{getNinos, getNinoById, products: ninosState.products, reduceStock}}></NinosContext.Provider>
        </div>
    )

}

export default NinosProvider
