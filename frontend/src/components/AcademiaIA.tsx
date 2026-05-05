import { useState } from "react";
import { cursos } from "../data/cursosAcademia";
import type { Curso } from "../data/cursosAcademia";

const WA_URL = 'https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0';
const openWA = () => window.open(WA_URL, '_blank', 'noopener,noreferrer');

const AcademiaIA = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

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

  const col1Cursos = cursos.slice(0, 16);
  const col2Cursos = cursos.slice(16, 32);

  // Duplicar para el scroll infinito
  const infiniteCol1 = [...col1Cursos, ...col1Cursos];
  const infiniteCol2 = [...col2Cursos, ...col2Cursos];

  const CourseCard = ({ curso }: { curso: Curso }) => (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4 flex flex-col gap-2 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden shrink-0 w-full" onClick={openWA}>
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${curso.gradient} opacity-10 blur-xl group-hover:opacity-20 transition-opacity`}></div>
      <div className="flex items-start gap-3 relative z-10">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gradient-to-br ${curso.gradient} text-white shadow-sm`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={curso.icono} />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-lime-600 transition-colors">{curso.titulo}</h4>
          <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">{curso.descripcion}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-1 relative z-10">
        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold border ${getNivelColor(curso.nivel)}`}>{curso.nivel}</span>
        <span className="text-[10px] font-semibold text-gray-600 border border-gray-200 bg-gray-50 px-2 py-0.5 rounded-md">⏱️ {curso.duracion}</span>
      </div>
    </div>
  );

  return (
    <section id="academia" className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 lg:py-24 relative overflow-hidden">
      {/* Estilos para el scroll vertical infinito */}
      <style>{`
        @keyframes scrollVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollVerticalReverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-vertical {
          animation: scrollVertical 50s linear infinite;
        }
        .animate-marquee-vertical-reverse {
          animation: scrollVerticalReverse 50s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
        .mask-vertical-edges {
          mask-image: linear-gradient(to bottom, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 5%, black 95%, transparent);
        }
      `}</style>

      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e508_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e508_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16 h-full lg:h-[650px]">
          
          {/* COLUMNA IZQUIERDA: Header, Info y CTA */}
          <div className="flex-1 w-full lg:max-w-xl flex flex-col justify-center gap-8">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full mb-5 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-gray-700 tracking-wide">Formación Profesional en IA</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900">
                Academia <span className="bg-gradient-to-r from-lime-500 via-cyan-500 to-lime-500 bg-clip-text text-transparent">MAYiA®</span>
              </h2>

              <p className="text-sm md:text-base text-gray-600 max-w-lg mb-6 leading-relaxed">
                Formación especializada en Inteligencia Artificial aplicada a negocio, industria y sector público con los mejores expertos certificados del mercado.
              </p>

              {/* Stats Compactos */}
              <div className="flex flex-wrap gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm flex flex-col justify-center">
                    <span className="text-lg font-bold text-gray-900">{stat.value}</span>
                    <span className="text-[10px] text-gray-500 font-semibold uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`relative bg-white border rounded-xl p-4 transition-all duration-300 ${
                    hoveredFeature === feature.id
                      ? 'border-lime-400 shadow-md transform -translate-y-0.5'
                      : 'border-gray-100 shadow-sm'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center mb-2`}>
                    <svg className={`w-4 h-4 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-0.5">{feature.title}</h4>
                  <p className="text-[11px] text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Final Compacto */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={openWA} className="group relative bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 shadow-lg flex-1 flex items-center justify-center">
                Clase Demo Gratuita
                <svg className="w-4 h-4 ml-2 text-lime-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <div className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 rounded-xl border border-gray-200">
                <svg className="w-5 h-5 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-semibold text-gray-600">Certificación Internacional</span>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: Catálogo de Cursos Infinito */}
          <div className="flex-1 w-full h-[500px] lg:h-full relative mask-vertical-edges flex gap-4 overflow-hidden rounded-2xl bg-gray-50/50 p-2">
            {/* Gradientes laterales o sombras decorativas */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-inner z-20"></div>

            {/* Columna 1 - Sube */}
            <div className="flex-1 flex flex-col gap-4 animate-marquee-vertical pause-on-hover">
              {infiniteCol1.map((curso, idx) => (
                <CourseCard key={`col1-${curso.id}-${idx}`} curso={curso} />
              ))}
            </div>

            {/* Columna 2 - Baja */}
            <div className="flex-1 flex flex-col gap-4 animate-marquee-vertical-reverse pause-on-hover">
              {infiniteCol2.map((curso, idx) => (
                <CourseCard key={`col2-${curso.id}-${idx}`} curso={curso} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademiaIA;