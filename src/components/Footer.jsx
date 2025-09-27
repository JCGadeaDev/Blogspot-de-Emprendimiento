import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white py-6 mt-12" style={{background: 'linear-gradient(135deg, #000000 0%, #333333 100%)'}}>
            <div className="container mx-auto text-center px-4">
                <p>&copy; 2025 Blog de Emprendimiento. Todos los derechos reservados.</p>
                <div className="mt-2">
                    <span className="text-sm opacity-90">Desarrollado con </span>
                    <span className="font-semibold" style={{color: '#f89831'}}>♥</span>
                    <span className="text-sm opacity-90"> para emprendedores</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;