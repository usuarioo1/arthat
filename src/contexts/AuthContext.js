// context/AuthContext.js
'use client'
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrlVeriferUser } from '@/utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get(`${apiUrlVeriferUser}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                setUser(response.data.info);
            })
            .catch(error => {
                console.error('Error verificando el token:', error);
                localStorage.removeItem('token');
            })
            .finally(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        axios.get(apiUrlVeriferUser, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setUser(response.data.info);
        })
        .catch(error => {
            console.error('Error verificando el token:', error);
            localStorage.removeItem('token');
        });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;

