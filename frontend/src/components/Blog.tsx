import { useState } from 'react';
import { ArrowRight, Calendar, User, Tag, Search, Sparkles } from 'lucide-react';
import pdfAgentes from '../assets/news/Qué son los agentes de inteligencia artificial.pdf';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Qué son los agentes de inteligencia artificial',
    excerpt: 'Los agentes IA son sistemas capaces de percibir información, analizar contextos, tomar decisiones y ejecutar acciones de manera autónoma. Descubre cómo operan y benefician a las empresas.',
    category: 'Innovación',
    date: '22 Mayo 2026',
    author: 'Dulce Meza',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1170&auto=format&fit=crop',
    featured: true,
    url: pdfAgentes,
  },
  {
    id: 2,
    title: 'Ciberseguridad Proactiva: Más Allá del Antivirus Tradicional',
    excerpt: 'La Inteligencia Artificial permite predecir ataques antes de que sucedan. Conoce nuestro modelo de defensa neuronal distribuida.',
    category: 'Seguridad',
    date: '20 May 2026',
    author: 'Ing. Marcos Silva',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop',
    featured: false,
    url: '#',
  },
  {
    id: 3,
    title: 'Automatizando la Facturación con IA y WhatsApp',
    excerpt: 'Un caso de éxito de cómo reducir la fricción en el proceso de cobro mediante integraciones conversacionales inteligentes.',
    category: 'Casos de Éxito',
    date: '15 May 2026',
    author: 'Sofía Méndez',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop',
    featured: false,
    url: '#',
  },
  {
    id: 4,
    title: '¿Qué es un Empleado Digital y por qué necesitas uno?',
    excerpt: 'No es solo un chatbot. Es un agente cognitivo capaz de tomar decisiones, ejecutar flujos de trabajo y aprender continuamente.',
    category: 'Innovación',
    date: '10 May 2026',
    author: 'Equipo MAYiA',
    image: 'https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?q=80&w=1026&auto=format&fit=crop',
    featured: false,
    url: '#',
  },
];

const CATEGORIES = ['Todas', 'Tendencias', 'Seguridad', 'Casos de Éxito', 'Innovación', 'Noticias MAYiA'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const filteredPosts = activeCategory === 'Todas' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
  const gridPosts = filteredPosts.filter(p => p.id !== featuredPost?.id);

  return (
    <section className="relative w-full py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)' }}>
      
      {/* Background Decorators */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(164,217,85,0.1)' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(34,211,238,0.05)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(164,217,85,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.5 }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(164,217,85,0.15)', border: '1px solid rgba(164,217,85,0.3)' }}>
              <Sparkles size={16} className="text-lime-600 animate-pulse" />
              <span className="text-sm font-bold text-lime-700 tracking-wide uppercase">Insights & Conocimiento</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-400">MAYiA</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Explora las últimas tendencias en Inteligencia Artificial, descubrimientos tecnológicos y casos de éxito de cómo las empresas mexicanas están transformando su futuro.
            </p>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Buscar artículos..." 
                className="w-full md:w-64 pl-12 pr-4 py-3 rounded-2xl outline-none transition-all duration-300"
                style={{ background: '#ffffff', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              />
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-lime-600 transition-colors" />
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
              style={{
                background: activeCategory === category ? '#a4d955' : '#ffffff',
                color: activeCategory === category ? '#111827' : '#6b7280',
                border: `1px solid ${activeCategory === category ? '#84cc16' : '#e5e7eb'}`,
                boxShadow: activeCategory === category ? '0 8px 20px rgba(164,217,85,0.3)' : 'none',
                transform: activeCategory === category ? 'translateY(-2px)' : 'translateY(0)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post (Only if filtered list has it) */}
        {featuredPost && (
          <a href={featuredPost.url} target="_blank" rel="noopener noreferrer" className="block mb-12 group cursor-pointer" onMouseEnter={() => setHoveredPost(featuredPost.id)} onMouseLeave={() => setHoveredPost(null)}>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2" style={{ border: '1px solid #f3f4f6', boxShadow: hoveredPost === featuredPost.id ? '0 24px 50px rgba(164,217,85,0.15)' : '0 12px 30px rgba(0,0,0,0.04)' }}>
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-lime-100 text-lime-700 border border-lime-200 flex items-center gap-1.5">
                    <Tag size={12} /> {featuredPost.category}
                  </span>
                  <span className="text-sm font-semibold text-gray-400 flex items-center gap-1.5">
                    <Calendar size={14} /> {featuredPost.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-lime-600 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-white font-bold shadow-lg">
                      <User size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{featuredPost.author}</div>
                      <div className="text-xs text-gray-500">Autor</div>
                    </div>
                  </div>
                  <span className="flex items-center gap-2 text-lime-600 font-bold group-hover:translate-x-2 transition-transform">
                    Leer más <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {gridPosts.map(post => (
            <a 
              href={post.url}
              target={post.url !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:-translate-y-2 group"
              style={{ border: '1px solid #f3f4f6', boxShadow: hoveredPost === post.id ? '0 20px 40px rgba(164,217,85,0.1)' : '0 8px 20px rgba(0,0,0,0.03)' }}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur text-gray-900 shadow-sm border border-white/20">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5 mb-3">
                  <Calendar size={12} /> {post.date}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-lime-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <User size={14} className="text-lime-600" /> {post.author}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-lime-50 flex items-center justify-center text-lime-600 group-hover:bg-lime-600 group-hover:text-white transition-colors">
                    <ArrowRight size={16} className={hoveredPost === post.id ? '-rotate-45 transition-transform' : 'transition-transform'} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <Search size={32} className="text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No hay artículos</h3>
            <p className="text-gray-500">No encontramos artículos para la categoría "{activeCategory}".</p>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Blog;
