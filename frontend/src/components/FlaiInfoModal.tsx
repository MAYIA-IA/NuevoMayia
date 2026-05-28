import { ExternalLink, Calendar } from 'lucide-react';
import flaiLogo from '../assets/logosNativos/logo-FLAI.png';

export default function FlaiInfoModal() {
  const handleAgendarCita = () => {
    window.open("https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0", '_blank');
  };

  return (
    <div style={{ padding: '32px 40px', background: '#ffffff', borderRadius: 24, display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: 'linear-gradient(135deg, #DC2626, #991B1B)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, boxShadow: '0 10px 20px rgba(220,38,38,0.2)' }}>
          <img src={flaiLogo} alt="FLAI" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: 32, fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>FLAI</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: 16, color: '#DC2626', fontWeight: 700 }}>Nube Soberana</p>
        </div>
      </div>

      {/* Content */}
      <div>
        <p style={{ fontSize: 18, color: '#4b5563', lineHeight: 1.6, margin: '0 0 32px 0' }}>
          <strong style={{ color: '#DC2626' }}>FLAI</strong> es la primera nube de inteligencia artificial soberana de México, diseñada para mantener tus datos dentro del territorio nacional con la más alta seguridad y rendimiento.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 40 }}>
          {[
            { color: '#006847', title: '100% México', text: 'Todos tus datos permanecen en territorio mexicano, garantizando soberanía digital completa y cumplimiento normativo.' },
            { color: '#DC2626', title: 'Primera Nube IA Soberana', text: 'Infraestructura de hardware especializada en IA con procesamiento GPU de altísimo rendimiento.' },
            { color: '#006847', title: '30 Centros de Datos', text: 'Red distribuida de centros de datos edge a lo largo del país para garantizar máxima disponibilidad.' }
          ].map((feature, idx) => (
            <div key={idx} style={{ background: '#f9fafb', borderRadius: 16, padding: 24, border: '1px solid #f3f4f6', borderTop: `4px solid ${feature.color}` }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: 18, fontWeight: 800, color: '#111827' }}>{feature.title}</h3>
              <p style={{ margin: 0, fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button 
            onClick={handleAgendarCita}
            style={{ flex: 1, minWidth: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'linear-gradient(135deg, #DC2626, #991B1B)', color: '#ffffff', fontWeight: 700, fontSize: 16, border: 'none', borderRadius: 12, padding: '16px 24px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 8px 16px rgba(220,38,38,0.2)' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Calendar size={20} />
            Agendar Cotización
          </button>
          
          <a 
            href="#" 
            onClick={e => { e.preventDefault(); alert("Enlace a la página de FLAI pendiente"); }}
            style={{ flex: 1, minWidth: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#f3f4f6', color: '#111827', fontWeight: 700, fontSize: 16, border: '1px solid #e5e7eb', borderRadius: 12, padding: '16px 24px', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#e5e7eb'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Visitar página de FLAI
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
