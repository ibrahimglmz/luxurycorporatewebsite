import React from "react";

export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light">
        {/* Arka Plan Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/drone1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Koyu bir overlay ile yazıyı öne çıkar */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy/80 via-navy/60 to-gold/40 animate-gradient-move z-10" />
        {/* İçerik */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-2 sm:px-4 w-full max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg tracking-tight text-gold animate-fade-in-slow">
            İbrahim Gülmez
          </h1>
          {/* Animasyonlu Slogan */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-4 opacity-0 animate-slide-fade-in text-gold">
            "Geleceği Bugünden Yaşayın."
          </p>
          <p className="text-base sm:text-2xl md:text-3xl font-light mb-4 sm:mb-8 drop-shadow-md max-w-2xl opacity-0 animate-fade-in-slow text-light">
            İbrahim Gülmez ile lüksün ve inovasyonun buluştuğu kurumsal dünyaya hoş geldiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-2 w-full">
            <a
              href="/iletisim"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-gold via-gold-dark to-navy text-navy rounded-full text-base sm:text-lg font-semibold shadow-gold hover:scale-105 hover:from-gold-dark hover:to-navy transition-all duration-300 opacity-0 animate-scale-fade-in border border-gold"
            >
              Bizimle İletişime Geçin
            </a>
            <a
              href="/hakkinda"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-navy rounded-full text-base sm:text-lg font-semibold shadow-navy hover:bg-gold hover:text-navy hover:scale-105 transition-all duration-300 opacity-0 animate-scale-fade-in border border-gold"
            >
              Hakkımızda
          </a>
          <a
              href="#projeler"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-navy text-gold rounded-full text-base sm:text-lg font-semibold shadow-gold hover:bg-gold hover:text-navy hover:scale-105 transition-all duration-300 opacity-0 animate-scale-fade-in border border-gold"
            >
              Projelerimiz
            </a>
          </div>
        </div>
        {/* Scroll Down Animasyonu */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center animate-bounce">
          <span className="text-gold text-3xl">↓</span>
          <span className="text-gold text-xs mt-1">Aşağı Kaydır</span>
        </div>
      </main>
      {/* Animasyonlu Hızlı İstatistikler */}
      <section className="w-full bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 py-12 flex flex-col items-center">
        <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-yellow-900 animate-fade-in-slow">20+</span>
            <span className="text-lg md:text-xl font-medium text-gray-700 mt-2">Yıllık Tecrübe</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-yellow-900 animate-fade-in-slow">100+</span>
            <span className="text-lg md:text-xl font-medium text-gray-700 mt-2">Mutlu Müşteri</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-yellow-900 animate-fade-in-slow">10+</span>
            <span className="text-lg md:text-xl font-medium text-gray-700 mt-2">Ülke</span>
          </div>
        </div>
      </section>
      {/* Öne Çıkan Projeler / Referanslar */}
      <section id="one-cikan-projeler" className="w-full bg-white py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-900">Öne Çıkan Projeler</h2>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-yellow-50 rounded-xl shadow-lg p-6 flex flex-col items-center border border-yellow-100 hover:scale-105 transition-transform">
            <img src="/globe.svg" alt="Proje 1" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-yellow-900">Lüks Plaza Projesi</h3>
            <p className="text-gray-700 text-center mb-2">Şehrin merkezinde, modern ve yenilikçi bir iş merkezi.</p>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow-lg p-6 flex flex-col items-center border border-yellow-100 hover:scale-105 transition-transform">
            <img src="/window.svg" alt="Proje 2" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-yellow-900">Yat Limanı Kompleksi</h3>
            <p className="text-gray-700 text-center mb-2">Deniz kenarında, lüks yaşam ve iş dünyasını buluşturan proje.</p>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow-lg p-6 flex flex-col items-center border border-yellow-100 hover:scale-105 transition-transform">
            <img src="/file.svg" alt="Proje 3" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-yellow-900">Kurumsal Ofis Kuleleri</h3>
            <p className="text-gray-700 text-center mb-2">Yüksek teknolojiyle donatılmış, prestijli ofis alanları.</p>
          </div>
        </div>
      </section>
      {/* Yönetim Kadrosu */}
      <section id="yonetim" className="w-full bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-200 py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-900">Yönetim Kadrosu</h2>
        <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Genel Müdür</span>
            <span className="text-gray-700 text-sm">Ahmet Yılmaz</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Fabrika Müdürü</span>
            <span className="text-gray-700 text-sm">Elif Kaya</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Üretim Müdürü</span>
            <span className="text-gray-700 text-sm">Mehmet Demir</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Kalite Kontrol Müdürü</span>
            <span className="text-gray-700 text-sm">Zeynep Şahin</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Ar-Ge Müdürü</span>
            <span className="text-gray-700 text-sm">Burak Aydın</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Bakım ve Teknik Hizmetler Müdürü</span>
            <span className="text-gray-700 text-sm">Gülşah Korkmaz</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">İş Sağlığı ve Güvenliği Uzmanı</span>
            <span className="text-gray-700 text-sm">Murat Yıldız</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Çevre ve Enerji Yöneticisi</span>
            <span className="text-gray-700 text-sm">Derya Aksoy</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">İnsan Kaynakları Müdürü</span>
            <span className="text-gray-700 text-sm">Serkan Demirtaş</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Finans ve Muhasebe Müdürü</span>
            <span className="text-gray-700 text-sm">Ayşe Karaca</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Satış ve Pazarlama Müdürü</span>
            <span className="text-gray-700 text-sm">Emre Uçar</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">İdari İşler ve Satın Alma Müdürü</span>
            <span className="text-gray-700 text-sm">Büşra Yılmaz</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Lojistik ve Sevkiyat Sorumlusu</span>
            <span className="text-gray-700 text-sm">Onur Demir</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <span className="font-bold text-lg text-navy mb-2">Planlama ve Stok Kontrol Sorumlusu</span>
            <span className="text-gray-700 text-sm">Selin Arslan</span>
          </div>
        </div>
      </section>
      {/* Ekstra Bölümler */}
      <section id="hakkinda" className="w-full bg-white py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-900">Hakkımızda</h2>
        <p className="max-w-2xl text-lg text-gray-700 text-center mb-6">İbrahim Gülmez, lüks ve inovatif çözümler sunan öncü bir kuruluştur. Müşterilerimize en üst düzeyde kalite ve güven sunmayı ilke edindik.</p>
      </section>
      <section id="hizmetler" className="w-full bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-900">Hizmetlerimiz</h2>
        <ul className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <li className="bg-white rounded-xl shadow-lg p-8 border border-yellow-200 flex flex-col items-center">
            <span className="text-4xl mb-4">🏢</span>
            <span className="font-semibold text-lg text-yellow-900 mb-2">Kurumsal Danışmanlık</span>
            <span className="text-gray-700 mb-4">Şirketinizin büyümesi için stratejik çözümler sunuyoruz.</span>
            <a href="#" className="mt-auto px-6 py-2 bg-yellow-900 text-white rounded-full font-medium shadow hover:bg-yellow-800 transition">Detaylı Bilgi</a>
          </li>
          <li className="bg-white rounded-xl shadow-lg p-8 border border-yellow-200 flex flex-col items-center">
            <span className="text-4xl mb-4">💎</span>
            <span className="font-semibold text-lg text-yellow-900 mb-2">Lüks Proje Yönetimi</span>
            <span className="text-gray-700 mb-4">Prestijli projeleriniz için uçtan uca yönetim ve danışmanlık.</span>
            <a href="#" className="mt-auto px-6 py-2 bg-yellow-900 text-white rounded-full font-medium shadow hover:bg-yellow-800 transition">Detaylı Bilgi</a>
          </li>
          <li className="bg-white rounded-xl shadow-lg p-8 border border-yellow-200 flex flex-col items-center">
            <span className="text-4xl mb-4">🌍</span>
            <span className="font-semibold text-lg text-yellow-900 mb-2">Uluslararası Ağ</span>
            <span className="text-gray-700 mb-4">Dünya çapında iş bağlantıları ve yeni fırsatlar.</span>
            <a href="#" className="mt-auto px-6 py-2 bg-yellow-900 text-white rounded-full font-medium shadow hover:bg-yellow-800 transition">Detaylı Bilgi</a>
          </li>
        </ul>
      </section>
      {/* Müşteri Yorumları / Testimonial */}
      <section id="yorumlar" className="w-full bg-white py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-900">Müşteri Yorumları</h2>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 border border-yellow-100 flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Müşteri 1" className="w-16 h-16 rounded-full mb-4 border-4 border-yellow-200 object-cover" />
            <p className="italic text-gray-700 mb-2">“İbrahim Gülmez ile çalışmak vizyonumuzu değiştirdi. Her aşamada profesyonellik ve kalite.”</p>
            <span className="font-bold text-yellow-900">Ali Vural</span>
            <span className="text-xs text-gray-500">ABC Holding</span>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 border border-yellow-100 flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Müşteri 2" className="w-16 h-16 rounded-full mb-4 border-4 border-yellow-200 object-cover" />
            <p className="italic text-gray-700 mb-2">“Tüm süreçlerde yanımızda oldular, güven ve prestij sağladılar.”</p>
            <span className="font-bold text-yellow-900">Selin Aksoy</span>
            <span className="text-xs text-gray-500">XYZ Grup</span>
          </div>
        </div>
      </section>
      {/* Sıkça Sorulan Sorular (SSS) */}
      <section id="sss" className="w-full bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-900">Sıkça Sorulan Sorular</h2>
        <div className="max-w-3xl w-full">
          <details className="mb-4 bg-white rounded-lg shadow p-4 border border-yellow-100 group">
            <summary className="font-semibold text-yellow-900 cursor-pointer group-open:text-yellow-700 transition">İbrahim Gülmez hangi sektörlerde hizmet veriyor?</summary>
            <p className="mt-2 text-gray-700">Lüks inşaat, danışmanlık, proje yönetimi ve uluslararası iş geliştirme alanlarında hizmet veriyoruz.</p>
          </details>
          <details className="mb-4 bg-white rounded-lg shadow p-4 border border-yellow-100 group">
            <summary className="font-semibold text-yellow-900 cursor-pointer group-open:text-yellow-700 transition">Projelerinizde hangi teknolojileri kullanıyorsunuz?</summary>
            <p className="mt-2 text-gray-700">En güncel yazılım, otomasyon ve sürdürülebilirlik teknolojilerini projelerimizde uyguluyoruz.</p>
          </details>
          <details className="mb-4 bg-white rounded-lg shadow p-4 border border-yellow-100 group">
            <summary className="font-semibold text-yellow-900 cursor-pointer group-open:text-yellow-700 transition">Size nasıl ulaşabilirim?</summary>
            <p className="mt-2 text-gray-700">İletişim sayfamızdan veya ana sayfa altındaki iletişim formundan bize ulaşabilirsiniz.</p>
          </details>
        </div>
      </section>
      {/* Hızlı İletişim Formu */}
      <section id="iletisim-formu" className="w-full bg-white py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-900">Hızlı İletişim</h2>
        <form className="max-w-xl w-full bg-yellow-50 rounded-xl shadow-lg p-8 border border-yellow-100 flex flex-col gap-4">
          <input type="text" placeholder="Adınız Soyadınız" className="p-3 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-900" />
          <input type="email" placeholder="E-posta Adresiniz" className="p-3 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-900" />
          <textarea placeholder="Mesajınız" rows="4" className="p-3 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-900" />
          <button type="submit" className="mt-2 px-6 py-3 bg-yellow-900 text-white rounded-full font-semibold shadow hover:bg-yellow-800 transition">Gönder</button>
        </form>
      </section>
      {/* Google Maps Harita ve Konum */}
      <section id="harita" className="w-full bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-900">Ofis Konumumuz</h2>
        <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg border border-yellow-100">
          <iframe
            title="Ofis Konumu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041.46529817413!2d28.978358!3d41.008238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzI5LjciTiAyOMKwNTgnNDIuMSJF!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      {/* Sertifikalarımız */}
      <section id="sertifikalar" className="w-full bg-gradient-to-r from-light via-white to-light py-20 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gold tracking-tight">Sertifikalarımız</h2>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-gold p-8 border border-gold flex flex-col group hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <span className="font-bold text-navy text-lg mb-2">ISO 9001:2015 – Kalite Yönetim Sistemi</span>
            <div className="h-1 w-16 bg-gold rounded mb-3" />
            <span className="text-gray">Üretim süreçlerimizde kaliteyi sürekli iyileştirmeyi ve müşteri memnuniyetini esas alır.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-gold p-8 border border-gold flex flex-col group hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <span className="font-bold text-navy text-lg mb-2">ISO 14001:2015 – Çevre Yönetim Sistemi</span>
            <div className="h-1 w-16 bg-gold rounded mb-3" />
            <span className="text-gray">Çevreye duyarlı üretim politikamız ile doğaya karşı sorumluluğumuzu yerine getiriyoruz.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-gold p-8 border border-gold flex flex-col group hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <span className="font-bold text-navy text-lg mb-2">ISO 45001:2018 – İş Sağlığı ve Güvenliği Yönetim Sistemi</span>
            <div className="h-1 w-16 bg-gold rounded mb-3" />
            <span className="text-gray">Çalışanlarımızın sağlığı ve güvenliği önceliğimizdir.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-gold p-8 border border-gold flex flex-col group hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <span className="font-bold text-navy text-lg mb-2">ISO 50001 – Enerji Yönetim Sistemi</span>
            <div className="h-1 w-16 bg-gold rounded mb-3" />
            <span className="text-gray">Enerjiyi verimli kullanarak sürdürülebilir üretimi destekliyoruz.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-gold p-8 border border-gold flex flex-col group hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <span className="font-bold text-navy text-lg mb-2">EN 124 – Döküm Kapaklar İçin Avrupa Standardı</span>
            <div className="h-1 w-16 bg-gold rounded mb-3" />
            <span className="text-gray">Ürünlerimiz Avrupa normlarına uygundur.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-gold p-8 border border-gold flex flex-col group hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <span className="font-bold text-navy text-lg mb-2">TS EN 1561 / TS EN 1563 – Dökme Demir Üretim Standardı</span>
            <div className="h-1 w-16 bg-gold rounded mb-3" />
            <span className="text-gray">Gri dökme demir ve küresel grafitli dökme demir (sfero) üretimlerimiz bu standartlara uygundur.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-gold p-8 border border-gold flex flex-col group hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <span className="font-bold text-navy text-lg mb-2">CE Belgesi</span>
            <div className="h-1 w-16 bg-gold rounded mb-3" />
            <span className="text-gray">Avrupa Birliği teknik mevzuatına uygunluk belgesidir.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-gold p-8 border border-gold flex flex-col group hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <span className="font-bold text-navy text-lg mb-2">TSE Belgesi (Türk Standartlarına Uygunluk)</span>
            <div className="h-1 w-16 bg-gold rounded mb-3" />
            <span className="text-gray">Ürünlerimiz Türkiye Standartları Enstitüsü tarafından onaylanmıştır.</span>
          </div>
    </div>
      </section>
    </>
  );
}
