import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Auditoría',
      description: 'Proyectos de auditoría y control interno para garantizar la precisión y seguridad de la información financiera.',
    },
    {
      title: 'Desarrollo Web',
      description: 'Creación de sitios web dinámicos y funcionales para empresas y proyectos personales.',
    },
    {
      title: 'Aplicaciones Android',
      description: 'Diseño y desarrollo de aplicaciones móviles con interfaces modernas y funcionales.',
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">PORTAFOLIO</h2>
        <p className="text-lg text-gray-600">— Mis Proyectos —</p>
      </div>

      {/* Tarjetas */}
      <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 w-80 flex flex-col justify-between transform transition duration-300 hover:scale-105"
            style={{
              animation: `fade-in 1s ease-in-out ${index * 0.3}s`,
              animationFillMode: 'forwards',
            }}
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-4 text-center">{project.title}</h3>
            <p className="text-gray-600 text-center">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
