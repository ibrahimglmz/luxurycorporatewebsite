import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "İbrahim Gülmez | Lüks Kurumsal Çözümler",
  description: "Lüksün ve inovasyonun buluştuğu kurumsal dünyaya hoş geldiniz.",
};

function Navbar() {
  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-center py-4 bg-navy shadow-md fixed top-0 left-0 z-30 relative pl-0 md:pl-40 px-4">
      <div className="flex w-full md:w-auto justify-center md:justify-start mb-2 md:mb-0 md:absolute md:left-6 items-center gap-2">
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gold text-navy font-extrabold text-lg shadow-gold border-2 border-white">İG</span>
        <span className="font-bold text-xl text-gold">İbrahim Gülmez</span>
      </div>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg font-semibold w-full md:w-auto justify-center items-center">
        <li>
          <Link href="/" className="hover:text-gold text-white transition-colors">Ana Sayfa</Link>
        </li>
        <li>
          <Link href="/hakkinda" className="hover:text-gold text-white transition-colors">Hakkımızda</Link>
        </li>
        <li>
          <Link href="/ekibimiz" className="hover:text-gold text-white transition-colors">Ekibimiz</Link>
        </li>
        <li>
          <Link href="/iletisim" className="hover:text-gold text-white transition-colors">İletişim</Link>
        </li>
      </ul>
      <div className="absolute right-6 flex gap-3 items-center text-xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
          <FaFacebook color="#FFD700" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
          <FaInstagram color="#FFD700" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
          <FaTiktok color="#FFD700" />
        </a>
        <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
          <FaWhatsapp color="#FFD700" />
        </a>
        <a href="mailto:info@luxurycorporate.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
          <MdEmail color="#FFD700" />
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-navy border-t border-gold py-6 flex flex-col md:flex-row items-center justify-between px-6 text-gold text-sm gap-4 md:gap-0">
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gold text-navy font-extrabold text-base shadow-gold border-2 border-white">İG</span>
        <span className="font-bold">İbrahim Gülmez</span>
        <span className="mx-2">|</span>
        <span>© {new Date().getFullYear()} Tüm Hakları Saklıdır.</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
        <div className="flex gap-3 items-center text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
            <FaFacebook color="#FFD700" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
            <FaInstagram color="#FFD700" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
            <FaTiktok color="#FFD700" />
          </a>
          <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
            <FaWhatsapp color="#FFD700" />
          </a>
          <a href="mailto:info@luxurycorporate.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
            <MdEmail color="#FFD700" />
          </a>
        </div>
        <div className="flex gap-3 items-center text-xs mt-2 md:mt-0">
          <Link href="/gizlilik-politikasi" className="hover:underline text-gold">Gizlilik Politikası</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/kullanim-kosullari" className="hover:underline text-gold">Kullanım Koşulları</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/cerez-politikasi" className="hover:underline text-gold">Çerez Politikası</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/ekibimiz" className="hover:underline text-gold">Ekibimiz</Link>
        </div>
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
        <div className="pt-14 min-h-[60vh] flex flex-col justify-between">
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
