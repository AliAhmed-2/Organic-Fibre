import React from "react";
import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone, HiOutlineDocumentDownload } from "react-icons/hi";

export default function MachineCTA() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-16 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2F5A3E] via-[#1F3A2B] to-[#14291E] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
        
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-[#B5E8C1]/20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
          
          <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-sm font-bold tracking-widest uppercase border border-white/30">
            DIRECT OEM SUPPLY & SPARE PARTS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Order Complete Machines or Original Spare Parts
          </h2>

          <p className="text-stone-100 text-sm sm:text-base lg:text-lg leading-relaxed">
            Need customized machine configurations, blade replacements, or spare components shipped to your facility? 
            Contact our engineering specialists today for fast quotes and technical guidance.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2 w-full">
            <Link
              href="/contact?subject=Machine+Quotation"
              className="px-8 py-3.5 rounded-full bg-[#B5E8C1] hover:bg-white text-[#224429] hover:text-[#778D4D] font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <HiOutlineMail className="text-xl" />
              Request Machine / Parts Quote
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/40 font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-200 flex items-center gap-2"
            >
              <HiOutlinePhone className="text-xl" />
              Talk to an Engineer
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs sm:text-sm text-stone-200 border-t border-white/20 w-full">
            <span>✓ Original Spare Parts</span>
            <span>✓ Direct From Manufacturer</span>
            <span>✓ Export Enquiries Welcome</span>
            <span>✓ After-Sales Technical Guidance</span>
          </div>

        </div>
      </div>
    </div>
  );
}
