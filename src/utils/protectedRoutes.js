// components/ProtectedRoute.js
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || user.role !== 'admin') {
            router.push('/login');
        }
    }, [user]);

    return user && user.role === 'admin' ? children : null;
};

export default ProtectedRoute;
