import SectionModules from './SectionModules';
import type { ModuleCard } from './SectionModules';

import img1 from '../assets/AgentesConsultores/Agente1.jpeg';
import img2 from '../assets/AgentesConsultores/Agente2.jpeg';
import img3 from '../assets/AgentesConsultores/Agente3.jpeg';
import img4 from '../assets/AgentesConsultores/Agente4.jpeg';
import video1 from '../assets/AgentesConsultores/Agente1.mp4';
import video2 from '../assets/AgentesConsultores/Agente2.mp4';
import video3 from '../assets/AgentesConsultores/Agente3.mp4';
import video4 from '../assets/AgentesConsultores/Agente4.mp4';

const cards: ModuleCard[] = [
  {
    id: 'roi-ia',
    title: 'ROI IA',
    tagline: 'Análisis de Retorno de Inversión',
    description: 'Cuantifica resultados desde el análisis previo hasta la medición de beneficios. Incluye probabilidad, riesgo y valor proyectado.',
    glowColor: '#6ee7b7',
    accentColor: '#059669',
    badge: 'Más vendido',
    stats: [{ value: '2–4×', label: 'ROI típico' }, { value: '30 días', label: 'Primer reporte' }, { value: '98%', label: 'Precisión' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    detail: {
      headline: 'Mide el valor real de tu inversión en IA',
      body: 'El agente ROI IA analiza costos operativos, proyecta ahorros y cuantifica beneficios tangibles e intangibles. Combina análisis cuantitativo con modelos de riesgo para darte una visión clara y honesta del retorno esperado.',
      bullets: [
        'Diagnóstico financiero previo a cualquier inversión en IA',
        'Modelos Monte Carlo para proyección de escenarios',
        'Dashboard ejecutivo con métricas en tiempo real',
        'Benchmarking contra industria y competencia',
        'Alertas automáticas si el ROI se desvía del objetivo',
      ],
      cta: 'Solicitar demo ROI IA',
      mediaSlot: (
        <video src={video1} poster={img1} autoPlay muted loop playsInline
          className="w-full h-48 object-cover" />
      ),
    },
  },
  {
    id: 'estrategia-ia',
    title: 'Estrategia IA',
    tagline: 'Planificación Estratégica Integral',
    description: 'Desarrolla estrategia empresarial mediante planificación coordinada de sistemas IA y evolución de competencias laborales.',
    glowColor: '#a3e635',
    accentColor: '#4d7c0f',
    badge: 'Recomendado',
    stats: [{ value: '6 meses', label: 'Roadmap típico' }, { value: '12+', label: 'Iniciativas IA' }, { value: '3×', label: 'Velocidad adopción' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    detail: {
      headline: 'Una hoja de ruta IA ejecutable',
      body: 'El agente de Estrategia IA diseña el portafolio de iniciativas de inteligencia artificial alineado a tus objetivos de negocio. Prioriza casos de uso por impacto y factibilidad, y define el plan de capacitación para tu equipo.',
      bullets: [
        'Mapeo de capacidades IA actuales vs. estado deseado',
        'Priorización de iniciativas por impacto/esfuerzo',
        'Plan de gestión del cambio y adopción cultural',
        'Definición de roles y competencias IA para cada área',
        'Revisión trimestral y ajuste dinámico del roadmap',
      ],
      cta: 'Diseñar mi estrategia IA',
      mediaSlot: (
        <video src={video2} poster={img2} autoPlay muted loop playsInline
          className="w-full h-48 object-cover" />
      ),
    },
  },
  {
    id: 'ciber-riesgo',
    title: 'Ciber Riesgo IA',
    tagline: 'Seguridad y Cumplimiento',
    description: 'Evalúa y establece portafolio de ciberseguridad, mitigando riesgos y optimizando inversiones con objetivos estratégicos.',
    glowColor: '#bbf7d0',
    accentColor: '#16a34a',
    badge: 'Enterprise',
    stats: [{ value: '99.9%', label: 'Uptime' }, { value: '<1hr', label: 'Detección' }, { value: 'ISO', label: '27001 cert.' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    detail: {
      headline: 'Seguridad inteligente para sistemas IA',
      body: 'Ciber Riesgo IA audita tu postura de seguridad frente a amenazas específicas de los sistemas de inteligencia artificial: ataques adversarios, envenenamiento de datos y extracción de modelos.',
      bullets: [
        'Evaluación completa de superficie de ataque en modelos IA',
        'Protección contra ataques adversarios y data poisoning',
        'Cumplimiento automatizado: ISO 27001, LFPDPPP, SOC 2',
        'Simulaciones de intrusión con red team especializado en IA',
        'Monitoreo continuo con alertas en tiempo real',
      ],
      cta: 'Solicitar evaluación de riesgo',
      mediaSlot: (
        <video src={video3} poster={img3} autoPlay muted loop playsInline
          className="w-full h-48 object-cover" />
      ),
    },
  },
  {
    id: 'innovacion',
    title: 'Innovación',
    tagline: 'Democratización de Ideas',
    description: 'Estructura identificación y generación de ideas por complejidad, con soluciones para necesidades y objetivos estratégicos.',
    glowColor: '#d9f99d',
    accentColor: '#65a30d',
    badge: 'Nuevo',
    stats: [{ value: '48hr', label: 'Sprint mínimo' }, { value: '10×', label: 'Más ideas' }, { value: '70%', label: 'Ideas viables' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    detail: {
      headline: 'Convierte ideas en ventaja competitiva',
      body: 'El agente de Innovación facilita sesiones de ideación asistida por IA, clasifica oportunidades por impacto y factibilidad, y genera prototipos conceptuales en horas en lugar de semanas.',
      bullets: [
        'Sesiones de design thinking aumentadas con IA',
        'Clasificación automática de ideas por impacto y esfuerzo',
        'Prototipado rápido: de concepto a MVP en días',
        'Biblioteca de patrones de innovación por industria',
        'Seguimiento de ideas desde inception hasta producción',
      ],
      cta: 'Iniciar taller de innovación',
      mediaSlot: (
        <video src={video4} poster={img4} autoPlay muted loop playsInline
          className="w-full h-48 object-cover" />
      ),
    },
  },
];

export default function AgentesConsultores() {
  return (
    <SectionModules
      id="agentes-ia"
      eyebrow="Sistemas Multi-Agente · VaaS & SaaS"
      sectionTitle="Agentes Consultores"
      sectionSubtitle="Agentes de IA especializados que analizan, recomiendan y actúan sobre los retos más críticos de tu negocio. Modelo Xtrive MR."
      cards={cards}
      background="#ffffff"
    />
  );
}