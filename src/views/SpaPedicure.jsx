import React, { useEffect } from 'react';

// Estilos inyectados para simular tu configuración de Tailwind y Google Fonts
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

  body {
    font-family: 'Montserrat', sans-serif;
    color: #222222;
    background: linear-gradient(to bottom right, #e0f5fc, #fcfcfd, #f0dadd);
    background-attachment: fixed;
    margin: 0;
  }

  .font-serif { font-family: 'Playfair Display', serif; }
  .font-sans { font-family: 'Montserrat', sans-serif; }
  
  .glass-card {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.5);
  }
  
  .text-brand-text { color: #222222; }
  .text-brand-pinkAccent { color: #b76e79; }
  .text-brand-pinkLight { color: #F9DAD9; }
  .bg-brand-pinkAccent { background-color: #b76e79; }
  .bg-brand-pinkLight { background-color: #F9DAD9; }
  .border-brand-pinkLight { border-color: #F9DAD9; }
  .border-brand-pinkAccent { border-color: #b76e79; }
`;

const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`} style={{ fontSize: 'inherit', verticalAlign: 'middle' }}>
    {name}
  </span>
);

export default function SpaPedicureMockup() {
  
  // Al cargar, nos aseguramos de estar arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{customStyles}</style>
      
      {/* Falso Navbar para dar contexto */}
      <nav className="w-full bg-white/90 backdrop-blur-md border-b border-white/50 h-20 flex items-center fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="font-serif text-xl font-bold tracking-wider text-brand-text">
              Cesy <span className="text-brand-pinkAccent italic">Nails & Spa</span>
            </span>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest text-brand-text opacity-50 cursor-not-allowed">
            Modo Prototipo
          </button>
        </div>
      </nav>

      <div className="pt-20 pb-24 px-4 max-w-6xl mx-auto min-h-screen">
        
        {/* Botón de Regresar */}
        <button className="my-8 flex items-center text-brand-pinkAccent font-bold uppercase text-xs tracking-widest group cursor-pointer">
          <Icon name="arrow_back" className="mr-2 group-hover:-translate-x-1 transition-transform" /> Volver al inicio
        </button>

        {/* Encabezado Principal de la Página */}
        <div className="glass-card rounded-[3rem] shadow-2xl relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Imagen Principal */}
            <div className="h-64 md:h-auto relative">
              <img 
                src="https://i.pinimg.com/736x/2e/52/90/2e529063d8c1e8b00303cb265108c4a4.jpg" 
                alt="Spa Pedicure" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:hidden"></div>
            </div>

            {/* Texto Introductorio */}
            <div className="p-8 md:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Icon name="water_drop" className="text-[10rem] text-brand-pinkAccent" />
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-brand-text relative z-10">
                Spa <span className="italic text-brand-pinkAccent">Pedicure</span>
              </h2>
              
              <div className="space-y-4 text-brand-text/80 font-light text-lg leading-relaxed relative z-10 mb-8">
                <p className="text-xl font-medium text-brand-text border-l-4 border-brand-pinkAccent pl-4 italic">
                  Una experiencia exclusiva de bienestar y relajación total.
                </p>
                <p>
                  Mucho más que estética. Nuestro Spa Pedicure es un ritual diseñado para realzar la belleza de tus pies, aliviar la fatiga acumulada y renovar tu cuerpo a través de puntos de presión estratégicos.
                </p>
              </div>

              <div className="flex items-center space-x-6 relative z-10">
                <div className="text-center">
                  <span className="block font-serif text-2xl font-bold text-brand-pinkAccent">60</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">Minutos</span>
                </div>
                <div className="w-px h-10 bg-brand-text/10"></div>
                <div className="text-center">
                  <span className="block font-serif text-2xl font-bold text-brand-pinkAccent">$25</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">Inversión</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Qué incluye la experiencia */}
        <h3 className="font-serif text-3xl md:text-4xl text-center mb-12 text-brand-text">
          Tu Ritual <span className="italic text-brand-pinkAccent">Paso a Paso</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Paso 1 */}
          <div className="glass-card p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-500 shadow-lg">
            <img 
              src="https://cdn.prod.website-files.com/61db45ac0b81e69d6d60044d/65cfaff00a1dd156f8534a1f_descarga%20(2).jpeg" 
              alt="Limpieza" 
              className="w-full h-48 object-cover rounded-2xl mb-6 shadow-sm"
            />
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-pinkAccent mx-auto -mt-12 mb-4 shadow-md border-4 border-[#fcfcfd]">
              <span className="font-bold">1</span>
            </div>
            <h4 className="font-bold text-xl mb-3 text-brand-text">Purificación</h4>
            <p className="text-sm font-light text-brand-text/70">Sales minerales, corte preciso, limpieza de cutícula y exfoliación profunda para retirar células muertas.</p>
          </div>

          {/* Paso 2 */}
          <div className="glass-card p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-500 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=400" 
              alt="Masaje" 
              className="w-full h-48 object-cover rounded-2xl mb-6 shadow-sm"
            />
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-pinkAccent mx-auto -mt-12 mb-4 shadow-md border-4 border-[#fcfcfd]">
              <span className="font-bold">2</span>
            </div>
            <h4 className="font-bold text-xl mb-3 text-brand-text">Reflexología</h4>
            <p className="text-sm font-light text-brand-text/70">Masaje terapéutico en puntos clave del pie que estimula la circulación y libera la tensión muscular acumulada.</p>
          </div>

          {/* Paso 3 */}
          <div className="glass-card p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-500 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400" 
              alt="Esmaltado" 
              className="w-full h-48 object-cover rounded-2xl mb-6 shadow-sm"
            />
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-pinkAccent mx-auto -mt-12 mb-4 shadow-md border-4 border-[#fcfcfd]">
              <span className="font-bold">3</span>
            </div>
            <h4 className="font-bold text-xl mb-3 text-brand-text">Embellecimiento</h4>
            <p className="text-sm font-light text-brand-text/70">Aplicación de mascarilla hidratante, toallas calientes y un esmaltado perfecto con productos de alta gama.</p>
          </div>

        </div>

        {/* Llamada a la acción Final */}
        <div className="glass-card rounded-[3rem] p-12 text-center shadow-xl border-2 border-brand-pinkLight/50">
          <Icon name="self_care" className="text-5xl text-brand-pinkAccent mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-brand-text">Regálate este momento</h2>
          <p className="text-brand-text/70 font-light mb-8 max-w-xl mx-auto">
            Tus pies te llevan a todas partes todos los días. Es momento de devolverles el favor. Agenda tu sesión y sal de Cesy Nails & Spa caminando sobre las nubes.
          </p>
          <a href="#" className="inline-flex justify-center items-center bg-brand-pinkAccent text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#a35c67] hover:-translate-y-1 transition-all">
            <Icon name="calendar_month" className="mr-3" /> Agendar por WhatsApp
          </a>
        </div>

      </div>
    </>
  );
}