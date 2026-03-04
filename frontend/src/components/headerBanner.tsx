import { useState, useEffect } from 'react';

export default function HeaderBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Fecha objetivo: 18 de Agosto 2026 19:00 CET
    const targetDate = new Date('2026-08-18T19:00:00+02:00');

    const calculateTimeLeft = () => {
      const now = new Date();

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#0f0f1a] border-b border-lime-400/20 py-5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Countdown Timer */}
        <div className="flex gap-4 text-center">
          {[
            { val: timeLeft.days, label: 'Días' },
            { val: timeLeft.hours, label: 'Horas' },
            { val: timeLeft.minutes, label: 'Min' },
            { val: timeLeft.seconds, label: 'Seg' },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl font-bold text-2xl text-white"
                style={{ background: 'rgba(164,217,85,0.1)', border: '1px solid rgba(164,217,85,0.3)' }}
              >
                {String(val).padStart(2, '0')}
              </div>
              <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Event Info */}
        <div className="text-center">
          <div className="text-xs font-mono text-lime-400 tracking-widest uppercase mb-1">Próximo evento</div>
          <div className="text-white font-bold text-lg leading-tight">
            Metodología Éxito Nvidia para tu empresa
          </div>
          <div className="text-gray-400 text-sm mt-0.5">18 de Agosto 2026 · 19:00 hrs CET</div>
        </div>

        {/* CTA */}
        <button className="bg-lime-400 hover:bg-lime-300 text-gray-900 font-bold px-7 py-3 rounded-xl text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-lime-400/20 whitespace-nowrap">
          RESERVA AQUÍ
        </button>
      </div>
    </div>
  );
}