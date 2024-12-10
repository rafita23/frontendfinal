import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = ({ isFixed }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className={`${
                isFixed ? 'fixed top-0' : 'static'
            } w-full bg-gray-900 text-white shadow-lg z-50`}
        >
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div className="bg-blue-600/70 text-white px-4 py-2 rounded-lg text-2xl font-bold">
                    RAFAEL NINA
                </div>

                {/* Menú hamburguesa para pantallas pequeñas */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <XMarkIcon className="w-8 h-8" />
                    ) : (
                        <Bars3Icon className="w-8 h-8" />
                    )}
                </button>

                {/* Menú de navegación */}
                <nav
                    className={`absolute lg:static bg-gray-900 lg:bg-transparent w-full lg:w-auto top-16 lg:top-auto left-0 px-6 py-4 lg:px-0 lg:py-0 ${
                        isMenuOpen ? 'block' : 'hidden'
                    } lg:flex lg:items-center`}
                >
                    <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 text-lg">
                        <li>
                            <a
                                href="#main"
                                className="text-white hover:text-blue-400 transition duration-300"
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-white hover:text-blue-400 transition duration-300"
                            >
                                Sobre Nosotros
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                className="text-white hover:text-blue-400 transition duration-300"
                            >
                                Portafolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-white hover:text-blue-400 transition duration-300"
                            >
                                Contacto
                            </a>
                        </li>
                        <li>
                            <a
                                href="/login/index.html"
                                className="text-white hover:text-blue-400 transition duration-300"
                            >
                                Login
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
