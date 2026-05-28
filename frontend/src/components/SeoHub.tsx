import { useState } from 'react';
import {
  Newspaper, Radio, Mic2, Zap, Medal, ShoppingCart,
  Globe, Trophy, Cpu, Bot, Lightbulb, Thermometer,
  Network, TrendingUp, Building2, Map, HelpCircle,
  ExternalLink, ChevronRight,
} from 'lucide-react';
import { brandingConfig } from '../config/branding';
const { colores } = brandingConfig;

/* ── Hub modules data ──────────────────────────────────────── */

interface HubModule {
  id: string;
  icon: React.ElementType;
  label: string;
  desc: string;
  color: string;
  badge?: string;
  link?: string;
}

const MODULES_TOP: HubModule[] = [
  { id: 'blog', icon: Newspaper, label: 'Blog', desc: 'Artículos sobre IA y tecnología', color: '#A4D955', badge: 'Nuevo' },
  { id: 'noticias-rt', icon: Radio, label: 'Noticias en Tiempo Real', desc: 'Actualización constante del mundo IA', color: '#ef4444', badge: 'En vivo' },
  { id: 'sala-prensa', icon: Mic2, label: 'Sala de Prensa', desc: 'Comunicados oficiales MAYIA', color: '#60a5fa' },
];

const MODULES_ABOUT: HubModule[] = [
  { id: 'quienes', icon: Building2, label: 'Quiénes Somos', desc: 'El primer centro de inteligencia artificial 100% mexicano. Infraestructura, talento y visión para la soberanía digital de México.', color: '#A4D955' },
  { id: 'que-hacemos', icon: Cpu, label: 'Qué Hacemos', desc: 'Desarrollamos, implementamos y operamos soluciones de IA para empresas, gobierno e industria en los 32 estados del país.', color: '#60a5fa' },
  { id: 'conoce-mas', icon: HelpCircle, label: 'Conoce Más', desc: 'Descubre nuestro ecosistema de infraestructura, academia, consultoría y desarrollo de inteligencia artificial enterprise.', color: '#a78bfa' },
];

const MODULES_COMMUNITY: HubModule[] = [
  { id: 'embajadores', icon: Medal, label: 'Embajadores', desc: 'Red de líderes IA', color: '#d97706' },
  { id: 'red-ia', icon: Network, label: 'Red de IA+', desc: 'Comunidad nacional de IA', color: '#6366f1' },
];

const MODULES_ECOSYSTEM: HubModule[] = [
  { id: 'temp-ia', icon: Thermometer, label: 'Temperatura de la IA', desc: 'Pulso del mercado IA México', color: '#ef4444' },
];



/* ── Styles ─────────────────────────────────────────────────── */

const hubCss = `
  .seo-hub-card {
    transition: all 0.25s cubic-bezier(.23,1,.32,1) !important;
  }
  .seo-hub-card:hover {
    transform: translateX(4px) !important;
  }
  .seo-hub-scroll::-webkit-scrollbar {
    width: 3px;
  }
  .seo-hub-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .seo-hub-scroll::-webkit-scrollbar-thumb {
    background: #2a2a3e;
    border-radius: 10px;
  }
`;

/* ── Sub-components ─────────────────────────────────────────── */

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{
      fontSize: 9, fontWeight: 800, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: colores.textoOscuro || '#4b5563',
      padding: '12px 16px 6px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {label}
    </div>
  );
}

const mapHubIdToSection = (id: string): string | null => {
  switch (id) {
    case 'noticias-rt':
      return 'noticias';
    case 'blog':
      return 'blog';
    case 'sala-prensa':
      return 'sala-prensa';
    case 'pildoras':
      return 'pildoras-ia';
    case 'embajadores':
      return 'embajadores';
    case 'foro-retail':
      return 'ia-por-sector';
    case 'hackathon':
      return 'hackaton';
    case 'visitas-intel':
      return 'ecosistema';
    case 'agente-33':
      return 'agente-33';
    case 'lumel':
      return 'lumel';
    case 'temp-ia':
      return 'termometro-ia';
    case 'red-ia':
      return 'networking';
    case 'tendencias':
      return 'analiticos';
    case 'quienes':
      return 'dashboard';
    case 'que-hacemos':
      return 'ia-empresarial';
    case 'conoce-mas':
      return 'academia';
    default:
      return null;
  }
};

export interface SeoHubProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
  onOpenSocialModal?: (id: string, yPos: number) => void;
}

const SOCIAL_IDS = ['noticias-rt', 'blog', 'sala-prensa', 'embajadores', 'red-ia', 'temp-ia'];

function HubCard({ 
  mod, 
  activeSection, 
  onSectionChange,
  onOpenSocialModal
}: { 
  mod: HubModule; 
  activeSection?: string; 
  onSectionChange?: (section: string) => void; 
  onOpenSocialModal?: (id: string, yPos: number) => void;
}) {
  const Icon = mod.icon;
  const targetSection = mapHubIdToSection(mod.id);
  const isActive = targetSection && activeSection === targetSection;

  const isSocial = SOCIAL_IDS.includes(mod.id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSocial && onOpenSocialModal) {
      const rect = e.currentTarget.getBoundingClientRect();
      onOpenSocialModal(mod.id, rect.top + rect.height / 2);
    } else if (targetSection && onSectionChange) {
      onSectionChange(targetSection);
    }
  };

  return (
    <a
      href={mod.link || `#${targetSection || mod.id}`}
      target={mod.link ? '_blank' : undefined}
      rel={mod.link ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
      className="seo-hub-card"
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 14px', margin: '0 8px 4px',
        borderRadius: 10,
        background: isActive ? `${colores.primario}12` : colores.fondoSecundario,
        border: `1px solid ${isActive ? colores.primario : colores.borde}`,
        textDecoration: 'none',
        cursor: 'pointer',
        boxShadow: isActive ? `0 0 12px ${colores.primario}25` : 'none',
        transition: 'all 0.25s cubic-bezier(.23,1,.32,1)',
      }}
      onMouseEnter={e => {
        if (!isActive) {
          e.currentTarget.style.borderColor = `${mod.color}40`;
          e.currentTarget.style.background = `${mod.color}08`;
        }
      }}
      onMouseLeave={e => {
        if (!isActive) {
          e.currentTarget.style.borderColor = colores.borde;
          e.currentTarget.style.background = colores.fondoSecundario;
        }
      }}
    >
      <div style={{
        width: 30, height: 30, borderRadius: 8,
        background: isActive ? `${colores.primario}20` : `${mod.color}15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.2s',
      }}>
        <Icon size={14} color={isActive ? colores.primario : mod.color} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: isActive ? colores.primario : (colores.textoClaro || '#1A202C'),
          display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: "'Inter', system-ui, sans-serif",
          transition: 'all 0.2s',
        }}>
          {mod.label}
          {mod.badge && (
            <span style={{
              fontSize: 8, fontWeight: 800, padding: '1px 6px',
              borderRadius: 99, background: isActive ? `${colores.primario}25` : `${mod.color}20`,
              color: isActive ? colores.primario : mod.color, letterSpacing: '0.05em',
            }}>
              {mod.badge}
            </span>
          )}
        </div>
        <div style={{
          fontSize: 10, color: isActive ? `${colores.primario}bb` : '#6b7280', lineHeight: 1.3,
          fontFamily: "'Inter', system-ui, sans-serif",
          marginTop: 2,
          transition: 'all 0.2s',
        }}>
          {mod.desc}
        </div>
      </div>
      <ChevronRight size={12} color={isActive ? colores.primario : '#4b5563'} style={{ flexShrink: 0, transition: 'all 0.2s' }} />
    </a>
  );
}

/* ── Main Component ─────────────────────────────────────────── */

export default function SeoHub({ activeSection, onSectionChange, onOpenSocialModal }: SeoHubProps) {
  const [hovAbout, setHovAbout] = useState<string | null>(null);

  const sidebarWidth = '320px';

  return (
    <aside
      aria-label="Hub SEO — Contenido dinámico MAYIA"
      style={{
        width: sidebarWidth,
        flexShrink: 0,
        height: '100%',
        overflow: 'hidden',
        background: colores.fondoSecundario,
        borderLeft: `1px solid ${colores.borde}`,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'width 0.45s cubic-bezier(0.25, 1, 0.2, 1)',
        zIndex: 250,
      }}
    >
      <style>{hubCss}</style>

      {/* Header */}
      <div style={{
        height: '72px',
        flexShrink: 0,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px 0 32px',
        justifyContent: 'flex-start',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#A4D955',
              boxShadow: '0 0 8px rgba(164,217,85,0.5)',
            }} />
            <span style={{
              fontSize: 10, fontWeight: 800, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#A4D955',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}>
              Hub SEO · MAYIA
            </span>
          </div>
          <p style={{
            margin: 0, fontSize: 10, color: '#4d7c0f',
            fontFamily: "'Inter', system-ui, sans-serif",
          }}>
            Contenido dinámico · IA México
          </p>
        </div>
      </div>

      {/* Content Scroll Container */}
      <div
        className="seo-hub-scroll"
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          scrollbarWidth: 'thin',
          scrollbarColor: `${colores.borde} transparent`,
        }}
      >
            <SectionLabel label="Nosotros" />
            {MODULES_ABOUT.map(m => (
              <HubCard 
                key={m.id} 
                mod={m} 
                activeSection={activeSection} 
                onSectionChange={onSectionChange} 
                onOpenSocialModal={onOpenSocialModal}
              />
            ))}

            <SectionLabel label="Contenido y Noticias" />
            {MODULES_TOP.map(m => (
              <HubCard 
                key={m.id} 
                mod={m} 
                activeSection={activeSection} 
                onSectionChange={onSectionChange} 
                onOpenSocialModal={onOpenSocialModal}
              />
            ))}

            <SectionLabel label="Comunidad y Eventos" />
            {MODULES_COMMUNITY.map(m => (
              <HubCard 
                key={m.id} 
                mod={m} 
                activeSection={activeSection} 
                onSectionChange={onSectionChange} 
                onOpenSocialModal={onOpenSocialModal}
              />
            ))}

            <SectionLabel label="Ecosistema IA" />
            {MODULES_ECOSYSTEM.map(m => (
              <HubCard 
                key={m.id} 
                mod={m} 
                activeSection={activeSection} 
                onSectionChange={onSectionChange} 
                onOpenSocialModal={onOpenSocialModal}
              />
            ))}

            {/* ── Noticias Indexadas ── */}
            <SectionLabel label="Noticias Indexadas" />
            <div style={{ padding: '0 8px 16px' }}>
              {[
                { medio: 'DataCenter Dynamics', titulo: 'MAYIA: primer centro de IA con sello Hecho en México', url: 'https://www.datacenterdynamics.com/es/noticias/mayia-primer-centro-de-inteligencia-artificial-con-sello-hecho-en-méxico-inicia-operaciones/' },
                { medio: 'Expansión', titulo: 'MAYIA, primer centro de IA con sello Hecho en México', url: 'https://expansion.mx/tecnologia/2025/06/05/mayia-primer-centro-de-ia-con-sello-hecho-en-mexico' },
                { medio: 'La Tank Media', titulo: 'MAYIA centro de inteligencia artificial mexicano', url: 'https://latank.media/mayia-centro-de-inteligencia-artificial-mexicano/' },
              ].map((n, i) => (
                <a
                  key={i}
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seo-hub-card"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '8px 10px', marginBottom: 4,
                    borderRadius: 8, textDecoration: 'none',
                    background: '#111118',
                    border: '1px solid #1a1a2e',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#A4D95540';
                    e.currentTarget.style.background = '#A4D95508';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1a1a2e';
                    e.currentTarget.style.background = '#111118';
                  }}
                >
                  <Newspaper size={12} color="#A4D955" style={{ flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#d1d5db', lineHeight: 1.3, fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {n.titulo}
                    </div>
                    <div style={{ fontSize: 9, color: '#6b7280', fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {n.medio}
                    </div>
                  </div>
                  <ExternalLink size={10} color="#4b5563" style={{ flexShrink: 0 }} />
                </a>
              ))}
            </div>

            {/* Footer area */}
            <div style={{
              padding: '16px',
              marginTop: 'auto',
              borderTop: `1.5px solid ${colores.borde}`,
              textAlign: 'center',
            }}>
              <p style={{
                margin: 0, fontSize: 10, color: colores.textoMedio,
                fontFamily: "'Inter', system-ui, sans-serif",
                letterSpacing: '0.05em',
              }}>
                MAYIA · Centro de Inteligencia Artificial · México
              </p>
            </div>
      </div>
    </aside>
  );
}
