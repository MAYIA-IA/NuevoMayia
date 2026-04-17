import SectionModules from './SectionModules';
import type { ModuleCard } from './SectionModules';

import video1 from '../assets/PildorasIA/imagen2.mp4';
import video2 from '../assets/PildorasIA/WhCF.mp4';
import video3 from '../assets/PildorasIA/Recomendadora.mp4';
import video4 from '../assets/PildorasIA/Ciberseguridad.mp4';
import video5 from '../assets/PildorasIA/CamarasSeguridad.mp4';
import video6 from '../assets/PildorasIA/CamarasPlacas.mp4';
import video7 from '../assets/PildorasIA/PrevencionRobo.mp4';
import video8 from '../assets/PildorasIA/OperacionSucursales.mp4';

const cards: ModuleCard[] = [
  {
    id: 'contable',
    title: 'Asesor Contable Fiscal',
    tagline: 'Normatividad mexicana actualizada',
    description: 'Asesoría fiscal 24/7 entrenada en normatividad SAT, IMSS y CFDI. Responde dudas, genera alertas y apoya declaraciones.',
    glowColor: '#6ee7b7',
    accentColor: '#059669',
    badge: '$1,900/mes',
    stats: [{ value: '24/7', label: 'Disponible' }, { value: '−50%', label: 'Oferta' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    detail: {
      headline: 'Tu contador siempre disponible',
      body: 'Agente especializado en normatividad fiscal mexicana que responde preguntas contables complejas, alerta sobre fechas de declaración y ayuda a preparar documentos para el SAT.',
      bullets: ['Respuestas a consultas fiscales en segundos', 'Alertas automáticas de vencimientos fiscales', 'Generación de CFDI y validación de comprobantes', 'Interpretación de normas contables NIF', 'Integración con CONTPAQi y sistemas contables populares'],
      cta: 'Activar Asesor Contable',
      mediaSlot: <video src={video1} autoPlay muted loop playsInline className="w-full h-44 object-cover" />,
    },
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Cobro y Facturación',
    tagline: 'Automatización de cobranza',
    description: 'Respuestas automáticas de cobro, generación de facturas y seguimiento de pagos directamente desde WhatsApp Business.',
    glowColor: '#a3e635',
    accentColor: '#4d7c0f',
    badge: '$1,900/mes',
    stats: [{ value: '+40%', label: 'Recuperación' }, { value: '0', label: 'Facturas manuales' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    detail: {
      headline: 'Cobra más, esfuérzate menos',
      body: 'Automatiza todo el ciclo de cobranza desde el primer recordatorio hasta la generación del CFDI de pago, todo por WhatsApp sin intervención humana.',
      bullets: ['Recordatorios de pago personalizados y escalonados', 'Generación automática de facturas al confirmar pago', 'Links de pago con múltiples métodos (SPEI, tarjeta, efectivo)', 'Seguimiento de cartera vencida con reportes automáticos', 'Integración con Stripe, Conekta y bancos mexicanos'],
      cta: 'Activar WhatsApp Cobro',
      mediaSlot: <video src={video2} autoPlay muted loop playsInline className="w-full h-44 object-cover" />,
    },
  },
  {
    id: 'recomendadora',
    title: 'Recomendadora Inteligente',
    tagline: 'ML personalizado para ventas',
    description: 'Motor de recomendaciones con aprendizaje continuo que aumenta el ticket promedio y activa cross-selling y up-selling.',
    glowColor: '#bbf7d0',
    accentColor: '#16a34a',
    badge: '$1,900/mes',
    stats: [{ value: '+28%', label: 'Ticket promedio' }, { value: '3×', label: 'Conversión' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    detail: {
      headline: 'El mejor vendedor que nunca descansa',
      body: 'Modelo de ML que aprende de cada interacción para ofrecer la recomendación correcta al cliente correcto en el momento preciso.',
      bullets: ['Collaborative filtering y content-based filtering combinados', 'Personalización en tiempo real por comportamiento y contexto', 'A/B testing automático de estrategias de recomendación', 'Integración con e-commerce (Shopify, WooCommerce, custom)', 'Dashboard de impacto en ventas por segmento'],
      cta: 'Activar Recomendadora',
      mediaSlot: <video src={video3} autoPlay muted loop playsInline className="w-full h-44 object-cover" />,
    },
  },
  {
    id: 'ciberseguridad-pill',
    title: 'Técnico Ciberseguridad',
    tagline: 'Monitoreo y respuesta proactiva',
    description: 'Monitoreo 24/7 de amenazas, alertas en tiempo real y respuesta automática a incidentes de seguridad.',
    glowColor: '#d9f99d',
    accentColor: '#65a30d',
    badge: '$1,900/mes',
    stats: [{ value: '24/7', label: 'Monitoreo' }, { value: '<1hr', label: 'Respuesta P1' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    detail: {
      headline: 'Seguridad que nunca duerme',
      body: 'Un SOC virtual que monitorea tu infraestructura en tiempo real, detecta anomalías y ejecuta protocolos de respuesta antes de que el daño ocurra.',
      bullets: ['SIEM con correlación de eventos y ML para detección de amenazas', 'Respuesta automatizada a incidentes de bajo riesgo', 'Alertas de vulnerabilidades con scoring CVSS actualizado', 'Informes de postura de seguridad ejecutivos y técnicos', 'Integración con firewalls, EDR y herramientas de seguridad existentes'],
      cta: 'Activar Técnico Ciberseguridad',
      mediaSlot: <video src={video4} autoPlay muted loop playsInline className="w-full h-44 object-cover" />,
    },
  },
  {
    id: 'camaras-seg',
    title: '3 Cámaras Seguridad IA',
    tagline: 'Vigilancia inteligente continua',
    description: 'Convierte tus cámaras existentes en inspectores 24/7: detección de movimiento, intrusos y alertas instantáneas al móvil.',
    glowColor: '#6ee7b7',
    accentColor: '#059669',
    badge: '$1,900/mes',
    stats: [{ value: '99%', label: 'Precisión' }, { value: '<30s', label: 'Alerta' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    detail: {
      headline: 'Ojos que nunca parpadean',
      body: 'Transforma tus cámaras IP existentes en un sistema de seguridad inteligente sin cambiar hardware. La IA analiza cada frame para detectar situaciones de riesgo.',
      bullets: ['Detección de intrusos y accesos no autorizados', 'Reconocimiento de comportamientos sospechosos', 'Alertas push en tiempo real con clip de video adjunto', 'Análisis de tráfico y afluencia en puntos de venta', 'Grabación selectiva basada en eventos relevantes'],
      cta: 'Activar Cámaras IA',
      mediaSlot: <video src={video5} autoPlay muted loop playsInline className="w-full h-44 object-cover" />,
    },
  },
  {
    id: 'placas',
    title: 'Lectura de Placas IA',
    tagline: 'Control de acceso vehicular',
    description: 'Reconocimiento OCR de placas vehiculares en tiempo real con base de datos y control de acceso automatizado.',
    glowColor: '#a3e635',
    accentColor: '#4d7c0f',
    badge: '$1,900/mes',
    stats: [{ value: '98.5%', label: 'Precisión OCR' }, { value: '<2s', label: 'Lectura' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    detail: {
      headline: 'Control vehicular sin fricciones',
      body: 'Sistema de lectura automática de placas que se integra con tu barrera de acceso existente para automatizar entradas, salidas y detectar vehículos no autorizados.',
      bullets: ['Lectura de placas mexicanas, estadounidenses y latinoamericanas', 'Lista blanca/negra con gestión desde dashboard web', 'Integración con barreras, plumas y sistemas de acceso', 'Registro fotográfico con timestamp de cada evento', 'Reportes de flujo vehicular y tiempos de permanencia'],
      cta: 'Activar Lectura de Placas',
      mediaSlot: <video src={video6} autoPlay muted loop playsInline className="w-full h-44 object-cover" />,
    },
  },
  {
    id: 'robo',
    title: 'Prevención Robo y Merma',
    tagline: 'Retail intelligence aplicado',
    description: 'Análisis de comportamiento en tienda para detectar patrones de robo y merma antes de que impacten el inventario.',
    glowColor: '#bbf7d0',
    accentColor: '#16a34a',
    badge: '$1,900/mes',
    stats: [{ value: '−60%', label: 'Merma' }, { value: 'Tiempo real', label: 'Alertas' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    detail: {
      headline: 'Menos merma, más margen',
      body: 'Sistema de computer vision que analiza el comportamiento de clientes en puntos calientes de la tienda para detectar situaciones de riesgo antes de que se conviertan en pérdidas.',
      bullets: ['Detección de comportamientos asociados a robo (sin reconocimiento facial)', 'Análisis de zonas de mayor riesgo en planta de tienda', 'Alertas discretas al personal de seguridad en tiempo real', 'Mapa de calor de actividad sospechosa por hora y zona', 'Integración con sistemas de inventario para correlacionar pérdidas'],
      cta: 'Activar Prevención de Robo',
      mediaSlot: <video src={video7} autoPlay muted loop playsInline className="w-full h-44 object-cover" />,
    },
  },
  {
    id: 'sucursales',
    title: 'Operación de Sucursales',
    tagline: 'Control multisucursal centralizado',
    description: 'Dashboard central con KPIs en vivo, detección de incidencias y gestión de operaciones para toda la red de sucursales.',
    glowColor: '#d9f99d',
    accentColor: '#65a30d',
    badge: '$1,900/mes',
    stats: [{ value: '100%', label: 'Visibilidad' }, { value: '−40%', label: 'OPEX' }],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    detail: {
      headline: 'Todas tus sucursales en un solo vistazo',
      body: 'Panel de comando centralizado que integra operaciones, ventas, inventario y seguridad de toda tu red de sucursales con alertas proactivas e IA para optimización.',
      bullets: ['Dashboard ejecutivo con KPIs de todas las sucursales en tiempo real', 'Alertas de desviaciones en métricas clave por sucursal', 'Comparativo de desempeño entre sucursales con benchmarking', 'Gestión de turnos y personal con optimización por demanda', 'Reporte automático de gerentes con análisis y recomendaciones'],
      cta: 'Activar Operación Sucursales',
      mediaSlot: <video src={video8} autoPlay muted loop playsInline className="w-full h-44 object-cover" />,
    },
  },
];

export default function PildorasIA() {
  return (
    <SectionModules
      id="pildoras-ia"
      eyebrow="Soluciones IA Pre-configuradas · desde $1,900 MXN/mes"
      sectionTitle="Píldoras IA"
      sectionSubtitle="Agentes de inteligencia artificial listos para activar en tu empresa. Implementación en 48 horas, soporte continuo incluido."
      cards={cards}
      background="#f9fafb"
    />
  );
}