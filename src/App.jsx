import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Icon from './components/Icon';

// Vistas
import Home from './views/Home';
import Manicure from './views/Manicure';
import SpaPedicure from './views/SpaPedicure';
import ServicioGenerico from './views/ServicioGenerico';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans text-brand-text bg-gradient-to-br from-[#e0f5fc] via-[#fcfcfd] to-[#f0dadd] bg-fixed min-h-screen antialiased">
      
      {/* Navbar global */}
      <Navbar navigateTo={navigateTo} currentView={currentView} />
      
      {/* Switcher de Vistas */}
      <main>
        {currentView === 'home' && <Home navigateTo={navigateTo} />}
        {currentView === 'manicure' && <Manicure navigateTo={navigateTo} />}
        {currentView === 'spa-pedicure' && <SpaPedicure navigateTo={navigateTo} />}
        
        {/* Plantillas genéricas para que tú crees los archivos cuando quieras */}
        {currentView === 'pedicure' && <ServicioGenerico title="Pedicure" iconName="footprint" navigateTo={navigateTo} />}
        {currentView === 'masajes' && <ServicioGenerico title="Masajes Relajantes" iconName="self_care" navigateTo={navigateTo} />}
        {currentView === 'depilaciones' && <ServicioGenerico title="Depilaciones" iconName="content_cut" navigateTo={navigateTo} />}
      </main>

      {/* Footer global */}
      <footer className="bg-white/40 py-10 border-t border-white/50 text-center mt-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img src="https://res.cloudinary.com/dt5radprz/image/upload/v1778120238/imagen_2026-05-06_211717416_lobbzh.png" className="h-8 w-auto opacity-50" alt="Logo" />
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Cesy Nails & Spa 2026 • Cuenca, Ecuador</span>
        </div>
      </footer>

      {/* WhatsApp Flotante */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 bg-brand-pinkAccent text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-all border border-white/20 shadow-brand-pinkAccent/40">
        <Icon name="call" className="text-3xl" />
      </a>

    </div>
  );
}

export default App;