"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiOutlineDownload, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "public/logo.png";
import { CONTACT } from "./contactInfo";

export default function NavBar({ variant = "light" }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const isDark = variant === "dark";
  const textClass = isDark ? "text-gray-900" : "text-white";
  const subTextClass = isDark ? "text-gray-600" : "text-stone-200";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Machine Parts", href: "/machine-parts" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`w-full px-6 sm:px-12 lg:px-24 py-4 sm:py-5 flex items-center justify-between transition-all duration-200 z-40 relative`}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform group-hover:scale-105 duration-200">
          <Image src={logo} alt="Organic Fiber Logo" fill className="object-contain" priority />
        </div>
        <div className="flex flex-col">
          <span className={`notranslate font-black text-lg sm:text-xl tracking-tight leading-none ${textClass}`}>
            ORGANIC <span className="text-[#778D4D]">FIBER</span>
          </span>
          <span className={`text-xs tracking-widest font-semibold uppercase mt-0.5 ${subTextClass}`}>
            Clean Tech & Eco Goods
          </span>
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-7 lg:gap-9 list-none items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-sm lg:text-base font-semibold transition-all duration-200 relative py-1
                  ${
                    isActive
                      ? "text-[#778D4D] font-bold"
                      : isDark
                      ? "text-gray-700 hover:text-[#778D4D]"
                      : "text-white/90 hover:text-white hover:drop-shadow-sm"
                  }
                `}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#778D4D] rounded-full"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href={CONTACT.mobile.href}
          className={`hidden lg:flex items-center gap-2 px-3 py-2 rounded-full font-bold text-sm transition-colors ${
            isDark ? "hover:bg-gray-100 text-gray-800" : "hover:bg-white/10 text-white"
          }`}
        >
          <HiOutlinePhone size={18} />
          <span className="notranslate">{CONTACT.mobile.display}</span>
        </a>

        <Link
          href="/contact"
          className="px-5 py-2 rounded-full bg-[#778D4D] hover:bg-[#60743B] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          Get a Quote
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className={`p-2 rounded-xl transition-colors cursor-pointer ${
            isDark ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-[#1B3326] text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out p-6 flex flex-col justify-between
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9">
                <Image src={logo} alt="Logo" fill className="object-contain" />
              </div>
              <span className="notranslate font-bold text-sm tracking-wide">ORGANIC FIBER</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
            >
              <HiX size={22} />
            </button>
          </div>

          <ul className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-xl transition-colors ${
                      isActive
                        ? "bg-[#778D4D] text-white font-bold"
                        : "hover:bg-white/10 text-stone-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-center rounded-xl bg-[#B5E8C1] text-[#224429] font-bold text-sm shadow-md transition"
          >
            Request Quotation
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={CONTACT.mobile.href}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition"
            >
              <HiOutlinePhone size={18} />
              Call Us
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold text-sm transition"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
          </div>
          <span className="text-xs text-center text-stone-300">
            © 2025 Organic Fiber. All rights reserved.
          </span>
        </div>
      </div>
    </nav>
  );
}
