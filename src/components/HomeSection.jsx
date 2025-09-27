import React from 'react';

const HomeSection = () => {
    return (
        <section id="inicio" className="py-12 md:py-24 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-4">Emprendimiento Desarrollo Empresarial</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">Recursos, guías y estrategias para convertir tus ideas en negocios exitosos. Únete a una comunidad de visionarios.</p>
                <a href="#articulos" className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-black transition duration-300 transform hover:scale-105" style={{backgroundColor: '#f89831'}}>Explora nuestros artículos</a>
            </div>
        </section>
    );
};
export default HomeSection;