import Image from "next/image";
import background from "public/background.jpg";
import NavBar from "../../Components/Nav";
import Banner from "../../Components/Banner";
import Body from "../../Components/Body";
import CardsPage from "../../Components/CardBody";
import NewsPage from "../../Components/News";

export default function Page() {
  return (
    <div>
      <div className="relative h-screen w-screen ">
        <Image
          src={background}
          alt="background"
          fill
          priority
          // className="object-cover"
        />

        <div className="relative z-10">
          <NavBar />
          <Banner />
        </div>
      </div>
      <Body />
      <CardsPage />
      <NewsPage />
    </div>
  );
}
