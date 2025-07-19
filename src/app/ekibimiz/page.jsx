import React from "react";

const kadro = [
  {
    grup: "Üst Yönetim",
    uyeler: [
      { unvan: "Genel Müdür", isim: "Ahmet Yılmaz" },
    ],
  },
  {
    grup: "Müdürler",
    uyeler: [
      { unvan: "Fabrika Müdürü", isim: "Elif Kaya" },
      { unvan: "Üretim Müdürü", isim: "Mehmet Demir" },
      { unvan: "Kalite Kontrol Müdürü", isim: "Zeynep Şahin" },
      { unvan: "Ar-Ge Müdürü", isim: "Burak Aydın" },
      { unvan: "Bakım ve Teknik Hizmetler Müdürü", isim: "Gülşah Korkmaz" },
      { unvan: "İnsan Kaynakları Müdürü", isim: "Serkan Demirtaş" },
      { unvan: "Finans ve Muhasebe Müdürü", isim: "Ayşe Karaca" },
      { unvan: "Satış ve Pazarlama Müdürü", isim: "Emre Uçar" },
      { unvan: "İdari İşler ve Satın Alma Müdürü", isim: "Büşra Yılmaz" },
    ],
  },
  {
    grup: "Uzmanlar ve Sorumlular",
    uyeler: [
      { unvan: "İş Sağlığı ve Güvenliği Uzmanı", isim: "Murat Yıldız" },
      { unvan: "Çevre ve Enerji Yöneticisi", isim: "Derya Aksoy" },
      { unvan: "Lojistik ve Sevkiyat Sorumlusu", isim: "Onur Demir" },
      { unvan: "Planlama ve Stok Kontrol Sorumlusu", isim: "Selin Arslan" },
    ],
  },
  {
    grup: "Şef ve Teknik Kadro",
    uyeler: [
      { unvan: "Üretim Şefi", isim: "Ali Korkmaz" },
      { unvan: "Kalite Kontrol Şefi", isim: "Cemre Yıldız" },
      { unvan: "Dökümhane Şefi", isim: "Barış Güneş" },
      { unvan: "Modelhane Şefi", isim: "Ece Demir" },
      { unvan: "Talaşlı İmalat Şefi", isim: "Furkan Şahin" },
      { unvan: "Bakım-Onarım Şefi", isim: "Gökhan Aydın" },
      { unvan: "Laboratuvar Şefi", isim: "İrem Yılmaz" },
      { unvan: "Mekanik Bakım Teknikeri", isim: "Mert Aksoy" },
      { unvan: "Elektrik-Elektronik Teknikeri", isim: "Seda Karaca" },
      { unvan: "Kalite Kontrol Teknikeri", isim: "Yusuf Uçar" },
      { unvan: "Numune Alma Teknikeri", isim: "Deniz Kılıç" },
      { unvan: "Ölçüm ve Test Teknikeri", isim: "Bora Yıldırım" },
      { unvan: "Çevre ve İSG Teknikeri", isim: "Melis Demirtaş" },
      { unvan: "CNC Operatörü / Teknikeri", isim: "Onur Yalçın" },
      { unvan: "Modelci Teknikeri", isim: "Sibel Arslan" },
    ],
  },
];

function TreeRow({ uyeler, gridCols }) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Üst çizgi */}
      {uyeler.length > 1 && (
        <div className="w-full flex justify-center">
          <div className="h-0.5 bg-green-700 w-11/12 max-w-5xl mb-2" />
        </div>
      )}
      <div className={`grid ${gridCols} gap-6 w-full max-w-5xl justify-items-center`}>
        {uyeler.map((uye) => (
          <div key={uye.unvan} className="flex flex-col items-center rounded-xl shadow-lg border border-green-700 px-4 py-3 w-full min-w-0 max-w-xs text-center bg-green-100 text-green-900">
            <span className="font-bold text-base md:text-lg">{uye.unvan}</span>
            <span className="text-sm md:text-base mt-1">{uye.isim}</span>
          </div>
        ))}
      </div>
      {/* Alt çizgi */}
      {uyeler.length > 1 && (
        <div className="w-full flex justify-center">
          <div className="h-0.5 bg-green-700 w-11/12 max-w-5xl mt-2" />
        </div>
      )}
    </div>
  );
}

export default function Ekibimiz() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-green-50 to-green-200">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-green-900">Yönetim Kadrosu</h1>
      <div className="w-full max-w-7xl flex flex-col items-center gap-0 overflow-x-auto">
        {/* Genel Müdür */}
        <TreeRow uyeler={kadro[0].uyeler} gridCols="grid-cols-1" />
        <div className="w-1 h-8 bg-green-700" />
        {/* Müdürler */}
        <TreeRow uyeler={kadro[1].uyeler} gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" />
        <div className="w-1 h-8 bg-green-700" />
        {/* Uzmanlar ve Sorumlular */}
        <TreeRow uyeler={kadro[2].uyeler} gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-4" />
        <div className="w-1 h-8 bg-green-700" />
        {/* Şef ve Teknik Kadro */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-green-800">Şef ve Teknik Kadro</h2>
        <TreeRow uyeler={kadro[3].uyeler} gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" />
      </div>
    </main>
  );
} 