import React from 'react';

const MainSection = () => {
    return (
        <section
            id="main"
            className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
            style={{
                backgroundImage: 'url(/img/hero.jpg)',
            }}
        >
            {/* Título con bordes negros */}
            <h1
                className="text-6xl lg:text-7xl font-extrabold text-white leading-tight"
                style={{
                    textShadow: '2px 2px 4px black',
                }}
            >
                Bienvenido a mi Portafolio
            </h1>

            {/* Subtítulo */}
            <p
                className="text-2xl lg:text-3xl text-white mt-4"
                style={{
                    textShadow: '1px 1px 2px black',
                }}
            >
                Soy <span className="font-semibold">RAFAEL NINA</span>, profesional a tus servicios
            </p>
        </section>
    );
};

export default MainSection;
