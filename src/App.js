import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const mainSectionHeight = document.getElementById('main').offsetHeight;
            if (window.scrollY >= mainSectionHeight) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <MainSection />
            <Header isFixed={isHeaderFixed} />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
