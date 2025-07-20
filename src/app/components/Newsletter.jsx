"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      alert("Lütfen geçerli bir e-posta adresi giriniz.");
      return;
    }

    setIsLoading(true);
    
    // Simüle edilmiş API çağrısı
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
      
      // 3 saniye sonra başarı mesajını kaldır
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 py-16 px-4 relative">
      {/* Endüstriyel arka plan deseni */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22/%3E%3Cpath%20d%3D%22M0%200h20v20H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Başlık */}
        <div className="mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-slate-700 text-slate-300 text-sm font-medium rounded-md mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Endüstriyel Güncellemeler
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sektör Güncellemeleri
          </h2>
          <div className="w-24 h-0.5 bg-slate-600 mx-auto mb-6" />
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Endüstriyel sektördeki en son gelişmeler, yeni ürünler ve özel tekliflerden 
            haberdar olmak için e-posta listemize katılın.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto mb-12">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresinizi giriniz"
                className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all duration-300 bg-white border border-slate-300"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Gönderiliyor...
                </div>
              ) : (
                "Abone Ol"
              )}
            </button>
          </form>
        </div>

        {/* Başarı Mesajı */}
        {isSubscribed && (
          <div className="max-w-md mx-auto mb-10 p-4 bg-slate-700 text-white rounded-lg shadow-lg animate-fade-in border border-slate-600">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Başarıyla abone oldunuz! Teşekkürler.</span>
            </div>
          </div>
        )}

        {/* Özellikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:bg-slate-750 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Haftalık Güncellemeler</h3>
            <p className="text-slate-300 text-sm text-center leading-relaxed">
              Sektördeki en son gelişmeler ve yeni ürünler
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:bg-slate-750 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Özel Teklifler</h3>
            <p className="text-slate-300 text-sm text-center leading-relaxed">
              Sadece abonelerimize özel indirimler ve fırsatlar
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:bg-slate-750 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Teknik Destek</h3>
            <p className="text-slate-300 text-sm text-center leading-relaxed">
              Uzman ekibimizden teknik danışmanlık ve destek
            </p>
          </div>
        </div>

        {/* Gizlilik Notu */}
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <p className="text-slate-400 text-sm leading-relaxed">
            <svg className="w-4 h-4 inline mr-2 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            E-posta adresiniz güvenle saklanır ve üçüncü taraflarla paylaşılmaz. 
            İstediğiniz zaman abonelikten çıkabilirsiniz.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
} 