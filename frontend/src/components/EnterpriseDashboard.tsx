import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, FlaskConical, FileText, Wrench, Calendar,
  Briefcase, LineChart, ShoppingBag, GraduationCap, GitBranch, ScanEye,
  BookOpen, Award, Users, MoreVertical, Info, Cloud
} from 'lucide-react';
import logoMaia from '../assets/logosNativos/logoMaia.png';
import academiaLogo from '../assets/logosNativos/academia-horizontal.png';
import flaiLogo from '../assets/logosNativos/1. NUBE_FINAL_FLAI (1).png';
import mayiaLakeLogo from '../assets/logosNativos/MAYiA_LAKE.jpeg';

const CATEGORIES = ['Infraestructura', 'Desarrollo', 'Modelos', 'Agentes', 'Operación', 'Monitoreo', 'Capacitación'];// --- SUB-COMPONENTE: EdgenetCard ("Fábrica para tu IA Privada") ---
function EdgenetCard({ onOpenMap, onOpenFabricaInfo }: { onOpenMap?: () => void; onOpenFabricaInfo?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        background: '#FFFFFF', 
        borderRadius: 24, 
        border: `2px solid ${isHovered ? '#4881EB' : '#E5E7EB'}`,
        boxShadow: isHovered ? '0 20px 40px rgba(72, 129, 235, 0.25), 0 0 20px rgba(72, 129, 235, 0.15)' : 'none',
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 20px 12px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Icon Video Frame for jaguar.mp4 */}
          <div style={{ 
            width: 52, 
            height: 52, 
            borderRadius: 14, 
            overflow: 'hidden', 
            background: '#090d16', 
            border: '2px solid #22c55e', 
            boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4), inset 0 0 6px rgba(255, 255, 255, 0.15)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'relative' 
          }}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="/assets/images/jaguar.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: '#111827', lineHeight: 1.2 }}>Fábrica de Inteligencia Artificial</h3>
            <p style={{ margin: 0, fontSize: 11, color: '#22c55e', fontWeight: 800, letterSpacing: '0.05em', marginTop: 2 }}>IA PRIVADA MAYIA</p>
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
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, minWidth: 200 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(72,129,235,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Agendar cita
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
        border: `2px solid ${isHovered ? '#22c55e' : 'transparent'}`,
        boxShadow: isHovered ? '0 0 20px rgba(34, 197, 94, 0.25)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <video 
          autoPlay loop muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/assets/images/productos/drpVideo.mp4" type="video/mp4" />
        </video>

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
              <span style={{ fontSize: 8, color: '#374151', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{text}</span>
              <motion.div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 4px #22c55e',
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
              border: '1px solid #22c55e',
              borderRadius: 6,
              padding: '3.5px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              boxShadow: '0 2px 6px rgba(34, 197, 94, 0.15)',
            }}
            animate={{
              scale: [1, 1.01, 1],
              boxShadow: [
                '0 2px 6px rgba(34, 197, 94, 0.1)',
                '0 2px 12px rgba(34, 197, 94, 0.4)',
                '0 2px 6px rgba(34, 197, 94, 0.1)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span style={{ fontSize: 8.5, color: '#166534', fontWeight: 900, letterSpacing: '0.03em' }}>ACTIVO</span>
            <motion.div
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 4px #22c55e',
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

      {/* Description & 3 buttons box (Blue bordered) */}
      <div style={{
        margin: '0 20px 16px',
        padding: '16px',
        borderRadius: 18,
        border: '2px solid rgba(72, 129, 235, 0.6)',
        background: 'rgba(72, 129, 235, 0.02)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
        <p style={{
          margin: 0,
          fontSize: 12.5,
          color: '#374151',
          lineHeight: 1.5,
          fontWeight: 600,
          textAlign: 'justify'
        }}>
          Construye tu estrategia de inteligencia artificial sobre infraestructura segura, soberana y preparada para crecer. GPUs, Servidores, Data Centers IA Ready, Redes, Almacenamiento, Energía.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onOpenFabricaInfo) onOpenFabricaInfo();
            }}
            style={{
              background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 4,
              padding: '10px 4px',
              fontSize: 9.5,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              transition: 'all 0.2s',
              boxShadow: '0 2px 6px rgba(30, 58, 138, 0.15)'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(30, 58, 138, 0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(30, 58, 138, 0.15)'; }}
          >
            Conoce más
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAgendarCita(e);
            }}
            style={{
              background: 'linear-gradient(135deg, #0f766e, #0d9488)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 4,
              padding: '10px 4px',
              fontSize: 9.5,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              transition: 'all 0.2s',
              boxShadow: '0 2px 6px rgba(15, 118, 110, 0.15)'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(15, 118, 110, 0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(15, 118, 110, 0.15)'; }}
          >
            Realiza tu diagnostico
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAgendarCita(e);
            }}
            style={{
              background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 4,
              padding: '10px 4px',
              fontSize: 9.5,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              transition: 'all 0.2s',
              boxShadow: '0 2px 6px rgba(30, 58, 138, 0.15)'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(30, 58, 138, 0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(30, 58, 138, 0.15)'; }}
          >
            Agenda una cita
          </button>
        </div>
      </div>

      {/* Footer Container (Green bordered) */}
      <div style={{
        margin: '0 20px 20px',
        padding: '12px 16px',
        borderRadius: 16,
        border: '2px solid rgba(34, 197, 94, 0.5)',
        background: 'rgba(34, 197, 94, 0.02)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        marginTop: 'auto'
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
          onMouseEnter={e => { e.currentTarget.style.background = '#1f2937'; e.currentTarget.style.transform = 'scale(1.03)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#111827'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Descubre porque &rarr;
        </button>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTE: FlaiCard (FLAI Sovereign Cloud) ---
function FlaiCard({ onOpenInfo }: { onOpenInfo?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        background: '#FFFFFF', 
        borderRadius: 24, 
        border: `2px solid ${isHovered ? '#DC2626' : '#E5E7EB'}`,
        boxShadow: isHovered ? '0 20px 40px rgba(220, 38, 38, 0.25), 0 0 20px rgba(220, 38, 38, 0.15)' : 'none',
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ 
            width: 44, 
            height: 44, 
            borderRadius: 12, 
            background: '#FFFFFF', 
            border: '1px solid rgba(220, 38, 38, 0.15)', 
            boxShadow: '0 4px 10px rgba(220, 38, 38, 0.08)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: 4,
            overflow: 'hidden'
          }}>
            <img src={flaiLogo} alt="FLAI" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>FLAI</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#4B5563', fontWeight: 600 }}>Nube Soberana</p>
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
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, minWidth: 200 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(220,38,38,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Agendar cita
                </button>
                <button 
                  onClick={handleMasInformacion}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(220,38,38,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Info size={16} /> Más información
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
        border: `2px solid ${isHovered ? '#DC2626' : 'transparent'}`,
        boxShadow: isHovered ? '0 0 20px rgba(220, 38, 38, 0.4), inset 0 0 20px rgba(220, 38, 38, 0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <video 
          autoPlay loop muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/assets/images/productos/flaiMarcoVideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, margin: '0 20px 16px' }}>
        {[
          { value: '100% México', label: 'Datos en México', color: '#006847' },
          { value: '1era Nube', label: 'IA Soberana', color: '#DC2626' },
          { value: '30 CDN', label: 'Centros de Datos', color: '#006847' }
        ].map((s, idx) => (
          <div key={idx} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '10px 4px', 
            background: 'linear-gradient(135deg, #F9FAFB, #F3F4F6)', 
            border: '1px solid rgba(0,0,0,0.06)', 
            borderRadius: 12,
            lineHeight: 1.2
          }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: s.color, textAlign: 'center' }}>{s.value}</span>
            <span style={{ fontSize: 8, fontWeight: 600, color: '#6B7280', textAlign: 'center', marginTop: 3 }}>{s.label}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5, margin: '0 20px 16px', fontWeight: 500 }}>
        La primera nube de Inteligencia Artificial soberana de México. Resguarda tus datos dentro del territorio nacional con procesamiento GPU de altísimo rendimiento.
      </p>

      {/* Características Clave / Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 20px 16px' }}>
        {['GPU AMD MI300X', 'Soberanía Digital', 'Baja Latencia Edge', 'Cumplimiento Local'].map((tag, idx) => (
          <span 
            key={idx} 
            style={{ 
              fontSize: 10, 
              fontWeight: 700, 
              padding: '6px 12px', 
              borderRadius: 99, 
              background: 'rgba(220, 38, 38, 0.05)', 
              color: '#DC2626', 
              border: '1px solid rgba(220, 38, 38, 0.15)' 
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', marginTop: 'auto', padding: '0 20px 20px' }}>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            background: 'linear-gradient(135deg, #DC2626, #991B1B)', color: '#ffffff', border: 'none', borderRadius: 8, padding: '12px 16px', 
            fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: '100%', justifyContent: 'center', 
            transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(220,38,38,0.2)'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(220,38,38,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(220,38,38,0.2)'; }}
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
        background: '#FFFFFF', 
        borderRadius: 24, 
        border: `2px solid ${isHovered ? '#4881EB' : '#E5E7EB'}`, 
        boxShadow: isHovered ? '0 20px 40px rgba(72, 129, 235, 0.25), 0 0 20px rgba(72, 129, 235, 0.15)' : 'none', 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: '#ffffff', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6 }}>
            <img src="/assets/images/productos/cyberpeaceLogo.png" alt="CyberPeace SOC" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, minWidth: 200 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(72,129,235,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Agendar cita
                </button>
                <button 
                  onClick={onOpenInfo}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(72,129,235,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Info size={16} /> Más información
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
        border: `2px solid ${isHovered ? '#4881EB' : 'transparent'}`,
        boxShadow: isHovered ? '0 0 20px rgba(72, 129, 235, 0.4), inset 0 0 20px rgba(72, 129, 235, 0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <video 
            autoPlay loop muted playsInline preload="metadata"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
            <source src="/assets/images/productos/cyberpeaceVid.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', flexDirection: 'column', gap: 6, maxWidth: '80%', zIndex: 5 }}>
           {["CACERÍA DE AMENAZAS", "INTELIGENCIA DE AMENAZAS", "EVALUACIÓN DE RIESGOS", "ESTRATEGIA Y GOBIERNO DE CIBERSEGURIDAD", "GESTIÓN DE RESPUESTAS Y CONTENCIÓN DE INCIDENTES"].map((f, i) => (
             <span key={i} style={{ background: 'rgba(72,129,235,0.85)', backdropFilter: 'blur(4px)', color: '#ffffff', fontSize: 8, fontWeight: 800, padding: '4px 8px', borderRadius: 6, border: '1px solid rgba(125,209,255,0.4)', letterSpacing: '0.04em', width: 'fit-content' }}>{f}</span>
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
          <p style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#4881EB' }}>ISO 27001</p>
          <p style={{ margin: 0, fontSize: 10, color: '#4B5563', fontWeight: 600 }}>Seguridad</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#4881EB' }}>ISO 42001</p>
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
              <span key={cert} style={{ fontSize: 9, fontWeight: 700, padding: '4px 8px', borderRadius: 99, background: 'rgba(72,129,235,0.08)', color: '#4881EB', border: '1px solid rgba(72,129,235,0.2)' }}>
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
            background: 'linear-gradient(to right, #1d4ed8, #3b82f6)', color: '#ffffff', border: 'none', borderRadius: 8, padding: '10px 0', fontSize: 13, fontWeight: 700, 
            display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', flex: 1, justifyContent: 'center', transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(59,130,246,0.2)'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(59,130,246,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(59,130,246,0.2)'; }}
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
function MayiaCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
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
    setShowInfoModal(true);
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
        background: '#FFFFFF', 
        borderRadius: 24, 
        border: `2px solid ${isHovered ? '#A4D955' : '#E5E7EB'}`,
        boxShadow: isHovered ? '0 20px 40px rgba(164, 217, 85, 0.25), 0 0 20px rgba(164, 217, 85, 0.15)' : 'none',
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 20px 12px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1.5px solid #A4D955' }}>
            <img src={mayiaLakeLogo} alt="MAYiA Lake" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>MAYiA Lake</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#4B5563', fontWeight: 600 }}>IA Para Empresas</p>
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
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, minWidth: 200 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(164,217,85,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Agendar cita
                </button>
                <button 
                  onClick={handleMasInformacion}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(164,217,85,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Info size={16} /> Más información
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
        border: `2px solid ${isHovered ? '#A4D955' : 'transparent'}`,
        boxShadow: isHovered ? '0 0 20px rgba(164, 217, 85, 0.4), inset 0 0 20px rgba(164, 217, 85, 0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <video 
          ref={videoRef}
          autoPlay loop muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/assets/images/productos/biExp.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Stats - Grid de 3 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, margin: '0 20px 12px' }}>
        {[
          { title: 'FÁBRICA IA', label1: 'Privada para', label2: 'tu empresa' },
          { title: 'CONSULTORÍA', label1: 'Modelo', label2: 'StrategyOps' },
          { title: 'LABORATORIO', label1: 'Pruebas de', label2: 'concepto' }
        ].map((h, i) => (
          <div key={i} style={{ 
            background: 'linear-gradient(135deg, #F9FAFB, #F3F4F6)', borderRadius: 12, padding: '8px', 
            border: '1px solid rgba(0, 0, 0, 0.08)', display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: '#5EA500', marginBottom: 2, textAlign: 'center' }}>{h.title}</span>
            <span style={{ fontSize: 7, color: '#4B5563', textAlign: 'center', lineHeight: 1.1 }}>{h.label1}</span>
            <span style={{ fontSize: 7, color: '#4B5563', textAlign: 'center', lineHeight: 1.1 }}>{h.label2}</span>
          </div>
        ))}
      </div>

      {/* Big Stat Banner */}
      <div style={{ margin: '0 20px 16px' }}>
        <div style={{ 
          background: 'linear-gradient(to right, rgba(72,129,235,0.06), rgba(164,217,85,0.06), rgba(72,129,235,0.06))', 
          borderRadius: 12, padding: '10px 12px', border: '1px solid rgba(164, 217, 85, 0.15)', display: 'flex', 
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: '#111827', textAlign: 'center', letterSpacing: '0.05em' }}>PLATAFORMAS DE IA</span>
          <span style={{ fontSize: 8, fontWeight: 700, color: '#4B5563', textAlign: 'center', marginTop: 1 }}>PERSONALIZADAS</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '0 20px 20px', marginTop: 'auto', flexDirection: 'column' }}>
        <button 
          onClick={() => window.open('https://edgenet.mx', '_blank')}
          style={{ 
            background: '#F3F4F6', color: '#374151', border: '1px solid #D1D5DB', borderRadius: 8, padding: '10px 16px', fontSize: 13, fontWeight: 600, 
            display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: '100%', justifyContent: 'center', transition: 'all 0.2s' 
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#E5E7EB'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          ROI de los datos (Edgenet) &rarr;
        </button>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            background: 'linear-gradient(135deg, #A4D955, #7EBB2A)', color: '#111827', border: 'none', borderRadius: 8, padding: '10px 16px', fontSize: 13, fontWeight: 700, 
            display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: '100%', justifyContent: 'center', transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(164,217,85,0.2)'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(164,217,85,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(164,217,85,0.2)'; }}
        >
          Contacta tu cita
        </button>
      </div>

      {/* Modal de Información */}
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
              border: '2px solid rgba(164, 217, 85, 0.3)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div style={{
              background: 'linear-gradient(to right, #A4D955, #4881EB)',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'sticky',
              top: 0,
              zIndex: 10
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1.5px solid #FFFFFF' }}>
                  <img src={mayiaLakeLogo} alt="MAYiA Lake" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#FFFFFF', margin: 0 }}>MAYiA Lake</h2>
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
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.6, margin: 0 }}>
                <span style={{ fontWeight: 800, color: '#5EA500' }}>MAYiA Lake</span> es tu aliado en inteligencia artificial empresarial, ofreciendo soluciones personalizadas desde la consultoría hasta la implementación completa.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  {
                    title: 'Fábrica de IA Privada',
                    text: 'Infraestructura dedicada exclusivamente para tu empresa, garantizando privacidad y control total.'
                  },
                  {
                    title: 'Consultoría Estratégica',
                    text: 'Modelo StrategyOps para transformar tu negocio con inteligencia artificial de manera efectiva.'
                  },
                  {
                    title: 'Laboratorio de Innovación',
                    text: 'Espacio para pruebas de concepto y desarrollo de soluciones personalizadas antes de la implementación.'
                  },
                  {
                    title: 'Plataformas Personalizadas',
                    text: 'Desarrollo de soluciones de IA adaptadas específicamente a las necesidades de tu industria.'
                  }
                ].map((feature, idx) => (
                  <div key={idx} style={{ background: '#F9FAFB', borderRadius: 12, padding: '16px', border: '1px solid rgba(164, 217, 85, 0.15)' }}>
                    <h3 style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 700, color: '#5EA500' }}>{feature.title}</h3>
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
                  background: 'linear-gradient(135deg, #A4D955, #7EBB2A)', color: '#111827', border: 'none', borderRadius: 8, padding: '14px 16px', 
                  fontSize: 14, fontWeight: 700, cursor: 'pointer', width: '100%', textAlign: 'center', transition: 'all 0.2s',
                  boxShadow: '0 4px 12px rgba(164,217,85,0.2)', marginTop: 8
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(164,217,85,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(164,217,85,0.2)'; }}
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
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        background: '#FFFFFF', 
        borderRadius: 24, 
        padding: 24, 
        border: `2px solid ${isHovered ? color : '#E5E7EB'}`, 
        boxShadow: isHovered ? `0 20px 40px ${color}25, 0 0 20px ${color}15` : 'none', 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon size={22} color={color} />
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: '#111827', margin: 0, lineHeight: 1.2 }}>{title}</h3>
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
          <video 
            autoPlay loop muted playsInline preload="metadata"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {videoOverlay && videoOverlay}
        </div>
      )}

      <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5, margin: 0, marginBottom: 20, fontWeight: 500 }}>
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
            background: 'rgba(0,0,0,0.04)', color: '#374151', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 8, padding: '10px 16px', fontSize: 13, fontWeight: 700, 
            display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', flex: 1, justifyContent: 'center', transition: 'all 0.2s' 
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = color; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; }}
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
    { titulo: "Fundamentos del Prompting", nivel: "PRINCIPIANTE", horas: "4h", categoria: "Gestión" },
    { titulo: "IA para Trabajo Inteligente", nivel: "INTERMEDIO", horas: "25h", categoria: "Gestión" },
    { titulo: "Comunicación Efectiva en Equipo", nivel: "INTERMEDIO", horas: "10h", categoria: "Gestión" },
    { titulo: "Priorización y Delegación", nivel: "INTERMEDIO", horas: "10h", categoria: "Gestión" },
    { titulo: "IA para Gerentes", nivel: "AVANZADO", horas: "30h", categoria: "Gestión" },
    { titulo: "Gestión del Cambio", nivel: "AVANZADO", horas: "20h", categoria: "Gestión" },
    { titulo: "Toma de Decisiones Estratégicas", nivel: "AVANZADO", horas: "15h", categoria: "Gestión" },
    { titulo: "Optimización de Procesos", nivel: "AVANZADO", horas: "25h", categoria: "Gestión" },
    { titulo: "Desarrollo de Talento Humano", nivel: "AVANZADO", horas: "20h", categoria: "Gestión" },
    
    // Desarrollo y Programación
    { titulo: "Programación Asistida por IA", nivel: "INTERMEDIO", horas: "30h", categoria: "Desarrollo" },
    { titulo: "Django REST Framework", nivel: "AVANZADO", horas: "40h", categoria: "Desarrollo" },
    { titulo: "Python Fundamentos", nivel: "PRINCIPIANTE", horas: "35h", categoria: "Desarrollo" },
    { titulo: "Django Web Development", nivel: "INTERMEDIO", horas: "45h", categoria: "Desarrollo" },
    { titulo: "Docker para Python", nivel: "INTERMEDIO", horas: "20h", categoria: "Desarrollo" },
    { titulo: "Fundamentos de LLMs", nivel: "AVANZADO", horas: "50h", categoria: "Desarrollo" },
    { titulo: "Flask Web Apps", nivel: "INTERMEDIO", horas: "30h", categoria: "Desarrollo" },
    
    // Bases de Datos
    { titulo: "SQL Básico", nivel: "PRINCIPIANTE", horas: "15h", categoria: "Datos" },
    { titulo: "SQL Avanzado", nivel: "AVANZADO", horas: "25h", categoria: "Datos" },
    
    // Machine Learning y Análisis
    { titulo: "Machine Learning Fundamentos", nivel: "INTERMEDIO", horas: "40h", categoria: "ML & AI" },
    { titulo: "Computer Vision", nivel: "AVANZADO", horas: "45h", categoria: "ML & AI" },
    { titulo: "Tableau Visualización", nivel: "INTERMEDIO", horas: "20h", categoria: "ML & AI" },
    { titulo: "Data Wrangling", nivel: "INTERMEDIO", horas: "25h", categoria: "ML & AI" },
    { titulo: "Álgebra Lineal", nivel: "AVANZADO", horas: "30h", categoria: "ML & AI" },
    { titulo: "ML para Textos", nivel: "AVANZADO", horas: "35h", categoria: "ML & AI" },
    { titulo: "ML para Negocios", nivel: "AVANZADO", horas: "30h", categoria: "ML & AI" },
    { titulo: "Métodos Numéricos en ML", nivel: "AVANZADO", horas: "40h", categoria: "ML & AI" },
    { titulo: "Análisis Estadístico", nivel: "INTERMEDIO", horas: "30h", categoria: "ML & AI" },
    { titulo: "Aprendizaje Supervisado", nivel: "AVANZADO", horas: "45h", categoria: "ML & AI" },
    { titulo: "Python para Análisis", nivel: "PRINCIPIANTE", horas: "25h", categoria: "ML & AI" },
    { titulo: "Series Temporales", nivel: "AVANZADO", horas: "35h", categoria: "ML & AI" },
    { titulo: "Aprendizaje No Supervisado", nivel: "AVANZADO", horas: "40h", categoria: "ML & AI" },
    
    // Habilidades Blandas
    { titulo: "Habilidades Blandas", nivel: "PRINCIPIANTE", horas: "15h", categoria: "Soft Skills" }
  ];

  const opciones = [
    { id: 1, titulo: "IA PARA EMPRESAS", descripcion: "Capacitación corporativa" },
    { id: 2, titulo: "IA PARA PROFESIONALES", descripcion: "Cursos individuales" },
    { id: 3, titulo: "ALIANZAS Y GOBIERNOS", descripcion: "Programas especiales" }
  ];

  const getNivelColor = (nivel: string) => {
    switch(nivel) {
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
        background: '#FFFFFF', 
        borderRadius: 24, 
        padding: 24, 
        border: `2px solid ${isHovered ? '#A4D955' : '#E5E7EB'}`, 
        boxShadow: isHovered ? '0 20px 40px rgba(164, 217, 85, 0.25), 0 0 20px rgba(164, 217, 85, 0.15)' : 'none', 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <GraduationCap size={22} color="#ea580c" />
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
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#FFFFFF', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', overflow: 'hidden', zIndex: 40, minWidth: 220 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(164,217,85,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Agendar cita para cotización
                </button>
                <button 
                  onClick={handleMasInformacion}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(164,217,85,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Info size={16} /> Más información
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
        border: `2px solid ${isHovered ? '#A4D955' : 'transparent'}`,
        boxShadow: isHovered ? '0 0 20px rgba(164, 217, 85, 0.4), inset 0 0 20px rgba(164, 217, 85, 0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <video 
          autoPlay loop muted playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/assets/images/productos/astronautaSaludo.mp4" type="video/mp4" />
        </video>
        
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
                  background: isSelected ? 'linear-gradient(135deg, #A4D955, #7EBB2A)' : 'rgba(255, 255, 255, 0.9)',
                  color: isSelected ? '#111827' : '#374151',
                  border: isSelected ? '1px solid #A4D955' : '1px solid rgba(0,0,0,0.1)',
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
                  background: isSelected ? '#111827' : '#A4D955',
                  borderRadius: '50%',
                  color: isSelected ? '#A4D955' : '#FFFFFF',
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
            background: 'linear-gradient(135deg, #00913f, #14B8A6)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: 20,
            padding: '6px 12px',
            fontSize: 10,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
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
          border: '1px solid #E5E7EB',
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
                  <span style={{ color: '#14B8A6', fontWeight: 600 }}>{curso.categoria}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5, margin: '0 0 20px', fontWeight: 500 }}>
        Conoce nuestros 32 cursos de Inteligencia Artificial para equipos de trabajo de Negocios y Equipos Tech con Certificación.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
        {[
          { icon: BookOpen, value: '32', label: 'Cursos', color: '#84cc16' },
          { icon: Award, value: '6+', label: 'Certificaciones', color: '#3b82f6' },
          { icon: Briefcase, value: 'B2B', label: 'IA para negocios', color: '#f59e0b' },
          { icon: Users, value: 'Tech', label: 'IA para equipos', color: '#8b5cf6' },
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
            background: 'linear-gradient(135deg, #A4D955, #65a30d)',
            color: '#111827', fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(164,217,85,0.2)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(164,217,85,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(164,217,85,0.2)'; }}
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
          onMouseEnter={e => { e.currentTarget.style.background = '#E5E7EB'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
              border: '2px solid rgba(0, 145, 63, 0.3)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div style={{
              background: 'linear-gradient(to right, #00913f, #14B8A6)',
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
              <div style={{ background: 'linear-gradient(135deg, rgba(0,145,63,0.05), rgba(20,184,166,0.05))', borderRadius: 12, padding: '16px', border: '1px solid rgba(0, 145, 63, 0.15)' }}>
                <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 700, color: '#00913f' }}>Capacitación Especializada</h3>
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
                  <div key={idx} style={{ background: '#F9FAFB', borderRadius: 12, padding: '16px', border: '1px solid rgba(0, 145, 63, 0.1)' }}>
                    <h3 style={{ margin: '0 0 6px', fontSize: 14, fontWeight: 700, color: '#00913f' }}>{feature.title}</h3>
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
                  background: 'linear-gradient(135deg, #00913f, #14B8A6)', color: '#FFFFFF', border: 'none', borderRadius: 8, padding: '14px 16px', 
                  fontSize: 14, fontWeight: 700, cursor: 'pointer', width: '100%', textAlign: 'center', transition: 'all 0.2s',
                  boxShadow: '0 4px 12px rgba(20,184,166,0.3)', marginTop: 8
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(20,184,166,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(20,184,166,0.3)'; }}
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
export default function EnterpriseDashboard({ onOpenMap, onOpenFlaiInfo, onOpenFabricaInfo }: { onOpenMap?: () => void, onOpenFlaiInfo?: () => void, onOpenFabricaInfo?: () => void }) {
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
      
      {/* Background Grid & Blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '400px',
            height: '400px',
            borderRadius: 'full',
            background: 'rgba(164, 217, 85, 0.06)',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '400px',
            height: '400px',
            borderRadius: 'full',
            background: 'rgba(72, 129, 235, 0.05)',
            filter: 'blur(100px)',
          }}
        />
      </div>

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
        <div style={{ display: 'flex', gap: 40, marginBottom: 32, borderBottom: '1px solid #E5E7EB', paddingBottom: 16, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <span 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                style={{ 
                  fontSize: 16, 
                  fontWeight: isActive ? 700 : 500, 
                  color: isActive ? '#111827' : '#6B7280', 
                  cursor: 'pointer', 
                  position: 'relative',
                  transition: 'color 0.3s ease'
                }}
              >
                {cat}
                {isActive && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    style={{ position: 'absolute', bottom: -17, left: 0, right: 0, height: 2, background: '#A4D955' }} 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </span>
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
            <EdgenetCard onOpenMap={onOpenMap} onOpenFabricaInfo={onOpenFabricaInfo} />
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
              color="#16a34a" 
              bg="rgba(22,163,74,0.15)" 
              title="Laboratorios IA" 
              desc="Experimenta, valida y crea soluciones de inteligencia artificial antes de invertir a gran escala. Convierte ideas en prototipos funcionales y descubre nuevas oportunidades para tu negocio." 
            />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <StandardCard 
              icon={Wrench} 
              color="#ea580c" 
              bg="rgba(234,88,12,0.15)" 
              title="ROI Discovery" 
              desc="Descubre cuánto valor puede generar la IA en tu empresa. Analizamos procesos, costos y oportunidades para identificar dónde implementar IA con mayor retorno." 
              videoSrc="/assets/images/productos/mabePanel.mp4"
              stats={[
                { value: "10x+", label: "ROI Estimado" },
                { value: "4 Semanas", label: "De análisis" },
                { value: "100%", label: "Alineación a KPIs" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#ea580c', border: '1px solid rgba(234,88,12,0.2)' }}>
                  📈 ROI Calculator Active
                </div>
              }
            />
          </Wrapper>

          {/* --- CATEGORIA: Desarrollo --- */}
          <Wrapper category="Desarrollo">
            <MayiaCard />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={Briefcase} 
              color="#2563eb" 
              bg="rgba(37,99,235,0.15)" 
              title="Desarrollo IA Empresarial" 
              desc="Diseñamos soluciones de IA personalizadas que optimizan procesos, mejoran la toma de decisiones y generan un retorno de inversión claro y medible." 
              videoSrc="/assets/images/productos/portalia.mp4"
              stats={[
                { value: "99.9%", label: "Precisión Modelos" },
                { value: "90%", label: "Automatización" },
                { value: "RAG/LLM", label: "Arquitectura" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#2563eb', border: '1px solid rgba(37,99,235,0.2)' }}>
                  ⚡ Enterprise RAG Ready
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={GitBranch} 
              color="#9333ea" 
              bg="rgba(147,51,234,0.15)" 
              title="Desarrollo IA en Organigrama" 
              desc="Identifica qué áreas de tu empresa pueden ser potenciadas con IA. Desarrollamos empleados digitales inteligentes para transformar funciones, equipos y flujos de trabajo en todo tu organigrama." 
              videoSrc="/assets/images/robotAbajo.mp4"
              stats={[
                { value: "5+", label: "Roles de Agentes" },
                { value: "60%", label: "Ahorro de Tiempo" },
                { value: "Autónomo", label: "Flujo de Trabajo" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#9333ea', border: '1px solid rgba(147,51,234,0.2)' }}>
                  🤖 Agentic Workforce
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={LineChart} 
              color="#16a34a" 
              bg="rgba(22,163,74,0.15)" 
              title="Desarrollo IA por Sector" 
              desc="Tu industria ya opera con inteligencia artificial. Creamos soluciones especializadas para tu sector, adaptadas a tus retos, clientes y oportunidades reales." 
              videoSrc="/assets/images/productos/prediccionVent.mp4"
              stats={[
                { value: "10+", label: "Sectores Clave" },
                { value: "Real-Time", label: "Procesamiento" },
                { value: "API-First", label: "Integración" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#16a34a', border: '1px solid rgba(22,163,74,0.2)' }}>
                  🏭 Multi-Industry Engines
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={FileText} 
              color="#dc2626" 
              bg="rgba(220,38,38,0.15)" 
              title="Desarrollo IA Estatal" 
              desc="Modernizamos servicios públicos, superamos la atención ciudadana y toma decisiones en tiempo real basadas en datos abiertos con soluciones de IA diseñadas para instituciones gubernamentales." 
              videoSrc="/assets/images/productos/ParqueSeguro.mp4"
              stats={[
                { value: "100k+", label: "Ciudadanos Activos" },
                { value: "24/7", label: "Servicios Digitales" },
                { value: "Seguros", label: "Datos de Gobierno" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#dc2626', border: '1px solid rgba(220,38,38,0.2)' }}>
                  🏛 GovTech Platform
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={Wrench} 
              color="#ea580c" 
              bg="rgba(234,88,12,0.15)" 
              title="Desarrollo IA PYME" 
              desc="Conoce las Píldoras de IA. Automatiza tareas, vende mejor, atiende más rápido y compite con tecnología accesible para pequeñas y medianas empresas." 
              videoSrc="/assets/images/productos/whatsFaq.mp4"
              stats={[
                { value: "Asequible", label: "Inversión Pyme" },
                { value: "1 Semana", label: "Despliegue Rápido" },
                { value: "WhatsApp", label: "Canal Principal" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#ea580c', border: '1px solid rgba(234,88,12,0.2)' }}>
                  💬 WhatsApp AI Bot
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={ScanEye} 
              color="#16a34a" 
              bg="rgba(22,163,74,0.15)" 
              title="Desarrollo IA en Computer Vision" 
              desc="Haz que tus sistemas vean, detecten y actúen. Implementamos visión artificial para inspección, seguridad, conteo, reconocimiento y automatización visual en tiempo real." 
              videoSrc="/assets/images/productos/camara2.mp4"
              stats={[
                { value: "30 FPS", label: "Procesamiento Live" },
                { value: "99.5%", label: "Precisión Visual" },
                { value: "Edge/Cloud", label: "Despliegue" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#16a34a', border: '1px solid rgba(22,163,74,0.2)' }}>
                  👁 Vision Stream Analyzer
                </div>
              }
            />
          </Wrapper>

          <Wrapper category="Desarrollo">
            <StandardCard 
              icon={ShoppingBag} 
              color="#dc2626" 
              bg="rgba(220,38,38,0.15)" 
              title="Market Place de Soluciones" 
              desc="Encuentra soluciones de IA listas para implementar. Explora herramientas, agentes y automatizaciones creadas para resolver problemas reales de negocio." 
              videoSrc="/assets/images/productos/portalia.mp4"
              stats={[
                { value: "50+", label: "Apps Listas" },
                { value: "1-Click", label: "Instalación" },
                { value: "Seguro", label: "Certificado" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#dc2626', border: '1px solid rgba(220,38,38,0.2)' }}>
                  🛒 App Store Ready
                </div>
              }
            />
          </Wrapper>

          {/* --- CATEGORIA: Monitoreo --- */}
          <Wrapper category="Monitoreo">
            <StandardCard 
              icon={FileText} 
              color="#dc2626" 
              bg="rgba(220,38,38,0.15)" 
              title="Monitoreo de Modelos IA" 
              desc="Supervisa el desempeño de tus modelos, automatizaciones y agentes inteligentes en tiempo real. Detecta fallas, mide resultados y mejora continuamente tus soluciones de IA." 
              videoSrc="/assets/images/productos/deteccionAnomalias.mp4"
              stats={[
                { value: "Real-Time", label: "Latencia & Drift" },
                { value: "Mailing", label: "Alertas Activas" },
                { value: "ISO 42001", label: "Gobernanza IA" }
              ]}
              videoOverlay={
                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#dc2626', border: '1px solid rgba(220,38,38,0.2)' }}>
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
