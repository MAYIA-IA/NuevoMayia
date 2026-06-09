import { useState } from 'react';
import { X, Loader2 } from 'lucide-react';

export default function CalendarModal({ onClose }: { onClose?: () => void }) {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ 
      width: 'min(440px, 95vw)', 
      height: 'min(620px, 85vh)', 
      backgroundColor: '#ffffff', 
      borderRadius: '20px', 
      display: 'flex', 
      flexDirection: 'column', 
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)', 
      border: '1px solid #e5e7eb', 
      padding: '12px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderBottom: '1px solid #f3f4f6', 
        paddingBottom: '8px',
        marginBottom: '4px',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: 800, color: '#111827' }}>Agendar Consulta</span>
        </div>
        {onClose && (
          <button 
            onClick={onClose} 
            style={{ 
              background: '#f3f4f6', 
              border: 'none', 
              borderRadius: '50%', 
              width: '26px', 
              height: '26px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer', 
              color: '#9ca3af', 
              padding: 0,
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#e5e7eb';
              e.currentTarget.style.color = '#4b5563';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.color = '#9ca3af';
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Calendly IFrame */}
      <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%' }}>
        {loading && (
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#ffffff',
            gap: '12px',
            zIndex: 5
          }}>
            <Loader2 className="animate-spin" size={32} color="#A4D955" style={{ animation: 'spin 1s linear infinite' }} />
            <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: 600 }}>Cargando calendario...</span>
          </div>
        )}
        <iframe
          src="https://calendly.com/mayiainteligencia/consulta-mayia?hide_landing_page_details=1&hide_gdpr_banner=1"
          style={{ width: '100%', height: '100%', border: 'none', position: 'relative', zIndex: 1 }}
          onLoad={() => setLoading(false)}
          title="Calendly Mayia"
        />
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
