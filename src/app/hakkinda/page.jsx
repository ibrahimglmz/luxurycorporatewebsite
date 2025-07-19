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
    <main className="min-h-screen bg-bg">
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
          <p className="text-lg md:text-2xl text-gray-100 drop-shadow">Metal vida sektöründe güvenin ve kalitenin adresi</p>
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
              İbrahim Gülmez, metal vida sektöründe yenilikçi çözümler ve yüksek kalite standartlarıyla öne çıkan bir markadır. Güçlü ekibimiz ve modern üretim altyapımız ile müşterilerimize güvenilir, sürdürülebilir ve değer katan hizmetler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Kurucu Ortaklar */}
      <section className="w-full bg-section py-12 px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-title">Kurucu Ortaklar</h2>
        <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {KURUCU_ORTAKLAR.map((k, i) => (
            <div key={i} className="bg-card rounded-xl shadow p-6 border border-neutral flex flex-col items-center text-center transition-transform hover:scale-105">
              <div className="w-20 h-20 mb-3 rounded-full overflow-hidden bg-section flex items-center justify-center">
                <Image src="/ibrahimWebsitesi.webp" alt={k.isim} width={64} height={64} className="object-cover" />
              </div>
              <div className="font-bold text-title text-base mb-1">{k.isim}</div>
              <div className="text-secondary text-sm mb-1">{k.unvan}</div>
              <div className="text-text text-xs">{k.aciklama}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Değerlerimiz, Misyon, Vizyon, Çalışma */}
      <section className="w-full bg-section py-16 px-4 flex flex-col items-center gap-12">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Değerlerimiz */}
          <div className="bg-[#F3F4F6] rounded-2xl shadow p-8 flex flex-col gap-4 border border-[#C0C0C0]">
            <h2 className="text-2xl font-bold text-[#1E293B] mb-2 tracking-tight">Değerlerimiz</h2>
            <div>
              <span className="font-semibold text-[#1E293B]">Kalite</span>
              <p className="text-text text-sm">En yüksek kalite standartlarında hizmet sunuyoruz.</p>
            </div>
            <div>
              <span className="font-semibold text-[#1E293B]">Müşteri Memnuniyeti</span>
              <p className="text-text text-sm">Müşterilerimizin ihtiyaçlarını en iyi şekilde karşılıyoruz.</p>
            </div>
            <div>
              <span className="font-semibold text-[#1E293B]">Uzmanlık</span>
              <p className="text-text text-sm">Alanında uzman ekibimizle profesyonel çözümler üretiyoruz.</p>
            </div>
            <div>
              <span className="font-semibold text-[#1E293B]">Güvenilirlik</span>
              <p className="text-text text-sm">20 yılı aşkın tecrübemizle güvenilir hizmet sunuyoruz.</p>
            </div>
          </div>
          {/* Misyon & Vizyon */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#F3F4F6] rounded-2xl shadow p-6 border border-[#C0C0C0]">
              <h2 className="text-xl font-bold text-[#1E293B] mb-2 tracking-tight">Misyonumuz</h2>
              <p className="text-text text-sm">Müşterilerimize en kaliteli elektrik ve otomasyon çözümlerini sunarak, sürdürülebilir ve verimli enerji sistemleri kurmak. Yenilikçi teknolojileri takip ederek, sektörde öncü olmak ve müşteri memnuniyetini en üst düzeyde tutmak.</p>
            </div>
            <div className="bg-[#F3F4F6] rounded-2xl shadow p-6 border border-[#C0C0C0]">
              <h2 className="text-xl font-bold text-[#1E293B] mb-2 tracking-tight">Vizyonumuz</h2>
              <p className="text-text text-sm">Elektrik ve otomasyon sektöründe lider konuma gelerek, yenilenebilir enerji çözümlerinde öncü olmak. Sürdürülebilir ve çevre dostu teknolojilerle, gelecek nesillere daha yaşanabilir bir dünya bırakmak.</p>
            </div>
          </div>
        </div>
        {/* Bizimle Çalışmak İster misiniz? */}
        <div className="max-w-2xl w-full bg-[#C0C0C0]/40 rounded-2xl shadow p-8 flex flex-col items-center gap-4 border border-[#1E293B] mt-8">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-2 text-center tracking-tight">Bizimle Çalışmak İster misiniz?</h2>
          <p className="text-[#1E293B] text-center">Elektrik ve otomasyon projeleriniz için uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.</p>
          <a href="/iletisim" className="mt-2 px-6 py-3 bg-[#1E293B] text-white rounded-full font-semibold shadow hover:bg-[#334155] transition">İletişime Geçin</a>
        </div>
      </section>
    </main>
  );
} 