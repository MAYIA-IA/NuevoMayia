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
  glowColor: string;          // hex e.g. "#6ee7b7"
  accentColor: string;        // hex for border/text
  badge?: string;
  stats?: { value: string; label: string }[];
  /* Full-detail content shown in modal */
  detail?: {
    headline: string;
    body: string;
    bullets?: string[];
    cta?: string;
    mediaSlot?: React.ReactNode; // inject video/image from parent
  };
}

interface SectionModulesProps {
  id: string;
  sectionTitle: string;
  sectionSubtitle: string;
  eyebrow?: string;
  cards: ModuleCard[];
  background?: string;        // CSS background value
}

/* ─────────────────────────────────────────────────────────────────────────────
   BLOB GLOW — sits behind the grid, colour-animates on active card change
───────────────────────────────────────────────────────────────────────────── */
function BlobGlow({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: 560,
        height: 560,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}30 0%, ${color}10 45%, transparent 70%)`,
        filter: 'blur(48px)',
        transition: 'background 0.75s ease',
        zIndex: 0,
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SINGLE CARD
───────────────────────────────────────────────────────────────────────────── */
function ModuleCardItem({
  card,
  isActive,
  isMobile,
  onActivate,
  onOpenModal,
}: {
  card: ModuleCard;
  isActive: boolean;
  isMobile: boolean;
  onActivate: () => void;
  onOpenModal: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  /* Mobile: activate via IntersectionObserver */
  useEffect(() => {
    if (!isMobile) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onActivate(); },
      { threshold: 0.55 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile, onActivate]);

  return (
    <div
      ref={ref}
      onMouseEnter={!isMobile ? onActivate : undefined}
      onClick={onOpenModal}
      className="relative flex flex-col gap-4 rounded-2xl p-6 cursor-pointer select-none"
      style={{
        background: isActive
          ? `linear-gradient(145deg, #ffffff 0%, ${card.glowColor}18 100%)`
          : '#ffffff',
        border: `1.5px solid ${isActive ? card.accentColor + 'cc' : 'rgba(0,0,0,0.08)'}`,
        boxShadow: isActive
          ? `0 12px 40px ${card.glowColor}38, 0 2px 8px rgba(0,0,0,0.06)`
          : '0 2px 12px rgba(0,0,0,0.05)',
        transform: isActive ? 'translateY(-4px) scale(1.015)' : 'translateY(0) scale(1)',
        transition: 'all 0.35s cubic-bezier(0.34, 1.3, 0.64, 1)',
        zIndex: 1,
        /* snap for mobile carousel */
        scrollSnapAlign: 'center',
        flexShrink: 0,
        width: isMobile ? '80vw' : undefined,
        maxWidth: isMobile ? 320 : undefined,
      }}
    >
      {/* Badge */}
      {card.badge && (
        <span
          className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase"
          style={{ background: card.accentColor + '18', color: card.accentColor, border: `1px solid ${card.accentColor}44` }}
        >
          {card.badge}
        </span>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `${card.glowColor}20`,
          border: `1px solid ${card.accentColor}33`,
          color: card.accentColor,
          boxShadow: isActive ? `0 0 18px ${card.glowColor}55` : 'none',
          transition: 'box-shadow 0.4s ease',
        }}
      >
        {card.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-bold leading-snug" style={{ color: '#111827' }}>
          {card.title}
        </h3>
        <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: card.accentColor }}>
          {card.tagline}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
          {card.description}
        </p>
      </div>

      {/* Stats row */}
      {card.stats && card.stats.length > 0 && (
        <div className="flex gap-4 pt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
          {card.stats.map((s) => (
            <div key={s.label}>
              <div className="text-lg font-extrabold" style={{ color: card.accentColor }}>{s.value}</div>
              <div className="text-[10px]" style={{ color: '#9ca3af' }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Ver más hint */}
      <div className="flex items-center gap-1.5 mt-auto pt-2">
        <span className="text-xs font-semibold" style={{ color: card.accentColor }}>Ver detalle</span>
        <svg
          className="w-3.5 h-3.5 transition-transform duration-300"
          style={{ color: card.accentColor, transform: isActive ? 'translateX(3px)' : 'none' }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
        style={{
          background: `linear-gradient(90deg, ${card.accentColor}, ${card.glowColor})`,
          transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.3, 0.64, 1)',
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MODAL OVERLAY
───────────────────────────────────────────────────────────────────────────── */
function DetailModal({ card, onClose }: { card: ModuleCard; onClose: () => void }) {
  /* Lock body scroll */
  useEffect(() => {
    const y = window.scrollY;
    document.body.style.cssText = `position:fixed;top:-${y}px;width:100%;overflow:hidden;`;
    return () => {
      document.body.style.cssText = '';
      window.scrollTo(0, y);
    };
  }, []);

  /* ESC to close */
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  const d = card.detail;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(10px)', animation: 'fadeIn 0.22s ease' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
        style={{
          background: '#fff',
          border: `2px solid ${card.accentColor}55`,
          boxShadow: `0 0 80px ${card.glowColor}44, 0 24px 60px rgba(0,0,0,0.18)`,
          animation: 'modalSlideUp 0.3s cubic-bezier(0.34, 1.4, 0.64, 1)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header band */}
        <div
          className="relative p-8 pb-6"
          style={{
            background: `linear-gradient(135deg, ${card.glowColor}22 0%, ${card.accentColor}12 100%)`,
            borderBottom: `1px solid ${card.accentColor}22`,
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.1)' }}
          >
            <svg className="w-4 h-4" style={{ color: '#374151' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `${card.glowColor}30`,
                border: `1.5px solid ${card.accentColor}55`,
                color: card.accentColor,
                boxShadow: `0 0 24px ${card.glowColor}44`,
              }}
            >
              {card.icon}
            </div>
            <div>
              {card.badge && (
                <span
                  className="text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase mb-2 inline-block"
                  style={{ background: card.accentColor + '18', color: card.accentColor, border: `1px solid ${card.accentColor}44` }}
                >
                  {card.badge}
                </span>
              )}
              <h2 className="text-2xl font-extrabold leading-tight" style={{ color: '#111827' }}>
                {card.title}
              </h2>
              <p className="text-sm font-semibold mt-0.5" style={{ color: card.accentColor }}>
                {card.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          {/* Media slot */}
          {d?.mediaSlot && (
            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${card.accentColor}22` }}>
              {d.mediaSlot}
            </div>
          )}

          {/* Headline */}
          {d?.headline && (
            <h3 className="text-lg font-bold" style={{ color: '#111827' }}>{d.headline}</h3>
          )}

          {/* Body text */}
          <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
            {d?.body ?? card.description}
          </p>

          {/* Bullet points */}
          {d?.bullets && d.bullets.length > 0 && (
            <ul className="space-y-2.5">
              {d.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#374151' }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: card.glowColor + '30', border: `1px solid ${card.accentColor}44` }}
                  >
                    <svg className="w-3 h-3" style={{ color: card.accentColor }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {b}
                </li>
              ))}
            </ul>
          )}

          {/* Stats */}
          {card.stats && card.stats.length > 0 && (
            <div
              className="grid grid-cols-3 gap-4 pt-4 rounded-2xl p-4"
              style={{ background: `${card.glowColor}12`, border: `1px solid ${card.accentColor}20` }}
            >
              {card.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold" style={{ color: card.accentColor }}>{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <button
            className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, ${card.accentColor}, ${card.glowColor})`,
              color: '#fff',
              boxShadow: `0 4px 20px ${card.glowColor}44`,
            }}
          >
            {d?.cta ?? 'Solicitar información'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes modalSlideUp {
          from { opacity:0; transform:translateY(24px) scale(0.97) }
          to   { opacity:1; transform:translateY(0) scale(1) }
        }
        /* scrollbar inside modal */
        .modal-scroll::-webkit-scrollbar { width:4px }
        .modal-scroll::-webkit-scrollbar-thumb { background:${card.accentColor}66; border-radius:2px }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORTED SECTION
───────────────────────────────────────────────────────────────────────────── */
export default function SectionModules({
  id,
  sectionTitle,
  sectionSubtitle,
  eyebrow,
  cards,
  background = '#f9fafb',
}: SectionModulesProps) {
  const [activeId, setActiveId]   = useState<string>(cards[0]?.id ?? '');
  const [modalId, setModalId]     = useState<string | null>(null);
  const [isMobile, setIsMobile]   = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  const activeCard = cards.find((c) => c.id === activeId) ?? cards[0];
  const modalCard  = cards.find((c) => c.id === modalId);

  const handleActivate = useCallback((id: string) => setActiveId(id), []);
  const handleOpen     = useCallback((id: string) => setModalId(id), []);
  const handleClose    = useCallback(() => setModalId(null), []);

  return (
    <section
      id={id}
      className="relative w-full py-20 overflow-hidden"
      style={{ background }}
    >
      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(90,171,0,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.55,
        }}
      />

      {/* Dynamic glow blob */}
      <BlobGlow color={activeCard?.glowColor ?? '#6ee7b7'} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" style={{ zIndex: 2 }}>
        {/* ── Section header ── */}
        <div className="text-center mb-14 space-y-3">
          {eyebrow && (
            <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#5aab00' }}>
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: '#111827' }}>
            {sectionTitle}
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
            {sectionSubtitle}
          </p>
          {/* decorative line */}
          <div className="flex justify-center pt-2">
            <div
              className="h-0.5 w-24 rounded-full"
              style={{ background: `linear-gradient(90deg, #5aab00, ${activeCard?.glowColor ?? '#a3e635'})`, transition: 'background 0.6s ease' }}
            />
          </div>
        </div>

        {/* ── MOBILE: horizontal scroll carousel ── */}
        {isMobile && (
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
              paddingLeft: '10vw',
              paddingRight: '10vw',
            }}
          >
            {cards.map((card) => (
              <ModuleCardItem
                key={card.id}
                card={card}
                isActive={activeId === card.id}
                isMobile
                onActivate={() => handleActivate(card.id)}
                onOpenModal={() => handleOpen(card.id)}
              />
            ))}
          </div>
        )}

        {/* ── DESKTOP: 2-column grid ── */}
        {!isMobile && (
          <div className="grid grid-cols-2 gap-5">
            {cards.map((card) => (
              <ModuleCardItem
                key={card.id}
                card={card}
                isActive={activeId === card.id}
                isMobile={false}
                onActivate={() => handleActivate(card.id)}
                onOpenModal={() => handleOpen(card.id)}
              />
            ))}
          </div>
        )}

        {/* ── Dot indicators (mobile) ── */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-5">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleActivate(card.id)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeId === card.id ? 24 : 8,
                  height: 8,
                  background: activeId === card.id ? card.accentColor : 'rgba(0,0,0,0.15)',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Modal ── */}
      {modalCard && <DetailModal card={modalCard} onClose={handleClose} />}
    </section>
  );
}