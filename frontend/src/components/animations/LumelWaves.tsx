import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
import { useViewport } from '../../utils/useViewport';

export default function LumelWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);
  const isIntersecting = useIntersectionObserver(canvasRef);
  const { isMobile, width } = useViewport();

  useEffect(() => {
    if (!isIntersecting) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }
    };
    resize();

    const layers = [
      { amplitude: 15, frequency: 0.015, speed: 0.04, color: '#d2b4de', opacity: 0.35, offset: -10 },
      { amplitude: 22, frequency: 0.01, speed: 0.06, color: '#b19cd9', opacity: 0.3, offset: 0 },
      { amplitude: 28, frequency: 0.012, speed: 0.05, color: '#9b59b6', opacity: 0.25, offset: 10 },
    ];

    const particles: { x: number; y: number; radius: number; speed: number; alpha: number; direction: number }[] = [];
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * 300,
        y: Math.random() * 110,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.4 + 0.2,
        alpha: Math.random() * 0.6 + 0.2,
        direction: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const shadowMain = isMobile ? 0 : 3;
    const shadowPart = isMobile ? 0 : 1;

    const animate = () => {
      resize();
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, '#1e1b4b');
      bgGrad.addColorStop(1, '#3b0764');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      layers.forEach((layer, i) => {
        ctx.save();
        ctx.globalAlpha = layer.opacity;
        ctx.strokeStyle = layer.color;
        ctx.lineWidth = 2;
        ctx.beginPath();

        for (let x = 0; x <= w; x += 6) {
          const y = h / 2 + layer.offset +
            Math.sin(x * layer.frequency + time * layer.speed + i) * layer.amplitude +
            Math.sin(x * layer.frequency * 1.8 + time * layer.speed * 1.3) * (layer.amplitude * 0.3);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.shadowColor = layer.color;
        ctx.shadowBlur = shadowMain;
        ctx.stroke();
        ctx.restore();
      });

      particles.forEach(p => {
        p.x += Math.cos(p.direction + time * 0.2) * p.speed * 0.4;
        p.y += Math.sin(p.direction + time * 0.3) * p.speed * 0.4;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 210, 255, ${p.alpha})`;
        ctx.shadowColor = '#d2b4de';
        ctx.shadowBlur = shadowPart;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      time += 0.03;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationIdRef.current);
  }, [isIntersecting, width, isMobile]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}
