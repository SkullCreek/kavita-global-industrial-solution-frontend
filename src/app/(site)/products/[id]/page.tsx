import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getProduct, products } from "@/lib/catalogue";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = getProduct(Number(id));
  if (!p) return { title: "Product not found" };
  return {
    title: p.title,
    description: p.description?.slice(0, 160),
    openGraph: { images: p.imgs?.previews?.[0] ? [p.imgs.previews[0]] : undefined },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProduct(Number(id));
  if (!p) notFound();
  return <ProductDetail p={p} />;
}
