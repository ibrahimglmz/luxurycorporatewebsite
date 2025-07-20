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
    <nav className="w-full bg-white fixed top-0 left-0 z-50 border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-lg sm:text-xl text-[#1E293B] hover:text-[#3B82F6] transition-colors">
              İbrahim Gülmez
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#1E293B] hover:text-[#3B82F6] font-medium transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/hakkinda" className="text-[#1E293B] hover:text-[#3B82F6] font-medium transition-colors">
              Hakkımızda
            </Link>
            <Link href="/ekibimiz" className="text-[#1E293B] hover:text-[#3B82F6] font-medium transition-colors">
              Ekibimiz
            </Link>
            <Link href="/iletisim" className="text-[#1E293B] hover:text-[#3B82F6] font-medium transition-colors">
              İletişim
            </Link>
          </div>

          {/* Desktop Language Selector */}
          <div className="hidden md:flex items-center">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-2 px-3 py-2 bg-[#F1F5F9] border border-[#D1D5DB] rounded-lg text-[#1E293B] font-medium hover:bg-[#3B82F6] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-colors"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <span className="text-sm">{LANGS.find(l => l.code === selectedLang)?.label || "Dil"}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white border border-[#D1D5DB] rounded-lg shadow-lg z-50 py-1">
                  {LANGS.map((lang) => (
                    <li key={lang.code}>
                      <button
                        className={`w-full text-left px-4 py-2 hover:bg-[#F1F5F9] text-[#1E293B] font-medium text-sm ${selectedLang === lang.code ? "bg-[#F1F5F9]" : ""}`}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
} 