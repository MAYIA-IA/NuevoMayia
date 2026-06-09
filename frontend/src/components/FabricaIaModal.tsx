import React from 'react';
import { Factory, ShieldCheck, Cloud, Cpu, Calendar } from 'lucide-react';
import { brandingConfig } from '../config/branding';

export default function FabricaIaModal() {
  const handleAgendarCita = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: rect.top - 140 });
    } else {
      window.open("https://calendly.com/mayiainteligencia/consulta-mayia", '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div style={{ padding: '32px 40px', background: '#ffffff', borderRadius: 24, display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ 
          width: 64, 
          height: 64, 
          borderRadius: 16, 
          background: 'linear-gradient(135deg, #A4D955, #65a30d)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#ffffff',
          boxShadow: '0 10px 20px rgba(164,217,85,0.2)' 
        }}>
          <Factory size={32} />
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: 32, fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>
            Fábrica de Inteligencia Artificial
          </h2>
          <p style={{ margin: '4px 0 0 0', fontSize: 16, color: '#65a30d', fontWeight: 700 }}>
            Soberanía &amp; Rendimiento
          </p>
        </div>
      </div>

      {/* Content */}
      <div>
        <p style={{ fontSize: 18, color: '#4b5563', lineHeight: 1.6, margin: '0 0 32px 0', fontWeight: 500 }}>
          <strong>MAYIA</strong> es la fábrica mexicana de inteligencia artificial que habilita IA empresarial privada, segura y soberana sobre infraestructura propia, en nuestra nube soberana FLAI, despliegues híbridos y despliegues on premise.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 40 }}>
          {[
            { 
              icon: <Cloud size={24} color="#65a30d" />, 
              title: 'Nube Soberana FLAI', 
              text: 'Procesamiento local con soberanía digital absoluta y almacenamiento seguro dentro del territorio nacional.' 
            },
            { 
              icon: <Cpu size={24} color="#65a30d" />, 
              title: 'Despliegues Híbridos', 
              text: 'Flexibilidad para combinar la potencia de nuestra infraestructura en la nube con tus sistemas locales.' 
            },
            { 
              icon: <ShieldCheck size={24} color="#65a30d" />, 
              title: 'On-Premise Privado', 
              text: 'Instalación local completa (on-premise) en tus propios servidores físicos para un control total y máxima privacidad.' 
            }
          ].map((feature, idx) => (
            <div key={idx} style={{ background: '#f9fafb', borderRadius: 16, padding: 24, border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(164,217,85,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {feature.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>{feature.title}</h3>
              <p style={{ margin: 0, fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            onClick={handleAgendarCita}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 8, 
              background: 'linear-gradient(135deg, #A4D955, #65a30d)', 
              color: '#ffffff', 
              fontWeight: 700, 
              fontSize: 16, 
              border: 'none', 
              borderRadius: 12, 
              padding: '16px 32px', 
              cursor: 'pointer', 
              transition: 'all 0.2s', 
              boxShadow: '0 8px 16px rgba(164,217,85,0.2)' 
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Calendar size={20} />
            Agendar Consulta Técnica
          </button>
        </div>
      </div>
    </div>
  );
}
