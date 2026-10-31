"use client";
import { useState } from "react";
import Link from "next/link";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL, mailtoLink, whatsappLink } from "@/constants/contact";
import { DIVISIONS } from "@/lib/catalogue";
import { IconMail, IconPhone, IconPin, IconWhatsApp } from "../Common/Icons";

const field =
  "w-full h-11 rounded-md border border-kg-line bg-white px-3 text-[15px] text-kg-ink outline-none focus:border-kg-blue";

const Contact = () => {
  const [error, setError] = useState("");

  const compose = (form: HTMLFormElement) => {
    const f = new FormData(form);
    const get = (k: string) => (f.get(k)?.toString() || "").trim();
    const name = get("name");
    const message = get("message");
    if (!name || !message) {
      setError("Add your name and what you need so we can reply with a quote.");
      return null;
    }
    setError("");
    const body = [
      `Name: ${name}`,
      get("company") ? `Company: ${get("company")}` : null,
      get("phone") ? `Phone: ${get("phone")}` : null,
      get("division") ? `Product group: ${get("division")}` : null,
      "",
      message,
    ]
      .filter((l): l is string => l !== null)
      .join("\n");
    return { subject: `Enquiry from ${name}${get("company") ? `, ${get("company")}` : ""}`, body };
  };

  const sendWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const out = compose(e.currentTarget.form!);
    if (out) window.open(whatsappLink(out.body), "_blank", "noopener");
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const out = compose(e.currentTarget);
    if (out) window.location.href = mailtoLink(out.subject, out.body);
  };

  return (
    <main className="bg-kg-paper">
      <div className="bg-kg-ink text-white">
        <div className="kg-wrap py-12 lg:py-16">
          <nav aria-label="Breadcrumb" className="text-[13.5px] text-[#9aa6b6] mb-3 flex gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden>/</span>
            <span>Contact</span>
          </nav>
          <h1 className="kg-display font-extrabold text-[32px] sm:text-[44px] leading-tight max-w-[760px]">
            Tell us what your plant needs
          </h1>
          <p className="mt-3 text-[17px] text-[#c3ccd8] max-w-[620px]">
            A machine, a spare for a running line, or a full electrical order. Send the details and we come back with
            price and lead time.
          </p>
        </div>
      </div>

      <div className="kg-wrap py-10 lg:py-16 grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start">
        <aside className="space-y-4">
          <a
            href={whatsappLink("Hi, I'd like to enquire about your products.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-lg bg-kg-wa text-white p-5 hover:bg-kg-wa-dark transition-colors"
          >
            <IconWhatsApp size={30} />
            <span>
              <span className="block font-semibold text-[17px]">WhatsApp</span>
              <span className="block text-white/85 kg-num">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <div className="rounded-lg bg-white border border-kg-line divide-y divide-kg-line">
            <a href={`tel:${PHONE_TEL}`} className="flex gap-4 p-5 hover:bg-kg-paper">
              <IconPhone size={22} className="text-kg-blue shrink-0" />
              <span>
                <span className="block text-[13.5px] text-kg-muted">Phone</span>
                <span className="block font-semibold text-kg-ink kg-num">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex gap-4 p-5 hover:bg-kg-paper">
              <IconMail size={22} className="text-kg-blue shrink-0" />
              <span className="min-w-0">
                <span className="block text-[13.5px] text-kg-muted">Email</span>
                <span className="block font-semibold text-kg-ink break-all">{EMAIL}</span>
              </span>
            </a>
            <div className="flex gap-4 p-5">
              <IconPin size={22} className="text-kg-blue shrink-0" />
              <span>
                <span className="block text-[13.5px] text-kg-muted">Office</span>
                <span className="block text-kg-ink leading-relaxed">{ADDRESS}</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[14px] font-medium text-kg-blue hover:underline"
                >
                  Open in Google Maps
                </a>
              </span>
            </div>
          </div>
        </aside>

        <form onSubmit={sendEmail} noValidate className="rounded-lg bg-white border border-kg-line p-5 sm:p-8">
          <h2 className="kg-display font-bold text-[22px] text-kg-ink">Enquiry form</h2>
          <p className="mt-1 text-[14.5px] text-kg-muted">Send it by WhatsApp or email. Nothing is stored on this website.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1.5 text-[14px] font-medium text-kg-ink">Your name</label>
              <input id="name" name="name" autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="company" className="block mb-1.5 text-[14px] font-medium text-kg-ink">Company <span className="font-normal text-kg-muted">(optional)</span></label>
              <input id="company" name="company" autoComplete="organization" className={field} />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1.5 text-[14px] font-medium text-kg-ink">Phone <span className="font-normal text-kg-muted">(optional)</span></label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
            </div>
            <div>
              <label htmlFor="division" className="block mb-1.5 text-[14px] font-medium text-kg-ink">Product group</label>
              <select id="division" name="division" className={field} defaultValue="">
                <option value="">Not sure / several</option>
                {DIVISIONS.map((d) => (
                  <option key={d.slug}>{d.name}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-1.5 text-[14px] font-medium text-kg-ink">What do you need?</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Product, model or part number, size, quantity, delivery location"
                className="w-full rounded-md border border-kg-line bg-white px-3 py-2.5 text-[15px] text-kg-ink outline-none focus:border-kg-blue resize-y"
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-4 text-[14px] text-kg-red">
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={sendWhatsApp}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-kg-wa text-white font-semibold hover:bg-kg-wa-dark transition-colors"
            >
              <IconWhatsApp size={19} /> Send on WhatsApp
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border border-kg-line text-kg-ink font-semibold hover:border-kg-ink"
            >
              <IconMail size={18} /> Send by email
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
