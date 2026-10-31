import Link from "next/link";
import { Product } from "@/types/product";
import { catalogueHref, relatedProducts } from "@/lib/catalogue";
import ProductCard from "../Common/ProductCard";
import Gallery from "./Gallery";
import EnquiryPanel from "./EnquiryPanel";
import { IconBox, IconGlobe, IconWrench } from "../Common/Icons";

const ProductDetail = ({ p }: { p: Product }) => {
  const specs = p.specifications || [];
  const model = specs.find((s) => /^model$/i.test(s.label))?.value;
  const images = p.imgs?.previews || [];
  const related = relatedProducts(p, 4);

  return (
    <main className="bg-white">
      <div className="kg-wrap pt-6 pb-14 lg:pb-20">
        <nav aria-label="Breadcrumb" className="text-[13.5px] text-kg-muted mb-6 flex flex-wrap gap-1.5">
          <Link href="/" className="hover:text-kg-blue">Home</Link>
          <span aria-hidden>/</span>
          <Link href={catalogueHref({ category: p.category })} className="hover:text-kg-blue">{p.category}</Link>
          <span aria-hidden>/</span>
          <Link href={catalogueHref({ category: p.category, sub: p.subCategory })} className="hover:text-kg-blue">{p.subCategory}</Link>
        </nav>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 lg:gap-14 items-start">
          <div className="min-w-0 lg:sticky lg:top-[190px]">
            <Gallery images={images} title={p.title} />
          </div>

          <div>
            <p className="text-[14px] font-medium text-kg-blue">{p.subCategory}</p>
            <h1 className="mt-1 kg-display font-extrabold text-[28px] sm:text-[36px] leading-[1.1] text-kg-ink">{p.title}</h1>
            {model && (
              <p className="mt-2 text-[15px] text-kg-muted">
                Model <span className="font-semibold text-kg-ink">{model}</span>
              </p>
            )}
            {p.description && <p className="mt-5 text-[16.5px] leading-relaxed text-kg-ink-2">{p.description}</p>}

            <div className="mt-7">
              <EnquiryPanel title={p.title} model={model} />
            </div>

            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-[14px]">
              <li className="flex gap-2.5 items-start">
                <IconWrench size={20} className="text-kg-blue shrink-0" />
                <span className="text-kg-ink-2">Checked against your requirement before quoting</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <IconBox size={20} className="text-kg-blue shrink-0" />
                <span className="text-kg-ink-2">Dispatch to plants across India</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <IconGlobe size={20} className="text-kg-blue shrink-0" />
                <span className="text-kg-ink-2">Available for export orders</span>
              </li>
            </ul>
          </div>
        </div>

        {specs.length > 0 && (
          <section className="mt-14 lg:mt-20 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] gap-6 lg:gap-14" aria-labelledby="specs">
            <div>
              <h2 id="specs" className="kg-display font-extrabold text-[26px] sm:text-[30px] text-kg-ink leading-tight">Specifications</h2>
              <p className="mt-2 text-[15px] text-kg-muted max-w-[320px]">
                Typical values for this range. Exact figures depend on the model and configuration you choose.
              </p>
            </div>
            <dl className="border-t-2 border-kg-ink">
              {specs.map((s) => (
                <div key={s.label} className="grid sm:grid-cols-[minmax(180px,34%)_1fr] gap-1 sm:gap-6 py-3.5 border-b border-kg-line">
                  <dt className="text-[14.5px] text-kg-muted">{s.label}</dt>
                  <dd className="text-[15px] text-kg-ink font-medium kg-num">{s.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </div>

      {related.length > 0 && (
        <section className="bg-kg-paper border-t border-kg-line py-14 lg:py-20">
          <div className="kg-wrap">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-7">
              <h2 className="kg-display font-extrabold text-[26px] sm:text-[30px] text-kg-ink">Related in {p.subCategory}</h2>
              <Link href={catalogueHref({ category: p.category })} className="text-[15px] font-semibold text-kg-blue hover:underline">
                More in {p.category}
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
              {related.map((r) => (
                <ProductCard key={r.id} p={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
