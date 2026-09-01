import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineSparkles, HiArrowRight, HiOutlineShoppingBag } from "react-icons/hi";

export default function CardsPage() {
  const featuredCards = [
    {
      id: 1,
      title: "Raw Banana Fiber Hank",
      category: "Natural Raw Fiber",
      tag: "Top Grade",
      desc: "High-tensile, lustrous natural fiber spun directly from pseudo-stems for spinning yarn and handicraft weaving.",
      img: "/banana_raw_fiber.jpg",
    },
    {
      id: 2,
      title: "Banana Cotton Pulp",
      category: "Cellulose & Pulp",
      tag: "100% Pure",
      desc: "Soft, bleached biodegradable cellulose cotton pulp ideal for non-wovens, eco-textiles, and medical hygiene.",
      img: "/banana_cotton_pulp.jpg",
    },
    {
      id: 3,
      title: "Handmade Paper & Folders",
      category: "Eco Stationery",
      tag: "Recycled",
      desc: "Tree-free, durable office document folders and handmade stationery crafted from banana fiber pulp.",
      img: "/banana_paper_folders.jpg",
    },
    {
      id: 4,
      title: "Molded Bio Plates & Bowls",
      category: "Biodegradable Dining",
      tag: "Compostable",
      desc: "Sturdy, heat-resistant disposable plates and bowls offering an eco-positive alternative to single-use plastics.",
      img: "/disposible_plates.png",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 bg-stone-50/60">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3E4] text-[#4E622B] text-xs font-bold tracking-wider uppercase border border-[#778D4D]/30">
            <HiOutlineSparkles className="text-base text-[#778D4D]" />
            FEATURED ECO INNOVATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Sustainable Goods Made from <span className="text-[#778D4D]">Banana Fiber</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            From industrial spinning fibers to finished consumer goods, discover our diverse range of zero-waste agricultural innovations.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {featuredCards.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-gray-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#778D4D] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Box */}
                <div className="relative aspect-square w-full bg-stone-100/50 p-4 flex items-center justify-center overflow-hidden border-b border-gray-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-extrabold text-[#778D4D] border border-gray-200 shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#778D4D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 pt-0">
                <Link
                  href={`/products?category=${encodeURIComponent(item.category)}`}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#778D4D] text-[#778D4D] group-hover:bg-[#778D4D] group-hover:text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <HiOutlineShoppingBag className="text-sm" />
                  View in Catalog
                  <HiArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#778D4D] hover:bg-[#60743B] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
        >
          View All 11+ Products
          <HiArrowRight />
        </Link>

      </div>
    </section>
  );
}
