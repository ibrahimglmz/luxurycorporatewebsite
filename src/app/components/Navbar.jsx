"use client";
import { useState, useRef } from "react";
import React from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("TR");
  const langRef = useRef(null);
  const LANGS = [
    { code: "TR", label: "Türkçe" },
    { code: "FR", label: "Français" },
    { code: "DE", label: "Deutsch" },
    { code: "ES", label: "Español" },
    { code: "RU", label: "Русский" },
  ];

  // Dışarı tıklanınca menüyü kapat
  React.useEffect(() => {
    function handleClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    }
    if (langOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [langOpen]);

  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-center py-4 bg-white fixed top-0 left-0 z-30 relative pl-0 md:pl-40 px-4 border-b border-[#E5E7EB]">
      {/* Mobilde marka ve hamburger aynı sırada, masaüstünde klasik */}
      <div className="w-full flex md:hidden items-center justify-between mb-2 md:mb-0">
        <Link href="/" className="font-bold text-xl" style={{ color: '#1E293B' }}>İbrahim Gülmez</Link>
        <MobileMenu />
      </div>
      {/* Masaüstü marka ve menü */}
      <div className="hidden md:flex w-full md:w-auto justify-center md:justify-start md:absolute md:left-6 items-center gap-2">
        <Link href="/" className="font-bold text-xl" style={{ color: '#1E293B' }}>İbrahim Gülmez</Link>
      </div>
      {/* Masaüstü menü */}
      <ul className="hidden md:flex flex-col md:flex-row gap-4 md:gap-8 text-lg font-semibold w-full md:w-auto justify-center items-center">
        <li>
          <Link href="/" className="transition-colors text-[#1E293B] hover:text-[#3B82F6]">Ana Sayfa</Link>
        </li>
        <li>
          <Link href="/hakkinda" className="transition-colors text-[#1E293B] hover:text-[#3B82F6]">Hakkımızda</Link>
        </li>
        <li>
          <Link href="/ekibimiz" className="transition-colors text-[#1E293B] hover:text-[#3B82F6]">Ekibimiz</Link>
        </li>
        <li>
          <Link href="/iletisim" className="transition-colors text-[#1E293B] hover:text-[#3B82F6]">İletişim</Link>
        </li>
      </ul>
      {/* Dil seçici - sağda */}
      <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 items-center">
        <div className="relative" ref={langRef}>
          <button
            onClick={() => setLangOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 bg-[#F1F5F9] border border-[#D1D5DB] rounded-full text-[#1E293B] font-semibold hover:bg-[#3B82F6] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
            aria-haspopup="listbox"
            aria-expanded={langOpen}
          >
            <span>{LANGS.find(l => l.code === selectedLang)?.label || "Dil"}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {langOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white border border-[#D1D5DB] rounded-xl shadow-lg z-50 py-1">
              {LANGS.map((lang) => (
                <li key={lang.code}>
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-[#F1F5F9] text-[#1E293B] font-medium ${selectedLang === lang.code ? "bg-[#F1F5F9]" : ""}`}
                    onClick={() => { setSelectedLang(lang.code); setLangOpen(false); }}
                  >
                    {lang.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
} 