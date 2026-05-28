import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { brandingConfig } from '../config/branding';

const { colores } = brandingConfig;

interface SocialPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  yPos: number; // Center Y coordinate of the trigger button in viewport
}

const SocialPopover: React.FC<SocialPopoverProps> = ({ isOpen, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setMounted(false), 400);
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', // cover whole screen
          inset: 0,
          backgroundColor: 'rgba(10, 10, 20, 0.7)',
          backdropFilter: 'blur(8px)',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 0,
        }}
      />

      {/* The Bubble Modal */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          height: '90vh',
          backgroundColor: '#0A0A14', // MAYIA dark theme background
          borderRadius: '24px',
          border: `1px solid ${colores.primario}40`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${colores.primario}15`,
          overflow: 'hidden', // Contains the child scroll
          display: 'flex',
          flexDirection: 'column',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1) translateX(0)' : 'scale(0.95) translateX(-20px)',
          transition: 'all 0.4s cubic-bezier(0.25, 1, 0.2, 1)',
          zIndex: 10,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            cursor: 'pointer',
            zIndex: 100,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${colores.primario}25`;
            e.currentTarget.style.borderColor = `${colores.primario}50`;
            e.currentTarget.style.color = colores.primario;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.color = '#fff';
          }}
        >
          <X size={20} />
        </button>

        {/* Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }} className="social-popover-scroll">
          {/* We wrap the children in a container to give it some breathing room from the edges if needed, 
              but since they are full sections, we let them fill the container. */}
          {children}
        </div>
      </div>
      
      <style>{`
        .social-popover-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .social-popover-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
        }
        .social-popover-scroll::-webkit-scrollbar-thumb {
          background: ${colores.primario}40;
          border-radius: 10px;
        }
        .social-popover-scroll::-webkit-scrollbar-thumb:hover {
          background: ${colores.primario}80;
        }
      `}</style>
    </div>
  );
};

export default SocialPopover;
