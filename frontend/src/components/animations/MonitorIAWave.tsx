import React, { useRef, useEffect, useState, useCallback } from 'react';

export default function MonitorIAWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationIdRef = useRef<number>(0);
  const streamRef = useRef<MediaStream | null>(null);

  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initAudio = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;

      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 1024;
      analyserRef.current = analyser;

      const bufferLength = analyser.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);

      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      setIsListening(true);
      setError(null);
    } catch (err: any) {
      setError('Micrófono no disponible');
      setIsListening(false);
    }
  }, []);

  const cleanup = useCallback(() => {
    if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    analyserRef.current = null;
    dataArrayRef.current = null;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(0, 0, w, h);

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#10b981';
    ctx.beginPath();

    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;

    if (isListening && analyser && dataArray) {
      analyser.getByteTimeDomainData(dataArray);
      const sliceWidth = w / dataArray.length;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * h) / 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        x += sliceWidth;
      }
    } else {
      const time = Date.now() * 0.005;
      const points = 80;
      const sliceWidth = w / points;
      let x = 0;

      for (let i = 0; i <= points; i++) {
        const amp = Math.sin(time + i * 0.08) * Math.cos(time * 0.5 + i * 0.04);
        const y = h / 2 + amp * (h * 0.35);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        x += sliceWidth;
      }
    }

    ctx.stroke();
    animationIdRef.current = requestAnimationFrame(draw);
  }, [isListening]);

  const startListening = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isListening) return;
    initAudio();
  };

  const stopListening = (e: React.MouseEvent) => {
    e.stopPropagation();
    cleanup();
    setIsListening(false);
  };

  useEffect(() => {
    animationIdRef.current = requestAnimationFrame(draw);
    return () => cleanup();
  }, [draw, cleanup]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      <div style={{ position: 'absolute', bottom: 6, right: 6, zIndex: 5 }}>
        {!isListening ? (
          <button 
            onClick={startListening} 
            style={{ padding: '3px 8px', fontSize: 10, background: '#10b981', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 700 }}
          >
            Escuchar Mic
          </button>
        ) : (
          <button 
            onClick={stopListening} 
            style={{ padding: '3px 8px', fontSize: 10, background: '#f44336', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 700 }}
          >
            Detener
          </button>
        )}
      </div>
      {error && (
        <span style={{ position: 'absolute', top: 6, left: 6, color: '#fca5a5', fontSize: 9, background: 'rgba(0,0,0,0.6)', padding: '2px 4px', borderRadius: 3 }}>
          Error Mic
        </span>
      )}
    </div>
  );
}
