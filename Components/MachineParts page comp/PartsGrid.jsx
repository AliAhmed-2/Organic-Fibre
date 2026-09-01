"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MACHINE_PARTS } from "./partsData";
import { 
  HiSearch, 
  HiOutlineAdjustments, 
  HiOutlineClipboardList,
  HiOutlineCheck,
  HiOutlineExternalLink,
  HiX
} from "react-icons/hi";

export default function PartsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalPart, setActiveModalPart] = useState(null);

  const categories = [
    "All",
    "Exterior & Safety",
    "Feeding Mechanism",
    "Controls & Calibration",
    "Drive & Transmission",
    "Core Extraction Assembly",
    "Structural Chassis",
    "Power & Electrical",
    "Discharge & Separation",
  ];

  const filteredParts = MACHINE_PARTS.filter((part) => {
    const matchesCategory =
      selectedCategory === "All" || part.category === selectedCategory;
    const matchesSearch =
      part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.color.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="parts-catalog" className="py-16 px-4 sm:px-8 lg:px-16 bg-[#FAFAF8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-block px-4 py-1 rounded-md bg-[#778D4D] text-white text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
            INDIVIDUAL PARTS VIEW
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Detailed Parts Catalog & Specifications
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            Examine high-resolution views, material specifications, and engineering functions for all 8 standard components of the banana extractor machine.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search part name, material, color..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#778D4D] focus:ring-2 focus:ring-[#778D4D]/20 bg-gray-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <HiX size={16} />
              </button>
            )}
          </div>

          {/* Category Dropdown / Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-xs font-semibold text-gray-500 hidden xl:inline">Filter:</span>
            {["All", "Exterior & Safety", "Core Extraction Assembly", "Power & Electrical"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer
                  ${
                    selectedCategory === cat
                      ? "bg-[#778D4D] text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Individual Parts Grid (8 Cards) */}
        {filteredParts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200">
            <p className="text-gray-500 font-semibold">No parts match your search query &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="mt-3 text-xs font-bold text-[#778D4D] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredParts.map((item) => (
              <div
                key={item.id}
                id={`part-card-${item.id}`}
                className="bg-white border-2 border-gray-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#778D4D] transition-all duration-300 flex flex-col group"
              >
                {/* Card Title Banner in User's Diagram Header Style */}
                <div className="bg-gray-50/90 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-gray-800 tracking-wider uppercase group-hover:text-[#778D4D] transition-colors">
                    {item.no}. {item.name}
                  </h3>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${item.colorBadge}`}>
                    {item.color}
                  </span>
                </div>

                {/* High Resolution Product Image Container */}
                <div className="relative aspect-square w-full bg-stone-50/60 p-4 flex items-center justify-center overflow-hidden border-b border-gray-100">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm text-[10px] font-bold text-gray-600 shadow-sm border border-gray-200">
                    {item.category}
                  </span>
                </div>

                {/* Card Body Details */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.shortDesc}
                    </p>

                    {/* Key Spec Snippet */}
                    <div className="mt-2 p-2.5 rounded-xl bg-stone-50 border border-gray-100 text-[11px] flex flex-col gap-1 text-gray-700">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 font-medium">Material:</span>
                        <span className="font-semibold text-right truncate max-w-[150px]">{item.material}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 font-medium">Finish:</span>
                        <span className="font-semibold text-right truncate max-w-[150px]">{item.finish}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                    <button
                      onClick={() => setActiveModalPart(item)}
                      className="w-full py-2 px-3 rounded-xl bg-gray-50 hover:bg-stone-100 text-gray-700 text-xs font-bold border border-gray-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <HiOutlineClipboardList className="text-sm text-[#778D4D]" />
                      Full Specs & Details
                    </button>
                    
                    <Link
                      href={`/contact?inquiry=${encodeURIComponent(`Machine Part #${item.no}: ${item.name}`)}`}
                      className="w-full py-2 px-3 rounded-xl bg-[#778D4D] hover:bg-[#60743B] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-sm hover:shadow"
                    >
                      Inquire Part
                      <span>→</span>
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Detailed Modal for Part */}
      {activeModalPart && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 flex flex-col gap-6 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalPart(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
            >
              <HiX size={20} />
            </button>

            {/* Header */}
            <div className="flex items-start gap-4 pr-10">
              <div className="relative w-20 h-20 shrink-0 bg-stone-50 rounded-2xl border border-gray-200 p-2 overflow-hidden">
                <Image
                  src={activeModalPart.img}
                  alt={activeModalPart.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#778D4D] text-white text-xs font-bold">
                    Part #{activeModalPart.no}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${activeModalPart.colorBadge}`}>
                    Color: {activeModalPart.color}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                  {activeModalPart.name}
                </h3>
                <span className="text-xs font-medium text-gray-500">
                  {activeModalPart.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 rounded-2xl bg-[#F4F7F0] border border-[#778D4D]/20 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900 mb-1">Engineering Role & Purpose:</p>
              <p>{activeModalPart.fullDesc}</p>
            </div>

            {/* Specifications Matrix */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Technical Specifications & Tolerances
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(activeModalPart.specs).map(([key, val], idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-200 flex flex-col">
                    <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="text-xs font-bold text-gray-900 mt-0.5">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Material & Finish */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-stone-50 border border-gray-200">
                <span className="text-gray-400 font-medium block">Material Composition:</span>
                <span className="font-bold text-gray-900 mt-0.5 block">{activeModalPart.material}</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-gray-200">
                <span className="text-gray-400 font-medium block">Coating / Surface Treatment:</span>
                <span className="font-bold text-gray-900 mt-0.5 block">{activeModalPart.finish}</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setActiveModalPart(null)}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-100 transition"
              >
                Close
              </button>
              <Link
                href={`/contact?inquiry=${encodeURIComponent(`Machine Part #${activeModalPart.no}: ${activeModalPart.name}`)}`}
                className="px-6 py-2.5 rounded-xl bg-[#778D4D] hover:bg-[#60743B] text-white text-xs font-bold shadow-md hover:shadow-lg transition"
              >
                Request Quote For This Part →
              </Link>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
