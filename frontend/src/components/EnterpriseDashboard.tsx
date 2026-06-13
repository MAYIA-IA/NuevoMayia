import { useState, useEffect, useRef, useMemo, forwardRef, useImperativeHandle, Fragment } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, FlaskConical, FileText, Wrench, Calendar,
  Briefcase, LineChart, ShoppingBag, GraduationCap, GitBranch, ScanEye,
  BookOpen, Award, Users, MoreVertical, Info, Cloud, Target, TrendingUp,
  TrendingDown, Shield, Bot, Zap, Link2, Lock, Layers, FlaskRound,
  MonitorCheck, GraduationCap as GradCap, ChevronRight, MessageSquare
} from 'lucide-react';
import logoMaia from '../assets/logosNativos/logoMaia.webp';
import academiaLogo from '../assets/logosNativos/academia-horizontal.webp';
import flaiLogo from '../assets/logosNativos/1. NUBE_FINAL_FLAI (1).webp';
import mayiaLakeLogo from '../assets/logosNativos/MAYiA_LAKE.webp';
import ajoloteVideo from '../assets/AJOLOTE.webm';
import roiVideo from '../assets/ROI_Video.mp4';
import squadVideo from '../assets/SQUAD_MAYIA.mp4';

const hexToRgba = (hex: string, alpha: number) => {
  if (!hex || typeof hex !== 'string') return `rgba(164, 217, 85, ${alpha})`;
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return hex;
};

const getPastelTheme = (color: string) => {
  const c = color.toLowerCase();
  if (c === '#16a34a' || c === '#86efac' || c === '#4ade80') {
    return { bg: '#f0fdf4', hoverBg: '#dcfce7', border: '#86efac' };
  } else if (c === '#9333ea' || c === '#d8b4fe' || c === '#c084fc') {
    return { bg: '#faf5ff', hoverBg: '#f3e8ff', border: '#d8b4fe' };
  } else if (c === '#dc2626' || c === '#fca5a5' || c === '#f87171') {
    return { bg: '#fef2f2', hoverBg: '#fee2e2', border: '#fca5a5' };
  } else if (c === '#ea580c' || c === '#fdba74' || c === '#fb923c') {
    return { bg: '#fff7ed', hoverBg: '#ffedd5', border: '#fdba74' };
  } else if (c === '#a4d955' || c === '#d9f99d' || c === '#bef264') {
    return { bg: '#f8fde9', hoverBg: '#f1fbd1', border: '#d9f99d' };
  } else if (c === '#14b8a6' || c === '#5eead4' || c === '#2dd4bf') {
    return { bg: '#f0fdfa', hoverBg: '#ddfbf2', border: '#5eead4' };
  }
  return { bg: '#f0f6ff', hoverBg: '#e2efff', border: '#93c5fd' };
};

// Hook personalizado para detectar dispositivos móviles (<768px)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);
  return isMobile;
};

// --- COMPONENTE DE OPTIMIZACIÓN: LazyVideo para carga bajo demanda ---
const LazyVideo = forwardRef<HTMLVideoElement, any>(({ src, videoSrc, children, accentColor, ...props }, ref) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const internalRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useImperativeHandle(ref, () => internalRef.current!);

  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Cargar el video 200px antes de que entre al viewport
    );

    if (internalRef.current) {
      observer.observe(internalRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  if (isMobile) {
    const colorFinal = accentColor || '#A4D955';
    return (
      <div 
        ref={internalRef as any}
        style={{ 
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(135deg, #090e1a 0%, #151d30 100%)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div 
          animate={{ scale: [0.9, 1.15], opacity: [0.7, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${hexToRgba(colorFinal, 0.25)} 0%, rgba(0,0,0,0) 70%)`,
            filter: 'blur(8px)',
          }}
        />
        <span style={{ fontSize: 28, opacity: 0.25, filter: 'drop-shadow(0 0 8px ' + colorFinal + ')' }}>⚡</span>
      </div>
    );
  }

  const actualSrc = src || videoSrc;

  return (
    <video ref={internalRef} {...props}>
      {shouldLoad && (
        children ? children : <source src={actualSrc} type={actualSrc?.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
      )}
    </video>
  );
});

const CATEGORIES = ['Infraestructura', 'Desarrollo', 'Modelos', 'Agentes', 'Operación', 'Monitoreo', 'Capacitación'];// --- SUB-COMPONENTE: EdgenetCard ("Fábrica para tu IA Privada") ---
function EdgenetCard({ onOpenMap, onOpenFabricaInfo, onOpenDiagnostico }: { onOpenMap?: () => void; onOpenFabricaInfo?: () => void; onOpenDiagnostico?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const color = '#60a5fa';
  const theme = getPastelTheme(color);
  
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const iconVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.playbackRate = 0.5; // 45% speed
    }
    if (iconVideoRef.current) {
      iconVideoRef.current.playbackRate = 0.5; // 50% speed
    }
  }, []);

  const handleAgendarCita = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: Math.max(20, rect.top - 140) });
    } else {
      window.open("https://calendly.com/mayiainteligencia/consulta-mayia", '_blank');
    }
    setMenuOpen(false);
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMenuOpen(false); }}
      style={{
        borderRadius: 24, 
        border: `2px solid ${theme.border}`,
        boxShadow: 'none',
        background: theme.bg,
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between', height: 90 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Icon Video Frame for jaguar.webm */}
          <div style={{ 
            width: 52, 
            height: 52, 
            borderRadius: 14, 
            overflow: 'hidden', 
            background: '#090d16', 
            border: `2px solid ${color}`, 
            boxShadow: `0 4px 12px ${hexToRgba(color, 0.4)}, inset 0 0 6px rgba(255, 255, 255, 0.15)`, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'relative' 
          }}>
            <LazyVideo 
              ref={iconVideoRef}
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              videoSrc="/assets/images/jaguar.webm"
              accentColor={color}
            />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: '#111827', lineHeight: 1.2 }}>Fábrica de Inteligencia Artificial</h3>
            <p style={{ margin: 0, fontSize: 11, color: '#4B5563', fontWeight: 600, letterSpacing: '0.05em', marginTop: 2 }}>IA Privada Mayia</p>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, transition: 'all 0.2s' }}
          >
            <MoreVertical size={20} />
          </button>
          
          {menuOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 30 }} onClick={() => setMenuOpen(false)} />
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, width: 'max-content', minWidth: 280 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = hexToRgba(color, 0.08)}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Conversa con el Agentico de Fábrica de IA
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Video Area */}
      <div style={{ 
        margin: '0 20px 16px', 
        borderRadius: 16, 
        overflow: 'hidden', 
        height: 180, 
        position: 'relative', 
        background: '#F9FAFB',
        border: `2px solid ${isHovered ? color : 'transparent'}`,
        boxShadow: isHovered ? `0 0 20px ${hexToRgba(color, 0.25)}` : 'none',
        transition: 'all 0.3s ease'
      }}>
        <LazyVideo 
          ref={mainVideoRef}
          autoPlay loop muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          videoSrc="/assets/images/productos/drpVideo.webm"
          accentColor={color}
        />

        {/* Left overlays: Nuestros servidores, Modo Hibrido, Modo on premise */}
        <div style={{ position: 'absolute', top: 8, left: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            'Nuestros servidores',
            'Modo Hibrido',
            'Modo on premise'
          ].map((text) => (
            <div 
              key={text} 
              style={{ 
                background: 'rgba(255, 255, 255, 0.9)', 
                backdropFilter: 'blur(6px)', 
                borderRadius: 6, 
                display: 'flex', 
                alignItems: 'center', 
                gap: 5, 
                padding: '3px 6px', 
                width: 'fit-content',
                border: '1px solid rgba(229, 231, 235, 0.6)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
              }}
            >
              <span style={{ fontSize: 8, color: '#374151', fontWeight: 800, letterSpacing: '0.02em' }}>{text}</span>
              <motion.div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  backgroundColor: color,
                  boxShadow: `0 0 4px ${color}`,
                  flexShrink: 0,
                }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          ))}
        </div>

        {/* Right overlay: ACTIVO with animation */}
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          <motion.div
            style={{
              background: 'rgba(219, 234, 254, 0.95)', 
              border: `1px solid ${color}`,
              borderRadius: 6,
              padding: '3.5px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              boxShadow: `0 2px 6px ${hexToRgba(color, 0.15)}`,
            }}
            animate={{
              scale: [1, 1.01, 1],
              boxShadow: [
                `0 2px 6px ${hexToRgba(color, 0.1)}`,
                `0 2px 12px ${hexToRgba(color, 0.4)}`,
                `0 2px 6px ${hexToRgba(color, 0.1)}`,
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span style={{ fontSize: 8.5, color: '#1e40af', fontWeight: 900, letterSpacing: '0.03em' }}>Activo</span>
            <motion.div
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                backgroundColor: color,
                boxShadow: `0 0 4px ${color}`,
                flexShrink: 0,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Wrapper to distribute remaining space vertically */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Description */}
        <p style={{
          margin: '0 20px',
          fontSize: 13,
          color: '#374151',
          lineHeight: 1.6,
          fontWeight: 600,
          textAlign: 'justify'
        }}>
          Construye tu estrategia de inteligencia artificial sobre infraestructura segura, soberana y preparada para crecer. GPUs, Servidores, Data Centers IA Ready, Redes, Almacenamiento, Energía.
        </p>

        {/* 3 buttons grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, margin: '0 20px' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onOpenFabricaInfo) onOpenFabricaInfo();
            }}
            style={{
              background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`,
              color: '#111827',
              border: 'none',
              borderRadius: 4,
              padding: '12px 6px',
              fontSize: 10,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              lineHeight: 1.1,
              transition: 'all 0.2s',
              boxShadow: `0 2px 6px ${hexToRgba(color, 0.15)}`
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 10px ${hexToRgba(color, 0.25)}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 2px 6px ${hexToRgba(color, 0.15)}`; }}
          >
            Conoce más
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onOpenDiagnostico) onOpenDiagnostico();
            }}
            style={{
              background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`,
              color: '#111827',
              border: 'none',
              borderRadius: 4,
              padding: '12px 6px',
              fontSize: 10,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              lineHeight: 1.1,
              transition: 'all 0.2s',
              boxShadow: `0 2px 6px ${hexToRgba(color, 0.15)}`
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 10px ${hexToRgba(color, 0.25)}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 2px 6px ${hexToRgba(color, 0.15)}`; }}
          >
            Realiza tu diagnóstico
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAgendarCita(e);
            }}
            style={{
              background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`,
              color: '#111827',
              border: 'none',
              borderRadius: 4,
              padding: '12px 6px',
              fontSize: 10,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              lineHeight: 1.1,
              transition: 'all 0.2s',
              boxShadow: `0 2px 6px ${hexToRgba(color, 0.15)}`
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 10px ${hexToRgba(color, 0.25)}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 2px 6px ${hexToRgba(color, 0.15)}`; }}
          >
            Agenda una cita
          </button>
        </div>

        {/* Footer Container (Clean borderless with divider) */}
        <div style={{
          margin: '0 20px 20px',
          padding: '16px 0 0',
          borderTop: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12
        }}>
          <span style={{ 
            fontSize: 12, 
            color: '#374151', 
            fontWeight: 700, 
            lineHeight: 1.4,
            flex: 1
          }}>
            Somos la red de inteligencia artificial más grande del país
          </span>

          <button
            onClick={onOpenMap}
            style={{
              background: '#111827',
              color: '#ffffff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 14px',
              fontSize: 11,
              fontWeight: 800,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}
            onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.color = '#111827'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#111827'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Descubre porque &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTE: FlaiCard (FLAI Sovereign Cloud) ---
function FlaiCard({ onOpenInfo }: { onOpenInfo?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const color = '#f87171';
  const theme = getPastelTheme(color);

  const handleAgendarCita = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: Math.max(20, rect.top - 140) });
    } else {
      window.open("https://calendly.com/mayiainteligencia/consulta-mayia", '_blank');
    }
    setMenuOpen(false);
  };

  const handleMasInformacion = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(false);
    if (onOpenInfo) onOpenInfo();
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMenuOpen(false); }}
      style={{
        borderRadius: 24, 
        border: `2px solid ${theme.border}`,
        boxShadow: 'none',
        background: theme.bg,
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: 90 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ 
            width: 44, 
            height: 44, 
            borderRadius: 12, 
            background: '#FFFFFF', 
            border: `1px solid ${hexToRgba(color, 0.4)}`, 
            boxShadow: `0 4px 10px ${hexToRgba(color, 0.25)}`,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            overflow: 'hidden'
          }}>
            <img src={flaiLogo} alt="FLAI" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>FLAI</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#4B5563', fontWeight: 600 }}>Nube Soberana Inteligente</p>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, transition: 'all 0.2s' }}
          >
            <MoreVertical size={20} />
          </button>
          
          {menuOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 30 }} onClick={() => setMenuOpen(false)} />
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, width: 'max-content', minWidth: 260 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = hexToRgba(color, 0.08)}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Conversa con el Agentico de FLAI
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Video Area */}
      <div style={{ 
        margin: '0 20px 16px', 
        borderRadius: 16, 
        overflow: 'hidden', 
        height: 180, 
        position: 'relative', 
        background: '#F9FAFB',
        border: `2px solid ${isHovered ? color : 'transparent'}`,
        boxShadow: isHovered ? `0 0 20px ${hexToRgba(color, 0.4)}, inset 0 0 20px ${hexToRgba(color, 0.05)}` : 'none',
        transition: 'all 0.3s ease'
      }}>
        <LazyVideo 
          autoPlay loop muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          videoSrc="/assets/images/productos/flaiMarcoVideo.webm"
          accentColor={color}
        />
      </div>

      {/* Stats en una sola línea horizontal (solo letras rojas) */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center', 
        alignItems: 'center',
        margin: '0 20px 12px',
        padding: '8px 12px',
        background: '#F9FAFB',
        border: '1px solid rgba(0,0,0,0.04)',
        borderRadius: 10,
        gap: '6px 12px'
      }}>
        {[
          '100% México',
          '1era Nube Soberana',
          '30 CDN'
        ].map((stat, idx) => (
          <div 
            key={idx} 
            style={{ 
              fontSize: 9.5,
              fontWeight: 800, 
              color: '#991b1b', 
              whiteSpace: 'nowrap',
              borderRight: idx < 2 ? '1px solid #E5E7EB' : 'none',
              paddingRight: idx < 2 ? 12 : 0
            }}
          >
            {stat}
          </div>
        ))}
      </div>

      <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5, margin: '0 20px 16px', fontWeight: 500, textAlign: 'justify' }}>
        La primera nube de Inteligencia Artificial soberana de México. Resguarda tus datos dentro del territorio nacional con procesamiento GPU de altísimo rendimiento.
      </p>

      {/* Características Clave / Tags en Grid 2x2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '0 20px 16px' }}>
        {['GPU AMD MI300X', 'Soberanía Digital', 'Baja Latencia Edge', 'Cumplimiento Local'].map((tag, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, borderColor: color, boxShadow: `0 4px 12px ${hexToRgba(color, 0.12)}` }}
            style={{ 
              fontSize: 10, 
              fontWeight: 800, 
              padding: '10px 8px', 
              borderRadius: 12, 
              background: hexToRgba(color, 0.15), 
              color: '#991b1b', 
              border: `1.5px solid ${hexToRgba(color, 0.35)}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              cursor: 'default',
              minHeight: 40,
              boxShadow: `0 2px 4px ${hexToRgba(color, 0.02)}`,
              transition: 'all 0.2s ease-in-out'
            }}
          >
            {tag}
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', marginTop: 'auto', padding: '0 20px 20px' }}>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`, color: '#111827', border: 'none', borderRadius: 8, padding: '12px 16px', 
            fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: '100%', justifyContent: 'center', 
            transition: 'all 0.2s', boxShadow: `0 4px 12px ${hexToRgba(color, 0.2)}`
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 16px ${hexToRgba(color, 0.3)}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(color, 0.2)}`; }}
        >
          Cotiza ahora &rarr;
        </button>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTE: SocCard (CyberPeace SOC) ---
function SocCard({ onOpenInfo }: { onOpenInfo?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCerts, setShowCerts] = useState(false);
  const color = '#60a5fa';
  const theme = getPastelTheme(color);

  const handleAgendarCita = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: Math.max(20, rect.top - 140) });
    } else {
      window.open("https://calendly.com/mayiainteligencia/consulta-mayia", '_blank');
    }
    setMenuOpen(false);
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMenuOpen(false); }}
      style={{ 
        borderRadius: 24, 
        border: `2px solid ${theme.border}`, 
        boxShadow: 'none', 
        background: theme.bg,
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: 90 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: '#ffffff', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6 }}>
            <img src="/assets/images/productos/cyberpeaceLogo.webp" alt="CyberPeace SOC" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>SOC IA CyberPeace</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#4B5563', fontWeight: 600 }}>Ciberseguridad 360°</p>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, transition: 'all 0.2s' }}
          >
            <MoreVertical size={20} />
          </button>
          
          {menuOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 30 }} onClick={() => setMenuOpen(false)} />
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, width: 'max-content', minWidth: 280 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = hexToRgba(color, 0.08)}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Conversa con el Agentico de SOC IA CyberPeace
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Video Area */}
      <div style={{ 
        margin: '0 20px 16px', 
        borderRadius: 16, 
        overflow: 'hidden', 
        height: 180, 
        position: 'relative', 
        background: '#F9FAFB',
        border: `2px solid ${isHovered ? color : 'transparent'}`,
        boxShadow: isHovered ? `0 0 20px ${hexToRgba(color, 0.4)}, inset 0 0 20px ${hexToRgba(color, 0.05)}` : 'none',
        transition: 'all 0.3s ease'
      }}>
        <LazyVideo 
            autoPlay loop muted playsInline preload="metadata"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            videoSrc="/assets/images/productos/cyberpeaceVid.webm"
            accentColor={color}
        />
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', flexDirection: 'column', gap: 6, maxWidth: '80%', zIndex: 5 }}>
           {["Cacería de Amenazas", "Inteligencia de Amenazas", "Evaluación de Riesgos", "Estrategia y Gobierno de Ciberseguridad", "Gestión de Respuestas y Contención de Incidentes"].map((f, i) => (
             <span key={i} style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(4px)', color: '#1e3a8a', fontSize: 8, fontWeight: 800, padding: '4px 8px', borderRadius: 6, border: `1.5px solid ${color}`, letterSpacing: '0.04em', width: 'fit-content' }}>{f}</span>
           ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 20px 16px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#111827' }}>FIRST</p>
          <p style={{ margin: 0, fontSize: 10, color: '#4B5563', fontWeight: 600 }}>Miembro</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#1e3a8a' }}>ISO 27001</p>
          <p style={{ margin: 0, fontSize: 10, color: '#4B5563', fontWeight: 600 }}>Seguridad</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#1e3a8a' }}>ISO 42001</p>
          <p style={{ margin: 0, fontSize: 10, color: '#4B5563', fontWeight: 600 }}>IA</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#22c55e' }}>24/7</p>
          <p style={{ margin: 0, fontSize: 10, color: '#4B5563', fontWeight: 600 }}>Monitoreo</p>
        </div>
      </div>

      {/* Certificaciones adicionales */}
      <div style={{ padding: '0 20px 16px' }}>
        <button
          onClick={() => setShowCerts(!showCerts)}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px',
            borderRadius: 12, border: '1px solid #E5E7EB', background: '#F3F4F6', color: '#4B5563',
            fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s'
          }}
        >
          <span>Certificaciones Adicionales</span>
          <span style={{ transform: showCerts ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▼</span>
        </button>

        {showCerts && (
          <div style={{
            background: 'linear-gradient(135deg, #F9FAFB, #F3F4F6)', borderRadius: 12, padding: 12, marginTop: 8,
            border: '1px solid #E5E7EB', display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center'
          }}>
            {['ISO 27034', 'ISO 27017', 'ISO 9001', 'ISO 37001', 'ISO 27018'].map(cert => (
              <span key={cert} style={{ fontSize: 9, fontWeight: 700, padding: '4px 8px', borderRadius: 99, background: hexToRgba(color, 0.15), color: '#1e3a8a', border: `1px solid ${hexToRgba(color, 0.3)}` }}>
                {cert}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '20px 20px 20px', marginTop: 'auto' }}>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`, color: '#111827', border: 'none', borderRadius: 8, padding: '10px 0', fontSize: 13, fontWeight: 700, 
            display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', flex: 1, justifyContent: 'center', transition: 'all 0.2s',
            boxShadow: `0 4px 12px ${hexToRgba(color, 0.2)}`
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 16px ${hexToRgba(color, 0.3)}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(color, 0.2)}`; }}
        >
          Proteger ahora
        </button>
        <button 
          onClick={onOpenInfo}
          style={{ 
            background: '#F3F4F6', color: '#374151', border: '1px solid #D1D5DB', borderRadius: 8, padding: '10px 0', fontSize: 13, fontWeight: 600, 
            display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', flex: 1, justifyContent: 'center', transition: 'all 0.2s' 
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#E5E7EB'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F3F4F6'; }}
        >
          Conocer más &rarr;
        </button>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTE: MayiaCard (MAYiA Lake / IA para Empresas) ---
function MayiaCard({ onOpenInfo }: { onOpenInfo?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const color = '#bef264';
  const theme = getPastelTheme(color);
  const videoRef = useRef<HTMLVideoElement>(null);
  const jaguarVideoRef = useRef<HTMLVideoElement>(null);

  const handleAgendarCita = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: Math.max(20, rect.top - 140) });
    } else {
      window.open("https://calendly.com/mayiainteligencia/consulta-mayia", '_blank');
    }
    setMenuOpen(false);
  };

  const handleMasInformacion = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onOpenInfo) {
      onOpenInfo();
    } else {
      setShowInfoModal(true);
    }
    setMenuOpen(false);
  };

  // Reproducir videos automáticamente - OPTIMIZADO
  useEffect(() => {
    const playVideos = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
        if (jaguarVideoRef.current) {
          await jaguarVideoRef.current.play();
        }
      } catch (error) {
        console.log("Autoplay requiere interacción del usuario");
      }
    };
    
    playVideos();
    
    return () => {
      if (videoRef.current) videoRef.current.pause();
      if (jaguarVideoRef.current) jaguarVideoRef.current.pause();
    };
  }, []);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMenuOpen(false); }}
      style={{
        borderRadius: 24, 
        border: `2px solid ${theme.border}`,
        boxShadow: 'none',
        background: theme.bg,
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between', height: 90 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1.5px solid ${color}` }}>
            <img src={mayiaLakeLogo} alt="MAYiA Lakehouse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827', display: 'flex', alignItems: 'center', gap: 4 }}>
              <img src={logoMaia} alt="MAYiA" style={{ height: '15px', objectFit: 'contain' }} /> Lakehouse
            </h3>
            <p style={{ margin: 0, fontSize: 12, color: '#4B5563', fontWeight: 600 }}>Prepara tus datos para la IA</p>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, transition: 'all 0.2s' }}
          >
            <MoreVertical size={20} />
          </button>
          
          {menuOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 30 }} onClick={() => setMenuOpen(false)} />
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, width: 'max-content', minWidth: 280 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(164,217,85,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Conversa con el Agentico de MAYiA Lakehouse
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Video Area */}
      <div style={{ 
        margin: '0 20px 16px', 
        borderRadius: 16, 
        overflow: 'hidden', 
        height: 180, 
        position: 'relative', 
        background: '#F9FAFB',
        border: `2px solid ${isHovered ? color : 'transparent'}`,
        boxShadow: isHovered ? `0 0 20px ${hexToRgba(color, 0.4)}, inset 0 0 20px ${hexToRgba(color, 0.05)}` : 'none',
        transition: 'all 0.3s ease'
      }}>
        <LazyVideo 
          ref={videoRef}
          autoPlay loop muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          videoSrc={ajoloteVideo}
          accentColor={color}
        />
        {/* Overlays en el video removidos */}
      </div>

      {/* Diagrama de flujo de datos - Cuadrícula Justificada y Ordenada */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr auto 1fr auto 1fr', 
        gap: '10px 6px', 
        margin: '0 20px 16px',
        alignItems: 'center',
        background: 'transparent'
      }}>
        {[
          ['Ingesta', 'Recolección', 'Almacenamiento'],
          ['Cómputo', 'Consumo', 'Linaje']
        ].map((row, rIdx) => (
          <Fragment key={rIdx}>
            {row.map((txt, idx) => (
              <Fragment key={txt}>
                <div style={{ 
                  background: '#111827', 
                  color: '#ffffff', 
                  borderRadius: 6, 
                  padding: '6px 4px', 
                  fontSize: 8.5, 
                  fontWeight: 800, 
                  textAlign: 'center', 
                  letterSpacing: '0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
                }}>
                  {txt}
                </div>
                {idx < 2 ? (
                  <span style={{ 
                    color: color, 
                    fontWeight: 900, 
                    fontSize: 12,
                    userSelect: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    →
                  </span>
                ) : null}
              </Fragment>
            ))}
          </Fragment>
        ))}
        {/* Último elemento centrado ocupando toda la fila */}
        <div style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <div style={{ 
            background: '#111827', 
            color: '#ffffff', 
            borderRadius: 6, 
            padding: '6px 16px', 
            fontSize: 8.5, 
            fontWeight: 800, 
            textAlign: 'center', 
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1.1,
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
          }}>
            Calidad de Datos
          </div>
        </div>
      </div>

      {/* Descripción */}
      <p style={{ 
        fontSize: 13, 
        color: '#4B5563', 
        lineHeight: 1.5, 
        margin: '0 20px 20px', 
        fontWeight: 500,
        textAlign: 'justify'
      }}>
        Elimina los silos, unifica tus datos, obtén información estratégica en tiempo real y potencia tu IA empresarial y agéntica.
        <br /><br />
        Conoce el servicio de nuestros <strong>Squads</strong> de especialistas MAYIA, vamos a tu empresa y te apoyamos a preparar tu datos para la IA.
      </p>

      {/* Botones de acción */}
      <div style={{ display: 'flex', gap: 8, padding: '0 20px 20px', marginTop: 'auto' }}>
        <button 
          onClick={handleMasInformacion}
          style={{ 
            background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`, 
            color: '#111827', 
            border: 'none', 
            borderRadius: 8, 
            padding: '10px 16px', 
            fontSize: 13, 
            fontWeight: 700, 
            cursor: 'pointer', 
            flex: 1, 
            justifyContent: 'center', 
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'all 0.2s',
            boxShadow: `0 4px 12px ${hexToRgba(color, 0.2)}`
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 16px ${hexToRgba(color, 0.4)}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(color, 0.2)}`; }}
        >
          Conoce más
        </button>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`, 
            color: '#111827', 
            border: 'none', 
            borderRadius: 8, 
            padding: '10px 16px', 
            fontSize: 13, 
            fontWeight: 700, 
            cursor: 'pointer', 
            flex: 1, 
            justifyContent: 'center', 
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'all 0.2s',
            boxShadow: `0 4px 12px ${hexToRgba(color, 0.2)}`
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 16px ${hexToRgba(color, 0.4)}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(color, 0.2)}`; }}
        >
          Agenda tu cita
        </button>
      </div>


    </div>
  );
}

// --- SUB-COMPONENTE: SquadsMayiaCard (Squads / Ingenieros IA) ---
function SquadsMayiaCard({ onOpenInfo }: { onOpenInfo?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const color = '#2dd4bf';
  const theme = getPastelTheme(color);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleAgendarCita = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: Math.max(20, rect.top - 140) });
    } else {
      window.open("https://calendly.com/mayiainteligencia/consulta-mayia", '_blank');
    }
    setMenuOpen(false);
  };

  const handleMasInformacion = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onOpenInfo) {
      onOpenInfo();
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const playVideos = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.log("Autoplay requiere interacción del usuario");
      }
    };
    playVideos();
    return () => {
      if (videoRef.current) videoRef.current.pause();
    };
  }, []);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMenuOpen(false); }}
      style={{
        borderRadius: 24, 
        border: `2px solid ${theme.border}`,
        boxShadow: 'none',
        background: theme.bg,
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between', height: 90 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1.5px solid ${color}` }}>
            <Users size={22} color={color} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>Squads MAYiA</h3>
            <p style={{ margin: 0, fontSize: 11, color: '#4B5563', fontWeight: 600 }}>Consultores e Ingenieros de IA</p>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, transition: 'all 0.2s' }}
          >
            <MoreVertical size={20} />
          </button>
          
          {menuOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 30 }} onClick={() => setMenuOpen(false)} />
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, width: 'max-content', minWidth: 280 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,184,166,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Conversa con el Agentico de Squads MAYiA
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Video Area */}
      <div style={{ 
        margin: '0 20px 16px', 
        borderRadius: 16, 
        overflow: 'hidden', 
        height: 180, 
        position: 'relative', 
        background: '#F9FAFB',
        border: `2px solid ${isHovered ? color : 'transparent'}`,
        boxShadow: isHovered ? `0 0 20px ${hexToRgba(color, 0.4)}, inset 0 0 20px ${hexToRgba(color, 0.05)}` : 'none',
        transition: 'all 0.3s ease'
      }}>
        <LazyVideo 
          ref={videoRef}
          autoPlay loop muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          videoSrc={squadVideo}
          accentColor={color}
        />
        {/* Animated Badge Container - Top Left */}
        <div style={{ 
          position: 'absolute', 
          top: 6, 
          left: 6, 
          zIndex: 5 
        }}>
          <motion.div
            animate={{
              borderColor: [color, hexToRgba(color, 0.8), color],
              boxShadow: [
                `0 0 4px ${hexToRgba(color, 0.3)}`,
                `0 0 8px ${hexToRgba(color, 0.5)}`,
                `0 0 4px ${hexToRgba(color, 0.3)}`
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              background: 'rgba(10, 10, 20, 0.85)', 
              backdropFilter: 'blur(4px)', 
              color: color, 
              fontSize: 7.5, 
              fontWeight: 800, 
              padding: '3px 6px', 
              borderRadius: 6, 
              borderWidth: 1,
              borderStyle: 'solid',
              letterSpacing: '0.04em',
            }}
          >
            Forward-Deployed Engineers
          </motion.div>
        </div>

        {/* Animated Badge Container - Bottom Left */}
        <div style={{ 
          position: 'absolute', 
          bottom: 12, 
          left: 12, 
          zIndex: 5 
        }}>
          <motion.div
            animate={{
              borderColor: [color, hexToRgba(color, 0.8), color],
              boxShadow: [
                `0 0 8px ${hexToRgba(color, 0.4)}`,
                `0 0 16px ${hexToRgba(color, 0.6)}`,
                `0 0 8px ${hexToRgba(color, 0.4)}`
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              background: 'rgba(10, 10, 20, 0.85)', 
              backdropFilter: 'blur(4px)', 
              color: color, 
              fontSize: 9, 
              fontWeight: 800, 
              padding: '6px 12px', 
              borderRadius: 8, 
              borderWidth: 1.5,
              borderStyle: 'solid',
              letterSpacing: '0.06em',
            }}
          >
            Human as a Service
          </motion.div>
        </div>
      </div>

      {/* Descripción */}
      <p style={{ 
        fontSize: 13, 
        color: '#4B5563', 
        lineHeight: 1.5, 
        margin: '0 20px 20px', 
        fontWeight: 500,
        textAlign: 'justify'
      }}>
        Nuestros expertos se integran temporalmente en tu empresa para desarrollar soluciones a medida y acelerar la implementación segura de tu business workflow y agentes inteligentes.
      </p>

      {/* Grid 2x2 Animado */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, margin: '0 20px 20px' }}>
        {[
          { text: "Infraestructura / Nube\nDRP / Data Center", color: "#1e3a8a", bg: "rgba(147,197,253,0.15)", borderColor: "rgba(147,197,253,0.4)" },
          { text: "Análisis de Datos\nInteligencia Artificial", color: "#0d9488", bg: "rgba(94,234,212,0.15)", borderColor: "rgba(94,234,212,0.4)" },
          { text: "Ciberseguridad y Gobernanza", color: "#991b1b", bg: "rgba(252,165,165,0.15)", borderColor: "rgba(252,165,165,0.4)" },
          { text: "Academia de IA para Grupos de Trabajo", color: "#9a3412", bg: "rgba(253,186,116,0.15)", borderColor: "rgba(253,186,116,0.4)" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, borderColor: item.borderColor.replace('0.4', '1'), boxShadow: `0 4px 12px ${hexToRgba(item.color, 0.15)}` }}
            style={{
              background: item.bg,
              border: `1.5px solid ${item.borderColor}`,
              borderRadius: 12,
              padding: '12px 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 9,
              fontWeight: 800,
              color: item.color,
              minHeight: 52,
              whiteSpace: 'pre-line',
              lineHeight: 1.3,
              cursor: 'default',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Botones de acción */}
      <div style={{ display: 'flex', gap: 8, padding: '0 20px 20px', marginTop: 'auto' }}>
        <button 
          onClick={handleMasInformacion}
          style={{ 
            background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`, 
            color: '#111827', 
            border: 'none', 
            borderRadius: 8, 
            padding: '10px 16px', 
            fontSize: 13, 
            fontWeight: 700, 
            cursor: 'pointer', 
            flex: 1, 
            justifyContent: 'center', 
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'all 0.2s',
            boxShadow: `0 4px 12px ${hexToRgba(color, 0.2)}`
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 16px ${hexToRgba(color, 0.4)}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(color, 0.2)}`; }}
        >
          Conoce más
        </button>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`, 
            color: '#111827', 
            border: 'none', 
            borderRadius: 8, 
            padding: '10px 16px', 
            fontSize: 13, 
            fontWeight: 700, 
            cursor: 'pointer', 
            flex: 1, 
            justifyContent: 'center', 
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'all 0.2s',
            boxShadow: `0 4px 12px ${hexToRgba(color, 0.2)}`
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 16px ${hexToRgba(color, 0.4)}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(color, 0.2)}`; }}
        >
          Agenda tu cita
        </button>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTE: IAEmpresarialCard ---
function IAEmpresarialCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const BLUE = '#2563eb';
  const color = '#60a5fa';
  const theme = getPastelTheme(color);

  const handleAgendarCita = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: Math.max(20, rect.top - 140) });
    } else {
      window.open('https://calendly.com/mayiainteligencia/consulta-mayia', '_blank');
    }
    setMenuOpen(false);
  };

  const features = [
    { icon: TrendingUp, bg: 'linear-gradient(135deg,#7c3aed,#6d28d9)', title: 'Estrategia ROI' },
    { icon: Shield,     bg: 'linear-gradient(135deg,#059669,#047857)', title: 'Tecnología segura' },
    { icon: Users,      bg: 'linear-gradient(135deg,#2563eb,#1d4ed8)', title: 'Squads de IA' },
    { icon: BookOpen,   bg: 'linear-gradient(135deg,#ea580c,#c2410c)', title: 'Adopción & Academia' },
  ];

  const topServices = [
    { icon: Link2, label: 'Interoperabilidad', color: BLUE },
    { icon: Lock,  label: 'IA Privada',        color: BLUE },
    { icon: Bot,   label: 'Agentes IA',        color: BLUE },
    { icon: Zap,   label: 'Automatización IA', color: BLUE },
  ];

  const subServices = [
    { icon: Cloud,        label: 'Infra propia' },
    { icon: Database,     label: 'MAYIA Lake' },
    { icon: Shield,       label: 'CiberSeg.' },
    { icon: FlaskConical, label: 'Labs IA' },
    { icon: Users,        label: 'Squads' },
    { icon: MonitorCheck, label: 'Monitoreo' },
    { icon: GraduationCap,label: 'Academia' },
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMenuOpen(false); }}
      style={{
        borderRadius: 24,
        padding: 24,
        border: `2px solid ${theme.border}`,
        boxShadow: 'none',
        background: theme.bg,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header — mismo patrón que StandardCard */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 50, marginBottom: 16, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1, minWidth: 0 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: hexToRgba(color, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Briefcase size={22} color="#1e3a8a" />
          </div>
          <div style={{ minWidth: 0 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: '#111827', margin: 0, lineHeight: 1.2 }}>Desarrollo IA Empresarial</h3>
            <p style={{ margin: 0, fontSize: 10, color: '#4B5563', fontWeight: 500, marginTop: 2, lineHeight: 1.2 }}>Automatizacion con IA</p>
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 10, flexShrink: 0 }}>
          <button
            onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, transition: 'all 0.2s' }}
          >
            <MoreVertical size={20} />
          </button>
          {menuOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 30 }} onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }} />
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, width: 'max-content', minWidth: 280 }}>
                <button
                  onClick={(e) => { handleAgendarCita(e); setMenuOpen(false); }}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,99,235,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Conversa con el Agentico de Desarrollo IA Empresarial
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Video — mismo tamaño que todos los cards: height 180 */}
      <div style={{
        borderRadius: 16,
        overflow: 'hidden',
        height: 180,
        position: 'relative',
        background: '#F9FAFB',
        marginBottom: 16,
        border: `2px solid ${isHovered ? color : 'transparent'}`,
        boxShadow: isHovered ? `0 0 20px ${hexToRgba(color, 0.40)}, inset 0 0 20px ${hexToRgba(color, 0.05)}` : 'none',
        transition: 'all 0.3s ease'
      }}>
        <video
          autoPlay loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          src="/assets/images/productos/prediccionVent.webm"
        />
        {/* Gradiente lateral suave para legibilidad de pills */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.15) 42%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none'
        }} />
        {/* 4 feature pills — columna izquierda sobre el video */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          gap: 5, padding: '10px 8px 10px 10px', width: 148
        }}>
          {features.map((f, i) => {
            const IconComp = f.icon;
            const active = hoveredFeature === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.28 }}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '4px 7px', borderRadius: 7,
                  background: active ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.07)',
                  border: `1px solid ${active ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.12)'}`,
                  backdropFilter: 'blur(6px)',
                  transition: 'all 0.18s ease',
                  cursor: 'default'
                }}
              >
                <div style={{
                  width: 20, height: 20, borderRadius: '50%',
                  background: f.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  boxShadow: '0 1px 5px rgba(0,0,0,0.28)'
                }}>
                  <IconComp size={10} color="#ffffff" />
                </div>
                <p style={{ margin: 0, fontSize: 8.5, fontWeight: 700, color: '#ffffff', lineHeight: 1.2, opacity: active ? 1 : 0.85 }}>{f.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Descripción */}
      <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.5, margin: 0, marginBottom: 16, fontWeight: 500, textAlign: 'justify' }}>
        Transformamos empresas en organizaciones inteligentes mediante <strong style={{ color: BLUE }}>Business Workflows</strong> con <strong style={{ color: BLUE }}>Gen-AI, Computer Vision, Robotics</strong> y <strong style={{ color: BLUE }}>Agentes Autónomos</strong>, integrando estrategia, datos, procesos y ciberseguridad para generar crecimiento, eficiencia y ventaja competitiva.
      </p>

      {/* Ecosistema de servicios */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>

        {/* 4 servicios principales */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
          {topServices.map((svc, i) => {
            const IconComp = svc.icon;
            const active = hoveredService === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  background: active ? `${svc.color}10` : '#F8FAFF',
                  border: `1.5px solid ${active ? svc.color : '#E5E7EB'}`,
                  borderRadius: 10, padding: '7px 4px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  transition: 'all 0.2s ease', cursor: 'default',
                  boxShadow: active ? `0 3px 10px ${svc.color}22` : 'none'
                }}
              >
                <div style={{ width: 28, height: 28, borderRadius: 8, background: `${svc.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconComp size={15} color={svc.color} />
                </div>
                <p style={{ margin: 0, fontSize: 8, fontWeight: 700, color: svc.color, textAlign: 'center', lineHeight: 1.2 }}>{svc.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 7 sub-servicios */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, paddingTop: 8, borderTop: '1px solid #E5E7EB' }}>
          {subServices.map((sub, i) => {
            const IconComp = sub.icon;
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: hexToRgba(color, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconComp size={12} color={BLUE} />
                </div>
                <p style={{ margin: 0, fontSize: 7, fontWeight: 500, color: '#6B7280', textAlign: 'center', lineHeight: 1.2 }}>{sub.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA — mismo patrón que StandardCard: marginTop auto */}
      <div style={{ marginTop: 'auto' }}>
        <motion.div
          onClick={handleAgendarCita}
          style={{
            background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`,
            borderRadius: 10, padding: '10px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
            cursor: 'pointer',
            boxShadow: `0 4px 12px ${hexToRgba(color, 0.2)}`,
          }}
          whileHover={{ scale: 1.01, boxShadow: `0 6px 16px ${hexToRgba(color, 0.4)}` }}
          whileTap={{ scale: 0.99 }}
        >
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <MessageSquare size={15} color="#111827" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 800, color: '#111827', lineHeight: 1.2 }}>Conversemos sobre el potencial de la IA en tu empresa →</p>
            <p style={{ margin: 0, marginTop: 2, fontSize: 8.5, color: '#374151', fontWeight: 600 }}>Diagnóstico sin costo &nbsp;|&nbsp; Enfoque en ROI &nbsp;|&nbsp; Casos de alto impacto</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}




function RoiCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConsultorVideo, setShowConsultorVideo] = useState(false);
  const color = '#fb923c';
  const theme = getPastelTheme(color);

  const handleAgendarCita = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: Math.max(20, rect.top - 140) });
    } else {
      window.open("https://calendly.com/mayiainteligencia/consulta-mayia", '_blank');
    }
    setMenuOpen(false);
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMenuOpen(false); }}
      style={{
        borderRadius: 24, 
        border: `2px solid ${theme.border}`,
        boxShadow: 'none',
        background: theme.bg,
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between', height: 90 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ 
            width: 44, 
            height: 44, 
            borderRadius: 10, 
            background: hexToRgba(color, 0.15), 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexShrink: 0 
          }}>
            <Wrench size={22} color="#ea580c" />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827', lineHeight: 1.2 }}>ROI Discovery</h3>
            <p style={{ margin: 0, fontSize: 11, color: '#4B5563', fontWeight: 600, letterSpacing: '0.01em', marginTop: 2 }}>Descubre el valor que la IA puede generar en tu empresa</p>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, transition: 'all 0.2s' }}
          >
            <MoreVertical size={20} />
          </button>
          
          {menuOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 30 }} onClick={() => setMenuOpen(false)} />
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, width: 'max-content', minWidth: 280 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = hexToRgba(color, 0.08)}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Conversa con el Agentico de ROI Discovery
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Video Area */}
      <div style={{ 
        margin: '0 20px 16px', 
        borderRadius: 16, 
        overflow: 'hidden', 
        height: 180, 
        position: 'relative', 
        background: '#F9FAFB',
        border: `2px solid ${isHovered ? color : 'transparent'}`,
        boxShadow: isHovered ? `0 0 20px ${hexToRgba(color, 0.25)}` : 'none',
        transition: 'all 0.3s ease'
      }}>
        <LazyVideo 
          autoPlay loop muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          videoSrc={roiVideo}
          accentColor={color}
        />

        {/* Video Overlay with Text & Calendly Button */}
        <div style={{
          position: 'absolute',
          bottom: 6,
          right: 6,
          width: 125,
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(6px)',
          borderRadius: 8,
          padding: '6px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: 5,
          border: `1px solid ${hexToRgba(color, 0.35)}`,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          zIndex: 5
        }}>
          <span style={{
            fontSize: 7.5,
            fontWeight: 800,
            color: '#111827',
            lineHeight: 1.2,
            textAlign: 'center'
          }}>
            Conversemos sobre el valor que la IA puede generar en tu empresa
          </span>
          <button 
            onClick={handleAgendarCita}
            style={{
              background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`,
              color: '#111827',
              border: 'none',
              borderRadius: 4,
              padding: '4px 6px',
              fontSize: 7.5,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              transition: 'all 0.2s',
              width: '100%'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <Calendar size={8} /> Agendar Cita &rarr;
          </button>
        </div>
      </div>

      {/* Wrapper to distribute remaining space vertically */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Description */}
        <p style={{
          margin: '0 20px 16px',
          fontSize: 13,
          color: '#4B5563',
          lineHeight: 1.5,
          fontWeight: 500,
          textAlign: 'justify'
        }}>
          Analizamos tus procesos, costos y oportunidades para identificar dónde la IA puede generar mayor impacto. Te entregamos un ROI claro, cuantificado y alineado a tus objetivos estratégicos.
        </p>

        {/* 4 Small Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))', 
          gap: 8, 
          margin: '0 20px 20px' 
        }}>
          {[
            {
              title: "Valor Total de Oportunidad (TVO)",
              desc: "Identificamos y cuantificamos el valor económico potencial de cada iniciativa de IA antes de invertir.",
              icon: Target,
              color: '#1d4ed8',
              bg: 'rgba(29, 78, 216, 0.08)',
              borderColor: 'rgba(29, 78, 216, 0.15)'
            },
            {
              title: "ROI y Caso de Negocio",
              desc: "Construimos un caso financiero sólido que demuestra beneficios, costos, riesgos y retorno esperado.",
              icon: FileText,
              color: '#16a34a',
              bg: 'rgba(22, 163, 74, 0.08)',
              borderColor: 'rgba(22, 163, 74, 0.15)'
            },
            {
              title: "Priorización Estratégica",
              desc: "Comparamos y clasificamos proyectos de IA según su impacto en crecimiento, margen, flujo y ventaja competitiva.",
              icon: TrendingUp,
              color: '#9333ea',
              bg: 'rgba(147, 51, 234, 0.08)',
              borderColor: 'rgba(147, 51, 234, 0.15)'
            },
            {
              title: "Decisiones para Dirección",
              desc: "Proporcionamos información clara para que CEO, CFO, CIO y CTO tomen decisiones basadas en valor y no en supuestos.",
              icon: Users,
              color: '#ea580c',
              bg: 'rgba(234, 88, 12, 0.08)',
              borderColor: 'rgba(234, 88, 12, 0.15)'
            }
          ].map((subCard, index) => {
            const SubIcon = subCard.icon;
            return (
              <div 
                key={index}
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: 16,
                  padding: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.01)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: subCard.bg,
                    border: `1px solid ${subCard.borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <SubIcon size={14} color={subCard.color} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <h4 style={{
                      margin: 0,
                      fontSize: 8.5,
                      fontWeight: 800,
                      color: '#111827',
                      lineHeight: 1.1
                    }}>
                      {subCard.title}
                    </h4>
                    <div style={{
                      width: 12,
                      height: 1.5,
                      background: subCard.color,
                      borderRadius: 1
                    }} />
                  </div>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: 8,
                  color: '#4B5563',
                  lineHeight: 1.3,
                  fontWeight: 500,
                  textAlign: 'justify'
                }}>
                  {subCard.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ver video del consultor button */}
        <div style={{ display: 'flex', padding: '0 20px 20px', marginTop: 'auto' }}>
          <button 
            onClick={() => setShowConsultorVideo(true)}
            style={{
              background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`,
              color: '#111827',
              border: 'none',
              borderRadius: 8,
              padding: '12px 16px',
              fontSize: 13,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
              width: '100%',
              justifyContent: 'center',
              transition: 'all 0.2s',
              boxShadow: `0 4px 12px ${hexToRgba(color, 0.2)}`
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 16px ${hexToRgba(color, 0.3)}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(color, 0.2)}`; }}
          >
            Ver video del consultor &rarr;
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showConsultorVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
          onClick={() => setShowConsultorVideo(false)}
        >
          <div 
            style={{
              background: '#090d16',
              borderRadius: 24,
              maxWidth: 800,
              width: '100%',
              border: `2px solid ${color}`,
              boxShadow: `0 25px 50px -12px ${hexToRgba(color, 0.4)}`,
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: 18, fontWeight: 800 }}>Video del Consultor - ROI Discovery</h3>
              <button 
                onClick={() => setShowConsultorVideo(false)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: 24, background: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 360 }}>
              <video 
                controls 
                autoPlay
                style={{ width: '100%', borderRadius: 12, maxHeight: '60vh' }}
              >
                <source src="/assets/videos/consultorVideo.mp4" type="video/mp4" />
                Tu navegador no soporta reproducción de video.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- SUB-COMPONENTE: StandardCard (Tarjetas de Categoria Comunes) ---
function StandardCard({ 
  icon: Icon, 
  color, 
  bg, 
  title, 
  desc, 
  videoSrc, 
  stats,
  videoOverlay,
  children 
}: { 
  icon: any, 
  color: string, 
  bg: string, 
  title: string, 
  desc: string, 
  videoSrc?: string, 
  stats?: Array<{ value: string, label: string, color?: string }>,
  videoOverlay?: React.ReactNode,
  children?: React.ReactNode 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = getPastelTheme(color);

  const handleAgendarCita = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: Math.max(20, rect.top - 140) });
    } else {
      window.open("https://calendly.com/mayiainteligencia/consulta-mayia", '_blank');
    }
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMenuOpen(false); }}
      style={{ 
        borderRadius: 24, 
        padding: 24, 
        border: `2px solid ${theme.border}`, 
        boxShadow: 'none', 
        background: theme.bg,
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 50, marginBottom: 16, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon size={22} color={color} />
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: '#111827', margin: 0, lineHeight: 1.2 }}>{title}</h3>
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <button 
            onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, transition: 'all 0.2s' }}
          >
            <MoreVertical size={20} />
          </button>
          
          {menuOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 30 }} onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }} />
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, width: 'max-content', minWidth: 280 }}>
                <button 
                  onClick={(e) => { handleAgendarCita(e); setMenuOpen(false); }}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = hexToRgba(color, 0.08)}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Conversa con el Agentico de {title}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {videoSrc && (
        <div style={{ 
          borderRadius: 16, 
          overflow: 'hidden', 
          height: 180, 
          position: 'relative', 
          background: '#F9FAFB', 
          marginBottom: 16,
          border: `2px solid ${isHovered ? color : 'transparent'}`,
          boxShadow: isHovered ? `0 0 20px ${color}40, inset 0 0 20px ${color}05` : 'none',
          transition: 'all 0.3s ease'
        }}>
          <LazyVideo 
            autoPlay loop muted playsInline preload="metadata"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            videoSrc={videoSrc}
            accentColor={color}
          />
          {videoOverlay && videoOverlay}
        </div>
      )}

      <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5, margin: 0, marginBottom: 20, fontWeight: 500, textAlign: 'justify' }}>
        {desc}
      </p>

      {stats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 20 }}>
          {stats.map((s, idx) => (
            <div key={idx} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: '10px 8px', 
              background: 'linear-gradient(135deg, #F9FAFB, #F3F4F6)', 
              border: '1px solid rgba(0,0,0,0.06)', 
              borderRadius: 12,
              lineHeight: 1.2
            }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: s.color || color, textAlign: 'center' }}>{s.value}</span>
              <span style={{ fontSize: 8, fontWeight: 600, color: '#6B7280', textAlign: 'center', marginTop: 3 }}>{s.label}</span>
            </div>
          ))}
        </div>
      )}

      {children && <div style={{ marginBottom: 16 }}>{children}</div>}

      <div style={{ display: 'flex', marginTop: 'auto', gap: 8 }}>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`, 
            color: '#111827', 
            border: 'none', 
            borderRadius: 8, 
            padding: '12px 16px', 
            fontSize: 13, 
            fontWeight: 700, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 8, 
            cursor: 'pointer', 
            flex: 1, 
            justifyContent: 'center', 
            transition: 'all 0.2s',
            boxShadow: `0 4px 12px ${hexToRgba(color, 0.2)}`
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 16px ${hexToRgba(color, 0.35)}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(color, 0.2)}`; }}
        >
          Conocer más &rarr;
        </button>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTE: AcademiaCard (Capacitación) ---
function AcademiaCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursosOpen, setCursosOpen] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const color = '#fb923c';
  const theme = getPastelTheme(color);

  const handleAgendarCita = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: Math.max(20, rect.top - 140) });
    } else {
      window.open("https://calendly.com/mayiainteligencia/consulta-mayia", '_blank');
    }
    setMenuOpen(false);
  };

  const handleMasInformacion = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowInfoModal(true);
    setMenuOpen(false);
  };

  const cursos = [
    // Gestión y Liderazgo
    { titulo: "Fundamentos del Prompting", nivel: "Principiante", horas: "4h", categoria: "Gestión" },
    { titulo: "IA para Trabajo Inteligente", nivel: "Intermedio", horas: "25h", categoria: "Gestión" },
    { titulo: "Comunicación Efectiva en Equipo", nivel: "Intermedio", horas: "10h", categoria: "Gestión" },
    { titulo: "Priorización y Delegación", nivel: "Intermedio", horas: "10h", categoria: "Gestión" },
    { titulo: "IA para Gerentes", nivel: "Avanzado", horas: "30h", categoria: "Gestión" },
    { titulo: "Gestión del Cambio", nivel: "Avanzado", horas: "20h", categoria: "Gestión" },
    { titulo: "Toma de Decisiones Estratégicas", nivel: "Avanzado", horas: "15h", categoria: "Gestión" },
    { titulo: "Optimización de Procesos", nivel: "Avanzado", horas: "25h", categoria: "Gestión" },
    { titulo: "Desarrollo de Talento Humano", nivel: "Avanzado", horas: "20h", categoria: "Gestión" },
    
    // Desarrollo y Programación
    { titulo: "Programación Asistida por IA", nivel: "Intermedio", horas: "30h", categoria: "Desarrollo" },
    { titulo: "Django REST Framework", nivel: "Avanzado", horas: "40h", categoria: "Desarrollo" },
    { titulo: "Python Fundamentos", nivel: "Principiante", horas: "35h", categoria: "Desarrollo" },
    { titulo: "Django Web Development", nivel: "Intermedio", horas: "45h", categoria: "Desarrollo" },
    { titulo: "Docker para Python", nivel: "Intermedio", horas: "20h", categoria: "Desarrollo" },
    { titulo: "Fundamentos de LLMs", nivel: "Avanzado", horas: "50h", categoria: "Desarrollo" },
    { titulo: "Flask Web Apps", nivel: "Intermedio", horas: "30h", categoria: "Desarrollo" },
    
    // Bases de Datos
    { titulo: "SQL Básico", nivel: "Principiante", horas: "15h", categoria: "Datos" },
    { titulo: "SQL Avanzado", nivel: "Avanzado", horas: "25h", categoria: "Datos" },
    
    // Machine Learning y Análisis
    { titulo: "Machine Learning Fundamentos", nivel: "Intermedio", horas: "40h", categoria: "ML & AI" },
    { titulo: "Computer Vision", nivel: "Avanzado", horas: "45h", categoria: "ML & AI" },
    { titulo: "Tableau Visualización", nivel: "Intermedio", horas: "20h", categoria: "ML & AI" },
    { titulo: "Data Wrangling", nivel: "Intermedio", horas: "25h", categoria: "ML & AI" },
    { titulo: "Álgebra Lineal", nivel: "Avanzado", horas: "30h", categoria: "ML & AI" },
    { titulo: "ML para Textos", nivel: "Avanzado", horas: "35h", categoria: "ML & AI" },
    { titulo: "ML para Negocios", nivel: "Avanzado", horas: "30h", categoria: "ML & AI" },
    { titulo: "Métodos Numéricos en ML", nivel: "Avanzado", horas: "40h", categoria: "ML & AI" },
    { titulo: "Análisis Estadístico", nivel: "Intermedio", horas: "30h", categoria: "ML & AI" },
    { titulo: "Aprendizaje Supervisado", nivel: "Avanzado", horas: "45h", categoria: "ML & AI" },
    { titulo: "Python para Análisis", nivel: "Principiante", horas: "25h", categoria: "ML & AI" },
    { titulo: "Series Temporales", nivel: "Avanzado", horas: "35h", categoria: "ML & AI" },
    { titulo: "Aprendizaje No Supervisado", nivel: "Avanzado", horas: "40h", categoria: "ML & AI" },
    
    // Habilidades Blandas
    { titulo: "Habilidades Blandas", nivel: "Principiante", horas: "15h", categoria: "Soft Skills" }
  ];

  const opciones = [
    { id: 1, titulo: "IA para Empresas", descripcion: "Capacitación corporativa" },
    { id: 2, titulo: "IA para Profesionales", descripcion: "Cursos individuales" },
    { id: 3, titulo: "Alianzas y Gobiernos", descripcion: "Programas especiales" }
  ];

  const getNivelColor = (nivel: string) => {
    switch(nivel.toUpperCase()) {
      case 'PRINCIPIANTE': return { color: '#15803d', background: '#f0fdf4', border: '1px solid rgba(21,128,61,0.15)' };
      case 'INTERMEDIO': return { color: '#1d4ed8', background: '#eff6ff', border: '1px solid rgba(29,78,216,0.15)' };
      case 'AVANZADO': return { color: '#6b21a8', background: '#faf5ff', border: '1px solid rgba(107,33,168,0.15)' };
      default: return { color: '#4b5563', background: '#f9fafb', border: '1px solid rgba(75,85,99,0.15)' };
    }
  };

  const filteredCursos = useMemo(() => {
    if (selectedOption === 1) {
      return cursos.filter(c => c.categoria === "Gestión" || c.categoria === "Soft Skills");
    }
    if (selectedOption === 2) {
      return cursos.filter(c => c.categoria === "Desarrollo" || c.categoria === "Datos" || c.categoria === "ML & AI");
    }
    return cursos; // Option 3 or none: show all
  }, [selectedOption]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMenuOpen(false); }}
      style={{ 
        borderRadius: 24, 
        padding: 24, 
        border: `2px solid ${theme.border}`, 
        boxShadow: 'none', 
        background: theme.bg,
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 50, marginBottom: 16, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: hexToRgba(color, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <GraduationCap size={22} color={color} />
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <img src={academiaLogo} alt="Academia MAYiA" style={{ height: '32px', objectFit: 'contain', filter: 'none' }} />
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, transition: 'all 0.2s' }}
          >
            <MoreVertical size={20} />
          </button>
          
          {menuOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 30 }} onClick={() => setMenuOpen(false)} />
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, width: 'max-content', minWidth: 280 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(234,88,12,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Conversa con el Agentico de Academia MAYiA
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Video Area */}
      <div style={{ 
        borderRadius: 16, 
        overflow: 'hidden', 
        height: 180, 
        position: 'relative', 
        background: '#F9FAFB', 
        marginBottom: 16,
        border: `2px solid ${isHovered ? color : 'transparent'}`,
        boxShadow: isHovered ? `0 0 20px ${hexToRgba(color, 0.4)}, inset 0 0 20px ${hexToRgba(color, 0.05)}` : 'none',
        transition: 'all 0.3s ease'
      }}>
        <LazyVideo 
          autoPlay loop muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          videoSrc="/assets/images/productos/astronautaSaludo.webm"
          accentColor={color}
        />
        
        {/* Overlay gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', pointerEvents: 'none' }} />

        {/* Options Overlay Panel */}
        <div style={{
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 145,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          zIndex: 10
        }}>
          {opciones.map((opcion) => {
            const isSelected = selectedOption === opcion.id;
            return (
              <button
                key={opcion.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedOption(isSelected ? null : opcion.id);
                }}
                style={{
                  background: isSelected ? `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})` : 'rgba(255, 255, 255, 0.9)',
                  color: isSelected ? '#111827' : '#374151',
                  border: isSelected ? `1px solid ${color}` : '1px solid rgba(0,0,0,0.1)',
                  borderRadius: 8,
                  padding: '6px 8px',
                  fontSize: 8,
                  fontWeight: 800,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transform: isSelected ? 'scale(1.02)' : 'none'
                }}
              >
                <div style={{ paddingRight: 4, lineHeight: 1.1 }}>
                  <span>{opcion.titulo}</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 14,
                  height: 14,
                  background: isSelected ? '#FFFFFF' : color,
                  borderRadius: '50%',
                  color: isSelected ? color : '#FFFFFF',
                  flexShrink: 0,
                  marginLeft: 4,
                  fontSize: 8,
                  fontWeight: 'bold'
                }}>
                  →
                </div>
              </button>
            );
          })}
        </div>

        {/* Toggle Courses Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCursosOpen(!cursosOpen);
          }}
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`,
            color: '#111827',
            border: 'none',
            borderRadius: 20,
            padding: '6px 12px',
            fontSize: 10,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: `0 4px 10px ${hexToRgba(color, 0.3)}`,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            zIndex: 10,
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <BookOpen size={10} />
          <span style={{ marginRight: 4 }}>{cursosOpen ? 'Ocultar' : 'Ver'} {cursos.length} Cursos</span>
          <span style={{ transition: 'transform 0.2s', display: 'inline-block', transform: cursosOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
        </button>
      </div>

      {/* Dynamic Courses list (if open) */}
      {cursosOpen && (
        <div style={{
          background: '#F9FAFB',
          border: `1px solid ${hexToRgba(color, 0.2)}`,
          borderRadius: 16,
          padding: 12,
          maxHeight: 220,
          overflowY: 'auto',
          marginBottom: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          {filteredCursos.map((curso, idx) => {
            const colors = getNivelColor(curso.nivel);
            return (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 10,
                  padding: '10px 12px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <h4 style={{ margin: 0, fontSize: 12, fontWeight: 700, color: '#111827', lineHeight: 1.2 }}>
                    {curso.titulo}
                  </h4>
                  <span style={{ 
                    fontSize: 8, 
                    fontWeight: 700, 
                    color: colors.color, 
                    background: colors.background, 
                    border: colors.border,
                    borderRadius: 999, 
                    padding: '2px 6px',
                    whiteSpace: 'nowrap'
                  }}>
                    {curso.nivel}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 10, color: '#6B7280', fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    ⏱ {curso.horas}
                  </span>
                  <span style={{ color: '#E5E7EB' }}>|</span>
                  <span style={{ color: '#ea580c', fontWeight: 600 }}>{curso.categoria}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5, margin: '0 0 20px', fontWeight: 500, textAlign: 'justify' }}>
        Conoce nuestros 32 cursos de Inteligencia Artificial para equipos de trabajo de Negocios y Equipos Tech con Certificación.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
        {[
          { icon: BookOpen, value: '32', label: 'Cursos', color: '#ea580c' },
          { icon: Award, value: '6+', label: 'Certificaciones', color: '#ea580c' },
          { icon: Briefcase, value: 'B2B', label: 'IA para negocios', color: '#ea580c' },
          { icon: Users, value: 'Tech', label: 'IA para equipos', color: '#ea580c' },
        ].map((h, i) => (
          <div key={i} style={{ 
            display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', 
            borderRadius: 12, background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)' 
          }}>
            <h.icon size={18} color={h.color} style={{ flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#111827' }}>{h.value}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#6B7280' }}>{h.label}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
        <button
          onClick={handleAgendarCita}
          style={{
            flex: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '12px 12px', borderRadius: 8,
            background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`,
            color: '#111827', fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer',
            boxShadow: `0 4px 12px ${hexToRgba(color, 0.2)}`,
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 16px ${hexToRgba(color, 0.3)}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(color, 0.2)}`; }}
        >
          Cotizar cursos
        </button>
        <button
          onClick={handleAgendarCita}
          style={{
            flex: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '12px 12px', borderRadius: 8,
            background: '#F3F4F6', border: '1px solid #D1D5DB', cursor: 'pointer',
            color: '#374151', fontWeight: 600, fontSize: 13, textDecoration: 'none',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#E5E7EB'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = '#ea580c'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#D1D5DB'; }}
        >
          Revisar fechas
        </button>
      </div>

      {/* Info Modal */}
      {showInfoModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[99999] p-4" 
          onClick={() => setShowInfoModal(false)}
        >
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: 24,
              maxWidth: 600,
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '2px solid rgba(234, 88, 12, 0.3)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div style={{
              background: 'linear-gradient(to right, #ea580c, #f97316)',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'sticky',
              top: 0,
              zIndex: 10
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#060606', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1.5px solid #FFFFFF' }}>
                  <img src={academiaLogo} alt="Academia Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                </div>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: '#FFFFFF', margin: 0 }}>Academia MAYiA</h2>
                  <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>32 cursos de IA</p>
                </div>
              </div>
              <button 
                onClick={() => setShowInfoModal(false)}
                style={{
                  width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', cursor: 'pointer',
                  fontWeight: 'bold', fontSize: 16, transition: 'background 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              >
                ✕
              </button>
            </div>

            {/* Contenido del Modal */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ background: 'linear-gradient(135deg, rgba(234,88,12,0.05), rgba(249,115,22,0.05))', borderRadius: 12, padding: '16px', border: '1px solid rgba(234, 88, 12, 0.15)' }}>
                <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 700, color: '#ea580c' }}>Capacitación Especializada</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}>
                  Ofrecemos más de 32 cursos certificados en Inteligencia Artificial, desde fundamentos hasta implementaciones avanzadas.
                  Nuestros programas están diseñados para empresas y equipos técnicos que buscan dominar las últimas tecnologías en IA.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  {
                    title: 'Certificación Oficial',
                    text: 'Obtén certificados reconocidos al completar cada curso, validando tus habilidades ante la industria.'
                  },
                  {
                    title: '100% Online o Híbrido',
                    text: 'Aprende a tu propio ritmo con nuestra plataforma en línea o mediante talleres corporativos en vivo.'
                  },
                  {
                    title: 'Enfoque B2B y B2C',
                    text: 'Programas diseñados a la medida para la transformación de tu fuerza laboral o capacitación profesional.'
                  }
                ].map((feature, idx) => (
                  <div key={idx} style={{ background: '#F9FAFB', borderRadius: 12, padding: '16px', border: '1px solid rgba(234, 88, 12, 0.1)' }}>
                    <h3 style={{ margin: '0 0 6px', fontSize: 14, fontWeight: 700, color: '#ea580c' }}>{feature.title}</h3>
                    <p style={{ margin: 0, fontSize: 13, color: '#4B5563', lineHeight: 1.5 }}>{feature.text}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={(e) => {
                  setShowInfoModal(false);
                  handleAgendarCita(e);
                }}
                style={{ 
                  background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`, color: '#111827', border: 'none', borderRadius: 8, padding: '14px 16px', 
                  fontSize: 14, fontWeight: 700, cursor: 'pointer', width: '100%', textAlign: 'center', transition: 'all 0.2s',
                  boxShadow: `0 4px 12px ${hexToRgba(color, 0.3)}`, marginTop: 8
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 16px ${hexToRgba(color, 0.4)}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(color, 0.3)}`; }}
              >
                Agendar Cotización
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export default function EnterpriseDashboard({ onOpenMap, onOpenFlaiInfo, onOpenFabricaInfo, onOpenDiagnostico, onOpenLakehouseInfo, onOpenSquadsInfo }: { onOpenMap?: () => void, onOpenFlaiInfo?: () => void, onOpenFabricaInfo?: () => void, onOpenDiagnostico?: () => void, onOpenLakehouseInfo?: () => void, onOpenSquadsInfo?: () => void }) {
  const [activeTab, setActiveTab] = useState('Infraestructura');

  const Wrapper = ({ category, children }: { category: string, children: React.ReactNode }) => {
    const isMatch = activeTab === category;
    return (
      <motion.div
        layout
        initial={false}
        animate={{ 
          y: isMatch ? -6 : 0,
          boxShadow: isMatch ? '0 10px 35px rgba(164,217,85,0.2), 0 5px 15px rgba(164,217,85,0.15)' : 'none'
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        style={{
          position: 'relative',
          height: '100%',
          borderRadius: '24px',
          padding: isMatch ? '2px' : '0px',
          zIndex: isMatch ? 10 : 1,
          order: isMatch ? -1 : 0,
          overflow: isMatch ? 'hidden' : 'visible',
        }}
      >
        {isMatch && (
          <div style={{
            position: 'absolute',
            top: '-50%', left: '-50%', right: '-50%', bottom: '-50%',
            background: 'conic-gradient(from 0deg, rgba(164,217,85,0) 0%, #A4D955 25%, rgba(164,217,85,0) 50%, #A4D955 75%, rgba(164,217,85,0) 100%)',
            animation: 'spin 4s linear infinite',
            zIndex: 0,
            opacity: 0.9,
          }} />
        )}
        <div style={{
          position: 'relative',
          height: '100%',
          zIndex: 1,
          background: '#FFFFFF',
          borderRadius: isMatch ? '22px' : '24px',
          overflow: 'hidden'
        }}>
          {children}
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="enterprise-dashboard"
      style={{
        background: '#FFFFFF',
        padding: '32px 0 64px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      {/* Fondo blanco puro sin grid ni blobs */}

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '0 0 12px' }}>
              <h1 style={{ fontSize: 38, fontWeight: 300, color: '#111827', margin: 0, letterSpacing: '-0.5px' }}>
                Bienvenido a 
              </h1>
              <div 
                style={{
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  padding: '4px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img 
                  src={logoMaia} 
                  alt="MAYIA" 
                  style={{ height: '48px', objectFit: 'contain', position: 'relative', zIndex: 1 }} 
                />
              </div>
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 400, color: '#4B5563', margin: 0 }}>
              ¿Qué solución de IA necesitas implementar hoy?
            </h2>
          </div>
        </div>

        {/* Categories / Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: 12, 
          marginBottom: 32, 
          overflowX: 'auto', 
          whiteSpace: 'nowrap',
          paddingBottom: 8,
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <motion.button 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  width: 135,
                  height: 36,
                  borderRadius: 9999,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12.5, 
                  fontWeight: isActive ? 700 : 500, 
                  color: isActive ? '#111827' : '#4B5563', 
                  cursor: 'pointer', 
                  background: isActive ? '#A4D955' : '#FFFFFF',
                  border: `1px solid ${isActive ? '#A4D955' : '#E5E7EB'}`,
                  boxShadow: isActive ? '0 4px 10px rgba(164,217,85,0.2)' : 'none',
                  transition: 'color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                  outline: 'none',
                  flexShrink: 0,
                  fontFamily: "'Inter', system-ui, sans-serif"
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#F3F4F6';
                    e.currentTarget.style.color = '#111827';
                    e.currentTarget.style.borderColor = '#D1D5DB';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#4B5563';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>


        {/* Grid de Tarjetas */}
        <motion.div layout style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: 24 
        }}>
          
          {/* --- CATEGORIA: Infraestructura --- */}
          <Wrapper category="Infraestructura">
            <EdgenetCard onOpenMap={onOpenMap} onOpenFabricaInfo={onOpenFabricaInfo} onOpenDiagnostico={onOpenDiagnostico} />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <FlaiCard onOpenInfo={onOpenFlaiInfo} />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <SocCard onOpenInfo={() => alert('Sección de Más Información CyberPeace SOC en construcción.')} />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <StandardCard 
              icon={FlaskConical} 
              color="#4ade80" 
              bg="rgba(74,222,128,0.15)" 
              title="Laboratorios IA" 
              desc="Experimenta, valida y crea soluciones de inteligencia artificial antes de invertir a gran escala. Convierte ideas en prototipos funcionales y descubre nuevas oportunidades para tu negocio." 
            />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <RoiCard />
          </Wrapper>

          {/* --- CATEGORIA: Desarrollo --- */}
          <Wrapper category="Desarrollo">
            <MayiaCard onOpenInfo={onOpenLakehouseInfo} />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <SquadsMayiaCard onOpenInfo={onOpenSquadsInfo} />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <IAEmpresarialCard />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={GitBranch} 
              color="#c084fc" 
              bg="rgba(192,132,252,0.15)" 
              title="Desarrollo IA en Organigrama" 
              desc="Identifica qué áreas de tu empresa pueden ser potenciadas con IA. Desarrollamos empleados digitales inteligentes para transformar funciones, equipos y flujos de trabajo en todo tu organigrama." 
              videoSrc="/assets/images/robotAbajo.webm"
              stats={[
                { value: "5+", label: "Roles de Agentes" },
                { value: "60%", label: "Ahorro de Tiempo" },
                { value: "Autónomo", label: "Flujo de Trabajo" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#c084fc', border: '1px solid rgba(192,132,252,0.2)' }}>
                  🤖 Agentic Workforce
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={LineChart} 
              color="#4ade80" 
              bg="rgba(74,222,128,0.15)" 
              title="Desarrollo IA por Sector" 
              desc="Tu industria ya opera con inteligencia artificial. Creamos soluciones especializadas para tu sector, adaptadas a tus retos, clientes y oportunidades reales." 
              videoSrc="/assets/images/productos/mabePanel.webm"
              stats={[
                { value: "10+", label: "Sectores Clave" },
                { value: "Real-Time", label: "Procesamiento" },
                { value: "API-First", label: "Integración" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#4ade80', border: '1px solid rgba(74,222,128,0.2)' }}>
                  🏭 Multi-Industry Engines
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={FileText} 
              color="#f87171" 
              bg="rgba(248,113,113,0.15)" 
              title="Desarrollo IA Estatal" 
              desc="Modernizamos servicios públicos, superamos la atención ciudadana y toma decisiones en tiempo real basadas en datos abiertos con soluciones de IA diseñadas para instituciones gubernamentales." 
              stats={[
                { value: "100k+", label: "Ciudadanos Activos" },
                { value: "24/7", label: "Servicios Digitales" },
                { value: "Seguros", label: "Datos de Gobierno" }
              ]}
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={Wrench} 
              color="#fb923c" 
              bg="rgba(251,146,60,0.15)" 
              title="Desarrollo IA PYME" 
              desc="Conoce las Píldoras de IA. Automatiza tareas, vende mejor, atiende más rápido y compite con tecnología accesible para pequeñas y medianas empresas." 
              videoSrc="/assets/images/productos/whatsFaq.webm"
              stats={[
                { value: "Asequible", label: "Inversión Pyme" },
                { value: "1 Semana", label: "Despliegue Rápido" },
                { value: "WhatsApp", label: "Canal Principal" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#fb923c', border: '1px solid rgba(251,146,60,0.2)' }}>
                  💬 WhatsApp AI Bot
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={ScanEye} 
              color="#4ade80" 
              bg="rgba(74,222,128,0.15)" 
              title="Desarrollo IA en Computer Vision" 
              desc="Haz que tus sistemas vean, detecten y actúen. Implementamos visión artificial para inspección, seguridad, conteo, reconocimiento y automatización visual en tiempo real." 
              stats={[
                { value: "30 FPS", label: "Monitoreo Live" },
                { value: "99.5%", label: "Precisión Visual" },
                { value: "Edge/Cloud", label: "Despliegue" }
              ]}
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={ShoppingBag} 
              color="#f87171" 
              bg="rgba(248,113,113,0.15)" 
              title="Market Place de Soluciones" 
              desc="Encuentra soluciones de IA listas para implementar. Explora herramientas, agentes y automatizaciones creadas para resolver problemas reales de negocio." 
              videoSrc="/assets/images/productos/portalia.webm"
              stats={[
                { value: "50+", label: "Apps Listas" },
                { value: "1-Click", label: "Instalación" },
                { value: "Seguro", label: "Certificado" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}>
                  🛒 App Store Ready
                </div>
              }
            />
          </Wrapper>

          {/* --- CATEGORIA: Monitoreo --- */}
          <Wrapper category="Monitoreo">
            <StandardCard 
              icon={FileText} 
              color="#f87171" 
              bg="rgba(248,113,113,0.15)" 
              title="Monitoreo de Modelos IA" 
              desc="Supervisa el desempeño de tus modelos, automatizaciones y agentes inteligentes en tiempo real. Detecta fallas, mide resultados y mejora continuamente tus soluciones de IA." 
              videoSrc="/assets/images/productos/deteccionAnomalias.webm"
              stats={[
                { value: "Real-Time", label: "Latencia & Drift" },
                { value: "Mailing", label: "Alertas Activas" },
                { value: "ISO 42001", label: "Gobernanza IA" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}>
                  📈 MLOps Monitor Active
                </div>
              }
            />
          </Wrapper>

          {/* --- CATEGORIA: Capacitación --- */}
          <Wrapper category="Capacitación">
            <AcademiaCard />
          </Wrapper>

        </motion.div>
      </div>
    </section>
  );
}
