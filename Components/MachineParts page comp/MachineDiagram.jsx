"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MACHINE_PARTS, KEY_FEATURES } from "./partsData";
import { 
  HiCheckCircle, 
  HiOutlineInformationCircle, 
  HiChevronRight, 
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineCog,
  HiSparkles
} from "react-icons/hi";

export default function MachineDiagram({ onSelectPart }) {
  const [activePartId, setActivePartId] = useState(1);
  const [hoveredPartId, setHoveredPartId] = useState(null);

  const activePart = MACHINE_PARTS.find((p) => p.id === activePartId) || MACHINE_PARTS[0];

  const handleSelect = (part) => {
    setActivePartId(part.id);
    if (onSelectPart) {
      onSelectPart(part);
    }
  };

  return (
    <section id="interactive-diagram" className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3E4] text-[#4E622B] text-xs font-bold tracking-wider uppercase mb-3 border border-[#778D4D]/30">
          <HiOutlineCog className="text-base text-[#778D4D] animate-spin-slow" />
          INTERACTIVE BLUEPRINT & SCHEMATIC
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          BANANA EXTRACTOR MACHINE
        </h2>
        <div className="mt-2 inline-block px-4 py-1 rounded-md bg-[#778D4D] text-white text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
          ALL PARTS NAME & SCHEMATIC
        </div>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mt-3">
          Click any numbered hotspot pin on the machine or select an item from the parts table to inspect individual components and their specifications.
        </p>
      </div>

      {/* Main Grid: Machine Visual + Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Machine View & Live Inspector (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Machine Diagram Card */}
          <div className="relative bg-white rounded-3xl border-2 border-gray-200/80 shadow-lg overflow-hidden p-4 sm:p-6 transition-all">
            
            {/* Top Bar inside diagram card */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-2">
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#778D4D] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#778D4D]"></span>
                </span>
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Live Interactive Model View
                </span>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                Part {activePart.no} of 8 Selected
              </span>
            </div>

            {/* Visual Container */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-gray-50 to-stone-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200/60 shadow-inner group">
              
              {/* Machine Image */}
              <div className="relative w-full h-full p-3 sm:p-6">
                <Image
                  src={MACHINE_PARTS.find(p => p.id === 1) ? "/machine/machine_full.jpg" : "/plant.png"}
                  alt="Banana Extractor Machine Schematic"
                  fill
                  className="object-contain drop-shadow-md select-none transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </div>

              {/* Hotspot Pins (1 to 8) */}
              {MACHINE_PARTS.map((part) => {
                const isActive = activePartId === part.id;
                const isHovered = hoveredPartId === part.id;
                return (
                  <button
                    key={part.id}
                    onClick={() => handleSelect(part)}
                    onMouseEnter={() => setHoveredPartId(part.id)}
                    onMouseLeave={() => setHoveredPartId(null)}
                    style={{ top: part.hotspot.top, left: part.hotspot.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#778D4D]/40 rounded-full
                      ${isActive ? "scale-125 z-30" : "hover:scale-115"}
                    `}
                    aria-label={`Select part ${part.no}: ${part.name}`}
                  >
                    {/* Pin Bubble */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-black text-xs sm:text-sm shadow-xl transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#778D4D] text-white ring-4 ring-white shadow-emerald-900/30"
                            : isHovered
                            ? "bg-[#343D33] text-white ring-2 ring-white"
                            : part.color === "Blue"
                            ? "bg-blue-600 text-white ring-2 ring-white/90"
                            : part.color === "White"
                            ? "bg-amber-400 text-gray-900 ring-2 ring-white font-black"
                            : "bg-gray-800 text-white ring-2 ring-white/90"
                        }
                      `}
                    >
                      {part.no}
                    </div>

                    {/* Desktop Floating Tag label */}
                    {(isActive || isHovered) && (
                      <div className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md bg-gray-900/90 backdrop-blur-md text-white text-[11px] font-semibold whitespace-nowrap shadow-xl border border-white/20 animate-fade-in pointer-events-none">
                        {part.no}. {part.name}
                      </div>
                    )}
                  </button>
                );
              })}

              {/* Helper prompt bottom overlay */}
              <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/60 text-[11px] text-gray-600 flex items-center justify-between pointer-events-none">
                <span>💡 Tip: Tap numbers 1–8 on diagram to inspect</span>
                <span className="font-semibold text-[#778D4D]">Active: {activePart.name}</span>
              </div>
            </div>

            {/* Quick Part Inspector Preview under image */}
            <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-stone-50 to-[#F4F7F0] border border-[#778D4D]/20 shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden p-1">
                <Image
                  src={activePart.img}
                  alt={activePart.name}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="flex flex-col flex-1 text-center sm:text-left gap-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#778D4D] text-white text-xs font-bold">
                    Part #{activePart.no}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${activePart.colorBadge}`}>
                    Color: {activePart.color}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {activePart.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-1">
                  {activePart.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {activePart.shortDesc}
                </p>

                <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
                  <a
                    href={`#part-card-${activePart.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#778D4D] hover:text-[#526333] hover:underline cursor-pointer"
                  >
                    View Complete Specs & Material <span>↓</span>
                  </a>
                  <Link
                    href={`/contact?inquiry=${encodeURIComponent(activePart.name)}`}
                    className="text-xs font-semibold px-3 py-1 bg-white border border-[#778D4D] text-[#778D4D] rounded-full hover:bg-[#778D4D] hover:text-white transition"
                  >
                    Inquire Spare Part
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Color Legend */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-gray-200 text-xs text-gray-600">
            <span className="font-bold text-gray-800">Color Index:</span>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-gray-500 border border-white shadow-sm"></span>
              <span>Gray (Mild Steel Body & Housing)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-gray-300 shadow-sm"></span>
              <span>White (Grip & Calibration)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-blue-600 border border-white shadow-sm"></span>
              <span>Blue (Electric Induction Motor)</span>
            </div>
          </div>

        </div>

        {/* Right Column: PARTS LIST Table + KEY FEATURES (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* PARTS LIST Table Card */}
          <div className="bg-white rounded-3xl border-2 border-gray-200/80 shadow-lg overflow-hidden flex flex-col">
            
            {/* Table Header Banner */}
            <div className="bg-gradient-to-r from-[#343D33] to-[#778D4D] p-4 text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base sm:text-lg tracking-wide uppercase">
                  PARTS LIST
                </h3>
                <p className="text-[11px] text-emerald-100">
                  Select a part below to view details
                </p>
              </div>
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold">
                8 Total Parts
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100/80 text-gray-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                    <th className="py-2.5 px-3 text-center w-12">NO.</th>
                    <th className="py-2.5 px-4">PART NAME</th>
                    <th className="py-2.5 px-3 text-center">COLOR</th>
                    <th className="py-2.5 px-3 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                  {MACHINE_PARTS.map((part) => {
                    const isSelected = activePartId === part.id;
                    return (
                      <tr
                        key={part.id}
                        onClick={() => handleSelect(part)}
                        className={`cursor-pointer transition-colors duration-150 group
                          ${isSelected ? "bg-[#F4F7F0] font-semibold text-gray-900 border-l-4 border-l-[#778D4D]" : "hover:bg-gray-50 text-gray-700"}
                        `}
                      >
                        <td className="py-2.5 px-3 text-center">
                          <span
                            className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold
                              ${isSelected ? "bg-[#778D4D] text-white" : "bg-gray-200 text-gray-700 group-hover:bg-gray-300"}
                            `}
                          >
                            {part.no}
                          </span>
                        </td>
                        <td className="py-2.5 px-4">
                          <div className="flex flex-col">
                            <span className="font-semibold group-hover:text-[#778D4D] transition-colors">
                              {part.name}
                            </span>
                            <span className="text-[11px] text-gray-400 font-normal">
                              {part.tag}
                            </span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${part.colorBadge}`}>
                            {part.color}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <span className="inline-flex items-center text-[#778D4D] group-hover:translate-x-1 transition-transform">
                            <HiChevronRight size={18} />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom quick CTA */}
            <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500 font-medium">All components in stock</span>
              <a
                href="#parts-catalog"
                className="font-bold text-[#778D4D] hover:underline"
              >
                Browse Full Catalog →
              </a>
            </div>

          </div>

          {/* KEY FEATURES Card */}
          <div className="bg-white rounded-3xl border-2 border-gray-200/80 shadow-lg p-5 flex flex-col gap-4">
            
            <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
              <HiOutlineShieldCheck className="text-2xl text-[#778D4D]" />
              <h3 className="font-bold text-gray-900 text-base sm:text-lg uppercase tracking-wide">
                KEY FEATURES
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {KEY_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50/80 hover:bg-[#F4F7F0] border border-gray-200/60 hover:border-[#778D4D]/40 transition-all duration-200"
                >
                  <span className="text-xl shrink-0 mt-0.5">{feature.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-gray-900">
                      {feature.title}
                    </span>
                    <span className="text-[11px] text-gray-500 leading-snug mt-0.5">
                      {feature.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
