import { useState, useRef, useEffect } from 'react';

import imagen1 from '../assets/carousel/1. - ConsultorIA.png';
import imagen2 from '../assets/carousel/2.-Agentes.png';
import imagen3 from '../assets/carousel/3.-Marketplace.png';
import imagen4 from '../assets/carousel/4.-Cámaras.png';
import imagen5 from '../assets/carousel/5.-Origen.png';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  tag: string;
  cta: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: imagen5,
    title: 'IA desde el Origen',
    description: 'Modelos de inteligencia artificial desarrollados nativamente en México, respaldados por infraestructura soberana en 30 centros de datos EdgeNet.',
    tag: 'Infraestructura',
    cta: 'Conocer más',
  },
  {
    id: 2,
    image: imagen1,
    title: 'Consultoría MAYiA',
    description: 'Metodología VATYCS: estrategia, gobierno e implementación de IA con ROI medible desde el primer diagnóstico.',
    tag: 'Consultoría',
    cta: 'Agendar sesión',
  },
  {
    id: 3,
    image: imagen2,
    title: 'Fábrica de Agentes de IA',
    description: 'Empleados digitales para todo tu organigrama. Escalamos de 3M a 19M de colaboradores digitales para PyMES antes de 2028.',
    tag: 'Agentes IA',
    cta: 'Ver agentes',
  },
  {
    id: 4,
    image: imagen3,
    title: 'Marketplace #1 de IA',
    description: 'Soluciones con IA para tu empresa. Acceso a infraestructura IA-ready y escaparate digital nacional.',
    tag: 'Marketplace',
    cta: 'Publicar solución',
  },
  {
    id: 5,
    image: imagen4,
    title: 'Cámaras IA',
    description: 'Convertimos tus cámaras existentes en inspectores 24/7: control de inventario, calidad, seguridad y comportamiento de clientes en tiempo real.',
    tag: 'Vision IA',
    cta: 'Ver demo',
  },
];

/* ── Particle canvas ─────────────────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type P = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string; pulse: number; phase: number };
    const COLORS = ['#A4D955', '#7FD1FF', '#A4D955', '#c8ec88', '#aadeff'];

    const particles: P[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 3 + 1,
      alpha: Math.random() * 0.45 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * 0.012 + 0.006,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.phase += p.pulse;
        const a = p.alpha * (0.55 + 0.45 * Math.sin(p.phase));

        // glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        grad.addColorStop(0, p.color + Math.round(a * 255).toString(16).padStart(2, '0'));
        grad.addColorStop(1, p.color + '00');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round((a + 0.3) * 255).toString(16).padStart(2, '0').slice(-2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState(false);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isCarouselHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
      }, 4500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isCarouselHovered]);

  const goTo = (index: number) => { setCurrentIndex(index); setHoveredSlide(false); };
  const nextSlide = () => { setCurrentIndex((prev) => (prev + 1) % carouselItems.length); setHoveredSlide(false); };
  const prevSlide = () => { setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length); setHoveredSlide(false); };

  const item = carouselItems[currentIndex];

  return (
    /* ── Outer wrapper: WHITE bg with particles ── */
    <div className="relative w-full overflow-hidden px-4 md:px-10 lg:px-20 py-10"
      style={{ background: '#ffffff' }}>

      {/* Particle layer (sits behind everything) */}
      <ParticleCanvas />

      {/* Soft vignette so edges feel airy */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(240,248,255,0.6) 100%)',
          zIndex: 1,
        }}
      />

      {/* Main slide */}
      <div
        className="relative w-full overflow-hidden rounded-2xl group"
        style={{ height: 460, zIndex: 2 }}
        onMouseEnter={() => setIsCarouselHovered(true)}
        onMouseLeave={() => { setIsCarouselHovered(false); setHoveredSlide(false); }}
      >
        {carouselItems.map((ci, idx) => (
          <div
            key={ci.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: idx === currentIndex ? 1 : 0, zIndex: idx === currentIndex ? 1 : 0 }}
          >
            <img
              src={ci.image}
              alt={ci.title}
              className="w-full h-full object-cover select-none pointer-events-none transition-all duration-500"
              style={{
                filter: hoveredSlide && idx === currentIndex
                  ? 'blur(4px) brightness(0.35)'
                  : 'brightness(0.82)',
              }}
            />
          </div>
        ))}

        {/* Hover target layer */}
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onMouseEnter={() => setHoveredSlide(true)}
          onMouseLeave={() => setHoveredSlide(false)}
        />

        {/* Default bottom info */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 px-8 pb-8 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(10,10,20,0.95) 0%, rgba(10,10,20,0.3) 50%, transparent 80%)',
            opacity: hoveredSlide ? 0 : 1,
            transform: hoveredSlide ? 'translateY(8px)' : 'translateY(0)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
          }}
        >
          <span
            className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
            style={{ background: 'rgba(164,217,85,0.15)', color: '#A4D955', border: '1px solid rgba(164,217,85,0.35)' }}
          >
            {item.tag}
          </span>
          <h3 className="text-white text-2xl md:text-3xl font-bold">{item.title}</h3>
          <p className="text-gray-300 text-sm mt-1">Pasa el cursor para saber más</p>
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-8 md:px-20 text-center pointer-events-none"
          style={{
            opacity: hoveredSlide ? 1 : 0,
            transform: hoveredSlide ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          <span
            className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(164,217,85,0.2)', color: '#A4D955', border: '1px solid rgba(164,217,85,0.45)' }}
          >
            {item.tag}
          </span>
          <h3 className="text-white text-3xl md:text-5xl font-bold mb-5 leading-tight">{item.title}</h3>
          <p className="text-gray-200 text-base md:text-xl max-w-2xl leading-relaxed mb-8">{item.description}</p>
          <button
            className="flex items-center gap-2 font-bold text-sm md:text-base px-7 py-3 rounded-xl transition-all duration-300 hover:scale-105 pointer-events-auto"
            style={{ background: '#A4D955', color: '#0A0A14', boxShadow: '0 0 24px rgba(164,217,85,0.35)' }}
          >
            {item.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-30 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(164,217,85,0.9)', color: '#0A0A14' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-30 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(164,217,85,0.9)', color: '#0A0A14' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide counter */}
        <div
          className="absolute top-5 right-5 z-30 font-mono text-xs font-bold px-3 py-1.5 rounded-full"
          style={{ background: 'rgba(10,10,20,0.7)', color: '#A4D955', border: '1px solid rgba(164,217,85,0.25)' }}
        >
          {String(currentIndex + 1).padStart(2, '0')} / {String(carouselItems.length).padStart(2, '0')}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-3 mt-4 justify-center" style={{ position: 'relative', zIndex: 2 }}>
        {carouselItems.map((ci, index) => (
          <button
            key={ci.id}
            onClick={() => goTo(index)}
            className="relative flex-1 max-w-[160px] rounded-xl overflow-hidden transition-all duration-300 group/thumb"
            style={{
              height: 68,
              outline: currentIndex === index ? '2px solid #A4D955' : '2px solid transparent',
              outlineOffset: 2,
              opacity: currentIndex === index ? 1 : 0.55,
              transform: currentIndex === index ? 'scale(1.05)' : 'scale(1)',
              boxShadow: currentIndex === index ? '0 4px 16px rgba(164,217,85,0.25)' : 'none',
            }}
          >
            <img
              src={ci.image}
              alt={ci.title}
              className="w-full h-full object-cover transition-all duration-300 group-hover/thumb:brightness-110"
              style={{ filter: currentIndex === index ? 'brightness(1)' : 'brightness(0.65)' }}
            />
            <div
              className="absolute inset-0 flex items-end px-2 pb-1.5"
              style={{ background: 'linear-gradient(to top, rgba(10,10,20,0.9) 0%, transparent 60%)' }}
            >
              <span className="text-white text-[9px] font-semibold leading-tight line-clamp-1 tracking-wide">
                {ci.title}
              </span>
            </div>
            {currentIndex === index && (
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full" style={{ background: '#A4D955' }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}