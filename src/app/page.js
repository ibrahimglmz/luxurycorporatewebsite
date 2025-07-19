import React from "react";
import YonetimSlider from "./components/YonetimSlider";
import Sertifikalarimiz from "./components/Sertifikalarimiz";

export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
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
        <div className="absolute top-0 left-0 w-full h-full bg-gold-gradient animate-gradient-move z-10" />
        {/* İçerik */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-2 sm:px-4 w-full max-w-2xl">
          <div className="bg-[#1E293B]/80 rounded-xl px-6 py-6 sm:py-8 flex flex-col items-center w-full">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-2 tracking-tight text-white">İbrahim Gülmez</h1>
            <p className="text-base sm:text-xl font-medium text-white">Kurumsal Çözümlerde Güven ve Yenilik</p>
          </div>
        </div>
        {/* Scroll Down Animasyonu */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center animate-bounce">
          <span className="text-primary text-3xl">↓</span>
          <span className="text-primary text-xs mt-1">Aşağı Kaydır</span>
        </div>
      </main>
      {/* Animasyonlu Hızlı İstatistikler */}
      <section className="w-full bg-bg py-12 flex flex-col items-center">
        <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center bg-card rounded-xl shadow p-6 border border-bg">
            <span className="text-4xl md:text-5xl font-extrabold text-title animate-fade-in-slow">20+</span>
            <span className="text-lg md:text-xl font-medium text-text mt-2">Yıllık Tecrübe</span>
          </div>
          <div className="flex flex-col items-center bg-card rounded-xl shadow p-6 border border-bg">
            <span className="text-4xl md:text-5xl font-extrabold text-title animate-fade-in-slow">100+</span>
            <span className="text-lg md:text-xl font-medium text-text mt-2">Mutlu Müşteri</span>
          </div>
          <div className="flex flex-col items-center bg-card rounded-xl shadow p-6 border border-bg">
            <span className="text-4xl md:text-5xl font-extrabold text-title animate-fade-in-slow">10+</span>
            <span className="text-lg md:text-xl font-medium text-text mt-2">Ülke</span>
          </div>
          <div className="flex flex-col items-center bg-card rounded-xl shadow p-6 border border-bg">
            <span className="text-4xl md:text-5xl font-extrabold text-title animate-fade-in-slow">50+</span>
            <span className="text-lg md:text-xl font-medium text-text mt-2">Personel</span>
          </div>
        </div>
      </section>
      {/* Öne Çıkan Projeler / Referanslar */}
      <section id="one-cikan-projeler" className="w-full bg-bg py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-title">Öne Çıkan Ürünler</h2>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg shadow p-4 flex flex-col items-center border border-bg hover:scale-105 transition-transform">
            <img src="/globe.svg" alt="Ürün 1" className="w-14 h-14 mb-3" />
            <h3 className="text-lg font-semibold mb-1 text-title">Paslanmaz Çelik Vida</h3>
            <p className="text-text text-center text-sm mb-1">Yüksek dayanımlı, endüstriyel kullanıma uygun paslanmaz çelik vida.</p>
          </div>
          <div className="bg-card rounded-lg shadow p-4 flex flex-col items-center border border-bg hover:scale-105 transition-transform">
            <img src="/window.svg" alt="Ürün 2" className="w-14 h-14 mb-3" />
            <h3 className="text-lg font-semibold mb-1 text-title">Galvanizli Vida</h3>
            <p className="text-text text-center text-sm mb-1">Korozyona karşı ekstra korumalı, uzun ömürlü galvanizli vida.</p>
          </div>
          <div className="bg-card rounded-lg shadow p-4 flex flex-col items-center border border-bg hover:scale-105 transition-transform">
            <img src="/file.svg" alt="Ürün 3" className="w-14 h-14 mb-3" />
            <h3 className="text-lg font-semibold mb-1 text-title">Özel Üretim Vida</h3>
            <p className="text-text text-center text-sm mb-1">İhtiyaca özel ölçü ve başlık tiplerinde, yüksek hassasiyetli üretim.</p>
          </div>
        </div>
      </section>
      {/* Yönetim Kadrosu */}
      <section id="yonetim" className="w-full bg-bg py-16 px-4 flex flex-col items-center">
        <YonetimSlider />
      </section>
      {/* Ekstra Bölümler */}
      <section id="hakkinda" className="w-full bg-card py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-title">Hakkımızda</h2>
        <p className="max-w-2xl text-lg text-text text-center mb-6">İbrahim Gülmez, lüks ve inovatif çözümler sunan öncü bir kuruluştur. Müşterilerimize en üst düzeyde kalite ve güven sunmayı ilke edindik.</p>
      </section>
      <section id="hizmetler" className="w-full bg-bg py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-title">Hizmetlerimiz</h2>
        <ul className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <li className="bg-card rounded-xl shadow p-8 border border-bg flex flex-col items-center">
            <span className="text-4xl mb-4">🏢</span>
            <span className="font-semibold text-lg text-title mb-2">Kurumsal Danışmanlık</span>
            <span className="text-text mb-4">Şirketinizin büyümesi için stratejik çözümler sunuyoruz.</span>
            <a href="#" className="mt-auto px-6 py-2 bg-primary text-navbar rounded-full font-medium shadow hover:bg-primary-dark hover:text-light transition">Detaylı Bilgi</a>
          </li>
          <li className="bg-card rounded-xl shadow p-8 border border-bg flex flex-col items-center">
            <span className="text-4xl mb-4">💎</span>
            <span className="font-semibold text-lg text-title mb-2">Lüks Proje Yönetimi</span>
            <span className="text-text mb-4">Prestijli projeleriniz için uçtan uca yönetim ve danışmanlık.</span>
            <a href="#" className="mt-auto px-6 py-2 bg-secondary text-light rounded-full font-medium shadow hover:bg-secondary-dark hover:text-light transition">Detaylı Bilgi</a>
          </li>
          <li className="bg-card rounded-xl shadow p-8 border border-bg flex flex-col items-center">
            <span className="text-4xl mb-4">🌍</span>
            <span className="font-semibold text-lg text-title mb-2">Uluslararası Ağ</span>
            <span className="text-text mb-4">Dünya çapında iş bağlantıları ve yeni fırsatlar.</span>
            <a href="#" className="mt-auto px-6 py-2 bg-primary text-navbar rounded-full font-medium shadow hover:bg-primary-dark hover:text-light transition">Detaylı Bilgi</a>
          </li>
        </ul>
      </section>
      <Sertifikalarimiz />
    </>
  );
}
