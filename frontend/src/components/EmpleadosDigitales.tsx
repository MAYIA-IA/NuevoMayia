/* ─── EmpleadosDigitales.tsx ─────────────────────────────────────────────── */
import SectionModules from './SectionModules';
import type { ModuleCard } from './SectionModules';
import robotVideo from '../assets/AgentesConsultores/Robot_Asistente_con_Variaciones_de_Vestimenta.mp4';

const empleadosCards: ModuleCard[] = [
  {
    id: 'ed-finanzas',
    title: 'Asesor de Finanzas',
    tagline: 'Procesamiento inteligente 24/7',
    description: 'Gestiona solicitudes de crédito, genera reportes financieros y apoya auditorías en tiempo real sin intervención humana.',
    glowColor: '#6ee7b7',
    accentColor: '#059669',
    badge: 'Popular',
    stats: [{ value: '3 min', label: 'Aprobación crédito' }, { value: '24/7', label: 'Disponibilidad' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    detail: {
      headline: 'Tu departamento financiero nunca duerme',
      body: 'El empleado digital de Finanzas procesa solicitudes, genera análisis y ejecuta tareas rutinarias con la misma precisión que un experto senior, a una fracción del costo.',
      bullets: ['Procesamiento de facturas y conciliación automática', 'Generación de reportes ejecutivos en segundos', 'Alertas de anomalías financieras en tiempo real', 'Integración con SAP, Oracle y sistemas ERP', 'Cumplimiento fiscal automático (CFDI, SAT)'],
      cta: 'Activar Asesor de Finanzas',
      mediaSlot: <video src={robotVideo} autoPlay muted loop playsInline className="w-full h-40 object-cover" />,
    },
  },
  {
    id: 'ed-operaciones',
    title: 'Gestor de Inventario',
    tagline: 'Cadena de suministro inteligente',
    description: 'Detecta necesidades de reabastecimiento, genera órdenes de compra y optimiza niveles de stock con predicción de demanda.',
    glowColor: '#a3e635',
    accentColor: '#4d7c0f',
    stats: [{ value: '−35%', label: 'Quiebres de stock' }, { value: '10×', label: 'Más rápido' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    detail: {
      headline: 'Inventario que se gestiona solo',
      body: 'Modelos de predicción de demanda combinados con integración en tiempo real con proveedores para garantizar el nivel óptimo de inventario en todo momento.',
      bullets: ['Predicción de demanda con series temporales y ML', 'Órdenes de compra automáticas con aprobación humana opcional', 'Dashboard de inventario en tiempo real por sucursal', 'Integración con WMS y sistemas de almacén', 'Análisis de proveedores y negociación asistida'],
      cta: 'Activar Gestor de Inventario',
    },
  },
  {
    id: 'ed-asistente',
    title: 'Asistente Ejecutivo',
    tagline: 'Productividad amplificada',
    description: 'Agenda reuniones, envía briefings pre-meeting, toma notas y genera resúmenes ejecutivos de manera automática.',
    glowColor: '#bbf7d0',
    accentColor: '#16a34a',
    stats: [{ value: '85%', label: 'Tiempo liberado' }, { value: '0', label: 'Reuniones perdidas' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    detail: {
      headline: 'El mejor asistente que hayas tenido',
      body: 'Un asistente ejecutivo digital que aprende tus preferencias y hábitos de trabajo para anticipar necesidades, eliminar trabajo repetitivo y hacer que cada hora tuya valga el doble.',
      bullets: ['Gestión inteligente de agenda y priorización', 'Briefings automáticos antes de cada reunión', 'Transcripción y resumen de juntas en tiempo real', 'Seguimiento de compromisos y recordatorios proactivos', 'Integración con Google Workspace, Microsoft 365 y Slack'],
      cta: 'Activar Asistente Ejecutivo',
    },
  },
  {
    id: 'ed-marketing',
    title: 'Analista de Marketing',
    tagline: 'Datos que generan revenue',
    description: 'Monitorea campañas, calcula ROI por canal, detecta tendencias y genera recomendaciones de optimización automáticamente.',
    glowColor: '#d9f99d',
    accentColor: '#65a30d',
    stats: [{ value: '+28%', label: 'Conversión' }, { value: '10×', label: 'Más datos analizados' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    detail: {
      headline: 'Marketing data-driven en piloto automático',
      body: 'El analista digital integra todas tus fuentes de datos de marketing y genera insights accionables antes de que tu competencia los detecte.',
      bullets: ['Consolidación de datos de todos los canales digitales', 'Atribución multicanal y cálculo de CAC/LTV en tiempo real', 'Alertas de performance y recomendaciones automáticas', 'Generación de reportes ejecutivos personalizados', 'Predicción de tendencias y ventanas de oportunidad'],
      cta: 'Activar Analista de Marketing',
    },
  },
];

export function EmpleadosDigitales() {
  return (
    <SectionModules
      id="empleados-digitales"
      eyebrow="Empleados Digitales Inteligentes"
      sectionTitle="Aumenta la productividad de tu equipo"
      sectionSubtitle="Empleados digitales que piensan, actúan y evolucionan con tu empresa. 100% confidencialidad de tus datos. Implementación en 48 horas."
      cards={empleadosCards}
      background="#ffffff"
    />
  );
}

export default EmpleadosDigitales;