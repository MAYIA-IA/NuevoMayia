import { useState, useRef, useEffect, useCallback } from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────────── */
export interface ModuleCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  glowColor: string;
  accentColor: string;
  badge?: string;
  stats?: { value: string; label: string }[];
  detail?: {
    headline: string;
    body: string;
    bullets?: string[];
    cta?: string;
    mediaSlot?: React.ReactNode;
  };
}

interface SectionModulesProps {
  id: string;
  sectionTitle: string;
  sectionSubtitle: string;
  eyebrow?: string;
  cards: ModuleCard[];
  background?: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
   PARTICLE CANVAS
───────────────────────────────────────────────────────────────────────────── */
function ParticleCanvas({ accentHex }: { accentHex: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const accentRef = useRef(accentHex);
  useEffect(() => { accentRef.current = accentHex; }, [accentHex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type P = { x:number;y:number;vx:number;vy:number;r:number;alpha:number;color:string;phase:number;pulse:number };
    const BASE = ['#A4D955','#7FD1FF','#c8ec88','#aadeff','#A4D955'];

    const particles: P[] = Array.from({ length: 55 }, () => ({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      vx: (Math.random()-0.5)*0.38,
      vy: (Math.random()-0.5)*0.38,
      r: Math.random()*2.8+0.6,
      alpha: Math.random()*0.42+0.08,
      color: BASE[Math.floor(Math.random()*BASE.length)],
      phase: Math.random()*Math.PI*2,
      pulse: Math.random()*0.013+0.005,
    }));

    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach((p) => {
        p.phase += p.pulse;
        const a = p.alpha*(0.5+0.5*Math.sin(p.phase));
        const hex2 = Math.round(a*255).toString(16).padStart(2,'0');
        const grad = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*5.5);
        grad.addColorStop(0, p.color+hex2);
        grad.addColorStop(1, p.color+'00');
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r*5.5,0,Math.PI*2);
        ctx.fillStyle = grad; ctx.fill();
        const coreHex = Math.round(Math.min(a+0.3,1)*255).toString(16).padStart(2,'0');
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = p.color+coreHex; ctx.fill();
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<-10) p.x=canvas.width+10;
        if(p.x>canvas.width+10) p.x=-10;
        if(p.y<-10) p.y=canvas.height+10;
        if(p.y>canvas.height+10) p.y=-10;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize',resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex:0}} />;
}

/* ─────────────────────────────────────────────────────────────────────────────
   BLOB GLOW
───────────────────────────────────────────────────────────────────────────── */
function BlobGlow({ color }: { color: string }) {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width:720,height:720,borderRadius:'50%',background:`radial-gradient(circle,${color}40 0%,${color}18 50%,transparent 72%)`,filter:'blur(60px)',transition:'background 0.9s ease',animation:'blobPrimary 5s ease-in-out infinite',zIndex:0 }} />
      <div aria-hidden="true" className="pointer-events-none absolute"
        style={{ width:360,height:360,left:'2%',top:'8%',borderRadius:'50%',background:'radial-gradient(circle,rgba(164,217,85,0.18) 0%,transparent 70%)',filter:'blur(50px)',animation:'blobSecondary 6s ease-in-out 0.8s infinite',zIndex:0 }} />
      <div aria-hidden="true" className="pointer-events-none absolute"
        style={{ width:360,height:360,right:'2%',bottom:'8%',borderRadius:'50%',background:'radial-gradient(circle,rgba(127,209,255,0.18) 0%,transparent 70%)',filter:'blur(50px)',animation:'blobSecondary 7s ease-in-out 1.5s infinite',zIndex:0 }} />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CARD MEDIA PREVIEW
───────────────────────────────────────────────────────────────────────────── */
function CardMediaPreview({ card, isActive, isHovered }: { card: ModuleCard; isActive: boolean; isHovered: boolean }) {
  const hasMedia = !!card.detail?.mediaSlot;

  if (hasMedia) {
    return (
      <div className="relative overflow-hidden" style={{ height:172, borderRadius:'14px 14px 0 0', flexShrink:0 }}>
        <div style={{
          height:'100%',
          transform: isActive?'scale(1.06)':isHovered?'scale(1.03)':'scale(1)',
          transition:'transform 0.7s cubic-bezier(0.34,1.2,0.64,1)',
          /* Fix: ensure media fills the container properly */
        }}>
          {/* Clone the media slot with overriding styles for card view */}
          <div style={{ width:'100%', height:'100%', overflow:'hidden' }}>
            {card.detail!.mediaSlot}
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background:`linear-gradient(to bottom,transparent 25%,${card.glowColor}28 65%,${card.glowColor}70 100%)`, transition:'background 0.4s ease' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background:'linear-gradient(105deg,transparent 25%,rgba(255,255,255,0.22) 50%,transparent 75%)', opacity:isActive?1:0, animation:isActive?'shimmerSweep 2.4s ease-in-out infinite':'none', transition:'opacity 0.4s ease' }} />
        {card.badge && (
          <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase"
            style={{ background:`linear-gradient(90deg,${card.accentColor}ee,${card.glowColor}ee)`, color:'#fff', boxShadow:`0 2px 12px ${card.accentColor}66`, backdropFilter:'blur(8px)' }}>
            {card.badge}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center overflow-hidden" style={{ height:148, flexShrink:0, borderRadius:'14px 14px 0 0' }}>
      <div className="absolute inset-0" style={{ background:`radial-gradient(ellipse 80% 80% at 30% 40%,${card.glowColor}35 0%,transparent 60%),radial-gradient(ellipse 60% 60% at 70% 60%,rgba(127,209,255,0.2) 0%,transparent 60%),${isActive?card.glowColor+'12':'rgba(0,0,0,0.02)'}`, transition:'background 0.5s ease', animation:isActive?'meshShift 4s ease-in-out infinite':'none' }} />
      <div className="absolute pointer-events-none" style={{ width:110,height:110,border:`1.5px dashed ${card.accentColor}${isActive?'55':'22'}`,borderRadius:'50%',animation:isActive?'ringRotateCCW 10s linear infinite':'none',transition:'border-color 0.4s ease' }} />
      <div className="absolute pointer-events-none" style={{ width:80,height:80,border:`1px solid ${card.glowColor}${isActive?'66':'22'}`,borderRadius:'50%',animation:isActive?'ringRotateCW 7s linear infinite':'none',transition:'border-color 0.4s ease' }} />
      <div style={{ color:card.accentColor,width:54,height:54,background:isActive?`linear-gradient(135deg,${card.glowColor}40,${card.accentColor}20)`:`${card.glowColor}18`,border:`2px solid ${card.accentColor}${isActive?'88':'33'}`,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:isActive?`0 0 32px ${card.glowColor}88,0 0 64px ${card.glowColor}44,inset 0 0 16px ${card.glowColor}20`:'0 2px 8px rgba(0,0,0,0.06)',animation:isActive?'iconFloat 3s ease-in-out infinite':'none',transition:'all 0.45s cubic-bezier(0.34,1.4,0.64,1)',position:'relative',zIndex:1 }}>
        {card.icon}
      </div>
      {card.badge && (
        <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase"
          style={{ background:`linear-gradient(90deg,${card.accentColor}dd,${card.glowColor}dd)`, color:'#fff', boxShadow:`0 2px 12px ${card.accentColor}55` }}>
          {card.badge}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SINGLE CARD ITEM
───────────────────────────────────────────────────────────────────────────── */
function ModuleCardItem({ card, isActive, isMobile, onActivate, onOpenModal, index }: {
  card: ModuleCard; isActive: boolean; isMobile: boolean;
  onActivate: () => void; onOpenModal: () => void; index: number;
}) {
  const wrapRef   = useRef<HTMLDivElement>(null);
  const [visible, setVisible]  = useState(false);
  const [hovered, setHovered]  = useState(false);
  const [shimmer, setShimmer]  = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setVisible(true); }, { threshold:0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) onActivate(); }, { threshold:0.55 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [isMobile, onActivate]);

  const handleMouseEnter = () => {
    if (isMobile) return;
    onActivate(); setHovered(true); setShimmer(n=>n+1);
  };
  const handleMouseLeave = () => setHovered(false);
  const isLit = isActive || hovered;

  return (
    <div
      ref={wrapRef}
      style={{ opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(44px)', transition:`opacity 0.65s ease ${index*0.11}s, transform 0.65s cubic-bezier(0.34,1.2,0.64,1) ${index*0.11}s`, scrollSnapAlign:'center', flexShrink:0, width:isMobile?'80vw':undefined, maxWidth:isMobile?320:undefined, position:'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenModal}
    >
      {isActive && (
        <div className="absolute pointer-events-none" style={{ inset:-3,borderRadius:20,background:`linear-gradient(135deg,${card.accentColor}55,${card.glowColor}55,${card.accentColor}55)`,backgroundSize:'300% 300%',animation:'borderGradientShift 3s ease infinite',zIndex:-1,opacity:0.9 }} />
      )}
      <div className="absolute pointer-events-none" style={{ inset:-12,borderRadius:26,background:`radial-gradient(ellipse at center,${card.glowColor}${isActive?'35':'00'} 0%,transparent 70%)`,filter:'blur(16px)',transition:'background 0.5s ease',zIndex:-2 }} />
      <div className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
        style={{ background:isActive?`linear-gradient(160deg,#ffffff 0%,${card.glowColor}14 60%,${card.accentColor}08 100%)`:hovered?'#fafffe':'#ffffff', border:`1.5px solid ${isActive?card.accentColor+'cc':hovered?card.accentColor+'55':'rgba(0,0,0,0.07)'}`, boxShadow:isActive?`0 24px 64px ${card.glowColor}55,0 8px 24px rgba(0,0,0,0.08),inset 0 1px 0 rgba(255,255,255,0.95)`:hovered?`0 14px 44px ${card.glowColor}30,0 4px 16px rgba(0,0,0,0.05)`:'0 2px 14px rgba(0,0,0,0.06)', transform:isActive?'translateY(-6px) scale(1.012)':hovered?'translateY(-3px) scale(1.006)':'translateY(0) scale(1)', transition:'all 0.38s cubic-bezier(0.34,1.3,0.64,1)' }}>
        <CardMediaPreview card={card} isActive={isActive} isHovered={hovered} />
        <div key={shimmer} className="absolute inset-0 pointer-events-none" style={{ background:'linear-gradient(108deg,transparent 20%,rgba(255,255,255,0.55) 50%,transparent 80%)',borderRadius:'inherit',animation:shimmer>0?'shimmerOnce 0.9s ease-out forwards':'none',zIndex:10 }} />
        <div className="flex flex-col gap-3 px-5 pt-4 pb-5 flex-1">
          <div>
            <h3 className="text-[15px] font-extrabold leading-snug mb-0.5" style={{ color:isActive?card.accentColor:'#111827', transition:'color 0.3s ease', textShadow:isActive?`0 0 24px ${card.glowColor}66`:'none' }}>{card.title}</h3>
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color:card.accentColor+'bb' }}>{card.tagline}</p>
          </div>
          <p className="text-sm leading-relaxed" style={{ color:'#6b7280' }}>{card.description}</p>
          {card.stats && card.stats.length>0 && (
            <div className="flex gap-5 pt-3" style={{ borderTop:`1px solid ${card.accentColor}22` }}>
              {card.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-extrabold tabular-nums" style={{ color:card.accentColor, textShadow:isActive?`0 0 18px ${card.glowColor}cc`:'none', transition:'text-shadow 0.4s ease' }}>{s.value}</div>
                  <div className="text-[10px] mt-px" style={{ color:'#9ca3af' }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center gap-1.5 mt-auto pt-1">
            <span className="text-xs font-bold tracking-wide" style={{ color:card.accentColor }}>Ver detalle</span>
            <svg className="w-3.5 h-3.5" style={{ color:card.accentColor, transform:isLit?'translateX(4px)':'none', transition:'transform 0.3s ease' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ height:isActive?3:2, background:`linear-gradient(90deg,${card.accentColor},${card.glowColor},${card.accentColor})`, backgroundSize:'200% 100%', animation:isActive?'barSlide 1.8s linear infinite':'none', transform:isLit?'scaleX(1)':'scaleX(0)', transformOrigin:'left', transition:'transform 0.45s cubic-bezier(0.34,1.3,0.64,1),height 0.3s ease', boxShadow:isActive?`0 0 10px ${card.glowColor}`:'none' }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   DETAIL MODAL — FIXED version
───────────────────────────────────────────────────────────────────────────── */
function DetailModal({ card, onClose }: { card: ModuleCard; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    /* Lock scroll */
    const y = window.scrollY;
    document.body.style.cssText = `position:fixed;top:-${y}px;width:100%;overflow:hidden;`;
    /* Trigger entrance animation */
    requestAnimationFrame(() => setMounted(true));

    return () => {
      document.body.style.cssText = '';
      window.scrollTo(0, y);
    };
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key==='Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  const d = card.detail;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5"
      style={{ background:`rgba(0,0,0,${mounted?0.85:0})`, backdropFilter:`blur(${mounted?20:0}px)`, WebkitBackdropFilter:`blur(${mounted?20:0}px)`, transition:'background 0.3s ease, backdrop-filter 0.3s ease' }}
      onClick={onClose}
    >
      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{ width:600,height:600,background:`radial-gradient(circle,${card.glowColor}30 0%,transparent 70%)`,filter:'blur(80px)',animation:'blobPrimary 4s ease-in-out infinite' }} />

      <div
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
        style={{ background:'#fff', border:`2px solid ${card.accentColor}44`, boxShadow:`0 0 0 1px ${card.glowColor}22,0 0 80px ${card.glowColor}44,0 32px 80px rgba(0,0,0,0.35)`, opacity:mounted?1:0, transform:mounted?'scale(1) translateY(0)':'scale(0.92) translateY(24px)', transition:'opacity 0.4s cubic-bezier(0.34,1.45,0.64,1),transform 0.4s cubic-bezier(0.34,1.45,0.64,1)', maxHeight:'92vh', overflowY:'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top animated strip */}
        <div style={{ height:4, background:`linear-gradient(90deg,transparent,${card.accentColor},${card.glowColor},${card.accentColor},transparent)`, backgroundSize:'200% 100%', animation:'barSlide 2s linear infinite', boxShadow:`0 0 16px ${card.glowColor}88` }} />

        {/* Header */}
        <div className="relative p-7 pb-5 overflow-hidden" style={{ background:`linear-gradient(135deg,${card.glowColor}14 0%,${card.accentColor}08 100%)`, borderBottom:`1px solid ${card.accentColor}22` }}>
          <div className="absolute -top-10 -right-10 pointer-events-none" style={{ width:220,height:220,borderRadius:'50%',background:`radial-gradient(circle,${card.glowColor}40 0%,transparent 70%)`,filter:'blur(30px)' }} />
          <div className="absolute -bottom-8 -left-8 pointer-events-none" style={{ width:160,height:160,borderRadius:'50%',background:`radial-gradient(circle,${card.accentColor}20 0%,transparent 70%)`,filter:'blur(20px)' }} />

          {/* ── CLOSE BUTTON — fixed with correct z-index and event handling ── */}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            type="button"
            aria-label="Cerrar"
            style={{
              position:'absolute', top:20, right:20, zIndex:100,
              width:40, height:40, borderRadius:'50%',
              display:'flex', alignItems:'center', justifyContent:'center',
              background:'rgba(0,0,0,0.08)',
              border:'1.5px solid rgba(0,0,0,0.12)',
              cursor:'pointer', outline:'none',
              transition:'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const b = e.currentTarget;
              b.style.background = `${card.accentColor}22`;
              b.style.transform = 'rotate(90deg) scale(1.15)';
              b.style.borderColor = card.accentColor+'66';
            }}
            onMouseLeave={(e) => {
              const b = e.currentTarget;
              b.style.background = 'rgba(0,0,0,0.08)';
              b.style.transform = '';
              b.style.borderColor = 'rgba(0,0,0,0.12)';
            }}
          >
            <svg width="16" height="16" fill="none" stroke="#444" strokeWidth="2.2" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {/* Icon + title */}
          <div className="flex items-start gap-4 relative" style={{paddingRight:56}}>
            <div style={{ width:64,height:64,borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,background:`linear-gradient(135deg,${card.glowColor}38,${card.accentColor}20)`,border:`2px solid ${card.accentColor}55`,color:card.accentColor,boxShadow:`0 0 36px ${card.glowColor}66,0 0 72px ${card.glowColor}33`,animation:'iconFloat 3s ease-in-out infinite' }}>
              <span style={{ transform:'scale(1.3)' }}>{card.icon}</span>
            </div>
            <div className="pt-1">
              {card.badge && (
                <span className="text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase mb-2 inline-block"
                  style={{ background:`linear-gradient(90deg,${card.accentColor}ee,${card.glowColor}ee)`, color:'#fff', boxShadow:`0 2px 14px ${card.accentColor}55` }}>
                  {card.badge}
                </span>
              )}
              <h2 className="text-2xl font-extrabold leading-tight mt-1" style={{ color:'#111827' }}>{card.title}</h2>
              <p className="text-sm font-semibold mt-1" style={{ color:card.accentColor }}>{card.tagline}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-7 space-y-6">
          {/* Media — properly sized with object-cover */}
          {d?.mediaSlot && (
            <div className="rounded-2xl overflow-hidden relative" style={{ border:`1px solid ${card.accentColor}33`, boxShadow:`0 8px 40px ${card.glowColor}44,0 0 0 1px ${card.glowColor}22`, height:220 }}>
              <div style={{ width:'100%', height:'100%', overflow:'hidden' }}>
                {d.mediaSlot}
              </div>
              <div className="absolute inset-0 pointer-events-none" style={{ background:`linear-gradient(to bottom,transparent 55%,${card.glowColor}28 80%,${card.glowColor}50 100%)` }} />
            </div>
          )}

          {d?.headline && (
            <h3 className="text-xl font-extrabold" style={{ color:'#111827', animation:'slideInUp 0.4s ease both' }}>{d.headline}</h3>
          )}

          <p className="text-[14px] leading-relaxed" style={{ color:'#4b5563', animation:'slideInUp 0.45s ease 0.05s both' }}>
            {d?.body ?? card.description}
          </p>

          {d?.bullets && d.bullets.length>0 && (
            <ul className="space-y-2.5">
              {d.bullets.map((b,i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color:'#374151', animation:`slideInUp 0.4s ease ${0.08+i*0.06}s both` }}>
                  <div style={{ width:20,height:20,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:2,background:card.glowColor+'28',border:`1.5px solid ${card.accentColor}55`,boxShadow:`0 0 10px ${card.glowColor}55` }}>
                    <svg className="w-3 h-3" style={{ color:card.accentColor }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {b}
                </li>
              ))}
            </ul>
          )}

          {card.stats && card.stats.length>0 && (
            <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl" style={{ background:`linear-gradient(135deg,${card.glowColor}14,${card.accentColor}08)`, border:`1.5px solid ${card.accentColor}22`, boxShadow:`inset 0 0 40px ${card.glowColor}15`, animation:'slideInUp 0.5s ease 0.25s both' }}>
              {card.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black tabular-nums" style={{ color:card.accentColor, textShadow:`0 0 24px ${card.glowColor}cc` }}>{s.value}</div>
                  <div className="text-xs mt-1" style={{ color:'#9ca3af' }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA button — animated and interactive */}
          <button
            type="button"
            className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group"
            style={{ background:`linear-gradient(135deg,${card.accentColor},${card.glowColor})`, color:'#fff', boxShadow:`0 6px 28px ${card.glowColor}66`, animation:'slideInUp 0.5s ease 0.3s both', transition:'all 0.3s ease', position:'relative', overflow:'hidden' }}
            onMouseEnter={(e) => {
              const b = e.currentTarget;
              b.style.boxShadow = `0 10px 50px ${card.glowColor}99`;
              b.style.transform = 'translateY(-2px) scale(1.01)';
            }}
            onMouseLeave={(e) => {
              const b = e.currentTarget;
              b.style.boxShadow = `0 6px 28px ${card.glowColor}66`;
              b.style.transform = '';
            }}
          >
            {/* Shimmer sweep on button */}
            <span className="absolute inset-0 pointer-events-none" style={{ background:'linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.25) 50%,transparent 70%)', animation:'shimmerSweep 2.5s ease-in-out infinite' }} />
            <span className="relative z-10">{d?.cta ?? 'Solicitar información'}</span>
            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes backdropIn  { from{opacity:0} to{opacity:1} }
        @keyframes slideInUp   { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORTED SECTION
───────────────────────────────────────────────────────────────────────────── */
export default function SectionModules({ id, sectionTitle, sectionSubtitle, eyebrow, cards, background='#f9fafb' }: SectionModulesProps) {
  const [activeId, setActiveId] = useState<string>(cards[0]?.id ?? '');
  const [modalId,  setModalId]  = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(typeof window!=='undefined'?window.innerWidth<768:false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth<768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  const activeCard = cards.find((c)=>c.id===activeId)??cards[0];
  const modalCard  = cards.find((c)=>c.id===modalId);

  const handleActivate = useCallback((id:string) => setActiveId(id), []);
  const handleOpen     = useCallback((id:string) => setModalId(id), []);
  const handleClose    = useCallback(() => setModalId(null), []);

  return (
    <section id={id} className="relative w-full py-20 overflow-hidden" style={{ background }}>
      <ParticleCanvas accentHex={activeCard?.accentColor??'#059669'} />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'radial-gradient(circle,rgba(90,171,0,0.22) 1px,transparent 1px)', backgroundSize:'30px 30px', opacity:0.6, zIndex:0 }} />
      <BlobGlow color={activeCard?.glowColor??'#6ee7b7'} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" style={{ zIndex:2 }}>
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-14 space-y-4">
          {eyebrow && (
            <p className="text-xs font-black tracking-[0.28em] uppercase" style={{ color:activeCard?.accentColor??'#5aab00', transition:'color 0.6s ease', animation:'fadeSlideDown 0.7s ease both' }}>
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color:'#111827', animation:'fadeSlideDown 0.75s ease 0.08s both' }}>
            {sectionTitle}
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color:'#6b7280', animation:'fadeSlideDown 0.8s ease 0.14s both' }}>
            {sectionSubtitle}
          </p>
          <div className="flex justify-center pt-1">
            <div style={{ height:3, width:120, borderRadius:9999, background:`linear-gradient(90deg,${activeCard?.accentColor??'#5aab00'},${activeCard?.glowColor??'#a3e635'},#7FD1FF,${activeCard?.accentColor??'#5aab00'})`, backgroundSize:'300% 100%', animation:'barSlide 2.2s linear infinite', boxShadow:`0 0 18px ${activeCard?.glowColor??'#a3e635'}aa`, transition:'box-shadow 0.7s ease' }} />
          </div>
        </div>

        {/* Mobile carousel */}
        {isMobile && (
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType:'x mandatory', scrollbarWidth:'none', WebkitOverflowScrolling:'touch', paddingLeft:'10vw', paddingRight:'10vw' }}>
            {cards.map((card,i) => (
              <ModuleCardItem key={card.id} card={card} isActive={activeId===card.id} isMobile index={i} onActivate={()=>handleActivate(card.id)} onOpenModal={()=>handleOpen(card.id)} />
            ))}
          </div>
        )}

        {/* Desktop grid */}
        {!isMobile && (
          <div className="grid grid-cols-2 gap-6">
            {cards.map((card,i) => (
              <ModuleCardItem key={card.id} card={card} isActive={activeId===card.id} isMobile={false} index={i} onActivate={()=>handleActivate(card.id)} onOpenModal={()=>handleOpen(card.id)} />
            ))}
          </div>
        )}

        {/* Mobile dots */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-5">
            {cards.map((card) => (
              <button key={card.id} onClick={()=>handleActivate(card.id)} className="rounded-full transition-all duration-300"
                style={{ width:activeId===card.id?28:8, height:8, background:activeId===card.id?card.accentColor:'rgba(0,0,0,0.15)', boxShadow:activeId===card.id?`0 0 14px ${card.glowColor}`:'none' }} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalCard && <DetailModal card={modalCard} onClose={handleClose} />}

      <style>{`
        @keyframes blobPrimary   { 0%,100%{opacity:.65;transform:translate(-50%,-50%) scale(1)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.09)} }
        @keyframes blobSecondary { 0%,100%{opacity:.5;transform:scale(1)}50%{opacity:.9;transform:scale(1.12)} }
        @keyframes shimmerSweep  { 0%{transform:translateX(-110%)}100%{transform:translateX(110%)} }
        @keyframes shimmerOnce   { 0%{transform:translateX(-110%);opacity:1}80%{opacity:1}100%{transform:translateX(110%);opacity:0} }
        @keyframes borderGradientShift { 0%{background-position:0% 0%}50%{background-position:100% 100%}100%{background-position:0% 0%} }
        @keyframes iconFloat     { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
        @keyframes meshShift     { 0%,100%{background-position:0% 0%;opacity:.8}50%{background-position:100% 100%;opacity:1} }
        @keyframes ringRotateCW  { from{transform:rotate(0deg)}to{transform:rotate(360deg)} }
        @keyframes ringRotateCCW { from{transform:rotate(0deg)}to{transform:rotate(-360deg)} }
        @keyframes fadeSlideDown { from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)} }
        @keyframes barSlide      { 0%{background-position:0% center}100%{background-position:300% center} }

        /* Fix video/img inside card to fill container properly */
        .relative video, .relative img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </section>
  );
}