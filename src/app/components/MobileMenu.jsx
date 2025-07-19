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
        className="md:hidden p-2 z-50 relative rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label="Menüyü Aç"
        onClick={() => setOpen(true)}
      >
        <FaBars size={26} className="text-[#1E293B]" />
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
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-navbarfooter shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ maxWidth: 320 }}
      >
        {/* Üst: Firma Adı ve Kapat */}
        <div>
          <div className="flex items-center justify-between p-4 border-b border-neutral">
            <span className="text-title text-2xl font-extrabold mx-auto">İbrahim Gülmez</span>
            <button
              className="p-2 ml-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Menüyü Kapat"
              onClick={() => setOpen(false)}
            >
              <FaTimes size={28} className="text-title" />
            </button>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col items-start gap-6 px-8 mt-8 text-title text-lg font-semibold">
            {[
              { href: "/", label: "Ana Sayfa" },
              { href: "/hakkinda", label: "Hakkımızda" },
              { href: "/ekibimiz", label: "Ekibimiz" },
              { href: "/iletisim", label: "İletişim" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-accent transition"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Alt: Sosyal ikonlar ve copyright */}
        <div className="flex flex-col gap-4 pb-6">
          <div className="flex justify-center gap-5 px-8">
            <SocialIcon href="https://facebook.com" Icon={FaFacebook} />
            <SocialIcon href="https://instagram.com" Icon={FaInstagram} />
            <SocialIcon href="https://tiktok.com" Icon={FaTiktok} />
            <SocialIcon href="https://wa.me/905555555555" Icon={FaWhatsapp} />
            <SocialIcon href="mailto:info@luxurycorporate.com" Icon={MdEmail} />
          </div>
          <div className="text-center text-xs text-title mt-2">© 2025 Tüm Hakları Saklıdır.</div>
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
      className="text-gray-300 hover:text-yellow-400 transition transform hover:scale-110"
    >
      <Icon size={22} />
    </a>
  );
}
