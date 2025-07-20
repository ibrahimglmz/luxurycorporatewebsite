"use client";

import { useState, useEffect } from "react";

const TESTIMONIALS = [];

const PARTNER_LOGOS = [
  "TÜPRAŞ",
  "Turkcell",
  "Ford Otosan",
  "Erdemir",
  "BİM",
  "Arçelik",
  "ASELSAN",
  "İSDEMİR",
  "LC Waikiki",
  "Shell & Turcas",
  "Opet",
  "Türk Telekom",
  "Vestel",
  "Petrol Ofisi",
  "Enka",
  "Şişecam",
  "Ziraat Bankası",
  "İş Bankası",
  "Koç Holding",
  "SASA"
];

const STATS = [
  { number: 500, suffix: "+", label: "Mutlu Müşteri" },
  { number: 50, suffix: "+", label: "Ülke" },
  { number: 1000, suffix: "+", label: "Tamamlanan Proje" },
  { number: 99, suffix: "%", label: "Müşteri Memnuniyeti" }
];

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Otomatik testimonial değiştirme
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-700 text-slate-300 text-sm font-medium rounded-md mb-4 sm:mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" clipRule="evenodd" />
            </svg>
            Güvenilir Ortaklıklar
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            İş Ortaklarımız
          </h2>
          <div className="w-24 h-0.5 bg-slate-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Güvenilir iş ortaklıklarımız ve başarılı projelerimiz
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-slate-600 font-medium text-xs sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>



        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-6 sm:mb-8">
            Güvenilir İş Ortaklarımız
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={index}
                className="bg-slate-100 rounded-lg p-3 sm:p-4 flex items-center justify-center h-12 sm:h-16 hover:bg-slate-200 transition-colors"
              >
                <span className="text-slate-600 font-medium text-xs sm:text-sm text-center">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 