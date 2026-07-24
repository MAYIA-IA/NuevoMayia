import { useState, useEffect, useRef, useMemo, useCallback, forwardRef, useImperativeHandle, Fragment } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { 
  Database, FlaskConical, FileText, Wrench, Calendar,
  Briefcase, LineChart, ShoppingBag, GraduationCap, GitBranch, ScanEye,
  BookOpen, Award, Users, MoreVertical, Info, Cloud, Target, TrendingUp,
  TrendingDown, Shield, Bot, Zap, Link2, Lock, Layers, FlaskRound,
  MonitorCheck, GraduationCap as GradCap, ChevronRight, MessageSquare, Cpu, MapPin, Play, ExternalLink
} from 'lucide-react';
import logoMaia from '../assets/logosNativos/logoMaia.webp';
import academiaLogo from '../assets/logosNativos/academia-horizontal.webp';
import flaiLogo from '../assets/logosNativos/1. NUBE_FINAL_FLAI (1).webp';
import mayiaLakeLogo from '../assets/logosNativos/MAYiA_LAKE.webp';
import ajoloteVideo from '../assets/AJOLOTE.webm';
import roiVideo from '../assets/ROI_Video.mp4';
import squadVideo from '../assets/SQUAD_MAYIA.mp4';
import senderoSeguroVideo from '../assets/SENDERO SEGURO.mp4';
import servidoresVideo from '../assets/SERVIDORES.mp4';
import tiendaServicio from '../assets/TiendaServicio.mp4';
import camaraVideo from '../assets/CAMARA.mp4';
import quantumVideo from '../assets/QUANTUM.mp4';
import interoperabilidadVideo from '../assets/INTEROPERABILIDAD_NUEVO.mp4';
import { MexicoEsMayia } from './modules/dashboardModules/MexicoEsMayia';
import { brandingConfig } from '../config/branding';

import Agencia33Graph from './animations/Agencia33Graph';
import MonitorIAWave from './animations/MonitorIAWave';
import SalesCarConcession from './animations/SalesCarConcession';
import LumelWaves from './animations/LumelWaves';
import BrainCanvas from './animations/BrainCanvas';
import type { BrainHandle } from './animations/BrainCanvas';


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

const getPulseAnimationName = (hexColor: string) => {
  const c = hexColor.toLowerCase();
  if (c === '#16a34a' || c === '#86efac' || c === '#4ade80') return 'cta-glow-pulse-green';
  if (c === '#9333ea' || c === '#d8b4fe' || c === '#c084fc') return 'cta-glow-pulse-purple';
  if (c === '#dc2626' || c === '#fca5a5' || c === '#f87171') return 'cta-glow-pulse-red';
  if (c === '#ea580c' || c === '#fdba74' || c === '#fb923c') return 'cta-glow-pulse-orange';
  if (c === '#a4d955' || c === '#d9f99d' || c === '#bef264') return 'cta-glow-pulse-lime';
  if (c === '#14b8a6' || c === '#5eead4' || c === '#2dd4bf') return 'cta-glow-pulse-teal';
  return 'cta-glow-pulse-blue';
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

  useImperativeHandle(ref, () => internalRef.current!);

  useEffect(() => {
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
  }, []);

  const actualSrc = src || videoSrc;

  return (
    <video 
      ref={internalRef} 
      autoPlay 
      muted 
      loop 
      playsInline 
      preload="metadata" 
      {...props}
    >
      {shouldLoad && (
        children ? children : <source src={actualSrc} type={actualSrc?.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
      )}
    </video>
  );
});

const CATEGORIES = ['Todos', 'Infraestructura', 'Desarrollo', 'Modelos', 'Agentes', 'Operación', 'Monitoreo', 'Capacitación'];// --- SUB-COMPONENTE: EdgenetCard ("Fábrica para tu IA Privada") ---
function EdgenetCard({ onOpenMap, onOpenFabricaInfo, onOpenDiagnostico }: { onOpenMap?: () => void; onOpenFabricaInfo?: () => void; onOpenDiagnostico?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
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
              title="Fábrica de Inteligencia Artificial - IA Privada Mayia"
              aria-label="Animación del jaguar representando la Fábrica de Inteligencia Artificial Privada de MAYiA"
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
          title="Servidores e Infraestructura de la Fábrica de IA"
          aria-label="Video que muestra el funcionamiento de los servidores e infraestructura híbrida y on-premise de la Fábrica de Inteligencia Artificial"
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
              background: 'rgba(220, 252, 231, 0.95)', 
              border: '1px solid #86efac',
              borderRadius: 6,
              padding: '3.5px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              boxShadow: `0 2px 6px ${hexToRgba('#16a34a', 0.15)}`,
            }}
            animate={{
              scale: [1, 1.01, 1],
              boxShadow: [
                `0 2px 6px ${hexToRgba('#16a34a', 0.1)}`,
                `0 2px 12px ${hexToRgba('#16a34a', 0.4)}`,
                `0 2px 6px ${hexToRgba('#16a34a', 0.1)}`,
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span style={{ fontSize: 8.5, color: '#15803d', fontWeight: 900, letterSpacing: '0.03em' }}>Activo</span>
            <motion.div
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                backgroundColor: '#16a34a',
                boxShadow: '0 0 4px #16a34a',
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
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 8, margin: '0 20px' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onOpenFabricaInfo) onOpenFabricaInfo();
            }}
            style={{
              background: `linear-gradient(135deg, ${color}, ${hexToRgba(color, 0.85)})`,
              color: '#111827',
              border: 'none',
              borderRadius: 12,
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
              borderRadius: 12,
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
              borderRadius: 12,
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
              background: `linear-gradient(135deg, ${hexToRgba(color, 0.12)} 0%, ${hexToRgba(color, 0.35)} 50%, ${hexToRgba(color, 0.12)} 100%)`,
              backgroundSize: '200% auto',
              color: '#1e40af',
              border: `1px solid ${hexToRgba(color, 0.45)}`,
              borderRadius: 8,
              padding: '10px 14px',
              fontSize: 11,
              fontWeight: 800,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              animation: 'cta-shimmer 3s linear infinite, cta-glow-pulse-blue 2.5s infinite'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Descubre porque <span className="cta-arrow-animate" style={{ fontSize: 13, fontWeight: 'bold' }}>&rarr;</span>
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
  const [showFlaiModal, setShowFlaiModal] = useState(false);
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
            <img src={flaiLogo} alt="FLAI - Nube Soberana Inteligente de MAYiA, plataforma de nube soberana de Inteligencia Artificial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
          title="Nube Soberana Inteligente FLAI"
          aria-label="Presentación de la infraestructura y servicios de cómputo en la nube soberana FLAI de MAYiA"
        />
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
          onClick={(e) => {
            e.stopPropagation();
            setShowFlaiModal(true);
          }}
          style={{ 
            background: `linear-gradient(135deg, ${color} 0%, rgba(255, 255, 255, 0.6) 50%, ${hexToRgba(color, 0.85)} 100%)`, 
            backgroundSize: '200% auto',
            color: '#111827', border: 'none', borderRadius: 8, padding: '12px 16px', 
            fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: '100%', justifyContent: 'center', 
            transition: 'all 0.2s',
            animation: 'cta-shimmer 3s linear infinite, cta-glow-pulse-red 2.5s infinite'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Cotiza ahora <span className="cta-arrow-animate">&rarr;</span>
        </button>
      </div>

      {/* Modal Overlay para https://www.flainube.com/ — Portal en document.body */}
      {showFlaiModal && createPortal(
        <div 
          onClick={() => setShowFlaiModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.82)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
            padding: 16
          }}
        >
          <div 
            style={{
              background: '#090d16',
              borderRadius: 24,
              maxWidth: 1100,
              width: '100%',
              height: '85vh',
              maxHeight: 800,
              border: `2px solid ${color}`,
              boxShadow: `0 25px 50px -12px ${hexToRgba(color, 0.4)}`,
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)', background: '#0d1322' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${hexToRgba(color, 0.4)}` }}>
                  <img src={flaiLogo} alt="FLAI Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: 16, fontWeight: 800 }}>FLAI — Nube Soberana Inteligente</h3>
                  <p style={{ margin: 0, color: '#9CA3AF', fontSize: 11, fontWeight: 500 }}>https://www.flainube.com/</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <a
                  href="https://www.flainube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    background: hexToRgba(color, 0.15),
                    color: color,
                    border: `1px solid ${hexToRgba(color, 0.4)}`,
                    padding: '6px 12px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <ExternalLink size={14} /> Abrir en pestaña externa
                </a>
                <button 
                  onClick={() => setShowFlaiModal(false)}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    color: '#FFFFFF',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    flexShrink: 0
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
            
            {/* Contenido iframe de flainube.com */}
            <div style={{ flex: 1, position: 'relative', width: '100%', background: '#000' }}>
              <iframe
                style={{ width: '100%', height: '100%', border: 'none' }}
                src="https://www.flainube.com/"
                title="FLAI Nube Soberana Inteligente"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

// --- SUB-COMPONENTE: SocCard (CyberPeace SOC) ---
function SocCard({ onOpenInfo }: { onOpenInfo?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
            <img src="/assets/images/productos/cyberpeaceLogo.webp" alt="CyberPeace SOC - Centro de Operaciones de Seguridad Inteligente para Ciberseguridad con Inteligencia Artificial" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>Ciberseguridad 360°</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#4B5563', fontWeight: 600 }}>SOC IA con CyberPeace</p>
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
            title="Monitoreo del SOC de Ciberseguridad con Inteligencia Artificial"
            aria-label="Interfaz del SOC CyberPeace que muestra el monitoreo en tiempo real de ciberamenazas asistido por Inteligencia Artificial"
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
          <p style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#1e3a8a' }}>ISO 42001</p>
          <p style={{ margin: 0, fontSize: 10, color: '#4B5563', fontWeight: 600 }}>IA</p>
        </div>
      </div>

      {/* Certificaciones adicionales */}
      <div style={{ padding: '0 20px 16px' }}>
        <div
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px',
            borderRadius: 12, border: '1px solid #E5E7EB', background: '#F3F4F6', color: '#4B5563',
            fontSize: 12, fontWeight: 600
          }}
        >
          <span>Certificaciones Adicionales</span>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #F9FAFB, #F3F4F6)', borderRadius: 12, padding: 12, marginTop: 8,
          border: '1px solid #E5E7EB', display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center'
        }}>
          {['ISO 27001', 'ISO 27034', 'ISO 27017', 'ISO 9001', 'ISO 37001', 'ISO 27018'].map(cert => (
            <span key={cert} style={{ fontSize: 9, fontWeight: 700, padding: '4px 8px', borderRadius: 99, background: hexToRgba(color, 0.15), color: '#1e3a8a', border: `1px solid ${hexToRgba(color, 0.3)}` }}>
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '20px 20px 20px', marginTop: 'auto' }}>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            background: `linear-gradient(135deg, ${color} 0%, rgba(255, 255, 255, 0.6) 50%, ${hexToRgba(color, 0.85)} 100%)`, 
            backgroundSize: '200% auto',
            color: '#111827', border: 'none', borderRadius: 8, padding: '10px 0', fontSize: 13, fontWeight: 700, 
            display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', flex: 1, justifyContent: 'center', transition: 'all 0.2s',
            animation: 'cta-shimmer 3s linear infinite, cta-glow-pulse-blue 2.5s infinite'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Proteger ahora
        </button>
        {/* <button 
          onClick={onOpenInfo}
          style={{ 
            background: '#F3F4F6', color: '#374151', border: '1px solid #D1D5DB', borderRadius: 8, padding: '10px 0', fontSize: 13, fontWeight: 600, 
            display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', flex: 1, justifyContent: 'center', transition: 'all 0.2s' 
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#E5E7EB'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F3F4F6'; }}
        >
          Conocer más <span className="cta-arrow-animate">&rarr;</span>
        </button> */}
      </div>
    </div>
  );
}

function MayiaCard({ onOpenInfo }: { onOpenInfo?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const isMobile = useIsMobile();
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
            <img src={mayiaLakeLogo} alt="MAYiA Lakehouse - Plataforma inteligente de almacenamiento y procesamiento de datos para Inteligencia Artificial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827', display: 'flex', alignItems: 'center', gap: 4 }}>
              <img src={logoMaia} alt="MAYiA Inteligencia Artificial - Logo oficial" style={{ height: '15px', objectFit: 'contain' }} /> Lakehouse
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
          title="Plataforma de Datos MAYiA Lakehouse"
          aria-label="Animación en 3D que representa la ingesta y estructuración de datos en tiempo real dentro de MAYiA Lakehouse"
        />
        {/* Overlays en el video removidos */}
      </div>

      {/* Diagrama de flujo de datos - 7 Etapas estructuradas en retícula */}
      <div style={{ margin: '0 16px 16px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
          gap: 6 
        }}>
          {[
            { step: '01', name: 'Ingesta' },
            { step: '02', name: 'Recolección' },
            { step: '03', name: 'Almacenamiento' },
            { step: '04', name: 'Cómputo' },
            { step: '05', name: 'Consumo' },
            { step: '06', name: 'Linaje' }
          ].map((item) => (
            <div 
              key={item.step} 
              style={{ 
                background: '#111827', 
                color: '#ffffff', 
                borderRadius: 10, 
                padding: '8px 8px', 
                fontSize: 10.5, 
                fontWeight: 800, 
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                minWidth: 0,
                boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <span style={{ 
                background: color, 
                color: '#111827', 
                borderRadius: 6, 
                padding: '2px 5px', 
                fontSize: 9, 
                fontWeight: 900,
                flexShrink: 0
              }}>
                {item.step}
              </span>
              <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</span>
            </div>
          ))}

          {/* Etapa 07: Calidad de Datos en ancho completo */}
          <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', minWidth: 0 }}>
            <div style={{ 
              background: '#111827', 
              color: '#ffffff', 
              borderRadius: 10, 
              padding: '8px 12px', 
              fontSize: 11, 
              fontWeight: 800, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              minWidth: 0,
              border: `1.5px solid ${color}`,
              boxShadow: `0 3px 10px ${hexToRgba(color, 0.25)}`
            }}>
              <span style={{ 
                background: color, 
                color: '#111827', 
                borderRadius: 6, 
                padding: '2px 6px', 
                fontSize: 9, 
                fontWeight: 900,
                flexShrink: 0
              }}>
                07
              </span>
              <span style={{ whiteSpace: 'nowrap' }}>Calidad de Datos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Descripción */}
      <p style={{ 
        fontSize: 13, 
        color: '#4B5563', 
        lineHeight: 1.6, 
        margin: '0 20px 20px', 
        fontWeight: 500,
        textAlign: 'justify'
      }}>
        Elimina los silos, unifica tus datos, obtén información estratégica en tiempo real y potencia tu IA empresarial y agéntica.
        <br /><br />
        Conoce el servicio de nuestros <strong>Squads</strong> de especialistas MAYIA, vamos a tu empresa y te apoyamos a preparar tu datos para la IA.
      </p>

      {/* Botones de acción — alinear al fondo como en los demás cards */}
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
            background: `linear-gradient(135deg, ${color} 0%, rgba(255, 255, 255, 0.6) 50%, ${hexToRgba(color, 0.85)} 100%)`, 
            backgroundSize: '200% auto',
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
            animation: 'cta-shimmer 3s linear infinite, cta-glow-pulse-lime 2.5s infinite'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
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
  const [showYoutubeModal, setShowYoutubeModal] = useState(false);
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
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between', height: 90 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ 
            width: 44, 
            height: 44, 
            borderRadius: 12, 
            background: '#000000', 
            border: `1.5px solid ${hexToRgba(color, 0.4)}`, 
            boxShadow: `0 4px 10px ${hexToRgba(color, 0.25)}`,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            overflow: 'hidden',
            flexShrink: 0 
          }}>
            <img src="/assets/images/card-icons/squads_mayia.jpg" alt="Squads MAYiA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>Squads MAYiA</h3>
            <p style={{ margin: 0, fontSize: 11, color: '#4B5563', fontWeight: 600 }}>Forward-Deployed Engineers</p>
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
          title="Squads de Desarrollo de IA MAYiA"
          aria-label="Presentación en video de los squads y equipos ágiles especializados en el desarrollo e integración de Inteligencia Artificial de MAYiA"
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
            Human As A Service
          </motion.div>
        </div>

        {/* Animated Eye-Catching Play Button Container - Bottom Left */}
        <div style={{ 
          position: 'absolute', 
          bottom: 12, 
          left: 12, 
          zIndex: 10 
        }}>
          <motion.button
            onClick={(e) => { e.stopPropagation(); setShowYoutubeModal(true); }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                `0 0 10px ${hexToRgba(color, 0.4)}, 0 0 20px ${hexToRgba(color, 0.2)}`,
                `0 0 22px ${hexToRgba(color, 0.9)}, 0 0 35px ${hexToRgba(color, 0.4)}`,
                `0 0 10px ${hexToRgba(color, 0.4)}, 0 0 20px ${hexToRgba(color, 0.2)}`
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              background: `linear-gradient(135deg, ${color} 0%, #0d9488 100%)`, 
              color: '#090d16', 
              fontSize: 11, 
              fontWeight: 900, 
              padding: '7px 14px', 
              borderRadius: 10, 
              border: `1.5px solid #ffffff`,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              boxShadow: `0 4px 15px ${hexToRgba(color, 0.4)}`
            }}
          >
            <div style={{ 
              width: 20, 
              height: 20, 
              borderRadius: '50%', 
              background: '#090d16', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
            }}>
              <Play size={11} fill={color} color={color} style={{ marginLeft: 1 }} />
            </div>
            <span>Ver Video</span>
          </motion.button>
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
            background: `linear-gradient(135deg, ${color} 0%, rgba(255, 255, 255, 0.6) 50%, ${hexToRgba(color, 0.85)} 100%)`, 
            backgroundSize: '200% auto',
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
            animation: 'cta-shimmer 3s linear infinite, cta-glow-pulse-teal 2.5s infinite'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Agenda tu cita
        </button>
      </div>

      {/* YouTube Modal Overlay — renderizado via Portal directamente en document.body */}
      {showYoutubeModal && createPortal(
        <div 
          onClick={() => setShowYoutubeModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.82)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
            padding: 16
          }}
        >
          <div 
            style={{
              background: '#090d16',
              borderRadius: 24,
              maxWidth: 720,
              width: '100%',
              border: `2px solid #2dd4bf`,
              boxShadow: `0 25px 50px -12px rgba(45,212,191,0.4)`,
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Play size={16} fill="#ffffff" color="#ffffff" />
                </div>
                <div>
                  <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: 16, fontWeight: 800 }}>Squads MAYiA — Canal Oficial de YouTube</h3>
                  <p style={{ margin: 0, color: '#9CA3AF', fontSize: 11, fontWeight: 500 }}>Soluciones e Ingenieros de IA MAYiA</p>
                </div>
              </div>
              <button 
                onClick={() => setShowYoutubeModal(false)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  flexShrink: 0
                }}
              >
                ✕
              </button>
            </div>
            
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Iframe en proporción 16:9 */}
              <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, borderRadius: 16, overflow: 'hidden', background: '#000' }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  src="https://www.youtube-nocookie.com/embed/N28EnoEYmJw?autoplay=1&rel=0&enablejsapi=1"
                  title="Squads MAYiA Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>
                  Explora nuestras soluciones, demos e integraciones en YouTube
                </span>
                <a
                  href="https://www.youtube.com/watch?v=N28EnoEYmJw"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#FF0000',
                    color: '#FFFFFF',
                    padding: '8px 16px',
                    borderRadius: 10,
                    fontSize: 12,
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    whiteSpace: 'nowrap'
                  }}
                >
                  Abrir en YouTube ↗
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

// --- SUB-COMPONENTE: IAEmpresarialCard ---
function IAEmpresarialCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const isMobile = useIsMobile();

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
          <div style={{ 
            width: 44, 
            height: 44, 
            borderRadius: 12, 
            background: '#000000', 
            border: `1.5px solid ${hexToRgba(color, 0.4)}`, 
            boxShadow: `0 4px 10px ${hexToRgba(color, 0.25)}`,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            overflow: 'hidden',
            flexShrink: 0 
          }}>
            <img src="/assets/images/card-icons/ia_empresarial.jpg" alt="Desarrollo IA Empresarial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>

        {/* 4 servicios principales */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 6 }}>
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
      </div>

      {/* CTA — mismo patrón que StandardCard: marginTop auto */}
      <div style={{ marginTop: 'auto' }}>
        <motion.div
          onClick={handleAgendarCita}
          style={{
            background: `linear-gradient(135deg, ${color} 0%, rgba(255, 255, 255, 0.6) 50%, ${hexToRgba(color, 0.85)} 100%)`,
            backgroundSize: '200% auto',
            borderRadius: 10, padding: '10px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
            cursor: 'pointer',
            animation: 'cta-shimmer 3s linear infinite, cta-glow-pulse-blue 2.5s infinite'
          }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <MessageSquare size={15} color="#111827" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 800, color: '#111827', lineHeight: 1.2 }}>Conversemos sobre el potencial de la IA en tu empresa <span className="cta-arrow-animate">→</span></p>
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
            borderRadius: 12, 
            background: '#000000', 
            border: `1.5px solid ${hexToRgba(color, 0.4)}`, 
            boxShadow: `0 4px 10px ${hexToRgba(color, 0.25)}`,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            overflow: 'hidden',
            flexShrink: 0 
          }}>
            <img src="/assets/images/card-icons/roi_discovery.jpg" alt="ROI Discovery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
          title="Simulador de Retorno de Inversión (ROI) en Proyectos de IA"
          aria-label="Video explicativo sobre el cálculo del retorno de inversión y beneficios económicos al implementar Inteligencia Artificial en empresas"
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
            <Calendar size={8} /> Agendar Cita <span className="cta-arrow-animate">&rarr;</span>
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
              icon: Target,
              color: '#1d4ed8',
              bg: 'rgba(29, 78, 216, 0.08)',
              borderColor: 'rgba(29, 78, 216, 0.15)'
            },
            {
              title: "ROI y Caso de Negocio",
              icon: FileText,
              color: '#16a34a',
              bg: 'rgba(22, 163, 74, 0.08)',
              borderColor: 'rgba(22, 163, 74, 0.15)'
            },
            {
              title: "Priorización Estratégica",
              icon: TrendingUp,
              color: '#9333ea',
              bg: 'rgba(147, 51, 234, 0.08)',
              borderColor: 'rgba(147, 51, 234, 0.15)'
            },
            {
              title: "Decisiones para Dirección",
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
                  justifyContent: 'center',
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
                      fontSize: 9.5,
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
            Ver video del consultor <span className="cta-arrow-animate">&rarr;</span>
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

// --- SUB-COMPONENTE: SectoresGrid ---
function SectoresGrid() {
  const [expanded, setExpanded] = useState(false);

  const sectores = [
    { nombre: "Agricultura", importante: true },
    { nombre: "Ganadería", importante: false },
    { nombre: "Minería", importante: false },
    { nombre: "Energía", importante: false },
    { nombre: "Manufactura", importante: true },
    { nombre: "Construcción", importante: false },
    { nombre: "Salud", importante: true },
    { nombre: "Educación", importante: false },
    { nombre: "Retail / Comercio", importante: true },
    { nombre: "Turismo", importante: true },
    { nombre: "Transporte", importante: false },
    { nombre: "Finanzas", importante: false },
    { nombre: "Educación", importante: false },
    { nombre: "Instituciones Públicas", importante: true },
    { nombre: "Publicidad y medios", importante: false },
    { nombre: "Seguridad", importante: true },
  ];

  // 4 principales iniciales (Importantes)
  const principales = sectores.filter(s => s.importante).slice(0, 4);
  const itemsToShow = expanded ? sectores : principales;

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: 8 
      }}>
        {itemsToShow.map((sector, idx) => (
          <div 
            key={idx}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 6, 
              padding: '9px 10px', 
              borderRadius: 10,
              fontSize: 11,
              fontWeight: 700,
              lineHeight: 1.25,
              background: sector.importante 
                ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.14), rgba(16, 185, 129, 0.06))' 
                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.14), rgba(37, 99, 235, 0.06))',
              border: sector.importante 
                ? '1px solid rgba(34, 197, 94, 0.4)' 
                : '1px solid rgba(59, 130, 246, 0.4)',
              color: sector.importante ? '#15803d' : '#1d4ed8',
              boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
            }}
          >
            <span style={{ 
              width: 7, 
              height: 7, 
              borderRadius: '50%', 
              background: sector.importante ? '#16a34a' : '#2563eb',
              flexShrink: 0 
            }} />
            <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              {sector.nombre}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
        style={{
          width: '100%',
          marginTop: 12,
          padding: '9px 14px',
          borderRadius: 10,
          background: expanded ? 'rgba(0,0,0,0.04)' : 'linear-gradient(135deg, rgba(74,222,128,0.12), rgba(59,130,246,0.12))',
          border: '1px dashed rgba(74,222,128,0.5)',
          color: '#111827',
          fontSize: 12,
          fontWeight: 700,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        {expanded ? '▲ Ver menos' : `▼ Ver todos los sectores (${sectores.length})`}
      </button>
    </div>
  );
}

// --- SUB-COMPONENTE: StandardCard (Tarjetas de Categoria Comunes) ---
function StandardCard({ 
  icon: Icon, 
  color, 
  bg, 
  title, 
  titleFontSize,
  desc, 
  videoSrc, 
  stats,
  videoOverlay,
  beforeText,
  onConocerMas,
  buttonText,
  iconImage,
  children 
}: { 
  icon: any, 
  color: string, 
  bg: string, 
  title: string, 
  titleFontSize?: number,
  desc: string, 
  videoSrc?: string, 
  stats?: Array<{ value: string, label: string, color?: string }>,
  videoOverlay?: React.ReactNode,
  beforeText?: React.ReactNode,
  onConocerMas?: () => void,
  buttonText?: string,
  iconImage?: string,
  children?: React.ReactNode 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = getPastelTheme(color);
  const calculatedFontSize = titleFontSize || (title.length > 35 ? 14 : title.length > 25 ? 16 : 18);

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
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, minHeight: 50, marginBottom: 16, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
          <div style={{ 
            width: 44, 
            height: 44, 
            borderRadius: 12, 
            background: '#000000', 
            border: `1.5px solid ${hexToRgba(color, 0.4)}`, 
            boxShadow: `0 4px 10px ${hexToRgba(color, 0.25)}`,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            overflow: 'hidden',
            flexShrink: 0 
          }}>
            {iconImage ? (
              <img src={iconImage} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <Icon size={22} color={color} />
            )}
          </div>
          <h3 style={{ fontSize: calculatedFontSize, fontWeight: 800, color: '#111827', margin: 0, lineHeight: 1.25 }}>{title}</h3>
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

      {beforeText && (
        <div style={{ marginBottom: 16 }}>
          {beforeText}
        </div>
      )}

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
            title={`Video de presentación - ${title}`}
            aria-label={`Video demostrativo de la solución de ${title}`}
          />
          {videoOverlay && videoOverlay}
        </div>
      )}

      {desc && (
        <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5, margin: 0, marginBottom: 20, fontWeight: 500, textAlign: 'justify' }}>
          {desc}
        </p>
      )}

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
          onClick={onConocerMas ? (e) => { e.stopPropagation(); onConocerMas(); } : handleAgendarCita}
          style={{ 
            background: `linear-gradient(135deg, ${color} 0%, rgba(255, 255, 255, 0.6) 50%, ${hexToRgba(color, 0.85)} 100%)`, 
            backgroundSize: '200% auto',
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
            animation: `cta-shimmer 3s linear infinite, ${getPulseAnimationName(color)} 2.5s infinite`
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          {buttonText || "Conocer más"} <span className="cta-arrow-animate">&rarr;</span>
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
  const color = '#4ade80';
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
          <div style={{ 
            width: 44, 
            height: 44, 
            borderRadius: 12, 
            background: '#000000', 
            border: `1.5px solid ${hexToRgba(color, 0.4)}`, 
            boxShadow: `0 4px 10px ${hexToRgba(color, 0.25)}`,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            overflow: 'hidden',
            flexShrink: 0 
          }}>
            <img src="/assets/images/card-icons/academia_mayia.svg" alt="Academia MAYiA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <img src={academiaLogo} alt="Academia MAYiA - Capacitación corporativa y cursos de Inteligencia Artificial para empresas" style={{ height: '32px', objectFit: 'contain', filter: 'none' }} />
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
          title="Presentación de Academia MAYiA"
          aria-label="Animación del astronauta saludando para dar la bienvenida a los cursos de Academia MAYiA"
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
                <span className="cta-arrow-animate">
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
                </span>
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
                  <span style={{ color: color, fontWeight: 600 }}>{curso.categoria}</span>
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
          { icon: BookOpen, value: '32', label: 'Cursos', color: color },
          { icon: Award, value: '6+', label: 'Certificaciones', color: color },
          { icon: Briefcase, value: 'B2B', label: 'IA para negocios', color: color },
          { icon: Users, value: 'Tech', label: 'IA para equipos', color: color },
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
            background: `linear-gradient(135deg, ${color} 0%, rgba(255, 255, 255, 0.6) 50%, ${hexToRgba(color, 0.85)} 100%)`,
            backgroundSize: '200% auto',
            color: '#111827', fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer',
            transition: 'all 0.2s',
            animation: `cta-shimmer 3s linear infinite, ${getPulseAnimationName(color)} 2.5s infinite`
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
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
          onMouseEnter={e => { e.currentTarget.style.background = '#E5E7EB'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = color; }}
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
              border: `2px solid ${hexToRgba(color, 0.3)}`,
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div style={{
              background: `linear-gradient(to right, ${color}, ${hexToRgba(color, 0.8)})`,
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
                  <img src={academiaLogo} alt="Academia MAYiA - Logotipo de la academia de formación en Inteligencia Artificial" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
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

// --- COMPONENTE AUXILIAR: SolutionCardItem ---
interface SolutionCardItemProps {
  sol: {
    title: string;
    slogan: string;
    desc: string;
    details: string[];
    color: string;
    animation: React.ComponentType;
  };
  onClick: () => void;
}

function SolutionCardItem({ sol, onClick }: SolutionCardItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const AnimComponent = sol.animation;
  
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.01, y: -1.5 }}
      whileTap={{ scale: 0.99 }}
      style={{
        position: 'relative',
        height: 48,
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        border: `1.5px solid ${isHovered ? sol.color : 'rgba(255, 255, 255, 0.08)'}`,
        boxShadow: isHovered 
          ? `0 6px 12px -6px ${sol.color}40`
          : '0 2px 6px rgba(0,0,0,0.02)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animación "Ventana" de fondo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <AnimComponent />
      </div>

      {/* Capa de cristal/filtro que oscurece el fondo y resalta las letras */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: isHovered ? 'rgba(9, 13, 22, 0.45)' : 'rgba(9, 13, 22, 0.65)',
          backdropFilter: isHovered ? 'blur(0.5px)' : 'blur(1.5px)',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease'
        }}
      />

      {/* Textos: Título y Slogan */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 1, pointerEvents: 'none' }}>
        <h4 
          style={{
            margin: 0,
            color: '#FFFFFF',
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            textShadow: isHovered ? `0 0 10px ${sol.color}` : 'none',
          }}
        >
          {sol.title}
        </h4>
        <span 
          style={{
            fontSize: 9,
            color: isHovered ? sol.color : 'rgba(255, 255, 255, 0.55)',
            fontWeight: 500,
            transition: 'color 0.3s ease'
          }}
        >
          {sol.slogan}
        </span>
      </div>
    </motion.div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export default function EnterpriseDashboard({ onOpenMap, onOpenFlaiInfo, onOpenFabricaInfo, onOpenDiagnostico, onOpenLakehouseInfo, onOpenSquadsInfo }: { onOpenMap?: (stateId?: string) => void, onOpenFlaiInfo?: () => void, onOpenFabricaInfo?: () => void, onOpenDiagnostico?: () => void, onOpenLakehouseInfo?: () => void, onOpenSquadsInfo?: () => void }) {
  const [activeTab, setActiveTab] = useState('Todos');
  const [showComputerVisionVideo, setShowComputerVisionVideo] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<null | { title: string, desc: string, details: string[], icon: any, color: string }>(null);
  const isMobile = useIsMobile();
  
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [isCategoryPaused, setIsCategoryPaused] = useState(false);

  useEffect(() => {
    let animId: number;
    const container = categoriesRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (!isCategoryPaused && container) {
        container.scrollLeft += 0.55;
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        }
      }
      animId = requestAnimationFrame(autoScroll);
    };

    animId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animId);
  }, [isCategoryPaused]);

  const duplicatedCategories = useMemo(() => [
    ...CATEGORIES,
    ...CATEGORIES,
    ...CATEGORIES
  ], []);
  const greetingText = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return '¿Qué solución de IA necesitas implementar esta mañana?';
    } else if (hour >= 12 && hour < 19) {
      return '¿Qué solución de IA necesitas implementar esta tarde?';
    } else {
      return '¿Qué solución de IA necesitas implementar esta noche?';
    }
  }, []);

  const marketplaceSolutions = useMemo(() => [
    {
      title: "Agencia 33",
      slogan: "Simulador Masivo de Opinión Pública",
      desc: "Revolucionario simulador de opinión y comportamiento social que despliega miles de agentes autónomos con perfiles demográficos reales en las regiones de México. Permite modelar escenarios complejos, predecir la adopción de posturas y analizar cómo se propagan y debaten las ideas colectivamente.",
      icon: Briefcase,
      color: "#3b82f6",
      animation: Agencia33Graph,
      details: [
        "Simulación Demográfica a Gran Escala: Despliegue de miles de agentes de IA mapeados con perfiles psicográficos reales en todo México.",
        "Modelado de Consenso y Opinión: Capacidad de los agentes para comunicarse, debatir y compartir ideas autónomamente sobre temas específicos.",
        "Análisis de Propagación de Posturas: Visualización predictiva de cómo viajan las ideas y tendencias a través de diferentes redes sociales virtuales.",
        "Inteligencia Estratégica Regional: Segmentación granular de posturas y comportamiento colectivo para la toma de decisiones de alto impacto."
      ]
    },
    {
      title: "Monitor IA",
      slogan: "Monitoreo Inteligente de Medios y Campañas",
      desc: "Avanzada plataforma de inteligencia que audita y analiza transmisiones de radio en tiempo real mediante procesamiento de voz con IA. Detecta anuncios publicitarios, menciones de marcas y palabras clave específicas de forma instantánea, correlacionando los datos con campañas en redes sociales para medir el impacto omnicanal absoluto.",
      icon: LineChart,
      color: "#10b981",
      animation: MonitorIAWave,
      details: [
        "Auditoría de Audio en Tiempo Real: Procesamiento simultáneo de múltiples frecuencias radiofónicas para identificar anuncios y menciones con precisión de milisegundos.",
        "Análisis de Voz y Palabras Clave: Transcripción automática y detección semántica de conceptos clave configurados a la medida.",
        "Correlación Omnicanal con Redes Sociales: Cruzado inteligente de menciones en radio tradicional con el pulso digital en redes sociales para medir el engagement global.",
        "Monitoreo de Campañas y Competencia: Reportes inmediatos sobre la pauta publicitaria propia y de terceros para optimizar el retorno de inversión (ROI) en medios."
      ]
    },
    {
      title: "Sales Command Center",
      slogan: "Control Centralizado de Ventas y Operaciones",
      desc: "Plataforma de inteligencia comercial y analítica centralizada que consolida las ventas físicas e interacciones de tus sucursales en un solo lugar. Impulsada por IA, procesa cada transacción en tiempo real, monitorea la productividad de los locales y ofrece proyecciones operativas para maximizar la rentabilidad del negocio.",
      icon: Target,
      color: "#f59e0b",
      animation: SalesCarConcession,
      details: [
        "Consolidación de Ventas Multicanal: Registro y centralización en tiempo real de todas las transacciones físicas e interacciones comerciales de la empresa.",
        "Análisis Predictivo de Locales y Sucursales: Evaluación automatizada del rendimiento operativo de cada punto de venta y sucursal.",
        "Proyecciones y Tendencias de Demanda: Modelado de patrones de compra históricos mediante IA para predecir picos de venta y optimizar inventarios.",
        "Auditoría Operativa Inteligente: Detección automatizada de anomalías transaccionales o cuellos de botella en la operación diaria de los locales."
      ]
    },
    {
      title: "Lumel",
      slogan: "Asistente RAG y gestión documental de LLMs",
      desc: "Asistente inteligente empresarial para la consulta y gestión del conocimiento corporativo mediante búsquedas semánticas avanzadas.",
      icon: BookOpen,
      color: "#8b5cf6",
      animation: LumelWaves,
      details: [
        "Búsqueda semántica (RAG) de alta precisión sobre repositorios documentales.",
        "Análisis y comparación automatizada de contratos y acuerdos legales.",
        "Respuestas inmediatas con citas directas de fuentes corporativas oficiales.",
        "Integración nativa con sistemas ERP, CRM y bases de datos relacionales."
      ]
    }
  ], []);

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
        @keyframes cta-arrow-slide {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(5px); }
        }
        .cta-arrow-animate {
          display: inline-block;
          animation: cta-arrow-slide 1.2s ease-in-out infinite;
        }
        @keyframes cta-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes cta-glow-pulse-blue {
          0%, 100% { box-shadow: 0 4px 12px rgba(96, 165, 250, 0.35), 0 0 0 0 rgba(96, 165, 250, 0.45); }
          50% { box-shadow: 0 4px 20px rgba(96, 165, 250, 0.6), 0 0 0 8px rgba(96, 165, 250, 0); }
        }
        @keyframes cta-glow-pulse-red {
          0%, 100% { box-shadow: 0 4px 12px rgba(248, 113, 113, 0.35), 0 0 0 0 rgba(248, 113, 113, 0.45); }
          50% { box-shadow: 0 4px 20px rgba(248, 113, 113, 0.6), 0 0 0 8px rgba(248, 113, 113, 0); }
        }
        @keyframes cta-glow-pulse-green {
          0%, 100% { box-shadow: 0 4px 12px rgba(34, 197, 94, 0.35), 0 0 0 0 rgba(34, 197, 94, 0.45); }
          50% { box-shadow: 0 4px 20px rgba(34, 197, 94, 0.6), 0 0 0 8px rgba(34, 197, 94, 0); }
        }
        @keyframes cta-glow-pulse-teal {
          0%, 100% { box-shadow: 0 4px 12px rgba(45, 212, 191, 0.35), 0 0 0 0 rgba(45, 212, 191, 0.45); }
          50% { box-shadow: 0 4px 20px rgba(45, 212, 191, 0.6), 0 0 0 8px rgba(45, 212, 191, 0); }
        }
        @keyframes cta-glow-pulse-lime {
          0%, 100% { box-shadow: 0 4px 12px rgba(164, 217, 85, 0.35), 0 0 0 0 rgba(164, 217, 85, 0.45); }
          50% { box-shadow: 0 4px 20px rgba(164, 217, 85, 0.6), 0 0 0 8px rgba(164, 217, 85, 0); }
        }
        @keyframes cta-glow-pulse-orange {
          0%, 100% { box-shadow: 0 4px 12px rgba(234, 88, 12, 0.35), 0 0 0 0 rgba(234, 88, 12, 0.45); }
          50% { box-shadow: 0 4px 20px rgba(234, 88, 12, 0.6), 0 0 0 8px rgba(234, 88, 12, 0); }
        }
        @keyframes cta-glow-pulse-purple {
          0%, 100% { box-shadow: 0 4px 12px rgba(192, 132, 252, 0.35), 0 0 0 0 rgba(192, 132, 252, 0.45); }
          50% { box-shadow: 0 4px 20px rgba(192, 132, 252, 0.6), 0 0 0 8px rgba(192, 132, 252, 0); }
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
                  alt="MAYiA - Inteligencia Artificial para Empresas, consultoría e implementación de soluciones cognitivas y agentes autónomos" 
                  style={{ height: '48px', objectFit: 'contain', position: 'relative', zIndex: 1 }} 
                />
              </div>
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 400, color: '#4B5563', margin: 0 }}>
              {greetingText}
            </h2>
          </div>
        </div>

        {/* Categories / Tabs Carousel */}
        <div 
          style={{ position: 'relative', marginBottom: 32, width: '100%' }}
          onMouseEnter={() => setIsCategoryPaused(true)}
          onMouseLeave={() => setIsCategoryPaused(false)}
          onTouchStart={() => setIsCategoryPaused(true)}
          onTouchEnd={() => setIsCategoryPaused(false)}
        >
          {/* Degradados laterales de desvanecimiento */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 36,
            background: 'linear-gradient(to right, #FFFFFF 30%, transparent)',
            pointerEvents: 'none',
            zIndex: 10
          }} />
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 36,
            background: 'linear-gradient(to left, #FFFFFF 30%, transparent)',
            pointerEvents: 'none',
            zIndex: 10
          }} />

          <div 
            ref={categoriesRef}
            style={{ 
              display: 'flex', 
              gap: 12, 
              overflowX: 'auto', 
              whiteSpace: 'nowrap',
              paddingBottom: 8,
              paddingTop: 4,
              paddingLeft: 8,
              paddingRight: 8,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {duplicatedCategories.map((cat, idx) => {
              const isActive = activeTab === cat;
              return (
                <motion.button 
                  key={`${cat}-${idx}`} 
                  onClick={() => setActiveTab(cat)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
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
                    boxShadow: isActive ? '0 4px 10px rgba(164,217,85,0.25)' : '0 1px 3px rgba(0,0,0,0.03)',
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
            <RoiCard />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <StandardCard 
              icon={FlaskConical} 
              color="#4ade80" 
              bg="rgba(74,222,128,0.15)" 
              title="Laboratorios IA" 
              iconImage="/assets/images/card-icons/laboratorios_ia.jpg"
              desc="Experimenta, valida y crea soluciones de Inteligencia Artificial antes de invertir en gran escala. Nuestros laboratorios están a tu disposición para entrenar, ajustar y optimizar tus modelos. Busca una reunión para más información" 
              buttonText="Agenda una cita"
              videoSrc={servidoresVideo}
              videoOverlay={
                <div style={{ position: 'absolute', top: 8, right: 8 }}>
                  <motion.div
                    style={{
                      background: 'rgba(220, 252, 231, 0.95)', 
                      border: '1px solid #86efac',
                      borderRadius: 6,
                      padding: '3.5px 8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      boxShadow: `0 2px 6px ${hexToRgba('#16a34a', 0.15)}`,
                    }}
                    animate={{
                      scale: [1, 1.01, 1],
                      boxShadow: [
                        `0 2px 6px ${hexToRgba('#16a34a', 0.1)}`,
                        `0 2px 12px ${hexToRgba('#16a34a', 0.4)}`,
                        `0 2px 6px ${hexToRgba('#16a34a', 0.1)}`,
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span style={{ fontSize: 8.5, color: '#15803d', fontWeight: 900, letterSpacing: '0.03em' }}>Activo</span>
                    <motion.div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        backgroundColor: '#16a34a',
                        boxShadow: '0 0 4px #16a34a',
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
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <SquadsMayiaCard onOpenInfo={onOpenSquadsInfo} />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <IAEmpresarialCard />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <SocCard onOpenInfo={() => alert('Sección de Más Información CyberPeace SOC en construcción.')} />
          </Wrapper>

          <Wrapper category="Monitoreo">
            <StandardCard 
              icon={FileText} 
              color="#f87171" 
              bg="rgba(248,113,113,0.15)" 
              title="Monitoreo de Modelos IA" 
              iconImage="/assets/images/card-icons/monitoreo_modelos.jpg"
              desc="Supervisa el desempeño de tus modelos, automatizaciones y agentes inteligentes en tiempo real. Detecta fallas, mide resultados y mejora continuamente tus soluciones de IA." 
              buttonText='Agenda una cita'
              videoSrc="/assets/images/productos/deteccionAnomalias.webm"
              stats={[
                { value: "Real-Time", label: "Latencia & Drift" },
                { value: "Mailing", label: "Alertas Activas" },
                { value: "ISO 42001", label: "Gobernanza IA" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}>
                  MLOps Monitor Active
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <MayiaCard onOpenInfo={onOpenLakehouseInfo} />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={GitBranch} 
              color="#52b788" 
              bg="rgba(82, 183, 136, 0.15)" 
              title="Agentes Transversales de Inteligencia Artificial" 
              iconImage="/assets/images/card-icons/agentes_transversales.jpg"
              desc="Son entidades inteligentes capaces de entender objetivos de negocio, consultar datos privados, coordinar equipos, ejecutar business workflows y operar procesos críticos entre distintas áreas de la organización" 
              buttonText="Agenda una cita"
              beforeText={
                <>
                  <div style={{ 
                    borderRadius: 16, 
                    overflow: 'hidden', 
                    height: 180, 
                    position: 'relative', 
                    background: '#0B1511', 
                    marginBottom: 12,
                    border: `2px solid rgba(82,183,136,0.35)`,
                    boxShadow: '0 4px 15px rgba(82,183,136,0.15)',
                    transition: 'all 0.3s ease'
                  }}>
                    <BrainCanvas onPulse={() => {}} />
                  </div>
                  <div style={{ 
                    marginBottom: 16, 
                    padding: '10px 14px', 
                    borderRadius: 12, 
                    background: 'linear-gradient(135deg, rgba(82,183,136,0.08), rgba(82,183,136,0.03))',
                    border: '1px solid rgba(82,183,136,0.2)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#52b788', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Un agente ejecuta
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#111827', marginTop: 2 }}>
                      Un sistema multi-agente MAYiA orquesta el negocio
                    </div>
                  </div>
                </>
              }
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: 8, 
                marginBottom: 16 
              }}>
                {[
                  "Automatizan procesos",
                  "Predictibilidad de escenarios",
                  "Actuan y dan soluciones a problemas",
                  "Alertas de inteligencia",
                  "Coordinan Tareas",
                  "Aprenden y mejoran"
                ].map((bloque, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '10px 6px', 
                      background: 'linear-gradient(135deg, rgba(82,183,136,0.06), #F9FAFB)', 
                      border: '1px solid rgba(82, 183, 136, 0.25)', 
                      borderRadius: 12,
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#1f2937',
                      lineHeight: 1.25
                    }}
                  >
                    {bloque}
                  </div>
                ))}
              </div>
            </StandardCard>
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={LineChart} 
              color="#4ade80" 
              bg="rgba(74,222,128,0.15)" 
              title="Desarrollo IA por Sector" 
              iconImage="/assets/images/card-icons/ia_sector.jpg"
              desc=""
              buttonText="Agenda una cita"
              videoSrc={tiendaServicio}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#4ade80', border: '1px solid rgba(74,222,128,0.2)' }}>
                  Multi-Industry Engines
                </div>
              }
            >
              <SectoresGrid />
            </StandardCard>
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={FileText} 
              color="#f87171" 
              bg="rgba(248,113,113,0.15)" 
              title="Desarrollo IA Estatal" 
              iconImage="/assets/images/card-icons/ia_estatal.jpg"
              desc="Desarrollamos soluciones de inteligencia artificial por estado, alineadas a las unidades económicas y sectores productivos de cada región. Impulsamos la transformación digital, automatización, analítica y toma de decisiones en gobierno, industria, comercio y servicios." 
              buttonText='Agenda Una Cita Ahora'
              beforeText={
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 10,
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(248, 113, 113, 0.4)',
                    borderRadius: 20,
                    padding: '4px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                    pointerEvents: 'none'
                  }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #f87171, #ef4444)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin size={11} color="#fff" />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#1f2937' }}>
                      Haz clic en un estado
                    </span>
                  </div>

                  <MexicoEsMayia 
                    onlyMap={true} 
                    onStateClick={(stateId) => onOpenMap?.(stateId)} 
                  />
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={Wrench} 
              color="#fb923c" 
              bg="rgba(251,146,60,0.15)" 
              title="Inteligencia Artificial para PYMES" 
              iconImage="/assets/images/card-icons/ia_pymes.jpg"
              desc="Conoce nuestras Píldoras de Inteligencia Artificial. Soluciones de IA listas para usar que ayudan a las pequeñas y medianas empresas a vender más, atender clientes, automatizar tareas y tomar decisiones con datos, sin invertir en talento especializado o infraestructura propia." 
              videoSrc="/assets/images/productos/whatsFaq.webm"
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#fb923c', border: '1px solid rgba(251,146,60,0.2)' }}>
                  WhatsApp AI Bot
                </div>
              }
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: 8, 
                marginBottom: 16 
              }}>
                {[
                  "Automatización con IA",
                  "Agentes de IA",
                  "IA para Ventas"
                ].map((bloque, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '10px 6px', 
                      background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.08), #F9FAFB)', 
                      border: '1px solid rgba(251, 146, 60, 0.3)', 
                      borderRadius: 12,
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#1f2937',
                      lineHeight: 1.25
                    }}
                  >
                    {bloque}
                  </div>
                ))}
              </div>
            </StandardCard>
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={ScanEye} 
              color="#00c853" 
              bg="rgba(0,200,83,0.15)" 
              title="Cámaras con Inteligencia Artificial (Computer Vision)" 
              iconImage="/assets/images/card-icons/computer_vision.jpg"
              desc="Computer Vision para que tus  cámaras vean, detecten, alerten y actúen. Implementamos visión artificial para análisis de video, detección de objetos, armas de fuego, incendios, accidentes, conteo e inventarios, equipo de seguridad, violación de perímetros, monitoreo inteligente y visión en tiempo real." 
              videoSrc={camaraVideo}
              buttonText="Agenda una cita ahora"
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#00c853', border: '1px solid rgba(0,200,83,0.2)' }}>
                  Live Vision Engine
                </div>
              }
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: 8, 
                marginBottom: 16 
              }}>
                {[
                  "Centro de Entretenimiento",
                  "Tiendas y Centros Comerciales",
                  "Ciudades Inteligentes",
                  "Empresas y Residenciales",
                  "Seguridad Privada",
                  "Escuelas Y Universidades"
                ].map((bloque, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '10px 6px', 
                      background: 'linear-gradient(135deg, rgba(0, 200, 83, 0.08), #F9FAFB)', 
                      border: '1px solid rgba(0, 200, 83, 0.3)', 
                      borderRadius: 12,
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#1f2937',
                      lineHeight: 1.25
                    }}
                  >
                    {bloque}
                  </div>
                ))}
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); setShowComputerVisionVideo(true); }}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, rgba(0,200,83,0.12), rgba(0,200,83,0.04))',
                  border: '1px solid rgba(0, 200, 83, 0.35)',
                  borderRadius: 10,
                  padding: '10px 14px',
                  color: '#008a38',
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0,200,83,0.06)'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,200,83,0.2)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,200,83,0.12), rgba(0,200,83,0.04))'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Play size={14} fill="#008a38" color="#008a38" /> Ver video
              </button>
            </StandardCard>
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={ShoppingBag} 
              color="#f87171" 
              bg="rgba(248,113,113,0.15)" 
              title="Market Place de Soluciones" 
              iconImage="/assets/images/card-icons/marketplace_soluciones.jpg"
              desc="Encuentra soluciones de IA listas para implementar. Explora herramientas, agentes y automatizaciones creadas para resolver problemas reales de negocio." 
              videoSrc="/assets/images/productos/portalia.webm"
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}>
                  App Store Ready
                </div>
              }
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
                {marketplaceSolutions.map((sol, idx) => (
                  <SolutionCardItem 
                    key={idx} 
                    sol={sol} 
                    onClick={() => setSelectedSolution(sol)} 
                  />
                ))}
              </div>
            </StandardCard>
          </Wrapper>

          <Wrapper category="Capacitación">
            <AcademiaCard />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={Link2} 
              color="#06b6d4" 
              bg="rgba(6,182,212,0.15)" 
              title="Inteligencia Artificial Física e Interoperabilidad" 
              iconImage="/assets/images/card-icons/ia_fisica_interoperabilidad.svg"
              videoSrc={interoperabilidadVideo}
              desc="Conectamos robots, cámaras, drones, sensores, datos, sistemas, nube y agentes de IA para crear ecosistemas inteligentes capaces de percibir, analizar, decidir y actuar en tiempo real." 
              buttonText='Agenda una cita ahora'
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: 8, 
                marginBottom: 16 
              }}>
                {[
                  "IoT",
                  "Fase de Desarrollo",
                  "Robots",
                  "Arquitectura",
                  "Drones",
                  "Disponibilidad",
                  "Cámaras"
                ].map((bloque, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      textAlign: 'center',
                      gap: 6,
                      padding: '10px 8px', 
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.03))', 
                      border: '1px solid rgba(6, 182, 212, 0.35)', 
                      borderRadius: 12,
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#0891b2',
                      lineHeight: 1.25,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                      gridColumn: idx === 6 ? '1 / -1' : 'auto'
                    }}
                  >
                    <span style={{ 
                      width: 6, 
                      height: 6, 
                      borderRadius: '50%', 
                      background: '#06b6d4', 
                      flexShrink: 0 
                    }} />
                    {bloque}
                  </div>
                ))}
              </div>
            </StandardCard>
          </Wrapper>

          <Wrapper category="Infraestructura">
            <StandardCard 
              icon={Cpu} 
              color="#8b5cf6" 
              bg="rgba(139,92,246,0.15)" 
              title="Inteligencia Artificial y Computación Cuántica" 
              iconImage="/assets/images/card-icons/computacion_cuantica.svg"
              buttonText='Agenda una cita ahora'
              videoSrc={quantumVideo}
              desc="Desarrollamos soluciones para problemas complejos mediante inteligencia artificial y cómputo cuántico, aplicados a optimización, simulación, análisis predictivo y toma de decisiones empresariales y de industria." 
              stats={[
                { value: "Habilitado", label: "Preparación" },
                { value: "Quantum", label: "Algoritmos" },
                { value: "¡Ya Disponible!", label: "Disponibilidad" }
              ]}
            />
          </Wrapper>

        </motion.div>
      </div>

      {showComputerVisionVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
          onClick={() => setShowComputerVisionVideo(false)}
        >
          <div 
            style={{
              background: '#090d16',
              borderRadius: 24,
              maxWidth: 800,
              width: '100%',
              border: `2px solid #00c853`,
              boxShadow: `0 25px 50px -12px rgba(0, 200, 83, 0.4)`,
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: 18, fontWeight: 800 }}>Desarrollo IA en Computer Vision - Sendero Seguro</h3>
              <button 
                onClick={() => setShowComputerVisionVideo(false)}
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
                controlsList="nodownload"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                style={{ width: '100%', borderRadius: 12, maxHeight: '60vh', userSelect: 'none' }}
              >
                <source src={senderoSeguroVideo} type="video/mp4" />
                Tu navegador no soporta reproducción de video.
              </video>
            </div>
          </div>
        </div>
      )}

      {selectedSolution && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
          onClick={() => setSelectedSolution(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            style={{
              background: '#090d16',
              borderRadius: isMobile ? 18 : 28,
              maxWidth: 550,
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              border: `2px solid ${selectedSolution.color}`,
              boxShadow: `0 25px 50px -12px ${hexToRgba(selectedSolution.color, 0.35)}`,
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: isMobile ? '16px 20px' : '24px 28px', 
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ 
                  width: 44, 
                  height: 44, 
                  borderRadius: 12, 
                  background: `${selectedSolution.color}20`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: selectedSolution.color,
                  border: `1.5px solid ${selectedSolution.color}40`,
                  flexShrink: 0
                }}>
                  {(() => {
                    const IconComp = selectedSolution.icon;
                    return <IconComp size={22} strokeWidth={2.5} />;
                  })()}
                </div>
                <div>
                  <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: isMobile ? 18 : 20, fontWeight: 800 }}>{selectedSolution.title}</h3>
                  <p style={{ margin: 0, fontSize: 11, color: selectedSolution.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>
                    Implementación de IA
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedSolution(null)}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                  flexShrink: 0
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              >
                ✕
              </button>
            </div>

            {/* Contenido del Modal */}
            <div style={{ padding: isMobile ? '20px' : '28px', overflowY: 'auto', flex: 1 }} className="hide-scrollbar">
              <p style={{ fontSize: 14, color: '#E5E7EB', lineHeight: 1.6, margin: 0, marginBottom: 24, fontWeight: 500 }}>
                {selectedSolution.desc}
              </p>

              <h4 style={{ margin: 0, color: '#9CA3AF', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>
                Características Clave
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {selectedSolution.details.map((detail, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: 6, 
                      height: 6, 
                      borderRadius: '50%', 
                      background: selectedSolution.color, 
                      marginTop: 7, 
                      flexShrink: 0 
                    }} />
                    <span style={{ fontSize: 13, color: '#D1D5DB', lineHeight: 1.5, fontWeight: 500 }}>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer / Cierre */}
            <div style={{ 
              padding: isMobile ? '16px 20px' : '20px 28px', 
              background: 'rgba(255,255,255,0.02)', 
              display: 'flex', 
              justifyContent: 'flex-end', 
              borderTop: '1px solid rgba(255,255,255,0.06)',
              flexShrink: 0
            }}>
              <button
                onClick={() => setSelectedSolution(null)}
                style={{
                  background: selectedSolution.color,
                  color: '#090d16',
                  border: 'none',
                  borderRadius: 10,
                  padding: '10px 20px',
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: `0 4px 14px ${hexToRgba(selectedSolution.color, 0.3)}`,
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
