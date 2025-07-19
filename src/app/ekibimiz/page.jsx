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

const levelStyles = [
  {
    bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700",
    border: "border-blue-900/30",
    shadow: "shadow-lg shadow-blue-900/10",
    text: "text-white"
  },
  {
    bg: "bg-gradient-to-br from-[#F1F5F9] via-[#C0C0C0] to-[#D1D5DB]",
    border: "border-[#D1D5DB]",
    shadow: "shadow-md shadow-[#C0C0C0]/10",
    text: "text-[#334155]"
  },
  {
    bg: "bg-gradient-to-br from-[#F1F5F9] via-[#E5E7EB] to-[#C0C0C0]",
    border: "border-[#D1D5DB]",
    shadow: "shadow-sm shadow-[#C0C0C0]/10",
    text: "text-[#334155]"
  },
  {
    bg: "bg-gradient-to-br from-[#F1F5F9] via-[#C0C0C0] to-[#D1D5DB]",
    border: "border-[#D1D5DB]",
    shadow: "shadow-sm shadow-[#C0C0C0]/10",
    text: "text-[#334155]"
  }
];

function PersonCard({ uye, level }) {
  return (
    <div className={`relative group cursor-pointer transform transition-all duration-500 ease-out hover:scale-105 max-w-xs w-full min-w-0 ${levelStyles[level].bg} ${levelStyles[level].border} ${levelStyles[level].shadow} ${levelStyles[level].text} rounded-2xl p-6 border min-h-[120px] flex flex-col items-center justify-center text-center`}>
      <div className="relative z-10 flex flex-col items-center space-y-2">
        <div className={`font-bold leading-tight ${level === 0 ? 'text-lg' : level === 1 ? 'text-base' : 'text-sm'}`}>{uye.unvan}</div>
        <div className={`opacity-90 ${level === 0 ? 'text-base' : 'text-sm'}`}>{uye.isim}</div>
      </div>
    </div>
  );
}

function AnimatedConnection({ vertical = true }) {
  return (
    <div className={
      vertical
        ? "h-10 w-0.5 bg-gradient-to-b from-[#3B82F6] via-blue-900 to-blue-900 opacity-70 mx-auto"
        : "w-10 h-0.5 bg-gradient-to-r from-[#3B82F6] via-blue-900 to-blue-900 opacity-70 my-0 mx-auto"
    } />
  );
}

export default function OrganizationChart() {
  return (
    <div className="min-h-screen relative overflow-x-auto bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 py-12 px-2">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-[#3B82F6] to-[#C0C0C0] bg-clip-text text-transparent mb-6 tracking-tight">
            Yönetim Yapısı
          </h1>
          <div className="h-1 bg-gradient-to-r from-blue-900 via-[#3B82F6] to-[#C0C0C0] rounded-full mb-4" />
          <p className="text-slate-700 text-xl font-light">Şirket Yönetim Yapısı</p>
        </div>

        <div className="flex flex-col items-center space-y-12">
          {/* CEO Level */}
          <div className="flex flex-col items-center space-y-6">
            <PersonCard uye={kadro[0].uyeler[0]} level={0} />
            <AnimatedConnection />
          </div>

          {/* Directors Level */}
          <div className="flex flex-col items-center w-full space-y-6">
            <div className="w-full max-w-6xl">
              <div className="flex justify-center mb-6">
                <div className="h-0.5 w-3/4 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
                {kadro[1].uyeler.map((uye, index) => (
                  <PersonCard key={index} uye={uye} level={1} />
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <div className="h-0.5 w-3/4 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />
              </div>
            </div>
            <AnimatedConnection />
          </div>

          {/* Specialists Level */}
          <div className="flex flex-col items-center w-full space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#64748B] to-[#334155] bg-clip-text text-transparent mb-3">
                Uzmanlar & Sorumlular
              </h2>
              <div className="w-32 h-0.5 bg-gradient-to-r from-[#64748B] to-[#334155] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl justify-items-center">
              {kadro[2].uyeler.map((uye, index) => (
                <PersonCard key={index} uye={uye} level={2} />
              ))}
            </div>
            <AnimatedConnection />
          </div>

          {/* Technical Staff Level */}
          <div className="flex flex-col items-center w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#334155] bg-clip-text text-transparent mb-3">
                Şef & Teknik Kadro
              </h2>
              <div className="w-32 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#334155] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-6xl justify-items-center">
              {kadro[3].uyeler.map((uye, index) => (
                <PersonCard key={index} uye={uye} level={3} />
              ))}
            </div>
          </div>
        </div>

        {/* Modern Legend */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-8 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full shadow-lg" />
              <span className="text-slate-700 font-medium">Üst Yönetim</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-br from-[#F1F5F9] to-[#C0C0C0] rounded-full shadow-lg" />
              <span className="text-[#334155] font-medium">Müdürler</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-br from-[#F1F5F9] to-[#64748B] rounded-full shadow-lg" />
              <span className="text-[#334155] font-medium">Uzmanlar</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-br from-[#F1F5F9] to-[#3B82F6] rounded-full shadow-lg" />
              <span className="text-[#334155] font-medium">Teknik Kadro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 