import { RunasConext } from "./RunasContext";
import { useReducer } from "react";
import runasReducer from "./runasReducer";
import React from 'react'
import axiosClient from "@/config/axiosClient";

const RunasProvider = ({ children }) => {

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

    const [runasState, dispatch] = useReducer(runasReducer, initialState)

    const getRunas = async () => {
        const response = await axiosClient.get('games')
        const runas = response.data.info;
        dispatch({
            type: "GET_RUNAS",
            payload: runas
        })
    };

    const getRunasById = async(id) => {
        try {
            const response = await axiosClient.get(`/games/${id}`)
            const runaInfo = response.data.product

            dispatch({
                type:"GET_RUNA",
                payload: runaInfo
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
            <RunasConext.Provider value={{getRunas, getRunasById, products: runasState.products, reduceStock}}>{children}</RunasConext.Provider >
        </div>
    )

}

export default RunasProvider;
