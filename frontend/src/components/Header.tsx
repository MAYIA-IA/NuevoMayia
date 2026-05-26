import React, { useState, useRef, useEffect } from 'react';
import {
  Bell,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
  Bot,
  CalendarDays,
  Sparkles,
  Mail,
  Phone,
} from 'lucide-react';
import { brandingConfig } from '../config/branding';
import { AsistenteIAChat } from './modules/AsistenteIAChat';
import type { AsistenteIAChatHandle } from './modules/AsistenteIAChat';
import mayiaLogo from '../assets/logosNativos/mayiaLogoBlanco.png';

interface HeaderProps {
  title: string;
}

interface Notification {
  id: number;
  tipo: 'alerta' | 'exito' | 'info' | 'urgente';
  titulo: string;
  mensaje: string;
  tiempo: string;
  leida: boolean;
}

const notificacionesEstaticas: Notification[] = [
  { id: 1, tipo: 'urgente', titulo: '¡Últimos cupos! Laboratorio AMD', mensaje: 'Quedan solo 2 accesos para agendar pruebas de rendimiento gratuitas en nuestro cluster EPYC. ¡Reserva tu lugar ahora!', tiempo: 'Hace 10 min', leida: false },
  { id: 2, tipo: 'exito', titulo: 'Promo: Nube Soberana', mensaje: 'Aprovecha un 25% de descuento en tu primer año de infraestructura local garantizada. Promoción exclusiva para México.', tiempo: 'Hace 45 min', leida: false },
  { id: 3, tipo: 'info', titulo: 'Evento: Hackathon IA MAYiA', mensaje: '¡Ya abrimos inscripciones! Únete al ecosistema de innovación más grande del país y compite por grandes recompensas.', tiempo: 'Hace 2 horas', leida: false },
  { id: 4, tipo: 'alerta', titulo: 'Red MAYiA: Oportunidad de Talento', mensaje: '¡Tu perfil es altamente demandado! 5 nuevas empresas buscan expertos en Machine Learning. Actualiza tu disponibilidad.', tiempo: 'Hace 5 horas', leida: true },
  { id: 5, tipo: 'exito', titulo: 'Lanzamiento: Agentes Consultores', mensaje: 'Descubre al nuevo Agente de Innovación y democratiza las ideas de tu equipo. Solicita tu demo interactiva gratis.', tiempo: 'Hace 1 día', leida: true },
];



const WhatsappIcon = (props: any) => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
    alt="WhatsApp" 
    style={{ width: props.size || 15, height: props.size || 15, objectFit: 'contain', display: 'block' }}
  />
);

/* ── Botones de contacto rápido ── */
const CONTACTOS = [
  {
    id: 'whatsapp',
    href: 'https://api.whatsapp.com/send/?phone=525553315526',
    icon: WhatsappIcon,
    label: 'WhatsApp',
    tooltip: '+52 55 5331 5526',
    bg: '#25D366',
    hoverBg: '#1ebe5d',
    pulse: true,
  },
  {
    id: 'email',
    href: 'mailto:contacto@mayia.mx',
    icon: Mail,
    label: 'Email',
    tooltip: 'contacto@mayia.mx',
    bg: '#0284c7',
    hoverBg: '#0369a1',
    pulse: false,
  },
  {
    id: 'phone',
    href: 'tel:+525553315526',
    icon: Phone,
    label: 'Llamar',
    tooltip: '+52 55 5331 5526',
    bg: '#7c3aed',
    hoverBg: '#6d28d9',
    pulse: false,
  },
];

const contactCss = `
  @keyframes hdr-whatsapp-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
    50%       { box-shadow: 0 0 0 6px rgba(37,211,102,0); }
  }
  @keyframes hdr-sparkle {
    0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
    50%       { opacity: 0.7; transform: scale(1.18) rotate(15deg); }
  }
  @keyframes hdr-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes hdr-ring-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(164,217,85,0.35), 0 2px 12px rgba(0,0,0,0.25); }
    50%       { box-shadow: 0 0 0 4px rgba(164,217,85,0.12), 0 2px 12px rgba(0,0,0,0.25); }
  }
  .hdr-contact-btn { transition: all 0.25s cubic-bezier(.23,1,.32,1) !important; }
  .hdr-contact-btn:hover { transform: translateY(-2px) scale(1.06) !important; }
  .hdr-search-sparkle { animation: hdr-sparkle 2.8s ease-in-out infinite; }
  .hdr-search-bar-idle { animation: hdr-ring-pulse 3s ease-in-out infinite; }
  .hdr-label-shimmer {
    background: linear-gradient(90deg, #888 30%, #A4D955 50%, #888 70%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: hdr-shimmer 3.5s linear infinite;
  }
`;

export const Header: React.FC<HeaderProps> = ({ title: _title }) => {
  const { colores } = brandingConfig;

  const [notificacionesAbiertas, setNotificacionesAbiertas] = useState(false);
  const [notificaciones, setNotificaciones] = useState<Notification[]>(notificacionesEstaticas);
  const notifRef = useRef<HTMLDivElement>(null);

  const [chatAbierto, setChatAbierto] = useState(false);
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<AsistenteIAChatHandle>(null);
  const [hovContact, setHovContact] = useState<string | null>(null);

  const fecha = new Date();
  const fechaFormateada = fecha.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node))
        setNotificacionesAbiertas(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target as Node))
        setChatAbierto(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const notificacionesNoLeidas = notificaciones.filter(n => !n.leida).length;

  const getIconoPorTipo = (tipo: Notification['tipo']) => {
    switch (tipo) {
      case 'alerta': return <AlertTriangle size={16} color="#F59E0B" />;
      case 'exito': return <CheckCircle size={16} color="#10B981" />;
      case 'urgente': return <AlertTriangle size={16} color="#EF4444" />;
      case 'info': return <Info size={16} color="#3B82F6" />;
    }
  };

  const marcarComoLeida = (id: number) =>
    setNotificaciones(notificaciones.map(n => n.id === id ? { ...n, leida: true } : n));

  const marcarTodasComoLeidas = () =>
    setNotificaciones(notificaciones.map(n => ({ ...n, leida: true })));

  return (
    <>
      <style>{contactCss}</style>
      {/* Overlay oscuro cuando el chat está abierto */}
      {chatAbierto && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 200,
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      <header
        style={{
          height: '72px',
          backgroundColor: '#000000',
          borderBottom: '1px solid #1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          gap: '8px',
          flexShrink: 0,
          position: 'relative',
          zIndex: 300,
        }}
      >
        {/* ── BARRA DE BÚSQUEDA (ocupa todo el espacio disponible) ── */}
        <div
          ref={searchWrapRef}
          style={{ flex: 1, position: 'relative' }}
        >
          {/* La barra — premium */}
          <div
            onClick={() => { setChatAbierto(true); setTimeout(() => chatRef.current?.focusInput(), 50); }}
            className={chatAbierto ? undefined : 'hdr-search-bar-idle'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0 6px 0 16px',
              height: '44px',
              borderRadius: chatAbierto ? '14px 14px 0 0' : '999px',
              background: chatAbierto
                ? colores.fondoPrincipal
                : 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
              border: `1.5px solid ${chatAbierto ? colores.primario : '#2a2a2a'}`,
              borderBottom: chatAbierto ? `1px solid #1e1e1e` : `1.5px solid #2a2a2a`,
              cursor: 'text',
              transition: 'all 0.25s cubic-bezier(.23,1,.32,1)',
              boxShadow: chatAbierto
                ? `0 0 0 3px ${colores.primario}30, 0 8px 32px rgba(0,0,0,0.5)`
                : '0 2px 12px rgba(0,0,0,0.25)',
              position: 'relative',
              zIndex: 310,
            }}
          >
            {/* Sparkles animado */}
            <Sparkles
              size={17}
              className="hdr-search-sparkle"
              style={{ color: colores.primario, flexShrink: 0 }}
            />

            {/* Label con shimmer cuando está cerrado */}
            <span
              className={chatAbierto ? undefined : 'hdr-label-shimmer'}
              style={{
                fontSize: '13px',
                fontWeight: chatAbierto ? 400 : 500,
                color: chatAbierto ? colores.textoMedio : undefined,
                flex: 1,
                userSelect: 'none',
                letterSpacing: '0.01em',
              }}
            >
              {chatAbierto ? 'Asistente IA · escribe tu pregunta…' : 'Pregúntale algo al Asistente IA de MAYiA…'}
            </span>

            {chatAbierto ? (
              <button
                onClick={e => { e.stopPropagation(); setChatAbierto(false); }}
                style={{
                  background: '#2a2a2a', border: 'none', cursor: 'pointer',
                  padding: '6px', display: 'flex', borderRadius: '50%',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#3a3a3a')}
                onMouseLeave={e => (e.currentTarget.style.background = '#2a2a2a')}
              >
                <X size={15} style={{ color: '#aaaaaa' }} />
              </button>
            ) : (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '5px 10px 5px 8px',
                borderRadius: '999px', marginLeft: '4px',
                background: `linear-gradient(135deg, ${colores.primario}, #65a30d)`,
                flexShrink: 0,
              }}>
                <Bot size={13} color="#fff" />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.03em' }}>IA</span>
              </div>
            )}
          </div>

          {/* ── Dropdown premium ── */}
          {chatAbierto && (
            <div
              style={{
                position: 'absolute',
                top: '43px',
                left: 0,
                right: 0,
                backgroundColor: colores.fondoPrincipal,
                border: `1.5px solid ${colores.primario}50`,
                borderTop: `1px solid #1e1e1e`,
                borderRadius: '0 0 22px 22px',
                boxShadow: `0 24px 70px rgba(0,0,0,0.55), 0 0 0 1px ${colores.primario}18`,
                overflow: 'hidden',
                zIndex: 305,
                display: 'flex',
                flexDirection: 'column',
                height: '520px',
              }}
            >
              {/* Header decorativo del chat */}
              <div style={{
                padding: '10px 16px 8px',
                borderBottom: `1px solid #1e1e1e`,
                display: 'flex', alignItems: 'center', gap: '10px',
                flexShrink: 0,
                background: 'linear-gradient(90deg, #0d0d0d, #111)',
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colores.primario}, #65a30d)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: `0 0 12px ${colores.primario}50`,
                }}>
                  <Bot size={14} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>Asistente IA · MAYiA</div>
                  <div style={{ fontSize: '10px', color: '#555', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#A4D955', boxShadow: '0 0 4px #A4D955' }} />
                    En línea · Listo para responder
                  </div>
                </div>
              </div>

              {/* Chat ocupa el resto */}
              <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <AsistenteIAChat ref={chatRef} />
              </div>
            </div>
          )}
        </div>

        {/* ── CONTACTO RÁPIDO ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '8px', marginRight: '4px' }}>
          {CONTACTOS.map(c => (
            <div key={c.id} style={{ position: 'relative' }}
              onMouseEnter={() => setHovContact(c.id)}
              onMouseLeave={() => setHovContact(null)}
            >
              <a
                href={c.href}
                target={c.id !== 'phone' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="hdr-contact-btn"
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '7px 13px', borderRadius: '999px',
                  backgroundColor: hovContact === c.id ? c.hoverBg : c.bg,
                  textDecoration: 'none',
                  boxShadow: c.pulse ? '0 0 0 0 rgba(37,211,102,0.5)' : 'none',
                  animation: c.pulse ? 'hdr-whatsapp-pulse 2.5s infinite' : 'none',
                }}
              >
                <c.icon size={15} color="#ffffff" />
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff', whiteSpace: 'nowrap' }}>
                  {c.label}
                </span>
              </a>
              {/* Tooltip */}
              {hovContact === c.id && (
                <div style={{
                  position: 'absolute', bottom: '-36px', left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#1a1a1a', color: '#ffffff',
                  fontSize: '11px', fontWeight: '500',
                  padding: '4px 10px', borderRadius: '7px',
                  whiteSpace: 'nowrap', zIndex: 400,
                  border: '1px solid #333',
                  pointerEvents: 'none',
                }}>
                  {c.tooltip}
                  <div style={{ position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderBottom: '5px solid #333' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── DERECHA: Fecha + Bell + Avatar ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Fecha pegada a la campana */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '7px',
            padding: '7px 14px', borderRadius: '999px',
            backgroundColor: '#1a1a1a',
            border: '1px solid #333333',
            marginRight: '4px',
          }}>
            <CalendarDays size={14} style={{ color: '#888888' }} />
            <span style={{ fontSize: '13px', fontWeight: '500', color: '#ffffff' }}>
              {fechaFormateada}
            </span>
          </div>

          {/* Notificaciones */}
          <div ref={notifRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setNotificacionesAbiertas(!notificacionesAbiertas)}
              style={iconBtnStyle('#1a1a1a')}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2a2a2a')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a1a1a')}
            >
              <Bell size={19} style={{ color: '#ffffff' }} />
              {notificacionesNoLeidas > 0 && (
                <span style={{
                  position: 'absolute', top: '6px', right: '6px',
                  minWidth: '17px', height: '17px', borderRadius: '10px',
                  backgroundColor: '#EF4444', border: '2px solid #000000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '9px', fontWeight: 'bold', color: '#FFFFFF', padding: '0 3px',
                }}>
                  {notificacionesNoLeidas}
                </span>
              )}
            </button>

            {notificacionesAbiertas && (
              <div style={{
                position: 'absolute', top: '56px', right: '0',
                width: '370px', maxHeight: '480px',
                backgroundColor: colores.fondoSecundario,
                borderRadius: '14px', border: `1px solid ${colores.borde}`,
                boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
                overflow: 'hidden', zIndex: 1000,
              }}>
                <div style={{
                  padding: '14px 18px', borderBottom: `1px solid ${colores.borde}`,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: colores.textoClaro }}>Notificaciones</h3>
                    <p style={{ margin: '2px 0 0', fontSize: '12px', color: colores.textoMedio }}>{notificacionesNoLeidas} sin leer</p>
                  </div>
                  {notificacionesNoLeidas > 0 && (
                    <button onClick={marcarTodasComoLeidas}
                      style={{ background: 'none', border: 'none', color: colores.primario, fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
                      Marcar todas
                    </button>
                  )}
                </div>

                <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
                  {notificaciones.map(notif => (
                    <div
                      key={notif.id}
                      onClick={() => marcarComoLeida(notif.id)}
                      style={{
                        padding: '14px 18px', borderBottom: `1px solid ${colores.borde}`,
                        backgroundColor: notif.leida ? 'transparent' : colores.fondoTerciario + '44',
                        cursor: 'pointer', transition: 'background-color 0.15s', display: 'flex', gap: '10px',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = colores.fondoTerciario)}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = notif.leida ? 'transparent' : colores.fondoTerciario + '44')}
                    >
                      <div style={{ flexShrink: 0, marginTop: '2px' }}>{getIconoPorTipo(notif.tipo)}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3px' }}>
                          <h4 style={{ margin: 0, fontSize: '13px', fontWeight: notif.leida ? '500' : '700', color: colores.textoClaro }}>
                            {notif.titulo}
                          </h4>
                          {!notif.leida && (
                            <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: colores.primario, flexShrink: 0, marginLeft: '8px', marginTop: '4px' }} />
                          )}
                        </div>
                        <p style={{ margin: '2px 0', fontSize: '12px', color: colores.textoMedio, lineHeight: '1.4' }}>{notif.mensaje}</p>
                        <span style={{ fontSize: '11px', color: colores.textoOscuro }}>{notif.tiempo}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: '10px 18px', borderTop: `1px solid ${colores.borde}`, textAlign: 'center' }}>
                  <button style={{ background: 'none', border: 'none', color: colores.primario, fontSize: '13px', fontWeight: '600', cursor: 'pointer', width: '100%', padding: '6px' }}>
                    Ver todas las notificaciones
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Avatar */}
          <button
            style={{
              width: '42px', height: '42px', borderRadius: '50%',
              backgroundColor: '#000000', border: '2px solid #333333',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', overflow: 'hidden', padding: '2px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <img
              src={mayiaLogo}
              alt="Perfil"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const container = target.parentElement;
                if (container) {
                  container.style.background = `linear-gradient(135deg, ${colores.primario}, ${colores.secundario})`;
                  container.style.fontSize = '16px';
                  container.style.fontWeight = 'bold';
                  container.style.color = '#FFFFFF';
                  container.textContent = 'M';
                }
              }}
            />
          </button>
        </div>
      </header>
    </>
  );
};

const iconBtnStyle = (bg: string): React.CSSProperties => ({
  width: '40px', height: '40px', borderRadius: '50%',
  backgroundColor: bg, border: 'none', cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  position: 'relative', transition: 'background-color 0.2s',
});