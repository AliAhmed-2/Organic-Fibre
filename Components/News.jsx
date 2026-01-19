import { ArrowRight } from "@deemlol/next-icons";
import Image from "next/image";
import newsImage from "public/newsimage.png";
export default function NewsPage() {
  const updates = [
    {
      id: 1,
      title: "REQUIRES LOW (MECHANICAL) ENERGY",
      desc: "Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem ",
      img: "/mechanical.jpg",
      date: "December 16, 2021",
    },
    {
      id: 3,
      title: "REQUIRES NO CHEMICAL TO GROW AND PROCESS",
      desc: "Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem  ",
      img: "/chemical.png",
      date: "November 11, 2021",
    },
    {
      id: 2,
      title:
        "AS THE TREE IS GROWN LOCALLY, IT IS ALSO LOW IN TRANSPORTATION IMPACT",
      desc: "Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem ",
      img: "/tree.jpg",
      date: "November 3, 2021",
    },
  ];
  return (
    <div className="px-0 sm:px-40">
      <div className="flex flex-col items-center sm:items-start gap-2">
        <h1 className="text-4xl">News & Updates</h1>
        <div className="flex items-center gap-3">
          <div className="w-30 h-px bg-gray-600"></div>
          <p className="flex items-center gap-3 text-xs">
            VIEW ALL POSTS
            <ArrowRight size={24} color="black" />{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-10 pb-10 pt-10 items-center">
        <div className="flex flex-col items-center py-5">
          <div className=" relative sm:h-76 sm:w-120 h-40 w-85">
            <Image src={newsImage} alt="newsimage" fill />
          </div>
          <div className="flex flex-col items-center lg:items-start py-5 gap-4 w-120">
            <p className="text-2xl font-bold text-[#778D4D]">
              Plants Around Us
            </p>
            <p className="text-center w-xs sm:w-lg lg:text-start">
              Generally woven in small communities on electric-free looms,
              banana fiber is low impact and requires low (mechanical) energy
            </p>
          </div>
        </div>
        <div className="hidden sm:flex flex-col  w-xl">
          {updates.map((item) => (
            <div
              key={item.id}
              className="flex border-b pb-5 pt-5 items-center gap-4"
            >
              <div className="relative h-33 w-80">
                <Image src={item.img} alt="image" fill />
              </div>
              <div className="flex flex-col gap-4 pr-5">
                <p className="text-[#778D4D] font-bold text-lg">{item.title}</p>
                <p>{item.desc}</p>
                <p className="italic">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
