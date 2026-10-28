import React from "react";
import Image from "next/image";
import Link from "next/link";
import bananaFiberDrying from "public/banana_fiber_drying.jpg";
import bananaPlantation from "public/banana_plantation.jpg";
import { HiOutlineCog, HiOutlineSparkles, HiOutlineUserGroup, HiArrowRight } from "react-icons/hi";

export default function Body() {
  const pillars = [
    {
      icon: <HiOutlineCog className="text-2xl text-[#B5E8C1]" />,
      title: "Indigenous Machinery Engineering",
      desc: "Designing and manufacturing high-torque, energy-efficient banana fiber extractor machines with readily available modular spare parts.",
    },
    {
      icon: <HiOutlineSparkles className="text-2xl text-[#B5E8C1]" />,
      title: "Eco-Product Innovation",
      desc: "Crafting sustainable daily-use alternatives including biodegradable tableware, handmade stationery, vegan leather, and spun loom yarn.",
    },
    {
      icon: <HiOutlineUserGroup className="text-2xl text-[#B5E8C1]" />,
      title: "Rural Farmer Empowerment",
      desc: "Converting discarded post-harvest banana stems into profitable cash streams and generating green micro-enterprises in agricultural belts.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#778D4D] to-[#5A6E37] text-white py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top Split: Image + Overview Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Plant Image */}
          <div className="lg:col-span-5 relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
            <Image
              src={bananaFiberDrying}
              alt="Banana fiber drying on lines in a banana field"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/20 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
              🌱 Zero Waste • 100% Organic Cellulose Fiber
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#B5E8C1] text-xs font-bold tracking-widest uppercase border border-white/20">
              SUSTAINABLE CIRCULAR ENTERPRISE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              What We Do & Why It Matters
            </h2>

            <p className="text-stone-100 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Every year, millions of tons of banana stems are burned or discarded as agricultural waste. 
              At Organic Fiber, we develop the machinery to mechanically extract high-tensile natural fibers from these stems 
              and convert them into high-value commercial eco-products without harsh chemical processing.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/machine-parts"
                className="px-7 py-3 rounded-full bg-white hover:bg-stone-100 text-[#343D33] font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                Inspect Extraction Machinery
                <HiArrowRight />
              </Link>
              <Link
                href="/about"
                className="px-7 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold text-sm backdrop-blur-md transition-all duration-200"
              >
                Our Journey & Impact
              </Link>
            </div>
          </div>

        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all duration-300 flex flex-col gap-3 shadow-lg group"
            >
              <div className="p-3 rounded-2xl bg-white/10 w-fit group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="font-bold text-lg text-white">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Wide Seating / Workshop Visual */}
        <div className="relative w-full h-48 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
          <Image
            src={bananaPlantation}
            alt="Banana plantation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-6 text-center">
            <p className="text-white text-base sm:text-xl font-bold max-w-2xl drop-shadow-md">
              &ldquo;Connecting sustainable agricultural technology with mindful, earth-positive everyday living.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
