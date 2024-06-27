// context/AuthContext.js
'use client'
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('http://localhost:8080/verifyUser', {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                setUser(response.data.info);
            })
            .catch(error => {
                console.error('Error verificando el token:', error);
                localStorage.removeItem('token');
            });
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        axios.get('http://localhost:8080/verifyUser', {
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
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
