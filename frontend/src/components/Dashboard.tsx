import React, { useState, useEffect } from 'react';
import { brandingConfig } from '../config/branding';
import { ArrowRight } from 'lucide-react';
import WelcomeHub from './WelcomeHub';

interface DashboardProps {
  onSectionChange?: (section: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onSectionChange }) => {
  const { colores } = brandingConfig;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        


        {/* ── Welcome Hub: Interactive Section Navigator ── */}
        <WelcomeHub onSectionChange={onSectionChange ?? (() => {})} />

        {/* Section title & Button */}
        <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <h2 style={{
            margin: 0,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: '700',
            color: colores.textoClaro,
            letterSpacing: '-0.4px',
            fontFamily: "'Inter', system-ui, sans-serif"
          }}>
            La plataforma más grande de México
          </h2>
          
          <button
            onClick={() => onSectionChange?.('analiticos')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '999px',
              border: 'none',
              background: colores.primario,
              color: '#1a1a1a',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: `0 4px 16px ${colores.primario}40`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 8px 24px ${colores.primario}60`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 4px 16px ${colores.primario}40`;
            }}
          >
            México es MAYiA
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};