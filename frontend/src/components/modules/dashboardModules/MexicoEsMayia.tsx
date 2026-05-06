import React, { useState } from 'react';
import { MapPin, X, Zap, ChevronRight, Bot } from 'lucide-react';
import { brandingConfig } from '../../../config/branding';
import { mexicoEstadosPaths } from './mexicoStatePaths';

const { colores } = brandingConfig;

const COLOR_SELECTED = '#C0D966';
const COLOR_HOVER = '#D4E87A';

interface EstadoEconomico {
  id: string;
  nombre: string;
  zona: string;
  zonaColor: string;
  industria: string;
  descripcion: string;
  soluciones: string[];
}

const ZONAS: Record<string, { label: string; color: string; ids: string[] }> = {
  Norte: {
    label: 'Norte',
    color: '#3B82F6',
    ids: ['MX_BC', 'MX_BS', 'MX_CH', 'MX_CO', 'MX_NL', 'MX_SO', 'MX_TM', 'MX_DG', 'MX_SI'],
  },
  'Bajío': {
    label: 'Bajío y Centro-Occidente',
    color: '#F59E0B',
    ids: ['MX_AG', 'MX_GT', 'MX_QT', 'MX_SL', 'MX_ZA', 'MX_JA', 'MX_MI', 'MX_CL', 'MX_NA'],
  },
  Centro: {
    label: 'Centro',
    color: '#8B5CF6',
    ids: ['MX_DF', 'MX_EM', 'MX_PU', 'MX_HG', 'MX_MO', 'MX_TL'],
  },
  Sureste: {
    label: 'Sur y Sureste',
    color: '#10B981',
    ids: ['MX_CM', 'MX_CS', 'MX_GR', 'MX_OA', 'MX_QR', 'MX_TB', 'MX_VE', 'MX_YU'],
  },
};

const estadosData: Record<string, EstadoEconomico> = {
  MX_BC: { id: 'MX_BC', nombre: 'Baja California', zona: 'Norte', zonaColor: '#3B82F6', industria: 'Manufactura y Aeroespacial', descripcion: 'Manufactura electrónica, dispositivos médicos y sector aeroespacial. El Valle de Guadalupe impulsa la industria vitivinícola de exportación.', soluciones: ['Visión artificial para control de calidad en manufactura médica', 'Agentes IA de trazabilidad para exportación aeroespacial', 'Optimización de rutas logísticas fronterizas con ML'] },
  MX_BS: { id: 'MX_BS', nombre: 'Baja California Sur', zona: 'Norte', zonaColor: '#3B82F6', industria: 'Turismo de Lujo y Pesca', descripcion: 'Turismo de alto valor en Los Cabos, minería de sal y pesca comercial. Uno de los destinos con mayor derrama turística por visitante.', soluciones: ['Personalización de experiencias turísticas con agentes conversacionales', 'Análisis de sentimientos para reputación digital hotelera', 'Predicción de temporadas y optimización de tarifas con ML'] },
  MX_CH: { id: 'MX_CH', nombre: 'Chihuahua', zona: 'Norte', zonaColor: '#3B82F6', industria: 'Maquiladoras y Automotriz', descripcion: 'Lider en maquiladoras de exportación con fuerte presencia automotriz, electrónica y minería. Clave en la cadena de suministro global.', soluciones: ['IA predictiva para mantenimiento de líneas de producción', 'Automatización de inventario con demanda forecasting', 'Detección temprana de defectos por visión artificial'] },
  MX_CO: { id: 'MX_CO', nombre: 'Coahuila', zona: 'Norte', zonaColor: '#3B82F6', industria: 'Industria Automotriz y Siderurgia', descripcion: 'Gigante en ensamble de vehículos y autopartes, metalurgia y minería de carbón. Hub automotriz clave del norte del país.', soluciones: ['Optimización de cadena de valor automotriz con IA', 'Modelos predictivos de consumo energético en siderurgia', 'Control de calidad automatizado en líneas de ensamble'] },
  MX_NL: { id: 'MX_NL', nombre: 'Nuevo León', zona: 'Norte', zonaColor: '#3B82F6', industria: 'Hub Financiero y Manufactura Avanzada', descripcion: 'La capital industrial y financiera del norte. Siderurgia, manufactura avanzada y el mayor flujo de inversión extranjera directa fuera de CDMX.', soluciones: ['Análisis predictivo de riesgo crediticio e inversión', 'Automatización de procesos corporativos con agentes IA', 'Plataformas de inteligencia de negocio en tiempo real'] },
  MX_SO: { id: 'MX_SO', nombre: 'Sonora', zona: 'Norte', zonaColor: '#3B82F6', industria: 'Minería y Agroindustria', descripcion: 'Minería de cobre y oro a escala nacional, agroindustria de exportación y sector aeroespacial en crecimiento.', soluciones: ['Sensórica IA para mantenimiento predictivo de maquinaria minera', 'Modelos de predicción de rendimiento geológico', 'Trazabilidad blockchain+IA para exportación agropecuaria'] },
  MX_TM: { id: 'MX_TM', nombre: 'Tamaulipas', zona: 'Norte', zonaColor: '#3B82F6', industria: 'Logística Aduanera y Petroquímica', descripcion: 'Nuevo Laredo es el punto comercial más importante del país. Petroquímica, manufactura y logística fronteriza de alto volumen.', soluciones: ['IA para optimización de flujos en cruces aduaneros', 'Predicción de tiempos de despacho y cuellos de botella', 'Monitoreo inteligente de cadenas petroquímicas'] },
  MX_DG: { id: 'MX_DG', nombre: 'Durango', zona: 'Norte', zonaColor: '#3B82F6', industria: 'Ganadería y Minería', descripcion: 'Producción ganadera y forestal de escala nacional, minería de plata y oro, con creciente diversificación industrial.', soluciones: ['Monitoreo ganadero con sensórica e IA edge', 'Optimización de rutas de acopio con ML', 'Reportes regulatorios automatizados para minería'] },
  MX_SI: { id: 'MX_SI', nombre: 'Sinaloa', zona: 'Norte', zonaColor: '#3B82F6', industria: 'Agroindustria de Exportación', descripcion: 'El granero de México. Agricultura comercial de alto rendimiento y pesca. Produce el mayor volumen de hortalizas de exportación del país.', soluciones: ['Modelos de predicción de cosechas por análisis satelital', 'Optimización logística de cadenas de frío con IA', 'Agentes IA para gestión de contratos de exportación'] },

  MX_AG: { id: 'MX_AG', nombre: 'Aguascalientes', zona: 'Bajío', zonaColor: '#F59E0B', industria: 'Industria Automotriz', descripcion: 'Economía dominada por Nissan y su ecosistema de proveeduría. Altamente especializado en manufactura automotriz de precisión.', soluciones: ['IA predictiva para demanda de autopartes just-in-time', 'Visión artificial para inspección de componentes', 'Optimización de turnos y capacidad de producción con ML'] },
  MX_GT: { id: 'MX_GT', nombre: 'Guanajuato', zona: 'Bajío', zonaColor: '#F59E0B', industria: 'Automotriz, Cuero y Agroindustria', descripcion: 'Plantas de Mazda, Honda y Toyota junto con industria de calzado y cuero. Uno de los estados con mayor crecimiento exportador.', soluciones: ['Gestión inteligente de proveedores con agentes IA', 'Trazabilidad de materiales con ML para exportación automotriz', 'Optimización de inventario de calzado con demand forecasting'] },
  MX_QT: { id: 'MX_QT', nombre: 'Querétaro', zona: 'Bajío', zonaColor: '#F59E0B', industria: 'Aeroespacial y Tecnología', descripcion: 'Uno de los hubs aeroespaciales más importantes de América Latina. Combina manufactura de precisión con tecnología y logística de clase mundial.', soluciones: ['Gemelos digitales para certificación de componentes aeroespaciales', 'Plataformas de IA para gestión de contratos de MRO', 'Optimización de logística TI y data centers con ML'] },
  MX_SL: { id: 'MX_SL', nombre: 'San Luis Potosí', zona: 'Bajío', zonaColor: '#F59E0B', industria: 'Automotriz y Logística', descripcion: 'Sede de BMW y GM en México. Su posición geográfica central lo convierte en nodo clave de distribución nacional.', soluciones: ['IA para sincronización de cadenas de suministro automotriz', 'Predicción de carga y optimización de almacenes logísticos', 'Automatización de auditorías de calidad con visión artificial'] },
  MX_ZA: { id: 'MX_ZA', nombre: 'Zacatecas', zona: 'Bajío', zonaColor: '#F59E0B', industria: 'Minería de Plata', descripcion: 'Lider mundial en producción de plata. La minería representa el motor económico principal con agricultura de subsistencia y exportación.', soluciones: ['Mantenimiento predictivo de maquinaria minera con sensórica IA', 'Modelos de rendimiento geológico con ML', 'Automatización de reportes de cumplimiento ambiental'] },
  MX_JA: { id: 'MX_JA', nombre: 'Jalisco', zona: 'Bajío', zonaColor: '#F59E0B', industria: 'Tecnología, Tequila y Turismo', descripcion: 'El Silicon Valley de México en Guadalajara. Agroindustria de berries, aguacate y tequila de exportación global. Turismo en Puerto Vallarta.', soluciones: ['Plataformas de desarrollo de agentes IA para startups tech', 'Optimización de cosecha de berries con análisis satelital', 'Personalización de experiencias turísticas con IA conversacional'] },
  MX_MI: { id: 'MX_MI', nombre: 'Michoacán', zona: 'Bajío', zonaColor: '#F59E0B', industria: 'Agroindustria y Logística Portuaria', descripcion: 'La mayor mina de oro de México es el aguacate. El Puerto de Lázaro Cárdenas conecta la región con los mercados de Asia y el Pacífico.', soluciones: ['Trazabilidad IA para exportación de aguacate (normas USDA)', 'Optimización logística portuaria con ML predictivo', 'Modelos de detección temprana de plagas con visión artificial'] },
  MX_CL: { id: 'MX_CL', nombre: 'Colima', zona: 'Bajío', zonaColor: '#F59E0B', industria: 'Logística y Comercio Internacional', descripcion: 'El Puerto de Manzanillo moviliza una fracción significativa del comercio de importación del país, siendo su principal fuente de ingreso estatal.', soluciones: ['Predicción de tiempos de espera portuaria con ML', 'Optimización de rutas de distribución intermodal', 'Automatización de trámites aduaneros con agentes IA'] },
  MX_NA: { id: 'MX_NA', nombre: 'Nayarit', zona: 'Bajío', zonaColor: '#F59E0B', industria: 'Turismo y Agricultura', descripcion: 'La Riviera Nayarit como destino de turismo de lujo en expansión. Agricultura tropical y pesca artesanal e industrial.', soluciones: ['Personalización de experiencia turística con IA', 'Optimización de precios dinámicos en hotelería con ML', 'Análisis de reputación digital para destinos turísticos'] },

  MX_DF: { id: 'MX_DF', nombre: 'Ciudad de México', zona: 'Centro', zonaColor: '#8B5CF6', industria: 'Finanzas, Corporativos y Servicios', descripcion: 'El cerebro financiero del país. Aquí se concentran los corporativos más grandes, los servicios financieros y las telecomunicaciones. Donde se cierran los grandes negocios.', soluciones: ['Detección de fraude financiero en tiempo real con ML', 'Agentes IA para automatización de procesos corporativos', 'Análisis predictivo de mercado y riesgo de inversión'] },
  MX_EM: { id: 'MX_EM', nombre: 'Estado de México', zona: 'Centro', zonaColor: '#8B5CF6', industria: 'Manufactura y Logística', descripcion: 'La zona industrial más grande del país pegada a la capital. Manufactura diversificada de alimentos, química y automotriz con logística comercial de gran escala.', soluciones: ['Optimización de cadenas de distribución metropolitana con IA', 'Predicción de demanda industrial con modelos de ML', 'Automatización de inventarios y almacenes con agentes IA'] },
  MX_PU: { id: 'MX_PU', nombre: 'Puebla', zona: 'Centro', zonaColor: '#8B5CF6', industria: 'Automotriz Premium y Textil', descripcion: 'Volkswagen y Audi dominan la economía local con manufactura automotriz de alta ingeniería. Industria textil y agroindustria complementan el ecosistema.', soluciones: ['Gemelos digitales para optimización de líneas automotrices', 'IA generativa para diseño de procesos textiles', 'Trazabilidad de componentes con blockchain e IA'] },
  MX_HG: { id: 'MX_HG', nombre: 'Hidalgo', zona: 'Centro', zonaColor: '#8B5CF6', industria: 'Metalmecánica y Petróleo', descripcion: 'Refinación de petróleo en Tula, industria metalmecánica y minería. Posicionado como corredor logístico entre el norte y el centro del país.', soluciones: ['Monitoreo predictivo de refinería con sensórica IA', 'Optimización energética de plantas industriales con ML', 'Automatización de reportes de seguridad industrial con IA'] },
  MX_MO: { id: 'MX_MO', nombre: 'Morelos', zona: 'Centro', zonaColor: '#8B5CF6', industria: 'Turismo e Industria Farmacéutica', descripcion: 'Turismo de descanso y retiro para la ZMVM, agricultura de caña de azúcar y una industria farmacéutica especializada en crecimiento.', soluciones: ['IA para investigación y desarrollo de fármacos', 'Optimización de rutas turísticas con agentes conversacionales', 'Modelos predictivos de demanda para producción farmacéutica'] },
  MX_TL: { id: 'MX_TL', nombre: 'Tlaxcala', zona: 'Centro', zonaColor: '#8B5CF6', industria: 'Industria Textil y Automotriz', descripcion: 'Industria textil con historia, proveeduría automotriz y agricultura. Estado con creciente integración a los corredores industriales del Bajío.', soluciones: ['Optimización de procesos textiles con visión artificial', 'Gestión de proveeduría automotriz con IA predictiva', 'Demand forecasting para producción textil de temporada'] },

  MX_CM: { id: 'MX_CM', nombre: 'Campeche', zona: 'Sureste', zonaColor: '#10B981', industria: 'Extracción de Petróleo', descripcion: 'El corazón de la producción de crudo de Pemex. La mayor parte del PIB estatal proviene de la industria petrolera offshore en el Golfo de México.', soluciones: ['Mantenimiento predictivo de plataformas offshore con sensórica IA', 'Gemelos digitales de pozos para optimización de extracción', 'Automatización de reportes regulatorios con IA generativa'] },
  MX_CS: { id: 'MX_CS', nombre: 'Chiapas', zona: 'Sureste', zonaColor: '#10B981', industria: 'Energía Eléctrica y Café', descripcion: 'Las grandes hidroeléctricas generan energía para todo el país. El café y el plátano son sus principales productos de exportación agropecuaria.', soluciones: ['Optimización de generación hidráulica con modelos predictivos de caudal', 'Trazabilidad de origen para café de exportación con blockchain e IA', 'Detección de condiciones óptimas de cosecha con sensórica satelital'] },
  MX_GR: { id: 'MX_GR', nombre: 'Guerrero', zona: 'Sureste', zonaColor: '#10B981', industria: 'Turismo y Minería', descripcion: 'Acapulco e Ixtapa como destinos históricos de playa, con minería de oro como segunda fuente de ingresos. Turismo en proceso de reactivación.', soluciones: ['Análisis de sentimientos y reputación digital turística con IA', 'Optimización de rutas de transporte y seguridad logística', 'Predicción de afluencia y pricing dinámico para hotelería'] },
  MX_OA: { id: 'MX_OA', nombre: 'Oaxaca', zona: 'Sureste', zonaColor: '#10B981', industria: 'Turismo Cultural, Mezcal y Energía Eólica', descripcion: 'Turismo cultural y de naturaleza de alto valor, mezcal y café de exportación, y el Istmo de Tehuantepec como generador eólico estratégico.', soluciones: ['Certificación de origen de mezcal con trazabilidad IA', 'Optimización de producción eólica con modelos meteorológicos ML', 'IA conversacional para experiencias turísticas culturales'] },
  MX_QR: { id: 'MX_QR', nombre: 'Quintana Roo', zona: 'Sureste', zonaColor: '#10B981', industria: 'Turismo Internacional', descripcion: 'La principal entrada de divisas turísticas del país. Cancún, Tulum y la Riviera Maya reciben millones de visitantes internacionales al año.', soluciones: ['Personalización de paquetes turísticos con IA generativa', 'Revenue management con ML para hoteles y tours', 'Análisis de flujos de visitantes para planificación de destinos'] },
  MX_TB: { id: 'MX_TB', nombre: 'Tabasco', zona: 'Sureste', zonaColor: '#10B981', industria: 'Petróleo y Agroindustria', descripcion: 'Refinería Dos Bocas y extracción de hidrocarburo como motor económico. Producción de cacao, plátano y ganadería como sectores complementarios.', soluciones: ['Monitoreo de infraestructura de refinería con sensórica IA', 'Trazabilidad de cacao para exportación de calidad premium', 'Optimización de cadena de frío agroindustrial con ML'] },
  MX_VE: { id: 'MX_VE', nombre: 'Veracruz', zona: 'Sureste', zonaColor: '#10B981', industria: 'Logística Portuaria y Petroquímica', descripcion: 'El puerto más importante del Golfo de México y uno de los principales del país. Petroquímica, café, cítricos y caña de azúcar como sectores relevantes.', soluciones: ['Optimización de flujo de carga portuaria con ML en tiempo real', 'Predicción de congestión y tiempos de atraque con IA', 'Trazabilidad agrícola de exportación con agentes IA'] },
  MX_YU: { id: 'MX_YU', nombre: 'Yucatán', zona: 'Sureste', zonaColor: '#10B981', industria: 'Turismo, Manufactura e Inmobiliario', descripcion: 'Boom inmobiliario y turístico en Mérida, manufactura textil e industrial en crecimiento y agroindustria porcícola de exportación.', soluciones: ['IA de valuación inmobiliaria y análisis de mercado', 'Optimización logística de exportación porcícola con ML', 'Agentes IA para atención turística multilingüe'] },
};

function getStateColor(id: string, hovered: boolean, selected: boolean, filtroZona: string): string {
  if (selected) return COLOR_SELECTED;
  const zona = Object.entries(ZONAS).find(([, z]) => z.ids.includes(id));

  if (filtroZona !== 'Todos') {
    const inZone = zona && zona[0] === filtroZona;
    if (!inZone) return '#111111';
    if (hovered) return COLOR_HOVER;
    return zona![1].color;
  }

  if (hovered) return '#2a2a2a';
  return '#000000';
}

export const MexicoEsMayia: React.FC = () => {
  const [selectedEstado, setSelectedEstado] = useState<string | null>(null);
  const [hoveredEstado, setHoveredEstado] = useState<string | null>(null);
  const [filtroZona, setFiltroZona] = useState('Todos');
  const [tooltip, setTooltip] = useState<{ x: number; y: number; id: string } | null>(null);

  const detalle = selectedEstado ? estadosData[selectedEstado] : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: colores.fondoPrincipal }}>

      {/* Header */}
      <div style={{ padding: '28px 32px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '12px',
            background: `linear-gradient(135deg, ${COLOR_SELECTED} 0%, #a8c44a 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Bot size={18} color="#fff" />
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '900', color: colores.textoClaro, margin: 0, letterSpacing: '-0.5px' }}>
            México es MAYiA
          </h2>
        </div>
        <p style={{ fontSize: '13px', color: colores.textoMedio, margin: '0 0 20px 48px' }}>
          Inteligencia artificial aplicada a los motores económicos de cada estado
        </p>

        {/* Zona filters */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
          {['Todos', ...Object.keys(ZONAS)].map((z) => {
            const zona = ZONAS[z];
            const isActive = filtroZona === z;
            return (
              <button
                key={z}
                onClick={() => setFiltroZona(z)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: isActive
                    ? (zona ? zona.color : colores.textoClaro)
                    : colores.fondoTerciario,
                  color: isActive ? '#fff' : colores.textoMedio,
                  boxShadow: isActive ? `0 4px 12px ${zona ? zona.color + '50' : '#00000030'}` : 'none',
                }}
              >
                {zona ? zona.label : 'Todos los estados'}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content: mapa + panel */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 280px',
        gap: '24px',
        padding: '20px 32px 32px',
        alignItems: 'start',
      }}>

        {/* SVG Mapa */}
        <div style={{ position: 'relative' }}>
          {tooltip && estadosData[tooltip.id] && (
            <div style={{
              position: 'absolute',
              left: tooltip.x + 12,
              top: tooltip.y - 36,
              background: '#1C1C2E',
              color: '#fff',
              padding: '7px 12px',
              borderRadius: '10px',
              fontSize: '12px',
              fontWeight: '700',
              pointerEvents: 'none',
              zIndex: 10,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}>
              <span style={{ marginRight: '6px' }}>{estadosData[tooltip.id].nombre}</span>
              <span style={{ color: estadosData[tooltip.id].zonaColor, fontSize: '11px', fontWeight: '600' }}>
                {estadosData[tooltip.id].zona}
              </span>
            </div>
          )}

          <svg viewBox="0 0 959 593" style={{ width: '100%', height: 'auto', cursor: 'pointer', overflow: 'visible' }}>
            <defs>
              {/* Sombra dura debajo para simular elevación */}
              <filter id="sf-shadow" x="-40%" y="-40%" width="180%" height="180%">
                <feOffset in="SourceAlpha" dx="0" dy="14" result="offset" />
                <feGaussianBlur in="offset" stdDeviation="14" result="blurShadow" />
                <feFlood floodColor="#000000" floodOpacity="0.75" result="shadowColor" />
                <feComposite in="shadowColor" in2="blurShadow" operator="in" result="darkShadow" />
                <feMerge>
                  <feMergeNode in="darkShadow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Halo neón difuminado */}
              <filter id="sf-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="18" result="blur" />
              </filter>
            </defs>

            {/* Estados no seleccionados */}
            {mexicoEstadosPaths.filter(({ id }) => id !== selectedEstado).map(({ id, path }) => {
              const data = estadosData[id];
              if (!data) return null;
              const hovered = hoveredEstado === id;
              const fill = getStateColor(id, hovered, false, filtroZona);
              return (
                <path
                  key={id}
                  d={path}
                  fill={fill}
                  stroke={filtroZona !== 'Todos' && estadosData[id] && ZONAS[filtroZona] && !ZONAS[filtroZona].ids.includes(id) ? '#333333' : '#ffffff'}
                  strokeWidth="1.4"
                  style={{
                    transition: 'fill 0.22s ease, stroke 0.22s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    setHoveredEstado(id);
                    const rect = (e.currentTarget.closest('div') as HTMLElement).getBoundingClientRect();
                    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, id });
                  }}
                  onMouseMove={(e) => {
                    const rect = (e.currentTarget.closest('div') as HTMLElement).getBoundingClientRect();
                    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, id });
                  }}
                  onMouseLeave={() => { setHoveredEstado(null); setTooltip(null); }}
                  onClick={() => setSelectedEstado(prev => prev === id ? null : id)}
                />
              );
            })}

            {/* Estado seleccionado — efecto sci-fi */}
            {selectedEstado && (() => {
              const entry = mexicoEstadosPaths.find(({ id }) => id === selectedEstado);
              if (!entry) return null;
              const handlers = {
                onMouseEnter: (e: React.MouseEvent) => {
                  setHoveredEstado(entry.id);
                  const rect = (e.currentTarget.closest('div') as HTMLElement).getBoundingClientRect();
                  setTooltip({ x: (e as React.MouseEvent<SVGPathElement>).clientX - rect.left, y: (e as React.MouseEvent<SVGPathElement>).clientY - rect.top, id: entry.id });
                },
                onMouseMove: (e: React.MouseEvent) => {
                  const rect = (e.currentTarget.closest('div') as HTMLElement).getBoundingClientRect();
                  setTooltip({ x: (e as React.MouseEvent<SVGPathElement>).clientX - rect.left, y: (e as React.MouseEvent<SVGPathElement>).clientY - rect.top, id: entry.id });
                },
                onMouseLeave: () => { setHoveredEstado(null); setTooltip(null); },
                onClick: () => setSelectedEstado(null),
              };
              const scaleStyle: React.CSSProperties = {
                transformOrigin: 'center',
                transformBox: 'fill-box' as const,
                transform: 'scale(1.16)',
                cursor: 'pointer',
              };
              return (
                <g key={entry.id}>
                  {/* Halo neón pulsante (capa más abajo) */}
                  <path
                    d={entry.path}
                    fill={COLOR_SELECTED}
                    stroke="none"
                    filter="url(#sf-glow)"
                    style={{ ...scaleStyle, animation: 'neonPulse 1.8s ease-in-out infinite' }}
                  />
                  {/* Estado con sombra de profundidad */}
                  <path
                    d={entry.path}
                    fill={COLOR_SELECTED}
                    stroke="#ffffff"
                    strokeWidth="2"
                    filter="url(#sf-shadow)"
                    style={scaleStyle}
                    {...handlers}
                  />
                  {/* Borde neón brillante encima */}
                  <path
                    d={entry.path}
                    fill="none"
                    stroke={COLOR_SELECTED}
                    strokeWidth="4"
                    style={{ ...scaleStyle, animation: 'borderPulse 1.8s ease-in-out infinite', pointerEvents: 'none' }}
                  />
                </g>
              );
            })()}
          </svg>

          {/* Leyenda zonas */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
            {Object.entries(ZONAS).map(([key, z]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: z.color }} />
                <span style={{ fontSize: '11px', color: colores.textoMedio }}>{z.label}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: COLOR_SELECTED }} />
              <span style={{ fontSize: '11px', color: colores.textoMedio }}>Estado seleccionado</span>
            </div>
          </div>
        </div>

        {/* Panel lateral */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

          {detalle ? (
            <div style={{
              background: `linear-gradient(135deg, ${detalle.zonaColor}10 0%, ${detalle.zonaColor}05 100%)`,
              borderRadius: '20px',
              padding: '20px',
              border: `1px solid ${detalle.zonaColor}40`,
              animation: 'fadeInPanel 0.3s ease',
            }}>
              {/* Header estado */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <MapPin size={14} color={detalle.zonaColor} />
                    <span style={{ fontSize: '15px', fontWeight: '800', color: colores.textoClaro }}>
                      {detalle.nombre}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '10px', fontWeight: '700',
                    color: detalle.zonaColor,
                    background: `${detalle.zonaColor}15`,
                    padding: '2px 8px',
                    borderRadius: '12px',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.06em',
                  }}>
                    {detalle.zona}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEstado(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: colores.textoMedio, padding: '2px' }}
                >
                  <X size={14} />
                </button>
              </div>

              {/* Industria principal */}
              <div style={{
                background: `${detalle.zonaColor}18`,
                borderRadius: '12px',
                padding: '12px',
                marginBottom: '14px',
              }}>
                <p style={{ fontSize: '11px', fontWeight: '800', color: detalle.zonaColor, margin: '0 0 6px 0', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
                  Motor económico principal
                </p>
                <p style={{ fontSize: '14px', fontWeight: '700', color: colores.textoClaro, margin: '0 0 8px 0' }}>
                  {detalle.industria}
                </p>
                <p style={{ fontSize: '12px', color: colores.textoMedio, margin: 0, lineHeight: 1.55 }}>
                  {detalle.descripcion}
                </p>
              </div>

              {/* Soluciones IA */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                  <Zap size={13} color={COLOR_SELECTED} />
                  <span style={{ fontSize: '11px', fontWeight: '800', color: colores.textoClaro, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
                    Soluciones IA MAYiA
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {detalle.soluciones.map((s, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '8px',
                      background: colores.fondoSecundario,
                      borderRadius: '10px',
                      padding: '10px 12px',
                      border: `1px solid ${colores.borde}`,
                    }}>
                      <ChevronRight size={12} color={COLOR_SELECTED} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '12px', color: colores.textoMedio, lineHeight: 1.5 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div style={{
              background: colores.fondoSecundario,
              borderRadius: '20px',
              padding: '32px 20px',
              border: `1px solid ${colores.borde}`,
              textAlign: 'center',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: `${COLOR_SELECTED}20`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 14px',
              }}>
                <MapPin size={22} color={COLOR_SELECTED} />
              </div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: colores.textoClaro, margin: '0 0 6px 0' }}>
                Selecciona un estado
              </p>
              <p style={{ fontSize: '12px', color: colores.textoMedio, margin: 0, lineHeight: 1.55 }}>
                Descubre el motor económico y las soluciones de IA para cada region del pais.
              </p>
            </div>
          )}

          {/* Stats zonas */}
          <div style={{
            background: colores.fondoSecundario,
            borderRadius: '16px',
            padding: '16px',
            border: `1px solid ${colores.borde}`,
          }}>
            <p style={{ fontSize: '11px', fontWeight: '800', color: colores.textoClaro, margin: '0 0 12px 0', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
              Zonas Económicas
            </p>
            {Object.entries(ZONAS).map(([key, z]) => (
              <div
                key={key}
                onClick={() => setFiltroZona(filtroZona === key ? 'Todos' : key)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: `1px solid ${colores.borde}50`,
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: z.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', fontWeight: '600', color: filtroZona === key ? z.color : colores.textoMedio }}>
                    {z.label}
                  </span>
                </div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: z.color }}>
                  {z.ids.length} estados
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInPanel {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.75; }
        }
        @keyframes borderPulse {
          0%, 100% { opacity: 0.6; stroke-width: 3; }
          50%       { opacity: 1;   stroke-width: 6; }
        }
      `}</style>
    </div>
  );
};
