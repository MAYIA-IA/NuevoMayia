import React, { useState, useEffect } from 'react';
import { brandingConfig } from '../config/branding';

interface WelcomeHubProps {
  onSectionChange?: (section: string) => void;
}

const WelcomeHub: React.FC<WelcomeHubProps> = () => {
  const { colores } = brandingConfig;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div
      className="welcome-hub-wrapper"
      style={{
        position: 'relative',
        margin: isMobile ? '0 8px 32px' : '0 0 48px',
        zIndex: 10,
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          padding: isMobile ? '0 0 16px' : '0 0 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: isMobile ? '32px' : '44px',
              fontWeight: '300',
              color: colores.textoClaro,
              letterSpacing: '-1px',
              fontFamily: "'Inter', system-ui, sans-serif",
              lineHeight: 1.15,
            }}
          >
            Bienvenido a <span style={{ fontWeight: '800', color: colores.primarioOscuro }}>MAYiA</span>
          </h2>
          <p
            style={{
              margin: '12px 0 0',
              fontSize: isMobile ? '18px' : '22px',
              fontWeight: '500',
              color: colores.textoClaro,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            El punto de encuentro de la IA en México
          </p>
          <div style={{ marginTop: '16px', maxWidth: '800px' }}>
            <p
              style={{
                margin: 0,
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '400',
                color: colores.textoMedio,
                fontFamily: "'Inter', system-ui, sans-serif",
                lineHeight: 1.6,
              }}
            >
              Aquí convergen ideas, proyectos, laboratorios y personas construyendo el futuro. Explora demos, investigación, comunidades, herramientas y espacios donde la inteligencia artificial cobra vida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHub;
