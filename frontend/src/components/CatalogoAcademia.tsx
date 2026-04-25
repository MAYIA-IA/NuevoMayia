import { useState, useEffect, useRef } from 'react';

interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  nivel: 'PRINCIPIANTE' | 'INTERMEDIO' | 'AVANZADO';
  categoria: 'NEGOCIOS' | 'TECH';
  gradient: string;
  icono: string;
}

interface CatalogoAcademiaProps {
  isOpen: boolean;
  onClose: () => void;
}

const CatalogoAcademia = ({ isOpen, onClose }: CatalogoAcademiaProps) => {
  const [filtroCategoria, setFiltroCategoria] = useState<'TODOS' | 'NEGOCIOS' | 'TECH'>('TODOS');
  const [filtroNivel, setFiltroNivel] = useState<'TODOS' | 'PRINCIPIANTE' | 'INTERMEDIO' | 'AVANZADO'>('TODOS');
  const [busqueda, setBusqueda] = useState('');
  const savedScrollY = useRef(0);

  const cursos: Curso[] = [
    // Cursos de Negocios
    {
      id: 1,
      titulo: 'Fundamentos del Prompting',
      descripcion: 'Aprende ingeniería de prompts efectivos y casos de uso técnico',
      duracion: '4 HORAS',
      nivel: 'PRINCIPIANTE',
      categoria: 'NEGOCIOS',
      gradient: 'from-blue-500 to-cyan-500',
      icono: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
    },
    {
      id: 2,
      titulo: 'IA para Trabajo Inteligente',
      descripcion: 'Integra IA en procesos de trabajo, automatización y gestión',
      duracion: '25 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'NEGOCIOS',
      gradient: 'from-green-500 to-emerald-500',
      icono: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      id: 3,
      titulo: 'Comunicación Efectiva en Equipo',
      descripcion: 'Fortalece comunicación en reuniones y transmisión de información',
      duracion: '10 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'NEGOCIOS',
      gradient: 'from-purple-500 to-pink-500',
      icono: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
    },
    {
      id: 4,
      titulo: 'Priorización y Delegación',
      descripcion: 'Estrategias para priorizar y delegar efectivamente',
      duracion: '10 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'NEGOCIOS',
      gradient: 'from-orange-500 to-red-500',
      icono: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
    },
    {
      id: 5,
      titulo: 'IA para Gerentes',
      descripcion: 'Acelera adopción de IA: fundamentos, ROI y gobernanza',
      duracion: '30 HORAS',
      nivel: 'AVANZADO',
      categoria: 'NEGOCIOS',
      gradient: 'from-lime-500 to-green-600',
      icono: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      id: 6,
      titulo: 'Gestión del Cambio',
      descripcion: 'Reduce resistencia y fomenta innovación en procesos',
      duracion: '15 HORAS',
      nivel: 'AVANZADO',
      categoria: 'NEGOCIOS',
      gradient: 'from-cyan-500 to-blue-600',
      icono: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    },
    {
      id: 7,
      titulo: 'Toma de Decisiones Estratégicas',
      descripcion: 'Decisiones basadas en datos alineadas al negocio',
      duracion: '6 HORAS',
      nivel: 'AVANZADO',
      categoria: 'NEGOCIOS',
      gradient: 'from-indigo-500 to-purple-600',
      icono: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
      id: 8,
      titulo: 'Optimización de Procesos',
      descripcion: 'Mejora desempeño y eficiencia de equipos',
      duracion: '12 HORAS',
      nivel: 'AVANZADO',
      categoria: 'NEGOCIOS',
      gradient: 'from-yellow-500 to-orange-600',
      icono: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      id: 9,
      titulo: 'Desarrollo de Talento Humano',
      descripcion: 'Gestión de talento, cultura y contratación',
      duracion: '15 HORAS',
      nivel: 'AVANZADO',
      categoria: 'NEGOCIOS',
      gradient: 'from-pink-500 to-rose-600',
      icono: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
    },
    // Cursos Tech
    {
      id: 10,
      titulo: 'Programación Asistida por IA',
      descripcion: 'Código, pruebas y optimización con agentes de IA',
      duracion: '20 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'TECH',
      gradient: 'from-green-600 to-teal-600',
      icono: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      id: 11,
      titulo: 'Django REST Framework',
      descripcion: 'Diseña APIs robustas con autenticación',
      duracion: '40 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-emerald-600 to-green-700',
      icono: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      id: 12,
      titulo: 'Python Fundamentos',
      descripcion: 'Sintaxis, bucles, funciones y proyectos reales',
      duracion: '30 HORAS',
      nivel: 'PRINCIPIANTE',
      categoria: 'TECH',
      gradient: 'from-blue-600 to-indigo-600',
      icono: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      id: 13,
      titulo: 'Django Web Development',
      descripcion: 'Aplicaciones dinámicas y lógica de negocios',
      duracion: '20 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'TECH',
      gradient: 'from-cyan-600 to-blue-700',
      icono: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
    },
    {
      id: 14,
      titulo: 'Docker para Python',
      descripcion: 'Contenerización y orquestación con Docker',
      duracion: '10 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'TECH',
      gradient: 'from-sky-600 to-blue-700',
      icono: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      id: 15,
      titulo: 'Fundamentos de LLMs',
      descripcion: 'Prompting, RAG y LLMs de código abierto',
      duracion: '30 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-purple-600 to-pink-600',
      icono: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      id: 16,
      titulo: 'Flask Web Apps',
      descripcion: 'Framework Flask y construcción de API REST',
      duracion: '16 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'TECH',
      gradient: 'from-gray-600 to-gray-800',
      icono: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      id: 17,
      titulo: 'SQL Básico',
      descripcion: 'Gestión de bases de datos y consultas',
      duracion: '30 HORAS',
      nivel: 'PRINCIPIANTE',
      categoria: 'TECH',
      gradient: 'from-orange-600 to-amber-700',
      icono: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
    },
    {
      id: 18,
      titulo: 'SQL Avanzado',
      descripcion: 'Análisis complejo y métricas de negocio',
      duracion: '30 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-red-600 to-orange-700',
      icono: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
    },
    {
      id: 19,
      titulo: 'Machine Learning Fundamentos',
      descripcion: 'Modelos predictivos con Scikit-learn',
      duracion: '40 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'TECH',
      gradient: 'from-violet-600 to-purple-700',
      icono: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      id: 20,
      titulo: 'Computer Vision',
      descripcion: 'Clasificación de imágenes con redes neuronales',
      duracion: '40 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-fuchsia-600 to-pink-700',
      icono: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
    },
    {
      id: 21,
      titulo: 'Tableau Visualización',
      descripcion: 'Dashboards e informes interactivos',
      duracion: '25 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'TECH',
      gradient: 'from-blue-500 to-cyan-600',
      icono: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
      id: 22,
      titulo: 'Data Wrangling',
      descripcion: 'Limpieza y transformación de datos',
      duracion: '25 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'TECH',
      gradient: 'from-teal-600 to-cyan-700',
      icono: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      id: 23,
      titulo: 'Álgebra Lineal',
      descripcion: 'Fundamentos para ciencia de datos',
      duracion: '40 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-indigo-600 to-blue-700',
      icono: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    {
      id: 24,
      titulo: 'ML para Textos',
      descripcion: 'Análisis de sentimientos y BERT',
      duracion: '40 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-rose-600 to-pink-700',
      icono: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
    },
    {
      id: 25,
      titulo: 'ML para Negocios',
      descripcion: 'Aplicación de ML a problemas empresariales',
      duracion: '40 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-lime-600 to-green-700',
      icono: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      id: 26,
      titulo: 'Métodos Numéricos en ML',
      descripcion: 'Descenso por gradiente y boosting',
      duracion: '30 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-amber-600 to-orange-700',
      icono: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    {
      id: 27,
      titulo: 'Habilidades Blandas',
      descripcion: 'Pensamiento crítico y comunicación',
      duracion: '2.5 HORAS',
      nivel: 'PRINCIPIANTE',
      categoria: 'TECH',
      gradient: 'from-pink-500 to-rose-600',
      icono: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
    },
    {
      id: 28,
      titulo: 'Análisis Estadístico',
      descripcion: 'Métodos estadísticos y prueba de hipótesis',
      duracion: '40 HORAS',
      nivel: 'INTERMEDIO',
      categoria: 'TECH',
      gradient: 'from-slate-600 to-gray-700',
      icono: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      id: 29,
      titulo: 'Aprendizaje Supervisado',
      descripcion: 'Optimización de hiperparámetros y métricas',
      duracion: '40 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-emerald-600 to-teal-700',
      icono: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
      id: 30,
      titulo: 'Python para Análisis',
      descripcion: 'Variables, bucles, Pandas y preprocesamiento',
      duracion: '32 HORAS',
      nivel: 'PRINCIPIANTE',
      categoria: 'TECH',
      gradient: 'from-sky-600 to-blue-700',
      icono: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      id: 31,
      titulo: 'Series Temporales',
      descripcion: 'Tendencias, estacionalidad y pronósticos',
      duracion: '30 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-cyan-600 to-teal-700',
      icono: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
    },
    {
      id: 32,
      titulo: 'Aprendizaje No Supervisado',
      descripcion: 'K-means y detección de anomalías',
      duracion: '30 HORAS',
      nivel: 'AVANZADO',
      categoria: 'TECH',
      gradient: 'from-violet-600 to-indigo-700',
      icono: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
    },
  ];

  // Control del scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      savedScrollY.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollY.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, savedScrollY.current);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Filtrar cursos
  const cursosFiltrados = cursos.filter((curso) => {
    const matchCategoria = filtroCategoria === 'TODOS' || curso.categoria === filtroCategoria;
    const matchNivel = filtroNivel === 'TODOS' || curso.nivel === filtroNivel;
    const matchBusqueda = curso.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                          curso.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchNivel && matchBusqueda;
  });

  // Agrupar por categoría
  const cursosNegocios = cursosFiltrados.filter(c => c.categoria === 'NEGOCIOS');
  const cursosTech = cursosFiltrados.filter(c => c.categoria === 'TECH');

  // Función para obtener el color del badge según el nivel
  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'PRINCIPIANTE':
        return 'bg-green-500 text-white';
      case 'INTERMEDIO':
        return 'bg-yellow-500 text-gray-900';
      case 'AVANZADO':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Contenedor principal con scroll */}
      <div className="relative h-full overflow-y-auto">
        {/* Header fijo */}
        <div className="sticky top-0 z-20 bg-gradient-to-b from-gray-900 via-gray-900/95 to-transparent backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  Catálogo de Cursos
                </h2>
                <p className="text-lg text-gray-400">
                  Academia <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent font-bold">MAYiA®</span>
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Filtros y búsqueda */}
            <div className="mt-6 space-y-4">
              {/* Barra de búsqueda */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar cursos..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Filtros */}
              <div className="flex flex-wrap gap-3">
                {/* Filtro de categoría */}
                <div className="flex gap-2">
                  {(['TODOS', 'NEGOCIOS', 'TECH'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFiltroCategoria(cat)}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        filtroCategoria === cat
                          ? 'bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 shadow-lg scale-105'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                      }`}
                    >
                      {cat === 'TODOS' ? '📚 Todos' : cat === 'NEGOCIOS' ? '💼 Negocios' : '💻 Tech'}
                    </button>
                  ))}
                </div>

                {/* Filtro de nivel */}
                <div className="flex gap-2">
                  {(['TODOS', 'PRINCIPIANTE', 'INTERMEDIO', 'AVANZADO'] as const).map((niv) => (
                    <button
                      key={niv}
                      onClick={() => setFiltroNivel(niv)}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        filtroNivel === niv
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                      }`}
                    >
                      {niv === 'TODOS' ? 'Todos los niveles' : niv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contador de resultados */}
              <div className="text-gray-400 text-sm">
                Mostrando <span className="text-white font-semibold">{cursosFiltrados.length}</span> de {cursos.length} cursos
              </div>
            </div>
          </div>
        </div>

        {/* Contenido del catálogo */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" onClick={(e) => e.stopPropagation()}>
          {/* Sección Cursos de Negocios */}
          {(filtroCategoria === 'TODOS' || filtroCategoria === 'NEGOCIOS') && cursosNegocios.length > 0 && (
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Cursos de Negocios</h3>
                  <p className="text-gray-400">Desarrolla habilidades de liderazgo y gestión con IA</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 [&>*]:will-change-transform">
                {cursosNegocios.map((curso) => (
                  <div
                    key={curso.id}
                    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-700 hover:border-lime-400"
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${curso.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Content */}
                    <div className="relative p-6 space-y-4">
                      {/* Header con ícono y badges */}
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 bg-gradient-to-br ${curso.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={curso.icono} />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getNivelColor(curso.nivel)}`}>
                            {curso.nivel}
                          </span>
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-semibold">
                            ⏱️ {curso.duracion}
                          </span>
                        </div>
                      </div>

                      {/* Título y descripción */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                          {curso.titulo}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {curso.descripcion}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4 border-t border-gray-700">
                        <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer')} className="w-full bg-gradient-to-r from-lime-400 to-cyan-500 hover:from-lime-500 hover:to-cyan-600 text-gray-900 font-bold py-3 px-4 rounded-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
                          Inscribirme
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${curso.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sección Cursos Tech */}
          {(filtroCategoria === 'TODOS' || filtroCategoria === 'TECH') && cursosTech.length > 0 && (
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Cursos Tech</h3>
                  <p className="text-gray-400">Domina tecnologías de IA, ML y desarrollo</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 [&>*]:will-change-transform">
                {cursosTech.map((curso) => (
                  <div
                    key={curso.id}
                    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-700 hover:border-cyan-400"
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${curso.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Content */}
                    <div className="relative p-6 space-y-4">
                      {/* Header con ícono y badges */}
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 bg-gradient-to-br ${curso.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={curso.icono} />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getNivelColor(curso.nivel)}`}>
                            {curso.nivel}
                          </span>
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-semibold">
                            ⏱️ {curso.duracion}
                          </span>
                        </div>
                      </div>

                      {/* Título y descripción */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {curso.titulo}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {curso.descripcion}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4 border-t border-gray-700">
                        <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
                          Ver detalles
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${curso.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mensaje cuando no hay resultados */}
          {cursosFiltrados.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No se encontraron cursos</h3>
              <p className="text-gray-400 mb-6">Intenta ajustar los filtros o la búsqueda</p>
              <button
                onClick={() => {
                  setFiltroCategoria('TODOS');
                  setFiltroNivel('TODOS');
                  setBusqueda('');
                }}
                className="bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform"
              >
                Limpiar filtros
              </button>
            </div>
          )}

          {/* CTA al final del catálogo */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para empezar tu formación?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Agenda una clase demo gratuita y descubre cómo la IA puede transformar tu carrera
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-lime-400 to-cyan-500 hover:from-lime-500 hover:to-cyan-600 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Clase demo gratuita
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button
                onClick={onClose}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                Cerrar catálogo
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Certificación incluida</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Grupos reducidos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Instructores certificados</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        /* Custom scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a3e635, #22d3ee);
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #84cc16, #06b6d4);
        }
      `}</style>
    </div>
  );
};

export default CatalogoAcademia;