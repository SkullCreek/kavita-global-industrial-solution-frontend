"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DIVISIONS, catalogueHref, countIn, subGroups } from "@/lib/catalogue";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/constants/contact";
import SearchBox from "../Common/SearchBox";
import {
  IconChevronDown,
  IconClose,
  IconMail,
  IconMenu,
  IconPhone,
  IconSearch,
  IconWhatsApp,
} from "../Common/Icons";

const groups = subGroups();

const Header = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMegaOpen(false);
    setDrawer(false);
    setMobileSearch(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
  }, [drawer]);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setDrawer(false);
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const navLink = (href: string, label: string) => {
    const on = href === "/" ? pathname === "/" : pathname?.startsWith(href.split("?")[0]);
    return (
      <Link
        href={href}
        className={`relative h-12 flex items-center text-[15px] font-medium transition-colors ${
          on ? "text-kg-ink" : "text-kg-muted hover:text-kg-ink"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-[70] bg-white">
      {/* Utility bar */}
      <div className="bg-kg-ink text-[#c9d1dc] text-[13px]">
        <div className="kg-wrap flex items-center justify-between h-9">
          <p className="hidden sm:block truncate">Industrial trading and services from Vapi, Gujarat. Supplying plants across India and abroad.</p>
          <a href={`tel:${PHONE_TEL}`} className="sm:hidden flex items-center gap-1.5 kg-num">
            <IconPhone size={14} /> {PHONE_DISPLAY}
          </a>
          <span className="sm:hidden">Vapi, Gujarat</span>
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-1.5 hover:text-white">
              <IconPhone size={15} /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-white">
              <IconMail size={15} /> {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-kg-line">
        <div className="kg-wrap flex items-center gap-4 lg:gap-8 h-[72px]">
          <button
            className="lg:hidden -ml-1 p-2 text-kg-ink"
            onClick={() => setDrawer(true)}
            aria-label="Open menu"
          >
            <IconMenu size={24} />
          </button>

          <Link href="/" className="shrink-0" aria-label="Kavita Global Industrial Solution home">
            <Image
              src="/images/logo/kgis_logo.png"
              alt="Kavita Global Industrial Solution"
              width={1470}
              height={370}
              priority
              className="h-9 sm:h-11 w-auto"
            />
          </Link>

          <div className="hidden lg:block flex-1 max-w-[560px]">
            <SearchBox />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              className="lg:hidden p-2 text-kg-ink"
              onClick={() => setMobileSearch((s) => !s)}
              aria-label="Search the catalogue"
              aria-expanded={mobileSearch}
            >
              <IconSearch size={22} />
            </button>
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden xl:flex flex-col items-end leading-tight mr-3"
            >
              <span className="text-[12px] text-kg-muted">Call or WhatsApp</span>
              <span className="text-[15px] font-semibold text-kg-ink kg-num">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={whatsappLink("Hi, I'd like a quote for a product from your catalogue.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 h-11 px-5 rounded-md bg-kg-wa text-white font-medium text-[15px] hover:bg-kg-wa-dark transition-colors"
            >
              <IconWhatsApp size={18} /> Get a quote
            </a>
          </div>
        </div>
        {mobileSearch && (
          <div className="lg:hidden kg-wrap pb-3">
            <SearchBox autoFocus onNavigate={() => setMobileSearch(false)} />
          </div>
        )}
      </div>

      {/* Nav row */}
      <div className="hidden lg:block border-b border-kg-line bg-white relative" ref={megaRef} onMouseLeave={() => setMegaOpen(false)}>
        <div className="kg-wrap flex items-center gap-8">
          <button
            onClick={() => setMegaOpen((o) => !o)}
            onMouseEnter={() => setMegaOpen(true)}
            aria-expanded={megaOpen}
            className={`h-12 flex items-center gap-2 px-4 -ml-4 text-[15px] font-semibold transition-colors ${
              megaOpen ? "bg-kg-ink text-white" : "text-kg-ink hover:bg-kg-paper"
            }`}
          >
            <IconMenu size={18} /> All products
            <IconChevronDown size={16} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
          </button>
          {DIVISIONS.map((d) => (
            <div key={d.slug}>{navLink(catalogueHref({ category: d.name }), d.short)}</div>
          ))}
          <div>{navLink("/contact", "Contact")}</div>
          <p className="ml-auto text-[14px] text-kg-muted">
            No online payment. Send an enquiry and we reply with price and lead time.
          </p>
        </div>

        {megaOpen && (
          <div className="absolute left-0 right-0 top-full bg-white border-b border-kg-line shadow-[0_24px_40px_rgba(15,27,45,0.14)]">
            <div className="kg-wrap grid grid-cols-3 gap-10 py-8">
              {DIVISIONS.map((d) => (
                <div key={d.slug}>
                  <Link
                    href={catalogueHref({ category: d.name })}
                    className="group flex items-baseline justify-between border-b-2 border-kg-ink pb-2 mb-3"
                  >
                    <span className="kg-display text-[17px] font-bold text-kg-ink group-hover:text-kg-blue">{d.name}</span>
                    <span className="text-[13px] text-kg-muted kg-num">{countIn(d.name)}</span>
                  </Link>
                  <ul className="space-y-0.5">
                    {groups
                      .filter((g) => g.division === d.name)
                      .map((g) => (
                        <li key={g.name}>
                          <Link
                            href={catalogueHref({ category: d.name, sub: g.name })}
                            className="flex justify-between py-1.5 text-[15px] text-kg-ink-2 hover:text-kg-blue"
                          >
                            {g.name}
                            <span className="text-kg-muted text-[13px] kg-num">{g.count}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="kg-goldrule" />

      {/* Mobile drawer */}
      {drawer && (
        <div className="lg:hidden fixed inset-0 z-[90]">
          <button className="absolute inset-0 bg-kg-ink/60" aria-label="Close menu" onClick={() => setDrawer(false)} />
          <nav className="absolute left-0 top-0 bottom-0 w-[86%] max-w-[360px] bg-white overflow-y-auto flex flex-col">
            <div className="flex items-center justify-between px-4 h-16 border-b border-kg-line">
              <Image src="/images/logo/kgis_logo.png" alt="Kavita Global Industrial Solution" width={1470} height={370} className="h-8 w-auto" />
              <button onClick={() => setDrawer(false)} aria-label="Close menu" className="p-2 -mr-2">
                <IconClose size={24} />
              </button>
            </div>
            <div className="px-4 py-4 flex-1">
              <Link href="/" className="block py-2.5 text-[16px] font-medium text-kg-ink">Home</Link>
              <Link href={catalogueHref()} className="block py-2.5 text-[16px] font-medium text-kg-ink">All products</Link>
              {DIVISIONS.map((d) => (
                <details key={d.slug} className="border-t border-kg-line">
                  <summary className="py-3 text-[16px] font-medium text-kg-ink cursor-pointer flex justify-between items-center list-none">
                    {d.name}
                    <IconChevronDown size={18} className="text-kg-muted shrink-0 ml-2" />
                  </summary>
                  <ul className="pb-3 pl-3">
                    <li>
                      <Link href={catalogueHref({ category: d.name })} className="block py-1.5 text-[15px] text-kg-blue font-medium">
                        View all {countIn(d.name)}
                      </Link>
                    </li>
                    {groups
                      .filter((g) => g.division === d.name)
                      .map((g) => (
                        <li key={g.name}>
                          <Link href={catalogueHref({ category: d.name, sub: g.name })} className="block py-1.5 text-[15px] text-kg-ink-2">
                            {g.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </details>
              ))}
              <Link href="/contact" className="block py-3 border-t border-kg-line text-[16px] font-medium text-kg-ink">Contact</Link>
            </div>
            <div className="p-4 border-t border-kg-line space-y-2.5">
              <a
                href={whatsappLink("Hi, I'd like a quote for a product from your catalogue.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-12 rounded-md bg-kg-wa text-white font-medium"
              >
                <IconWhatsApp size={18} /> Get a quote on WhatsApp
              </a>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-2 h-12 rounded-md border border-kg-line text-kg-ink font-medium">
                <IconPhone size={18} /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
