import React, { useEffect, useRef } from 'react'; // Importamos useRef
import Icon from '../components/Icon';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({ navigateTo }) => {
  // Creamos una "referencia" para el video
  const videoRef = useRef(null);
  
  useEffect(() => {
    // 1. Inicializar animaciones AOS
    AOS.init({ once: true, duration: 1000, easing: 'ease-out-quad' });
    AOS.refresh();

    // 2. EL TRUCO MÁGICO PARA EL VIDEO
    // A veces React carga el atributo autoPlay antes de que el navegador esté listo.
    // Con este código, forzamos la reproducción por JavaScript cuando todo está montado.
    if (videoRef.current) {
      // Nos aseguramos TRIPLE de que esté mudo (si no, el navegador bloquea el play)
      videoRef.current.muted = true; 
      
      // Intentamos reproducir y capturamos cualquier error (por si acaso)
      videoRef.current.play().catch(error => {
        console.error("El navegador bloqueó el autoplay del video:", error);
        // Si falla, el navegador podría requerir que el usuario interactúe primero,
        // pero con muted=true, esto casi nunca falla.
      });
    }
  }, []);

  return (
    <div className="animate-in fade-in duration-700 overflow-hidden">
      
      {/* --- HERO CON VIDEO DE CLOUDINARY --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* CAPA 0: EL VIDEO (Ahora con z-0 para que esté por encima del fondo de la app) */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dt5radprz/video/upload/v1778117405/VIDEOENCABEZADO_ljuijs.mp4" type="video/mp4" />
        </video>
        
        {/* CAPA 10: Capa de cristal suave sobre el video */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] z-10"></div>

        {/* CAPA 20: El Contenido (Textos y Botones con z-20) */}
        <div className="max-w-6xl mx-auto px-4 text-center pt-20 relative z-20">
          <span className="text-brand-text font-semibold tracking-[0.4em] uppercase text-xs md:text-sm mb-8 block bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/60 shadow-sm inline-block" data-aos="fade-down">
            Bienvenida a Cesy Nails & Spa
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-brand-text mb-12" data-aos="zoom-out">
            Renueva tu energía, <br className="hidden md:block" /> 
            <span className="italic text-brand-pinkLight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>relájate y luce increíble</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center" data-aos="fade-up">
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="bg-brand-pinkLight text-brand-text px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-all flex items-center border border-brand-text/5">
              <Icon name="chat" className="mr-2" /> Reservar por WhatsApp
            </a>
            <button onClick={() => document.getElementById('servicios').scrollIntoView({behavior:'smooth'})} className="px-10 py-5 rounded-full text-lg font-medium border border-white/50 bg-white/40 backdrop-blur-md hover:bg-white/60 text-brand-text transition-all">
              Ver Servicios
            </button>
          </div>
        </div>
      </section>

      {/* --- EL RESTO DE TU CÓDIGO (Sigue igual, pero asegúrate de tenerlo) --- */}
      
      {/* Nosotros */}
      <section id="nosotros" className="py-24 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-brand-text leading-tight">El arte del cuidado <span className="italic text-brand-pinkAccent">personal</span></h2>
              <p className="text-brand-text/80 mb-10 font-light text-lg leading-relaxed">
                Bienvenida a un espacio donde la belleza, el bienestar y la relajación se unen para brindarte una experiencia exclusiva. Cada detalle está pensado para tu desconexión y renovación.
              </p>
              <div className="space-y-8">
                <BenefitItem icon="diamond" title="Calidad Premium" desc="Utilizamos los mejores productos internacionales para garantizar durabilidad y salud." />
                <BenefitItem icon="verified_user" title="Higiene Estricta" desc="Protocolos de esterilización rigurosos para tu total seguridad y tranquilidad." />
                <BenefitItem icon="favorite" title="Atención Exclusiva" desc="Cada cita es un ritual personalizado diseñado específicamente para ti." />
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-4" data-aos="fade-left">
              <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg border-4 border-white/50 transform hover:scale-[1.02] transition-all" alt="Spa" />
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=500" className="rounded-3xl shadow-lg border-4 border-white/50 mt-12 transform hover:scale-[1.02] transition-all" alt="Nails" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-brand-pinkAccent font-bold tracking-widest uppercase text-xs mb-4 block">Nuestras Experiencias</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-brand-text">Servicios Seleccionados</h2>
            <p className="text-brand-text/70 font-light">Embellece tu estilo con nuestra selección de tratamientos especializados.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard iconName="auto_awesome" title="Manicure" onClick={() => navigateTo('manicure')} dataAosDelay="100" />
            <ServiceCard iconName="footprint" title="Pedicure" onClick={() => navigateTo('pedicure')} dataAosDelay="200" />
            <ServiceCard iconName="water_drop" title="Spa Pedicure" onClick={() => navigateTo('spa-pedicure')} dataAosDelay="300" />
            <ServiceCard iconName="self_care" title="Masajes Relajantes" onClick={() => navigateTo('masajes')} dataAosDelay="400" />
            <ServiceCard iconName="content_cut" title="Depilaciones" onClick={() => navigateTo('depilaciones')} dataAosDelay="500" />
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-24 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left" data-aos="fade-up">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-2">Inspiración Real</h2>
              <p className="text-brand-text/70 font-light">Resultados impecables de nuestras clientas.</p>
            </div>
            <a href="#" className="mt-6 md:mt-0 inline-flex items-center bg-white px-8 py-3 rounded-full text-brand-pinkAccent font-bold text-sm border border-brand-pinkAccent/20 hover:bg-brand-pinkAccent hover:text-white transition-all shadow-sm">
              Ver más en Instagram <Icon name="photo_camera" className="ml-2 text-sm" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <img src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=600" className="aspect-[3/4] rounded-3xl object-cover shadow-md hover:scale-105 transition-all duration-700 w-full" alt="G1" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600" className="aspect-[3/4] rounded-3xl object-cover shadow-md hover:scale-105 transition-all duration-700 mt-8 w-full" alt="G2" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <img src="https://images.unsplash.com/photo-1595914561821-3fb3a41c1955?auto=format&fit=crop&q=80&w=600" className="aspect-[3/4] rounded-3xl object-cover shadow-md hover:scale-105 transition-all duration-700 w-full" alt="G3" />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600" className="aspect-[3/4] rounded-3xl object-cover shadow-md hover:scale-105 transition-all duration-700 mt-8 w-full" alt="G4" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-white/40">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-16" data-aos="fade-up">Voces de nuestras <span className="italic text-brand-pinkAccent">clientas</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <TestimonialCard delay="100" name="María Fernanda G." text="El mejor lugar para hacerte las uñas. El ambiente de Cesy es relajante y el trabajo es simplemente impecable." />
            <TestimonialCard delay="200" name="Andrea S." text="La higiene en Cesy Nails & Spa es de otro nivel. Siento total seguridad cada vez que vengo a mi cita mensual." />
            <TestimonialCard delay="300" name="Camila R." text="Atención de primera. Entienden perfectamente lo que busco y siempre superan mis expectativas con sus diseños." />
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENTES AUXILIARES (ServiceCard, BenefitItem, TestimonialCard) ---
// ... (Estos ya los tienes, asegúrate de que estén al final del archivo)
// ...

function ServiceCard({ iconName, title, onClick, dataAosDelay }) {
  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={dataAosDelay}
      className="glass-card bg-gray-100/60 p-10 rounded-[2.5rem] border border-white/60 hover:-translate-y-2 transition-all duration-500 text-center cursor-pointer group shadow-xl" 
      onClick={onClick}
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-pinkAccent/10 flex items-center justify-center text-brand-pinkAccent mx-auto mb-6 group-hover:bg-brand-pinkAccent group-hover:text-white transition-colors">
        <Icon name={iconName} className="text-4xl" />
      </div>
      <h3 className="font-serif text-2xl mb-4 text-brand-text">{title}</h3>
      <button className="text-brand-pinkAccent font-bold uppercase text-[10px] tracking-[0.2em] border-b-2 border-brand-pinkLight pb-1 group-hover:border-brand-pinkAccent transition-all">
        Saber más
      </button>
    </div>
  );
}

function BenefitItem({ icon, title, desc }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 rounded-xl bg-brand-pinkAccent/10 flex items-center justify-center text-brand-pinkAccent">
        <Icon name={icon} className="text-2xl" />
      </div>
      <div>
        <h4 className="font-bold text-brand-text">{title}</h4>
        <p className="text-sm opacity-60 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, text, delay }) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} className="glass-card p-10 rounded-3xl shadow-sm border border-white relative">
      <div className="absolute -top-4 -right-4 bg-brand-pinkAccent text-white p-3 rounded-2xl shadow-lg border border-white/20">
        <Icon name="format_quote" className="text-2xl" />
      </div>
      <div className="flex text-brand-pinkAccent mb-6">
        {[1,2,3,4,5].map(i => <Icon key={i} name="star" className="text-sm" />)}
      </div>
      <p className="text-brand-text/80 font-light mb-8 italic leading-relaxed text-lg">"{text}"</p>
      <div className="font-bold text-sm tracking-widest uppercase text-brand-text">— {name}</div>
    </div>
  );
}

export default Home;