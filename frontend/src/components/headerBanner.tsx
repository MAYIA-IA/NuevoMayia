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
    <div className="w-full bg-gradient-to-r from-lime-400 via-yellow-300 to-lime-400 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Countdown Timer */}
        <div className="flex gap-3 text-center">
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-gray-900">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-xs font-semibold text-gray-800 uppercase">Días</div>
          </div>
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-gray-900">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs font-semibold text-gray-800 uppercase">Horas</div>
          </div>
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-gray-900">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs font-semibold text-gray-800 uppercase">Minutos</div>
          </div>
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-gray-900">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs font-semibold text-gray-800 uppercase">Segundos</div>
          </div>
        </div>

        {/* Event Info */}
        <div className="text-center md:text-left">
          <div className="text-lg font-bold text-gray-900">Curso/Certificado</div>
          <div className="text-xl font-bold text-gray-900">18 de Agosto 2026 19:00 Hrs CET</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">
            Metodología Éxito Nvidia para tu empresa
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
            RESERVA AQUÍ
          </button>
        </div>
      </div>
    </div>
  );
}