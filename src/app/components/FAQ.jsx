"use client";

import { useState } from "react";

const FAQ_DATA = [
  {
    soru: "Endüstriyel çözümleriniz hangi sektörlere hizmet veriyor?",
    cevap: "Otomotiv, havacılık, inşaat, enerji, gıda ve içecek, kimya, tekstil ve daha birçok sektöre endüstriyel çözümler sunuyoruz. Her sektörün özel ihtiyaçlarına uygun çözümler geliştiriyoruz."
  },
  {
    soru: "Kalite standartlarınız nelerdir?",
    cevap: "ISO 9001, ISO 14001, ISO 45001 ve ISO 50001 sertifikalarımızla uluslararası kalite standartlarında hizmet veriyoruz. Tüm üretim süreçlerimiz sürekli denetim altındadır."
  },
  {
    soru: "Teslimat süreleriniz ne kadar?",
    cevap: "Standart ürünler için 2-4 hafta, özel projeler için 6-8 hafta teslimat süremiz bulunmaktadır. Acil durumlar için hızlı teslimat seçeneklerimiz mevcuttur."
  },
  {
    soru: "Teknik destek hizmetiniz var mı?",
    cevap: "Evet, 7/24 teknik destek hizmetimiz bulunmaktadır. Uzman ekibimiz kurulum, bakım ve sorun giderme konularında size yardımcı olur."
  },
  {
    soru: "Özel proje çözümleri sunuyor musunuz?",
    cevap: "Müşterilerimizin özel ihtiyaçlarına göre özel tasarım ve üretim çözümleri geliştiriyoruz. Ar-Ge ekibimizle birlikte çalışarak en uygun çözümü buluyoruz."
  },
  {
    soru: "Garanti süreniz ne kadar?",
    cevap: "Tüm ürünlerimiz 2 yıl garanti kapsamındadır. Garanti süresi sonrasında da bakım ve onarım hizmetlerimiz devam etmektedir."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 py-12 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-700 text-slate-300 text-sm font-medium rounded-md mb-4 sm:mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Sık Sorulan Sorular
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Merak Ettikleriniz
          </h2>
          <div className="w-24 h-0.5 bg-slate-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Endüstriyel çözümlerimiz hakkında sık sorulan soruları yanıtladık
          </p>
        </div>

        {/* FAQ Listesi */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
              >
                <span className="font-semibold text-slate-900 text-base sm:text-lg pr-2">
                  {faq.soru}
                </span>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                  <div className="w-full h-px bg-slate-200 mb-3 sm:mb-4" />
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {faq.cevap}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
            Başka sorularınız mı var?
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
} 