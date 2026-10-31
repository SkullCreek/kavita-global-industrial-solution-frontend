import Image from "next/image";
import Link from "next/link";
import { DIVISIONS, catalogueHref, subGroups } from "@/lib/catalogue";
import { ADDRESS, COMPANY_NAME, EMAIL, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/constants/contact";
import { IconMail, IconPhone, IconPin, IconWhatsApp } from "../Common/Icons";

const groups = subGroups();

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A1422] text-[#b3bdca]">
      <div className="kg-goldrule" />
      <div className="kg-wrap pt-14 pb-10 grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="inline-block bg-white rounded-md px-3 py-2">
            <Image src="/images/logo/kgis_logo.png" alt={COMPANY_NAME} width={1470} height={370} className="h-10 w-auto" />
          </div>
          <p className="mt-5 text-[15px] leading-relaxed max-w-[340px]">
            Industrial trading and services. Machinery, seals, spares and electrical supplies for manufacturing plants
            in India and for export.
          </p>
          <ul className="mt-6 space-y-3 text-[15px]">
            <li className="flex gap-3">
              <IconPin size={19} className="shrink-0 mt-0.5 text-kg-gold" />
              <span>{ADDRESS}</span>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex gap-3 hover:text-white kg-num">
                <IconPhone size={19} className="shrink-0 text-kg-gold" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex gap-3 hover:text-white break-all">
                <IconMail size={19} className="shrink-0 text-kg-gold" /> {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        {DIVISIONS.map((d) => (
          <div key={d.slug}>
            <h2 className="kg-display font-bold text-white text-[16px] leading-snug mb-4">
              <Link href={catalogueHref({ category: d.name })} className="hover:text-kg-gold">{d.name}</Link>
            </h2>
            <ul className="space-y-2 text-[14.5px]">
              {groups
                .filter((g) => g.division === d.name)
                .slice(0, 8)
                .map((g) => (
                  <li key={g.name}>
                    <Link href={catalogueHref({ category: d.name, sub: g.name })} className="hover:text-white">
                      {g.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="kg-wrap py-6 flex flex-col md:flex-row md:items-center gap-4 justify-between text-[14px]">
          <p>© {year} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href={catalogueHref()} className="hover:text-white">Catalogue</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <a
              href={whatsappLink("Hi, I'd like to enquire about your products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-kg-gold"
            >
              <IconWhatsApp size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
