import { useState } from 'react';
import { X, Loader2, Check, User, Mail, Phone, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CalendarModal({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  // Form states
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  // Error states
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo.trim()) {
      newErrors.correo = 'El correo electrónico es obligatorio';
    } else if (!emailRegex.test(correo.trim())) {
      newErrors.correo = 'Por favor ingresa un correo electrónico válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    // Clean phone number (keep only digits)
    const cleanPhone = telefono.replace(/\D/g, '');
    if (!telefono.trim()) {
      newErrors.telefono = 'El número de teléfono es obligatorio';
    } else if (cleanPhone.length < 10) {
      newErrors.telefono = 'Ingresa un número de teléfono válido (mínimo 10 dígitos)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      setErrors({});
    }
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setStep(3);
      setErrors({});
    }
  };

  const getStepIndicator = (stepNum: number) => {
    const isCompleted = step > stepNum;
    const isActive = step === stepNum;
    
    return (
      <div style={{
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: isCompleted ? '#A4D955' : '#ffffff',
        border: `2px solid ${isCompleted || isActive ? '#A4D955' : '#e5e7eb'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        boxShadow: isActive ? '0 0 10px rgba(164, 217, 85, 0.3)' : 'none'
      }}>
        {isCompleted ? (
          <Check size={14} strokeWidth={3} color="#ffffff" />
        ) : isActive ? (
          <div className="pulse-dot" style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: '#A4D955'
          }} />
        ) : null}
      </div>
    );
  };

  return (
    <div style={{ 
      width: 'min(440px, 95vw)', 
      height: 'min(620px, 85vh)', 
      backgroundColor: '#ffffff', 
      borderRadius: '24px', 
      display: 'flex', 
      flexDirection: 'column', 
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)', 
      border: '1px solid #e5e7eb', 
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', system-ui, sans-serif"
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderBottom: '1px solid #f3f4f6', 
        padding: '16px 20px 12px',
        zIndex: 10
      }}>
        <span style={{ fontSize: '15px', fontWeight: 800, color: '#111827' }}>Agendar Consulta</span>
        {onClose && (
          <button 
            onClick={onClose} 
            style={{ 
              background: '#f3f4f6', 
              border: 'none', 
              borderRadius: '50%', 
              width: '28px', 
              height: '28px', 
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
            <X size={16} />
          </button>
        )}
      </div>

      {/* Progress Bar Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px 8px',
        background: '#f9fafb',
        borderBottom: '1px solid #f3f4f6',
        position: 'relative'
      }}>
        {/* Step 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2 }}>
          {getStepIndicator(1)}
          <span style={{ fontSize: '9px', fontWeight: 800, color: step >= 1 ? '#374151' : '#9ca3af', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Registro</span>
        </div>

        {/* Line 1 */}
        <div style={{
          height: 3,
          flex: 1,
          backgroundColor: step >= 2 ? '#A4D955' : '#e5e7eb',
          margin: '0 -10px',
          marginTop: -16,
          zIndex: 1,
          transition: 'all 0.3s ease-in-out'
        }} />

        {/* Step 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2 }}>
          {getStepIndicator(2)}
          <span style={{ fontSize: '9px', fontWeight: 800, color: step >= 2 ? '#374151' : '#9ca3af', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Teléfono</span>
        </div>

        {/* Line 2 */}
        <div style={{
          height: 3,
          flex: 1,
          backgroundColor: step >= 3 ? '#A4D955' : '#e5e7eb',
          margin: '0 -10px',
          marginTop: -16,
          zIndex: 1,
          transition: 'all 0.3s ease-in-out'
        }} />

        {/* Step 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2 }}>
          {getStepIndicator(3)}
          <span style={{ fontSize: '9px', fontWeight: 800, color: step >= 3 ? '#374151' : '#9ca3af', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Agenda</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflowY: 'auto' }}>
        
        {step === 1 && (
          <form onSubmit={handleNextStep1} style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '28px 24px', flex: 1, justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: '8px' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: 800, color: '#111827' }}>Información de Registro</h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', lineHeight: 1.4 }}>Ingresa tus datos básicos para poder validar tu consulta de negocios.</p>
            </div>

            {/* Input Nombre */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151' }}>Nombre Completo</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <span style={{ position: 'absolute', left: '12px', color: '#9ca3af', display: 'flex', alignItems: 'center' }}>
                  <User size={16} />
                </span>
                <input 
                  type="text" 
                  value={nombre} 
                  onChange={e => setNombre(e.target.value)} 
                  placeholder="Ej. Juan Pérez" 
                  style={{
                    width: '100%',
                    padding: '11px 12px 11px 36px',
                    borderRadius: '10px',
                    border: `1.5px solid ${errors.nombre ? '#ef4444' : '#d1d5db'}`,
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s'
                  }}
                  className="input-field"
                />
              </div>
              {errors.nombre && <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: 600 }}>{errors.nombre}</span>}
            </div>

            {/* Input Correo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151' }}>Correo Electrónico</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <span style={{ position: 'absolute', left: '12px', color: '#9ca3af', display: 'flex', alignItems: 'center' }}>
                  <Mail size={16} />
                </span>
                <input 
                  type="email" 
                  value={correo} 
                  onChange={e => setCorreo(e.target.value)} 
                  placeholder="ejemplo@empresa.com" 
                  style={{
                    width: '100%',
                    padding: '11px 12px 11px 36px',
                    borderRadius: '10px',
                    border: `1.5px solid ${errors.correo ? '#ef4444' : '#d1d5db'}`,
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s'
                  }}
                  className="input-field"
                />
              </div>
              {errors.correo && <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: 600 }}>{errors.correo}</span>}
            </div>

            <button 
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #A4D955 0%, #7EBB2A 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '12px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(164, 217, 85, 0.25)',
                transition: 'all 0.2s',
                marginTop: '8px'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Siguiente <ArrowRight size={16} />
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleNextStep2} style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '28px 24px', flex: 1, justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: '8px' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: 800, color: '#111827' }}>Validación de Teléfono</h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', lineHeight: 1.4 }}>Ingresa tu número de teléfono de contacto para validar y proceder a la agenda.</p>
            </div>

            {/* Input Teléfono */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151' }}>Número de Teléfono</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <span style={{ position: 'absolute', left: '12px', color: '#9ca3af', display: 'flex', alignItems: 'center' }}>
                  <Phone size={16} />
                </span>
                <input 
                  type="tel" 
                  value={telefono} 
                  onChange={e => setTelefono(e.target.value)} 
                  placeholder="Ej. 55 1234 5678" 
                  style={{
                    width: '100%',
                    padding: '11px 12px 11px 36px',
                    borderRadius: '10px',
                    border: `1.5px solid ${errors.telefono ? '#ef4444' : '#d1d5db'}`,
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s'
                  }}
                  className="input-field"
                />
              </div>
              {errors.telefono && <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: 600 }}>{errors.telefono}</span>}
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <button 
                type="button"
                onClick={() => { setStep(1); setErrors({}); }}
                style={{
                  flex: 1,
                  background: '#ffffff',
                  color: '#4B5563',
                  border: '1.5px solid #d1d5db',
                  borderRadius: '10px',
                  padding: '11px',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
                onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
              >
                <ArrowLeft size={16} /> Regresar
              </button>
              
              <button 
                type="submit"
                style={{
                  flex: 1.5,
                  background: 'linear-gradient(135deg, #A4D955 0%, #7EBB2A 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(164, 217, 85, 0.25)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Validar y Agendar <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
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
              src={`https://calendly.com/mayiainteligencia/consulta-mayia?hide_landing_page_details=1&hide_gdpr_banner=1&name=${encodeURIComponent(nombre)}&email=${encodeURIComponent(correo)}`}
              style={{ width: '100%', height: '100%', border: 'none', position: 'relative', zIndex: 1 }}
              onLoad={() => setLoading(false)}
              title="Calendly Mayia"
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        .pulse-dot {
          animation: pulse 1.5s infinite ease-in-out;
        }

        .input-field:focus {
          border-color: #A4D955 !important;
          box-shadow: 0 0 0 3px rgba(164, 217, 85, 0.15) !important;
        }
      `}</style>
    </div>
  );
}
