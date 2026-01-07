"use client";
import { useRef } from "react";
import TextField from "@mui/material/TextField";

export default function ContactForm() {
  const formRef = useRef(null);

  const handleSubmit = () => {
    setTimeout(() => {
      formRef.current?.reset();
    }, 100);
  };

  return (
    <form
      ref={formRef}
      action="https://formspree.io/f/xzdzpbqr"
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-20"
    >
      <div className="flex gap-10">
        <TextField
          name="firstName"
          className="w-80 md:w-40 lg:w-80"
          label="Name"
          variant="standard"
          required
        />
        <TextField
          name="lastName"
          className="w-80 md:w-40 lg:w-80"
          label="Last Name"
          variant="standard"
          required
        />
      </div>

      <div className="flex gap-10">
        <TextField
          name="email"
          type="email"
          className="w-80 md:w-40 lg:w-80"
          label="Email"
          variant="standard"
          required
        />
        <TextField
          name="phone"
          type="number"
          className="w-80 md:w-40 lg:w-80"
          label="Phone Number"
          variant="standard"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-md font-bold">Subject Select?</h2>

        <div className="flex flex-col lg:flex-row gap-5">
          {["General Inquiry", "Support", "Business", "Other"].map((item) => (
            <label key={item} className="flex items-center gap-1">
              <input type="checkbox" name="subject" value={item} />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-end gap-7">
        <TextField
          name="message"
          className="w-full"
          label="Send your message"
          variant="standard"
          multiline
          rows={4}
          required
        />

        <button
          type="submit"
          className="bg-[#456A00] text-white cursor-pointer px-10 py-3 rounded-lg border-0"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
