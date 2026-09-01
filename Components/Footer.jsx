"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";
import { Twitter, Linkedin, Facebook, Google } from "@deemlol/next-icons";
import { HiOutlineMail, HiOutlineShieldCheck, HiOutlineSparkles, HiCheckCircle } from "react-icons/hi";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#343D33] text-white pt-16 pb-8 border-t-4 border-[#778D4D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col gap-12">
        
        {/* Top Row: Brand + Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white/10 rounded-2xl p-1.5 border border-white/20">
                <Image src={logo} alt="Organic Fiber Logo" fill className="object-contain p-1" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white">
                  ORGANIC <span className="text-[#B5E8C1]">FIBER</span>
                </span>
                <span className="text-[10px] tracking-widest font-semibold uppercase text-stone-300">
                  Clean Tech & Sustainable Goods
                </span>
              </div>
            </Link>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mt-2">
              Transforming post-harvest agricultural banana pseudo-stem waste into industrial extraction machinery, high-tensile natural fibers, and premium biodegradable everyday consumer goods.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="p-2 rounded-xl bg-white/10 hover:bg-[#778D4D] transition-colors cursor-pointer">
                <Twitter size={20} color="#FFFFFF" />
              </div>
              <div className="p-2 rounded-xl bg-white/10 hover:bg-[#778D4D] transition-colors cursor-pointer">
                <Facebook size={20} color="#FFFFFF" />
              </div>
              <div className="p-2 rounded-xl bg-white/10 hover:bg-[#778D4D] transition-colors cursor-pointer">
                <Linkedin size={20} color="#FFFFFF" />
              </div>
              <div className="p-2 rounded-xl bg-white/10 hover:bg-[#778D4D] transition-colors cursor-pointer">
                <Google size={20} color="#FFFFFF" />
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#B5E8C1]">
              Quick Navigation
            </h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-stone-300">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Products Catalog</Link></li>
              <li><Link href="/machine-parts" className="hover:text-white font-medium transition">Machine & Parts</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Our Mission</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact & Quotes</Link></li>
            </ul>
          </div>

          {/* Col 3: Product Highlights (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#B5E8C1]">
              Product Solutions
            </h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-stone-300">
              <li><Link href="/products" className="hover:text-white transition">Raw Banana Fiber Hanks</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Banana Cotton Pulp</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Molded Tableware & Plates</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Handmade Paper & Folders</Link></li>
              <li><Link href="/machine-parts" className="hover:text-white transition">Decortication Machinery</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Direct Inquiries (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#B5E8C1]">
              Stay Connected
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Subscribe for agricultural fiber research, wholesale price updates, and new machine release announcements.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-2xl bg-[#778D4D]/40 border border-[#B5E8C1]/30 text-xs text-[#B5E8C1] flex items-center gap-2">
                <HiCheckCircle className="text-lg shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-[#B5E8C1]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-xl bg-[#778D4D] hover:bg-[#60743B] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Badges / Guarantees Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/10 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <HiOutlineShieldCheck className="text-xl text-[#B5E8C1]" />
            <span>100% Bio-Degradable</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineSparkles className="text-xl text-[#B5E8C1]" />
            <span>Zero Chemical Residue</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineShieldCheck className="text-xl text-[#B5E8C1]" />
            <span>Direct OEM Machinery</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineSparkles className="text-xl text-[#B5E8C1]" />
            <span>Worldwide Shipping</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Organic Fiber. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-stone-200 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-stone-200 transition">Terms of Service</Link>
            <Link href="/contact" className="hover:text-stone-200 transition">Technical Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
