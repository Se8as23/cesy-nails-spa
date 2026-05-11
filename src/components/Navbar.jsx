import React, { useState, useEffect } from 'react';
import Icon from './Icon';

const Navbar = ({ navigateTo, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función inteligente para navegar y hacer scroll al mismo tiempo
  const handleNav = (sectionId) => {
    setIsMenuOpen(false); // Cierra el menú móvil
    
    if (currentView !== 'home') {
      // Si estamos en otro lado, vamos a home y luego hacemos scroll
      navigateTo('home');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Si ya estamos en home, solo hacemos scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-white/95 shadow-md' : 'bg-white/80 backdrop-blur-md border-b border-white/50'} h-20 flex items-center`}>
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => navigateTo('home')}>
          <img src="https://res.cloudinary.com/dt5radprz/image/upload/v1778120238/imagen_2026-05-06_211717416_lobbzh.png" className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" alt="Logo" />
          <span className="font-serif text-lg md:text-2xl font-bold tracking-wider text-brand-text">
            Cesy <span className="text-brand-pinkAccent italic drop-shadow-sm">Nails & Spa</span>
          </span>
        </div>
        
        {/* Menú de Escritorio */}
        <div className="hidden md:flex space-x-8 items-center text-xs uppercase font-semibold tracking-widest text-brand-text">
          <button onClick={() => handleNav('nosotros')} className="hover:text-brand-pinkAccent transition-colors">Nosotros</button>
          <button onClick={() => handleNav('servicios')} className="hover:text-brand-pinkAccent transition-colors">Servicios</button>
          <button onClick={() => handleNav('galeria')} className="hover:text-brand-pinkAccent transition-colors">Galería</button>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="bg-brand-pinkAccent text-white px-7 py-2.5 rounded-full font-bold shadow-md hover:bg-brand-pinkAccent/90 transition-all">
            Reservar
          </a>
        </div>

        {/* Botón menú móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-text p-2">
            <Icon name={isMenuOpen ? "close" : "menu"} className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-white/50 p-8 flex flex-col items-center space-y-4 md:hidden text-brand-text shadow-2xl">
          <button onClick={() => handleNav('nosotros')} className="text-sm font-bold uppercase tracking-widest py-2">Nosotros</button>
          <button onClick={() => handleNav('servicios')} className="text-sm font-bold uppercase tracking-widest py-2">Servicios</button>
          <button onClick={() => handleNav('galeria')} className="text-sm font-bold uppercase tracking-widest py-2">Galería</button>
          <a href="https://wa.me/1234567890" className="bg-brand-pinkAccent text-white px-10 py-3 rounded-full text-sm font-bold">Reservar</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;