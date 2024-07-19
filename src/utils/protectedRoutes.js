'use client'
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && (!user || !user.isAdmin)) {
            router.push('/login');
        }
    }, [user, loading]);

    if (loading) {
        return <div>Loading...</div>; // Puedes mostrar un spinner o algún indicador de carga
    }

    return user && user.isAdmin ? children : null;
};

export default ProtectedRoute;

