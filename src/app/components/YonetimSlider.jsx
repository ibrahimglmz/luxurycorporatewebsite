'use client';
import React, { useState, useEffect, useRef } from "react";

const YONETIM_KADROSU = [
  { unvan: "Genel Müdür", isim: "Ahmet Yılmaz" },
  { unvan: "Fabrika Müdürü", isim: "Elif Kaya" },
  { unvan: "Üretim Müdürü", isim: "Mehmet Demir" },
  { unvan: "Kalite Kontrol Müdürü", isim: "Zeynep Şahin" },
  { unvan: "Ar-Ge Müdürü", isim: "Burak Aydın" },
  { unvan: "Bakım ve Teknik Hizmetler Müdürü", isim: "Gülşah Korkmaz" },
  { unvan: "İnsan Kaynakları Müdürü", isim: "Serkan Demirtaş" },
  { unvan: "Finans ve Muhasebe Müdürü", isim: "Ayşe Karaca" },
  { unvan: "Satış ve Pazarlama Müdürü", isim: "Emre Uçar" },
  { unvan: "İdari İşler ve Satın Alma Müdürü", isim: "Büşra Yılmaz" },
];

export default function YonetimSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef(null);

  // Sonsuz döngü için kartları kopyala
  const extendedCards = [...YONETIM_KADROSU, ...YONETIM_KADROSU, ...YONETIM_KADROSU];

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 480) setVisibleCount(1);
      else if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    
    setTimeout(() => {
      if (currentIndex >= YONETIM_KADROSU.length) {
        setCurrentIndex(0);
        setIsTransitioning(false);
      } else {
        setIsTransitioning(false);
      }
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
    
    setTimeout(() => {
      if (currentIndex <= 0) {
        setCurrentIndex(YONETIM_KADROSU.length);
        setIsTransitioning(false);
      } else {
        setIsTransitioning(false);
      }
    }, 500);
  };

  // Auto-slide sonsuz döngü
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  return (
    <div className="w-full bg-section py-8 sm:py-10 px-2 rounded-2xl">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-title mb-2 tracking-tight">Yönetim Kadrosu</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-2"></div>
        <p className="text-text text-sm sm:text-base">Deneyimli ve uzman yöneticilerimiz</p>
      </div>
      
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card border border-neutral shadow hover:border-accent transition hidden sm:block"
        >
          <span className="text-xl text-title">&#8592;</span>
        </button>
        
        <div className="overflow-hidden w-full" ref={sliderRef}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
              width: `${(extendedCards.length * 100) / visibleCount}%`
            }}
          >
            {extendedCards.map((uye, i) => (
              <div
                key={`${uye.unvan}-${i}`}
                className="flex-shrink-0 w-full sm:w-72 mx-1 sm:mx-2 bg-[#F1F5F9] rounded-lg shadow border border-[#D1D5DB] hover:shadow-lg hover:border-[#3B82F6] transition-all duration-300 p-4 sm:p-6 flex flex-col items-center text-center"
                style={{ 
                  minWidth: "200px", 
                  maxWidth: "280px",
                  width: `${100 / extendedCards.length}%`
                }}
              >
                <span className="font-bold text-base sm:text-lg mb-1" style={{ color: '#334155' }}>{uye.unvan}</span>
                <span className="text-sm sm:text-base" style={{ color: '#475569' }}>{uye.isim}</span>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card border border-neutral shadow hover:border-accent transition hidden sm:block"
        >
          <span className="text-xl text-title">&#8594;</span>
        </button>
      </div>
    </div>
  );
} 