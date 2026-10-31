import Image from "next/image";
import Link from "next/link";
import SearchBox from "../Common/SearchBox";
import ProductCard from "../Common/ProductCard";
import { IconChevron, IconPhone, IconWhatsApp } from "../Common/Icons";
import { DIVISIONS, catalogueHref, countIn, getProduct, subGroups } from "@/lib/catalogue";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/constants/contact";
import { Product } from "@/types/product";

const POPULAR = ["Mechanical seal", "Slitter scorer", "Rotary joint", "Folder gluer", "MCB", "Cables"];
const FEATURED_IDS = [1, 15, 9, 36, 42, 24, 51, 55];

const groups = subGroups();
const featured = FEATURED_IDS.map(getProduct).filter(Boolean) as Product[];

const STEPS = [
  {
    title: "Send what you need",
    body: "Share the product name, your machine model, a part photo or a drawing on WhatsApp or email. Quantity helps us quote faster.",
  },
  {
    title: "We confirm price and lead time",
    body: "We match the part or machine to your requirement and reply with price, availability and delivery time. Nothing is charged online.",
  },
  {
    title: "Packed and dispatched",
    body: "Once you confirm, we pack and dispatch to your plant anywhere in India, or prepare it for export shipment.",
  },
];

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-kg-ink text-white">
        <Image
          src="/images/site/hero.webp"
          alt="Corrugated board production line inside a box plant"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,27,45,0.94)_0%,rgba(15,27,45,0.84)_38%,rgba(15,27,45,0.35)_75%,rgba(15,27,45,0.15)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-kg-ink/55 lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-kg-ink/80 to-transparent" />

        <div className="kg-wrap pt-16 pb-10 sm:pt-24 lg:pt-28 lg:pb-14">
          <div className="max-w-[720px]">
            <h1 className="kg-display kg-rise font-extrabold text-[38px] leading-[1.04] sm:text-[54px] lg:text-[66px]">
              The machines and parts your plant runs on
            </h1>
            <p className="kg-rise kg-rise-2 mt-5 text-[17px] sm:text-[19px] leading-relaxed text-[#d4dbe5] max-w-[600px]">
              Corrugation lines and spares, mechanical seals and rotary joints, switchgear, cables and lighting. Tell us
              what you need and we confirm price and lead time on WhatsApp.
            </p>
            <div className="kg-rise kg-rise-3 mt-8 max-w-[640px]">
              <SearchBox size="lg" />
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[14px]">
                <span className="text-[#aab4c2] mr-1">Popular:</span>
                {POPULAR.map((t) => (
                  <Link
                    key={t}
                    href={catalogueHref({ q: t })}
                    className="px-3 py-1 rounded-full border border-white/25 text-white/90 hover:bg-white hover:text-kg-ink transition-colors"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 lg:mt-20 grid sm:grid-cols-3 border-t border-white/20">
            {DIVISIONS.map((d, i) => (
              <Link
                key={d.slug}
                href={catalogueHref({ category: d.name })}
                className={`group flex items-center justify-between gap-4 py-5 sm:px-5 ${i > 0 ? "border-t sm:border-t-0 sm:border-l border-white/20" : "sm:pl-0"}`}
              >
                <span>
                  <span className="block kg-display font-bold text-[18px] lg:text-[20px] leading-tight">{d.name}</span>
                  <span className="block text-[14px] text-[#aab4c2] mt-1 kg-num">{countIn(d.name)} product ranges</span>
                </span>
                <IconChevron className="shrink-0 text-kg-gold group-hover:translate-x-1 transition-transform" size={22} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="bg-white py-16 lg:py-24">
        <div className="kg-wrap">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="kg-display font-extrabold text-[30px] sm:text-[38px] leading-tight text-kg-ink max-w-[640px]">
              Three divisions, one supplier to call
            </h2>
            <p className="text-[16px] text-kg-muted max-w-[420px]">
              One contact for the machine, the seals that keep it sealed and the electricals that keep it powered.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {DIVISIONS.map((d) => {
              const subs = groups.filter((g) => g.division === d.name);
              return (
                <article key={d.slug} className="group flex flex-col rounded-lg overflow-hidden bg-kg-ink text-white">
                  <Link href={catalogueHref({ category: d.name })} className="relative block aspect-[4/3] md:aspect-[5/4] overflow-hidden">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kg-ink via-kg-ink/10 to-transparent" />
                    <h3 className="absolute left-5 right-5 bottom-4 kg-display font-bold text-[22px] leading-tight">{d.name}</h3>
                  </Link>
                  <div className="flex flex-col flex-1 p-5 pt-3">
                    <p className="text-[15px] text-[#c3ccd8] leading-relaxed mb-4">{d.blurb}</p>
                    <ul className="flex flex-wrap gap-1.5 mb-5">
                      {subs.slice(0, 6).map((s) => (
                        <li key={s.name}>
                          <Link
                            href={catalogueHref({ category: d.name, sub: s.name })}
                            className="inline-block text-[13px] px-2.5 py-1 rounded bg-white/10 hover:bg-white hover:text-kg-ink transition-colors"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={catalogueHref({ category: d.name })}
                      className="mt-auto inline-flex items-center gap-1.5 text-[15px] font-semibold text-kg-gold hover:text-white"
                    >
                      Browse {countIn(d.name)} ranges <IconChevron size={18} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalogue index */}
      <section className="bg-kg-paper py-16 lg:py-24 border-y border-kg-line">
        <div className="kg-wrap">
          <h2 className="kg-display font-extrabold text-[30px] sm:text-[38px] leading-tight text-kg-ink mb-3">
            Find it by product group
          </h2>
          <p className="text-[16px] text-kg-muted mb-10 max-w-[620px]">
            The full catalogue, organised the way maintenance and purchase teams look for parts.
          </p>
          <div className="space-y-10">
            {DIVISIONS.map((d) => (
              <div key={d.slug} className="grid lg:grid-cols-[260px_1fr] gap-4 lg:gap-8">
                <div className="lg:pt-2">
                  <h3 className="kg-display font-bold text-[19px] text-kg-ink leading-tight">{d.name}</h3>
                  <Link href={catalogueHref({ category: d.name })} className="inline-block mt-1.5 text-[14px] font-medium text-kg-blue hover:underline">
                    View all {countIn(d.name)}
                  </Link>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                  {groups
                    .filter((g) => g.division === d.name)
                    .map((g) => (
                      <li key={g.name}>
                        <Link
                          href={catalogueHref({ category: d.name, sub: g.name })}
                          className="group flex items-center gap-3 h-full bg-white border border-kg-line rounded-md p-2.5 pr-3 hover:border-kg-ink transition-colors"
                        >
                          <span className="relative w-14 h-14 shrink-0 rounded bg-white overflow-hidden">
                            <Image src={g.image} alt="" fill sizes="56px" className="object-contain" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[14.5px] font-semibold text-kg-ink leading-snug group-hover:text-kg-blue">{g.name}</span>
                            <span className="block text-[13px] text-kg-muted kg-num">
                              {g.count} {g.count === 1 ? "item" : "items"}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-white py-16 lg:py-24">
        <div className="kg-wrap">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className="kg-display font-extrabold text-[30px] sm:text-[38px] leading-tight text-kg-ink">
              Most requested
            </h2>
            <Link href={catalogueHref()} className="inline-flex items-center gap-1 text-[15px] font-semibold text-kg-blue hover:underline">
              See the full catalogue <IconChevron size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* How an enquiry works */}
      <section className="bg-kg-steel py-16 lg:py-24">
        <div className="kg-wrap grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="kg-display font-extrabold text-[30px] sm:text-[38px] leading-tight text-kg-ink">
              How ordering works
            </h2>
            <p className="mt-4 text-[16px] text-kg-muted leading-relaxed max-w-[440px]">
              Industrial parts rarely suit a cart and checkout. You talk to a person who checks the fit before you pay.
            </p>
            <a
              href={whatsappLink("Hi, I'd like a quote. Here are the details of what I need:")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 h-12 px-6 rounded-md bg-kg-wa text-white font-medium hover:bg-kg-wa-dark transition-colors"
            >
              <IconWhatsApp size={20} /> Start an enquiry
            </a>
          </div>
          <ol className="grid sm:grid-cols-3 gap-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="bg-white rounded-lg p-6 border border-kg-line">
                <span className="kg-display font-extrabold text-[40px] leading-none text-kg-blue kg-num">{i + 1}</span>
                <h3 className="mt-4 text-[17px] font-semibold text-kg-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] text-kg-muted leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Supply band */}
      <section className="bg-white py-16 lg:py-24">
        <div className="kg-wrap grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="kg-display font-extrabold text-[30px] sm:text-[38px] leading-tight text-kg-ink">
              For plants in India and buyers abroad
            </h2>
            <p className="mt-4 text-[16px] text-kg-muted leading-relaxed max-w-[540px]">
              We are a trading and services company, not a single-brand dealer. That lets us source the right machine,
              spare or electrical item for your requirement and bring it together in one order.
            </p>
            <ul className="mt-7 space-y-4 max-w-[540px]">
              {[
                ["Domestic supply", "Dispatch to manufacturing plants across India from Vapi, Gujarat."],
                ["Export orders", "Machinery, seals and spares prepared for overseas buyers."],
                ["Spares for running lines", "Send your machine model or a part photo and we match it."],
              ].map(([t, b]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-2 w-2.5 h-2.5 shrink-0 bg-kg-red rotate-45" aria-hidden />
                  <span>
                    <span className="block font-semibold text-kg-ink">{t}</span>
                    <span className="block text-[15px] text-kg-muted">{b}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[16/10] rounded-lg overflow-hidden">
            <Image src="/images/site/warehouse.webp" alt="Packed machinery and spares ready for dispatch" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-kg-ink text-white">
        <div className="kg-wrap py-14 lg:py-16 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <h2 className="kg-display font-extrabold text-[28px] sm:text-[36px] leading-tight">
              Can’t find the exact part?
            </h2>
            <p className="mt-3 text-[16px] text-[#c3ccd8] max-w-[560px]">
              Our catalogue shows what we supply most often, not everything we can source. Send a photo, drawing or
              model number and we will check.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
            <a
              href={whatsappLink("Hi, I'm looking for a part that isn't on your website. Details:")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 h-13 py-3.5 px-6 rounded-md bg-kg-wa text-white font-medium hover:bg-kg-wa-dark transition-colors"
            >
              <IconWhatsApp size={20} /> WhatsApp a photo
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-md border border-white/30 font-medium hover:bg-white hover:text-kg-ink transition-colors kg-num"
            >
              <IconPhone size={18} /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="lg:col-span-2 flex flex-col sm:flex-row sm:justify-between gap-2 text-[14px] text-[#8e9aab] border-t border-white/15 pt-6">
            <p>{ADDRESS}</p>
            <a href={`mailto:${EMAIL}`} className="hover:text-white underline-offset-2 hover:underline">{EMAIL}</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
