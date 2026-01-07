import { Phone } from "@deemlol/next-icons";
import { Mail } from "@deemlol/next-icons";
import { Send } from "@deemlol/next-icons";
export default function ContactSidebar() {
  return (
    <div className="flex flex-col bg-[#456A00] text-white gap-20 rounded-xl w-full md:w-115 pl-8 pt-10 h-130">
      <div>
        <h1 className="text-3xl">Contact Information</h1>
        <p className="text-gray-300">Say something to start a live chat!</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-3">
          <Phone size={24} color="#FFFFFF" />
          <p>+1012 3456 789</p>
        </div>
        <div className="flex gap-3">
          <Mail size={24} color="#FFFFFF" />
          <p>demo@gmail.com</p>
        </div>
        <div className="flex gap-3">
          <Send size={24} color="#FFFFFF" />
          <p>132 Dartmouth Street Boston, </p>
        </div>
      </div>
    </div>
  );
}
