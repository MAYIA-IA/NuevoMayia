import React, { useEffect, useState } from 'react';
import { X, ArrowRight, CheckCircle, Zap, Shield, Server } from 'lucide-react';
import amdLogo from '../assets/logosNativos/amd.png';

interface Musculo {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
  glow: string;
  tag: string;
}

interface MusculoModalProps {
  isOpen: boolean;
  onClose: () => void;
  musculo: Musculo | null;
}

const MusculoModal: React.FC<MusculoModalProps> = ({ isOpen, onClose, musculo }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setMounted(false), 400);
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!mounted || !musculo) return null;

  const isAMD = musculo.id === '04';
  const accent = musculo.accent;

  const getMusculoContent = (id: string, title: string) => {
    const contentMap: Record<string, any> = {
      '01': {
        boxTitle: 'Potencia Distribuida',
        boxDesc: 'Tu inteligencia artificial alojada cerca de donde la necesitas, minimizando latencia y garantizando alta disponibilidad.',
        features: [
          { icon: Server, title: 'Edge Computing Activo', desc: 'Acercamos el procesamiento al usuario final para una respuesta en milisegundos.' },
          { icon: Shield, title: 'Redundancia Total', desc: 'Nodos de respaldo interconectados para asegurar la continuidad de tus operaciones.' },
          { icon: Zap, title: 'Escalabilidad Inmediata', desc: 'Añade recursos computacionales al instante según la demanda de tus proyectos.' }
        ]
      },
      '02': {
        boxTitle: 'Tu Socio Tecnológico Local',
        boxDesc: 'Operamos en los 32 estados de la República Mexicana, asegurando cumplimiento normativo y trato directo donde estés.',
        features: [
          { icon: CheckCircle, title: 'Cumplimiento Regulatorio', desc: 'Tus datos se quedan en México, cumpliendo con las leyes de privacidad nacionales.' },
          { icon: Zap, title: 'Latencia Mínima', desc: 'Infraestructura física en territorio nacional para conexiones ultrarrápidas.' },
          { icon: Shield, title: 'Soporte en Sitio', desc: 'Red de ingenieros distribuidos listos para dar asistencia física si es necesario.' }
        ]
      },
      '03': {
        boxTitle: 'Soberanía y Control Total',
        boxDesc: 'No dependemos de terceros. Operamos nuestros propios servidores y redes para garantizar el máximo rendimiento y seguridad.',
        features: [
          { icon: Server, title: 'Hardware Dedicado', desc: 'Equipos de última generación configurados específicamente para cargas de IA.' },
          { icon: Shield, title: 'Aislamiento de Datos', desc: 'Entornos privados que aseguran que tu información nunca se comparta en nubes públicas.' },
          { icon: Zap, title: 'Optimización de Costos', desc: 'Eliminamos intermediarios para ofrecerte la mejor relación costo-beneficio del mercado.' }
        ]
      },
      '04': {
        boxTitle: 'Ven y prueba aquí tus proyectos',
        boxDesc: 'Acceso exclusivo a clusters potenciados por aceleradores AMD Instinct™ y procesadores EPYC™. Trae tu modelo y descubre el verdadero rendimiento.',
        features: [
          { icon: Server, title: 'Procesamiento Extremo', desc: 'Arquitectura AMD EPYC de última generación para cargas de trabajo masivas.' },
          { icon: Zap, title: 'Aceleración de Inferencias', desc: 'AMD Instinct optimizado para modelos fundacionales y LLMs con latencia ultrabaja.' },
          { icon: Shield, title: 'EdgeNET Integrado', desc: 'Conectividad directa a nuestra red soberana de 30 centros de datos en México.' }
        ]
      },
      '05': {
        boxTitle: 'Formación de Vanguardia',
        boxDesc: 'Capacita a tu talento humano. Nuestros cursos y certificaciones cierran la brecha entre la tecnología y tu equipo.',
        features: [
          { icon: CheckCircle, title: 'Instructores Expertos', desc: 'Aprende directamente de los ingenieros que desarrollan soluciones de IA todos los días.' },
          { icon: Zap, title: 'Enfoque Práctico', desc: 'Programas basados en proyectos reales para aplicación inmediata en tu empresa.' },
          { icon: Shield, title: 'Certificación Oficial', desc: 'Diplomas con valor curricular que validan las competencias técnicas adquiridas.' }
        ]
      },
      '06': {
        boxTitle: 'Estrategia con Propósito',
        boxDesc: 'No solo tecnología, sino resultados. Alineamos la Inteligencia Artificial con los objetivos reales de tu negocio.',
        features: [
          { icon: CheckCircle, title: 'Análisis de Viabilidad', desc: 'Identificamos los procesos donde la IA tendrá el mayor retorno de inversión.' },
          { icon: Shield, title: 'Mitigación de Riesgos', desc: 'Evaluación de seguridad, ética y cumplimiento antes de cualquier despliegue.' },
          { icon: Zap, title: 'Hoja de Ruta Clara', desc: 'Acompañamiento paso a paso desde el concepto inicial hasta la adopción final.' }
        ]
      },
      '07': {
        boxTitle: 'Soluciones a la Medida',
        boxDesc: 'Creamos herramientas de software inteligente que se integran perfectamente con tus sistemas actuales.',
        features: [
          { icon: Zap, title: 'Integración Seamless', desc: 'APIs y microservicios diseñados para convivir con tu infraestructura legada.' },
          { icon: Server, title: 'Desarrollo Ágil', desc: 'Entregas iterativas para que comiences a ver valor en semanas, no en meses.' },
          { icon: Shield, title: 'Agentes Especializados', desc: 'Modelos ajustados específicamente a tu industria y a tus propios datos.' }
        ]
      },
      '08': {
        boxTitle: 'Innovación al Instante',
        boxDesc: 'Accede a un catálogo de herramientas prediseñadas y resuelve problemas específicos de manera ágil y económica.',
        features: [
          { icon: Zap, title: 'Despliegue Rápido', desc: "Soluciones 'Plug and Play' que no requieren meses de desarrollo." },
          { icon: CheckCircle, title: 'Costo Predecible', desc: 'Esquemas de pago transparentes para herramientas de impacto directo.' },
          { icon: Server, title: 'Catálogo Escalable', desc: 'Combina múltiples píldoras para armar flujos de trabajo inteligentes completos.' }
        ]
      },
      '09': {
        boxTitle: 'El Valor de tu Información',
        boxDesc: 'Convertimos terabytes de datos crudos en estrategias accionables que impulsan el crecimiento de tu empresa.',
        features: [
          { icon: Server, title: 'Data Pipelines', desc: 'Ingesta, limpieza y estructuración automática de datos desde múltiples fuentes.' },
          { icon: Zap, title: 'Modelos Predictivos', desc: 'Anticípate a tendencias del mercado y comportamientos de tus clientes.' },
          { icon: CheckCircle, title: 'Visualización Clara', desc: 'Dashboards interactivos para que la dirección tome decisiones informadas.' }
        ]
      },
      '10': {
        boxTitle: 'Tu Nube, Tus Reglas',
        boxDesc: 'Una alternativa privada y segura a las grandes corporaciones, diseñada para mantener el control dentro del país.',
        features: [
          { icon: Shield, title: 'Privacidad Absoluta', desc: 'Garantía de que ningún gobierno extranjero o empresa externa tocará tus datos.' },
          { icon: Server, title: 'Rendimiento Dedicado', desc: "Recursos garantizados sin el problema del 'vecino ruidoso' de las nubes públicas." },
          { icon: Zap, title: 'Migración Sencilla', desc: 'Soporte experto para trasladar tus cargas de trabajo sin interrupción de servicio.' }
        ]
      },
      '11': {
        boxTitle: 'Vigilancia Continua',
        boxDesc: 'Monitorización 24/7 de tu infraestructura con inteligencia artificial para prevenir y neutralizar amenazas.',
        features: [
          { icon: Shield, title: 'Detección Temprana', desc: 'Algoritmos de IA que identifican patrones anómalos antes de que ocurra un incidente.' },
          { icon: Zap, title: 'Respuesta Automatizada', desc: 'Contención inmediata de ciberataques sin necesidad de intervención humana.' },
          { icon: CheckCircle, title: 'Cumplimiento ISO', desc: 'Alineados a las normativas internacionales más estrictas de seguridad de la información.' }
        ]
      },
      '12': {
        boxTitle: 'Comunidad en Acción',
        boxDesc: 'Conectamos a profesionales, académicos y empresas para crear un ecosistema vibrante de Inteligencia Artificial.',
        features: [
          { icon: CheckCircle, title: 'Red de Contactos', desc: 'Acceso exclusivo a líderes de la industria tecnológica a nivel nacional.' },
          { icon: Zap, title: 'Eventos Exclusivos', desc: 'Participación en hackatones, talleres y seminarios de alto nivel técnico.' },
          { icon: Shield, title: 'Intercambio de Conocimiento', desc: 'Comparte experiencias y mejores prácticas para acelerar la adopción de IA.' }
        ]
      }
    };
    
    return contentMap[id] || {
      boxTitle: 'Impulsa tu organización',
      boxDesc: 'Integra soluciones de vanguardia en tu arquitectura tecnológica y comienza a ver resultados reales de forma inmediata con el respaldo de MAYiA.',
      features: [
        { icon: Zap, title: 'Rendimiento Optimizado', desc: `Despliegue de infraestructura y recursos de alta eficiencia para ${title}.` },
        { icon: Shield, title: 'Máxima Seguridad', desc: 'Protocolos empresariales y soberanía de datos garantizada en todo momento.' },
        { icon: CheckCircle, title: 'Soporte Especializado', desc: 'Acompañamiento continuo por nuestros expertos en inteligencia artificial.' }
      ]
    };
  };

  const specificContent = getMusculoContent(musculo.id, musculo.title);
  const features = specificContent.features;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Modal Content */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          border: `1px solid rgba(0,0,0,0.05)`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.15), 0 0 40px ${accent}20`,
          overflowY: 'auto',
          overflowX: 'hidden',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'all 0.4s cubic-bezier(0.25, 1, 0.2, 1)',
        }}
        className="musculo-modal-scrollbar"
      >
        {/* Animated Background Gradients */}
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: `radial-gradient(circle, ${accent}15, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '400px', height: '400px', background: `radial-gradient(circle, ${accent}10, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none' }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1a1a1a',
            cursor: 'pointer',
            zIndex: 20,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${accent}15`;
            e.currentTarget.style.borderColor = `${accent}30`;
            e.currentTarget.style.color = accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)';
            e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
            e.currentTarget.style.color = '#1a1a1a';
          }}
        >
          <X size={18} />
        </button>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row relative z-10">
          
          {/* Left Column: Branding & Tagline */}
          <div className="flex-1 p-6 md:p-8 relative md:border-r border-black/5 flex flex-col">
            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              {isAMD ? (
                <img src={amdLogo} alt="AMD" style={{ height: '32px', objectFit: 'contain' }} />
              ) : (
                <div style={{ padding: '8px 16px', borderRadius: '100px', backgroundColor: `${accent}15`, color: accent, fontWeight: '800', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {musculo.tag}
                </div>
              )}
            </div>

            <h2 style={{ color: '#000000', fontSize: '32px', fontWeight: '800', lineHeight: '1.1', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              {isAMD ? 'El motor de la' : musculo.title.split(' ')[0]} <br />
              <span style={{ color: accent }}>
                {isAMD ? 'Inteligencia Artificial' : musculo.title.split(' ').slice(1).join(' ')}
              </span>
            </h2>

            <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.5', marginBottom: '24px', fontWeight: '400' }}>
              {isAMD ? 'Infraestructura de alto rendimiento diseñada para entrenar, inferir y desplegar modelos de IA a una velocidad sin precedentes.' : musculo.desc}
            </p>

            <div style={{ 
              marginTop: 'auto', 
              padding: '20px', 
              borderRadius: '12px', 
              background: `linear-gradient(135deg, ${accent}08, ${accent}02)`, 
              border: `1px solid ${accent}20`, 
              position: 'relative', 
              overflow: 'hidden' 
            }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: accent }} />
              <h3 style={{ color: '#1a1a1a', fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>
                {specificContent.boxTitle}
              </h3>
              <p style={{ color: '#555555', fontSize: '13px', lineHeight: '1.4', margin: 0 }}>
                {specificContent.boxDesc}
              </p>
            </div>
          </div>

          {/* Right Column: Specs */}
          <div className="flex-1 p-6 md:p-8 bg-[#f8f9fa] flex flex-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: accent, boxShadow: `0 0 10px ${accent}` }} />
              <span style={{ color: '#333333', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Capacidades Técnicas
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
              {features.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: `${accent}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${accent}20` }}>
                    <item.icon color={accent} size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: '#1a1a1a', fontSize: '14px', fontWeight: '700', margin: '0 0 2px 0' }}>{item.title}</h4>
                    <p style={{ color: '#666666', fontSize: '13px', margin: 0, lineHeight: '1.4' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526', '_blank')}
              style={{
                marginTop: '32px',
                width: '100%',
                padding: '14px',
                borderRadius: '10px',
                backgroundColor: accent,
                color: '#fff',
                fontSize: '14px',
                fontWeight: '700',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: `0 4px 14px ${accent}40`,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 6px 20px ${accent}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 14px ${accent}40`;
              }}
            >
              Contacta a un especialista
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .musculo-modal-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .musculo-modal-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.02);
          border-radius: 10px;
        }
        .musculo-modal-scrollbar::-webkit-scrollbar-thumb {
          background: ${accent}40;
          border-radius: 10px;
        }
        .musculo-modal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${accent}80;
        }
      `}</style>
    </div>
  );
};

export default MusculoModal;
