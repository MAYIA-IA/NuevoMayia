export default function CertificacionesMarquee() {
  type CertEntry =
    | { type: 'logo'; name: string; img: string; dark?: boolean }
    | { type: 'badge'; name: string; sub: string; color: string };

  const certifications: CertEntry[] = [
    { type: 'badge', name: 'ISO', sub: '27001', color: '#a3e635' },
    { type: 'badge', name: 'ISO', sub: '27034', color: '#22d3ee' },
    { type: 'badge', name: 'ISO', sub: '27017', color: '#a3e635' },
    { type: 'badge', name: 'ISO', sub: '9001',  color: '#22d3ee' },
    { type: 'badge', name: 'ISO', sub: '37001', color: '#a3e635' },
    { type: 'badge', name: 'ISO', sub: '42001', color: '#22d3ee' },
    { type: 'badge', name: 'ISO', sub: '27018', color: '#a3e635' },
    { type: 'badge', name: 'SOC', sub: '2',     color: '#818cf8' },
    { type: 'badge', name: 'IQNet', sub: 'RCMark', color: '#374151' },
    { type: 'badge', name: 'PCNSE', sub: 'Cert', color: '#374151' },
  ];

  // Duplicamos los elementos para crear el efecto de scroll infinito continuo
  const duplicatedCerts = [...certifications, ...certifications];

  return (
    <div className="w-full bg-white border-t border-b border-gray-200 py-6 relative overflow-hidden flex items-center">
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scrollMarquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Título lateral */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-start bg-white/90 backdrop-blur-sm px-6 py-4 rounded-r-xl border border-l-0 border-gray-200 shadow-sm">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Nuestras</span>
        <span className="text-sm text-lime-500 font-bold">Certificaciones</span>
      </div>

      {/* Gradients para difuminar los bordes laterales */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      
      <div className="animate-marquee gap-10 md:gap-14 px-4 items-center">
        {duplicatedCerts.map((cert, index) => (
          <div
            key={cert.name + index}
            className="group relative shrink-0"
          >
            {cert.type === 'logo' ? (
              <div
                className="flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-sm rounded-xl overflow-hidden"
                style={{ width: 90, height: 50, background: cert.dark ? 'rgba(255,255,255,0.03)' : 'transparent', padding: '6px' }}
              >
                <img 
                  src={cert.img} 
                  alt={cert.name} 
                  className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                />
              </div>
            ) : (
              <div
                className="flex flex-col items-center justify-center transform transition-all duration-300 group-hover:scale-110 rounded-xl bg-white shadow-sm hover:shadow-md"
                style={{ width: 80, height: 80, border: `1px solid ${cert.color}44` }}
              >
                <span className="text-sm font-extrabold" style={{ color: cert.color, lineHeight: 1 }}>{cert.name}</span>
                <span className="text-base font-black leading-none mt-1 text-gray-800">{cert.sub}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
