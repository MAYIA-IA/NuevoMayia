import SectionModules from './SectionModules';
import type { ModuleCard } from './SectionModules';

const cards: ModuleCard[] = [
  {
    id: 'consultoria',
    title: 'Consultoría Estratégica',
    tagline: 'Transformación con ROI medible',
    description: 'Enfoque holístico en personas, procesos y tecnología. Desde discovery hasta go-live con resultados tangibles desde el primer sprint.',
    glowColor: '#6ee7b7',
    accentColor: '#059669',
    badge: 'Más solicitado',
    stats: [{ value: '2–3×', label: 'ROI promedio' }, { value: '4 sem', label: 'Primer entregable' }, { value: '100%', label: 'Soberanía' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    detail: {
      headline: 'De la visión al valor real',
      body: 'Nuestro equipo de consultores senior lidera cada proyecto con la metodología VATYCS: evaluamos madurez digital, identificamos casos de uso con mayor retorno y diseñamos una hoja de ruta ejecutable. Combinamos experiencia de industria con las últimas capacidades de IA para garantizar adopción real y resultados medibles.',
      bullets: [
        'Diagnóstico de madurez IA en menos de 2 semanas',
        'Definición de KPIs y métricas de éxito desde el día 1',
        'Acompañamiento a C-level durante toda la transformación',
        'Talleres de habilitación para equipos técnicos y ejecutivos',
        'Garantía de ROI en los primeros 90 días o ajustamos sin costo',
      ],
      cta: 'Agendar consultoría gratuita',
    },
  },
  {
    id: 'datascience',
    title: 'Científicos de Datos',
    tagline: 'Soluciones innovadoras hoy',
    description: 'Centro de I+D interno y ecosistema 365× que reúne startups innovadoras. Garantizamos la mejor solución disponible con enfoque híbrido.',
    glowColor: '#a3e635',
    accentColor: '#4d7c0f',
    badge: 'I+D propio',
    stats: [{ value: '365×', label: 'Ecosistema' }, { value: '40+', label: 'Científicos' }, { value: '8', label: 'Verticales' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    detail: {
      headline: 'Ciencia de datos aplicada a tu negocio',
      body: 'Contamos con un equipo multidisciplinario de data scientists, ML engineers y domain experts que trabajan directamente en tus datos para construir modelos que funcionan en producción, no solo en laboratorio.',
      bullets: [
        'Feature engineering y selección de modelos adaptados a tu industria',
        'MLOps completo: CI/CD para modelos, monitoreo de drift y retraining automático',
        'Visualización y Business Intelligence integrados',
        'Modelos explicables (XAI) para cumplimiento regulatorio',
        'Pipeline de datos soberano en infraestructura mexicana',
      ],
      cta: 'Conocer el equipo de Data Science',
    },
  },
  {
    id: 'integracion',
    title: 'Integración Completa',
    tagline: 'Primera plataforma IA integral de México',
    description: 'Infraestructura soberana y desarrollo especializado. Red nacional de centros de datos que acercan los modelos a tus datos con velocidad y seguridad.',
    glowColor: '#bbf7d0',
    accentColor: '#16a34a',
    badge: 'Infraestructura propia',
    stats: [{ value: '30', label: 'Centros Edge' }, { value: '<20ms', label: 'Latencia' }, { value: '99.9%', label: 'Uptime' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    detail: {
      headline: 'Soberanía tecnológica sin compromisos',
      body: 'La única plataforma IA en México con infraestructura 100% nacional. Nuestros 30 centros de datos EdgeNet distribuidos en los 32 estados garantizan latencia mínima, cumplimiento con regulaciones locales y control total sobre tus datos sensibles.',
      bullets: [
        'Integración con ERP, CRM y sistemas legados vía API REST / GraphQL',
        'Conectores nativos para SAP, Salesforce, Oracle y más de 120 plataformas',
        'Migración gradual sin interrupciones operativas',
        'Red privada dedicada para tráfico de modelos',
        'Cumplimiento LFPDPPP, ISO 27001 y normas sectoriales',
      ],
      cta: 'Ver arquitectura técnica',
    },
  },
  {
    id: 'soporte',
    title: 'Soporte 24/7',
    tagline: 'Continuidad operativa garantizada',
    description: 'Mantenimiento, seguridad y preparación para el futuro. Servicio internacional 24/7 con soporte dedicado y capacitación continua.',
    glowColor: '#d9f99d',
    accentColor: '#65a30d',
    stats: [{ value: '24/7', label: 'Disponibilidad' }, { value: '<15 min', label: 'Respuesta P1' }, { value: '7', label: 'Certs ISO' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    detail: {
      headline: 'Tu operación nunca se detiene',
      body: 'Un equipo de ingenieros dedicados monitorea tus sistemas de IA en tiempo real, detecta anomalías antes de que impacten el negocio y ejecuta actualizaciones de modelos sin ventanas de mantenimiento.',
      bullets: [
        'NOC propio con ingenieros certificados en turno 24/7/365',
        'SLA garantizado con penalizaciones económicas si no se cumple',
        'Actualizaciones de modelos y parches de seguridad automáticos',
        'Reportes ejecutivos mensuales de desempeño y ROI',
        'Programa de capacitación continua para tu equipo interno',
      ],
      cta: 'Ver planes de soporte',
    },
  },
];

export default function IAEmpresarial() {
  return (
    <SectionModules
      id="ia-empresarial"
      eyebrow="Inteligencia Artificial Empresarial"
      sectionTitle="Reinventa tu negocio con IA"
      sectionSubtitle="Desde discovery hasta implementación. Soluciones IA que optimizan procesos y generan ROI medible desde el primer mes."
      cards={cards}
      background="#f9fafb"
    />
  );
}