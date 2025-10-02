import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(
      "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto."
    );
    console.log("Datos del formulario:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-12">
      {/* --- CAMBIADO: Título con un color más suave --- */}
      <h2 className="text-center font-bold text-slate-800 text-2xl mb-8">
        Contacto
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="max-w-xl mx-auto">
          {/* --- CAMBIADO: Texto de párrafo con un gris más legible --- */}
          <p className="text-center text-slate-600 mb-6">
            ¿Tienes alguna pregunta, sugerencia o una historia que quieras
            compartir? ¡Nos encantaría saber de ti!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              {/* --- CAMBIADO: Color de la etiqueta --- */}
              <label htmlFor="name" className="block text-slate-700 font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                // --- CAMBIADO: Clases mejoradas para el input ---
                className="bg-slate-300 font-semibold w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f89831] focus:border-[#f89831] transition"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-slate-700 font-bold mb-2"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="bg-slate-300 font-semibold w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f89831] focus:border-[#f89831] transition"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-slate-700 font-bold mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows="5"
                className="bg-slate-300 font-semibold w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f89831] focus:border-[#f89831] transition"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                // --- CAMBIADO: Estilo del botón usando clases de Tailwind ---
                className="bg-[#f89831] text-white font-bold py-3 px-8 rounded-full hover:bg-[#e0801a] transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f89831]"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
          {message && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium">
              {message}
            </div>
          )}
          <div className="mt-8 text-center text-slate-600">
            <p>También puedes encontrarnos en:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://wa.me/50584104315" target="_blank"
                aria-label="Whatsapp"
                className="text-[#f89831] hover:text-slate-900 transition duration-300"
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-alem%C3%A1n-espinoza-b37289123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
                aria-label="LinkedIn"
                className="text-[#f89831] hover:text-slate-900 transition duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://www.facebook.com/share/17FPp148sg/" target="_blank"
                aria-label="Facebook"
                className="text-[#f89831] hover:text-slate-900 transition duration-300"
              >
                <FaFacebook size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;