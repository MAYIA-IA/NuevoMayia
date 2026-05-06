import React, { useState } from 'react';
import { 
  LayoutDashboard,
  TrendingUp,
  Building2,
  Layers,
  Users,
  Zap,
  Shield,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { brandingConfig } from '../config/branding';
import mayiaLogo from '../assets/logosNativos/mayiaLogoBlanco.png';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'dashboard', nombre: 'Dashboard General', icono: LayoutDashboard },
  { id: 'analiticos', nombre: 'México es MAYiA', icono: TrendingUp },
  { id: 'ia-empresarial', nombre: 'I.A. Empresarial', icono: Building2 },
  { id: 'ia-sectores', nombre: 'IA Sectores', icono: Layers },
  { id: 'empleados-digitales', nombre: 'Empleados Digitales', icono: Users },
  { id: 'pildoras-ia', nombre: 'Píldoras IA', icono: Zap },
];

const extraSections = [
  { id: 'ciberseguridad', nombre: 'Ciberseguridad', icono: Shield },
  { id: 'academia', nombre: 'Academia MAYiA', icono: GraduationCap },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const { empresa, colores } = brandingConfig;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarWidth = isCollapsed ? '88px' : '240px';

  return (
    <div 
      style={{ 
        width: sidebarWidth,
        height: '100%',
        backgroundColor: colores.fondoSecundario,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'width 0.5s cubic-bezier(0.25, 1, 0.2, 1)',
        zIndex: 400,
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          position: 'absolute',
          right: '-14px',
          top: '22px',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: colores.primario,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `3px solid ${colores.fondoPrincipal}`,
          cursor: 'pointer',
          zIndex: 100,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.15)';
          e.currentTarget.style.backgroundColor = colores.acento;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = colores.primario;
        }}
      >
        <div style={{ 
          transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.2, 1)',
          transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
          <ChevronLeft size={16} strokeWidth={3} />
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
          transition: 'padding 0.5s cubic-bezier(0.25, 1, 0.2, 1)',
          overflow: 'hidden',
        }}
      >
        <img
          src={mayiaLogo}
          alt={empresa.nombre}
          style={{
            width: isCollapsed ? '48px' : '100%',
            maxWidth: '140px',
            maxHeight: '36px',
            objectFit: 'contain',
            transition: 'width 0.5s cubic-bezier(0.25, 1, 0.2, 1)',
          }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      {/* Label DEPARTAMENTOS */}
      <div style={{ 
        padding: isCollapsed ? '0' : '16px 16px 8px 16px',
        height: isCollapsed ? '16px' : 'auto',
        opacity: isCollapsed ? 0 : 1,
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.2, 1)',
      }}>
        <span style={{ 
          fontSize: '11px', 
          fontWeight: '700', 
          textTransform: 'uppercase', 
          letterSpacing: '0.08em',
          color: colores.textoOscuro,
          whiteSpace: 'nowrap'
        }}>
          DEPARTAMENTOS
        </span>
      </div>

      {/* Menú Principal */}
      <nav style={{ flex: '0 0 auto', padding: '0 12px', overflowX: 'hidden', overflowY: 'auto', marginTop: isCollapsed ? '16px' : '0' }}>
        {menuItems.map((item, index) => {
          const Icon = item.icono;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              style={{
                width: isCollapsed ? '48px' : '100%',
                margin: isCollapsed ? '0 auto 8px' : '0 0 4px 0',
                display: 'flex',
                alignItems: 'center',
                padding: isCollapsed ? '6px' : '10px 14px',
                borderRadius: isCollapsed ? '14px' : '12px',
                backgroundColor: isActive ? colores.primario : 'transparent',
                color: isActive ? '#FFFFFF' : colores.textoMedio,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.2, 1)',
                boxShadow: isActive && isCollapsed ? `0 8px 20px ${colores.primario}50` : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = colores.fondoTerciario;
                e.currentTarget.style.transform = isCollapsed ? 'scale(1.08)' : 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = isCollapsed ? 'scale(1)' : 'translateX(0)';
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: isCollapsed ? '10px' : '50%',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : colores.fondoTerciario,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'border-radius 0.4s ease, background-color 0.4s ease',
                }}
              >
                <Icon size={isCollapsed ? 20 : 18} />
              </div>
              <span style={{ 
                fontSize: '14px', 
                fontWeight: '600', 
                textAlign: 'left',
                opacity: isCollapsed ? 0 : 1,
                width: isCollapsed ? 0 : 'auto',
                marginLeft: isCollapsed ? 0 : '12px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.2, 1)',
                transform: isCollapsed ? 'translateX(-10px)' : 'translateX(0)'
              }}>
                {item.nombre}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer buttons - Secciones Extra */}
      <div style={{ 
        padding: isCollapsed ? '12px 0' : '12px', 
        borderTop: `1px solid ${colores.borde}`, 
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCollapsed ? 'center' : 'stretch',
        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.2, 1)',
      }}>
        {extraSections.map((section) => {
          const Icon = section.icono;
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              style={{
                width: isCollapsed ? '48px' : '100%',
                display: 'flex',
                alignItems: 'center',
                padding: isCollapsed ? '6px' : '10px 14px',
                borderRadius: isCollapsed ? '14px' : '12px',
                marginBottom: '8px',
                backgroundColor: isActive ? colores.primario : colores.fondoTerciario,
                color: isActive ? '#FFFFFF' : colores.textoMedio,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.2, 1)',
                boxShadow: isActive && isCollapsed ? `0 8px 20px ${colores.primario}50` : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = colores.fondoPrincipal;
                e.currentTarget.style.transform = isCollapsed ? 'scale(1.08)' : 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = colores.fondoTerciario;
                e.currentTarget.style.transform = isCollapsed ? 'scale(1)' : 'translateX(0)';
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: isCollapsed ? '10px' : '50%',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : colores.fondoPrincipal,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'border-radius 0.4s ease, background-color 0.4s ease',
                }}
              >
                <Icon size={isCollapsed ? 20 : 18} />
              </div>
              <span style={{ 
                fontSize: '14px', 
                fontWeight: '600', 
                flex: 1, 
                textAlign: 'left',
                opacity: isCollapsed ? 0 : 1,
                width: isCollapsed ? 0 : 'auto',
                marginLeft: isCollapsed ? 0 : '12px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.2, 1)',
                transform: isCollapsed ? 'translateX(-10px)' : 'translateX(0)'
              }}>
                {section.nombre}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};