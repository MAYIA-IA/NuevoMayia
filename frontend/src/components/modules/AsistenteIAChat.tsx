import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { brandingConfig } from '../../config/branding';

const { colores, ia } = brandingConfig;

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
  time: string;
};

export interface AsistenteIAChatHandle {
  sendExternal: (texto: string) => void;
  focusInput: () => void;
}

/* ── Markdown renderer (inline) ─────────────────────────────────────────── */
const MarkdownText = ({ text }: { text: string }) => {
  const renderInline = (content: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let last = 0;
    let k = 0;
    const patterns = [
      { re: /\*\*(.+?)\*\*/g,   tag: 'bold' as const },
      { re: /\*(.+?)\*/g,       tag: 'italic' as const },
      { re: /`([^`]+)`/g,       tag: 'code' as const },
    ];
    const matches: { idx: number; len: number; tag: string; inner: string }[] = [];
    patterns.forEach(({ re, tag }) => {
      re.lastIndex = 0;
      for (const m of content.matchAll(re)) {
        if (m.index !== undefined) matches.push({ idx: m.index, len: m[0].length, tag, inner: m[1] });
      }
    });
    matches.sort((a, b) => a.idx - b.idx);
    const used = new Set<number>();
    for (const { idx, len, tag, inner } of matches) {
      if (used.has(idx)) continue;
      for (let i = idx; i < idx + len; i++) used.add(i);
      if (idx > last) parts.push(<span key={k++}>{content.slice(last, idx)}</span>);
      if (tag === 'bold')   parts.push(<strong key={k++} style={{ fontWeight: 700, color: colores.primario }}>{inner}</strong>);
      if (tag === 'italic') parts.push(<em key={k++}>{inner}</em>);
      if (tag === 'code')   parts.push(<code key={k++} style={{ background: 'rgba(0,0,0,0.15)', padding: '1px 5px', borderRadius: 4, fontSize: 12 }}>{inner}</code>);
      last = idx + len;
    }
    if (last < content.length) parts.push(<span key={k++}>{content.slice(last)}</span>);
    return parts.length ? parts : [<span key="d">{content}</span>];
  };

  const lines = text.split('\n');
  const els: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let k = 0;
  const flush = () => {
    if (listItems.length) {
      els.push(<ul key={k++} style={{ margin: '6px 0', paddingLeft: 0, listStyle: 'none' }}>{listItems}</ul>);
      listItems = [];
    }
  };
  lines.forEach((line, i) => {
    const t = line.trim();
    if (/^[-*•]\s+/.test(t)) {
      listItems.push(
        <li key={k++} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 3 }}>
          <span style={{ color: colores.primario, flexShrink: 0, marginTop: 2 }}>•</span>
          <span>{renderInline(t.replace(/^[-*•]\s+/, ''))}</span>
        </li>
      );
    } else if (/^#{1,6}\s+/.test(t)) {
      flush();
      els.push(<div key={k++} style={{ fontWeight: 700, color: colores.primario, marginTop: 8, marginBottom: 2 }}>{renderInline(t.replace(/^#+\s+/, ''))}</div>);
    } else if (t === '') {
      flush();
      if (i < lines.length - 1) els.push(<div key={k++} style={{ height: 6 }} />);
    } else {
      flush();
      els.push(<p key={k++} style={{ margin: 0, lineHeight: 1.55 }}>{renderInline(t)}</p>);
    }
  });
  flush();
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>{els}</div>;
};

/* ── Sugerencias rápidas relacionadas con la página ─────────────────────── */
const SUGERENCIAS = [
  { text: '¿Cuánto cuesta una Píldora IA? 💊', icon: '💰' },
  { text: '¿Qué sectores atiende MAYiA? 🏢', icon: '🌐' },
  { text: '¿Cómo puedo agendar una demo? 📅', icon: '🚀' },
  { text: '¿Qué infraestructura tiene MAYiA? 🛠️', icon: '⚡' },
];

/* ── Componente principal ────────────────────────────────────────────────── */
export const AsistenteIAChat = forwardRef<AsistenteIAChatHandle>((_, ref) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const endRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    checkBackend();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const checkBackend = async () => {
    try {
      const r = await fetch('http://localhost:3001/health');
      setBackendStatus(r.ok ? 'online' : 'offline');
    } catch {
      setBackendStatus('offline');
    }
  };

  const sendMessage = async (texto?: string) => {
    const contenido = (texto ?? input).trim();
    if (!contenido || loading || backendStatus === 'offline') return;

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { role: 'user', content: contenido, time: now }]);
    setInput('');
    setLoading(true);

    try {
      const r = await fetch('http://localhost:3001/api/chat/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensaje: contenido, departamento: 'general' }),
      });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const data = await r.json();
      const respuesta = data.respuesta || data.reply || data.text || data.message || data.response || 'Recibí tu mensaje.';
      setMessages(prev => [...prev, { role: 'assistant', content: respuesta, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'No fue posible conectar con el asistente en este momento.', time: now }]);
      checkBackend();
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => setMessages([]);

  useImperativeHandle(ref, () => ({
    sendExternal: (texto: string) => sendMessage(texto),
    focusInput: () => inputRef.current?.focus(),
  }));

  const noMessages = messages.length === 0;

  return (
    <div style={{ height: '100%', backgroundColor: colores.fondoPrincipal, display: 'flex', flexDirection: 'column' }}>

      {/* ── Header ── */}
      <div style={{ padding: '14px 16px 10px', borderBottom: `1px solid ${colores.borde}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${colores.primario}, ${colores.primarioOscuro})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, color: '#111', flexShrink: 0 }}>
            AI
          </div>
          <div>
            <div style={{ fontWeight: 700, color: colores.textoClaro, fontSize: 14 }}>{ia.nombre}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: colores.textoMedio }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                background: backendStatus === 'online' ? '#4ade80' : backendStatus === 'offline' ? '#f87171' : '#facc15',
                boxShadow: backendStatus === 'online' ? '0 0 6px #4ade80' : 'none',
                animation: backendStatus === 'checking' ? 'pulse 1.5s infinite' : 'none',
              }} />
              {backendStatus === 'online' ? 'Conectado' : backendStatus === 'offline' ? 'Offline' : 'Verificando…'}
            </div>
          </div>
        </div>
        {messages.length > 0 && (
          <button
            onClick={clearChat}
            title="Limpiar conversación"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: colores.textoMedio, padding: 4, borderRadius: 8, lineHeight: 0 }}
          >
            <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Mensajes ── */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, padding: '14px 16px', minHeight: 0 }}>

        {/* Estado inicial: bienvenida + sugerencias */}
        {noMessages && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 16 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: `linear-gradient(135deg, ${colores.primario}, ${colores.primarioOscuro})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: '#111', margin: '0 auto 12px' }}>AI</div>
              <div style={{ fontWeight: 700, color: colores.textoClaro, fontSize: 15, marginBottom: 4 }}>¡Hola! Soy {ia.nombre}</div>
              <div style={{ fontSize: 12, color: colores.textoMedio, lineHeight: 1.5 }}>Pregúntame lo que necesites sobre MAYiA.<br />Estoy aquí para ayudarte.</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, width: '100%' }}>
              {SUGERENCIAS.map(s => (
                <button
                  key={s.text}
                  onClick={() => sendMessage(s.text)}
                  disabled={backendStatus === 'offline'}
                  style={{
                    textAlign: 'left', background: 'rgba(255,255,255,0.03)', border: `1px solid ${colores.borde}`,
                    borderRadius: 14, padding: '10px 14px', cursor: backendStatus === 'offline' ? 'not-allowed' : 'pointer',
                    color: colores.textoClaro, fontSize: 12, lineHeight: 1.4, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex', alignItems: 'center', gap: 10,
                    opacity: backendStatus === 'offline' ? 0.5 : 1,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  }}
                  onMouseEnter={e => {
                    if (backendStatus !== 'offline') {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(164, 217, 85, 0.08)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = colores.primario;
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(164, 217, 85, 0.15)';
                    }
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = colores.borde;
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                  }}
                >
                  <span style={{ fontSize: 16 }}>{s.icon}</span>
                  {s.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mensajes de conversación */}
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%', animation: 'fadeInKpi 0.25s ease' }}>
            {m.role === 'assistant' && (
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg, ${colores.primario}, ${colores.primarioOscuro})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 11, color: '#111', flexShrink: 0, marginTop: 4 }}>AI</div>
            )}
            <div style={{
              backgroundColor: m.role === 'user' ? colores.primario : colores.fondoTerciario,
              color: m.role === 'user' ? '#111' : colores.textoClaro,
              padding: '10px 14px',
              borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              fontSize: 13, lineHeight: 1.5,
            }}>
              {m.role === 'assistant' ? <MarkdownText text={m.content} /> : <p style={{ margin: 0 }}>{m.content}</p>}
              <div style={{ fontSize: 10, color: m.role === 'user' ? 'rgba(0,0,0,0.5)' : colores.textoMedio, marginTop: 5, textAlign: 'right' }}>{m.time}</div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg, ${colores.primario}, ${colores.primarioOscuro})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 11, color: '#111', flexShrink: 0 }}>AI</div>
            <div style={{ background: colores.fondoTerciario, borderRadius: '16px 16px 16px 4px', padding: '10px 14px', display: 'flex', gap: 4 }}>
              {[0, 0.2, 0.4].map((d, i) => (
                <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: colores.primario, animation: `bounce 1.2s ${d}s infinite` }} />
              ))}
            </div>
          </div>
        )}

        {/* Backend offline */}
        {backendStatus === 'offline' && (
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 12, padding: '10px 14px', fontSize: 12, color: '#f87171', textAlign: 'center' }}>
            Backend no disponible.{' '}
            <button onClick={checkBackend} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f87171', textDecoration: 'underline', fontSize: 12 }}>Reintentar</button>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* ── Input ── */}
      <div style={{ padding: '12px 16px', borderTop: `1px solid ${colores.borde}`, flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            placeholder={backendStatus === 'offline' ? 'Backend offline…' : 'Escribe tu pregunta…'}
            disabled={loading || backendStatus === 'offline'}
            style={{
              flex: 1, padding: '10px 16px', borderRadius: 999,
              border: `1px solid ${colores.borde}`,
              backgroundColor: colores.fondoSecundario,
              color: colores.textoClaro,
              outline: 'none', fontSize: 13,
              opacity: backendStatus === 'offline' ? 0.5 : 1,
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim() || backendStatus === 'offline'}
            style={{
              padding: '0 18px', borderRadius: 999, border: 'none',
              background: `linear-gradient(135deg, ${colores.primario}, ${colores.primarioOscuro})`,
              color: '#111', fontWeight: 700, cursor: 'pointer',
              opacity: (loading || !input.trim() || backendStatus === 'offline') ? 0.5 : 1,
              fontSize: 13, transition: 'opacity 0.2s',
            }}
          >
            <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p style={{ fontSize: 10, color: colores.textoOscuro, textAlign: 'center', marginTop: 6 }}>
          Enter para enviar • Powered by MAYiA AI
        </p>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%            { transform: translateY(-6px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
});

AsistenteIAChat.displayName = 'AsistenteIAChat';