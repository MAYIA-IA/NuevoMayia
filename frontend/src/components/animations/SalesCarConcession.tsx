import { useRef, useEffect, useState, useCallback } from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
import { useViewport } from '../../utils/useViewport';

export default function SalesCarConcession() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const [carOffset, setCarOffset] = useState(0);
  const carOffsetRef = useRef(0);
  const moveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMovingRef = useRef(false);

  const isIntersecting = useIntersectionObserver(canvasRef);
  const { width } = useViewport();

  const drawCar = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.moveTo(x - 30, y);
    ctx.lineTo(x - 30, y - 12);
    ctx.lineTo(x - 18, y - 20);
    ctx.lineTo(x + 10, y - 20);
    ctx.lineTo(x + 25, y - 12);
    ctx.lineTo(x + 30, y);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#bfdbfe';
    ctx.beginPath();
    ctx.moveTo(x + 8, y - 18);
    ctx.lineTo(x + 22, y - 11);
    ctx.lineTo(x + 8, y - 11);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - 15, y - 18);
    ctx.lineTo(x - 5, y - 18);
    ctx.lineTo(x - 5, y - 11);
    ctx.lineTo(x - 25, y - 11);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#1f2937';
    ctx.beginPath();
    ctx.arc(x - 15, y + 1, 6, 0, Math.PI * 2);
    ctx.arc(x + 15, y + 1, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#9ca3af';
    ctx.stroke();

    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(x + 28, y - 6, 2.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#fca5a5';
    ctx.beginPath();
    ctx.arc(x - 28, y - 6, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  const drawBackground = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, scrollOffset: number) => {
    const grad = ctx.createLinearGradient(0, 0, 0, h * 0.6);
    grad.addColorStop(0, '#fef3c7');
    grad.addColorStop(1, '#fde68a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h * 0.6);

    ctx.fillStyle = '#b45309';
    ctx.fillRect(0, h * 0.6, w, h * 0.4);

    ctx.fillStyle = '#4b5563';
    ctx.fillRect(0, h * 0.65, w, h * 0.3);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.setLineDash([15, 10]);
    ctx.beginPath();
    ctx.moveTo(-scrollOffset % 25, h * 0.78);
    ctx.lineTo(w, h * 0.78);
    ctx.stroke();
    ctx.setLineDash([]);
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width;
    let h = canvas.height;
    let bgScroll = 0;

    const animate = () => {
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        w = canvas.width;
        h = canvas.height;
      }

      ctx.clearRect(0, 0, w, h);
      bgScroll += 2;
      drawBackground(ctx, w, h, bgScroll);

      const carX = w / 2 + carOffsetRef.current;
      const carY = h * 0.72;

      drawCar(ctx, carX, carY);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [drawBackground, drawCar, isIntersecting, width]);

  useEffect(() => {
    carOffsetRef.current = carOffset;
  }, [carOffset]);

  useEffect(() => {
    if (!isIntersecting) {
      if (moveTimerRef.current) clearTimeout(moveTimerRef.current);
      return;
    }

    const scheduleMove = () => {
      const delay = Math.random() * 3000 + 2000;
      moveTimerRef.current = setTimeout(() => {
        if (!isMovingRef.current) startMoving();
        scheduleMove();
      }, delay);
    };

    const startMoving = () => {
      isMovingRef.current = true;
      const duration = 1200;
      const start = carOffsetRef.current;
      const target = start + 60;
      const startTime = Date.now();

      const step = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed >= duration) {
          setCarOffset(target);
          startReturning(target);
          return;
        }
        const progress = elapsed / duration;
        const eased = Math.sin(progress * Math.PI * 0.5);
        setCarOffset(start + (target - start) * eased);
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const startReturning = (fromOffset: number) => {
      const duration = 1200;
      const startTime = Date.now();
      const step = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed >= duration) {
          setCarOffset(0);
          isMovingRef.current = false;
          return;
        }
        const progress = elapsed / duration;
        const eased = Math.sin(progress * Math.PI * 0.5);
        setCarOffset(fromOffset * (1 - eased));
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    scheduleMove();
    return () => {
      if (moveTimerRef.current) clearTimeout(moveTimerRef.current);
    };
  }, [isIntersecting]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}
