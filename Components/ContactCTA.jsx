import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlinePhone, HiArrowRight } from "react-icons/hi";
import { CONTACT } from "./contactInfo";

export default function ContactCTA() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 pb-16 sm:pb-24 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-[#26472F] to-[#14291E] text-white p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3 text-center lg:text-left max-w-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            Talk to Us About Machines or Fiber Orders
          </h2>
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed">
            Call or message us on WhatsApp and our team will answer your questions about extraction machines, spare parts, raw fiber and eco-products.
          </p>
          <a
            href={CONTACT.mobile.href}
            className="notranslate text-2xl sm:text-3xl font-black text-[#B5E8C1] hover:underline mt-1"
          >
            {CONTACT.mobile.display}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto lg:min-w-[260px]">
          <a
            href={CONTACT.mobile.href}
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-stone-100 text-[#1B3326] font-bold text-base shadow-md transition"
          >
            <HiOutlinePhone size={20} />
            Call Now
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold text-base shadow-md transition"
          >
            <FaWhatsapp size={22} />
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base transition"
          >
            Get a Quote
            <HiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
