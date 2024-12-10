import React from 'react';

const Footer = () => {
    const footerStyle = {
        background: '#333',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
    };

    const textStyle = {
        margin: 0,
        fontSize: '0.9em',
    };

    return (
        <footer style={footerStyle}>
            <p style={textStyle}>© 2024 VICTOR RAFAEL NINA CHAMBILLA. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
