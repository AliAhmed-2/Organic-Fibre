import { Twitter } from "@deemlol/next-icons";
import { Linkedin } from "@deemlol/next-icons";
import { Facebook } from "@deemlol/next-icons";
import { Google } from "@deemlol/next-icons";
export default function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-around justify-center items-center gap-10 p-10 text-white bg-[#778D4D]">
        <div className="flex flex-col items-center gap-3 w-80">
          <h1 className="text-lg">N.A.T.U.R.E</h1>
          <p className="text-center sm:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div className=" hidden sm:flex items-center flex-col gap-3">
          <h2>Sitemap</h2>
          <div className="list-none">
            <li>Home</li>
            <li>Visit</li>
            <li>Exhibitions</li>
            <li>Programs & Events</li>
            <li>Store</li>
            <li>Membership</li>
          </div>
        </div>
        <div className="flex items-center flex-col gap-3">
          <h2>Connect</h2>
          <div className="flex items-center gap-5">
            <Twitter size={24} color="#FFFFFF" />
            <Facebook size={24} color="#FFFFFF" />
            <Linkedin size={24} color="#FFFFFF" />
            <Google size={24} color="#FFFFFF" />
          </div>
        </div>
      </div>
      <div className="bg-[#343D33] text-white p-5 flex justify-center">
        <h1>© 2025 Nature. All rights reserved.</h1>
      </div>
    </div>
  );
}
