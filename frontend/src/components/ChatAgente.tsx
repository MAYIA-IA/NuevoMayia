import { useState, useRef, useEffect } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

// Componente para renderizar markdown - Corregido para usar ReactNode
const MarkdownText = ({ text }: { text: string }) => {
  const renderMarkdown = (content: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let keyCounter = 0;

    // Procesar patrones de markdown
    const patterns = [
      { regex: /\*\*(.+?)\*\*|__(.+?)__/g, type: 'bold' as const },
      { regex: /\*(.+?)\*|_(.+?)_/g, type: 'italic' as const },
      { regex: /`([^`]+)`/g, type: 'code' as const },
      { regex: /\[([^\]]+)\]\(([^)]+)\)/g, type: 'link' as const },
    ];

    const allMatches: Array<{
      index: number;
      length: number;
      type: string;
      match: RegExpMatchArray;
    }> = [];

    patterns.forEach(({ regex, type }) => {
      // Reiniciar lastIndex del regex
      regex.lastIndex = 0;
      const matches = [...content.matchAll(regex)];
      matches.forEach((match) => {
        if (match.index !== undefined) {
          allMatches.push({
            index: match.index,
            length: match[0].length,
            type,
            match,
          });
        }
      });
    });

    // Ordenar matches por índice
    allMatches.sort((a, b) => a.index - b.index);

    // Usar Set para evitar superposición de matches
    const processedIndexes = new Set<number>();

    allMatches.forEach((item) => {
      // Verificar si este índice ya fue procesado
      if (processedIndexes.has(item.index)) return;
      
      // Marcar este índice y los siguientes caracteres como procesados
      for (let i = item.index; i < item.index + item.length; i++) {
        processedIndexes.add(i);
      }

      // Agregar texto antes del match
      if (item.index > lastIndex) {
        const textBefore = content.substring(lastIndex, item.index);
        if (textBefore) {
          parts.push(<span key={`text-${keyCounter++}`}>{textBefore}</span>);
        }
      }

      // Agregar el elemento formateado
      const matchText = item.match[1] || item.match[2] || '';

      switch (item.type) {
        case 'bold':
          parts.push(
            <strong key={`bold-${keyCounter++}`} className="font-bold text-lime-300">
              {matchText}
            </strong>
          );
          break;
        case 'italic':
          parts.push(
            <em key={`italic-${keyCounter++}`} className="italic">
              {matchText}
            </em>
          );
          break;
        case 'code':
          parts.push(
            <code
              key={`code-${keyCounter++}`}
              className="bg-gray-900/50 text-cyan-300 px-1.5 py-0.5 rounded text-xs font-mono border border-gray-700"
            >
              {matchText}
            </code>
          );
          break;
        case 'link':
          const linkUrl = item.match[2] || '#';
          parts.push(
            <a
              key={`link-${keyCounter++}`}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              {matchText}
            </a>
          );
          break;
      }

      lastIndex = item.index + item.length;
    });

    // Agregar texto restante
    if (lastIndex < content.length) {
      parts.push(<span key={`text-${keyCounter++}`}>{content.substring(lastIndex)}</span>);
    }

    return parts.length > 0 ? parts : [<span key="default">{content}</span>];
  };

  // Dividir por líneas y procesar
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let keyCounter = 0; // Eliminado currentListType ya que no se usa

  const closeList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${keyCounter++}`} className="space-y-2 my-2">
          {listItems}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    // Lista desordenada
    if (/^[-*•]\s+/.test(trimmedLine)) {
      const content = trimmedLine.replace(/^[-*•]\s+/, '');
      listItems.push(
        <li key={`li-${keyCounter++}`} className="flex items-start gap-2 ml-4">
          <span className="text-lime-400 mt-1">•</span>
          <span className="flex-1">{renderMarkdown(content)}</span>
        </li>
      );
    }
    // Lista ordenada
    else if (/^\d+[.)]\s+/.test(trimmedLine)) {
      const content = trimmedLine.replace(/^\d+[.)]\s+/, '');
      const number = trimmedLine.match(/^(\d+)/)?.[1] || '1';
      listItems.push(
        <li key={`li-${keyCounter++}`} className="flex items-start gap-2 ml-4">
          <span className="text-cyan-400 font-bold min-w-[1.5rem]">{number}.</span>
          <span className="flex-1">{renderMarkdown(content)}</span>
        </li>
      );
    }
    // Encabezados
    else if (/^#{1,6}\s+/.test(trimmedLine)) {
      closeList();

      const level = (trimmedLine.match(/^#+/) || [''])[0].length;
      const content = trimmedLine.replace(/^#+\s+/, '');
      const sizeClass = 
        level === 1 ? 'text-lg' : 
        level === 2 ? 'text-base' : 
        'text-sm';
      
      elements.push(
        <div key={`heading-${keyCounter++}`} className={`${sizeClass} font-bold text-lime-300 mt-3 mb-1`}>
          {renderMarkdown(content)}
        </div>
      );
    }
    // Línea vacía
    else if (trimmedLine === '') {
      closeList();
      
      if (index < lines.length - 1) {
        elements.push(<div key={`space-${keyCounter++}`} className="h-2"></div>);
      }
    }
    // Texto normal
    else {
      closeList();

      elements.push(
        <p key={`p-${keyCounter++}`} className="leading-relaxed">
          {renderMarkdown(trimmedLine)}
        </p>
      );
    }
  });

  // Cerrar lista final si existe
  closeList();

  return <div className="space-y-1">{elements}</div>;
};

const ChatWidget = ({ 
  isOpen = false,
  onToggle 
}: ChatWidgetProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy **MAYiA Assistant**. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [departamento, setDepartamento] = useState<string>('general');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const focusTimeoutRef = useRef<number | null>(null); // Cambiado a number | null para setTimeout

  // Verificar estado del backend al montar
  useEffect(() => {
    checkBackendStatus();
    
    return () => {
      if (focusTimeoutRef.current !== null) {
        clearTimeout(focusTimeoutRef.current);
      }
    };
  }, []);

  const checkBackendStatus = async () => {
    try {
      const response = await fetch('http://localhost:3001/health');
      if (response.ok) {
        setBackendStatus('online');
      } else {
        setBackendStatus('offline');
      }
    } catch (error) {
      console.error('Backend no disponible:', error);
      setBackendStatus('offline');
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      focusTimeoutRef.current = window.setTimeout(() => inputRef.current?.focus(), 100);
    }
    
    return () => {
      if (focusTimeoutRef.current !== null) {
        clearTimeout(focusTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim() || isLoading || backendStatus === 'offline') return;
    
    const userMessage = inputText.trim();
    setInputText('');
    addMessage(userMessage, 'user');
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/chat/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          mensaje: userMessage,
          departamento: departamento
        }),
      });
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Ruta no encontrada. Verifica que la ruta /api/chat/message exista. Estado: ${response.status}`);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      let botResponse = '';
      
      if (data.respuesta) {
        botResponse = data.respuesta;
      } else if (data.reply) {
        botResponse = data.reply;
      } else if (data.text) {
        botResponse = data.text;
      } else if (data.message) {
        botResponse = data.message;
      } else if (data.response) {
        botResponse = data.response;
      } else {
        botResponse = 'Recibí tu mensaje. ¿En qué más puedo ayudarte?';
      }
      
      addMessage(botResponse, 'bot');
      
    } catch (error) {
      console.error('Error sending message:', error);
      
      let errorMessage = 'Lo siento, hubo un error al procesar tu mensaje.';
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'No se pudo conectar con el backend. Asegúrate de que el servidor esté corriendo en `http://localhost:3001`';
        } else if (error.message.includes('404')) {
          errorMessage = `Ruta no encontrada. Verifica que el endpoint /api/chat/message exista en el backend.\n\nError: ${error.message}`;
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }
      
      addMessage(errorMessage, 'bot');
      checkBackendStatus();
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading && backendStatus !== 'offline') {
      handleSubmit(e as unknown as FormEvent);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: '¡Hola! Soy **MAYiA Assistant**. ¿En qué puedo ayudarte hoy?',
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Chat toggle button (floating)
  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-lime-400 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label="Abrir chat de asistente"
      >
        <svg 
          className="w-6 h-6 text-gray-900 group-hover:rotate-12 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
          <span className="animate-ping absolute w-full h-full bg-red-500 rounded-full opacity-75"></span>
          <span className="relative">!</span>
        </span>
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-white/10"
      style={{
        width: 'min(360px, calc(100vw - 2rem))',
        height: 'min(520px, calc(100dvh - 5rem))',
      }}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-lime-500 to-cyan-600 p-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">MAYiA Assistant</h3>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  backendStatus === 'online' ? 'bg-green-400 animate-pulse' :
                  backendStatus === 'offline' ? 'bg-red-400' : 'bg-yellow-400 animate-pulse'
                }`}></div>
                <span className="text-white/80 text-xs">
                  {backendStatus === 'online' ? 'Conectado a MAYiA' :
                   backendStatus === 'offline' ? 'Backend offline' : 'Verificando conexión...'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={clearChat}
              className="p-2 text-white/80 hover:text-white transition-colors"
              title="Limpiar chat"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            
            <button
              onClick={onToggle}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Cerrar chat"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Selector de departamento */}
        <div className="mt-3">
          <label className="text-white/80 text-xs mr-2">Departamento:</label>
          <select 
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            className="bg-white/20 text-white text-xs rounded-lg px-2 py-1 border border-white/30 focus:outline-none focus:ring-1 focus:ring-lime-400"
            disabled={isLoading}
          >
            <option value="general">General</option>
            <option value="ventas">Ventas</option>
            <option value="soporte">Soporte</option>
            <option value="tecnico">Técnico</option>
            <option value="administracion">Administración</option>
          </select>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-lime-400 to-cyan-500 text-gray-900 rounded-br-none'
                  : 'bg-gray-800 text-white rounded-bl-none'
              }`}
            >
              <div className="text-sm">
                {message.sender === 'bot' ? (
                  <MarkdownText text={message.text} />
                ) : (
                  <p>{message.text}</p>
                )}
              </div>
              <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-gray-700' : 'text-gray-400'}`}>
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 text-white rounded-2xl rounded-bl-none p-4 max-w-[80%]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Procesando con MAYiA...</p>
            </div>
          </div>
        )}
        
        {backendStatus === 'offline' && (
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 text-center">
            <p className="text-red-300 text-sm">
              Backend no disponible. Asegúrate de que el servidor esté corriendo en <code className="bg-black/50 px-2 py-1 rounded">http://localhost:3001</code>
            </p>
            <button
              onClick={checkBackendStatus}
              className="mt-2 text-red-300 hover:text-red-100 text-xs underline"
              type="button"
            >
              Reintentar conexión
            </button>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 flex-shrink-0">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2.5 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
            disabled={isLoading || backendStatus === 'offline'}
          />
          <button
            type="submit"
            disabled={isLoading || !inputText.trim() || backendStatus === 'offline'}
            className="bg-gradient-to-r from-lime-500 to-cyan-600 text-white px-4 rounded-xl font-semibold hover:from-lime-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-gray-400 text-xs mt-2 text-center">
          {backendStatus === 'offline' 
            ? 'Conecta el backend para enviar mensajes'
            : `Presiona Enter para enviar • Departamento: ${departamento}`}
        </p>
      </form>
    </div>
  );
};

export default ChatWidget;