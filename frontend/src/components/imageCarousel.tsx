import { useState, useRef, useEffect } from 'react';

import imagen1 from '../assets/carousel/1. - ConsultorIA.png';
import imagen2 from '../assets/carousel/2.-Agentes.png';
import imagen3 from '../assets/carousel/3.-Marketplace.png';
import imagen4 from '../assets/carousel/4.-Cámaras.png';
import imagen5 from '../assets/carousel/5.-Origen.png';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: imagen5,
    title: 'IA desde el Origen',
    description: 'Modelos de IA nativos de México'
  },
  {
    id: 2,
    image: imagen1,
    title: 'Consultoria MAYiA',
    description: 'Modelo VALITICS'
  },
  {
    id: 3,
    image: imagen2,
    title: 'Fabrica de agentes de IA',
    description: 'Para todo tu organigrama'
  },
  {
    id: 4,
    image: imagen3,
    title: 'Marketplace #1 de IA',
    description: 'Desarrolla tu fábrica de IA y nosotros la comercializamos'
  },
  {
    id: 5,
    image: imagen4,
    title: 'Camaras IA',
    description: 'Modificamos tus cámaras para el control de tu negocio'
  }
];

export default function imageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="w-full bg-[#0A0A14] py-0">
      <div
        className="relative w-full max-w-full mx-auto overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carrusel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselItems.map((item) => (
              <div key={item.id} className="min-w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-auto
                    object-cover
                    select-none
                    pointer-events-none
                  "
                  style={{ aspectRatio: '16/9', maxHeight: '600px' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Flecha izquierda */}
        <button
          onClick={prevSlide}
          className="
            absolute left-4 md:left-6 top-1/2 -translate-y-1/2
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-lime-400 text-black p-3 md:p-4 rounded-full
            hover:scale-110
            z-10
          "
        >
          <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Flecha derecha */}
        <button
          onClick={nextSlide}
          className="
            absolute right-4 md:right-6 top-1/2 -translate-y-1/2
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-lime-400 text-black p-3 md:p-4 rounded-full
            hover:scale-110
            z-10
          "
        >
          <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300
                ${currentIndex === index ? 'bg-lime-400 w-8 md:w-10' : 'bg-white/50 hover:bg-white/80'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}