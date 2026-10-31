import { redirect } from "next/navigation";

// The catalogue now has its own sidebar; keep this old URL working.
export default function ShopWithSidebarRedirect() {
  redirect("/shop-without-sidebar");
}
