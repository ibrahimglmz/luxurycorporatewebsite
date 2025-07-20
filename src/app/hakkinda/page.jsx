import React from "react";
import Image from "next/image";

const KURUCU_ORTAKLAR = [
  {
    isim: "Ahmet Yılmaz",
    unvan: "Kurucu Ortak / Genel Müdür",
    aciklama: "20+ yıllık sektör deneyimiyle şirketin vizyonunu belirler."
  },
  {
    isim: "Elif Kaya",
    unvan: "Kurucu Ortak / Operasyon Yöneticisi",
    aciklama: "Operasyonel süreçlerin lideri ve inovasyonun öncüsü."
  },
  {
    isim: "Mehmet Demir",
    unvan: "Kurucu Ortak / Üretim Direktörü",
    aciklama: "Üretim ve kalite süreçlerinde uzman, teknik lider."
  },
  {
    isim: "Zeynep Şahin",
    unvan: "Kurucu Ortak / Finans Yöneticisi",
    aciklama: "Finansal yönetim ve sürdürülebilir büyümeden sorumlu."
  },
];

export default function Hakkinda() {
  return (
    <main className="min-h-screen bg-bg pt-16 sm:pt-20">
      {/* Hero görsel */}
      <div className="relative w-full aspect-[16/7] md:aspect-[16/5] overflow-hidden">
        <Image
          src="/pexels-pixabay-236705.jpg"
          alt="Hakkımızda Hero"
          fill
          className="object-cover object-center rounded-b-2xl shadow"
          priority
        />
        <div className="absolute inset-0 bg-black/30 rounded-b-2xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2">Hakkımızda</h1>
          <p className="text-lg md:text-2xl text-gray-100 drop-shadow">Endüstriyel sektörde güvenin ve kalitenin adresi</p>
        </div>
      </div>

      {/* İstatistikler */}
      <section className="w-full bg-section py-10 flex flex-col items-center">
        <div className="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center bg-card rounded-xl shadow p-6 border border-bg">
            <span className="text-3xl md:text-4xl font-extrabold text-title">20+</span>
            <span className="text-base md:text-lg font-medium text-text mt-1">Yıllık Tecrübe</span>
          </div>
          <div className="flex flex-col items-center bg-card rounded-xl shadow p-6 border border-bg">
            <span className="text-3xl md:text-4xl font-extrabold text-title">100+</span>
            <span className="text-base md:text-lg font-medium text-text mt-1">Mutlu Müşteri</span>
          </div>
          <div className="flex flex-col items-center bg-card rounded-xl shadow p-6 border border-bg">
            <span className="text-3xl md:text-4xl font-extrabold text-title">10+</span>
            <span className="text-base md:text-lg font-medium text-text mt-1">Ülke</span>
          </div>
          <div className="flex flex-col items-center bg-card rounded-xl shadow p-6 border border-bg">
            <span className="text-3xl md:text-4xl font-extrabold text-title">50+</span>
            <span className="text-base md:text-lg font-medium text-text mt-1">Personel</span>
          </div>
        </div>
      </section>

      {/* Biz Kimiz */}
      <section className="w-full bg-card py-12 px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl min-h-[320px]">
          {/* CEO görseli solda */}
          <div className="flex-shrink-0 flex items-center justify-center mb-6 md:mb-0">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <Image
                src="/ceo2.jpg.webp"
                alt="CEO"
                fill
                className="rounded-3xl object-contain w-full h-full"
                priority
              />
            </div>
          </div>
          {/* Metin sağda */}
          <div className="flex-1 flex flex-col items-center md:items-start bg-white/80 backdrop-blur-md rounded-2xl shadow px-6 py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-title text-center md:text-left">Biz Kimiz?</h2>
            <p className="text-lg text-text text-center md:text-left font-medium">
              İbrahim Gülmez, endüstriyel sektörde yenilikçi çözümler ve yüksek kalite standartlarıyla öne çıkan bir markadır. Güçlü ekibimiz ve modern üretim altyapımız ile müşterilerimize güvenilir, sürdürülebilir ve değer katan hizmetler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Kurucu Ortaklar */}
      <section className="w-full bg-section py-12 px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-title">Kurucu Ortaklar</h2>
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {KURUCU_ORTAKLAR.map((k, i) => (
            <div key={i} className="bg-card rounded-xl shadow p-8 border border-neutral flex flex-col items-center text-center transition-transform hover:scale-105 min-h-[280px]">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-section flex items-center justify-center">
                <Image src="/ibrahimWebsitesi.webp" alt={k.isim} width={80} height={80} className="object-cover" />
              </div>
              <div className="font-bold text-title text-lg mb-2">{k.isim}</div>
              <div className="text-secondary text-base mb-2">{k.unvan}</div>
              <div className="text-text text-sm leading-relaxed">{k.aciklama}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Değerlerimiz, Misyon, Vizyon, Çalışma */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Değerlerimiz */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
              <p className="text-gray-600 text-lg">Çalışma prensiplerimizi oluşturan temel değerlerimiz</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Kalite</h3>
                  <p className="text-gray-600">En yüksek kalite standartlarında hizmet sunuyoruz.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Müşteri Memnuniyeti</h3>
                  <p className="text-gray-600">Müşterilerimizin ihtiyaçlarını en iyi şekilde karşılıyoruz.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Uzmanlık</h3>
                  <p className="text-gray-600">Alanında uzman ekibimizle profesyonel çözümler üretiyoruz.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Güvenilirlik</h3>
                  <p className="text-gray-600">20 yılı aşkın tecrübemizle güvenilir hizmet sunuyoruz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Misyon ve Vizyon */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Misyonumuz</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-green-800 rounded-full mx-auto" />
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                Müşterilerimize en kaliteli endüstriyel çözümlerini sunarak, sürdürülebilir ve verimli üretim sistemleri kurmak. Yenilikçi teknolojileri takip ederek, sektörde öncü olmak ve müşteri memnuniyetini en üst düzeyde tutmak.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Vizyonumuz</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full mx-auto" />
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                Endüstriyel sektörde lider konuma gelerek, yenilikçi üretim çözümlerinde öncü olmak. Sürdürülebilir ve çevre dostu teknolojilerle, gelecek nesillere daha yaşanabilir bir dünya bırakmak.
              </p>
            </div>
          </div>

          {/* Bizimle Çalışmak İster misiniz? */}
          <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl shadow-xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Bizimle Çalışmak İster misiniz?</h2>
              <p className="text-gray-100 text-lg mb-8">
                Endüstriyel projeleriniz için uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
              </p>
              <a 
                href="/iletisim" 
                className="inline-block px-8 py-4 bg-white text-gray-700 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                İletişime Geçin
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 