import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function CalendarModal({ onClose }: { onClose?: () => void }) {
  const daysInMonth = 30; // June has 30 days
  const firstDayOffset = 1; // June 1, 2026 is Monday (0 = Sun, 1 = Mon)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOffset }, (_, i) => i);
  const weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

  return (
    <div style={{ width: '260px', backgroundColor: '#ffffff', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid #e5e7eb', padding: '12px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f3f4f6', paddingBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CalendarIcon size={14} color="#3b82f6" />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '13px', fontWeight: 800, color: '#111827' }}>Junio 2026</h2>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#9ca3af', padding: 0, lineHeight: 1 }}>&times;</button>
        )}
      </div>

      {/* Calendar Grid */}
      <div style={{ backgroundColor: '#f9fafb', padding: '8px', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '6px' }}>
          {weekDays.map(day => (
            <div key={day} style={{ textAlign: 'center', fontSize: '9px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' }}>
              {day}
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
          {blanks.map(blank => (
            <div key={`blank-${blank}`} style={{ height: '26px' }} />
          ))}
          {days.map(day => {
            const isEventDay = day === 25;
            return (
              <div 
                key={day} 
                style={{ 
                  height: '26px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: isEventDay ? 800 : 500,
                  backgroundColor: isEventDay ? '#3b82f6' : 'transparent',
                  color: isEventDay ? '#ffffff' : '#374151',
                  cursor: isEventDay ? 'pointer' : 'default',
                  position: 'relative'
                }}
              >
                {day}
                {isEventDay && (
                  <div style={{ position: 'absolute', bottom: '2px', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Details */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb', padding: '10px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px', backgroundColor: '#3b82f6' }} />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#3b82f6', backgroundColor: '#eff6ff', padding: '2px 6px', borderRadius: '99px' }}>
              25 JUN
            </span>
          </div>

          <h4 style={{ margin: '0 0 6px 0', fontSize: '12px', fontWeight: 800, color: '#111827', lineHeight: 1.2 }}>
            Taller Práctico de IA Empresarial
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7280', fontSize: '10px' }}>
              <MapPin size={10} />
              <span>Tlaxcala, Tlax.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7280', fontSize: '10px' }}>
              <Clock size={10} />
              <span>09:00 AM - 02:00 PM</span>
            </div>
          </div>

          <button style={{ width: '100%', padding: '6px', borderRadius: '4px', backgroundColor: '#111827', color: '#ffffff', border: 'none', fontWeight: 600, fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', cursor: 'pointer' }}>
            Reservar lugar <ArrowRight size={10} />
          </button>
        </div>
      </div>

    </div>
  );
}
