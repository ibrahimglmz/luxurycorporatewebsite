import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E5E7EB] py-10 px-4 flex flex-col items-center justify-center text-[#1E293B] text-sm md:text-base">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sol: Hızlı Erişim */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="font-semibold text-base mb-1">Hızlı Erişim</span>
          <Link href="/" className="hover:underline hover:text-[#3B82F6]">Ana Sayfa</Link>
          <Link href="/hakkinda" className="hover:underline hover:text-[#3B82F6]">Hakkımızda</Link>
          <Link href="/ekibimiz" className="hover:underline hover:text-[#3B82F6]">Ekibimiz</Link>
          <Link href="/iletisim" className="hover:underline hover:text-[#3B82F6]">İletişim</Link>
        </div>

        {/* Orta: Logo ve Sosyal Medya */}
        <div className="flex flex-col items-center gap-3">
          <Link href="/" className="font-bold text-lg md:text-xl hover:underline">İbrahim Gülmez</Link>
          <div className="flex gap-4 text-xl text-[#64748B]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6]"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6]"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6]"><FaTiktok /></a>
            <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6]"><FaWhatsapp /></a>
            <a href="mailto:info@luxurycorporate.com" className="hover:text-[#3B82F6]"><MdEmail /></a>
          </div>
        </div>

        {/* Sağ: Yasal Linkler */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <span className="font-semibold text-base mb-1">Tüm hakları saklıdır. | KVKK| Bilgi Güvenliği Politikası</span>
          <Link href="/gizlilik-politikasi" className="hover:underline hover:text-[#3B82F6]">Gizlilik Politikası</Link>
          <Link href="/kullanim-kosullari" className="hover:underline hover:text-[#3B82F6]">Kullanım Koşulları</Link>
          <Link href="/cerez-politikasi" className="hover:underline hover:text-[#3B82F6]">Çerez Politikası</Link>
        </div>
      </div>

      <div className="w-full text-center mt-6 text-[11px] md:text-sm text-[#64748B] flex flex-nowrap justify-center items-center gap-1 whitespace-nowrap">
        <span>© {new Date().getFullYear()} Tüm Hakları Saklıdır.</span>
        <span>|</span>
        <Link href="/" className="hover:underline hover:text-[#3B82F6]">KVKK</Link>
        <span>|</span>
        <Link href="/" className="hover:underline hover:text-[#3B82F6]">Bilgi Güvenliği Politikası</Link>
      </div>
    </footer>
  );
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-[60vh] flex flex-col justify-between">
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
