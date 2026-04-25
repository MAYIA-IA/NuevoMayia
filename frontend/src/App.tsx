import { useState, useRef, useEffect } from 'react';
import NavigationBar from './components/navigationBar';
import HeaderBanner from './components/headerBanner';
import ImageCarousel from './components/imageCarousel';
import MusculosMAYiA from './components/musculosMayia';
import SubNavigation from './components/subNavigation';
import IAEmpresarial from './components/IAEmpresarial';
import AgentesConsultores from './components/AgentesConsultores';
import IAPorSector from './components/IAporSector';
import EmpleadosDigitales from './components/EmpleadosDigitales';
import PildorasIA from './components/PildorasIA';
import CiberseguridadIA from './components/CiberseguridadIA';
import AcademiaIA from './components/AcademiaIA';
import BrandFooter from './components/brandFooter';
import Footer from './components/piepagina';
import ChatWidget from './components/ChatAgente';

/* ── Global ambient particle canvas ─────────────────────────────────────── */
function GlobalParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type P = {
      x: number; y: number; vx: number; vy: number;
      r: number; alpha: number; color: string; phase: number; pulse: number;
    };
    const COLORS = ['#A4D955', '#7FD1FF', '#A4D955', '#c8ec88', '#aadeff', '#7FD1FF'];

    const particles: P[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 2.5 + 0.5,
      alpha: Math.random() * 0.3 + 0.06,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      phase: Math.random() * Math.PI * 2,
      pulse: Math.random() * 0.012 + 0.004,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.phase += p.pulse;
        const a = p.alpha * (0.5 + 0.5 * Math.sin(p.phase));

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, p.color + Math.round(a * 255).toString(16).padStart(2, '0'));
        grad.addColorStop(1, p.color + '00');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round((a + 0.25) * 255).toString(16).padStart(2, '0').slice(-2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.55,
      }}
    />
  );
}

/* ── Animated grid lines in background ──────────────────────────────────── */
function GlobalGridOverlay() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        backgroundImage: [
          'linear-gradient(rgba(164,217,85,0.04) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(127,209,255,0.04) 1px, transparent 1px)',
        ].join(','),
        backgroundSize: '50px 50px',
        animation: 'gridDrift 20s linear infinite',
      }}
    />
  );
}

/* ── Floating ambient blobs ──────────────────────────────────────────────── */
function GlobalBlobs() {
  return (
    <>
      <div style={{
        position: 'fixed', top: '10%', left: '5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(164,217,85,0.07) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
        animation: 'blobDrift1 18s ease-in-out infinite',
      }} />
      <div style={{
        position: 'fixed', top: '50%', right: '5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(127,209,255,0.06) 0%, transparent 70%)',
        filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0,
        animation: 'blobDrift2 22s ease-in-out infinite',
      }} />
      <div style={{
        position: 'fixed', bottom: '10%', left: '30%',
        width: 350, height: 350, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(164,217,85,0.05) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0,
        animation: 'blobDrift3 15s ease-in-out infinite',
      }} />
    </>
  );
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* ── Global ambient background (fixed, behind everything) ── */}
      <GlobalParticleCanvas />
      <GlobalGridOverlay />
      <GlobalBlobs />

      <div className="min-h-screen relative" style={{ zIndex: 1, background: 'transparent' }}>
        {/* 1. Identidad — sticky nav */}
        <NavigationBar />

        {/* 2. Urgencia / evento */}
        <HeaderBanner />

        {/* 3. Propuesta de valor */}
        <MusculosMAYiA />

        {/* 4. Impacto visual */}
        <ImageCarousel />

        {/* 5. Índice navegable */}
        <SubNavigation />

        <IAEmpresarial />
        <AgentesConsultores />
        <IAPorSector />
        <EmpleadosDigitales />
        <PildorasIA />
        <CiberseguridadIA />
        <AcademiaIA />

        {/* 7. Cierre de marca */}
        <BrandFooter />
        <Footer />

        <ChatWidget
          isOpen={isChatOpen}
          onToggle={() => setIsChatOpen(!isChatOpen)}
        />
      </div>

      <style>{`
        @keyframes gridDrift {
          0%   { background-position: 0px 0px; }
          100% { background-position: 50px 50px; }
        }
        @keyframes blobDrift1 {
          0%,100% { transform: translate(0, 0) scale(1); }
          33%      { transform: translate(60px, -40px) scale(1.1); }
          66%      { transform: translate(-30px, 50px) scale(0.95); }
        }
        @keyframes blobDrift2 {
          0%,100% { transform: translate(0, 0) scale(1); }
          40%      { transform: translate(-80px, 60px) scale(1.08); }
          70%      { transform: translate(40px, -30px) scale(0.92); }
        }
        @keyframes blobDrift3 {
          0%,100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(50px, -60px) scale(1.12); }
        }
      `}</style>
    </>
  );
}

export default App;