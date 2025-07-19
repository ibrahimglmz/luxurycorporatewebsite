'use client';
import React, { useState, useEffect } from "react";

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
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, YONETIM_KADROSU.length - visibleCount);
  // Sonsuz döngü için index'i mod ile güncelle
  const next = () => setIndex((i) => (i + 1) > maxIndex ? 0 : i + 1);
  const prev = () => setIndex((i) => (i - 1) < 0 ? maxIndex : i - 1);

  // Auto-slide sonsuz döngü
  useEffect(() => {
    if (maxIndex === 0) return;
    let interval;
    if (typeof window !== 'undefined') {
      interval = setInterval(() => {
        setIndex((i) => (i < maxIndex ? i + 1 : 0));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="w-full bg-section py-10 px-2 rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-title mb-2 tracking-tight">Yönetim Kadrosu</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-2"></div>
        <p className="text-text text-base">Deneyimli ve uzman yöneticilerimiz</p>
      </div>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card border border-neutral shadow hover:border-accent transition"
        >
          <span className="text-xl text-title">&#8592;</span>
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${(index * 100) / visibleCount}%)` }}
          >
            {YONETIM_KADROSU.map((uye, i) => (
              <div
                key={uye.unvan}
                className="flex-shrink-0 w-full sm:w-72 mx-2 bg-[#F1F5F9] rounded-lg shadow border border-[#D1D5DB] hover:shadow-lg hover:border-[#3B82F6] transition-all duration-300 p-6 flex flex-col items-center text-center"
                style={{ minWidth: "220px", maxWidth: "280px" }}
              >
                <span className="font-bold text-lg mb-1" style={{ color: '#334155' }}>{uye.unvan}</span>
                <span className="text-base" style={{ color: '#475569' }}>{uye.isim}</span>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card border border-neutral shadow hover:border-accent transition"
        >
          <span className="text-xl text-title">&#8594;</span>
        </button>
      </div>
    </div>
  );
} 