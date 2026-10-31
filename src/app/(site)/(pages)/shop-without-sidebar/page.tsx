import React, { Suspense } from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Product catalogue",
  description:
    "Browse the full Kavita Global Industrial Solution catalogue — corrugation & packaging machinery, mechanical seals & fluid handling, and electrical & power systems. Enquire on WhatsApp for pricing.",
  // other metadata
};

const ShopWithoutSidebarPage = () => {
  return (
    <Suspense fallback={null}>
      <ShopWithoutSidebar />
    </Suspense>
  );
};

export default ShopWithoutSidebarPage;
