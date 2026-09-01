import React from "react";
import Link from "next/link";
import { HiOutlineSparkles, HiOutlineCube, HiOutlineShieldCheck, HiOutlineCog } from "react-icons/hi";

export default function MachineHeader() {
  const highlights = [
    {
      icon: <HiOutlineCog className="text-2xl text-[#778D4D]" />,
      label: "Processing Capacity",
      val: "150–200 kg/hr",
      sub: "High extraction throughput",
    },
    {
      icon: <HiOutlineShieldCheck className="text-2xl text-[#778D4D]" />,
      label: "Build Material",
      val: "Sturdy Mild Steel",
      sub: "Corrosion-resistant coating",
    },
    {
      icon: <HiOutlineSparkles className="text-2xl text-[#778D4D]" />,
      label: "Extraction Purity",
      val: "98% Fiber Yield",
      sub: "Damage-free natural strands",
    },
    {
      icon: <HiOutlineCube className="text-2xl text-[#778D4D]" />,
      label: "Maintenance",
      val: "Modular Spare Parts",
      sub: "Quick interchangeable design",
    },
  ];

  return (
    <div className="pt-6 pb-12 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-stone-50 via-white to-gray-50/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3E4] border border-[#778D4D]/30 text-[#4E622B] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#778D4D] animate-pulse"></span>
          ECO-FRIENDLY INDUSTRIAL MACHINERY
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight max-w-4xl">
          Banana Extractor <span className="text-[#778D4D] underline decoration-[#B5E8C1] decoration-wavy decoration-2">Machine & Parts</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
          Explore our complete industrial banana pseudo-stem fiber extraction unit. 
          Discover detailed schematics, key engineering features, and individual modular replacement components built for maximum efficiency and durability.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <a
            href="#interactive-diagram"
            className="px-7 py-3 rounded-full bg-[#778D4D] hover:bg-[#60743B] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            Explore Machine Diagram
            <span>↓</span>
          </a>
          <a
            href="#parts-catalog"
            className="px-7 py-3 rounded-full bg-white hover:bg-stone-100 text-[#343D33] border border-gray-300 font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            View Individual Parts (8)
            <span>→</span>
          </a>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-full bg-[#B5E8C1] hover:bg-[#9fd7ac] text-[#224429] font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200"
          >
            Request Quotation
          </Link>
        </div>

        {/* Metric Highlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center sm:items-start text-center sm:text-left p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#778D4D]/50 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-[#EBF3E4] group-hover:bg-[#778D4D] group-hover:text-white transition-colors duration-300 mb-3">
                {item.icon}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {item.label}
              </span>
              <span className="text-xl font-bold text-gray-900 mt-1">
                {item.val}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
