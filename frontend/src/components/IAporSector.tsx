import SectionModules from './SectionModules';
import type { ModuleCard } from './SectionModules';

const cards: ModuleCard[] = [
  {
    id: 'finanzas',
    title: 'Finanzas',
    tagline: 'Banca, seguros e inversión',
    description: 'Detección de fraudes en tiempo real, banca personalizada con chatbots y perspectivas de inversión potenciadas por modelos predictivos.',
    glowColor: '#6ee7b7',
    accentColor: '#059669',
    stats: [{ value: '99.7%', label: 'Precisión anti-fraude' }, { value: '3 min', label: 'Aprobación crédito' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    detail: {
      headline: 'IA que protege y hace crecer tu patrimonio',
      body: 'Soluciones diseñadas para el sector financiero mexicano, cumpliendo CNBV, CONDUSEF y mejores prácticas internacionales. Desde la detección de transacciones sospechosas hasta asesores de inversión personalizados.',
      bullets: [
        'Motor antifraude con aprendizaje continuo y < 0.1% falsos positivos',
        'Chatbot bancario multicanal (app, web, WhatsApp)',
        'Modelos de scoring crediticio inclusivos y explicables',
        'Análisis de sentimiento de mercados en tiempo real',
        'Cumplimiento automatizado con regulación CNBV/Banxico',
      ],
      cta: 'Ver solución para Finanzas',
    },
  },
  {
    id: 'salud',
    title: 'Salud',
    tagline: 'Hospitales, farma y clínicas',
    description: 'Simulación de moléculas, descubrimiento de fármacos y análisis de datos de ensayos clínicos para acelerar la investigación médica.',
    glowColor: '#a3e635',
    accentColor: '#4d7c0f',
    stats: [{ value: '40%', label: 'Reducción diagnóstico' }, { value: '10×', label: 'Velocidad fármacos' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    detail: {
      headline: 'Tecnología que salva vidas',
      body: 'Plataforma de IA clínica que asiste a médicos con diagnósticos diferenciales, optimiza agendas hospitalarias y acelera la investigación farmacéutica mediante simulación molecular.',
      bullets: [
        'Apoyo al diagnóstico médico con modelos de visión computacional',
        'Análisis automatizado de imágenes de radiología y patología',
        'Plataforma de gestión de ensayos clínicos y datos de pacientes',
        'Predicción de reingresos hospitalarios y deterioro del paciente',
        'Cumplimiento con NOM-024-SSA3 y regulación COFEPRIS',
      ],
      cta: 'Ver solución para Salud',
    },
  },
  {
    id: 'retail',
    title: 'Retail',
    tagline: 'Tiendas físicas y e-commerce',
    description: 'Compras personalizadas, tiendas inteligentes, gestión omnicanal y chatbots de servicio al cliente que convierten y retienen.',
    glowColor: '#bbf7d0',
    accentColor: '#16a34a',
    stats: [{ value: '+28%', label: 'Conversión' }, { value: '−35%', label: 'Merma' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    detail: {
      headline: 'El retail inteligente que tus clientes esperan',
      body: 'Desde la personalización del journey digital hasta la optimización del inventario físico, nuestra IA integra todos los canales para maximizar conversión y experiencia de cliente.',
      bullets: [
        'Motor de recomendaciones personalizado por comportamiento y contexto',
        'Gestión inteligente de inventario con predicción de demanda',
        'Análisis de flujo en tienda con cámaras IA (sin rostros)',
        'Chatbot de atención al cliente con escalamiento a humano',
        'Precios dinámicos y optimización de promociones',
      ],
      cta: 'Ver solución para Retail',
    },
  },
  {
    id: 'manufactura',
    title: 'Manufactura',
    tagline: 'Planta, calidad y cadena de valor',
    description: 'La fábrica habilitada por IA: diseño de productos, mantenimiento predictivo y chatbots para el proceso de ventas industriales.',
    glowColor: '#d9f99d',
    accentColor: '#65a30d',
    stats: [{ value: '60%', label: 'Menos paros' }, { value: '+15%', label: 'Throughput' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    detail: {
      headline: 'La fábrica del futuro, hoy',
      body: 'Transformamos plantas industriales en operaciones inteligentes: sensores IoT + IA predicen fallas antes de que ocurran, vision systems detectan defectos en línea y gemelos digitales optimizan cada proceso.',
      bullets: [
        'Mantenimiento predictivo con sensores IoT y modelos de anomalía',
        'Control de calidad visual con cámaras IA en línea de producción',
        'Gemelo digital de planta para optimización de throughput',
        'Planificación de producción con IA considerando demanda y cuellos de botella',
        'Chatbot técnico para soporte en piso de planta',
      ],
      cta: 'Ver solución para Manufactura',
    },
  },
  {
    id: 'sector-publico',
    title: 'Sector Público',
    tagline: 'Gobierno federal, estatal y municipal',
    description: 'Chatbots para participación ciudadana, resumen de documentos, cumplimiento de auditorías y asistentes virtuales de IA.',
    glowColor: '#6ee7b7',
    accentColor: '#059669',
    stats: [{ value: '80%', label: 'Menos trámites manuales' }, { value: '24/7', label: 'Atención ciudadana' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    detail: {
      headline: 'Gobierno digital que sirve a los ciudadanos',
      body: 'Soluciones de IA diseñadas para modernizar la gestión pública: desde la atención ciudadana automatizada hasta la detección de irregularidades en procesos de auditoría.',
      bullets: [
        'Asistente virtual ciudadano multicanal (web, WhatsApp, app)',
        'Automatización de trámites y digitalización de expedientes',
        'Análisis de contratos y documentos legales con NLP',
        'Sistema de alertas tempranas para auditorías internas',
        'Dashboard de KPIs de gobierno abierto y transparencia',
      ],
      cta: 'Ver solución para Gobierno',
    },
  },
  {
    id: 'energia',
    title: 'Energía',
    tagline: 'Oil & gas, renovables y utilities',
    description: 'Gemelos digitales, mantenimiento predictivo y preventivo, y servicio al cliente para el sector energético.',
    glowColor: '#a3e635',
    accentColor: '#4d7c0f',
    stats: [{ value: '45%', label: 'Reducción OPEX' }, { value: '+20%', label: 'Generación eficiente' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    detail: {
      headline: 'Energía más limpia y rentable con IA',
      body: 'Optimizamos la generación, distribución y comercialización de energía mediante modelos predictivos que maximizan la eficiencia y reducen costos operativos.',
      bullets: [
        'Gemelo digital de planta generadora o red de distribución',
        'Predicción de demanda energética con series temporales',
        'Mantenimiento predictivo de turbinas, transformadores y equipos',
        'Optimización de portafolio de generación renovable',
        'Detección de fraude en consumo y pérdidas técnicas',
      ],
      cta: 'Ver solución para Energía',
    },
  },
  {
    id: 'ingenieria',
    title: 'Ingeniería y Construcción',
    tagline: 'Diseño, obra y cadena de valor',
    description: 'Acelera flujos de trabajo de diseño, toma decisiones con rastreo en tiempo real y obtén perspectivas profundas en productos.',
    glowColor: '#bbf7d0',
    accentColor: '#16a34a',
    stats: [{ value: '35%', label: 'Menos tiempo diseño' }, { value: '−25%', label: 'Incidentes en obra' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    detail: {
      headline: 'Construye más rápido, con más seguridad',
      body: 'Desde el diseño generativo asistido por IA hasta el monitoreo de seguridad en obra con cámaras inteligentes, transformamos cada etapa del ciclo de vida de los proyectos de ingeniería.',
      bullets: [
        'Diseño generativo: la IA propone alternativas óptimas de ingeniería',
        'BIM aumentado con análisis predictivo de costos y plazos',
        'Monitoreo de seguridad en obra con cámaras IA (EPP, zonas restringidas)',
        'Optimización de cadena de suministro de materiales',
        'Detección temprana de desviaciones en cronograma y presupuesto',
      ],
      cta: 'Ver solución para Construcción',
    },
  },
  {
    id: 'medios',
    title: 'Medios y Entretenimiento',
    tagline: 'Contenido, publicidad y experiencias',
    description: 'Desarrollo de personajes, edición de video, creación de imágenes y publicidad hiper-personalizada para el consumidor moderno.',
    glowColor: '#d9f99d',
    accentColor: '#65a30d',
    stats: [{ value: '5×', label: 'Más contenido' }, { value: '+40%', label: 'Engagement' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    detail: {
      headline: 'Contenido a escala, creatividad sin límites',
      body: 'Potenciamos a creativos y equipos de marketing con herramientas de IA generativa que multiplican la producción de contenido sin sacrificar calidad ni identidad de marca.',
      bullets: [
        'Generación de variantes de campaña para A/B testing masivo',
        'Localización y adaptación cultural automática de contenido',
        'Análisis de audiencia para segmentación hiper-personalizada',
        'Asistente de guión y desarrollo de narrativa para series y anuncios',
        'Herramientas de edición de video y postproducción asistida por IA',
      ],
      cta: 'Ver solución para Medios',
    },
  },
];

export default function IAPorSector() {
  return (
    <SectionModules
      id="ia-sectores"
      eyebrow="Soluciones VaaS & SaaS por Industria"
      sectionTitle="IA por Sector"
      sectionSubtitle="Soluciones de inteligencia artificial diseñadas para los retos específicos de cada industria. Implementación en semanas, no meses."
      cards={cards}
      background="#f9fafb"
    />
  );
}