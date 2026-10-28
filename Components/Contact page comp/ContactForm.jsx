"use client";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { HiOutlineCheckCircle, HiOutlinePaperAirplane } from "react-icons/hi";

function FormContent() {
  const searchParams = useSearchParams();
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState("Machinery & Parts");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const inquiryParam = searchParams.get("inquiry");
    const subjectParam = searchParams.get("subject");
    if (inquiryParam) {
      setMessage(`Hello, I would like to request detailed information, pricing, and availability for: ${inquiryParam}.`);
    }
    if (subjectParam) {
      setSubject(subjectParam);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    // Standard Formspree submission or local preview
    setSubmitted(true);
  };

  return (
    <div className="flex-1 bg-white p-6 sm:p-10 rounded-3xl border-2 border-gray-200/90 shadow-lg">
      {submitted ? (
        <div className="flex flex-col items-center justify-center text-center py-16 gap-4 animate-fade-in">
          <div className="p-4 rounded-full bg-[#EBF3E4] text-[#778D4D]">
            <HiOutlineCheckCircle size={48} />
          </div>
          <h3 className="text-2xl font-black text-gray-900">Message Sent Successfully!</h3>
          <p className="text-gray-600 text-sm max-w-md">
            Thank you for reaching out to Organic Fiber. One of our technical engineers or sales specialists will contact you within 24 business hours.
          </p>
          <button
            onClick={() => { setSubmitted(false); setMessage(""); }}
            className="mt-4 px-6 py-2.5 rounded-full bg-[#778D4D] text-white text-xs font-bold shadow-md hover:bg-[#60743B] transition"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form
          ref={formRef}
          action="https://formspree.io/f/mwvvldly"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#778D4D]">
              ONLINE INQUIRY & QUOTE FORM
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Send Us a Message
            </h3>
            <p className="text-gray-500 text-sm sm:text-base mt-1">
              Fill in your details below and our team will provide technical datasheets, quotations, or sample kits.
            </p>
          </div>

          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700">First Name *</label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="e.g. Ahmed"
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#778D4D] focus:ring-2 focus:ring-[#778D4D]/20 bg-gray-50/50"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700">Last Name *</label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="e.g. Khan"
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#778D4D] focus:ring-2 focus:ring-[#778D4D]/20 bg-gray-50/50"
              />
            </div>
          </div>

          {/* Contact Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700">Work Email *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@company.com"
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#778D4D] focus:ring-2 focus:ring-[#778D4D]/20 bg-gray-50/50"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700">Phone / WhatsApp Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="e.g. 0300 1234567"
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#778D4D] focus:ring-2 focus:ring-[#778D4D]/20 bg-gray-50/50"
              />
            </div>
          </div>

          {/* Inquiry Category Select */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-700">Inquiry Subject / Topic *</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                "Machinery & Parts",
                "Bulk Raw Fiber",
                "Finished Eco-Goods",
                "B2B Partnership",
              ].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setSubject(item)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer
                    ${
                      subject === item
                        ? "bg-[#778D4D] text-white border-[#778D4D] shadow-sm"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
            <input type="hidden" name="subject" value={subject} />
          </div>

          {/* Message Area */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700">Your Message / Requirement *</label>
            <textarea
              name="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Provide details about your required machine specs, parts, fiber tonnage, or application..."
              className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#778D4D] focus:ring-2 focus:ring-[#778D4D]/20 bg-gray-50/50 resize-y"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-gray-500">
              * Required fields. We respect your privacy.
            </span>
            <button
              type="submit"
              className="px-8 py-3.5 rounded-full bg-[#778D4D] hover:bg-[#60743B] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Send Message</span>
              <HiOutlinePaperAirplane className="rotate-90 text-sm" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-500">Loading form...</div>}>
      <FormContent />
    </Suspense>
  );
}
