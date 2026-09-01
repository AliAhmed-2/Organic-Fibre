import AboutCards from "../../../Components/About page comp/AboutCards";
import AboutHeader from "../../../Components/About page comp/AboutHeader";
import NavBar from "../../../Components/Nav";

export const metadata = {
  title: "About Us | Organic Fiber - Mission & Circular Bio-Economy",
  description:
    "Learn about Organic Fiber's journey since 2017: transforming post-harvest agricultural banana pseudo-stems into sustainable natural fibers, extraction machines, and empowering rural farming communities.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar variant="dark" />

      <div className="flex flex-col gap-16 py-12">
        <AboutHeader />
        <AboutCards />
      </div>
    </main>
  );
}
