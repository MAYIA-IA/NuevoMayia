import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, FlaskConical, FileText, Wrench, Calendar,
  Briefcase, LineChart, ShoppingBag, GraduationCap, GitBranch, ScanEye,
  BookOpen, Award, Users, MoreVertical, Info
} from 'lucide-react';
import logoMaia from '../assets/logosNativos/logoMaia.png';
import academiaLogo from '../assets/logosNativos/academia-horizontal.png';
import flaiLogo from '../assets/logosNativos/logo-FLAI.png';
import flaiNubeIcon from '../assets/logosNativos/1. NUBE_FINAL_FLAI (1).png';
import mayiaLakeImg from '../assets/logosNativos/MAYiA_LAKE.jpeg';
import cyberpeaceLogo from '../assets/SOC/cyberpeaceLogo.png';
import cyberpeaceVid from '../assets/SOC/cyberpeaceVid.mp4';
import CalendarModal from './CalendarModal';

const CATEGORIES = ['Infraestructura', 'Desarrollo', 'Modelos', 'Agentes', 'Operación', 'Monitoreo', 'Capacitación'];

function SocCard({ onOpenInfo }: { onOpenInfo?: () => void }) {
  const handleAgendarCita = () => {
    window.open("https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0", '_blank');
  };

  return (
    <div style={{ 
      background: '#ffffff', borderRadius: 16, border: '1px solid #e5e7eb', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6 }}>
            <img src={cyberpeaceLogo} alt="CyberPeace SOC" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>SOC IA CyberPeace</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Ciberseguridad 360°</p>
          </div>
        </div>
      </div>

      <div style={{ margin: '0 20px 16px', borderRadius: 12, overflow: 'hidden', height: 160, position: 'relative', background: '#0A0A14' }}>
        <video 
            autoPlay loop muted playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
        >
            <source src={cyberpeaceVid} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
           {["CACERÍA DE AMENAZAS", "INTELIGENCIA IA", "EVALUACIÓN RIESGOS"].map((f, i) => (
             <span key={i} style={{ background: 'rgba(59,130,246,0.85)', backdropFilter: 'blur(4px)', color: '#fff', fontSize: 9, fontWeight: 800, padding: '4px 8px', borderRadius: 6, border: '1px solid rgba(125,209,255,0.4)', letterSpacing: '0.04em' }}>{f}</span>
           ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 20px 16px', marginTop: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#111827' }}>FIRST</p>
          <p style={{ margin: 0, fontSize: 11, color: '#6b7280', fontWeight: 600 }}>Miembro</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#3b82f6' }}>ISO 27001</p>
          <p style={{ margin: 0, fontSize: 11, color: '#6b7280', fontWeight: 600 }}>Seguridad</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#10b981' }}>24/7</p>
          <p style={{ margin: 0, fontSize: 11, color: '#6b7280', fontWeight: 600 }}>Monitoreo</p>
        </div>
      </div>

      <div style={{ padding: '0 20px 20px', display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
        {['ISO 42001', 'ISO 27034', 'ISO 27017', 'ISO 9001', 'ISO 37001', 'ISO 27018'].map(cert => (
          <span key={cert} style={{ fontSize: 9, fontWeight: 700, padding: '4px 8px', borderRadius: 99, background: '#f3f4f6', color: '#4b5563', border: '1px solid #e5e7eb' }}>
            {cert}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '0 20px 20px' }}>
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
            background: '#f3f4f6', color: '#374151', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 0', fontSize: 13, fontWeight: 600, 
            display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', flex: 1, justifyContent: 'center', transition: 'all 0.2s' 
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#e5e7eb'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#f3f4f6'; }}
        >
          Conocer más &rarr;
        </button>
      </div>
    </div>
  );
}

export default function EnterpriseDashboard({ onOpenMap, onOpenFlaiInfo }: { onOpenMap?: () => void, onOpenFlaiInfo?: () => void }) {
  const [activeTab, setActiveTab] = useState('Infraestructura');
  const [calendarPos, setCalendarPos] = useState<{x: number, y: number} | null>(null);

  const Wrapper = ({ category, children }: { category: string, children: React.ReactNode }) => {
    const isMatch = activeTab === category;
    return (
      <motion.div
        layout
        initial={false}
        animate={{ 
          y: isMatch ? -6 : 0,
          boxShadow: isMatch ? '0 0 30px rgba(164,217,85,0.5), 0 0 15px rgba(164,217,85,0.8)' : 'none'
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        style={{
          position: 'relative',
          height: '100%',
          borderRadius: '16px',
          padding: isMatch ? '4px' : '0px',
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
          background: '#ffffff',
          borderRadius: isMatch ? '13px' : '16px',
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
        background: '#ffffff',
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
            <h2 style={{ fontSize: 26, fontWeight: 400, color: '#374151', margin: 0 }}>
              ¿Qué solución de IA necesitas implementar hoy?
            </h2>
          </div>
          

        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: 40, marginBottom: 32, borderBottom: '1px solid #e5e7eb', paddingBottom: 16, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <span 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                style={{ 
                  fontSize: 16, 
                  fontWeight: isActive ? 700 : 500, 
                  color: isActive ? '#111827' : '#6b7280', 
                  cursor: 'pointer', 
                  position: 'relative',
                  transition: 'color 0.3s ease'
                }}
              >
                {cat}
                {isActive && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    style={{ position: 'absolute', bottom: -17, left: 0, right: 0, height: 2, background: '#111827' }} 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </span>
            );
          })}
        </div>

        {/* All Cards Grid */}
        <motion.div layout style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: 24 
        }}>
          
          {/* --- Infraestructura --- */}
          <Wrapper category="Infraestructura">
            <div style={{ background: '#ffffff', borderRadius: 16, padding: 24, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 64, height: 64, borderRadius: 12, background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Database size={28} color="#38bdf8" />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', margin: 0, lineHeight: 1.2 }}>Fábrica de IA,<br/>IA Privada</h3>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                <div style={{ flex: 1, background: '#f0f9ff', borderRadius: 8, padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#0ea5e9' }}>30</div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#7dd3fc', textTransform: 'uppercase' }}>Centros datos</div>
                </div>
                <div style={{ flex: 1, background: '#f0fdf4', borderRadius: 8, padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#10b981' }}>24</div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#6ee7b7', textTransform: 'uppercase' }}>Estados</div>
                </div>
                <div style={{ flex: 1, background: '#fff7ed', borderRadius: 8, padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#f59e0b', marginTop: 4 }}>99.98%</div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#fcd34d', textTransform: 'uppercase' }}>TIER III SLA</div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.5, margin: '0 0 20px', fontWeight: 500 }}>
                Somos la red de inteligencia artificial más grande del país
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <button onClick={onOpenMap} style={{ background: '#111827', color: '#ffffff', border: 'none', borderRadius: 8, padding: '12px 16px', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: '100%', justifyContent: 'center', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                   Descubre porque &rarr;
                </button>
              </div>
            </div>
          </Wrapper>

          <Wrapper category="Infraestructura">
            <FlaiCard onOpenInfo={onOpenFlaiInfo} />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <SocCard onOpenInfo={() => alert('Sección de Más Información CyberPeace SOC en construcción.')} />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <StandardCard icon={FlaskConical} color="#16a34a" bg="#dcfce7" title="Laboratorios IA" desc="Experimenta, valida y crea soluciones de inteligencia artificial antes de invertir a gran escala. Convierte ideas en prototipos funcionales y descubre nuevas oportunidades para tu negocio." />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <StandardCard icon={Wrench} color="#ea580c" bg="#ffedd5" title="ROI Discovery" desc="Descubre cuánto valor puede generar la IA en tu empresa. Analizamos procesos, costos y oportunidades para identificar dónde implementar IA con mayor retorno." />
          </Wrapper>


          {/* --- Desarrollo --- */}
          <Wrapper category="Desarrollo">
            <div style={{ background: '#ffffff', borderRadius: 16, padding: 24, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                  <img src={mayiaLakeImg} alt="MAYiA Lake" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', margin: 0, lineHeight: 1.2 }}>MAYiA Lake</h3>
              </div>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.6, margin: 0, marginBottom: 20 }}>
                Conoce cómo le puedes dar valor a tus datos. Descubre oportunidades ocultas y visualiza el crecimiento de tu negocio con analítica IA.
              </p>
              <div style={{ display: 'flex', gap: 8, marginTop: 'auto', flexDirection: 'column' }}>
                <button 
                  onClick={() => window.open('https://edgenet.mx', '_blank')}
                  style={{ 
                    background: '#f3f4f6', color: '#374151', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 16px', fontSize: 13, fontWeight: 600, 
                    display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: '100%', justifyContent: 'center', transition: 'all 0.2s' 
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#e5e7eb'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  ROI de los datos (Edgenet) &rarr;
                </button>
                <button 
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setCalendarPos({ x: rect.right + 12, y: Math.max(20, rect.top - 140) });
                  }}
                  style={{ 
                    background: '#2563eb', color: '#ffffff', border: 'none', borderRadius: 8, padding: '10px 16px', fontSize: 13, fontWeight: 600, 
                    display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: '100%', justifyContent: 'center', transition: 'all 0.2s' 
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Contacta tu cita
                </button>
              </div>
            </div>
          </Wrapper>
          <Wrapper category="Desarrollo">
            <StandardCard icon={Briefcase} color="#2563eb" bg="#dbeafe" title="Desarrollo IA Empresarial" desc="Diseñamos soluciones de IA personalizadas que optimizan procesos, mejoran la toma de decisiones y generan un retorno de inversión claro y medible." />
          </Wrapper>
          <Wrapper category="Desarrollo">
            <StandardCard icon={GitBranch} color="#9333ea" bg="#f3e8ff" title="Desarrollo IA en Organigrama" desc="Identifica qué áreas de tu empresa pueden ser potenciadas con IA. Desarrollamos empleados digitales inteligentes para transformar funciones, equipos y flujos de trabajo en todo tu organigrama." />
          </Wrapper>
          <Wrapper category="Desarrollo">
            <StandardCard icon={LineChart} color="#16a34a" bg="#dcfce7" title="Desarrollo IA por Sector" desc="Tu industria ya opera con inteligencia artificial. Creamos soluciones especializadas para tu sector, adaptadas a tus retos, clientes y oportunidades reales." />
          </Wrapper>
          <Wrapper category="Desarrollo">
            <StandardCard icon={FileText} color="#dc2626" bg="#fee2e2" title="Desarrollo IA Estatal" desc="Modernizamos servicios públicos, superamos la atención ciudadana y toma decisiones en tiempo real basadas en datos abiertos con soluciones de IA diseñadas para instituciones gubernamentales." />
          </Wrapper>
          <Wrapper category="Desarrollo">
            <StandardCard icon={Wrench} color="#ea580c" bg="#ffedd5" title="Desarrollo IA PYME" desc="Conoce las Píldoras de IA. Automatiza tareas, vende mejor, atiende más rápido y compite con tecnología accesible para pequeñas y medianas empresas." />
          </Wrapper>
          <Wrapper category="Desarrollo">
            <StandardCard icon={ScanEye} color="#16a34a" bg="#dcfce7" title="Desarrollo IA en Computer Vision" desc="Haz que tus sistemas vean, detecten y actúen. Implementamos visión artificial para inspección, seguridad, conteo, reconocimiento y automatización visual en tiempo real." />
          </Wrapper>
          <Wrapper category="Desarrollo">
            <StandardCard icon={ShoppingBag} color="#dc2626" bg="#fee2e2" title="Market Place de Soluciones" desc="Encuentra soluciones de IA listas para implementar. Explora herramientas, agentes y automatizaciones creadas para resolver problemas reales de negocio." />
          </Wrapper>

          {/* --- Operación --- */}

          {/* --- Monitoreo --- */}
          <Wrapper category="Monitoreo">
            <StandardCard icon={FileText} color="#dc2626" bg="#fee2e2" title="Monitoreo de Modelos IA" desc="Supervisa el desempeño de tus modelos, automatizaciones y agentes inteligentes en tiempo real. Detecta fallas, mide resultados y mejora continuamente tus soluciones de IA." />
          </Wrapper>

          {/* --- Capacitación --- */}
          <Wrapper category="Capacitación">
            <div style={{ background: '#ffffff', borderRadius: 16, padding: 24, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GraduationCap size={24} color="#ea580c" />
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <img src={academiaLogo} alt="Academia MAYiA" style={{ height: '32px', objectFit: 'contain' }} />
                </div>
              </div>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.6, margin: '0 0 20px' }}>
                Conoce nuestros 32 cursos de Inteligencia Artificial para equipos de trabajo de Negocios y Equipos Tech con Certificación.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
                {[
                  { icon: BookOpen, value: '32', label: 'Cursos', color: '#84cc16' },
                  { icon: Award, value: '6+', label: 'Certificaciones', color: '#3b82f6' },
                  { icon: Briefcase, value: 'B2B', label: 'IA para negocios', color: '#f59e0b' },
                  { icon: Users, value: 'Tech', label: 'IA para equipos', color: '#8b5cf6' },
                ].map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderRadius: 10, background: '#f9fafb', border: '1px solid #f3f4f6' }}>
                    <h.icon size={18} color={h.color} style={{ flexShrink: 0 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                      <span style={{ fontSize: 14, fontWeight: 800, color: '#111827' }}>{h.value}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#6b7280' }}>{h.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
                <a
                  href="https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    padding: '10px 12px', borderRadius: 8,
                    background: 'linear-gradient(135deg, #A4D955, #65a30d)',
                    color: '#000000', fontWeight: 700, fontSize: 13, textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(164,217,85,0.3)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Cotizar cursos
                </a>
                <button
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setCalendarPos({ x: rect.right + 12, y: rect.top - 140 });
                  }}
                  style={{
                    flex: 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    padding: '10px 12px', borderRadius: 8,
                    background: '#f3f4f6', border: '1px solid #e5e7eb', cursor: 'pointer',
                    color: '#374151', fontWeight: 600, fontSize: 13, textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#e5e7eb'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Revisar fechas
                </button>
              </div>
            </div>
          </Wrapper>

        </motion.div>
      </div>

      {calendarPos && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 99999,
        }} onClick={() => setCalendarPos(null)}>
          <div style={{
            position: 'absolute',
            left: Math.min(calendarPos.x, window.innerWidth - 280),
            top: Math.max(20, Math.min(calendarPos.y, window.innerHeight - 380)),
          }} onClick={e => e.stopPropagation()}>
            <CalendarModal onClose={() => setCalendarPos(null)} />
          </div>
        </div>
      )}

    </section>
  );
}

function FlaiCard({ onOpenInfo }: { onOpenInfo?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAgendarCita = () => {
    window.open("https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0", '_blank');
    setMenuOpen(false);
  };

  const handleMasInformacion = () => {
    setMenuOpen(false);
    if (onOpenInfo) onOpenInfo();
  };

  return (
    <div style={{ 
      background: '#ffffff', borderRadius: 16, border: '1px solid #e5e7eb', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' 
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #DC2626, #991B1B)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6 }}>
            <img src={flaiLogo} alt="FLAI" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#111827' }}>FLAI</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Nube Soberana</p>
          </div>
        </div>
        
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#f3f4f6'}
            onMouseLeave={e => e.currentTarget.style.background = 'none'}
          >
            <MoreVertical size={20} />
          </button>
          
          {menuOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 30 }} onClick={() => setMenuOpen(false)} />
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#ffffff', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6', overflow: 'hidden', zIndex: 40, minWidth: 200 }}>
                <button 
                  onClick={handleAgendarCita}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Calendar size={16} /> Agendar cita
                </button>
                <button 
                  onClick={handleMasInformacion}
                  style={{ width: '100%', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Info size={16} /> Más información
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Image Area */}
      <div style={{ margin: '0 20px 16px', borderRadius: 12, overflow: 'hidden', height: 160, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src={flaiNubeIcon} 
          alt="FLAI Nube" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 20px 20px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#111827' }}>100%</p>
          <p style={{ margin: 0, fontSize: 11, color: '#6b7280', fontWeight: 600 }}>Soberana</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#DC2626' }}>1era</p>
          <p style={{ margin: 0, fontSize: 11, color: '#6b7280', fontWeight: 600 }}>Nube IA</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#006847' }}>30</p>
          <p style={{ margin: 0, fontSize: 11, color: '#6b7280', fontWeight: 600 }}>Centros</p>
        </div>
      </div>

      <div style={{ display: 'flex', marginTop: 'auto', padding: '0 20px 20px' }}>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            background: 'linear-gradient(135deg, #DC2626, #991B1B)', color: '#ffffff', border: 'none', borderRadius: 8, padding: '10px 16px', fontSize: 13, fontWeight: 600, 
            display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: '100%', justifyContent: 'center', transition: 'all 0.2s' 
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(220,38,38,0.2)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          Cotiza ahora &rarr;
        </button>
      </div>
    </div>
  );
}
function StandardCard({ icon: Icon, color, bg, title, desc, children }: { icon: any, color: string, bg: string, title: string, desc: string, children?: React.ReactNode }) {
  return (
    <div style={{ background: '#ffffff', borderRadius: 16, padding: 24, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon size={24} color={color} />
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', margin: 0, lineHeight: 1.2 }}>{title}</h3>
      </div>
      <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.6, margin: 0, marginBottom: 20 }}>
        {desc}
      </p>
      {children && <div>{children}</div>}
      <div style={{ display: 'flex', marginTop: 'auto', paddingTop: children ? 20 : 0 }}>
        <button style={{ 
          background: '#f3f4f6', color: '#374151', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 16px', fontSize: 13, fontWeight: 600, 
          display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: '100%', justifyContent: 'center', transition: 'all 0.2s' 
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#e5e7eb'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Conocer más &rarr;
        </button>
      </div>
    </div>
  );
}
