import Image from "next/image";
import Link from "next/link";
export default function Products() {
  const productCards = [
    {
      id: 1,
      title: "Compost Tea with Yeast Extract",
      desc: "Boosts plant vitality with essential nutrients and immunity support",
      img: "/card1.png",
    },
    {
      id: 2,
      title: "Sterilized Compost with Growth-Promoting Microorganism",
      desc: "Encourages faster growth with carefully selected beneficial microbes.",
      img: "/card2.png",
    },
    {
      id: 3,
      title: "Autoclaved Compost",
      desc: "Improves soil structure and supports beneficial microbes",
      img: "/card3.png",
    },
    {
      id: 4,
      title: "Compost Tea with Yeast Extract",
      desc: "Boosts plant vitality with essential nutrients and immunity support",
      img: "/card1.png",
    },
    {
      id: 5,
      title: "Sterilized Compost with Growth-Promoting Microorganism",
      desc: "Encourages faster growth with carefully selected beneficial microbes.",
      img: "/card2.png",
    },
    {
      id: 6,
      title: "Autoclaved Compost",
      desc: "Improves soil structure and supports beneficial microbes",
      img: "/card3.png",
    },
    {
      id: 7,
      title: "Compost Tea with Yeast Extract",
      desc: "Boosts plant vitality with essential nutrients and immunity support",
      img: "/card1.png",
    },
    {
      id: 8,
      title: "Sterilized Compost with Growth-Promoting Microorganism",
      desc: "Encourages faster growth with carefully selected beneficial microbes.",
      img: "/card2.png",
    },
    {
      id: 9,
      title: "Autoclaved Compost",
      desc: "Improves soil structure and supports beneficial microbes",
      img: "/card3.png",
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
