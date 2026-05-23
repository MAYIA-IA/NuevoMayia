import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Cloud, ShieldAlert, FlaskConical, FileText, Wrench, Calendar, 
  Briefcase, LineChart, ShoppingBag, GraduationCap, GitBranch, ScanEye
} from 'lucide-react';
import mayiaLogoBlanco from '../assets/logosNativos/mayiaLogoBlanco.png';
import flaiLogo from '../assets/logosNativos/logo-FLAI.png';

const CATEGORIES = ['Infraestructura', 'Desarrollo', 'Operación', 'Monitoreo', 'Capacitación'];

export default function EnterpriseDashboard() {
  const [activeTab, setActiveTab] = useState('Infraestructura');

  const Wrapper = ({ category, children }: { category: string, children: React.ReactNode }) => {
    const isMatch = activeTab === category;
    return (
      <div style={{
        position: 'relative',
        height: '100%',
        borderRadius: '16px',
        padding: isMatch ? '4px' : '0px',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isMatch ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isMatch ? '0 0 30px rgba(164,217,85,0.5), 0 0 15px rgba(164,217,85,0.8)' : 'none',
        zIndex: isMatch ? 10 : 1,
        overflow: isMatch ? 'hidden' : 'visible',
      }}>
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
      </div>
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
                  background: '#0A0A14',
                  borderRadius: '16px', 
                  padding: '10px 24px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(164,217,85,0.25), inset 0 1px 2px rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(164,217,85,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                <img 
                  src={mayiaLogoBlanco} 
                  alt="MAYIA" 
                  style={{ height: '36px', objectFit: 'contain', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} 
                />
              </div>
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 400, color: '#374151', margin: 0 }}>
              ¿Qué solución de I.A. necesitas hoy?
            </h2>
          </div>
          
          {/* Toggle Models / Agents */}
          <div style={{ display: 'flex', background: '#f3f4f6', borderRadius: 99, padding: 4, border: '1px solid #e5e7eb' }}>
            <button style={{ background: '#ffffff', border: 'none', padding: '8px 20px', borderRadius: 99, fontSize: 14, fontWeight: 600, color: '#111827', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer' }}>Models</button>
            <button style={{ background: 'transparent', border: 'none', padding: '8px 20px', borderRadius: 99, fontSize: 14, fontWeight: 500, color: '#6b7280', cursor: 'pointer' }}>Agents</button>
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
        <div style={{ 
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
                <h3 style={{ fontSize: 22, fontWeight: 600, color: '#111827', margin: 0 }}>IA Privada</h3>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                <div style={{ flex: 1, background: '#f0f9ff', borderRadius: 8, padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#0ea5e9' }}>12</div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#7dd3fc', textTransform: 'uppercase' }}>Zonas Activas</div>
                </div>
                <div style={{ flex: 1, background: '#f0fdf4', borderRadius: 8, padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#10b981' }}>94.3%</div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#6ee7b7', textTransform: 'uppercase' }}>Precisión IA</div>
                </div>
                <div style={{ flex: 1, background: '#fff7ed', borderRadius: 8, padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#f59e0b' }}>3</div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#fcd34d', textTransform: 'uppercase' }}>Alertas Stock</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span style={{ fontSize: 13, color: '#4b5563', fontWeight: 500, lineHeight: 1.3 }}>Presencia a<br/>nivel nacional</span>
                <button style={{ background: '#111827', color: '#ffffff', border: 'none', borderRadius: 8, padding: '12px 16px', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                  <Calendar size={14} /> <span style={{ textAlign: 'left', lineHeight: 1.2 }}>Agendar cita para<br/>cotización</span>
                </button>
              </div>
            </div>
          </Wrapper>

          <Wrapper category="Infraestructura">
            <div style={{ background: '#ffffff', borderRadius: 16, padding: 24, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: 12, background: 'linear-gradient(135deg, #2e1065, #4c1d95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cloud size={32} color="#ddd6fe" fill="#ddd6fe" />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: '#111827', margin: 0, display: 'flex', alignItems: 'center' }}>
                  <img src={flaiLogo} alt="FLAI Nube" style={{ height: '36px', objectFit: 'contain' }} />
                </h3>
              </div>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.6, margin: 0 }}>
                Lleva tu operación a una nube inteligente, segura y escalable. Centraliza datos, automatiza procesos y activa soluciones de IA listas para crecer con tu negocio.
              </p>
            </div>
          </Wrapper>

          <Wrapper category="Infraestructura">
            <div style={{ background: '#ffffff', borderRadius: 16, padding: 24, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldAlert size={24} color="#9333ea" />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', margin: 0, lineHeight: 1.2 }}>Soc IA<br/>Ciberseguridad</h3>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.5, margin: '0 0 20px' }}>
                Protege tu empresa con un centro de monitoreo inteligente. Detecta amenazas, responde más rápido y fortalece tu seguridad digital con IA en tiempo real.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                {['ISO 27034', 'ISO 27017', 'ISO 9001', 'ISO 37001', 'ISO 27018'].map(iso => (
                  <span key={iso} style={{ background: '#1e1b4b', color: '#e0e7ff', fontSize: 10, fontWeight: 600, padding: '6px 10px', borderRadius: 99 }}>{iso}</span>
                ))}
              </div>
            </div>
          </Wrapper>

          <Wrapper category="Infraestructura">
            <StandardCard icon={FlaskConical} color="#16a34a" bg="#dcfce7" title="Laboratorios IA" desc="Experimenta, valida y crea soluciones de inteligencia artificial antes de invertir a gran escala. Convierte ideas en prototipos funcionales y descubre nuevas oportunidades para tu negocio." />
          </Wrapper>

          <Wrapper category="Infraestructura">
            <StandardCard icon={Wrench} color="#ea580c" bg="#ffedd5" title="ROI Discovery" desc="Descubre cuánto valor puede generar la IA en tu empresa. Analizamos procesos, costos y oportunidades para identificar dónde implementar IA con mayor retorno." />
          </Wrapper>


          {/* --- Desarrollo --- */}
          <Wrapper category="Desarrollo">
            <StandardCard icon={Database} color="#ca8a04" bg="#fef08a" title="Mayia Lake Analíticos" desc="Convierte tus datos en decisiones inteligentes. Descubre oportunidades ocultas, anticipa riesgos y visualiza el crecimiento de tu negocio con analítica impulsada por IA." />
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
            <StandardCard icon={GraduationCap} color="#ea580c" bg="#ffedd5" title="Academia Mayia" desc="Conoce nuestros 32 cursos de Inteligencia Artificial para equipos de trabajo de Negocios y Equipos Tech con Certificación." />
          </Wrapper>

        </div>
      </div>
    </section>
  );
}

// Helper component for standard cards
function StandardCard({ icon: Icon, color, bg, title, desc }: { icon: any, color: string, bg: string, title: string, desc: string }) {
  return (
    <div style={{ background: '#ffffff', borderRadius: 16, padding: 24, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon size={24} color={color} />
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', margin: 0, lineHeight: 1.2 }}>{title}</h3>
      </div>
      <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.6, margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}
