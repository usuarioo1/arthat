import { ProfesionesContext } from "./ProfesionesContext";
import { useReducer } from "react";
import profesionesReducer from "./profesionesReducer";
import React from 'react'
import axiosClient from "@/config/axiosClient";

const ProfesionesProvider = ({ children }) => {

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

    const [profesionesState, dispatch] = useReducer(profesionesReducer, initialState)

    const getProfesiones = async () => {
        const response = await axiosClient.get('games')
        const profesiones = response.data.info;
        dispatch({
            type: "GET_PROFESIONES",
            payload: profesiones
        })
    };

    const getProfesionById = async(id) => {
        try {
            const response = await axiosClient.get(`/games/${id}`)
            const profesionInfo = response.data.product

            dispatch({
                type:"GET_PROFESION",
                payload: profesionInfo
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
            <ProfesionesContext.Provider value={{getProfesiones, getProfesionById, products: profesionesState.products, reduceStock}}>{children}</ProfesionesContext.Provider>
        </div>
    )

}

export default ProfesionesProvider;
