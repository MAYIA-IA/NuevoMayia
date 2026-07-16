import { useState, useEffect } from "react";
import { ArrowRight, Calendar, User, Tag, Search, Sparkles } from "lucide-react";
import ArticleModal, { type BlogPost } from "./ArticleModal";
import mayiaLakeBanner from "../assets/MAYIA_LAKE_BANNER.jpg.jpeg";
import mxBanner from "../assets/MX_BANNER.jpg";
import origenBanner from "../assets/ORIGEN_BANNER.jpg.jpeg";
import squadsBanner from "../assets/SQUADS_BANNER.jpg.jpeg";
import agentesBanner from "../assets/AGENTES_BANNER.jpeg";
import empresBanner from "../assets/EMPRES_BANNER.jpg";
import agentes2Banner from "../assets/AGENTES_2_BANNER.jpeg";

const imageMap: Record<string, string> = {
  agentesBanner,
  empresBanner,
  agentes2Banner,
  mayiaLakeBanner,
  mxBanner,
  origenBanner,
  squadsBanner,
};

const CATEGORIES = ["Todas", "Innovacion", "IA Empresarial", "Infraestructura", "Datos & IA"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    import("../data/blogPosts.json").then((module) => {
      const rawPosts = module.default as any[];
      const mapped = rawPosts.map((post) => ({
        ...post,
        image: imageMap[post.image] || post.image,
      }));
      setPosts(mapped);
    });
  }, []);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = activeCategory === "Todas"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <>
      {selectedPost && (
        <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}

      <section className="relative w-full py-8 overflow-hidden" style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)" }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(164,217,85,0.1)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(34,211,238,0.05)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(164,217,85,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5 }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: "rgba(164,217,85,0.15)", border: "1px solid rgba(164,217,85,0.3)" }}>
                <Sparkles size={14} className="text-lime-600 animate-pulse" />
                <span className="text-xs font-bold text-lime-700 tracking-wide uppercase">Insights & Conocimiento</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-400">MAYiA</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed">
                Explora las ultimas tendencias en Inteligencia Artificial, descubrimientos tecnologicos y casos de exito de como las empresas mexicanas estan transformando su futuro.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="relative group">
                <input type="text" placeholder="Buscar articulos..." className="w-full md:w-64 pl-12 pr-4 py-3 rounded-2xl outline-none transition-all duration-300" style={{ background: "#ffffff", border: "1px solid #e5e7eb", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }} />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-lime-600 transition-colors" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {CATEGORIES.map(category => (
              <button key={category} onClick={() => setActiveCategory(category)} className="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300" style={{
                background: activeCategory === category ? "#a4d955" : "#ffffff",
                color: activeCategory === category ? "#111827" : "#6b7280",
                border: `1px solid ${activeCategory === category ? "#84cc16" : "#e5e7eb"}`,
                boxShadow: activeCategory === category ? "0 8px 20px rgba(164,217,85,0.3)" : "none",
                transform: activeCategory === category ? "translateY(-2px)" : "translateY(0)"
              }}>
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPosts.map(post => (
              <div key={post.id} onClick={() => setSelectedPost(post)} className="bg-white rounded-3xl overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:-translate-y-2 group"
                style={{ border: "1px solid #f3f4f6", boxShadow: hoveredPost === post.id ? "0 20px 40px rgba(164,217,85,0.1)" : "0 8px 20px rgba(0,0,0,0.03)" }}
                onMouseEnter={() => setHoveredPost(post.id)} onMouseLeave={() => setHoveredPost(null)}>
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" style={{ objectPosition: post.imagePosition || "center" }} />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur text-gray-900 shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5 mb-2">
                    <Calendar size={11} /> {post.date}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-lime-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                      <User size={12} className="text-lime-600" /> {post.author}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-lime-50 flex items-center justify-center text-lime-600 group-hover:bg-lime-600 group-hover:text-white transition-colors">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto rounded-full bg-gray-50 flex items-center justify-center mb-6">
                <Search size={32} className="text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No hay articulos</h3>
              <p className="text-gray-500">No encontramos articulos para la categoria "{activeCategory}".</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
