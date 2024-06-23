import React from 'react'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content flex flex-col items-center sm:flex-row sm:justify-around">
            <nav className="mb-4 sm:mb-0">
                <h6 className="footer-title text-center text-xl sm: mx-auto">ArtHat</h6>
                <a className="link link-hover block text-center sm:text-left">Sobre Arthat</a>
                <a className="link link-hover block text-center sm:text-left">Contacto</a>
            </nav>
            <nav className="mb-4 sm:mb-0">
                <h6 className="footer-title text-xl text-center sm: mx-auto">Legal</h6>
                <a className="link link-hover block text-center sm:text-left">Términos y condiciones</a>
            </nav>
            <p className="text-xl text-center sm:text-left">
                &copy; 2024 Arthat. Todos los derechos reservados.
            </p>

        </footer>
    );
};


export default Footer
