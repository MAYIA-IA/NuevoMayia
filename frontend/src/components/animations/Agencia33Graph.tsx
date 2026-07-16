import { useRef, useEffect } from 'react';

export default function Agencia33Graph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);
  const nodesRef = useRef([
    { id: 'n1', label: 'IA', x: 0.25, y: 0.3, radius: 14, color: '#93c5fd' },
    { id: 'n2', label: 'Agentes', x: 0.5, y: 0.2, radius: 16, color: '#60a5fa' },
    { id: 'n3', label: 'Ventas', x: 0.75, y: 0.4, radius: 15, color: '#3b82f6' },
    { id: 'n4', label: 'Marketing', x: 0.2, y: 0.7, radius: 15, color: '#2563eb' },
    { id: 'n5', label: 'Autónomo', x: 0.6, y: 0.8, radius: 16, color: '#1d4ed8' },
    { id: 'n6', label: 'CRM', x: 0.45, y: 0.55, radius: 14, color: '#1e3a8a' },
  ]);
  const edgesRef = useRef([
    { source: 'n1', target: 'n2', progress: 0.2, speed: 0.008 },
    { source: 'n1', target: 'n3', progress: 0.7, speed: 0.006 },
    { source: 'n2', target: 'n3', progress: 0.0, speed: 0.009 },
    { source: 'n1', target: 'n4', progress: 0.5, speed: 0.01 },
    { source: 'n4', target: 'n5', progress: 0.9, speed: 0.007 },
    { source: 'n5', target: 'n3', progress: 0.3, speed: 0.009 },
    { source: 'n2', target: 'n6', progress: 0.1, speed: 0.008 },
    { source: 'n6', target: 'n1', progress: 0.8, speed: 0.007 },
    { source: 'n6', target: 'n5', progress: 0.4, speed: 0.009 },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width;
    let h = canvas.height;

    const resize = () => {
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        w = canvas.width;
        h = canvas.height;
      }
    };
    resize();

    const animate = () => {
      resize();
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      const findNode = (id: string) => nodesRef.current.find(n => n.id === id);
      const time = Date.now() * 0.001;

      nodesRef.current.forEach(node => {
        const baseX = node.x * w;
        const baseY = node.y * h;
        const offsetX = Math.sin(time * 2 + node.radius) * 1.5;
        const offsetY = Math.cos(time * 3 + node.radius) * 1.5;
        (node as any).curX = baseX + offsetX;
        (node as any).curY = baseY + offsetY;
      });

      edgesRef.current.forEach(edge => {
        const sourceNode = findNode(edge.source) as any;
        const targetNode = findNode(edge.target) as any;
        if (!sourceNode || !targetNode) return;

        ctx.beginPath();
        ctx.moveTo(sourceNode.curX, sourceNode.curY);
        ctx.lineTo(targetNode.curX, targetNode.curY);
        ctx.strokeStyle = 'rgba(147, 197, 253, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();

        const t = edge.progress;
        const px = sourceNode.curX + (targetNode.curX - sourceNode.curX) * t;
        const py = sourceNode.curY + (targetNode.curY - sourceNode.curY) * t;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#60a5fa';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        edge.progress += edge.speed;
        if (edge.progress > 1) edge.progress = 0;
      });

      nodesRef.current.forEach(node => {
        const curr = node as any;
        ctx.beginPath();
        ctx.arc(curr.curX, curr.curY, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = '#60a5fa';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.font = 'bold 9px sans-serif';
        ctx.fillStyle = '#0f172a';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, curr.curX, curr.curY);
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationIdRef.current);
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}
