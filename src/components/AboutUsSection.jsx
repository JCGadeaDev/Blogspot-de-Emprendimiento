import React from 'react';

const AboutUsSection = () => {
    return (
        <section id="acerca" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center font-bold text-gray-900 text-4xl md:text-5xl mb-12 leading-tight">
                    Acerca de Nosotros
                </h2>
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-16 text-center md:text-left border border-gray-100">
                    <div className="md:flex md:items-center md:space-x-12">
                        <div className="flex-shrink-0">
                            <img 
                                src="https://placehold.co/200x200/4F46E5/FFFFFF?text=Autor" 
                                alt="Imagen del autor del blog" 
                                className="w-40 h-40 md:w-56 md:h-56 rounded-full mx-auto md:mx-0 mb-8 md:mb-0 object-cover shadow-xl ring-4 ring-indigo-100"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight text-center md:text-left">
                                Nuestra Historia y Misión
                            </h3>
                            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium text-justify">
                                Este blog nació de la pasión por el emprendimiento y la creencia de que cualquier persona con una gran idea y la orientación adecuada puede crear algo extraordinario. Mi misión es simple: proporcionar el conocimiento y la inspiración que necesitas para iniciar, hacer crecer y escalar tu negocio. Creemos en la transparencia, el aprendizaje continuo y el poder de una comunidad que se apoya mutuamente.
                            </p>
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-indigo-600 text-center md:text-left">
                                Conoce al Autor
                            </h4>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium text-justify">
                                Soy <span className="font-bold text-indigo-600">Carlos Alberto Aleman Espinoza</span>, un emprendedor en serie con [Número] años de experiencia en la industria. He enfrentado los mismos desafíos que tú, desde la financiación hasta la captación de clientes, y estoy aquí para compartir las lecciones que he aprendido para ayudarte a evitar errores comunes y acelerar tu éxito.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;