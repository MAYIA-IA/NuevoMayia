import { useState } from "react";
import imgProfesor from '../assets/AcademiaIA/Profesor.png';
import CatalogoAcademia from "./CatalogoAcademia";


const AcademiaIA = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const features = [
    {
      id: 1,
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Certificaciones",
      description: "Programas certificados en IA empresarial",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Expertos",
      description: "Instructores con experiencia real en industria",
      color: "from-lime-500 to-green-600"
    },
    {
      id: 3,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "Casos Reales",
      description: "Proyectos basados en problemas de negocio",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Implementación",
      description: "De la teoría a producción en 8 semanas",
      color: "from-orange-500 to-red-600"
    }
  ];

  const courses = [
    { name: "IA para Negocios", duration: "4 semanas", level: "Ejecutivo" },
    { name: "Machine Learning Aplicado", duration: "8 semanas", level: "Técnico" },
    { name: "MLOps en Producción", duration: "6 semanas", level: "Avanzado" },
    { name: "IA Ética y Gobernanza", duration: "3 semanas", level: "Gerencial" }
  ];

  const stats = [
    { value: "500+", label: "Empresas capacitadas" },
    { value: "95%", label: "Tasa de satisfacción" },
    { value: "2,000+", label: "Profesionales certificados" },
    { value: "4.8/5", label: "Rating promedio" }
  ];

  return (
    <section id="academia" className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-20 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e508_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e508_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Formación Profesional en IA</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
            Academia
          </h1>
          
          <div className="relative inline-block mb-6">
            <h2 className="text-6xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
                MAYiA
              </span>
              <span className="text-3xl lg:text-5xl align-super text-cyan-600 ml-2">®</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 rounded-full shadow-xl border border-lime-400/30 mb-6">
            <span className="text-2xl lg:text-3xl font-bold text-lime-400">
              Profesores
            </span>
            <span className="text-2xl lg:text-3xl font-bold text-white">
              IA
            </span>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Formación especializada en Inteligencia Artificial aplicada a negocio, 
            industria y sector público con expertos certificados
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Left - Features Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir Academia MAYiA?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`group relative bg-white border-2 rounded-2xl p-6 transition-all duration-500 cursor-pointer ${
                    hoveredFeature === feature.id
                      ? 'border-lime-400 shadow-2xl scale-105'
                      : 'border-gray-200 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Icono */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className={`w-6 h-6 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>

                  {/* Contenido */}
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Línea decorativa */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform transition-transform duration-500 ${
                    hoveredFeature === feature.id ? 'scale-x-100' : 'scale-x-0'
                  } origin-left`}></div>
                </div>
              ))}
            </div>

            {/* Cursos populares */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 mt-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                Cursos Populares
              </h4>
              <div className="space-y-3">
                {courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:border-lime-400 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-cyan-700 transition-colors">
                        {course.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {course.duration} • {course.level}
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-lime-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Logo y Stats */}
          <div className="flex flex-col items-center justify-center">
            {/* Logo Container */}
            <div className="relative mb-8">
              {/* Marco decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0a1f44] to-black rounded-3xl blur-xl opacity-40"></div>
              
              {/* Contenedor principal */}
              <div className="relative bg-gradient-to-br from-gray-900 via-[#0a1f44] to-black rounded-3xl p-8 shadow-2xl border-2 border-gray-700 overflow-hidden group">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Logo */}
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-inner transform transition-all duration-500 group-hover:scale-105">
                  <img
                    src={imgProfesor}
                    alt="ProfesorIA"
                    className="w-64 h-64 lg:w-80 lg:h-80 object-contain filter drop-shadow-lg"
                  />
                </div>
                
                {/* Badge */}
                <div className="relative z-10 mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg border border-lime-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Hecho en México</span>
                  </div>
                </div>

                {/* Esquinas decorativas */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-lime-400 rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-lime-400 rounded-bl-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-4 text-center hover:border-lime-400 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-lime-400 to-cyan-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Efectos de fondo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                ¿Listo para transformar tu equipo?
              </h3>
              <p className="text-lg text-gray-300 mb-6 md:mb-0">
                Inicia con una clase demo gratuita y descubre cómo la IA puede impulsar tu negocio
              </p>

              {/* Trust badges inline */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Certificado incluido</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Grupos reducidos</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-lime-400 to-cyan-400 hover:from-lime-500 hover:to-cyan-500 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-xl whitespace-nowrap">
                <span className="relative z-10 flex items-center gap-2">
                  Clase demo gratuita
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 border border-white/20 hover:border-white/40 whitespace-nowrap" onClick={() => setCatalogOpen(true)}>
                Ver catálogo
              </button>

              {/* Visualizar catalogo en el componente aparte */}
              
              <CatalogoAcademia 
              isOpen={catalogOpen}
              onClose={() => setCatalogOpen(false)}
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademiaIA;