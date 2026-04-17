/* ─── CiberseguridadIA.tsx ───────────────────────────────────────────────── */
import SectionModules from './SectionModules';
import type { ModuleCard } from './SectionModules';

const ciberCards: ModuleCard[] = [
  {
    id: 'model-security',
    title: 'Protección de Modelos',
    tagline: 'Model Security',
    description: 'Defensa contra ataques adversarios, envenenamiento de datos y extracción de modelos de IA en producción.',
    glowColor: '#6ee7b7',
    accentColor: '#059669',
    badge: '99.9% protección',
    stats: [{ value: '99.9%', label: 'Efectividad' }, { value: '24/7', label: 'Monitoreo' }, { value: '<1hr', label: 'Respuesta' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    detail: {
      headline: 'Blinda tus modelos de IA en producción',
      body: 'Los sistemas de IA tienen superficies de ataque únicas que las soluciones de seguridad tradicionales no cubren. Nuestra plataforma fue diseñada específicamente para proteger modelos ML en entornos productivos.',
      bullets: ['Detección y mitigación de ataques adversarios en tiempo real', 'Monitoreo de integridad del modelo: detección de data poisoning', 'Protección contra extracción de modelos y robo de propiedad intelectual', 'Pruebas de robustez antes de cada despliegue a producción', 'Sandbox de evaluación para detectar backdoors y vulnerabilidades'],
      cta: 'Solicitar evaluación de modelos',
    },
  },
  {
    id: 'data-privacy',
    title: 'Seguridad de Datos',
    tagline: 'Data Privacy & Encryption',
    description: 'Cifrado homomórfico, federated learning y privacidad diferencial para proteger datos de entrenamiento y producción.',
    glowColor: '#a3e635',
    accentColor: '#4d7c0f',
    badge: '100% confidencial',
    stats: [{ value: 'ISO', label: '27018 cert.' }, { value: '0', label: 'Datos expuestos' }, { value: 'AES-256', label: 'Cifrado' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    detail: {
      headline: 'Privacidad que no compromete rendimiento',
      body: 'Implementamos las técnicas más avanzadas de privacidad preserving ML para que puedas entrenar y operar modelos con datos sensibles sin exponerlos a riesgos.',
      bullets: ['Federated learning: entrena sin mover datos sensibles', 'Privacidad diferencial para proteger datos individuales en datasets', 'Cifrado homomórfico para computar sobre datos cifrados', 'Data masking y tokenización en pipelines de ML', 'Gestión de consentimiento y linaje de datos para cumplimiento LGPD/GDPR'],
      cta: 'Evaluar privacidad de mis datos',
    },
  },
  {
    id: 'threat-detection',
    title: 'Detección de Ataques',
    tagline: 'Threat Detection · IA vs IA',
    description: 'Monitoreo proactivo contra evasión, inferencia y extracción. IA que defiende IA con aprendizaje continuo.',
    glowColor: '#bbf7d0',
    accentColor: '#16a34a',
    badge: 'Tiempo real',
    stats: [{ value: '< 30s', label: 'Detección' }, { value: '98%', label: 'Precisión' }, { value: '0-day', label: 'Cobertura' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    detail: {
      headline: 'La IA más inteligente gana',
      body: 'Nuestro sistema de detección usa modelos de IA para identificar patrones de ataque específicos contra sistemas de inteligencia artificial que los SOC tradicionales no pueden detectar.',
      bullets: ['Detección de ataques de evasión: ejemplos diseñados para engañar modelos', 'Protección contra membership inference: protege privacidad del dataset', 'Monitoreo de llamadas API para detectar extracción sistemática', 'Honeypots de IA para atrapar y estudiar nuevas técnicas de ataque', 'Threat intelligence compartida con red global de clientes'],
      cta: 'Ver demo de detección',
    },
  },
  {
    id: 'governance',
    title: 'Gobernanza & Compliance',
    tagline: 'AI Governance Framework',
    description: 'Cumplimiento regulatorio, evaluación de riesgo continua y auditoría de IA ética para organizaciones enterprise.',
    glowColor: '#d9f99d',
    accentColor: '#65a30d',
    badge: 'ISO certificado',
    stats: [{ value: '7', label: 'Certs. ISO' }, { value: 'FIRST', label: 'Miembro' }, { value: 'SOC 2', label: 'Tipo II' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    detail: {
      headline: 'IA responsable, negocio confiable',
      body: 'Marco completo de gobernanza para IA que cubre desde la evaluación de riesgo en el diseño hasta la auditoría continua en producción, alineado con estándares internacionales y regulación mexicana.',
      bullets: ['Framework de evaluación de riesgo ético y sesgo algorítmico', 'Auditoría de explicabilidad (XAI) de modelos en producción', 'Gestión de incidentes de IA con rastreo y resolución documentada', 'Cumplimiento con ISO 42001 (IA), ISO 27001, LGPD y normas sectoriales', 'Reportes de gobernanza para consejo directivo y reguladores'],
      cta: 'Solicitar auditoría gratuita',
    },
  },
];

export function CiberseguridadIA() {
  return (
    <SectionModules
      id="ciberseguridad"
      eyebrow="Ciberseguridad Especializada en IA"
      sectionTitle="Protege tus Sistemas de IA"
      sectionSubtitle="Desde datos de entrenamiento hasta modelos en producción. Seguridad certificada FIRST, ISO 27001 y SOC 2 para MLOps y AI-as-a-Service."
      cards={ciberCards}
      background="#f9fafb"
    />
  );
}

/* ─── AcademiaIA.tsx ─────────────────────────────────────────────────────── */
import imgProfesor from '../assets/AcademiaIA/Profesor.png';

const academiaCards: ModuleCard[] = [
  {
    id: 'ia-negocios',
    title: 'IA para Negocios',
    tagline: 'Nivel ejecutivo · 4 semanas',
    description: 'Programa diseñado para C-level y directivos. Fundamentos de IA, ROI, gobernanza y cómo liderar transformaciones con IA.',
    glowColor: '#6ee7b7',
    accentColor: '#059669',
    badge: 'Ejecutivo',
    stats: [{ value: '4', label: 'Semanas' }, { value: '95%', label: 'Satisfacción' }, { value: 'Cert.', label: 'Incluido' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    detail: {
      headline: 'Lidera la transformación IA de tu organización',
      body: 'Programa diseñado específicamente para ejecutivos que necesitan entender el potencial y los riesgos de la IA para tomar decisiones informadas y liderar el cambio.',
      bullets: ['Fundamentos de IA sin tecnicismos: qué puede y qué no puede hacer', 'Evaluación de oportunidades de IA para tu industria específica', 'Framework de gobierno y ética para IA empresarial', 'Casos de estudio reales de transformación IA en LATAM', 'Sesiones 1:1 con expertos de la industria'],
      cta: 'Reservar lugar en IA para Negocios',
      mediaSlot: <img src={imgProfesor} alt="Profesor MAYiA" className="w-full h-44 object-contain bg-gray-50" />,
    },
  },
  {
    id: 'ml-aplicado',
    title: 'Machine Learning Aplicado',
    tagline: 'Nivel técnico · 8 semanas',
    description: 'De los datos al modelo en producción. Scikit-learn, PyTorch, MLOps y deploy en infraestructura real. Proyectos de negocio reales.',
    glowColor: '#a3e635',
    accentColor: '#4d7c0f',
    badge: 'Técnico',
    stats: [{ value: '8', label: 'Semanas' }, { value: '6', label: 'Proyectos reales' }, { value: 'MLOps', label: 'Incluido' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    detail: {
      headline: 'Construye modelos que funcionan en producción',
      body: 'Programa hands-on donde cada módulo culmina en un entregable real. Aprenderás no solo a construir modelos sino a mantenerlos, monitorearlos y mejorarlos en un entorno empresarial.',
      bullets: ['Feature engineering y selección de modelos para casos de negocio reales', 'Deep learning con PyTorch: redes neuronales, CNNs y transformers', 'MLOps completo: CI/CD para modelos, monitoring y retraining', 'Cloud deployment en GCP, AWS y Azure con contenedores', 'Proyecto final: modelo en producción con dashboard de métricas'],
      cta: 'Inscribirse a ML Aplicado',
    },
  },
  {
    id: 'mlops',
    title: 'MLOps en Producción',
    tagline: 'Nivel avanzado · 6 semanas',
    description: 'Infraestructura, CI/CD para modelos, monitoreo de drift, retraining automático y observabilidad para sistemas ML en producción.',
    glowColor: '#bbf7d0',
    accentColor: '#16a34a',
    badge: 'Avanzado',
    stats: [{ value: '6', label: 'Semanas' }, { value: 'Docker', label: '+Kubernetes' }, { value: 'GCP/AWS', label: 'Labs' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    detail: {
      headline: 'Lleva tus modelos a producción con confianza',
      body: 'El curso más completo de MLOps en español. Aprenderás a construir pipelines robustos que garantizan que tus modelos funcionen correctamente, se actualicen automáticamente y generen valor en el tiempo.',
      bullets: ['Diseño de pipelines de datos y features para ML a escala', 'CI/CD para modelos: automatización de entrenamiento y deploy', 'Monitoreo de drift de datos y performance de modelos en producción', 'Infraestructura como código con Terraform para ML workloads', 'Laboratorios prácticos en AWS SageMaker, GCP Vertex AI y Azure ML'],
      cta: 'Inscribirse a MLOps',
    },
  },
  {
    id: 'ia-etica',
    title: 'IA Ética y Gobernanza',
    tagline: 'Nivel gerencial · 3 semanas',
    description: 'Marco de trabajo para implementar IA responsable: sesgo algorítmico, explicabilidad, cumplimiento regulatorio y ética empresarial.',
    glowColor: '#d9f99d',
    accentColor: '#65a30d',
    badge: 'Gerencial',
    stats: [{ value: '3', label: 'Semanas' }, { value: 'ISO 42001', label: 'Alineado' }, { value: 'Cert.', label: 'Reconocida' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    detail: {
      headline: 'IA que cumple y que todos pueden confiar',
      body: 'Programa para líderes responsables de garantizar que los sistemas de IA de su organización sean justos, transparentes y cumplan con las regulaciones vigentes y emergentes.',
      bullets: ['Identificación y mitigación de sesgo algorítmico en datasets y modelos', 'Técnicas de explicabilidad (XAI): SHAP, LIME y modelos interpretables', 'Marco legal: LGPD México, GDPR Europa e ISO 42001 IA', 'Diseño de políticas de uso aceptable de IA en la organización', 'Casos de estudio: cuando la IA falla y cómo prevenirlo'],
      cta: 'Inscribirse a IA Ética',
    },
  },
];

export function AcademiaIA() {
  return (
    <SectionModules
      id="academia"
      eyebrow="Formación Profesional en IA · Hecho en México"
      sectionTitle="Academia MAYiA"
      sectionSubtitle="Formación especializada con instructores certificados, proyectos reales de negocio y grupos reducidos. 500+ empresas capacitadas, 2,000+ profesionales certificados."
      cards={academiaCards}
      background="#ffffff"
    />
  );
}

export default AcademiaIA;