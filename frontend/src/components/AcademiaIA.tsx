import { useState } from "react";
import { Clock } from "lucide-react";
import { cursos } from "../data/cursosAcademia";
import type { Curso } from "../data/cursosAcademia";
import academiaLogo from "../assets/logosNativos/academia-horizontal.png";

const WA_URL = 'https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0';
const openWA = () => window.open(WA_URL, '_blank', 'noopener,noreferrer');

const AcademiaIA = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [expandedCourseId, setExpandedCourseId] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Certificaciones",
      description: "Programas avalados.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Expertos",
      description: "Instructores élite.",
      color: "from-lime-500 to-green-600"
    },
    {
      id: 3,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "Casos Reales",
      description: "Proyectos prácticos.",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Implementación",
      description: "Directo a producción.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const stats = [
    { value: "500+", label: "Empresas capacitadas" },
    { value: "95%", label: "Satisfacción" },
    { value: "2,000+", label: "Certificados" },
  ];

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'PRINCIPIANTE': return 'bg-green-100 text-green-700 border-green-200';
      case 'INTERMEDIO': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'AVANZADO': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const todosLosCursos = cursos;
  const cursosVisibles = showAllCourses ? todosLosCursos : todosLosCursos.slice(0, 3);

  const CourseCard = ({ curso }: { curso: Curso }) => {
    const isExpanded = expandedCourseId === curso.id;
    
    return (
      <div 
        className={`bg-white rounded-xl p-4 shadow-sm border transition-all duration-300 flex flex-col group cursor-pointer relative overflow-hidden w-full shrink-0 min-h-[90px]
          ${isExpanded ? 'border-lime-300 ring-2 ring-lime-400/20 shadow-md' : 'border-gray-100 hover:shadow-lg hover:border-gray-200'}
        `}
        onClick={() => !isExpanded && setExpandedCourseId(curso.id)}
      >
        <div className={`absolute top-0 right-0 w-32 h-full bg-gradient-to-l ${curso.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
        
        {/* Header content: Logo, Title, Badges */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full relative z-10">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${curso.gradient} text-white shadow-sm group-hover:scale-105 transition-transform`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={curso.icono} />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm lg:text-base font-bold text-gray-900 leading-tight group-hover:text-lime-600 transition-colors truncate">{curso.titulo}</h4>
              <p className={`text-xs text-gray-500 mt-1 transition-all ${isExpanded ? 'hidden' : 'line-clamp-1'}`}>{curso.descripcion}</p>
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto relative z-10 shrink-0 gap-2">
            <span className={`text-[9px] px-2 py-1 rounded-md font-bold border ${getNivelColor(curso.nivel)} uppercase tracking-wider whitespace-nowrap`}>{curso.nivel}</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100 whitespace-nowrap">
              <Clock size={12} className="group-hover:rotate-12 transition-transform duration-300 text-lime-500 shrink-0" /> {curso.duracion}
            </span>
          </div>
        </div>

        {/* Expanded Content Area */}
        <div className={`overflow-hidden transition-all duration-500 flex flex-col relative z-10 ${isExpanded ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 border-t border-gray-100">
            <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Resumen del curso</h5>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{curso.descripcion}</p>
            
            <div className="flex items-center justify-between">
              <button onClick={(e) => { e.stopPropagation(); setExpandedCourseId(null); }} className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 hover:text-gray-600 uppercase tracking-wider transition-colors p-2 -ml-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                Cerrar
              </button>
              
              <button onClick={(e) => { e.stopPropagation(); openWA(); }} className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 text-white rounded-lg text-xs font-bold transition-all hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(0,0,0,0.15)] whitespace-nowrap">
                Inscribirme
                <svg className="w-4 h-4 text-lime-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.01 2.013c-5.506 0-9.974 4.468-9.974 9.974 0 1.764.461 3.486 1.336 5.006L2.013 21.99l5.127-1.344a9.904 9.904 0 004.87 1.268h.004c5.505 0 9.972-4.469 9.972-9.975 0-2.668-1.039-5.177-2.925-7.065-1.888-1.888-4.398-2.927-7.065-2.927zm5.955 14.331c-.247.697-1.428 1.337-1.992 1.405-.515.06-1.18.15-3.376-.757-2.652-1.096-4.356-3.805-4.488-3.98-.133-.176-1.074-1.43-1.074-2.73 0-1.3.67-1.944.912-2.203.242-.259.525-.324.701-.324.175 0 .351.002.508.01.164.007.382-.065.597.457.227.55 .772 1.886.843 2.027.07.142.117.307.03.52-.087.213-.133.344-.265.5-.132.155-.28.329-.401.455-.132.134-.271.282-.12.544.152.26.674 1.112 1.446 1.8.995.888 1.825 1.166 2.086 1.299.26.133.413.113.565-.044.153-.158.658-.767.834-1.03.175-.262.35-.218.59-.126.24.092 1.516.716 1.776.845.26.13.434.195.496.303.062.108.062.63-.185 1.327z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="academia" className="w-full bg-white relative overflow-hidden lg:h-[80vh] lg:min-h-[600px] flex items-center py-12 lg:py-0">
      {/* Estilos para el scroll vertical invisible */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { scrollbar-width: none; }
      `}</style>

      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
          
          {/* COLUMNA IZQUIERDA: Header, Info y CTA */}
          <div className="flex-1 w-full lg:max-w-xl xl:max-w-2xl flex flex-col justify-center gap-6 min-w-0">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full mb-4 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] lg:text-xs font-bold text-gray-600 uppercase tracking-wider">Formación Profesional en IA</span>
              </div>

              <div className="mb-4">
                <img src={academiaLogo} alt="Academia MAYiA" className="h-10 lg:h-14 xl:h-16 object-contain" />
              </div>

              <p className="text-sm lg:text-base text-gray-500 max-w-lg mb-6 leading-relaxed">
                Formación especializada en Inteligencia Artificial aplicada a negocio, industria y sector público con los mejores expertos certificados del mercado.
              </p>

              {/* Stats Compactos */}
              <div className="flex flex-wrap gap-3">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 flex flex-col justify-center">
                    <span className="text-base lg:text-lg font-bold text-gray-900 leading-tight">{stat.value}</span>
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Final */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-6 relative z-20">
              <button onClick={openWA} className="group relative bg-gray-900 hover:bg-black text-white font-bold py-4 px-8 rounded-xl text-sm transition-all shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center whitespace-nowrap w-full sm:w-auto hover:-translate-y-0.5">
                Clase Demo Gratuita
                <svg className="w-4 h-4 ml-2 text-lime-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <div className="flex items-center justify-center gap-2.5 px-6 py-4 bg-white rounded-xl border border-gray-100 shadow-sm w-full sm:w-auto shrink-0">
                <div className="w-8 h-8 rounded-full bg-lime-50 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-lime-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">Avalado por</span>
                  <span className="text-sm font-bold text-gray-800 leading-none whitespace-nowrap">Certificación Internacional</span>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: Catálogo de Cursos Vertica (Scrollable) */}
          <div className="flex-1 w-full lg:max-w-2xl min-w-0 bg-gray-50/50 rounded-3xl p-4 lg:p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Catálogo de Cursos</h3>
              <span className="text-[10px] font-bold text-gray-500 bg-white px-2 py-1 rounded-md border border-gray-200">{todosLosCursos.length} Disponibles</span>
            </div>

            {/* Contenedor de Cursos con Scroll Dinámico */}
            <div className={`flex flex-col gap-3 overflow-y-auto hide-scrollbar transition-all duration-500 pr-2 ${showAllCourses ? 'max-h-[500px]' : 'max-h-[350px] lg:max-h-[400px]'}`}>
              {cursosVisibles.map((curso) => (
                <CourseCard key={curso.id} curso={curso} />
              ))}
              
              {/* Degradado inferior sutil si hay scroll */}
              {showAllCourses && (
                 <div className="sticky bottom-0 w-full h-8 bg-gradient-to-t from-gray-50/90 to-transparent pointer-events-none"></div>
              )}
            </div>

            {/* Botón de alternancia */}
            <div className="mt-4 flex justify-center">
              <button 
                onClick={() => setShowAllCourses(!showAllCourses)}
                className="bg-white hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-6 rounded-lg text-xs transition-colors border border-gray-200 shadow-sm flex items-center gap-2 group"
              >
                {showAllCourses ? 'Ocultar catálogo' : `Ver todos los cursos (${todosLosCursos.length - 3} más)`}
                <svg className={`w-4 h-4 text-gray-400 group-hover:text-lime-500 transition-transform ${showAllCourses ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademiaIA;