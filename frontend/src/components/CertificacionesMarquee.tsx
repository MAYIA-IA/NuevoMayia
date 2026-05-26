import imgFirst from '../assets/ISOS/FIRST.avif';
import imgIqnet from '../assets/ISOS/IQNET RCMark_NegCMYK.avif';
import imgIso27001 from '../assets/ISOS/ISO 27001 - Negro_edited.avif';
import imgKaspersky from '../assets/ISOS/KASPERSKy.avif';
import imgNetwork from '../assets/ISOS/Network_Security_Badge.avif';
import imgPcnse from '../assets/ISOS/PCNSE.avif';
import imgIso27034 from '../assets/ISOS/ISO_27034.svg';
import imgIso27017 from '../assets/ISOS/ISO_27017.svg';
import imgIso9001 from '../assets/ISOS/ISO_9001.svg';
import imgIso37001 from '../assets/ISOS/ISO_37001.svg';
import imgIso42001 from '../assets/ISOS/ISO_42001.svg';
import imgIso27018 from '../assets/ISOS/ISO_27018.svg';
import imgSoc2 from '../assets/ISOS/SOC_2.svg';

export default function CertificacionesMarquee() {
  type CertEntry =
    | { type: 'logo'; name: string; img: string; dark?: boolean }
    | { type: 'badge'; name: string; sub: string; color: string };

  const certifications: CertEntry[] = [
    { type: 'logo', name: 'FIRST', img: imgFirst, dark: true },
    { type: 'logo', name: 'IQNET', img: imgIqnet, dark: true },
    { type: 'logo', name: 'ISO 27001', img: imgIso27001, dark: true },
    { type: 'logo', name: 'KASPERSKY', img: imgKaspersky },
    { type: 'logo', name: 'Network Security', img: imgNetwork },
    { type: 'logo', name: 'PCNSE', img: imgPcnse },
    { type: 'logo', name: 'ISO 27034', img: imgIso27034 },
    { type: 'logo', name: 'ISO 27017', img: imgIso27017 },
    { type: 'logo', name: 'ISO 9001', img: imgIso9001 },
    { type: 'logo', name: 'ISO 37001', img: imgIso37001 },
    { type: 'logo', name: 'ISO 42001', img: imgIso42001 },
    { type: 'logo', name: 'ISO 27018', img: imgIso27018 },
    { type: 'logo', name: 'SOC 2', img: imgSoc2 },
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
                className="flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 rounded-xl overflow-hidden"
                style={{ width: 90, height: 75, background: cert.dark ? '#111827' : 'transparent', padding: '6px' }}
              >
                <img 
                  src={cert.img} 
                  alt={cert.name} 
                  className="max-w-full max-h-full object-contain filter transition-all duration-300" 
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
