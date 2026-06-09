import React from 'react';
import { 
  Factory, 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  Calendar, 
  Server, 
  Network, 
  Users, 
  CheckCircle2, 
  Zap, 
  Database
} from 'lucide-react';
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
    <div style={{ padding: '40px', background: '#ffffff', borderRadius: 24, display: 'flex', flexDirection: 'column', gap: 36, fontFamily: 'Outfit, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, borderBottom: '1px solid #f3f4f6', paddingBottom: 24 }}>
        <div style={{ 
          width: 64, 
          height: 64, 
          borderRadius: 16, 
          background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#ffffff',
          boxShadow: '0 10px 20px rgba(59, 130, 246, 0.15)' 
        }}>
          <Factory size={32} />
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Fábrica de Inteligencia Artificial en México
          </h2>
          <p style={{ margin: '6px 0 0 0', fontSize: 15, color: '#3b82f6', fontWeight: 700 }}>
            MAYIA convierte la inteligencia artificial en operación empresarial segura, privada y soberana.
          </p>
        </div>
      </div>

      {/* Intro Box */}
      <div style={{ 
        background: 'rgba(59, 130, 246, 0.03)', 
        border: '1.5px dashed rgba(59, 130, 246, 0.3)', 
        borderRadius: 16, 
        padding: '24px', 
        lineHeight: 1.6 
      }}>
        <p style={{ fontSize: 16, color: '#374151', margin: 0, fontWeight: 500 }}>
          La inteligencia artificial empresarial necesita mucho más que un modelo. 
          Necesita <strong>infraestructura</strong>, <strong>datos protegidos</strong>, <strong>cómputo</strong>, <strong>almacenamiento</strong>, <strong>red</strong>, <strong>seguridad</strong>, <strong>energía</strong> y <strong>operación</strong>. 
          Necesita especialistas capaces de llevar la inteligencia artificial del concepto a la realidad diaria de una empresa.
          <br /><br />
          Por eso nace <strong>MAYIA</strong>: la fábrica mexicana de inteligencia artificial.
        </p>
      </div>

      {/* Detail 1 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          MAYIA ayuda a empresas, gobiernos y PyMEs a implementar inteligencia artificial sobre una base tecnológica segura, privada, soberana y cercana. Una arquitectura diseñada para convertir datos en decisiones, procesos en automatización, información en productividad y tecnología en ventaja competitiva.
        </p>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          En MAYIA, la IA se construye desde el origen: desde la infraestructura, los datos, la nube, la ciberseguridad, los agentes inteligentes, la operación y el acompañamiento humano que hacen posible que una solución de inteligencia artificial funcione dentro de una organización real.
        </p>
      </div>

      {/* Section 1: IA Privada, Segura y Soberana */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <ShieldCheck color="#22c55e" size={24} />
          IA privada, segura y soberana para empresas mexicanas
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          La nueva etapa de la inteligencia artificial exige confianza. Las empresas que implementan IA necesitan saber dónde viven sus datos, bajo qué reglas se procesan, quién los opera, cómo se protegen y sobre qué infraestructura se ejecutan sus modelos, aplicaciones y agentes inteligentes.
        </p>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          MAYIA responde a esa necesidad con una visión clara: inteligencia artificial privada, segura y soberana, desplegada sobre infraestructura digital preparada para cargas empresariales de IA.
        </p>
        
        <div style={{ 
          background: '#f9fafb', 
          borderRadius: 16, 
          padding: '20px 24px', 
          border: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }}>
          <h4 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            La IA empresarial cobra valor cuando opera en un entorno confiable:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 4 }}>
            {[
              'Cuando protege información sensible.',
              'Cuando respeta la estrategia tecnológica de cada organización.',
              'Cuando se integra a los sistemas existentes.',
              'Cuando puede escalar con seguridad.',
              'Cuando se mide por resultados reales.'
            ].map((bullet, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <CheckCircle2 size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 13.5, color: '#4b5563', fontWeight: 600 }}>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Infraestructura */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Database color="#3b82f6" size={24} />
          Infraestructura para ejecutar inteligencia artificial en México
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          Toda IA empresarial necesita una base física y digital capaz de sostenerla. Detrás de cada agente inteligente, automatización, modelo generativo o plataforma empresarial existe una capa crítica de <em>AI infrastructure</em>: servidores, procesamiento, almacenamiento, redes, seguridad, energía, monitoreo y operación especializada.
        </p>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          MAYIA opera sobre el ecosistema EdgeNet IA Ready y la nube soberana FLAI, habilitando una arquitectura nacional para empresas que requieren <em>enterprise AI infrastructure, private AI cloud, GPU cloud, GPU as a Service, AI-ready data center</em> y capacidades de procesamiento diseñadas para soluciones de inteligencia artificial.
        </p>
        
        {/* Three Deployment Modes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 8 }}>
          {[
            {
              title: 'En nuestros centros de datos',
              desc: 'Para empresas que buscan ejecutar IA en un entorno seguro, operado, monitoreado y alojado en territorio nacional, con capacidades de nube soberana, continuidad y cercanía operativa.',
              icon: <Server size={22} color="#3b82f6" />,
              bg: 'rgba(59, 130, 246, 0.02)',
              border: 'rgba(59, 130, 246, 0.15)'
            },
            {
              title: 'En modelo híbrido',
              desc: 'Para organizaciones que desean combinar su infraestructura actual con capacidades de cómputo, nube, datos, seguridad y operación desde el ecosistema MAYIA, EdgeNet y FLAI.',
              icon: <Network size={22} color="#8b5cf6" />,
              bg: 'rgba(139, 92, 246, 0.02)',
              border: 'rgba(139, 92, 246, 0.15)'
            },
            {
              title: 'En modalidad on premise',
              desc: 'Para empresas, industrias o gobiernos que requieren que la solución viva dentro de sus propias instalaciones, con arquitectura, integración, seguridad y acompañamiento especializado.',
              icon: <ShieldCheck size={22} color="#10b981" />,
              bg: 'rgba(16, 185, 129, 0.02)',
              border: 'rgba(16, 185, 129, 0.15)'
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

      {/* Section 3: Data Centers AI Ready */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Cpu color="#65a30d" size={24} />
          Data Centers AI Ready para IA empresarial en México
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          La inteligencia artificial necesita infraestructura preparada para operar con exigencias reales de procesamiento, seguridad, disponibilidad y gobierno de datos. Por eso MAYIA se apoya en la visión de <strong>Data Centers AI Ready</strong>: centros de datos preparados para alojar, procesar y operar soluciones de IA empresarial en México.
        </p>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          MAYIA despliega soluciones a nivel nacional a través de los data centers EdgeNet, creando una red de infraestructura distribuida para acercar la inteligencia artificial a empresas, gobiernos e industrias en territorio nacional. Esta arquitectura permite llevar IA donde las organizaciones operan, donde los datos se generan y donde las decisiones necesitan tomarse.
        </p>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          La inteligencia artificial empresarial en México requiere una base nacional capaz de sostener su crecimiento. MAYIA nace precisamente en esa capa: la capa donde la IA deja de ser una herramienta aislada y se convierte en operación empresarial.
        </p>
        
        {/* Core Pillars badges */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 10, 
          background: 'rgba(34, 197, 94, 0.03)', 
          padding: '16px 20px', 
          borderRadius: 12, 
          border: '1.5px solid rgba(34, 197, 94, 0.2)' 
        }}>
          {[
            'Datos soberanos',
            'Infraestructura nacional',
            'Agentes inteligentes',
            'Implementación humana',
            'Resultados medibles'
          ].map((tag, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: '#ffffff', 
                border: '1px solid rgba(34, 197, 94, 0.4)', 
                borderRadius: 8, 
                padding: '6px 12px', 
                fontSize: 12.5, 
                fontWeight: 700, 
                color: '#166534',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: La Fábrica de IA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Factory color="#8b5cf6" size={24} />
          La fábrica donde la IA se convierte en valor
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          Una <strong>AI Factory</strong> es el lugar donde la inteligencia artificial se diseña, se entrena, se integra, se despliega, se gobierna y se mejora de forma continua. MAYIA lleva este concepto al mercado mexicano con una visión propia: una fábrica de IA mexicana capaz de conectar infraestructura soberana, nube, datos, ciberseguridad, automatización, agentes inteligentes y talento especializado.
        </p>

        {/* Numbered Process flow */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginTop: 4 }}>
          {[
            { num: '01', title: 'Diseño', desc: 'Se diseña con intención de negocio.' },
            { num: '02', title: 'Despliegue', desc: 'Con infraestructura segura.' },
            { num: '03', title: 'Integración', desc: 'Se integra a procesos reales.' },
            { num: '04', title: 'Soporte', desc: 'Se acompaña con especialistas.' },
            { num: '05', title: 'Medición', desc: 'Productividad y competitividad.' }
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
                color: 'rgba(139, 92, 246, 0.1)', 
                position: 'absolute', 
                right: 8, 
                top: 0, 
                lineHeight: 1 
              }}>
                {step.num}
              </span>
              <h4 style={{ margin: 0, fontSize: 13.5, fontWeight: 800, color: '#8b5cf6' }}>{step.title}</h4>
              <p style={{ margin: 0, fontSize: 11.5, color: '#6b7280', lineHeight: 1.4, fontWeight: 500 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Personas, Empresas, Gobiernos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Users color="#f59e0b" size={24} />
          Inteligencia artificial para personas, empresas y gobiernos
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          La inteligencia artificial representa una nueva capacidad productiva para México. MAYIA construye inteligencia artificial desde México para impulsar competitividad a nivel nacional e internacional, con una visión alineada al conocimiento, la cultura, las necesidades y la realidad actual del país.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            {
              role: 'Para las personas',
              desc: 'Significa desarrollo de nuevas habilidades, mejores herramientas y mayor capacidad de decisión en su labor diaria.',
              color: '#3b82f6',
              bg: 'rgba(59, 130, 246, 0.03)'
            },
            {
              role: 'Para las empresas',
              desc: 'Significa mayor eficiencia, automatización inteligente, análisis avanzado, productividad, crecimiento y ventaja competitiva.',
              color: '#10b981',
              bg: 'rgba(16, 185, 129, 0.03)'
            },
            {
              role: 'Para los gobiernos',
              desc: 'Significa mejores datos, mayor capacidad operativa de atención, servicios públicos más ágiles y decisiones con mayor evidencia.',
              color: '#f59e0b',
              bg: 'rgba(245, 158, 11, 0.03)'
            }
          ].map((box, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: box.bg, 
                borderLeft: `4px solid ${box.color}`, 
                borderRadius: '0 12px 12px 0', 
                padding: '16px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}
            >
              <h4 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: box.color }}>{box.role}</h4>
              <p style={{ margin: 0, fontSize: 13, color: '#4b5563', lineHeight: 1.5, fontWeight: 500 }}>{box.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 6: IA desde el origen */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 20, 
        borderTop: '1px solid #f3f4f6', 
        paddingTop: 24,
        marginBottom: 8
      }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Zap color="#eab308" size={24} />
          MAYIA: inteligencia artificial desde el origen
        </h3>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          MAYIA representa una nueva forma de implementar inteligencia artificial en México. Desde el servidor, el dato, la nube, la seguridad, la infraestructura, el territorio, el talento y la operación real de cada organización.
        </p>
        <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
          La inteligencia artificial que genera resultados necesita vivir sobre una base sólida:
        </p>

        {/* 5 pillars row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
          {['Infraestructura', 'Soberanía', 'Seguridad', 'Talento', 'MAYIA'].map((pillar, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: '#ffffff', 
                border: '1.5px solid #e5e7eb', 
                borderRadius: 12, 
                padding: '12px 8px', 
                textAlign: 'center', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                fontWeight: 800,
                fontSize: 13,
                color: '#374151'
              }}
            >
              {pillar}
            </div>
          ))}
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
          ¿Listo para llevar la Inteligencia Artificial al núcleo operativo de tu organización?
        </p>
        <button 
          onClick={handleAgendarCita}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 8, 
            background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', 
            color: '#ffffff', 
            fontWeight: 800, 
            fontSize: 15, 
            border: 'none', 
            borderRadius: 10, 
            padding: '14px 28px', 
            cursor: 'pointer', 
            transition: 'all 0.2s', 
            boxShadow: '0 6px 16px rgba(59, 130, 246, 0.2)' 
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1.5px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.2)'; }}
        >
          <Calendar size={18} />
          Agendar Consulta Técnica con MAYIA
        </button>
      </div>
    </div>
  );
}
