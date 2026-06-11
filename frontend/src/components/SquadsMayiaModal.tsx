import React from 'react';
import { 
  Users, 
  Layers, 
  Workflow, 
  ShieldCheck, 
  Award, 
  Calendar,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function SquadsMayiaModal() {
  const handleAgendarCita = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if ((window as any).openCalendly) {
      (window as any).openCalendly({ x: rect.right + 12, y: rect.top - 140 });
    } else {
      window.open("https://calendly.com/mayiainteligencia/consulta-mayia", '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div style={{ padding: '40px', background: '#ffffff', borderRadius: 24, display: 'flex', flexDirection: 'column', gap: 36, fontFamily: 'Outfit, sans-serif' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, borderBottom: '1px solid #f3f4f6', paddingBottom: 24 }}>
        <div style={{ 
          width: 64, 
          height: 64, 
          borderRadius: 16, 
          background: 'linear-gradient(135deg, #A4D955, #10B981)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#ffffff',
          boxShadow: '0 10px 20px rgba(16, 185, 129, 0.15)',
          border: '2px solid #ffffff'
        }}>
          <Users size={32} />
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Squads MAYiA
          </h2>
          <p style={{ margin: '6px 0 0 0', fontSize: 15, color: '#10B981', fontWeight: 700 }}>
            Forward-Deployed AI Squads para implementar IA real en tu empresa.
          </p>
        </div>
      </div>

      {/* Intro Box */}
      <div style={{ 
        background: 'rgba(16, 185, 129, 0.03)', 
        border: '1.5px dashed rgba(16, 185, 129, 0.3)', 
        borderRadius: 16, 
        padding: '24px', 
        lineHeight: 1.6 
      }}>
        <p style={{ fontSize: 16, color: '#374151', margin: 0, fontWeight: 500 }}>
          En MAYIA desplegamos <strong>Forward-Deployed AI Squads</strong> dentro de tu organización para llevar la inteligencia artificial del diagnóstico a la producción. Nuestros <strong>Forward-Deployed AI Engineers</strong> (ingenieros de IA integrados al cliente) trabajan temporalmente con tus equipos para entender tus procesos reales, conectar tus datos, integrar tus sistemas y construir agentes inteligentes seguros, productivos y medibles.
        </p>
      </div>

      {/* Grid of Specializations (Squad Types) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Layers color="#10B981" size={24} />
          Nuestros Squads Especializados
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          Combinamos múltiples disciplinas técnicas para acelerar la adopción de IA empresarial sin quedarnos en demos, pilotos aislados o consultoría tradicional:
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { title: 'AI Implementation Squads', desc: 'Ingeniería enfocada en la construcción e integración directa de soluciones.' },
            { title: 'Enterprise AI & Engineering', desc: 'Desarrollo de arquitectura escalable y pipelines de datos robustos.' },
            { title: 'AI Delivery & Production', desc: 'Puesta en marcha, optimización en producción y monitoreo de deriva/desempeño.' },
            { title: 'AI Adoption & Transformation', desc: 'Capacitación, gestión del cambio y alineación de equipos humanos.' }
          ].map((squad, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: 'rgba(164, 217, 85, 0.02)', 
                border: '1px solid rgba(164, 217, 85, 0.15)', 
                borderRadius: 12, 
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 6
              }}
            >
              <h4 style={{ margin: 0, fontSize: 14.5, fontWeight: 800, color: '#15803d' }}>{squad.title}</h4>
              <p style={{ margin: 0, fontSize: 12.5, color: '#6b7280', lineHeight: 1.4 }}>{squad.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Metodología Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Workflow color="#10B981" size={24} />
          Metodología de Implementación de 10 Pasos
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          Cada squad de implementación de IA trabaja bajo un flujo de trabajo estructurado y probado para garantizar el éxito y la seguridad:
        </p>

        {/* 10 Step Pipeline visual representation */}
        <div style={{ 
          background: '#f9fafb', 
          borderRadius: 16, 
          padding: '24px', 
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            alignItems: 'center', 
            gap: '8px 12px' 
          }}>
            {[
              'Diagnóstico', 'Datos', 'Proceso', 'Arquitectura', 'Agente', 
              'Integración', 'Seguridad', 'Producción', 'Adopción', 'ROI'
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 6,
                  background: '#ffffff',
                  border: '1px solid #d1d5db',
                  padding: '6px 12px',
                  borderRadius: 20,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  <span style={{ 
                    fontSize: 11, 
                    fontWeight: 900, 
                    background: idx < 5 ? '#A4D955' : '#10B981', 
                    color: idx < 5 ? '#111827' : '#ffffff', 
                    width: 20, 
                    height: 20, 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {idx + 1}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#374151' }}>{step}</span>
                </div>
                {idx < 9 && <ChevronRight size={16} color="#9ca3af" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Field Deployment Areas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Cpu color="#4881EB" size={24} />
          Despliegue Operativo Aplicado
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          Mediante esquemas de <em>AI Field Deployment</em>, nuestros especialistas se integran al contexto operativo para crear asistentes, agentes y automatizaciones conectados a las áreas de:
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            'Ventas', 'Atención a Clientes', 'Operaciones', 'Finanzas', 
            'Compras', 'Recursos Humanos', 'Legal', 'Dirección General', 
            'Análisis de Datos', 'Procesos Internos'
          ].map((area, idx) => (
            <span 
              key={idx} 
              style={{ 
                background: 'rgba(72, 129, 235, 0.03)', 
                border: '1px solid rgba(72, 129, 235, 0.25)', 
                borderRadius: 8, 
                padding: '8px 14px', 
                fontSize: 13, 
                fontWeight: 700, 
                color: '#2563eb',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* Governance & Architecture */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <ShieldCheck color="#dc2626" size={24} />
          Gobernanza y Arquitectura Enterprise
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          Nuestras soluciones se construyen con arquitectura robusta de nivel empresarial, gobierno de datos, trazabilidad, ciberseguridad, <em>Human in the Loop</em>, monitoreo constante y métricas claras de retorno de inversión. <strong>El objetivo no es que tu empresa “pruebe IA”, sino que convierta sus procesos, datos y talento en una verdadera capacidad de inteligencia artificial empresarial.</strong>
        </p>
      </div>

      {/* Closing Quote Callout */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(164, 217, 85, 0.08), rgba(16, 185, 129, 0.08))', 
        borderRadius: 16, 
        padding: '24px', 
        border: '1px solid rgba(16, 185, 129, 0.2)',
        textAlign: 'center'
      }}>
        <p style={{ 
          margin: '0 0 10px 0', 
          fontSize: 16.5, 
          fontWeight: 800, 
          color: '#111827',
          fontStyle: 'italic',
          lineHeight: 1.4
        }}>
          "MAYIA Forward-Deployed AI Squads es el equipo experto que entra a tu empresa para implementar IA donde realmente se genera valor: en la operación diaria."
        </p>
        <p style={{ margin: 0, fontSize: 14, color: '#4b5563', fontWeight: 700 }}>
          Implementa IA real dentro de tu empresa.
        </p>
      </div>

      {/* Footer CTA */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        gap: 16, 
        borderTop: '1px solid #f3f4f6', 
        paddingTop: 32,
        marginTop: 12
      }}>
        <p style={{ margin: 0, fontSize: 14.5, color: '#4b5563', textAlign: 'center', fontWeight: 600 }}>
          ¿Listo para evaluar y acelerar la implementación de IA con ingenieros integrados?
        </p>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 8, 
            background: 'linear-gradient(135deg, #A4D955, #7EBB2A)', 
            color: '#111827', 
            fontWeight: 800, 
            fontSize: 15, 
            border: 'none', 
            borderRadius: 10, 
            padding: '14px 28px', 
            cursor: 'pointer', 
            transition: 'all 0.2s', 
            boxShadow: '0 6px 16px rgba(164, 217, 85, 0.2)' 
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1.5px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(164, 217, 85, 0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(164, 217, 85, 0.2)'; }}
        >
          <Calendar size={18} />
          Agendar Diagnóstico de Operación con MAYIA
        </button>
      </div>
    </div>
  );
}
