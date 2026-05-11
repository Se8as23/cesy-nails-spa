import React from 'react';
import Icon from '../components/Icon';

const ServicioGenerico = ({ title, iconName, navigateTo }) => (
  <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto text-center animate-in fade-in duration-500">
    <button onClick={() => navigateTo('home')} className="mb-8 inline-flex items-center text-brand-pinkAccent font-bold uppercase text-xs tracking-widest">
      <Icon name="arrow_back" className="mr-2" /> Volver
    </button>
    <div className="glass-card p-16 rounded-[3rem]">
      <Icon name={iconName} className="text-6xl text-brand-pinkAccent opacity-20 mb-6" />
      <h2 className="font-serif text-5xl mb-6 text-brand-text">{title}</h2>
      <p className="opacity-70 mb-8 italic">Contenido en preparación para Cesy Nails & Spa...</p>
      <div className="w-full h-64 bg-brand-pinkLight/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-brand-pinkAccent/20">
         <p className="text-brand-pinkAccent/40 font-medium tracking-widest uppercase text-xs">Próximamente fotos y detalles</p>
      </div>
    </div>
  </div>
);

export default ServicioGenerico;