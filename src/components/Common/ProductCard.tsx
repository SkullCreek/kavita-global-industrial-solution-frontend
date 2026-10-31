import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { imageCount, productHref, productImage } from "@/lib/catalogue";
import { enquiryMessage, whatsappLink } from "@/constants/contact";
import { IconWhatsApp } from "./Icons";

/** Two specs that help a buyer tell similar items apart, skipping the model code. */
const keySpecs = (p: Product) =>
  (p.specifications || []).filter((s) => !/^model$/i.test(s.label) && s.value.length < 48).slice(0, 2);

export const ProductCard = ({ p, priority }: { p: Product; priority?: boolean }) => {
  const imgs = imageCount(p);
  return (
    <article className="group relative flex flex-col bg-white border border-kg-line rounded-lg overflow-hidden hover:border-kg-ink transition-colors">
      <Link href={productHref(p)} className="relative block aspect-[4/3] bg-white border-b border-kg-line">
        <Image
          src={productImage(p)}
          alt={p.title}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 290px, (min-width: 768px) 33vw, 50vw"
          className="object-contain p-4 group-hover:scale-[1.03] transition-transform duration-300"
        />
        {imgs > 1 && (
          <span className="absolute left-3 bottom-3 text-[12px] font-medium bg-kg-paper text-kg-ink-2 border border-kg-line rounded px-1.5 py-0.5 kg-num">
            {imgs} photos
          </span>
        )}
      </Link>
      <div className="flex flex-col flex-1 p-3 sm:p-4">
        <p className="text-[13px] text-kg-blue font-medium mb-1">{p.subCategory}</p>
        <h3 className="text-[15px] sm:text-[16px] leading-snug font-semibold text-kg-ink mb-3 sm:mb-2.5">
          <Link href={productHref(p)} className="after:absolute after:inset-0 after:content-['']">
            {p.title}
          </Link>
        </h3>
        {keySpecs(p).length > 0 && (
          <dl className="hidden sm:block text-[13px] text-kg-muted space-y-1 mb-4">
            {keySpecs(p).map((s) => (
              <div key={s.label} className="flex gap-2">
                <dt className="shrink-0">{s.label}:</dt>
                <dd className="text-kg-ink-2 truncate">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className="mt-auto flex items-center gap-2 pt-1">
          <span className="hidden sm:inline text-[14px] font-medium text-kg-ink group-hover:text-kg-blue">View details</span>
          <a
            href={whatsappLink(enquiryMessage(p.title))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${p.title} on WhatsApp`}
            className="relative z-10 w-full sm:w-auto sm:ml-auto inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-md text-[13.5px] font-medium text-kg-wa border border-kg-wa/40 hover:bg-kg-wa hover:text-white transition-colors"
          >
            <IconWhatsApp size={16} /> Enquire
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
