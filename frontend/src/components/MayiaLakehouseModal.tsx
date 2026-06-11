import React from 'react';
import { 
  Database, 
  Wrench, 
  Briefcase, 
  LineChart, 
  CheckCircle2, 
  Calendar,
  Layers,
  Workflow
} from 'lucide-react';
import mayiaLakeLogo from '../assets/logosNativos/MAYiA_LAKE.webp';

export default function MayiaLakehouseModal() {
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
          background: 'linear-gradient(135deg, #A4D955, #4881EB)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          overflow: 'hidden',
          boxShadow: '0 10px 20px rgba(164, 217, 85, 0.15)',
          border: '2px solid #ffffff'
        }}>
          <img src={mayiaLakeLogo} alt="MAYiA Lakehouse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            MAYIA Lakehouse
          </h2>
          <p style={{ margin: '6px 0 0 0', fontSize: 15, color: '#4881EB', fontWeight: 700 }}>
            La arquitectura de datos que prepara a tu empresa para inteligencia artificial.
          </p>
        </div>
      </div>

      {/* Intro Box */}
      <div style={{ 
        background: 'rgba(164, 217, 85, 0.03)', 
        border: '1.5px dashed rgba(164, 217, 85, 0.3)', 
        borderRadius: 16, 
        padding: '24px', 
        lineHeight: 1.6 
      }}>
        <p style={{ fontSize: 16, color: '#374151', margin: 0, fontWeight: 500 }}>
          La inteligencia artificial empresarial empieza con datos confiables, integrados, gobernados y seguros. 
          <strong> MAYIA Lakehouse</strong> es la plataforma de datos empresariales diseñada para ayudar a las organizaciones a preparar, ordenar y activar su información para implementar inteligencia artificial, analítica avanzada, business intelligence, machine learning, RAG empresarial, agentes de IA y automatización inteligente.
        </p>
      </div>

      {/* Detail Description */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          MAYIA Lakehouse combina lo mejor de un Data Lake, un Data Warehouse y una arquitectura Data Lakehouse para crear una base única de información empresarial. Esta plataforma permite almacenar datos estructurados, semiestructurados y no estructurados; integrar múltiples fuentes de datos; construir pipelines de datos; limpiar, validar y estandarizar información; aplicar reglas de acceso; proteger datos sensibles; crear catálogos de datos; habilitar dashboards ejecutivos; y preparar la información para modelos predictivos, IA generativa privada y agentes inteligentes.
        </p>
      </div>

      {/* Section 1: Qué permite la plataforma (Grid) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Layers color="#A4D955" size={24} />
          Arquitectura Unificada de Datos
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            {
              title: 'Almacenamiento e Integración',
              desc: 'Almacena datos estructurados, semiestructurados y no estructurados, e integra múltiples fuentes de datos.',
              icon: <Database size={20} color="#A4D955" />,
              bg: 'rgba(164, 217, 85, 0.02)',
              border: 'rgba(164, 217, 85, 0.15)'
            },
            {
              title: 'Pipelines y Calidad de Datos',
              desc: 'Construye pipelines de datos, limpiando, validando y estandarizando la información de forma automatizada.',
              icon: <Wrench size={20} color="#4881EB" />,
              bg: 'rgba(72, 129, 235, 0.02)',
              border: 'rgba(72, 129, 235, 0.15)'
            },
            {
              title: 'Seguridad y Gobierno',
              desc: 'Aplica reglas de acceso granulares, protege datos sensibles y crea catálogos de datos transparentes.',
              icon: <Briefcase size={20} color="#4881EB" />,
              bg: 'rgba(72, 129, 235, 0.02)',
              border: 'rgba(72, 129, 235, 0.15)'
            },
            {
              title: 'Preparación para Inteligencia Artificial',
              desc: 'Habilita dashboards ejecutivos y prepara la información para modelos predictivos, IA generativa privada y agentes.',
              icon: <LineChart size={20} color="#A4D955" />,
              bg: 'rgba(164, 217, 85, 0.02)',
              border: 'rgba(164, 217, 85, 0.15)'
            }
          ].map((mode, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: mode.bg, 
                border: `1.5px solid ${mode.border}`, 
                borderRadius: 16, 
                padding: 20, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 12 
              }}
            >
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: 10, 
                background: '#ffffff', 
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                {mode.icon}
              </div>
              <h4 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#111827' }}>{mode.title}</h4>
              <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>{mode.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Casos de Uso */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <CheckCircle2 color="#A4D955" size={24} />
          Inteligencia Empresarial Accionable
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          Con MAYIA Lakehouse, las empresas pueden transformar datos dispersos en valor comercial directo. La plataforma permite implementar de manera exitosa:
        </p>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 10, 
          background: 'rgba(164, 217, 85, 0.03)', 
          padding: '16px 20px', 
          borderRadius: 12, 
          border: '1.5px solid rgba(164, 217, 85, 0.2)' 
        }}>
          {[
            'Visión 360 del cliente',
            'Predicción de demanda',
            'Análisis financiero',
            'Optimización de inventarios',
            'Mantenimiento predictivo',
            'Automatización de procesos',
            'Inteligencia comercial',
            'Tableros de control y alertas',
            'Copilotos empresariales',
            'Sistemas de decisión'
          ].map((tag, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: '#ffffff', 
                border: '1px solid rgba(164, 217, 85, 0.4)', 
                borderRadius: 8, 
                padding: '6px 12px', 
                fontSize: 12.5, 
                fontWeight: 700, 
                color: '#5EA500',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Flujo (Timeline) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Workflow color="#4881EB" size={24} />
          La Columna Vertebral de la Inteligencia Artificial
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          A diferencia de una solución aislada de almacenamiento, MAYIA Lakehouse funciona de forma integrada para que la empresa deje atrás los silos de información, reduzca la dependencia de Excel y mejore la trazabilidad operativa:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            { num: '01', title: 'Conecta', desc: 'Integra y almacena múltiples fuentes de datos.' },
            { num: '02', title: 'Organiza', desc: 'Limpia, valida, estructura y cataloga.' },
            { num: '03', title: 'Gobierna', desc: 'Protege datos sensibles y gestiona accesos.' },
            { num: '04', title: 'Activa', desc: 'Despliega RAG, agentes, analítica e IA.' }
          ].map((step, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: '#f9fafb', 
                border: '1px solid #e5e7eb', 
                borderRadius: 12, 
                padding: 14, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 8,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{ 
                fontSize: 28, 
                fontWeight: 900, 
                color: idx % 2 === 0 ? 'rgba(164, 217, 85, 0.1)' : 'rgba(72, 129, 235, 0.1)', 
                position: 'absolute', 
                right: 8, 
                top: 0, 
                lineHeight: 1 
              }}>
                {step.num}
              </span>
              <h4 style={{ margin: 0, fontSize: 13.5, fontWeight: 800, color: idx % 2 === 0 ? '#5EA500' : '#4881EB' }}>{step.title}</h4>
              <p style={{ margin: 0, fontSize: 11.5, color: '#6b7280', lineHeight: 1.4, fontWeight: 500 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Target & Quote Box */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1px solid #f3f4f6', paddingTop: 24 }}>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          MAYIA Lakehouse está diseñado para empresas que buscan una plataforma de datos moderna, segura y escalable en México y Latinoamérica. Es una solución ideal para organizaciones que quieren implementar inteligencia artificial de forma estratégica, preparar sus datos para IA, mejorar su gobierno de datos, integrar sistemas empresariales, construir dashboards ejecutivos, desarrollar agentes inteligentes y convertir la información en valor real de negocio.
        </p>

        {/* Quote Callout */}
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(164, 217, 85, 0.08), rgba(72, 129, 235, 0.08))', 
          borderRadius: 16, 
          padding: '24px', 
          border: '1px solid rgba(164, 217, 85, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: '0 0 10px 0', 
            fontSize: 17, 
            fontWeight: 800, 
            color: '#111827',
            fontStyle: 'italic',
            lineHeight: 1.4
          }}>
            "La IA necesita datos. Los datos necesitan gobierno. La empresa necesita una arquitectura confiable."
          </p>
          <p style={{ margin: 0, fontSize: 13.5, color: '#4b5563', fontWeight: 600 }}>
            MAYIA Lakehouse prepara tus datos para que la inteligencia artificial funcione con contexto, seguridad, precisión y valor medible.
          </p>
        </div>
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
          ¿Quieres preparar tu infraestructura de datos para la era de la inteligencia artificial?
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
          Agendar Consulta Técnica con Squads MAYIA
        </button>
      </div>
    </div>
  );
}
