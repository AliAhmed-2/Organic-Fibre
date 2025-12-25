// import { Search } from "@deemlol/next-icons";
// import { Download } from "@deemlol/next-icons";
// export default function NavBar() {
//   return (
//     <div className="flex gap-6 justify-between px-30 py-20 text-white">
//       <div>
//         <h1 className="text-xl font-bold">N.A.T.U.R.E</h1>
//       </div>
//       <div className="flex list-none gap-10 pl-20">
//         <li>Home</li>
//         <li>Plants</li>
//         <li>About</li>
//         <li>Contact</li>
//       </div>
//       <div className="flex gap-3">
//         <Search size={24} color="#ffffff" />
//         <Download size={24} color="#ffffff" />
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { Search, Download } from "@deemlol/next-icons";
import { HiMenu, HiX } from "react-icons/hi"; // For mobile menu icon

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="  text-white px-10 md:px-30 py-20 flex items-center justify-between relative">
      <div>
        <h1 className=" text-xl font-bold">N.A.T.U.R.E</h1>
      </div>

      <ul className="hidden md:flex gap-8 list-none">
        <li className="hover:text-green-300 cursor-pointer">Home</li>
        <li className="hover:text-green-300 cursor-pointer">Plants</li>
        <li className="hover:text-green-300 cursor-pointer">About</li>
        <li className="hover:text-green-300 cursor-pointer">Contact</li>
      </ul>

      <div className="hidden md:flex gap-4">
        <Search size={24} color="#ffffff" />
        <Download size={24} color="#ffffff" />
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      <div
        className={`pl-3 pb-10 fixed top-0 right-0 h-full w-100 bg-[#778D4D] shadow-lg transform transition-transform duration-300 ease-in-out z-50
  ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="md:hidden flex mt-10  ml-80">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
        <ul className="flex flex-col mt-10 gap-6 pl-6 text-xl">
          <li className="hover:text-green-300 cursor-pointer">Home</li>
          <li className="hover:text-green-300 cursor-pointer">Plants</li>
          <li className="hover:text-green-300 cursor-pointer">About</li>
          <li className="hover:text-green-300 cursor-pointer">Contact</li>
        </ul>
        <div className="flex gap-4 mt-10 pl-6">
          <Search size={24} color="#ffffff" />
          <Download size={24} color="#ffffff" />
        </div>
      </div>

      {/* Overlay
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}
    </nav>
  );
}
