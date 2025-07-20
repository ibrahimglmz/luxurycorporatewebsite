import React from "react";
import YonetimSlider from "./components/YonetimSlider";
import Sertifikalarimiz from "./components/Sertifikalarimiz";
import AnimatedStats from "./components/AnimatedStats";
import Newsletter from "./components/Newsletter";
import FAQ from "./components/FAQ";
import SocialProof from "./components/SocialProof";
import WhyUs from "./components/WhyUs";

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
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-2xl">
          <div className="bg-[#1E293B]/60 rounded-xl px-4 py-6 sm:px-6 sm:py-8 flex flex-col items-center w-full mx-4 border border-white/20 shadow-2xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-2 tracking-tight text-white leading-tight drop-shadow-lg">İbrahim Gülmez</h1>
            <p className="text-sm sm:text-base md:text-xl font-medium text-white px-2 drop-shadow-md">Kurumsal Çözümlerde Güven ve Yenilik</p>
          </div>
        </div>
        {/* Scroll Down Animasyonu */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center animate-bounce">
          <span className="text-primary text-2xl sm:text-3xl">↓</span>
          <span className="text-primary text-xs mt-1 hidden sm:block">Aşağı Kaydır</span>
        </div>
      </main>
      {/* Animasyonlu İstatistikler */}
      <AnimatedStats />

     
     

      {/* Neden Biz Bölümü */}
      <WhyUs />
      
      {/* Sosyal Kanıt Bölümü */}
      <SocialProof />
      
      <Sertifikalarimiz />
      
      {/* FAQ Bölümü */}
      <FAQ />
      
      {/* Newsletter Bölümü */}
      <Newsletter />
    </>
  );
}
