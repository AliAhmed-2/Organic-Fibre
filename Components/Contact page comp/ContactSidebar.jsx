import React from "react";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineChatAlt2,
  HiOutlineShieldCheck,
} from "react-icons/hi";

export default function ContactSidebar() {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-b from-[#778D4D] to-[#456A00] text-white rounded-3xl w-full md:w-96 lg:w-[420px] p-8 sm:p-10 shadow-xl gap-10">
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#B5E8C1] text-xs font-bold w-fit">
          <HiOutlineChatAlt2 className="text-base" />
          DIRECT SUPPORT & SALES
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Let&apos;s Build Sustainable Solutions Together
        </h2>
        <p className="text-stone-100 text-xs sm:text-sm leading-relaxed">
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
            <span className="text-xs text-stone-300 font-medium">
              Direct Phone & WhatsApp
            </span>
            <span className="font-bold text-white mt-0.5">
              021-34510142 / +92 34823 20142
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
          <div className="p-2.5 rounded-xl bg-white/15 text-[#B5E8C1] mt-0.5">
            <HiOutlineMail size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-stone-300 font-medium">
              Sales & Engineering Support
            </span>
            <span className="font-bold text-white mt-0.5">
              <a href="mailto:contact@organicfiberhub.com">
                contact@organicfiberhub.com
              </a>
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
          <div className="p-2.5 rounded-xl bg-white/15 text-[#B5E8C1] mt-0.5">
            <HiOutlineLocationMarker size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-stone-300 font-medium">
              Manufacturing & Tech Center
            </span>
            <span className="font-bold text-white mt-0.5">
              Office No 143 Salman Tower Malir City Karachi, Pakistan
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
          <div className="p-2.5 rounded-xl bg-white/15 text-[#B5E8C1] mt-0.5">
            <HiOutlineClock size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-stone-300 font-medium">
              Business Operating Hours
            </span>
            <span className="font-bold text-white mt-0.5">
              Mon – Sat: 9:00 AM – 6:30 PM (EST)
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/20 flex items-center gap-2 text-xs text-stone-200">
        <HiOutlineShieldCheck className="text-lg text-[#B5E8C1]" />
        <span>100% Data Confidentiality & Rapid Response</span>
      </div>
    </div>
  );
}
