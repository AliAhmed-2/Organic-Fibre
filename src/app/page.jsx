import Image from "next/image";
import background from "public/background.jpg";
import NavBar from "../../Components/Nav";
import Banner from "../../Components/Banner";
import Body from "../../Components/Body";
import CardsPage from "../../Components/CardBody";
import NewsPage from "../../Components/News";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Responsive Background */}
      <div className="relative min-h-screen w-full flex flex-col justify-between pb-12 overflow-hidden bg-[#2D382B]">
        <Image
          src={background}
          alt="Banana Plantation & Sustainable Agriculture Background"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-overlay"
        />

        <div className="relative z-10 w-full flex flex-col justify-between flex-1">
          <NavBar variant="light" />
          <Banner />
        </div>
      </div>

      {/* Main Content Sections */}
      <Body />
      <CardsPage />
      <NewsPage />
    </main>
  );
}
