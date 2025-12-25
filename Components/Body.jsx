import Image from "next/image";
import seating from "public/seating.jpg";
import plant2 from "public/plant2.jpg";
export default function Body() {
  return (
    <div className="bg-[#778D4D]">
      <div className="flex flex-col py-20 lg:ml-8  lg:px-40 gap-20">
        <div className="flex flex-col lg:flex-row items-center gap-20  text-white  ">
          <div>
            <Image src={plant2} alt="plant" className="h-60 w-full" />
          </div>
          <div className=" flex flex-col items-center  lg:items-start w-md lg:w-2xl sm:w-xl  gap-5 mr-0 lg:mr-20">
            <h1 className="text-2xl text-center lg:text-start sm:text-5xl">
              Discover yourself with nature
            </h1>
            <p className="text-base text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Tincidunt facilisis nunc
            </p>
            <button className="border-3 border-white px-8 py-2 hover:cursor-pointer hover:bg-white hover:text-[#778D4D]">
              Learn More
            </button>
          </div>
        </div>
        <Image src={seating} alt="seating area" className="hidden md:flex" />
      </div>
    </div>
  );
}
