import { useEffect } from "react";
import { X, Calendar, User, Tag, ArrowLeft, Clock } from "lucide-react";

export interface ArticleSection {
  type: "heading" | "subheading" | "paragraph" | "bullets" | "quote" | "highlight";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  featured: boolean;
  readTime?: string;
  content: ArticleSection[];
}

interface ArticleModalProps {
  post: BlogPost;
  onClose: () => void;
}

export default function ArticleModal({ post, onClose }: ArticleModalProps) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)",
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        animation: "fadeInOverlay 0.25s ease",
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <style>{`
        @keyframes fadeInOverlay { from { opacity:0; } to { opacity:1; } }
        @keyframes slideUpModal { from { transform:translateY(40px); opacity:0; } to { transform:translateY(0); opacity:1; } }
        .art-scroll::-webkit-scrollbar { width:4px; }
        .art-scroll::-webkit-scrollbar-track { background:#f1f5f9; }
        .art-scroll::-webkit-scrollbar-thumb { background:#a4d955; border-radius:8px; }
      `}</style>

      <div className="art-scroll" style={{
        width:"100%", maxWidth:820, height:"100vh",
        background:"#ffffff",
        boxShadow:"0 32px 80px rgba(0,0,0,0.35)",
        display:"flex", flexDirection:"column",
        animation:"slideUpModal 0.3s cubic-bezier(0.22,1,0.36,1)",
        overflowY:"auto", position:"relative",
      }}>
        <div style={{
          position:"sticky", top:0, zIndex:10,
          background:"rgba(255,255,255,0.95)", backdropFilter:"blur(12px)",
          borderBottom:"1px solid #e5e7eb",
          padding:"0 24px", height:56,
          display:"flex", alignItems:"center", justifyContent:"space-between", gap:16,
          flexShrink:0,
        }}>
          <button onClick={onClose} style={{
            display:"flex", alignItems:"center", gap:6,
            background:"none", border:"none", cursor:"pointer",
            color:"#6b7280", fontSize:13, fontWeight:600,
            padding:"6px 10px", borderRadius:8, transition:"all 0.2s",
            fontFamily:"'Inter',system-ui,sans-serif",
          }}
            onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.background="#f3f4f6";(e.currentTarget as HTMLButtonElement).style.color="#111827";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.background="none";(e.currentTarget as HTMLButtonElement).style.color="#6b7280";}}>
            <ArrowLeft size={16}/> Volver al Blog
          </button>
          <p style={{
            margin:0, fontSize:12, fontWeight:700, color:"#111827",
            overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
            flex:1, textAlign:"center", fontFamily:"'Inter',system-ui,sans-serif",
          }}>{post.title}</p>
          <button onClick={onClose} style={{
            width:36, height:36, borderRadius:"50%",
            background:"#f3f4f6", border:"none",
            display:"flex", alignItems:"center", justifyContent:"center",
            cursor:"pointer", color:"#374151", transition:"all 0.2s", flexShrink:0,
          }}
            onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.background="#e5e7eb";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.background="#f3f4f6";}}>
            <X size={18}/>
          </button>
        </div>

        <div style={{position:"relative", height:340, flexShrink:0, overflow:"hidden"}}>
          <img src={post.image} alt={post.title} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.75) 100%)"}}/>
          <div style={{
            position:"absolute", top:20, left:24,
            background:"#a4d955", color:"#111827",
            fontSize:11, fontWeight:800, padding:"4px 12px",
            borderRadius:20, letterSpacing:"0.04em",
            fontFamily:"'Inter',system-ui,sans-serif",
            display:"flex", alignItems:"center", gap:5,
          }}>
            <Tag size={11}/> {post.category}
          </div>
          <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"0 28px 28px"}}>
            <h1 style={{
              margin:0, fontSize:28, fontWeight:900, color:"#ffffff",
              lineHeight:1.25, fontFamily:"'Inter',system-ui,sans-serif",
              textShadow:"0 2px 12px rgba(0,0,0,0.4)",
            }}>{post.title}</h1>
            <div style={{display:"flex",alignItems:"center",gap:20,marginTop:12,flexWrap:"wrap"}}>
              <span style={{display:"flex",alignItems:"center",gap:6,color:"rgba(255,255,255,0.88)",fontSize:13,fontWeight:600,fontFamily:"'Inter',system-ui,sans-serif"}}>
                <User size={14}/> {post.author}
              </span>
              <span style={{display:"flex",alignItems:"center",gap:6,color:"rgba(255,255,255,0.75)",fontSize:13,fontFamily:"'Inter',system-ui,sans-serif"}}>
                <Calendar size={14}/> {post.date}
              </span>
              {post.readTime && (
                <span style={{display:"flex",alignItems:"center",gap:6,color:"rgba(255,255,255,0.75)",fontSize:13,fontFamily:"'Inter',system-ui,sans-serif"}}>
                  <Clock size={14}/> {post.readTime}
                </span>
              )}
            </div>
          </div>
        </div>

        <div style={{padding:"28px 40px 24px",borderBottom:"1px solid #f3f4f6"}}>
          <p style={{
            margin:0, fontSize:17, fontWeight:600, color:"#374151",
            lineHeight:1.7, fontFamily:"'Inter',system-ui,sans-serif",
            fontStyle:"italic", borderLeft:"4px solid #a4d955", paddingLeft:16,
          }}>{post.excerpt}</p>
        </div>

        <div style={{padding:"32px 40px 60px", flex:1}}>
          {post.content.map((section, idx) => {
            if (section.type === "heading") return (
              <h2 key={idx} style={{
                fontSize:22, fontWeight:900, color:"#111827",
                margin:"36px 0 14px", lineHeight:1.3,
                fontFamily:"'Inter',system-ui,sans-serif",
                borderBottom:"2px solid #e5e7eb", paddingBottom:10,
              }}>{section.text}</h2>
            );
            if (section.type === "subheading") return (
              <h3 key={idx} style={{
                fontSize:17, fontWeight:800, color:"#1f2937",
                margin:"28px 0 10px", lineHeight:1.3,
                fontFamily:"'Inter',system-ui,sans-serif",
              }}>{section.text}</h3>
            );
            if (section.type === "paragraph") return (
              <p key={idx} style={{
                fontSize:15, color:"#374151", lineHeight:1.8,
                margin:"0 0 18px", fontFamily:"'Inter',system-ui,sans-serif",
              }}>{section.text}</p>
            );
            if (section.type === "bullets") return (
              <ul key={idx} style={{margin:"0 0 20px",paddingLeft:0,listStyle:"none"}}>
                {section.items?.map((item, i) => (
                  <li key={i} style={{
                    display:"flex", alignItems:"flex-start", gap:10,
                    padding:"5px 0", fontSize:15, color:"#374151",
                    lineHeight:1.6, fontFamily:"'Inter',system-ui,sans-serif",
                  }}>
                    <span style={{width:6,height:6,borderRadius:"50%",background:"#a4d955",flexShrink:0,marginTop:8}}/>
                    {item}
                  </li>
                ))}
              </ul>
            );
            if (section.type === "quote") return (
              <blockquote key={idx} style={{
                margin:"28px 0", padding:"20px 24px",
                background:"linear-gradient(135deg,#f0fdf4,#f8fafc)",
                borderLeft:"4px solid #a4d955", borderRadius:"0 12px 12px 0",
                boxShadow:"0 2px 12px rgba(164,217,85,0.12)",
              }}>
                <p style={{
                  margin:0, fontSize:16, fontWeight:600, color:"#1f2937",
                  lineHeight:1.7, fontFamily:"'Inter',system-ui,sans-serif", fontStyle:"italic",
                }}>{section.text}</p>
              </blockquote>
            );
            if (section.type === "highlight") return (
              <div key={idx} style={{
                margin:"28px 0", padding:"20px 24px",
                background:"linear-gradient(135deg,#111827,#1f2937)",
                borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.12)",
              }}>
                <p style={{
                  margin:0, fontSize:15, fontWeight:700, color:"#a4d955",
                  lineHeight:1.7, fontFamily:"'Inter',system-ui,sans-serif",
                }}>{section.text}</p>
              </div>
            );
            return null;
          })}
        </div>

        <div style={{padding:"24px 40px",background:"linear-gradient(135deg,#111827,#1f2937)",flexShrink:0}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
            <div>
              <p style={{margin:0,fontSize:14,fontWeight:800,color:"#ffffff",fontFamily:"'Inter',system-ui,sans-serif"}}>
                Tu empresa esta lista para implementar IA?
              </p>
              <p style={{margin:"4px 0 0",fontSize:12,color:"rgba(255,255,255,0.65)",fontFamily:"'Inter',system-ui,sans-serif"}}>
                Agenda un diagnostico gratuito con MAYIA
              </p>
            </div>
            <a href="https://calendly.com/mayiainteligencia/consulta-mayia" target="_blank" rel="noopener noreferrer"
              style={{
                display:"inline-flex", alignItems:"center", gap:8,
                background:"#a4d955", color:"#111827",
                padding:"10px 20px", borderRadius:10,
                fontSize:13, fontWeight:800, textDecoration:"none",
                fontFamily:"'Inter',system-ui,sans-serif", flexShrink:0,
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#bef264";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#a4d955";}}>
              Agendar Diagnostico
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
