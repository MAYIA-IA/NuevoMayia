import { useState } from "react";
import imgProfesor from '../assets/AcademiaIA/Profesor.png';

const AcademiaIA = () => {
  const [hoverText, setHoverText] = useState(false);
  const [hoverBadge, setHoverBadge] = useState(false);
  const [hoverLogo, setHoverLogo] = useState(false);

  return (
    <section className="w-full bg-gradient-to-br from-white via-gray-50 to-white py-20 md:py-32 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] animate-grid"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-lime-400 rounded-full animate-float opacity-30"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-30" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Lado izquierdo - Texto principal */}
          <div 
            className="flex-1 text-center lg:text-left space-y-6"
            onMouseEnter={() => setHoverText(true)}
            onMouseLeave={() => setHoverText(false)}
          >
            {/* Título Academia */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight transform transition-transform duration-500 hover:scale-105">
                Academia
              </h1>
              
              {/* MAYiA® con gradiente y animación */}
              <div className="relative inline-block">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold">
                  <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent animate-gradient-x">
                    MAYiA
                  </span>
                  <span className="text-4xl md:text-6xl align-super text-cyan-600 ml-2">®</span>
                </h2>
                
                {/* Efecto de brillo en hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-lime-400/20 via-cyan-400/20 to-lime-400/20 blur-xl rounded-full transition-opacity duration-500 ${hoverText ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>

            {/* Badge Profesores IA */}
            <div 
              className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-5 rounded-full shadow-2xl border-2 border-lime-400/50 transform transition-all duration-500 hover:scale-110 hover:border-lime-500 hover:shadow-lime-400/30 relative overflow-hidden group"
              onMouseEnter={() => setHoverBadge(true)}
              onMouseLeave={() => setHoverBadge(false)}
            >
              {/* Fondo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 via-cyan-400/20 to-lime-400/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <span className="text-3xl md:text-4xl font-bold text-lime-400 relative z-10">
                Profesores
              </span>
              <span className="text-3xl md:text-4xl font-bold text-white relative z-10">
                IA
              </span>
              
              {/* Partículas alrededor del badge */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Descripción */}
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-4">
              Formación especializada en Inteligencia Artificial aplicada a 
              negocio, industria y sector público con expertos certificados.
            </p>
          </div>

          <div 
            className="flex-1 flex justify-center lg:justify-end transform transition-all duration-700 hover:scale-105"
            onMouseEnter={() => setHoverLogo(true)}
            onMouseLeave={() => setHoverLogo(false)}
          >
            <div className="relative">
              {/* Marco decorativo oscuro */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0a1f44] to-black rounded-3xl blur-xl opacity-70 animate-pulse"></div>
              
              {/* Contenedor principal */}
              <div className="relative bg-gradient-to-br from-gray-900 via-[#0a1f44] to-black rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-700 overflow-hidden group">
                {/* Fondo animado oscuro */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-cyan-400/10 to-lime-400/10 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Logo con fondo blanco para contraste */}
                <div className="relative z-10 bg-white rounded-2xl p-6 md:p-8 shadow-inner transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <img
                    src={imgProfesor}
                    alt="ProfesorIA"
                    className="w-64 h-64 md:w-80 md:h-80 object-contain filter drop-shadow-lg"
                  />
                </div>
                
                {/* Texto debajo del logo */}
                <div className="relative z-10 mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg md:text-xl shadow-lg transform transition-all duration-300 group-hover:scale-110 border border-lime-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Hecho en México</span>
                  </div>
                </div>

                {/* Decoración de esquinas*/}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-lime-400 rounded-tl-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-lime-400 rounded-bl-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Efecto de brillo en hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-lime-400/5 via-cyan-400/5 to-lime-400/5 rounded-3xl transition-opacity duration-500 ${hoverLogo ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>

              {/* Anillos orbitales */}
              <div className="absolute inset-0 rounded-3xl overflow-visible">
                <div className="absolute inset-0 border-2 border-lime-400/40 rounded-3xl animate-ping-slow"></div>
                <div className="absolute inset-4 border-2 border-cyan-400/40 rounded-3xl animate-ping-slow" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Partículas adicionales*/}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-lime-400 rounded-full opacity-0 group-hover:opacity-70 animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-70 animate-ping" style={{ animationDelay: '0.7s' }}></div>
            </div>
          </div>
        </div>

        {/* CTA Button centrado (Será que se pone?) */}
        <div className="flex justify-center mt-16 md:mt-20">
          <button className="group relative bg-gradient-to-r from-lime-400 to-cyan-400 hover:from-cyan-400 hover:to-lime-400 text-gray-900 font-bold py-4 px-10 rounded-xl text-lg md:text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-lime-300">
            <span className="relative z-10">Reserva tu clase demo gratuita</span>
            <div className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-25px) translateX(0);
          }
          75% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        
        @keyframes grid {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-grid {
          animation: grid 20s linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default AcademiaIA;