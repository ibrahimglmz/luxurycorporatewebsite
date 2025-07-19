import React from "react";

const SERTIFIKALAR = [
  {
    baslik: "ISO 9001:2015 – Kalite Yönetim Sistemi",
    aciklama: "Üretim süreçlerimizde kaliteyi sürekli iyileştirmeyi ve müşteri memnuniyetini esas alır."
  },
  {
    baslik: "ISO 14001:2015 – Çevre Yönetim Sistemi",
    aciklama: "Çevreye duyarlı üretim politikamız ile doğaya karşı sorumluluğumuzu yerine getiriyoruz."
  },
  {
    baslik: "ISO 45001:2018 – İş Sağlığı ve Güvenliği Yönetim Sistemi",
    aciklama: "Çalışanlarımızın sağlığı ve güvenliği önceliğimizdir."
  },
  {
    baslik: "ISO 50001 – Enerji Yönetim Sistemi",
    aciklama: "Enerjiyi verimli kullanarak sürdürülebilir üretimi destekliyoruz."
  },
  {
    baslik: "EN 124 – Döküm Kapaklar İçin Avrupa Standardı",
    aciklama: "Ürünlerimiz Avrupa normlarına uygundur."
  },
  {
    baslik: "TS EN 1561 / TS EN 1563 – Dökme Demir Üretim Standardı",
    aciklama: "Gri dökme demir ve küresel grafitli dökme demir (sfero) üretimlerimiz bu standartlara uygundur."
  },
  {
    baslik: "CE Belgesi",
    aciklama: "Avrupa Birliği teknik mevzuatına uygunluk belgesidir."
  },
  {
    baslik: "TSE Belgesi (Türk Standartlarına Uygunluk)",
    aciklama: "Ürünlerimiz Türkiye Standartları Enstitüsü tarafından onaylanmıştır."
  }
];

export default function Sertifikalarimiz() {
  return (
    <section className="w-full bg-section py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-title tracking-tight">Sertifikalarımız</h2>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERTIFIKALAR.map((s, i) => (
          <div
            key={i}
            className="bg-card rounded-lg shadow p-6 border border-neutral flex flex-col group hover:scale-105 hover:shadow-lg hover:border-accent transition-transform duration-300"
          >
            <span className="font-bold text-title text-lg mb-2">{s.baslik}</span>
            <div className="h-1 w-16 bg-accent rounded mb-3" />
            <span className="text-text text-sm">{s.aciklama}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 