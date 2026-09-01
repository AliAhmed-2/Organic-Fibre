import React from "react";
import Image from "next/image";
import Link from "next/link";
import plant from "public/plant.png";
import { HiArrowRight, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineCog } from "react-icons/hi";

export default function Banner() {
  const stats = [
    { num: "500+ Tons", label: "Stem Waste Diverted" },
    { num: "98% Purity", label: "Natural Fiber Yield" },
    { num: "100% Eco", label: "Biodegradable Goods" },
    { num: "150-200 kg/h", label: "Machine Processing" },
  ];

  return (
    <div className="text-white px-6 sm:px-12 lg:px-24 py-8 sm:py-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Text & CTA Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#B5E8C1] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B5E8C1] animate-ping"></span>
            REVOLUTIONIZING NATURAL AGRI-FIBERS
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-md">
            Next-Gen <span className="text-[#B5E8C1] underline decoration-[#778D4D] decoration-wavy decoration-2">Banana Fiber</span> Technology & Products
          </h1>

          {/* Subheading */}
          <p className="text-stone-100 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-normal drop-shadow-sm">
            Transforming agricultural banana stem waste into premium high-tensile natural fibers, state-of-the-art extraction machinery, and zero-plastic everyday eco-goods.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full">
            <Link
              href="/products"
              className="px-8 py-3.5 rounded-full bg-[#B5E8C1] hover:bg-white text-[#224429] hover:text-[#778D4D] font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              Explore Products Catalog
              <HiArrowRight className="text-lg" />
            </Link>

            <Link
              href="/machine-parts"
              className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-sm sm:text-base backdrop-blur-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <HiOutlineCog className="text-xl text-[#B5E8C1]" />
              Machine Blueprint
            </Link>
          </div>

          {/* Trust Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 w-full border-t border-white/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-black text-[#B5E8C1]">
                  {stat.num}
                </span>
                <span className="text-xs text-stone-200 font-medium mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Hero Graphic */}
        <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center">
          <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl transform scale-90"></div>
          <Image
            src={plant}
            alt="Banana Plant and Fiber"
            className="object-contain drop-shadow-2xl z-10 transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

      </div>
    </div>
  );
}
