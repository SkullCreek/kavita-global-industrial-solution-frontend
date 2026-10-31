"use client";
import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { catalogueHref, productHref, productImage, searchProducts } from "@/lib/catalogue";
import { IconSearch } from "./Icons";

type Props = {
  size?: "md" | "lg";
  placeholder?: string;
  autoFocus?: boolean;
  onNavigate?: () => void;
};

const SearchBox = ({ size = "md", placeholder = "Search seals, slitter scorer, MCB…", autoFocus, onNavigate }: Props) => {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const router = useRouter();
  const wrap = useRef<HTMLDivElement>(null);
  const listId = useId();
  const results = q.trim().length >= 2 ? searchProducts(q, 6) : [];

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setQ("");
    onNavigate?.();
    router.push(href);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (active >= 0 && results[active]) return go(productHref(results[active]));
    if (q.trim()) go(catalogueHref({ q: q.trim() }));
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, -1));
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const lg = size === "lg";

  return (
    <div ref={wrap} className="relative w-full">
      <form onSubmit={submit} role="search">
        <label className="sr-only" htmlFor={`${listId}-input`}>
          Search the catalogue
        </label>
        <div
          className={`flex items-center bg-white border border-kg-line focus-within:border-kg-blue rounded-md ${
            lg ? "h-14 shadow-[0_10px_30px_rgba(15,27,45,0.25)]" : "h-11"
          }`}
        >
          <IconSearch className={`text-kg-muted shrink-0 ${lg ? "ml-4" : "ml-3"}`} size={lg ? 22 : 18} />
          <input
            id={`${listId}-input`}
            value={q}
            autoFocus={autoFocus}
            onChange={(e) => {
              setQ(e.target.value);
              setOpen(true);
              setActive(-1);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKey}
            placeholder={placeholder}
            autoComplete="off"
            role="combobox"
            aria-expanded={open && results.length > 0}
            aria-controls={listId}
            className={`flex-1 min-w-0 bg-transparent outline-none text-kg-ink placeholder:text-[#8a94a3] ${
              lg ? "px-3 text-[17px]" : "px-2.5 text-[15px]"
            }`}
            style={{ outline: "none" }}
          />
          <button
            type="submit"
            className={`shrink-0 bg-kg-blue text-white font-medium hover:bg-kg-blue-dark transition-colors rounded-r-md ${
              lg ? "h-14 px-6 text-[16px]" : "h-11 px-4 text-[14px]"
            } -mr-px`}
          >
            Search
          </button>
        </div>
      </form>

      {open && q.trim().length >= 2 && (
        <div
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-kg-line rounded-md shadow-[0_16px_40px_rgba(15,27,45,0.18)] z-[80] overflow-hidden text-left"
        >
          {results.length === 0 ? (
            <p className="px-4 py-4 text-[14px] text-kg-muted">
              Nothing matches “{q}”. Send us the part name or a photo on WhatsApp and we will source it.
            </p>
          ) : (
            <>
              <ul>
                {results.map((p, i) => (
                  <li key={p.id} role="option" aria-selected={i === active}>
                    <Link
                      href={productHref(p)}
                      onClick={() => go(productHref(p))}
                      className={`flex items-center gap-3 px-3 py-2.5 ${i === active ? "bg-kg-paper" : "hover:bg-kg-paper"}`}
                    >
                      <span className="w-11 h-11 shrink-0 bg-white border border-kg-line rounded flex items-center justify-center overflow-hidden">
                        <Image src={productImage(p)} alt="" width={44} height={44} className="object-contain w-full h-full" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[14px] font-medium text-kg-ink truncate">{p.title}</span>
                        <span className="block text-[12.5px] text-kg-muted truncate">
                          {p.subCategory} in {p.category}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => go(catalogueHref({ q: q.trim() }))}
                className="w-full text-left px-4 py-3 border-t border-kg-line text-[14px] font-medium text-kg-blue hover:bg-kg-paper"
              >
                See all results for “{q.trim()}”
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
