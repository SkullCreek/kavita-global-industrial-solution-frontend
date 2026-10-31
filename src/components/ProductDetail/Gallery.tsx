"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IconChevron, IconClose, IconExpand } from "../Common/Icons";

const Gallery = ({ images, title }: { images: string[]; title: string }) => {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const n = images.length;
  const prev = () => setI((x) => (x - 1 + n) % n);
  const next = () => setI((x) => (x + 1) % n);

  useEffect(() => {
    if (!zoom) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom, n]);

  if (!n) return null;

  return (
    <div className="min-w-0">
      <div className="relative aspect-square sm:aspect-[5/4] bg-white border border-kg-line rounded-lg overflow-hidden">
        <button onClick={() => setZoom(true)} className="absolute inset-0 cursor-zoom-in" aria-label="View larger image">
          <Image
            src={images[i]}
            alt={`${title}${n > 1 ? `, photo ${i + 1} of ${n}` : ""}`}
            fill
            priority
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-contain p-6 sm:p-10"
          />
        </button>
        <span className="pointer-events-none absolute top-3 right-3 w-10 h-10 rounded-md bg-white/90 border border-kg-line flex items-center justify-center text-kg-ink">
          <IconExpand size={18} />
        </span>
        {n > 1 && (
          <>
            <button onClick={prev} aria-label="Previous photo" className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-kg-line flex items-center justify-center hover:border-kg-ink">
              <IconChevron size={18} className="rotate-180" />
            </button>
            <button onClick={next} aria-label="Next photo" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-kg-line flex items-center justify-center hover:border-kg-ink">
              <IconChevron size={18} />
            </button>
            <span className="absolute left-3 bottom-3 text-[13px] bg-kg-ink text-white rounded px-2 py-0.5 kg-num">
              {i + 1} / {n}
            </span>
          </>
        )}
      </div>

      {n > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, k) => (
            <li key={src} className="shrink-0">
              <button
                onClick={() => setI(k)}
                aria-label={`Show photo ${k + 1}`}
                aria-current={k === i}
                className={`relative block w-[68px] h-[68px] bg-white rounded-md border-2 overflow-hidden ${
                  k === i ? "border-kg-blue" : "border-kg-line hover:border-kg-muted"
                }`}
              >
                <Image src={src} alt="" fill sizes="68px" className="object-contain p-1" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {zoom && (
        <div className="fixed inset-0 z-[100] bg-kg-ink/95 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={title}>
          <button onClick={() => setZoom(false)} aria-label="Close" className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20">
            <IconClose size={22} />
          </button>
          <div className="relative w-full max-w-[1100px] h-[80vh] bg-white rounded-lg">
            <Image src={images[i]} alt={title} fill sizes="100vw" className="object-contain p-6" />
          </div>
          {n > 1 && (
            <>
              <button onClick={prev} aria-label="Previous photo" className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20">
                <IconChevron size={22} className="rotate-180" />
              </button>
              <button onClick={next} aria-label="Next photo" className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20">
                <IconChevron size={22} />
              </button>
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-[14px] kg-num">{i + 1} / {n}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
