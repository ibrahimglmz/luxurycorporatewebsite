"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Local storage'dan çerez onayını kontrol et
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Metin */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Çerez Politikası
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Bu internet sitesinde, kullanıcı deneyimini geliştirmek ve internet sitesinin verimli çalışmasını sağlamak amacıyla çerezler kullanılmaktadır. Çerezler sizin telefon numaranız, e-posta adresiniz gibi kişisel verilerinizi toplamamaktadır. Ayarlarınızı değiştirmeden devam etmeniz bu çerezleri almaktan memnun olduğunuz şekilde değerlendirilecektir. Çerezleri nasıl kullandığımız ile ilgili detaylı bilgi için lütfen{" "}
              <a href="/cerez-politikasi" className="text-blue-600 hover:underline font-medium">
                Çerez Politikası
              </a>
              'nı okuyunuz.
            </p>
          </div>

          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
            <button
              onClick={handleReject}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Reddet
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 