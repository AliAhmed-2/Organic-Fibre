import React from "react";
import Image from "next/image";
import Link from "next/link";
import newsImage from "public/newsimage.png";
import { HiArrowRight, HiOutlineCalendar, HiOutlineClock, HiOutlineNewspaper } from "react-icons/hi";

export default function NewsPage() {
  const updates = [
    {
      id: 1,
      title: "Low Mechanical Energy in Fiber Processing",
      desc: "How modern decorticator machines reduce electrical consumption by 40% while preserving fiber tensile integrity.",
      img: "/mechanical.jpg",
      date: "December 16, 2024",
      readTime: "3 min read",
      category: "Clean Tech",
    },
    {
      id: 2,
      title: "Zero Harmful Chemicals in Natural Extraction",
      desc: "Pure mechanical extraction preserves water ecosystems and creates 100% skin-safe organic fiber for home and apparel.",
      img: "/chemical.png",
      date: "November 11, 2024",
      readTime: "4 min read",
      category: "Sustainability",
    },
    {
      id: 3,
      title: "Hyper-Local Farming: Slashing Transportation Footprint",
      desc: "Processing stems directly at farming cooperatives eliminates long-distance transit emissions and boosts farmer revenue.",
      img: "/tree.jpg",
      date: "November 03, 2024",
      readTime: "5 min read",
      category: "Circular Economy",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3E4] text-[#4E622B] text-xs font-bold tracking-wider uppercase border border-[#778D4D]/30 w-fit">
            <HiOutlineNewspaper className="text-base text-[#778D4D]" />
            INSIGHTS & INNOVATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            News & Industry <span className="text-[#778D4D]">Updates</span>
          </h2>
        </div>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#778D4D] hover:text-[#586c34] group cursor-pointer"
        >
          <span>READ SUSTAINABILITY REPORT</span>
          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Featured Big Article (5 cols) */}
        <div className="lg:col-span-5 bg-white border-2 border-gray-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#778D4D] transition-all duration-300 flex flex-col group">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
            <Image
              src={newsImage}
              alt="Community Fiber Processing"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#778D4D] text-white text-xs font-bold shadow-md">
              Featured Story
            </span>
          </div>

          <div className="p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1">
                <HiOutlineCalendar className="text-sm text-[#778D4D]" />
                January 2025
              </span>
              <span className="flex items-center gap-1">
                <HiOutlineClock className="text-sm text-[#778D4D]" />
                5 min read
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#778D4D] transition-colors leading-snug">
              Plants Around Us: Empowering Rural Artisan Weavers on Clean Looms
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Generally woven in small agricultural communities on electricity-free handlooms, banana fiber creates sustainable livelihoods with minimal ecological impact.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#778D4D] hover:underline"
              >
                Read full article <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Smaller Updates List (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {updates.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#778D4D] hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group"
            >
              <div className="relative w-full sm:w-44 h-36 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-stone-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 gap-1.5 w-full">
                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <span className="font-bold text-[#778D4D] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span>{item.readTime}</span>
                </div>

                <h4 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#778D4D] transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>

                <span className="text-[11px] text-gray-400 italic mt-1">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
