import React, { useEffect, useState } from 'react';
import { X, Cpu, Server, Zap, ArrowRight, Activity } from 'lucide-react';
import amdLogo from '../assets/logosNativos/amd.png';

interface AmdLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AmdLabModal: React.FC<AmdLabModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when open
    } else {
      const timer = setTimeout(() => setMounted(false), 400); // Wait for exit animation
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!mounted) return null;

  const amdRed = '#ED1C24';

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

      {/* Modal Content - LIGHT THEME */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          backgroundColor: '#ffffff', 
          borderRadius: '20px',
          border: `1px solid rgba(0,0,0,0.05)`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.15), 0 0 40px rgba(237,28,36,0.05)`,
          overflowY: 'auto',
          overflowX: 'hidden',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'all 0.4s cubic-bezier(0.25, 1, 0.2, 1)',
        }}
        className="amd-modal-scrollbar"
      >
        {/* Animated Background Gradients - Subtle for Light Theme */}
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: `radial-gradient(circle, ${amdRed}10, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '400px', height: '400px', background: `radial-gradient(circle, ${amdRed}05, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none' }} />

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
            e.currentTarget.style.backgroundColor = `${amdRed}15`;
            e.currentTarget.style.borderColor = `${amdRed}30`;
            e.currentTarget.style.color = amdRed;
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
          <div className="flex-1 p-6 md:p-8 relative md:border-r border-black/5">
            <div style={{ marginBottom: '24px' }}>
              {/* Logo sin drop-shadow blanca para que luzca en blanco */}
              <img src={amdLogo} alt="AMD" style={{ height: '32px', objectFit: 'contain' }} />
            </div>

            <h2 style={{ color: '#000000', fontSize: '32px', fontWeight: '800', lineHeight: '1.1', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              El motor de la <br />
              <span style={{ color: amdRed }}>Inteligencia Artificial</span>
            </h2>

            <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.5', marginBottom: '24px', fontWeight: '400' }}>
              Infraestructura de alto rendimiento diseñada para entrenar, inferir y desplegar modelos de IA a una velocidad sin precedentes.
            </p>

            <div style={{ padding: '20px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(237,28,36,0.05), rgba(237,28,36,0.01))', border: `1px solid ${amdRed}20`, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: amdRed }} />
              <h3 style={{ color: '#1a1a1a', fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>
                Ven y prueba aquí tus proyectos
              </h3>
              <p style={{ color: '#555555', fontSize: '13px', lineHeight: '1.4', margin: 0 }}>
                Acceso exclusivo a clusters potenciados por aceleradores AMD Instinct™ y procesadores EPYC™. Trae tu modelo y descubre el verdadero rendimiento.
              </p>
            </div>
          </div>

          {/* Right Column: Specs */}
          <div className="flex-1 p-6 md:p-8 bg-[#f8f9fa]">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Activity color={amdRed} size={20} />
              <span style={{ color: '#333333', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Capacidades del Laboratorio
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  icon: Cpu,
                  title: 'Procesamiento Extremo',
                  desc: 'Arquitectura AMD EPYC de última generación para cargas de trabajo masivas.'
                },
                {
                  icon: Zap,
                  title: 'Aceleración de Inferencias',
                  desc: 'AMD Instinct optimizado para modelos fundacionales y LLMs con latencia ultrabaja.'
                },
                {
                  icon: Server,
                  title: 'EdgeNET Integrado',
                  desc: 'Conectividad directa a nuestra red soberana de 30 centros de datos en México.'
                }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: `${amdRed}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${amdRed}20` }}>
                    <item.icon color={amdRed} size={20} />
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
                backgroundColor: amdRed,
                color: '#fff',
                fontSize: '14px',
                fontWeight: '700',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: `0 4px 14px ${amdRed}40`,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 6px 20px ${amdRed}50`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 14px ${amdRed}40`;
              }}
            >
              Contactanos para agendar prueba
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .amd-modal-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .amd-modal-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.02);
          border-radius: 10px;
        }
        .amd-modal-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(237,28,36,0.3);
          border-radius: 10px;
        }
        .amd-modal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(237,28,36,0.6);
        }
      `}</style>
    </div>
  );
};

export default AmdLabModal;
