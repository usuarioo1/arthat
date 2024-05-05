import { MadresContext } from "./MadresContext";
import { useReducer } from "react";
import madreReducer from "./madreReducer";
import React from 'react'
import axiosClient from "@/config/axiosClient";

const MadreProvider = ({ children }) => {

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

    const [madreState, dispatch] = useReducer(madreReducer, initialState)

    const getMadres = async () => {
        const response = await axiosClient.get('games')
        const madres = response.data.info;
        dispatch({
            type: "GET_MADRES",
            payload: madres
        })
    };

    const getMadreById = async(id) => {
        try {
            const response = await axiosClient.get(`/games/${id}`)
            const madreInfo = response.data.product

            dispatch({
                type:"GET_MADRE",
                payload: madreInfo
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
            <MadresContext.Provider value={{getMadres, getMadreById, products: madreState.products, reduceStock}}>{children}</MadresContext.Provider>
        </div>
    )

}

export default MadreProvider;
