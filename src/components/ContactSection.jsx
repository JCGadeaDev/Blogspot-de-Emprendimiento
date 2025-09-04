import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        console.log('Datos del formulario:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contacto" className="py-12">
            <h2 className="text-center font-bold text-gray-900 text-2xl mb-8">Contacto</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <div className="max-w-xl mx-auto">
                    <p className="text-center text-gray-700 mb-6">¿Tienes alguna pregunta, sugerencia o una historia que quieras compartir? ¡Nos encantaría saber de ti!</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
                            <textarea 
                                id="message" 
                                rows="5" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg">Enviar Mensaje</button>
                        </div>
                    </form>
                    {message && (
                        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center font-medium">
                            {message}
                        </div>
                    )}
                    <div className="mt-8 text-center text-gray-600">
                        <p>También puedes encontrarnos en:</p>
                        <div className="flex justify-center space-x-4 mt-2">
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-300">Twitter</a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-300">LinkedIn</a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-300">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;