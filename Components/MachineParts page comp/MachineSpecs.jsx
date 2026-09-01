import React from "react";
import Link from "next/link";
import { MACHINE_TECHNICAL_SPECS } from "./partsData";
import { 
  HiOutlineDocumentText, 
  HiOutlineCheckCircle, 
  HiOutlineExclamation, 
  HiOutlineCog,
  HiOutlineSparkles 
} from "react-icons/hi";

export default function MachineSpecs() {
  const maintenanceTips = [
    {
      title: "Daily Pre-Operation Inspection",
      desc: "Ensure Main Cover clamps are locked securely and check that the feed chamber is free of foreign stones or metal debris.",
    },
    {
      title: "Stem Blade Clearance Tuning",
      desc: "Use the White Adjustment Knob (Part #3) to calibrate gap according to stem sheath thickness (0.5 mm - 1.2 mm for best fiber yield).",
    },
    {
      title: "Drum & Blade Cleaning",
      desc: "Wash the extractor drum with low-pressure water after each operational shift to remove sticky banana sap and pulp accumulation.",
    },
    {
      title: "Bearing Lubrication Interval",
      desc: "Apply high-grade lithium grease to the pillow block bearings and drive shaft every 100 continuous operational hours.",
    },
    {
      title: "V-Belt Tension Check",
      desc: "Inspect drive belt tension inside the Belt Guard (Part #4) monthly to maintain optimal motor torque transmission without slip.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center gap-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3E4] text-[#4E622B] text-xs font-bold tracking-wider uppercase border border-[#778D4D]/30">
          <HiOutlineDocumentText className="text-base text-[#778D4D]" />
          ENGINEERING DATA & SAFETY
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Technical Specifications & Operating Protocols
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
          Complete engineering parameters and recommended preventive maintenance routines for maximum longevity and fiber extraction efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Specifications Table (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-gray-200/80 shadow-lg overflow-hidden flex flex-col">
          
          <div className="bg-[#343D33] p-4 sm:p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/10">
                <HiOutlineSparkles className="text-xl text-[#B5E8C1]" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg">
                  Machine Technical Parameters
                </h3>
                <p className="text-xs text-stone-300">
                  Standard Industrial Model: BFE-3500 Pro
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 bg-[#778D4D] rounded-full text-xs font-bold">
              ISO Certified
            </span>
          </div>

          <div className="divide-y divide-gray-100 text-xs sm:text-sm">
            {MACHINE_TECHNICAL_SPECS.map((spec, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 px-4 sm:px-6 hover:bg-[#F4F7F0]/60 transition-colors"
              >
                <span className="font-semibold text-gray-700 sm:w-1/2">
                  {spec.label}
                </span>
                <span className="font-bold text-gray-900 sm:w-1/2 sm:text-right mt-1 sm:mt-0 text-[#343D33]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Maintenance Guidelines (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="bg-gradient-to-br from-stone-50 to-[#F4F7F0] rounded-3xl border-2 border-[#778D4D]/30 shadow-lg p-5 sm:p-6 flex flex-col gap-5">
            
            <div className="flex items-center gap-3 pb-3 border-b border-[#778D4D]/20">
              <div className="p-2 rounded-xl bg-[#778D4D] text-white">
                <HiOutlineCog className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  Maintenance & Safety Guide
                </h3>
                <p className="text-xs text-gray-600">
                  Guidelines for uninterrupted long-term production
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              {maintenanceTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-gray-200/80 shadow-xs"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#EBF3E4] text-[#4E622B] text-xs font-black shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-gray-900">
                      {tip.title}
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mt-0.5">
                      {tip.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
              <HiOutlineExclamation className="text-lg shrink-0 mt-0.5 text-amber-600" />
              <p>
                <strong>Safety Notice:</strong> Always disconnect the main electrical supply before opening the Main Cover (Part #1) or removing the Belt Guard (Part #4).
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
