"use client";
import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL, mailtoLink, whatsappLink } from "@/constants/contact";
import { IconMail, IconPhone, IconWhatsApp } from "../Common/Icons";

const EnquiryPanel = ({ title, model }: { title: string; model?: string }) => {
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");

  const name = model ? `${title} (${model})` : title;
  const lines = [
    `Hi, I'm interested in the ${name}.`,
    `Quantity: ${qty}`,
    note.trim() ? `Details: ${note.trim()}` : "",
    "Please share price, availability and delivery time.",
  ].filter(Boolean);
  const msg = lines.join("\n");

  return (
    <div className="rounded-lg border border-kg-line bg-kg-paper p-5 sm:p-6">
      <p className="kg-display font-bold text-[18px] text-kg-ink">Request a quote</p>
      <p className="mt-1 text-[14.5px] text-kg-muted">Price depends on configuration and quantity. Send your requirement and we reply with price and lead time.</p>

      <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 items-center">
        <label htmlFor="qty" className="text-[14px] font-medium text-kg-ink">Quantity</label>
        <div className="flex items-center w-[140px] h-11 rounded-md border border-kg-line bg-white">
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="w-11 h-full text-[20px] text-kg-ink hover:bg-kg-paper rounded-l-md">−</button>
          <input
            id="qty"
            inputMode="numeric"
            value={qty}
            onChange={(e) => setQty(Math.max(1, parseInt(e.target.value.replace(/\D/g, "")) || 1))}
            className="w-full h-full text-center text-[15px] font-medium outline-none kg-num bg-transparent"
          />
          <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity" className="w-11 h-full text-[20px] text-kg-ink hover:bg-kg-paper rounded-r-md">+</button>
        </div>
        <label htmlFor="note" className="text-[14px] font-medium text-kg-ink self-start pt-2.5">Details</label>
        <textarea
          id="note"
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Size, width, voltage, machine model…"
          className="w-full rounded-md border border-kg-line bg-white px-3 py-2.5 text-[14.5px] outline-none focus:border-kg-blue resize-y"
        />
      </div>

      <a
        href={whatsappLink(msg)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-center justify-center gap-2 h-12 rounded-md bg-kg-wa text-white font-semibold text-[16px] hover:bg-kg-wa-dark transition-colors"
      >
        <IconWhatsApp size={20} /> Send enquiry on WhatsApp
      </a>
      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
        <a href={mailtoLink(`Enquiry: ${name}`, `${msg}\n\nThanks.`)} className="flex items-center justify-center gap-2 h-11 rounded-md border border-kg-line bg-white text-[14.5px] font-medium text-kg-ink hover:border-kg-ink">
          <IconMail size={17} /> Email
        </a>
        <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-2 h-11 rounded-md border border-kg-line bg-white text-[14.5px] font-medium text-kg-ink hover:border-kg-ink kg-num">
          <IconPhone size={17} /> Call
        </a>
      </div>
      <p className="mt-3 text-center text-[13px] text-kg-muted kg-num">Or call {PHONE_DISPLAY}</p>
    </div>
  );
};

export default EnquiryPanel;
