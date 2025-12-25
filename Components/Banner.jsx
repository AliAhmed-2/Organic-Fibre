import Image from "next/image";
import plant from "public/plant.png";
export default function Banner() {
  return (
    <div className="flex lg:flex-row  lg:items-center xl:lg:flex-row text-white items-center px-0 md:px-20 sm:px-10 lg:px-30">
      <div className="flex flex-col items-center w-2xl gap-9 lg:items-start">
        <h1 className=" lg:text-4xl  xl:text-6xl text-center lg:text-start text-2xl">
          Welcome to BotaniCheck Affordable Plant Disease Testing You Can Trust
        </h1>
        <p className="text-lg  lg:text-md text-center lg:text-start xl:text-lg">
          Your trusted partner in plant care! Whether you're nurturing a
          houseplant collection or managing a nursery, BotaniCheck helps you
          protect and grow your plants with precision diagnostics and
          science-backed growth solutions.
        </p>
        <button className=" text-lg px-10 py-3 rounded-xl bg-[#B5E8C1] text-black font-bold">
          Learn More
        </button>
      </div>
      <div>
        <Image
          src={plant}
          alt="Plant"
          className="hidden xl:h-120 w-150 lg:flex lg:h-100 w-100
     "
        />
      </div>
    </div>
  );
}
