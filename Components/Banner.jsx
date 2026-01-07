import Image from "next/image";
import plant from "public/plant.png";
export default function Banner() {
  return (
    <div className="flex lg:flex-row  lg:items-center xl:lg:flex-row text-white items-center px-0 md:px-20 sm:px-10 lg:px-30">
      <div className="flex flex-col items-center w-2xl gap-9 lg:items-start">
        <h1 className=" lg:text-5xl  xl:text-7xl text-center lg:text-start text-4xl">
          Organic Fiber
        </h1>
        <h2 className="text-xl lg:text-2xl xl:text-3xl text-center lg:text-start">
          leading banana fiber extraction machines and products
        </h2>
        <p className="text-lg  lg:text-md text-center lg:text-start xl:text-lg">
          Since 2017, Organic Fiber has been at the forefront of banana fiber
          innovation. We are dedicated to manufacturing high-quality goods and
          extraction machines using the banana fiber promoting sustainable
          practices.
        </p>
        <button className=" text-lg px-10 py-3 rounded-xl bg-[#B5E8C1] text-black font-bold">
          Learn More
        </button>
      </div>
      <div>
        <Image
          src={plant}
          alt="Plant"
          className="hidden xl:h-120 w-120 lg:flex lg:h-100 
     "
        />
      </div>
    </div>
  );
}
