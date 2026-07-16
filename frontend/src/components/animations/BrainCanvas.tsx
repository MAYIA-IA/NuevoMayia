import { forwardRef, useRef, useImperativeHandle, useEffect, Suspense } from 'react';
import { brandingConfig } from '../../config/branding';
import { useViewport } from '../../utils/useViewport';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

const hexToRgba = (hex: string, alpha: number) => {
  if (!hex || typeof hex !== 'string') return `rgba(164, 217, 85, ${alpha})`;
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return hex;
};

export interface BrainHandle { boost: () => void; }

const BrainCanvas = forwardRef<BrainHandle, { onPulse?: () => void }>(({ onPulse }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef = useRef(0);
  const spinRef = useRef(0);
  const ripples = useRef<number[]>([]);

  const { isMobile, width } = useViewport();
  const isIntersecting = useIntersectionObserver(canvasRef);

  const boost = () => { spinRef.current = Math.min(spinRef.current + 0.30, 0.6); ripples.current.push(tRef.current); };
  useImperativeHandle(ref, () => ({ boost }));

  useEffect(() => {
    if (!isIntersecting) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth; h = parent.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const N = 340;
    const pts: { x: number; y: number; z: number }[] = [];
    const gr = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = gr * i;
      pts.push({ x: Math.cos(th) * r, y, z: Math.sin(th) * r });
    }

    const rings = [
      { a: 1.20, b: 0.5, sp: 0.7, ph: 0.0, c: '82,183,136' },
      { a: 0.55, b: 1.20, sp: -0.5, ph: 0.5, c: '45,106,79' },
      { a: 1.14, b: 0.88, sp: 0.4, ph: 1.2, c: '124,203,169' },
    ];

    const shadow = isMobile ? 0 : 3;

    const draw = () => {
      const t = tRef.current + 0.006 + spinRef.current;
      tRef.current = t;
      spinRef.current *= 0.94;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const R = Math.min(w, h) * 0.34;
      const fov = R * 3.2;

      // Halo exterior
      const halo = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, R * 1.7);
      halo.addColorStop(0, 'rgba(82,183,136,0.10)');
      halo.addColorStop(1, 'rgba(82,183,136,0)');
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      // Anillos orbitales + electrones
      for (const rg of rings) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * rg.sp + rg.ph);
        ctx.beginPath();
        ctx.ellipse(0, 0, R * rg.a, R * rg.b, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rg.c},0.32)`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(82,183,136,0.6)';
        ctx.shadowBlur = shadow;
        ctx.stroke();
        // electrón
        const ex = Math.cos(t * 2 + rg.ph) * R * rg.a;
        const ey = Math.sin(t * 2 + rg.ph) * R * rg.b;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(124,203,169,0.95)';
        ctx.shadowColor = 'rgba(82,183,136,1)';
        ctx.shadowBlur = shadow * 1.5;
        ctx.arc(ex, ey, 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.shadowBlur = 0;

      // Esfera de partículas (rotación 3D)
      const cosY = Math.cos(t), sinY = Math.sin(t);
      const tilt = 0.5, cosT = Math.cos(tilt), sinT = Math.sin(tilt);
      const proj = pts.map(p => {
        const x = p.x * cosY + p.z * sinY;
        const z = -p.x * sinY + p.z * cosY;
        const y2 = p.y * cosT - z * sinT;
        const z2 = p.y * sinT + z * cosT;
        const s = fov / (fov + z2 * R);
        return { sx: cx + x * R * s, sy: cy + y2 * R * s, z: z2 };
      }).sort((a, b) => a.z - b.z);

      for (const q of proj) {
        const depth = (q.z + 1) / 2;
        ctx.beginPath();
        ctx.fillStyle = `rgba(45,106,79,${0.12 + depth * 0.78})`;
        ctx.shadowColor = 'rgba(82,183,136,0.9)';
        ctx.shadowBlur = depth * shadow * 1.5;
        ctx.arc(q.sx, q.sy, 1.1 + depth * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Núcleo — halo + orbe + destello rotatorio + rim
      const cr = R * 0.27 * (1 + Math.sin(t * 3) * 0.13);
      const halo2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr * 2.4);
      halo2.addColorStop(0, 'rgba(82,183,136,0.30)');
      halo2.addColorStop(1, 'rgba(82,183,136,0)');
      ctx.fillStyle = halo2;
      ctx.beginPath(); ctx.arc(cx, cy, cr * 2.4, 0, Math.PI * 2); ctx.fill();

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
      g.addColorStop(0, 'rgba(255,255,255,0.98)');
      g.addColorStop(0.28, 'rgba(170,235,205,0.95)');
      g.addColorStop(0.6, 'rgba(82,183,136,0.82)');
      g.addColorStop(1, 'rgba(45,106,79,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fill();

      const hx = cx + Math.cos(t * 1.4) * cr * 0.32;
      const hy = cy + Math.sin(t * 1.4) * cr * 0.32;
      const hg = ctx.createRadialGradient(hx, hy, 0, hx, hy, cr * 0.6);
      hg.addColorStop(0, 'rgba(255,255,255,0.95)');
      hg.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = hg;
      ctx.beginPath(); ctx.arc(hx, hy, cr * 0.6, 0, Math.PI * 2); ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(82,183,136,0.45)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(82,183,136,0.8)';
      ctx.shadowBlur = shadow * 1.5;
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Flujo de datos — módulos → núcleo (curvas + streams)
      const bez = (x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, u: number) => {
        const m = 1 - u;
        return { x: m * m * x0 + 2 * m * u * x1 + u * u * x2, y: m * m * y0 + 2 * m * u * y1 + u * u * y2 };
      };
      const spreadY = Math.min(h * 0.40, R * 2.4);
      const rels = [-0.5, -0.25, 0, 0.25, 0.5];
      const anchors: { ax: number; ay: number; incoming: boolean; seed: number }[] = [];
      rels.forEach((ry, i) => {
        anchors.push({ ax: w * 0.19, ay: cy + ry * spreadY, incoming: true, seed: i });
        anchors.push({ ax: w * 0.81, ay: cy + ry * spreadY, incoming: i % 3 !== 0, seed: i + 5 });
      });
      anchors.forEach(a => {
        const cpx = (a.ax + cx) / 2;
        const cpy = cy + (a.ay - cy) * 0.12;
        const lg = ctx.createLinearGradient(a.ax, a.ay, cx, cy);
        lg.addColorStop(0, 'rgba(82,183,136,0.14)');
        lg.addColorStop(1, 'rgba(82,183,136,0.65)');
        ctx.beginPath();
        ctx.moveTo(a.ax, a.ay);
        ctx.quadraticCurveTo(cpx, cpy, cx, cy);
        ctx.strokeStyle = lg;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = 'rgba(82,183,136,0.7)';
        ctx.shadowBlur = shadow;
        ctx.stroke();
        ctx.shadowBlur = 0;
        for (let k = 0; k < 4; k++) {
          const raw = (t * 0.16 + a.seed * 0.21 + k * 0.25) % 1;
          const u = a.incoming ? raw : 1 - raw;
          const p = bez(a.ax, a.ay, cpx, cpy, cx, cy, u);
          const fade = Math.sin(raw * Math.PI);
          const size = (2.6 - k * 0.5) * fade;
          if (size <= 0.3) continue;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${k === 0 ? '124,203,169' : '82,183,136'},${(k === 0 ? 0.95 : 0.55) * fade})`;
          ctx.shadowColor = 'rgba(82,183,136,1)';
          ctx.shadowBlur = shadow * 1.2 * fade;
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.shadowBlur = 0;

      // Ondas al hacer clic / sugerencia
      ripples.current = ripples.current.filter(r => t - r < 1.2);
      for (const r of ripples.current) {
        const p = (t - r) / 1.2;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(82,183,136,${(1 - p) * 0.5})`;
        ctx.lineWidth = 2;
        ctx.arc(cx, cy, R * (0.3 + p * 1.15), 0, Math.PI * 2);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); };
  }, [isIntersecting, width, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      onClick={() => { boost(); onPulse?.(); }}
      style={{ position: 'absolute', inset: 0, cursor: 'pointer' }}
    />
  );
});

BrainCanvas.displayName = 'BrainCanvas';

export default BrainCanvas;
