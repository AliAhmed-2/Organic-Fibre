import AboutCards from "../../../Components/About page comp/AboutCards";
import AboutHeader from "../../../Components/About page comp/AboutHeader";
import NavBar from "../../../Components/Nav";

export default function AboutPage() {
  return (
    <div>
      <NavBar variant="dark" />

      <div className="flex flex-col gap-20 pb-15 ">
        <AboutHeader />
        <AboutCards />
      </div>
    </div>
  );
}
