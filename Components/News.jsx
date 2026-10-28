import React from "react";
import Image from "next/image";
import Link from "next/link";
import newsImage from "public/handloom_weaver.jpg";
import { HiArrowRight, HiOutlineLightBulb, HiOutlineLocationMarker, HiOutlineUserGroup } from "react-icons/hi";

export default function NewsPage() {
  const benefits = [
    {
      id: 1,
      title: "Chemical-Free Mechanical Extraction",
      desc: "Banana fiber is scraped straight from the stem by a decorticator machine. Polyester, by contrast, is made from petroleum, and cotton relies heavily on fertilizers and pesticides.",
      img: "/machine/machine_full.jpg",
      fact: "No retting tanks or chemical baths needed",
      category: "Clean Process",
    },
    {
      id: 2,
      title: "Strong, Natural and Biodegradable",
      desc: "Banana fiber is about 60% cellulose, with strength comparable to jute and sisal. As a plant fiber it breaks down naturally, unlike synthetics that shed microplastics.",
      img: "/natural_fiber_strands.jpg",
      fact: "Used for yarn, rope, mats, paper and packaging",
      category: "Natural Material",
    },
    {
      id: 3,
      title: "No Extra Land or Water Needed",
      desc: "Cotton needs its own fields and irrigation. Banana fiber comes from stems already left over after the fruit harvest, and can ease Pakistan's reliance on imported cotton as local output falls.",
      img: "/banana_harvest.jpg",
      fact: "Less than 1% of Sindh's banana waste is turned into fiber today",
      category: "Circular Economy",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3E4] text-[#4E622B] text-xs font-bold tracking-wider uppercase border border-[#778D4D]/30 w-fit">
            <HiOutlineLightBulb className="text-base text-[#778D4D]" />
            WHY BANANA FIBER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Benefits of <span className="text-[#778D4D]">Banana Fiber</span>
          </h2>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#778D4D] hover:text-[#586c34] group cursor-pointer"
        >
          <span>EXPLORE OUR PRODUCTS</span>
          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Featured Big Card (5 cols) */}
        <div className="lg:col-span-5 bg-white border-2 border-gray-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#778D4D] transition-all duration-300 flex flex-col group">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
            <Image
              src={newsImage}
              alt="Artisan weaving on a handloom"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#778D4D] text-white text-xs font-bold shadow-md">
              Community Impact
            </span>
          </div>

          <div className="p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1">
                <HiOutlineLocationMarker className="text-sm text-[#778D4D]" />
                Sindh, Pakistan
              </span>
              <span className="flex items-center gap-1">
                <HiOutlineUserGroup className="text-sm text-[#778D4D]" />
                Rural Livelihoods
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#778D4D] transition-colors leading-snug">
              A Second Harvest for Rural Pakistan
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Pakistan grows bananas on about 39,000 hectares, around 96% of it in Sindh. Each plant fruits only once, so after harvest its stem is usually dumped or burned.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Turning those stems into fiber gives farming families a second product to sell from the same field, and creates local work in extraction, spinning, weaving and handicrafts, much of it open to rural women.
            </p>
          </div>
        </div>

        {/* 3 Smaller Benefits List (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {benefits.map((item) => (
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
                <span className="text-[11px] font-bold text-[#778D4D] uppercase tracking-wider">
                  {item.category}
                </span>

                <h4 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#778D4D] transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                <span className="text-[11px] text-gray-400 italic mt-1">
                  {item.fact}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
