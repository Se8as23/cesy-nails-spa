import React from 'react';
import Icon from '../components/Icon';

const Manicure = ({ navigateTo }) => (
  <div className="pt-32 pb-24 px-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
    <button onClick={() => navigateTo('home')} className="mb-8 flex items-center text-brand-pinkAccent font-bold uppercase text-xs tracking-widest group">
      <Icon name="arrow_back" className="mr-2 group-hover:-translate-x-1 transition-transform" /> Volver al inicio
    </button>
    <div className="glass-card p-8 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10"><Icon name="auto_awesome" className="text-[10rem] text-brand-pinkAccent" /></div>
      <h2 className="font-serif text-4xl md:text-6xl mb-8 text-brand-text">Manicure <span className="italic text-brand-pinkAccent">Premium</span></h2>
      <div className="space-y-6 text-brand-text/80 font-light text-lg leading-relaxed relative z-10">
        <p className="text-2xl font-medium text-brand-text border-l-4 border-brand-pinkLight pl-6 italic">El cuidado que tus manos merecen.</p>
        <p>Nuestro servicio de manicure va más allá de la estética. Comenzamos con una evaluación y limpieza profunda de tus uñas y cutículas, seguida de una exfoliación suave que elimina células muertas.</p>
        <p>Finalizamos con un masaje hidratante y la aplicación de esmaltes de alta gama que garantizan un acabado impecable y de larga duración.</p>
      </div>
      <a href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20agendar%20un%20Manicure" target="_blank" rel="noreferrer" className="mt-12 inline-block bg-brand-pinkAccent text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-brand-pinkAccent/90 transition-all relative z-10">Agendar Manicure</a>
    </div>
  </div>
);

export default Manicure;