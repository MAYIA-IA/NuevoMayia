import React, { useState } from 'react';
import {
  Server, MapPin, Cpu, FlaskConical, Briefcase,
  Bot, ShoppingBag, Database, Cloud, ShieldCheck, ArrowRight,
} from 'lucide-react';
import { brandingConfig } from '../../../config/branding';

const { colores } = brandingConfig;

interface Service {
  num: string;
  tag: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const SERVICES: Service[] = [
  {
    num: '01', tag: 'INFRAESTRUCTURA',
    title: '30 Centros de Datos Edge',
    desc: 'Red distribuida de alta disponibilidad ubicada estratégicamente en todo el país.',
    icon: <Server size={22} />, color: '#6366F1',
  },
  {
    num: '02', tag: 'ALCANCE',
    title: 'Presencia Nacional',
    desc: 'Cobertura en los 32 estados de México. Tu empresa no tiene límites geográficos.',
    icon: <MapPin size={22} />, color: '#10B981',
  },
  {
    num: '03', tag: 'HARDWARE',
    title: 'Infraestructura Propia',
    desc: 'GPU, redes, energía y coding bajo un mismo techo. Soberanía tecnológica real.',
    icon: <Cpu size={22} />, color: '#F59E0B',
  },
  {
    num: '04', tag: 'I+D',
    title: 'Laboratorios IA + Academia',
    desc: 'I+D continuo y formación especializada. Innovamos hoy para que lideres mañana.',
    icon: <FlaskConical size={22} />, color: '#8B5CF6',
  },
  {
    num: '05', tag: 'CONSULTORÍA',
    title: 'Consultoría VATYCS',
    desc: 'Estrategia, gobierno e implementación. De la visión al valor real.',
    icon: <Briefcase size={22} />, color: '#EC4899',
  },
  {
    num: '06', tag: 'DEV',
    title: 'Desarrollo IA Enterprise',
    desc: 'Apps a medida, agentes inteligentes e integración con tus sistemas actuales.',
    icon: <Bot size={22} />, color: '#06B6D4',
  },
  {
    num: '07', tag: 'MARKETPLACE',
    title: 'Marketplace + Píldoras IA',
    desc: 'Soluciones listas para usar. Rápido time-to-value sin grandes inversiones.',
    icon: <ShoppingBag size={22} />, color: '#F27405',
  },
  {
    num: '08', tag: 'DATA',
    title: 'Squad de Análisis de Datos',
    desc: 'Data engineering, BI y MLOps. Tus datos convertidos en decisiones de negocio.',
    icon: <Database size={22} />, color: '#14B8A6',
  },
  {
    num: '09', tag: 'CLOUD',
    title: 'Nube Soberana',
    desc: 'Datos y cómputo en México. Cumplimiento regulatorio, latencia óptima y control total.',
    icon: <Cloud size={22} />, color: '#3B82F6',
  },
  {
    num: '10', tag: 'SEGURIDAD',
    title: 'SOC + Embajadores MAYiA',
    desc: '7 certificaciones ISO, ciberseguridad 24/7 y una comunidad que multiplica el impacto.',
    icon: <ShieldCheck size={22} />, color: '#EF4444',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered
          ? `linear-gradient(135deg, ${service.color}12 0%, ${service.color}06 100%)`
          : `linear-gradient(135deg, ${colores.fondoSecundario} 0%, ${colores.fondoTerciario}80 100%)`,
        borderRadius: '18px',
        padding: '22px 20px 20px',
        border: `1px solid ${hovered ? service.color + '50' : colores.borde + '80'}`,
        borderLeft: `4px solid ${service.color}`,
        boxShadow: hovered
          ? `0 12px 32px ${service.color}25, 0 4px 12px rgba(0,0,0,0.06)`
          : `0 2px 8px rgba(0,0,0,0.04)`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: 'default',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {/* Número decorativo fondo */}
      <div style={{
        position: 'absolute',
        top: '-8px',
        right: '14px',
        fontSize: '56px',
        fontWeight: '900',
        color: service.color,
        opacity: hovered ? 0.12 : 0.07,
        lineHeight: 1,
        transition: 'opacity 0.28s ease',
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {service.num}
      </div>

      {/* Top row: tag chip + icon */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontSize: '10px',
          fontWeight: '700',
          letterSpacing: '0.08em',
          color: service.color,
          background: `${service.color}15`,
          padding: '3px 9px',
          borderRadius: '20px',
          textTransform: 'uppercase' as const,
        }}>
          {service.tag}
        </span>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          background: `${service.color}18`,
          border: `1px solid ${service.color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: service.color,
          transition: 'transform 0.28s ease',
          transform: hovered ? 'scale(1.1) rotate(-4deg)' : 'scale(1)',
        }}>
          {service.icon}
        </div>
      </div>

      {/* Title */}
      <h4 style={{
        margin: 0,
        fontSize: '15px',
        fontWeight: '700',
        color: colores.textoClaro,
        lineHeight: 1.3,
      }}>
        {service.title}
      </h4>

      {/* Description */}
      <p style={{
        margin: 0,
        fontSize: '12.5px',
        color: colores.textoMedio,
        lineHeight: 1.55,
      }}>
        {service.desc}
      </p>
    </div>
  );
};

interface EdgeNETServicesGridProps {
  onNavigate?: (section: string) => void;
}

export const EdgeNETServicesGrid: React.FC<EdgeNETServicesGridProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Section header */}
      <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <h2 style={{
          margin: 0,
          fontSize: '22px',
          fontWeight: '900',
          color: colores.textoClaro,
          letterSpacing: '-0.4px',
        }}>
          Somos la red de IA mas grande de Mexico
        </h2>
        <button
          onClick={() => onNavigate?.('analiticos')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '999px',
            border: 'none',
            background: '#C0D966',
            color: '#1a1a1a',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            boxShadow: '0 4px 16px #C0D96640',
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px #C0D96660';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px #C0D96640';
          }}
        >
          Mexico es MAYiA
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Responsive grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '16px',
      }}>
        {SERVICES.map((s) => (
          <ServiceCard key={s.num} service={s} />
        ))}
      </div>
    </div>
  );
};
