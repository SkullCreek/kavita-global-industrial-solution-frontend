import shopData from "@/components/Shop/shopData";
import { Product } from "@/types/product";

export type Division = {
  name: string;
  slug: string;
  short: string;
  blurb: string;
  image: string;
};

export const DIVISIONS: Division[] = [
  {
    name: "Packaging & Corrugation Machinery",
    slug: "corrugation",
    short: "Corrugation",
    blurb:
      "Complete corrugated board lines, converting machines and the wear parts that keep them running.",
    image: "/images/site/corrugation.webp",
  },
  {
    name: "Sealing & Fluid Handling",
    slug: "sealing",
    short: "Sealing & fluid",
    blurb:
      "Mechanical seals, rotary joints, pump spares and PTFE, rubber and silicone parts.",
    image: "/images/site/seals.webp",
  },
  {
    name: "Electrical & Power Systems",
    slug: "electrical",
    short: "Electrical & power",
    blurb:
      "Switchgear, cables, LED lighting, UPS and power backup for plants and buildings.",
    image: "/images/site/electrical.webp",
  },
];

export const products: Product[] = shopData;

export const getProduct = (id: number) => products.find((p) => p.id === id);

export const productHref = (p: Pick<Product, "id">) => `/products/${p.id}`;

export const catalogueHref = (opts: { category?: string; sub?: string; q?: string } = {}) => {
  const params = new URLSearchParams();
  if (opts.category) params.set("category", opts.category);
  if (opts.sub) params.set("sub", opts.sub);
  if (opts.q) params.set("q", opts.q);
  const qs = params.toString();
  return `/shop-without-sidebar${qs ? `?${qs}` : ""}`;
};

export const productImage = (p: Product) =>
  p.imgs?.previews?.[0] || p.imgs?.thumbnails?.[0] || "/images/logo/kgis_logo.png";

export const imageCount = (p: Product) => p.imgs?.previews?.length || 0;

export type SubGroup = {
  name: string;
  division: string;
  count: number;
  image: string;
};

/** Subcategories in catalogue order, grouped under their division. */
export const subGroups = (): SubGroup[] => {
  const map = new Map<string, SubGroup>();
  for (const p of products) {
    if (!p.subCategory || !p.category) continue;
    const key = `${p.category}::${p.subCategory}`;
    const existing = map.get(key);
    if (existing) existing.count += 1;
    else
      map.set(key, {
        name: p.subCategory,
        division: p.category,
        count: 1,
        image: productImage(p),
      });
  }
  return Array.from(map.values());
};

export const countIn = (division: string) =>
  products.filter((p) => p.category === division).length;

/** Lowercased haystack used by the search box and catalogue filter. */
export const searchText = (p: Product) =>
  [p.title, p.category, p.subCategory, p.description, ...(p.specifications || []).map((s) => `${s.label} ${s.value}`)]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

export const searchProducts = (q: string, limit?: number) => {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  const scored = products
    .map((p) => {
      const hay = searchText(p);
      if (!terms.every((t) => hay.includes(t))) return null;
      const title = p.title.toLowerCase();
      const score = terms.reduce((s, t) => s + (title.includes(t) ? 3 : 1), 0);
      return { p, score };
    })
    .filter(Boolean) as { p: Product; score: number }[];
  scored.sort((a, b) => b.score - a.score);
  const list = scored.map((s) => s.p);
  return limit ? list.slice(0, limit) : list;
};

/** Up to `n` products from the same subcategory, then the same division. */
export const relatedProducts = (p: Product, n = 4) => {
  const same = products.filter((x) => x.id !== p.id && x.subCategory === p.subCategory);
  const div = products.filter(
    (x) => x.id !== p.id && x.category === p.category && x.subCategory !== p.subCategory
  );
  return [...same, ...div].slice(0, n);
};
