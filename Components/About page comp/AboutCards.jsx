import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  HiOutlineLightBulb, 
  HiOutlineGlobeAlt, 
  HiOutlineLightningBolt, 
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiArrowRight 
} from "react-icons/hi";

export default function AboutCards() {
  const values = [
    {
      id: 1,
      title: "Zero-Waste Circularity",
      subtitle: "100% Stem Utilization",
      desc: "Every portion of the harvested banana stem is repurposed — high-tensile fiber for textiles and packaging, and nutrient-rich organic sap/pulp for natural vermicompost and liquid bio-fertilizers.",
      icon: <HiOutlineGlobeAlt className="text-3xl text-[#778D4D]" />,
    },
    {
      id: 2,
      title: "Indigenous Machine R&D",
      subtitle: "Affordable & Modular",
      desc: "We design robust, energy-efficient decortication machines engineered for harsh rural conditions, requiring low maintenance and featuring universally swappable spare parts.",
      icon: <HiOutlineLightningBolt className="text-3xl text-[#778D4D]" />,
    },
    {
      id: 3,
      title: "Farmer Economic Upliftment",
      subtitle: "Fair Value Addition",
      desc: "Converting agricultural post-harvest liability into secondary cash streams for smallholder farmers, creating sustainable micro-enterprises and artisan jobs for women in rural villages.",
      icon: <HiOutlineLightBulb className="text-3xl text-[#778D4D]" />,
    },
    {
      id: 4,
      title: "Chemical-Free Processing",
      subtitle: "Naturally Pure & Safe",
      desc: "Our mechanical extraction and eco-degumming process consumes zero hazardous chlorine or toxic synthetic binders, producing 100% biodegradable and compostable products.",
      icon: <HiOutlineShieldCheck className="text-3xl text-[#778D4D]" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Stem Collection",
      desc: "Harvesting discarded banana pseudo-stems from local agricultural plantations.",
    },
    {
      step: "02",
      title: "Mechanical Extraction",
      desc: "Processing stems through our BFE-3500 decorticator drum to separate long fibers cleanly.",
    },
    {
      step: "03",
      title: "Washing & Sun Drying",
      desc: "Rinsing in fresh water and air-drying under natural sunlight for optimum golden tensile strength.",
    },
    {
      step: "04",
      title: "Refining & Crafting",
      desc: "Converting refined fiber into spun yarn, handmade paper, biodegradable tableware, and vegan leather.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col gap-20">
      
      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border-2 border-gray-200/90 hover:border-[#778D4D] p-6 rounded-3xl gap-4 shadow-sm hover:shadow-xl transition-all duration-300 group justify-between"
          >
            <div className="flex flex-col gap-3">
              <div className="p-3 rounded-2xl bg-[#EBF3E4] w-fit group-hover:bg-[#778D4D] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <span className="text-[11px] font-bold text-[#778D4D] uppercase tracking-wider">
                {item.subtitle}
              </span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#778D4D] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Production Lifecycle / Process Timeline */}
      <div className="p-8 sm:p-12 rounded-3xl bg-stone-50 border-2 border-gray-200/80 flex flex-col gap-8">
        <div className="text-center flex flex-col items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#778D4D]">
            THE SUSTAINABILITY LIFECYCLE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            From Agricultural Waste to Premium Eco-Goods
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col gap-2 relative group hover:border-[#778D4D] transition-colors"
            >
              <span className="text-3xl font-black text-[#778D4D]/20 group-hover:text-[#778D4D] transition-colors">
                {step.step}
              </span>
              <h4 className="font-bold text-base text-gray-900">
                {step.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-[#343D33] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Partner With Us for a Greener Tomorrow</h3>
          <p className="text-xs sm:text-sm text-stone-300">
            Learn how our extraction technology and eco-products can integrate into your supply chain.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-7 py-3 rounded-full bg-[#778D4D] hover:bg-[#60743B] text-white font-bold text-sm shadow-md transition whitespace-nowrap"
        >
          Contact Our Team →
        </Link>
      </div>

    </div>
  );
}
