import React, { useState, useEffect, useRef, useCallback } from 'react';
import { brandingConfig } from '../config/branding';
import {
  TrendingUp,
  Newspaper,
  Handshake,
  Building2,
  Layers,
  Users,
  Zap,
  Shield,
  GraduationCap,
  Trophy,
  Thermometer,
  Network,
  GitBranch,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Grip,
} from 'lucide-react';

/* ── Carousel images from existing assets ── */
import carouselConsultor from '../assets/carousel/1.-ConsultorIA.png';
import carouselAgentes from '../assets/carousel/2.-Agentes.png';
import carouselMarketplace from '../assets/carousel/3.-Marketplace.png';
import carouselCamaras from '../assets/carousel/4.-Cámaras.png';
import carouselOrigen from '../assets/carousel/5.-Origen.png';
import academiaImg from '../assets/AcademiaIA/Astronauta1.jpg';
import agente1 from '../assets/AgentesConsultores/Agente1.jpeg';
import agente2 from '../assets/AgentesConsultores/Agente2.jpeg';
import robotMayia from '../assets/AgentesConsultores/RobotMayia.png';
import embajadorDulce from '../assets/Embajadores/Dulce.jpeg';

/* ── Section card data ── */
interface SectionCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accent: string;
  image?: string;
  span?: 'wide' | 'tall' | 'large' | 'normal';
}

const sectionCards: SectionCard[] = [
  {
    id: 'analiticos',
    title: 'México es MAYiA',
    subtitle: 'Analíticos de IA en el país',
    icon: TrendingUp,
    accent: '#5aab00',
    image: carouselOrigen,
    span: 'tall',
  },
  {
    id: 'noticias',
    title: 'Noticias IA',
    subtitle: 'Lo último en inteligencia artificial',
    icon: Newspaper,
    accent: '#0099cc',
    image: carouselConsultor,
    span: 'normal',
  },
  {
    id: 'partners',
    title: 'Partners',
    subtitle: 'Alianzas estratégicas tech',
    icon: Handshake,
    accent: '#c07a00',
    image: carouselAgentes,
    span: 'normal',
  },
  {
    id: 'ia-empresarial',
    title: 'I.A. Empresarial',
    subtitle: 'Soluciones corporativas de IA',
    icon: Building2,
    accent: '#8b35cc',
    image: carouselMarketplace,
    span: 'large',
  },
  {
    id: 'ia-sectores',
    title: 'IA por Sector',
    subtitle: 'Soluciones verticales',
    icon: Layers,
    accent: '#0a8c5a',
    image: carouselCamaras,
    span: 'normal',
  },
  {
    id: 'termometro-ia',
    title: 'Termómetro IA',
    subtitle: 'Estado de la IA en México',
    icon: Thermometer,
    accent: '#e04545',
    span: 'normal',
  },
  {
    id: 'hackaton',
    title: 'Hackatón Intel',
    subtitle: 'Competencias de innovación',
    icon: Trophy,
    accent: '#c04a00',
    span: 'normal',
  },
  {
    id: 'empleados-digitales',
    title: 'Empleados Digitales',
    subtitle: 'Agentes y asistentes IA',
    icon: Users,
    accent: '#1a6bb5',
    image: agente1,
    span: 'tall',
  },
  {
    id: 'pildoras-ia',
    title: 'Píldoras IA',
    subtitle: 'Micro-soluciones listas',
    icon: Zap,
    accent: '#a01ab5',
    image: agente2,
    span: 'normal',
  },
  {
    id: 'ciberseguridad',
    title: 'Ciberseguridad',
    subtitle: 'Protección inteligente 24/7',
    icon: Shield,
    accent: '#b5002e',
    image: robotMayia,
    span: 'normal',
  },
  {
    id: 'embajadores',
    title: 'Embajadores',
    subtitle: 'Comunidad MAYiA',
    icon: Star,
    accent: '#c07a00',
    image: embajadorDulce,
    span: 'normal',
  },
  {
    id: 'organigrama',
    title: 'Organigrama',
    subtitle: 'Nuestro equipo',
    icon: GitBranch,
    accent: '#007a6e',
    span: 'normal',
  },
  {
    id: 'academia',
    title: 'Academia MAYiA',
    subtitle: 'Formación especializada',
    icon: GraduationCap,
    accent: '#5aab00',
    image: academiaImg,
    span: 'wide',
  },
  {
    id: 'networking',
    title: 'Networking Hub',
    subtitle: 'Conexión y comunidad',
    icon: Network,
    accent: '#0099cc',
    span: 'normal',
  },
];

/* ── Single Card Component ── */
interface HubCardProps {
  card: SectionCard;
  index: number;
  onClick: (id: string, e: React.MouseEvent) => void;
  isVisible: boolean;
}

const HubCard: React.FC<HubCardProps> = ({ card, index, onClick, isVisible }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

  const getSpanClass = () => {
    switch (card.span) {
      case 'wide': return 'hub-card-wide';
      case 'tall': return 'hub-card-tall';
      case 'large': return 'hub-card-large';
      default: return 'hub-card-normal';
    }
  };

  return (
    <div
      className={`hub-card ${getSpanClass()}`}
      onClick={(e) => onClick(card.id, e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered ? 'scale(1.03) translateY(-4px)' : 'scale(1) translateY(0)'
          : 'scale(0.85) translateY(30px)',
        transition: `opacity 0.5s cubic-bezier(0.25, 1, 0.2, 1) ${index * 0.04}s, transform 0.4s cubic-bezier(0.25, 1, 0.2, 1)`,
        cursor: 'pointer',
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        background: card.image ? '#111' : `linear-gradient(145deg, ${card.accent}18, ${card.accent}08)`,
        border: `1.5px solid ${hovered ? card.accent : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered
          ? `0 16px 48px ${card.accent}35, 0 0 0 1px ${card.accent}25, inset 0 1px 0 rgba(255,255,255,0.05)`
          : '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.03)',
      }}
    >
      {/* Background Image */}
      {card.image && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${card.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: hovered ? 'brightness(0.55)' : 'brightness(0.4)',
            transition: 'filter 0.4s ease',
          }}
        />
      )}

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: card.image
            ? `linear-gradient(180deg, transparent 20%, ${card.accent}15 60%, rgba(0,0,0,0.85) 100%)`
            : 'none',
        }}
      />

      {/* Animated accent glow */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle at 30% 30%, ${card.accent}15, transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '20px',
        }}
      >
        {/* Icon badge — top right */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            background: `${card.accent}25`,
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${card.accent}40`,
            transition: 'transform 0.3s ease, background 0.3s ease',
            transform: hovered ? 'rotate(-8deg) scale(1.1)' : 'rotate(0) scale(1)',
          }}
        >
          <Icon size={22} color={card.accent} strokeWidth={1.8} />
        </div>

        {/* Animated tag pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '999px',
            background: `${card.accent}20`,
            backdropFilter: 'blur(8px)',
            border: `1px solid ${card.accent}30`,
            marginBottom: '10px',
            alignSelf: 'flex-start',
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.3s ease',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: card.accent,
              animation: 'hubDotPulse 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: card.accent,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {card.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            margin: 0,
            fontSize: card.span === 'large' || card.span === 'wide' ? '22px' : '18px',
            fontWeight: '800',
            color: '#fff',
            letterSpacing: '-0.3px',
            fontFamily: "'Inter', system-ui, sans-serif",
            lineHeight: 1.2,
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          {card.title}
        </h3>

        {/* Hover arrow indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: card.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1) translateX(0)' : 'scale(0.5) translateX(-10px)',
            transition: 'all 0.3s cubic-bezier(0.25, 1, 0.2, 1)',
            boxShadow: `0 4px 16px ${card.accent}50`,
          }}
        >
          <ChevronRight size={16} color="#fff" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

/* ── Main WelcomeHub Component ── */
interface WelcomeHubProps {
  onSectionChange: (section: string) => void;
}

const WelcomeHub: React.FC<WelcomeHubProps> = ({ onSectionChange }) => {
  const { colores } = brandingConfig;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const dragStartRef = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });
  const hasDraggedRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Drag to scroll (mouse + touch) ── */
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const el = containerRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      scrollLeft: el.scrollLeft,
      scrollTop: el.scrollTop,
    };
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const el = containerRef.current;
    if (!el) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    el.scrollLeft = dragStartRef.current.scrollLeft - dx;
    el.scrollTop = dragStartRef.current.scrollTop - dy;
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleCardClick = useCallback((id: string, e: React.MouseEvent) => {
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) return; // Es un drag, no un clic
    onSectionChange(id);
  }, [onSectionChange]);

  /* ── Navigation arrows ── */
  const scrollBy = useCallback((dir: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;
    const amount = dir === 'left' ? -400 : 400;
    el.scrollBy({ left: amount, behavior: 'smooth' });
    setShowScrollHint(false);
  }, []);

  return (
    <div
      className="welcome-hub-wrapper"
      style={{
        position: 'relative',
        margin: isMobile ? '0 8px 64px' : '0 0 64px',
        zIndex: 10,
      }}
    >
      {/* Header area - NOW OUTSIDE THE BLACK BOX */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          padding: isMobile ? '0 0 24px' : '0 0 32px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: isMobile ? '28px' : '36px',
              fontWeight: '300',
              color: colores.textoClaro,
              letterSpacing: '-0.5px',
              fontFamily: "'Inter', system-ui, sans-serif",
              lineHeight: 1.1,
            }}
          >
            Bienvenido a <span style={{ fontWeight: '800', color: colores.primarioOscuro }}>MAYiA</span>
          </h2>
          <p
            style={{
              margin: '8px 0 0',
              fontSize: isMobile ? '16px' : '20px',
              fontWeight: '500', // Un poco más destacado
              color: colores.textoClaro,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            El punto de encuentro de la IA en México
          </p>
          <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '600px' }}>
            <p
              style={{
                margin: 0,
                fontSize: isMobile ? '13px' : '15px',
                fontWeight: '400',
                color: colores.textoMedio,
                fontFamily: "'Inter', system-ui, sans-serif",
                lineHeight: 1.5,
              }}
            >
              Aquí convergen ideas, proyectos, laboratorios y personas construyendo el futuro. Explora demos, investigación, comunidades, herramientas y espacios donde la inteligencia artificial cobra vida.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: isMobile ? '13px' : '15px',
                fontWeight: '600',
                color: colores.acentoOscuro,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Selecciona una sección para comenzar o navega desde el menú lateral.
            </p>
          </div>
        </div>

        {/* Scroll instruction + navigation arrows */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: colores.fondoSecundario,
              border: `1px solid ${colores.borde}`,
            }}
          >
            <Grip size={14} color={colores.textoOscuro} />
            <span
              style={{
                fontSize: '11px',
                fontWeight: '500',
                color: colores.textoMedio,
                fontFamily: "'Inter', system-ui, sans-serif",
                letterSpacing: '0.02em',
              }}
            >
              Desliza para explorar →
            </span>
          </div>

          {!isMobile && (
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => scrollBy('left')}
                className="hub-nav-arrow"
                style={{ backgroundColor: colores.fondoSecundario, border: `1px solid ${colores.borde}`, color: colores.textoClaro }}
                aria-label="Scroll izquierda"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollBy('right')}
                className="hub-nav-arrow"
                style={{ backgroundColor: colores.fondoSecundario, border: `1px solid ${colores.borde}`, color: colores.textoClaro }}
                aria-label="Scroll derecha"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* The main box with borders and overflow hidden for backgrounds */}
      <div style={{
        position: 'relative',
        background: '#0A0A14',
        borderRadius: isMobile ? '20px' : '28px',
        border: '1px solid rgba(164, 217, 85, 0.12)',
        boxShadow: '0 8px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
        overflow: 'hidden',
        paddingBottom: '8px', // A bit of padding at the bottom inside the black box
      }}>
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colores.primario}10, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,153,204,0.06), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(164,217,85,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(164,217,85,0.02) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Scrollable Card Grid */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="hub-scroll-container"
        style={{
          position: 'relative',
          zIndex: 3,
          padding: isMobile ? '28px 20px 20px' : '36px 36px 28px',
          overflowX: 'auto',
          overflowY: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          touchAction: 'pan-x',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Bento Grid — wider than viewport so it scrolls */}
        <div
          className="hub-bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, minmax(180px, 1fr))',
            gridTemplateRows: 'repeat(2, 180px)',
            gridAutoFlow: 'dense',
            gap: isMobile ? '12px' : '14px',
            width: isMobile ? '1400px' : '1600px',
            minHeight: '380px',
          }}
        >
          {sectionCards.map((card, i) => (
            <HubCard
              key={card.id}
              card={card}
              index={i}
              onClick={handleCardClick}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      </div> {/* Cierra el contenedor negro principal */}

      {/* The seamless bump at the bottom */}
      <div style={{
        position: 'absolute',
        bottom: '-48px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '104px',
        height: '52px',
        background: '#0A0A14',
        borderBottomLeftRadius: '52px',
        borderBottomRightRadius: '52px',
        border: '1px solid rgba(164, 217, 85, 0.12)',
        borderTop: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        zIndex: 5,
      }}>
        {/* Cover the container's bottom border precisely */}
        <div style={{
          position: 'absolute',
          top: '-2px',
          left: '0',
          right: '0',
          height: '4px',
          background: '#0A0A14',
          zIndex: 1,
        }} />

        {/* Pulsing CTA button */}
        <div style={{ position: 'relative', top: '-24px', zIndex: 2 }}>
          <button
            className="hub-cta-pulse"
            onClick={() => {
              const el = document.getElementById('analiticos');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: colores.primario,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ChevronDown size={22} color="#0A0A14" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* "O continúa por scroll" text */}
      <div
        style={{
          position: 'absolute',
          bottom: '-72px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: "'Inter', system-ui, sans-serif",
            opacity: showScrollHint ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        >
          O continúa por scroll
        </span>
      </div>

      {/* ── Styles ── */}
      <style>{`
        /* Hide scrollbar but keep scrollable */
        .hub-scroll-container::-webkit-scrollbar {
          height: 0;
          display: none;
        }
        .hub-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Bento grid span classes */
        .hub-card-normal {
          grid-column: span 1;
          grid-row: span 1;
        }
        .hub-card-wide {
          grid-column: span 2;
          grid-row: span 1;
        }
        .hub-card-tall {
          grid-column: span 1;
          grid-row: span 2;
        }
        .hub-card-large {
          grid-column: span 2;
          grid-row: span 1;
        }

        /* Navigation arrows */
        .hub-nav-arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .hub-nav-arrow:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
          border-color: rgba(164,217,85,0.3);
          transform: scale(1.1);
        }

        /* Pulsing CTA */
        .hub-cta-pulse {
          animation: hubCtaPulse 2s ease-in-out infinite;
        }
        .hub-cta-pulse::before,
        .hub-cta-pulse::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid ${colores.primario};
          animation: hubCtaRing 2s ease-in-out infinite;
        }
        .hub-cta-pulse::after {
          inset: -10px;
          animation-delay: 0.3s;
        }

        @keyframes hubCtaPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px ${colores.primario}50; }
          50% { transform: scale(1.08); box-shadow: 0 0 40px ${colores.primario}70, 0 0 80px ${colores.primario}20; }
        }
        @keyframes hubCtaRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        /* Dot pulse inside cards */
        @keyframes hubDotPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        /* Responsive tweaks */
        @media (max-width: 767px) {
          .hub-bento-grid {
            grid-template-columns: repeat(7, minmax(150px, 1fr)) !important;
            grid-template-rows: repeat(2, 150px) !important;
            width: 1200px !important;
            min-height: 320px !important;
          }
          .hub-card-tall {
            grid-row: span 2;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeHub;
