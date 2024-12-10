import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        alert('Formulario enviado');
    };

    return (
        <section id="contact" className="py-16 bg-gray-900 text-center">
            {/* Título con efecto de neón */}
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
                Contáctame
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
                Estamos aquí para ayudarte. ¡Envíanos un mensaje!
            </p>

            {/* Formulario */}
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg"
            >
                <div className="mb-6">
                    <label className="block text-left text-gray-300 font-semibold mb-2">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                        placeholder="Tu nombre"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-left text-gray-300 font-semibold mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        placeholder="Tu email"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-left text-gray-300 font-semibold mb-2">
                        Mensaje:
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        rows="4"
                        placeholder="Tu mensaje"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-gray-900 font-bold rounded-lg hover:opacity-90 transform transition duration-300 hover:scale-105"
                >
                    Enviar
                </button>
            </form>
        </section>
    );
};

export default Contact;
