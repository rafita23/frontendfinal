import React, { useState } from 'react';
import { BriefcaseIcon, CodeBracketIcon, CalculatorIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const About = () => {
    const [hoveredSection, setHoveredSection] = useState(null);

    const sections = [
        {
            title: 'Auditor',
            percentage: 90,
            description: 'Expertise en auditoría financiera y operativa con años de experiencia asegurando el cumplimiento normativo.',
            icon: <BriefcaseIcon className="w-12 h-12 text-blue-500" />,
            barColor: 'bg-blue-500',
        },
        {
            title: 'Programador Web',
            percentage: 80,
            description: 'Desarrollador web especializado en sistemas dinámicos y funcionales utilizando las últimas tecnologías.',
            icon: <CodeBracketIcon className="w-12 h-12 text-green-500" />,
            barColor: 'bg-green-500',
        },
        {
            title: 'Contador',
            percentage: 90,
            description: 'Dominio en contabilidad general y fiscal para la gestión precisa de registros financieros.',
            icon: <CalculatorIcon className="w-12 h-12 text-yellow-500" />,
            barColor: 'bg-yellow-500',
        },
        {
            title: 'Asesor Académico',
            percentage: 75,
            description: 'Apoyo académico en el desarrollo de proyectos y resolución de problemas técnicos.',
            icon: <AcademicCapIcon className="w-12 h-12 text-red-500" />,
            barColor: 'bg-red-500',
        },
    ];

    return (
        <section id="about" className="py-16 bg-gray-50 text-center animate-fade-in">
            {/* Título */}
            <div className="mb-12">
                <h2 className="text-5xl font-bold text-blue-600">HOLA & BIENVENIDO</h2>
                <p className="text-gray-500 mt-2 text-xl">— EXPLORA MIS OFERTAS—</p>
            </div>

            {/* Contenido */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Círculo central con fotografía */}
                <div className="flex justify-center items-center">
                    <div
                        className="w-56 h-56 rounded-full shadow-lg border-4 border-gray-300 overflow-hidden"
                        style={{
                            backgroundImage: 'url(/img/hero.jpg)', // Ruta de la imagen
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </div>

                {/* Secciones */}
                <div className="lg:col-span-2 space-y-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition relative"
                            onMouseEnter={() => setHoveredSection(section)}
                            onMouseLeave={() => setHoveredSection(null)}
                        >
                            {section.icon}
                            <h3 className="text-xl font-bold mt-4">{section.title}</h3>
                            <p className="text-gray-500 text-lg">{section.description}</p>
                            {/* Barra de carga */}
                            <div className="w-full bg-gray-300 h-4 rounded-full mt-4 relative overflow-hidden">
                                <div
                                    className={`h-full rounded-full ${section.barColor} ${
                                        hoveredSection?.title === section.title ? 'animate-glow' : ''
                                    }`}
                                    style={{
                                        width: `${section.percentage}%`,
                                        transition: 'width 0.5s ease-in-out',
                                    }}
                                ></div>
                            </div>
                            {/* Mostrar porcentaje al hacer hover */}
                            {hoveredSection?.title === section.title && (
                                <span className="absolute -top-8 text-3xl font-bold text-blue-600 animate-bounce">
                                    {section.percentage}%
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
