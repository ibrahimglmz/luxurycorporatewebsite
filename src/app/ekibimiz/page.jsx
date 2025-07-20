import React from "react";

const kadro = [
  {
    grup: "Üst Yönetim",
    uyeler: [
      { unvan: "Genel Müdür", isim: "Ahmet Yılmaz", departman: "Yönetim" },
    ],
  },
  {
    grup: "Müdürler",
    uyeler: [
      { unvan: "Fabrika Müdürü", isim: "Elif Kaya", departman: "Üretim" },
      { unvan: "Üretim Müdürü", isim: "Mehmet Demir", departman: "Üretim" },
      { unvan: "Kalite Kontrol Müdürü", isim: "Zeynep Şahin", departman: "Kalite" },
      { unvan: "Ar-Ge Müdürü", isim: "Burak Aydın", departman: "Ar-Ge" },
      { unvan: "Bakım ve Teknik Hizmetler Müdürü", isim: "Gülşah Korkmaz", departman: "Teknik" },
      { unvan: "İnsan Kaynakları Müdürü", isim: "Serkan Demirtaş", departman: "İK" },
      { unvan: "Finans ve Muhasebe Müdürü", isim: "Ayşe Karaca", departman: "Finans" },
      { unvan: "Satış ve Pazarlama Müdürü", isim: "Emre Uçar", departman: "Satış" },
      { unvan: "İdari İşler ve Satın Alma Müdürü", isim: "Büşra Yılmaz", departman: "İdari" },
    ],
  },
  {
    grup: "Uzmanlar ve Sorumlular",
    uyeler: [
      { unvan: "İş Sağlığı ve Güvenliği Uzmanı", isim: "Murat Yıldız", departman: "İSG" },
      { unvan: "Çevre ve Enerji Yöneticisi", isim: "Derya Aksoy", departman: "Çevre" },
      { unvan: "Lojistik ve Sevkiyat Sorumlusu", isim: "Onur Demir", departman: "Lojistik" },
      { unvan: "Planlama ve Stok Kontrol Sorumlusu", isim: "Selin Arslan", departman: "Planlama" },
    ],
  },
  {
    grup: "Şef ve Teknik Kadro",
    uyeler: [
      { unvan: "Üretim Şefi", isim: "Ali Korkmaz", departman: "Üretim" },
      { unvan: "Kalite Kontrol Şefi", isim: "Cemre Yıldız", departman: "Kalite" },
      { unvan: "Üretim Şefi", isim: "Barış Güneş", departman: "Üretim" },
      { unvan: "Tasarım Şefi", isim: "Ece Demir", departman: "Üretim" },
      { unvan: "İmalat Şefi", isim: "Furkan Şahin", departman: "Üretim" },
      { unvan: "Bakım-Onarım Şefi", isim: "Gökhan Aydın", departman: "Teknik" },
      { unvan: "Laboratuvar Şefi", isim: "İrem Yılmaz", departman: "Kalite" },
      { unvan: "Mekanik Bakım Teknikeri", isim: "Mert Aksoy", departman: "Teknik" },
      { unvan: "Endüstriyel Teknikeri", isim: "Seda Karaca", departman: "Teknik" },
      { unvan: "Kalite Kontrol Teknikeri", isim: "Yusuf Uçar", departman: "Kalite" },
      { unvan: "Numune Alma Teknikeri", isim: "Deniz Kılıç", departman: "Kalite" },
      { unvan: "Ölçüm ve Test Teknikeri", isim: "Bora Yıldırım", departman: "Kalite" },
      { unvan: "Çevre ve İSG Teknikeri", isim: "Melis Demirtaş", departman: "İSG" },
      { unvan: "CNC Operatörü / Teknikeri", isim: "Onur Yalçın", departman: "Üretim" },
      { unvan: "Tasarım Teknikeri", isim: "Sibel Arslan", departman: "Üretim" },
    ],
  },
];

const departmanRenkleri = {
  "Yönetim": "from-blue-600 to-blue-800",
  "Üretim": "from-green-600 to-green-800", 
  "Kalite": "from-purple-600 to-purple-800",
  "Ar-Ge": "from-indigo-600 to-indigo-800",
  "Teknik": "from-orange-600 to-orange-800",
  "İK": "from-pink-600 to-pink-800",
  "Finans": "from-emerald-600 to-emerald-800",
  "Satış": "from-red-600 to-red-800",
  "İdari": "from-gray-600 to-gray-800",
  "İSG": "from-yellow-600 to-yellow-800",
  "Çevre": "from-teal-600 to-teal-800",
  "Lojistik": "from-cyan-600 to-cyan-800",
  "Planlama": "from-violet-600 to-violet-800"
};

function PersonCard({ uye, level }) {
  const renkSinifi = departmanRenkleri[uye.departman] || "from-gray-600 to-gray-800";
  
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
      {/* Departman Renk Çizgisi */}
      <div className={`h-1 bg-gradient-to-r ${renkSinifi}`} />
      
      <div className="p-6">
        {/* Avatar Alanı */}
        <div className="flex items-center justify-center mb-4">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${renkSinifi} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
            {uye.isim.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        
        {/* İsim ve Unvan */}
        <div className="text-center">
          <h3 className="font-bold text-gray-900 text-lg mb-1">{uye.isim}</h3>
          <p className="text-gray-600 text-sm font-medium mb-2">{uye.unvan}</p>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${renkSinifi} text-white`}>
            {uye.departman}
          </span>
        </div>
        
        {/* Hover Efekti */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>
    </div>
  );
}

function LevelHeader({ title, description, color }) {
  return (
    <div className="text-center mb-12">
      <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${color} text-white font-bold text-lg mb-4`}>
        {title}
      </div>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
    </div>
  );
}

export default function OrganizationChart() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Yönetim Ekibimiz
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Deneyimli ve uzman kadromuzla, kaliteli hizmet sunmaya devam ediyoruz
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-8 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Üst Yönetim */}
        <section className="mb-20">
          <LevelHeader 
            title="Üst Yönetim" 
            description="Şirketimizin stratejik kararlarını alan ve vizyonumuzu belirleyen üst yönetim ekibimiz"
            color="from-blue-600 to-blue-800"
          />
          <div className="flex justify-center">
            <div className="max-w-md">
              <PersonCard uye={kadro[0].uyeler[0]} level={0} />
            </div>
          </div>
        </section>

        {/* Müdürler */}
        <section className="mb-20">
          <LevelHeader 
            title="Müdürler" 
            description="Her departmanın başında bulunan, uzmanlık alanlarında liderlik yapan müdürlerimiz"
            color="from-green-600 to-green-800"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kadro[1].uyeler.map((uye, index) => (
              <PersonCard key={index} uye={uye} level={1} />
            ))}
          </div>
        </section>

        {/* Uzmanlar */}
        <section className="mb-20">
          <LevelHeader 
            title="Uzmanlar ve Sorumlular" 
            description="Uzmanlık alanlarında derin bilgiye sahip, kritik süreçleri yöneten uzmanlarımız"
            color="from-purple-600 to-purple-800"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kadro[2].uyeler.map((uye, index) => (
              <PersonCard key={index} uye={uye} level={2} />
            ))}
          </div>
        </section>

        {/* Teknik Kadro */}
        <section className="mb-20">
          <LevelHeader 
            title="Şef ve Teknik Kadro" 
            description="Operasyonel süreçlerde mükemmellik sağlayan, teknik uzmanlığa sahip şef ve teknikerlerimiz"
            color="from-orange-600 to-orange-800"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {kadro[3].uyeler.map((uye, index) => (
              <PersonCard key={index} uye={uye} level={3} />
            ))}
          </div>
        </section>

        {/* İstatistikler */}
        <section className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ekip İstatistiklerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">29</div>
              <div className="text-gray-600">Toplam Çalışan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600">Yönetim Seviyesi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">13</div>
              <div className="text-gray-600">Farklı Departman</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Ortalama Deneyim (Yıl)</div>
            </div>
          </div>
        </section>

        {/* Departman Renk Açıklaması */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Departman Renk Kodları
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(departmanRenkleri).map(([departman, renk]) => (
              <div key={departman} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${renk}`} />
                <span className="text-sm font-medium text-gray-700">{departman}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 