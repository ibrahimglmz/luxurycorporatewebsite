"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] hover:bg-[#F1F5F9] transition-colors"
        aria-label="Menüyü Aç"
        onClick={() => setOpen(true)}
      >
        <FaBars size={24} className="text-[#1E293B]" />
      </button>

      {/* Overlay (yarı saydam, tıklanınca menüyü kapatır) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer Menü */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 bg-white shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Üst: Firma Adı ve Kapat */}
        <div>
          <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
            <span className="text-[#1E293B] text-xl font-bold">İbrahim Gülmez</span>
            <button
              className="p-2 rounded-lg hover:bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-colors"
              aria-label="Menüyü Kapat"
              onClick={() => setOpen(false)}
            >
              <FaTimes size={24} className="text-[#1E293B]" />
            </button>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col px-6 mt-6">
            {[
              { href: "/", label: "Ana Sayfa" },
              { href: "/hakkinda", label: "Hakkımızda" },
              { href: "/ekibimiz", label: "Ekibimiz" },
              { href: "/iletisim", label: "İletişim" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="py-4 px-4 text-[#1E293B] hover:text-[#3B82F6] hover:bg-[#F1F5F9] rounded-lg font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Alt: Sosyal ikonlar ve copyright */}
        <div className="flex flex-col gap-6 p-6 border-t border-[#E5E7EB]">
          <div className="flex justify-center gap-6">
            <SocialIcon href="https://facebook.com" Icon={FaFacebook} />
            <SocialIcon href="https://instagram.com" Icon={FaInstagram} />
            <SocialIcon href="https://tiktok.com" Icon={FaTiktok} />
            <SocialIcon href="https://wa.me/905555555555" Icon={FaWhatsapp} />
            <SocialIcon href="mailto:info@luxurycorporate.com" Icon={MdEmail} />
          </div>
          <div className="text-center text-xs text-[#64748B]">© 2025 Tüm Hakları Saklıdır.</div>
        </div>
      </div>
    </>
  );
}

function SocialIcon({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#64748B] hover:text-[#3B82F6] transition-colors transform hover:scale-110 p-2 rounded-lg hover:bg-[#F1F5F9]"
    >
      <Icon size={20} />
    </a>
  );
}
