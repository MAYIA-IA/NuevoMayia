import { useEffect, useRef, useState } from 'react';

import imagen1 from '../assets/carousel/1. - ConsultorIA.png';
import imagen2 from '../assets/carousel/2.-Agentes.png';
import imagen3 from '../assets/carousel/3.-Marketplace.png';
import imagen4 from '../assets/carousel/4.-Cámaras.png';
import imagen5 from '../assets/carousel/5.-Origen.png';

/* ── Datos de noticias – editar aquí ────────────────────────────── */
interface NewsItem {
  id: number;
  image: string;
  category: string;
  categoryColor: string;
  headline: string;
  summary: string;
  source: string;
  time: string;
  badge?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: imagen5,
    category: 'MERCADO IA',
    categoryColor: '#A4D955',
    headline: 'MAYiA alcanza 30 centros de datos EdgeNet en México',
    summary: 'La infraestructura soberana de IA más grande del país suma nuevo nodo en Monterrey, elevando la capacidad de cómputo a 4.2 PFLOPS disponibles para PyMES.',
    source: 'MAYiA Research',
    time: 'Hace 2h',
    badge: 'EXCLUSIVO',
  },
  {
    id: 2,
    image: imagen2,
    category: 'INVERSIÓN',
    categoryColor: '#34d399',
    headline: 'Demanda de agentes IA en México crece 340% en Q1 2026',
    summary: 'El mercado de automatización inteligente supera los $12,000 MDP en México. Sectores Finanzas y Salud lideran la adopción de empleados digitales.',
    source: 'Bloomberg MX',
    time: 'Hace 4h',
    badge: 'TENDENCIA',
  },
  {
    id: 3,
    image: imagen1,
    category: 'TECNOLOGÍA',
    categoryColor: '#f59e0b',
    headline: 'Metodología VATYCS genera ROI promedio de 4.8x en 90 días',
    summary: 'Estudio independiente sobre 47 empresas mexicanas confirma que la implementación estructurada de IA supera a proyectos ad-hoc en velocidad y rentabilidad.',
    source: 'Forbes México',
    time: 'Hace 6h',
  },
  {
    id: 4,
    image: imagen3,
    category: 'MARKETPLACE',
    categoryColor: '#a78bfa',
    headline: 'Hackaton Intel × MAYiA abre convocatoria para startups IA',
    summary: 'El primer marketplace de ideas de IA en México recibe proyectos de jóvenes desarrolladores. Premio mayor: $500,000 MXN en infraestructura y mentoría.',
    source: 'MAYiA Press',
    time: 'Hace 8h',
    badge: 'NUEVO',
  },
  {
    id: 5,
    image: imagen4,
    category: 'SEGURIDAD',
    categoryColor: '#ef4444',
    headline: 'Cámaras IA detectan fraudes en retail con 99.2% de precisión',
    summary: 'El sistema Vision IA de MAYiA procesa 2.4M de frames diarios en más de 300 tiendas, reduciendo merma desconocida en un 67% en el primer trimestre de implementación.',
    source: 'El Economista',
    time: 'Hace 10h',
  },
];

/* ── Ticker horizontal (barra superior) ─────────────────────────── */
const TICKER_ITEMS = [
  '📈 Demanda IA México +340% Q1 2026',
  '🤖 MAYiA Lake: 2.1PB datos soberanos procesados',
  '🏆 Hackaton Intel × MAYiA: $500K MXN en premios',
  '📊 Termómetro IA: Escasez de talento IA en 78% de sectores',
  '🔐 Ciberseguridad IA: 99.9% de modelos protegidos',
  '🌐 EdgeNet: 30 nodos activos en México',
  '💡 Innovación del mes: Agente fiscal autónomo',
  '🎓 Academia MAYiA: 1,200 certificaciones emitidas',
  '🤝 Partners: AMD, Intel, Lenovo, IBM Quantum',
];

function NewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      style={{
        background: '#0A0A14',
        borderBottom: '1px solid rgba(164,217,85,0.2)',
        overflow: 'hidden',
        position: 'relative',
        height: 36,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Fades laterales */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #0A0A14, transparent)', zIndex: 2 }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #0A0A14, transparent)', zIndex: 2 }} />

      <div
        ref={tickerRef}
        style={{
          display: 'flex',
          gap: 0,
          animation: 'tickerScroll 60s linear infinite',
          whiteSpace: 'nowrap',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 11,
              color: i % 2 === 0 ? '#A4D955' : '#9ca3af',
              fontWeight: i % 2 === 0 ? 700 : 400,
              padding: '0 32px',
              letterSpacing: '0.04em',
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ── Componente principal ────────────────────────────────────────── */
export default function NoticiasTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % newsItems.length);
      }, 5000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused]);

  const goTo = (i: number) => setCurrentIndex(i);
  const item = newsItems[currentIndex];

  return (
    <div style={{ background: '#ffffff' }}>
      {/* Barra de ticker */}
      <NewsTicker />

      {/* Header de sección */}
      <div style={{ padding: '40px 40px 24px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 8px #ef4444', animation: 'pulse 1.5s infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6b7280' }}>En vivo · Noticias IA</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {newsItems.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === currentIndex ? 28 : 8,
                  height: 8,
                  borderRadius: 99,
                  border: 'none',
                  background: i === currentIndex ? '#A4D955' : '#e5e7eb',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{ padding: '0 40px 40px', maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Noticia principal */}
        <div
          style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            height: 440,
            cursor: 'pointer',
            boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
          }}
        >
          {/* Imagen con transición */}
          {newsItems.map((n, idx) => (
            <img
              key={n.id}
              src={n.image}
              alt={n.headline}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                opacity: idx === currentIndex ? 1 : 0,
                transition: 'opacity 0.7s ease',
                filter: 'brightness(0.7)',
              }}
            />
          ))}

          {/* Overlay gradiente */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)',
          }} />

          {/* Contenido sobre la imagen */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 32px' }}>
            {/* Fuente y tiempo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <span style={{
                fontSize: 9, fontWeight: 800, letterSpacing: '0.15em',
                textTransform: 'uppercase', padding: '3px 10px',
                borderRadius: 99, border: `1px solid ${item.categoryColor}`,
                color: item.categoryColor, background: `${item.categoryColor}15`,
              }}>
                {item.category}
              </span>
              {item.badge && (
                <span style={{
                  fontSize: 9, fontWeight: 800, letterSpacing: '0.12em',
                  textTransform: 'uppercase', padding: '3px 10px',
                  borderRadius: 99, background: 'rgba(239,68,68,0.2)',
                  color: '#ef4444', border: '1px solid rgba(239,68,68,0.4)',
                }}>
                  {item.badge}
                </span>
              )}
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginLeft: 'auto' }}>
                {item.source} · {item.time}
              </span>
            </div>

            <h2 style={{
              fontSize: 24, fontWeight: 800, color: '#ffffff',
              lineHeight: 1.3, marginBottom: 10,
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}>
              {item.headline}
            </h2>

            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: 600 }}>
              {item.summary}
            </p>

            <button style={{
              marginTop: 16,
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 18px', borderRadius: 10, border: 'none',
              background: '#A4D955', color: '#0A0A14',
              fontWeight: 700, fontSize: 12, cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              Leer más
              <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Lista lateral de noticias */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {newsItems.map((n, i) => (
            <button
              key={n.id}
              onClick={() => goTo(i)}
              style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                padding: 12, borderRadius: 14, border: 'none',
                background: i === currentIndex ? '#f0fdf4' : '#f9fafb',
                cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.25s',
                outline: i === currentIndex ? '2px solid #A4D955' : '2px solid transparent',
                outlineOffset: 1,
                boxShadow: i === currentIndex ? '0 4px 16px rgba(164,217,85,0.15)' : 'none',
              }}
            >
              <img
                src={n.image}
                alt={n.headline}
                style={{ width: 72, height: 60, objectFit: 'cover', borderRadius: 8, flexShrink: 0, filter: 'brightness(0.9)' }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{
                  fontSize: 9, fontWeight: 800, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: n.categoryColor,
                  display: 'block', marginBottom: 4,
                }}>
                  {n.category}
                </span>
                <p style={{
                  fontSize: 12, fontWeight: 600, color: '#111827',
                  lineHeight: 1.4, margin: 0,
                  display: '-webkit-box', WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  {n.headline}
                </p>
                <span style={{ fontSize: 10, color: '#9ca3af', marginTop: 4, display: 'block' }}>
                  {n.source} · {n.time}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </div>
  );
}
