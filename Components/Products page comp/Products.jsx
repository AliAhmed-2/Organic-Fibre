"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  HiSearch, 
  HiX, 
  HiOutlineSparkles, 
  HiOutlineClipboardList, 
  HiOutlineShieldCheck,
  HiOutlineShoppingBag,
  HiOutlineCheckCircle,
  HiArrowRight
} from "react-icons/hi";

export const PRODUCTS_CATALOG = [
  {
    id: 1,
    title: "Raw Banana Fiber Hank",
    category: "Raw Fiber & Pulp",
    tag: "High Tensile",
    material: "Pure Banana Pseudo-Stem Fiber",
    origin: "Mechanically Decorticated & Sun-Dried",
    desc: "Long, lustrous natural fiber strands extracted from mature banana stems. High tensile strength, lightweight, and ideal for textile spinning, rope making, and handicraft braiding.",
    fullDesc: "Our primary raw banana fiber is extracted mechanically to preserve fiber length and cellular integrity. Free from chemical bleaching or synthetic resins, it provides superior tensile strength and moisture absorption compared to standard natural bast fibers.",
    applications: ["Yarn & Loom Weaving", "Ropes & Twines", "Automotive Composites", "Artisan Crafts"],
    specs: {
      "Fiber Length": "60 cm – 110 cm",
      "Cellulose Content": "62% – 65%",
      "Tensile Strength": "520 – 600 MPa",
      "Moisture Regain": "10% – 12%",
    },
    img: "/banana_raw_fiber.jpg",
  },
  {
    id: 2,
    title: "Banana Cotton Pulp",
    category: "Raw Fiber & Pulp",
    tag: "Plant Cellulose",
    material: "Refined Degummed Banana Cellulose",
    origin: "Eco-Washed & Softened",
    desc: "Ultra-soft, biodegradable fluffy cellulose pulp suitable for eco-textile blending, non-woven hygiene items, medical absorbent pads, and specialty craft papers.",
    fullDesc: "Through advanced eco-refining and natural degumming, we convert rough banana fibers into cloud-like cotton pulp. Highly absorbent, hypoallergenic, and home compostable.",
    applications: ["Sanitary & Hygiene Non-Wovens", "Eco-Cotton Blends", "Specialty Paper Pulp", "Thermal Insulation"],
    specs: {
      "Purity": "High-Purity Cellulose",
      "Biodegradability": "Naturally Biodegradable",
      "Texture": "Ultra-soft staple fiber",
      "Absorbency Rate": "> 18x dry weight",
    },
    img: "/banana_cotton_pulp.jpg",
  },
  {
    id: 3,
    title: "Handmade Paper & File Folders",
    category: "Paper & Stationery",
    tag: "Zero Tree Wood",
    material: "Recycled Banana Stem Pulp & Cotton Rag",
    origin: "Handcrafted Deckle Edge & Calendered",
    desc: "Premium wood-free document folders, notebooks, and writing paper in natural and pastel finishes. Exceptionally durable, textured, and bleed-resistant.",
    fullDesc: "Crafted without cutting down a single tree. Banana fiber paper has long fiber strands that grant exceptional folding endurance and tearing resistance, making it perfect for executive stationery, legal document folders, and art prints.",
    applications: ["Office Document Folders", "Executive Notebooks", "Calligraphy & Art Sheets", "Eco Packaging"],
    specs: {
      "GSM Range": "120 GSM – 350 GSM",
      "Folding Endurance": "> 2,000 double folds",
      "Acid Content": "Acid-Free",
      "Finishes Available": "Deckle edge, Smooth calendered, Textured",
    },
    img: "/banana_paper_folders.jpg",
  },
  {
    id: 4,
    title: "Eco Kraft Carry Bags",
    category: "Paper & Stationery",
    tag: "Heavy Duty",
    material: "Banana Fiber Reinforced Kraft Sheet",
    origin: "Stitched & Twisted Rope Handle",
    desc: "Robust, stylish eco-friendly retail shopping bags with reinforced handles. plastic-free alternative for boutiques, events, and supermarkets.",
    fullDesc: "Designed with high-tensile banana fibers interwoven into natural kraft paper, providing superior load-bearing capacity and puncture resistance while remaining fully compostable.",
    applications: ["Retail Shopping Bags", "Corporate Event Gifting", "Boutique Packaging", "Food Takeaway Bags"],
    specs: {
      "Load Capacity": "Up to 8 - 12 kg",
      "Handle Type": "Twisted banana fiber string cord",
      "Printability": "Screen, flexo & offset compatible",
      "Water Resistance": "Bio-wax coated splash proofing",
    },
    img: "/banana_carry_bag.jpg",
  },
  {
    id: 5,
    title: "Molded Plates & Bowls",
    category: "Biodegradable Tableware",
    tag: "Compostable",
    material: "Hot-Pressed Molded Banana Pulp",
    origin: "Steam-Sterilized & Molded",
    desc: "Sturdy, microwave-safe, leak-proof disposable plates and round bowls. Compostable after use.",
    fullDesc: "A direct replacement for toxic single-use polystyrene and plastic thermocol dinnerware. Heat-tolerant up to 120°C and naturally oil/grease resistant without fluorochemicals (PFAS-free).",
    applications: ["Catering & Banquets", "Restaurants & Food Trucks", "Daily Household Dining", "Outdoor Picnics"],
    specs: {
      "Thermal Resistance": "-20°C to +120°C (Microwave & Freezer Safe)",
      "Compost Period": "45–60 days in natural soil",
      "Chemicals": "Zero plastic, zero PFAS, zero bleach",
      "Sizes": "6-inch bowls, 9-inch & 11-inch compartment plates",
    },
    img: "/disposible_plates.png",
  },
  {
    id: 6,
    title: "Vegan Leather Sheets & Goods",
    category: "Fashion & Accessories",
    tag: "Cruelty Free",
    material: "Polymerized Banana Fiber Matrix",
    origin: "Bio-Based Coated Finish",
    desc: "Supple, weather-resistant plant-based leather crafted from banana stem cellulose. Luxurious texture and durable performance for fashion accessories.",
    fullDesc: "Engineered as an ethical alternative to animal leather and petroleum PVC. Soft hand-feel, rich tactile grain, and high abrasion resistance for luxury fashion brands.",
    applications: ["Wallets & Handbags", "Shoe Uppers", "Automotive Upholstery", "Watch Straps"],
    specs: {
      "Thickness": "0.8 mm – 1.4 mm",
      "Tensile Strength": "Cross-grain reinforced matrix",
      "Finish": "Matte, Glossy & Embossed Grains",
      "Eco Footprint": "Plant-based alternative to animal leather",
    },
    img: "/vegan_leather.png",
  },
  {
    id: 7,
    title: "Eco Pocket Wallet",
    category: "Fashion & Accessories",
    tag: "Handcrafted",
    material: "Reinforced Banana Vegan Leather & Fiber Stitch",
    origin: "Artisan Sewn",
    desc: "Slim, stylish bifold wallet with card slots and cash compartments, crafted entirely from sustainable banana fiber composite.",
    fullDesc: "Combines minimalist modern design with exceptional everyday durability. Water-resistant, tear-proof, and designed to age gracefully with a natural patina.",
    applications: ["Personal Everyday Carry", "Eco-Corporate Gifting", "Sustainable Fashion Retail"],
    specs: {
      "Card Capacity": "6–8 cards + cash slot",
      "Dimensions": "11 cm x 8.5 cm (Closed)",
      "Weight": "Under 45 grams (Ultra-light)",
      "Stitching": "High-durability organic cotton thread",
    },
    img: "/wallet.png",
  },
  {
    id: 8,
    title: "Hand Clutch Wallet",
    category: "Fashion & Accessories",
    tag: "Artisan Made",
    material: "Hand-Woven Banana Fiber & Bio-Leather",
    origin: "Natural Organic Dye Finish",
    desc: "Elegant clutch purse with natural fiber weave accents and zippered coin compartment. A statement piece in ethical sustainable fashion.",
    fullDesc: "Each piece is hand-assembled by skilled rural artisans. Features organic cotton lining, antique brass hardware, and a durable water-resistant surface treatment.",
    applications: ["Evening & Casual Wear", "Artisan Fashion Boutiques", "Gifting"],
    specs: {
      "Compartments": "Dual main sections + zippered pouch",
      "Closure": "Magnetic snap & smooth zipper",
      "Dimensions": "20 cm x 10 cm x 3 cm",
    },
    img: "/hand_wallet.png",
  },
  {
    id: 9,
    title: "Loom Thread & Spun Yarn",
    category: "Raw Fiber & Pulp",
    tag: "Spinning Grade",
    material: "Machine-Spun Natural Banana Yarn",
    origin: "Uniform Count & Twist",
    desc: "High-strength, uniform yarn spun from fine-grade banana fibers. Ideal for handlooms, machine weaving, upholstery, and home textiles.",
    fullDesc: "Available in multiple yarn counts suitable for warp and weft applications. Delivers natural sheen, high breathability, and excellent dye absorption with organic plant dyes.",
    applications: ["Curtains & Drapes", "Carpet & Rug Weaving", "Denim & Apparel Blends", "Industrial Filtration Fabrics"],
    specs: {
      "Yarn Count Range": "6s to 24s Ne",
      "Twist (TPM)": "Balanced twist for minimal snarl",
      "Dyeability": "Excellent natural & reactive dye uptake",
      "Packaging": "Cones & Hanks (1 kg / 2 kg)",
    },
    img: "/loom_thread.png",
  },
  {
    id: 10,
    title: "Natural Woven Floor Mat",
    category: "Home & Living",
    tag: "Durable Weave",
    material: "Thick Spun Banana Fiber & Jute Warp",
    origin: "Handloom Braided",
    desc: "Heavy-duty, thermal-insulating natural floor mat. Naturally anti-static, dust-repellent, and adds an earthy warmth to modern interiors.",
    fullDesc: "Woven tightly with heavy banana fiber cords to withstand high foot traffic. Naturally cool in summer and insulating in winter, with non-slip backing.",
    applications: ["Living Rooms & Entryways", "Yoga & Meditation Spaces", "Eco-Resorts & Spas"],
    specs: {
      "Sizes Available": "2x3 ft, 3x5 ft, 4x6 ft",
      "Thickness": "8 mm – 12 mm",
      "Backing": "Natural latex anti-slip spray",
      "Care": "Easy shake-out & vacuum cleaning",
    },
    img: "/mat.png",
  },
  {
    id: 11,
    title: "Handmade Lamp Cover",
    category: "Home & Living",
    tag: "Ambient Glow",
    material: "Translucent Banana Fiber Mesh",
    origin: "Handcrafted Over Bamboo Frame",
    desc: "Artistic lampshade that diffuses warm, ambient illumination through delicate raw banana fiber textures and patterns.",
    fullDesc: "When lit from within, the intricate natural fiber network casts beautiful organic shadows, transforming living rooms and hospitality venues into cozy sanctuaries.",
    applications: ["Pendant Light Shades", "Bedside Table Lamps", "Eco-Hotel Decor", "Restaurant Lighting"],
    specs: {
      "Fitting": "Standard E27 / E26 collar",
      "Heat Tolerance": "Compatible with LED bulbs up to 25W",
      "Frame": "Treated natural bamboo ring structure",
    },
    img: "/lamp_cover.png",
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const categories = [
    "All",
    "Raw Fiber & Pulp",
    "Paper & Stationery",
    "Biodegradable Tableware",
    "Fashion & Accessories",
    "Home & Living",
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      const matchCat =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3E4] text-[#4E622B] text-xs font-bold tracking-wider uppercase border border-[#778D4D]/30">
          <HiOutlineSparkles className="text-base text-[#778D4D]" />
          CIRCULAR & SUSTAINABLE
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
          Our <span className="text-[#778D4D]">Products Catalog</span>
        </h1>
        
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl">
          Explore our complete collection of eco-friendly innovations manufactured from agricultural banana pseudo-stems — from raw spinning fiber and cotton pulp to consumer tableware and vegan leather goods.
        </p>

        {/* Quick Summary Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-gray-600">
          <span className="px-3 py-1 bg-stone-100 rounded-full">🌱 11 Products in Catalog</span>
          <span className="px-3 py-1 bg-stone-100 rounded-full">⚡ Zero Chemical Additives</span>
          <span className="px-3 py-1 bg-stone-100 rounded-full">📦 Worldwide Wholesale Available</span>
        </div>
      </div>

      {/* Controls: Search and Category Pills */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border-2 border-gray-200/80 shadow-sm mb-10">
        
        {/* Search Input */}
        <div className="relative w-full md:w-80 md:shrink-0">
          <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search products, material, specs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-none focus:border-[#778D4D] focus:ring-2 focus:ring-[#778D4D]/20 bg-gray-50/50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600"
            >
              <HiX size={16} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto md:flex-1 md:justify-end">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All"
                ? PRODUCTS_CATALOG.length
                : PRODUCTS_CATALOG.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5
                  ${
                    isSelected
                      ? "bg-[#778D4D] text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                <span>{cat}</span>
                <span className={`text-xs px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-gray-200 flex flex-col items-center gap-3">
          <p className="text-gray-600 font-semibold text-lg">No products found matching &ldquo;{searchQuery}&rdquo;.</p>
          <button
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
            className="px-5 py-2 rounded-full bg-[#778D4D] text-white text-xs font-bold shadow-sm"
          >
            Show All Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-gray-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#778D4D] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-square w-full bg-stone-50/70 p-4 flex items-center justify-center overflow-hidden border-b border-gray-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-extrabold text-[#778D4D] border border-gray-200 shadow-sm">
                    {item.tag}
                  </span>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#1B3326]/80 backdrop-blur-sm text-xs font-bold text-white shadow-xs">
                    {item.category.split(" ")[0]}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {item.category}
                  </span>
                  
                  <h3 className="font-extrabold text-lg text-gray-900 group-hover:text-[#778D4D] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>

                  <div className="mt-2 p-2.5 rounded-xl bg-stone-50 border border-gray-100 text-xs text-gray-700 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 font-medium">Composition:</span>
                      <span className="font-semibold text-right truncate max-w-[130px]">{item.material}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 pt-0 flex flex-col gap-2">
                <button
                  onClick={() => setActiveModalProduct(item)}
                  className="w-full py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-stone-100 text-gray-800 text-xs font-bold border border-gray-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <HiOutlineClipboardList className="text-sm text-[#778D4D]" />
                  Quick View & Specs
                </button>

                <Link
                  href={`/contact?inquiry=${encodeURIComponent(`Product Inquiry: ${item.title}`)}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#778D4D] hover:bg-[#60743B] text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
                >
                  <HiOutlineShoppingBag className="text-sm" />
                  Order / Inquire
                  <HiArrowRight className="text-xs" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Bottom Wholesale Banner */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#14291E] to-[#2F5A3E] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B5E8C1]">
            B2B WHOLESALE & CUSTOM ORDERS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">
            Looking for Bulk Raw Banana Fiber or OEM Manufacturing?
          </h2>
          <p className="text-stone-200 text-sm sm:text-base max-w-xl">
            We provide container-load shipments of raw fiber, refined degummed cotton pulp, molded tableware, and custom product development for industrial brands worldwide.
          </p>
        </div>

        <Link
          href="/contact?inquiry=B2B+Wholesale+Commercial+Supply"
          className="px-8 py-3.5 rounded-full bg-[#B5E8C1] hover:bg-white text-[#224429] hover:text-[#778D4D] font-extrabold text-sm whitespace-nowrap shadow-lg transition-all duration-200"
        >
          Request Bulk Quotation →
        </Link>
      </div>

      {/* Product Quick View Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 flex flex-col gap-6 relative">
            
            {/* Close */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition cursor-pointer"
            >
              <HiX size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 pr-10">
              <div className="relative w-24 h-24 shrink-0 bg-stone-50 rounded-2xl border border-gray-200 p-2 overflow-hidden">
                <Image
                  src={activeModalProduct.img}
                  alt={activeModalProduct.title}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#778D4D] text-white text-xs font-bold">
                    {activeModalProduct.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EBF3E4] text-[#4E622B] border border-[#778D4D]/30">
                    {activeModalProduct.tag}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                  {activeModalProduct.title}
                </h3>
                <span className="text-xs text-gray-500 font-medium mt-0.5">
                  Material: {activeModalProduct.material}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 rounded-2xl bg-[#F4F7F0] border border-[#778D4D]/20 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900 mb-1">Product Overview:</p>
              <p>{activeModalProduct.fullDesc}</p>
            </div>

            {/* Applications List */}
            {activeModalProduct.applications && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Key Applications & Use Cases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProduct.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-gray-100 text-gray-800 text-xs font-medium border border-gray-200"
                    >
                      ✓ {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Matrix */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Technical Specifications & Performance
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(activeModalProduct.specs).map(([key, val], idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-200 flex flex-col">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      {key}
                    </span>
                    <span className="text-xs font-bold text-gray-900 mt-0.5">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-100 transition cursor-pointer"
              >
                Close
              </button>
              <Link
                href={`/contact?inquiry=${encodeURIComponent(`Product Order / Inquiry: ${activeModalProduct.title}`)}`}
                className="px-6 py-2.5 rounded-xl bg-[#778D4D] hover:bg-[#60743B] text-white text-xs font-bold shadow-md hover:shadow-lg transition cursor-pointer"
              >
                Inquire This Product →
              </Link>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
