import { redirect } from "next/navigation";
import { getProduct, catalogueHref } from "@/lib/catalogue";

// Old product URL (/shop-details?id=N). Product pages now live at /products/N.
export default async function ShopDetailsRedirect({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const p = id ? getProduct(Number(id)) : undefined;
  redirect(p ? `/products/${p.id}` : catalogueHref());
}
