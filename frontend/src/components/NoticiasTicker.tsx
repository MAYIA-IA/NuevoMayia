import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Bot, Trophy, BarChart2, Lock, Globe, Lightbulb, GraduationCap, Handshake } from 'lucide-react';

import imagen1 from '../assets/news/news1.png';
import imagen2 from '../assets/news/news2.png';
import imagen3 from '../assets/news/news3.png';
import imagen4 from '../assets/news/news4.png';
import imagen5 from '../assets/news/news5.png';

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
  url: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: imagen1,
    category: 'INFRAESTRUCTURA',
    categoryColor: '#ef4444',
    headline: 'MAYIA, primer centro de inteligencia artificial con sello Hecho en México, inicia operaciones',
    summary: 'MAYIA inicia operaciones como el primer centro de inteligencia artificial con sello Hecho en México, ofreciendo infraestructura soberana para empresas y posicionando al país en la carrera tecnológica global.',
    source: 'DataCenter Dynamics',
    time: 'Reciente',
    badge: 'LANZAMIENTO',
    url: 'https://www.datacenterdynamics.com/es/noticias/mayia-primer-centro-de-inteligencia-artificial-con-sello-hecho-en-mexico-inicia-operaciones/',
  },
  {
    id: 2,
    image: imagen2,
    category: 'SOBERANÍA DIGITAL',
    categoryColor: '#0071C5',
    headline: 'MAYIA: primer centro de IA con sello Hecho en México',
    summary: 'El centro de inteligencia artificial MAYIA apuesta por la soberanía digital y la infraestructura local para democratizar la IA en el país, impulsando el desarrollo tecnológico independiente.',
    source: 'Expansión',
    time: 'Reciente',
    badge: 'TENDENCIA',
    url: 'https://expansion.mx/tecnologia/2025/06/05/mayia-primer-centro-de-ia-con-sello-hecho-en-mexico',
  },
  {
    id: 3,
    image: imagen3,
    category: 'INNOVACIÓN',
    categoryColor: '#a78bfa',
    headline: 'MAYIA centro de inteligencia artificial mexicano',
    summary: 'Conoce MAYIA, el centro de inteligencia artificial que busca posicionar a México como referente tecnológico en América Latina, brindando soluciones avanzadas para múltiples industrias.',
    source: 'La Tank Media',
    time: 'Reciente',
    url: 'https://latank.media/mayia-centro-de-inteligencia-artificial-mexicano/',
  },
  {
    id: 4,
    image: imagen4,
    category: 'PYMES',
    categoryColor: '#f59e0b',
    headline: 'Nace MAYIA, el primer centro de IA 100% mexicano para PyMES y soberanía digital',
    summary: 'MAYIA nace como el primer centro de IA 100% mexicano enfocado en PyMES y soberanía digital, con presencia en los 32 estados del país para acelerar la transformación digital de los negocios locales.',
    source: 'Maya Comunicación',
    time: 'Reciente',
    badge: 'NUEVO',
    url: 'https://mayacomunicacion.com.mx/nace-mayia-el-primer-centro-de-inteligencia-artificial-100-mexicano-para-pymes-y-soberania-digital/',
  },
  {
    id: 5,
    image: imagen5,
    category: 'OFICIAL',
    categoryColor: '#34d399',
    headline: 'Comunicado oficial: MAYIA abre operaciones',
    summary: 'MAYIA, el centro de inteligencia artificial con sello Hecho en México, anuncia oficialmente el inicio de operaciones a nivel nacional y su compromiso con la adopción ética de la IA.',
    source: 'Agencia El Universal',
    time: 'Reciente',
    url: 'https://agenciaeluniversal.mx/productos/comunicado/12612',
  },
];

/* ── Ticker horizontal (barra superior) ─────────────────────────── */
const TICKER_ITEMS = [
  { text: 'Demanda IA México +340% Q1 2026', icon: TrendingUp },
  { text: 'MAYiA Lake: 2.1PB datos soberanos procesados', icon: Bot },
  { text: 'Hackaton Intel × MAYiA: $500K MXN en premios', icon: Trophy },
  { text: 'Termómetro IA: Escasez de talento IA en 78% de sectores', icon: BarChart2 },
  { text: 'Ciberseguridad IA: 99.9% de modelos protegidos', icon: Lock },
  { text: 'EdgeNet: 30 nodos activos en México', icon: Globe },
  { text: 'Innovación del mes: Agente fiscal autónomo', icon: Lightbulb },
  { text: 'Academia MAYiA: 1,200 certificaciones emitidas', icon: GraduationCap },
  { text: 'Partners: AMD, Intel, Lenovo, IBM Quantum', icon: Handshake },
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
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 11,
              color: i % 2 === 0 ? '#A4D955' : '#9ca3af',
              fontWeight: i % 2 === 0 ? 700 : 400,
              padding: '0 32px',
              letterSpacing: '0.04em',
            }}
          >
            <item.icon size={14} className={i % 2 === 0 ? "animate-pulse" : ""} />
            {item.text}
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
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#A4D955', boxShadow: '0 0 8px #A4D955', animation: 'pulse 1.5s infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6b7280' }}>MAYIA EN MEDIOS · NOTICIAS INDEXADAS</span>
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

            <a 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
              marginTop: 16,
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 20px', borderRadius: 10, border: 'none',
              background: '#A4D955', color: '#0A0A14', textDecoration: 'none',
              fontWeight: 700, fontSize: 12, cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              Leer noticia completa
              <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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
