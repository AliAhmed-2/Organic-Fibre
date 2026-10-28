import React from "react";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineChatAlt2,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "../contactInfo";

export default function ContactSidebar() {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-b from-[#2F5A3E] to-[#14291E] text-white rounded-3xl w-full md:w-96 lg:w-[420px] p-8 sm:p-10 shadow-xl gap-10">
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#B5E8C1] text-xs font-bold w-fit">
          <HiOutlineChatAlt2 className="text-base" />
          DIRECT SUPPORT & SALES
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Let&apos;s Build Sustainable Solutions Together
        </h2>
        <p className="text-stone-100 text-sm sm:text-base leading-relaxed">
          Have inquiries regarding banana extraction machinery, spare parts,
          bulk fiber supplies, or custom eco-products? Our technical engineering
          team is here to assist.
        </p>
      </div>

      <div className="flex flex-col gap-6 text-sm">
        <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
          <div className="p-2.5 rounded-xl bg-white/15 text-[#B5E8C1] mt-0.5">
            <HiOutlinePhone size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-stone-200 font-medium">
              Direct Phone & WhatsApp
            </span>
            <a href={CONTACT.mobile.href} className="notranslate font-bold text-white text-base mt-0.5 hover:underline">
              {CONTACT.mobile.display}
            </a>
            <a href={CONTACT.landline.href} className="notranslate font-bold text-white text-base hover:underline">
              {CONTACT.landline.display}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold text-sm transition-colors"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
          <div className="p-2.5 rounded-xl bg-white/15 text-[#B5E8C1] mt-0.5">
            <HiOutlineMail size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-stone-200 font-medium">
              Sales & Engineering Support
            </span>
            <span className="font-bold text-white mt-0.5 break-all">
              <a href={`mailto:${CONTACT.email}`} className="notranslate hover:underline">
                {CONTACT.email}
              </a>
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
          <div className="p-2.5 rounded-xl bg-white/15 text-[#B5E8C1] mt-0.5">
            <HiOutlineLocationMarker size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-stone-200 font-medium">
              Manufacturing & Tech Center
            </span>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white mt-0.5 hover:underline"
            >
              {CONTACT.address}
            </a>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#B5E8C1] font-semibold mt-1 hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
          <div className="p-2.5 rounded-xl bg-white/15 text-[#B5E8C1] mt-0.5">
            <HiOutlineClock size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-stone-200 font-medium">
              Business Operating Hours
            </span>
            <span className="font-bold text-white mt-0.5">
              Mon – Sat: 9:00 AM – 6:30 PM (Pakistan Time)
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/20 flex items-center gap-2 text-sm text-stone-200">
        <HiOutlineShieldCheck className="text-lg text-[#B5E8C1]" />
        <span>Your details are kept private</span>
      </div>
    </div>
  );
}
