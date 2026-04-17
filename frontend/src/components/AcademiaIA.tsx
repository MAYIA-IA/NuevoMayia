/* ─── AcademiaIA.tsx ─────────────────────────────────────────────────────── */
import imgProfesor from '../assets/AcademiaIA/Profesor.png';
import SectionModules from './SectionModules';
import type { ModuleCard } from './SectionModules';

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