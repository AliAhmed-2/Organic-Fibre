import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "./contactInfo";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-float fixed bottom-4 right-4 z-30 flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white pl-3.5 pr-4 py-3 shadow-xl transition-colors"
    >
      <FaWhatsapp size={26} />
      <span className="hidden sm:inline font-bold text-sm">Chat on WhatsApp</span>
    </a>
  );
}
