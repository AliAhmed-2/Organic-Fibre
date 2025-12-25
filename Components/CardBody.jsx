import Image from "next/image";
export default function CardsPage() {
  const cards = [
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
  ];
  return (
    <div className="py-15">
      <div className="flex flex-col items-center gap-12">
        <div>
          <h1 className="text-2xl text-center sm:text-3xl font-semibold">
            Natural Growth Solutions for{" "}
            <span className="text-[#778D4D]">Healthy Plants</span>{" "}
          </h1>
        </div>
        <div className="flex flex-wrap  gap-12 justify-center">
          {cards.map((item) => (
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

                <button className="flex items-center gap-2 text-sm font-medium text-green-700 border border-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition">
                  SHOP NOW
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
