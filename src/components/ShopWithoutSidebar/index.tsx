"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "../Common/ProductCard";
import { IconClose, IconGrid, IconList, IconSearch, IconWhatsApp } from "../Common/Icons";
import {
  DIVISIONS,
  catalogueHref,
  countIn,
  productHref,
  productImage,
  products,
  searchProducts,
  subGroups,
} from "@/lib/catalogue";
import { enquiryMessage, whatsappLink } from "@/constants/contact";

const groups = subGroups();

const ShopWithoutSidebar = () => {
  const params = useSearchParams();
  const router = useRouter();
  const category = params.get("category") || "";
  const sub = params.get("sub") || "";
  const q = params.get("q") || "";
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState<"catalogue" | "az">("catalogue");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [qInput, setQInput] = useState(q);
  useEffect(() => setQInput(q), [q]);

  const list = useMemo(() => {
    let l = q ? searchProducts(q) : products;
    if (category) l = l.filter((p) => p.category === category);
    if (sub) l = l.filter((p) => p.subCategory === sub);
    if (sort === "az") l = [...l].sort((a, b) => a.title.localeCompare(b.title));
    return l;
  }, [q, category, sub, sort]);

  const title = sub || category || (q ? `Results for “${q}”` : "All products");

  const submitQ = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(catalogueHref({ category, sub, q: qInput.trim() }));
  };

  const filters = (
    <nav aria-label="Product groups" className="space-y-6">
      <form onSubmit={submitQ} className="relative">
        <label htmlFor="cat-q" className="sr-only">Search within catalogue</label>
        <IconSearch size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-kg-muted" />
        <input
          id="cat-q"
          value={qInput}
          onChange={(e) => setQInput(e.target.value)}
          placeholder="Search within results"
          className="w-full h-10 pl-9 pr-3 rounded-md border border-kg-line bg-white text-[14px] outline-none focus:border-kg-blue"
        />
      </form>
      <Link
        href={catalogueHref({ q })}
        className={`block text-[15px] font-semibold ${!category ? "text-kg-blue" : "text-kg-ink hover:text-kg-blue"}`}
      >
        All products <span className="font-normal text-kg-muted kg-num">({products.length})</span>
      </Link>
      {DIVISIONS.map((d) => {
        const onDiv = category === d.name;
        return (
          <div key={d.slug}>
            <Link
              href={catalogueHref({ category: d.name, q })}
              className={`block kg-display font-bold text-[15px] leading-snug pb-2 mb-1 border-b border-kg-line ${
                onDiv && !sub ? "text-kg-blue" : "text-kg-ink hover:text-kg-blue"
              }`}
            >
              {d.name} <span className="font-normal text-kg-muted kg-num">({countIn(d.name)})</span>
            </Link>
            <ul>
              {groups
                .filter((g) => g.division === d.name)
                .map((g) => {
                  const on = onDiv && sub === g.name;
                  return (
                    <li key={g.name}>
                      <Link
                        href={catalogueHref({ category: d.name, sub: g.name, q })}
                        aria-current={on ? "page" : undefined}
                        className={`flex justify-between gap-2 py-1.5 pl-3 border-l-2 text-[14.5px] ${
                          on ? "border-kg-blue text-kg-blue font-medium" : "border-transparent text-kg-ink-2 hover:text-kg-blue"
                        }`}
                      >
                        {g.name}
                        <span className="text-kg-muted text-[13px] kg-num">{g.count}</span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </nav>
  );

  return (
    <main className="bg-kg-paper min-h-[70vh]">
      {/* Page head */}
      <div className="bg-white border-b border-kg-line">
        <div className="kg-wrap py-7 lg:py-9">
          <nav aria-label="Breadcrumb" className="text-[13.5px] text-kg-muted mb-2 flex flex-wrap gap-1.5">
            <Link href="/" className="hover:text-kg-blue">Home</Link>
            <span aria-hidden>/</span>
            <Link href={catalogueHref()} className="hover:text-kg-blue">Catalogue</Link>
            {category && (
              <>
                <span aria-hidden>/</span>
                <Link href={catalogueHref({ category })} className="hover:text-kg-blue">{category}</Link>
              </>
            )}
          </nav>
          <h1 className="kg-display font-extrabold text-[28px] sm:text-[36px] leading-tight text-kg-ink">{title}</h1>
          <p className="mt-1.5 text-[15px] text-kg-muted kg-num">
            {list.length} {list.length === 1 ? "product" : "products"}
            {sub && category ? ` in ${category}` : ""}
          </p>
        </div>
      </div>

      <div className="kg-wrap py-8 lg:py-10 grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-[200px]">{filters}</div>
        </aside>

        <section>
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <button
              onClick={() => setFiltersOpen(true)}
              className="lg:hidden h-10 px-4 rounded-md border border-kg-line bg-white text-[14px] font-medium text-kg-ink"
            >
              Product groups
            </button>
            {(category || sub || q) && (
              <div className="flex flex-wrap gap-2">
                {q && (
                  <Link href={catalogueHref({ category, sub })} className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-kg-ink text-white text-[13px]">
                    “{q}” <IconClose size={14} />
                  </Link>
                )}
                {category && (
                  <Link href={catalogueHref({ q })} className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-kg-ink text-white text-[13px]">
                    {sub || category} <IconClose size={14} />
                  </Link>
                )}
              </div>
            )}
            <div className="ml-auto flex items-center gap-2">
              <label htmlFor="sort" className="sr-only">Sort products</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as "catalogue" | "az")}
                className="h-10 rounded-md border border-kg-line bg-white px-3 text-[14px] text-kg-ink"
              >
                <option value="catalogue">Catalogue order</option>
                <option value="az">Name A to Z</option>
              </select>
              <div className="hidden sm:flex rounded-md border border-kg-line bg-white overflow-hidden" role="group" aria-label="Layout">
                <button
                  onClick={() => setView("grid")}
                  aria-pressed={view === "grid"}
                  aria-label="Grid view"
                  className={`w-10 h-10 flex items-center justify-center ${view === "grid" ? "bg-kg-ink text-white" : "text-kg-muted"}`}
                >
                  <IconGrid size={18} />
                </button>
                <button
                  onClick={() => setView("list")}
                  aria-pressed={view === "list"}
                  aria-label="List view"
                  className={`w-10 h-10 flex items-center justify-center ${view === "list" ? "bg-kg-ink text-white" : "text-kg-muted"}`}
                >
                  <IconList size={18} />
                </button>
              </div>
            </div>
          </div>

          {list.length === 0 ? (
            <div className="bg-white border border-kg-line rounded-lg p-8 sm:p-12 text-center">
              <h2 className="kg-display font-bold text-[22px] text-kg-ink">No catalogue match for this search</h2>
              <p className="mt-2 text-[15px] text-kg-muted max-w-[460px] mx-auto">
                We source many items that are not listed here. Send the part name, model number or a photo and we will check.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={whatsappLink(`Hi, I'm looking for: ${q || title}. Can you source it?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-kg-wa text-white font-medium hover:bg-kg-wa-dark"
                >
                  <IconWhatsApp size={18} /> Ask on WhatsApp
                </a>
                <Link href={catalogueHref()} className="inline-flex items-center h-11 px-5 rounded-md border border-kg-line bg-white font-medium text-kg-ink">
                  Clear filters
                </Link>
              </div>
            </div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
              {list.map((p, i) => (
                <ProductCard key={p.id} p={p} priority={i < 3} />
              ))}
            </div>
          ) : (
            <ul className="bg-white border border-kg-line rounded-lg divide-y divide-kg-line">
              {list.map((p) => (
                <li key={p.id} className="flex gap-4 sm:gap-6 p-4 sm:p-5">
                  <Link href={productHref(p)} className="relative w-24 h-24 sm:w-36 sm:h-28 shrink-0 bg-white border border-kg-line rounded">
                    <Image src={productImage(p)} alt={p.title} fill sizes="144px" className="object-contain p-2" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] text-kg-blue font-medium">{p.subCategory}</p>
                    <h3 className="text-[17px] font-semibold text-kg-ink leading-snug">
                      <Link href={productHref(p)} className="hover:text-kg-blue">{p.title}</Link>
                    </h3>
                    <p className="mt-1.5 text-[14.5px] text-kg-muted line-clamp-2">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Link href={productHref(p)} className="inline-flex items-center h-9 px-4 rounded-md border border-kg-line text-[14px] font-medium text-kg-ink hover:border-kg-ink">
                        Specifications
                      </Link>
                      <a
                        href={whatsappLink(enquiryMessage(p.title))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 h-9 px-4 rounded-md bg-kg-wa text-white text-[14px] font-medium hover:bg-kg-wa-dark"
                      >
                        <IconWhatsApp size={16} /> Enquire
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {/* Mobile filter sheet */}
      {filtersOpen && (
        <div className="lg:hidden fixed inset-0 z-[90]">
          <button className="absolute inset-0 bg-kg-ink/60" aria-label="Close product groups" onClick={() => setFiltersOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto bg-kg-paper rounded-t-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="kg-display font-bold text-[18px] text-kg-ink">Product groups</p>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close" className="p-2 -mr-2">
                <IconClose size={22} />
              </button>
            </div>
            <div onClick={(e) => (e.target as HTMLElement).closest("a") && setFiltersOpen(false)}>{filters}</div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ShopWithoutSidebar;
