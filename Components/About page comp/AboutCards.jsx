export default function AboutCards() {
  const aboutCards = [
    {
      id: 1,
      title: "Lorem Ipsum is simply",
      desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, fuga! Veniam, nihil commodi totam mollitia atque praesentium! Porro sunt quod quas architecto fugiat, sed, et eum perferendis eos nostrum facilis!",
      img: "/rocket.png",
    },
    {
      id: 2,
      title: "Lorem Ipsum is simply",
      desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, fuga! Veniam, nihil commodi totam mollitia atque praesentium! Porro sunt quod quas architecto fugiat, sed, et eum perferendis eos nostrum facilis!",
      img: "/bulb.png",
    },
    {
      id: 3,
      title: "Lorem Ipsum is simply",
      desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, fuga! Veniam, nihil commodi totam mollitia atque praesentium! Porro sunt quod quas architecto fugiat, sed, et eum perferendis eos nostrum facilis!",
      img: "/360.png",
    },
  ];
  return (
    <div className="flex flex-wrap  gap-12 justify-center">
      {aboutCards.map((item) => (
        <div
          key={item.id}
          className="flex flex-col border-2 border-[#778D4D] px-5 w-80 gap-10 py-5 rounded-2xl items-center cursor-pointer
                    transition-all duration-300
                     hover:-translate-y-2 hover:shadow-2xl
                      "
        >
          <img className="w-10 h-10" src={item.img} alt="" />
          <h1 className="text-lg font-bold">{item.title}</h1>
          <p className="text-center text-[#778D4D]">{item.desc}</p>
        </div>
      ))}{" "}
    </div>
  );
}
