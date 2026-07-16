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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

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
        padding: isMobile ? '8px' : '24px',
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
          width: isMobile ? '98%' : '95%',
          maxWidth: '850px',
          height: 'auto',
          maxHeight: isMobile ? '92vh' : '85vh',
          backgroundColor: '#ffffff', // Light theme background
          borderRadius: isMobile ? '16px' : '24px',
          border: `1px solid #e5e7eb`,
          boxShadow: `0 25px 50px -12px rgba(0,0,0,0.25), 0 0 40px ${colores.primario}20`,
          overflow: 'hidden', // Contains the child scroll
          display: 'flex',
          flexDirection: 'column',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(40px)',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
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
            backgroundColor: '#f3f4f6',
            border: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4b5563',
            cursor: 'pointer',
            zIndex: 100,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colores.primario;
            e.currentTarget.style.borderColor = colores.primario;
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.color = '#4b5563';
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
          width: 6px;
        }
        .social-popover-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .social-popover-scroll::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .social-popover-scroll::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default SocialPopover;
