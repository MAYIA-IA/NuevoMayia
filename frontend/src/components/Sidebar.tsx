import React, { useState } from 'react';
import {
  LayoutDashboard,
  Building2,
  Users,
  Shield,
  GraduationCap,
  Handshake,
  Map,
  ChevronLeft,
  Network,
  Pill,
  ShoppingBag,
  Factory,
} from 'lucide-react';
import { brandingConfig } from '../config/branding';
import mayiaLogo from '../assets/logosNativos/mayiaLogoBlanco.png';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

/* ── Datos de menú ─────────────────────────────────────────────── */

// Menú principal (Ligero y enfocado a negocio)
const menuItems = [
  { id: 'dashboard',           nombre: 'Centro de Control',   icono: LayoutDashboard },
  { id: 'ecosistema',          nombre: 'Ecosistema MAYiA',    icono: Network },
  { id: 'partners',            nombre: 'Partners',            icono: Handshake },
  { id: 'ia-empresarial',      nombre: 'Soluciones I.A.',     icono: Building2 },
  { id: 'ia-por-sector',       nombre: 'IA por Sector',       icono: Factory },
  { id: 'empleados-digitales', nombre: 'Empleados Digitales', icono: Users },
  { id: 'hackaton',            nombre: 'Marketplace',         icono: ShoppingBag },
  { id: 'pildoras-ia',         nombre: 'Píldoras IA',         icono: Pill },
  { id: 'ciberseguridad',      nombre: 'SOC Ciberseguridad',  icono: Shield },
  { id: 'academia',            nombre: 'Academia MAYiA',      icono: GraduationCap },
  { id: 'polos-desarrollo',    nombre: 'Polos de desarrollo inteligente', icono: Map },
];

/* ── Sub-componentes ───────────────────────────────────────────── */

interface ColoresType {
  primario: string;
  acento?: string;
  textoMedio: string;
  textoOscuro: string;
  fondoTerciario: string;
  borde: string;
  [key: string]: string | undefined;
}


function SidebarItem({
  item,
  isActive,
  isCollapsed,
  onClick,
  colores,
}: {
  item: { id: string; nombre: string; icono: React.ElementType };
  isActive: boolean;
  isCollapsed: boolean;
  onClick: () => void;
  colores: ColoresType;
}) {
  const Icon = item.icono;

  return (
    <button
      onClick={onClick}
      title={isCollapsed ? item.nombre : undefined}
      style={{
        width: isCollapsed ? '48px' : '100%',
        margin: isCollapsed ? '0 auto 6px' : '0 0 3px 0',
        display: 'flex',
        alignItems: 'center',
        padding: isCollapsed ? '6px' : '9px 12px',
        borderRadius: isCollapsed ? '14px' : '10px',
        backgroundColor: isActive ? colores.primario : 'transparent',
        color: isActive ? '#FFFFFF' : colores.textoMedio,
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.25, 1, 0.2, 1)',
        boxShadow: isActive && isCollapsed ? `0 6px 16px ${colores.primario}50` : 'none',
      }}
      onMouseEnter={e => {
        if (!isActive) e.currentTarget.style.backgroundColor = colores.fondoTerciario;
        e.currentTarget.style.transform = isCollapsed ? 'scale(1.08)' : 'translateX(4px)';
      }}
      onMouseLeave={e => {
        if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.transform = isCollapsed ? 'scale(1)' : 'translateX(0)';
      }}
    >
      {/* Icono */}
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: isCollapsed ? '10px' : '50%',
          backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : colores.fondoTerciario,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'border-radius 0.35s ease, background-color 0.3s ease',
        }}
      >
        <Icon size={isCollapsed ? 19 : 17} />
      </div>

      {/* Etiqueta */}
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          textAlign: 'left',
          opacity: isCollapsed ? 0 : 1,
          width: isCollapsed ? 0 : 'auto',
          marginLeft: isCollapsed ? 0 : '10px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          transition: 'all 0.35s cubic-bezier(0.25, 1, 0.2, 1)',
          transform: isCollapsed ? 'translateX(-8px)' : 'translateX(0)',
        }}
      >
        {item.nombre}
      </span>
    </button>
  );
}

/* ── Componente principal ──────────────────────────────────────── */

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const { empresa, colores } = brandingConfig;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarWidth = isCollapsed ? '72px' : '220px';

  return (
    <div
      style={{
        width: sidebarWidth,
        height: '100%',
        backgroundColor: colores.fondoSecundario,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'width 0.45s cubic-bezier(0.25, 1, 0.2, 1)',
        zIndex: 400,
      }}
    >
      <style>{`
        @keyframes float-social {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .social-float-anim {
          animation: float-social 3s ease-in-out infinite;
        }
      `}</style>

      {/* Botón colapsar */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          position: 'absolute',
          right: '-13px',
          top: '22px',
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          backgroundColor: colores.primario,
          color: '#000',
          display: 'flex',
          alignItems: 'center',
          border: '3px solid #000000',
          cursor: 'pointer',
          zIndex: 100,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'transform 0.3s ease, background-color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <div style={{ transition: 'transform 0.45s ease', transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronLeft size={14} strokeWidth={3} />
        </div>
      </button>

      {/* Logo */}
      <div
        style={{
          flexShrink: 0,
          background: '#5a5a5a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '72px',
          padding: isCollapsed ? '0 8px' : '0 20px',
          borderBottom: '1px solid #1a1a1a',
          transition: 'padding 0.45s ease',
          overflow: 'hidden',
        }}
      >
        <img
          src={mayiaLogo}
          alt={empresa.nombre}
          style={{
            width: isCollapsed ? '40px' : '100%',
            maxWidth: '140px',
            maxHeight: '36px',
            objectFit: 'contain',
            transition: 'width 0.45s ease',
          }}
          onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      {/* Scroll area con grupos */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          paddingBottom: 20,
          scrollbarWidth: 'thin',
          scrollbarColor: `${colores.borde} transparent`,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <nav style={{ padding: '8px 10px 0', flex: 1 }}>
          {menuItems.map(item => (
            <SidebarItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              isCollapsed={isCollapsed}
              onClick={() => onSectionChange(item.id)}
              colores={colores as ColoresType}
            />
          ))}
        </nav>
      </div>

      {/* Floating Social Media Icons */}
      <div style={{
          display: 'flex',
          flexDirection: isCollapsed ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 10px',
          borderTop: `1px solid ${colores.borde}`,
          marginTop: 'auto',
          flexWrap: 'wrap'
        }}>
          {[
            { iconPath: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z', href: 'https://www.linkedin.com/company/mayia-edgenet/' },
            { iconPath: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', href: 'https://x.com/MAYia_Mx' },
            { iconPath: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', href: 'https://www.facebook.com/MAYiaInteligenciaArtificial?locale=es_LA' },
            { iconPath: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01 M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z', href: 'https://www.instagram.com/mayia.inteligencia.artificial/' },
            { iconPath: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z', href: 'https://www.youtube.com/@MAYIAInteligenciaArtificial' }
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-float-anim"
              style={{
                color: colores.textoMedio,
                transition: 'color 0.3s ease, transform 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animationDelay: `${idx * 0.15}s`
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = colores.primario;
                e.currentTarget.style.transform = 'scale(1.15)';
                e.currentTarget.style.animationPlayState = 'paused';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = colores.textoMedio;
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.animationPlayState = 'running';
              }}
            >
              <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d={social.iconPath} />
              </svg>
            </a>
          ))}
        </div>
    </div>
  );
};