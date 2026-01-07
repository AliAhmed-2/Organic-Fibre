"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { Search, Download } from "@deemlol/next-icons";
import logo from "public/logo.png";
import Link from "next/link";

export default function NavBar({ variant = "light" }) {
  const [isOpen, setIsOpen] = useState(false);

  const textClass = variant === "dark" ? "text-black" : "text-white";
  const iconColor = variant === "dark" ? "#000000" : "#ffffff";

  return (
    <nav
      className={`${textClass} px-10 md:px-30 py-20 flex items-center justify-between relative`}
    >
      <div>
        <Image src={logo} alt="Logo" className="w-18" />
      </div>

      <ul className="hidden md:flex gap-8 list-none">
        <Link href="/" className="hover:text-[#778D4D] cursor-pointer">
          Home
        </Link>
        <Link href="/products" className="hover:text-[#778D4D] cursor-pointer">
          Products
        </Link>
        <Link href="/about" className="hover:text-[#778D4D] cursor-pointer">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#778D4D] cursor-pointer">
          Contact
        </Link>
      </ul>

      <div className="hidden md:flex gap-4">
        <Search size={24} color={iconColor} />
        <Download size={24} color={iconColor} />
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`pl-3 pb-10 fixed top-0 right-0 h-full w-100 bg-[#778D4D] shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="md:hidden flex mt-10 ml-80">
          <button onClick={() => setIsOpen(false)}>
            <HiX size={28} />
          </button>
        </div>

        <ul className="flex flex-col mt-10 gap-6 pl-6 text-xl">
          <Link href="/" className="hover:text-[#778D4D] cursor-pointer">
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-[#778D4D] cursor-pointer"
          >
            Products
          </Link>
          <Link href="/about" className="hover:text-[#778D4D] cursor-pointer">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#778D4D] cursor-pointer">
            Contact
          </Link>
        </ul>

        <div className="flex gap-4 mt-10 pl-6">
          <Search size={24} color="#ffffff" />
          <Download size={24} color="#ffffff" />
        </div>
      </div>
    </nav>
  );
}
