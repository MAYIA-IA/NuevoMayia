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

  // Features genéricos dinámicos basados en la categoría, o los específicos de AMD
  const getFeatures = () => {
    if (isAMD) {
      return [
        { icon: Server, title: 'Procesamiento Extremo', desc: 'Arquitectura AMD EPYC de última generación para cargas de trabajo masivas.' },
        { icon: Zap, title: 'Aceleración de Inferencias', desc: 'AMD Instinct optimizado para modelos fundacionales y LLMs con latencia ultrabaja.' },
        { icon: Shield, title: 'EdgeNET Integrado', desc: 'Conectividad directa a nuestra red soberana de 30 centros de datos en México.' }
      ];
    }
    return [
      { icon: Zap, title: 'Rendimiento Optimizado', desc: `Despliegue de infraestructura y recursos de alta eficiencia para ${musculo.title}.` },
      { icon: Shield, title: 'Máxima Seguridad', desc: 'Protocolos empresariales y soberanía de datos garantizada en todo momento.' },
      { icon: CheckCircle, title: 'Soporte Especializado', desc: 'Acompañamiento continuo por nuestros expertos en inteligencia artificial.' }
    ];
  };

  const features = getFeatures();

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
                {isAMD ? 'Ven y prueba aquí tus proyectos' : 'Impulsa tu organización'}
              </h3>
              <p style={{ color: '#555555', fontSize: '13px', lineHeight: '1.4', margin: 0 }}>
                {isAMD 
                  ? 'Acceso exclusivo a clusters potenciados por aceleradores AMD Instinct™ y procesadores EPYC™. Trae tu modelo y descubre el verdadero rendimiento.'
                  : 'Integra soluciones de vanguardia en tu arquitectura tecnológica y comienza a ver resultados reales de forma inmediata con el respaldo de MAYiA.'}
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
