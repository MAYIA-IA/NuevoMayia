import React, { useState } from 'react';
import {
  LayoutDashboard,
  Building2,
  Users,
  Shield,
  GraduationCap,
  ChevronLeft,
  Handshake,
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
  { id: 'ia-empresarial',      nombre: 'Soluciones I.A.',     icono: Building2 },
  { id: 'empleados-digitales', nombre: 'Empleados Digitales', icono: Users },
  { id: 'ciberseguridad',      nombre: 'SOC Ciberseguridad',  icono: Shield },
  { id: 'academia',            nombre: 'Academia MAYiA',      icono: GraduationCap },
  { id: 'partners',            nombre: 'Partners',            icono: Handshake },
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
          background: '#000000',
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
        }}
      >
        <nav style={{ padding: '8px 10px 0' }}>
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
    </div>
  );
};