import Image from "next/image";
import Link from "next/link";
export default function Products() {
  const productCards = [
    {
      id: 1,
      title: "Lamp Cover",
      desc: "Handmade lamp cover using sustainable banana fiber materials",
      img: "/lamp_cover.png",
    },
    {
      id: 2,
      title: "Disposible Plates",
      desc: "Eco-friendly, biodegradable plates made from natural banana fiber.",
      img: "/disposible_plates.png",
    },
    {
      id: 3,
      title: "Vegan Leather",
      desc: "Cruelty-free vegan leather made from banana fiber",
      img: "/vegan_leather.png",
    },
    {
      id: 4,
      title: "Wallet",
      desc: "Stylish wallet crafted from sustainable banana fiber",
      img: "/wallet.png",
    },
    {
      id: 5,
      title: "Loom Thread",
      desc: "Strong, natural loom thread spun from banana fiber",
      img: "/loom_thread.png",
    },
    {
      id: 6,
      title: "Mat",
      desc: "Durable eco-friendly mat made from woven banana fiber",
      img: "/mat.png",
    },
    {
      id: 7,
      title: "Hand Wallet",
      desc: "Compact, eco-conscious hand wallet with natural fiber finish",
      img: "/hand_wallet.png",
    },
  ];
  return (
    <div className="pb-15 flex flex-col items-center gap-20 px-20">
      <h1 className="text-4xl font-bold">
        Our <span className="text-[#778D4D]">Products</span>
      </h1>
      <div className="flex flex-wrap  gap-12 justify-center">
        {productCards.map((item) => (
          <div
            key={item.id}
            className=" w-80 bg-white border shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div className="relative h-55 w-full">
              <Image src={item.img} alt={item.title} fill />
            </div>

            <div className="py-5 px-3">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <Link
                href="/contact"
                className="flex items-center gap-2 cursor-pointer text-sm font-medium text-green-700 border border-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition"
              >
                Contact Us <span>→</span>
              </Link>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
