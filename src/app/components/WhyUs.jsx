"use client";

import { useState, useEffect, useRef } from "react";

const ADVANTAGES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: "Kalite Garantisi",
    description: "ISO 9001, ISO 14001, ISO 45001 sertifikalarımızla uluslararası kalite standartlarında hizmet veriyoruz. Tüm üretim süreçlerimiz sürekli denetim altındadır.",
    features: ["20+ yıllık tecrübe", "Uluslararası standartlar", "Sürekli kalite kontrolü"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
    title: "Hızlı Teslimat",
    description: "Standart ürünler için 2-4 hafta, özel projeler için 6-8 hafta teslimat süremiz bulunmaktadır. Acil durumlar için hızlı teslimat seçeneklerimiz mevcuttur.",
    features: ["2-4 hafta standart teslimat", "Acil durum seçenekleri", "Lojistik ağı"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
    title: "7/24 Teknik Destek",
    description: "Uzman ekibimiz kurulum, bakım ve sorun giderme konularında size yardımcı olur. 7/24 teknik destek hizmetimizle yanınızdayız.",
    features: ["7/24 destek", "Uzman ekip", "Hızlı çözüm"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Özel Proje Çözümleri",
    description: "Müşterilerimizin özel ihtiyaçlarına göre özel tasarım ve üretim çözümleri geliştiriyoruz. Ar-Ge ekibimizle birlikte çalışarak en uygun çözümü buluyoruz.",
    features: ["Özel tasarım", "Ar-Ge desteği", "Kişiselleştirilmiş çözümler"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    ),
    title: "Sürdürülebilir Üretim",
    description: "Çevreye duyarlı üretim politikamız ile doğaya karşı sorumluluğumuzu yerine getiriyoruz. Sürdürülebilir ve çevre dostu teknolojiler kullanıyoruz.",
    features: ["Çevre dostu", "Sürdürülebilir", "ISO 14001 sertifikası"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: "Rekabetçi Fiyatlar",
    description: "Yüksek kalite standartlarını koruyarak rekabetçi fiyatlar sunuyoruz. Müşterilerimize en iyi değeri sağlamak için sürekli çalışıyoruz.",
    features: ["Rekabetçi fiyatlar", "Kalite garantisi", "Değer odaklı"]
  }
];

export default function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-700 text-slate-300 text-sm font-medium rounded-md mb-4 sm:mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Avantajlarımız
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Neden Biz?
          </h2>
          <div className="w-24 h-0.5 bg-slate-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Endüstriyel sektörde öne çıkan avantajlarımız ve müşterilerimize sunduğumuz değerler
          </p>
        </div>

        {/* Avantajlar Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {ADVANTAGES.map((advantage, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 ${
                activeIndex === index ? 'ring-2 ring-slate-400' : ''
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
              onClick={() => setActiveIndex(index)}
            >
              {/* İkon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6">
                {advantage.icon}
              </div>

              {/* Başlık */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
                {advantage.title}
              </h3>

              {/* Açıklama */}
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {advantage.description}
              </p>

              {/* Özellikler */}
              <div className="space-y-1 sm:space-y-2">
                {advantage.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-xs sm:text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              Hemen Teklif Alın
            </h3>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Projeleriniz için özel çözümlerimizi keşfedin. Uzman ekibimiz size en uygun teklifi sunacaktır.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/iletisim"
                className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                İletişime Geçin
              </a>
              <a
                href="/hakkinda"
                className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-semibold transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Daha Fazla Bilgi
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
} 