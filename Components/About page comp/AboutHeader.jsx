import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";

export default function AboutHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EBF3E4] text-[#4E622B] text-xs font-bold tracking-wider uppercase border border-[#778D4D]/30">
        <HiOutlineSparkles className="text-base text-[#778D4D]" />
        OUR MISSION & PHILOSOPHY
      </div>
      
      <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
        Pioneering Natural Fibers & <span className="text-[#778D4D]">Circular Agri-Tech</span>
      </h1>
      
      <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl">
        Founded with a vision to eliminate agricultural waste, Organic Fiber bridges indigenous engineering with modern clean technology. 
        We empower agricultural farming communities by transforming discarded banana pseudo-stems into industrial-grade extraction machinery and premium biodegradable goods.
      </p>
    </div>
  );
}
