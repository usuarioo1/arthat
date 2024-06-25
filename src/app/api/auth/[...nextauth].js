// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                mail: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    // Realiza una solicitud al endpoint de autenticación en tu backend
                    const response = await fetch('http://localhost:8080/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    });

                    if (response.ok) {
                        const user = await response.json();
                        return user; // Retorna el usuario si las credenciales son válidas
                    } else {
                        throw new Error('Invalid login credentials');
                    }
                } catch (error) {
                    throw new Error('Error al autenticar al usuario');
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
        signOut: '/logout',
        error: '/auth/error'
    },
    session: {
        jwt: true,
    }
});
