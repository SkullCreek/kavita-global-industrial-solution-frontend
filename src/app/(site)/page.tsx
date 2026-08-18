import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kavita Global Industrial Solution | Trading and Services",
  description:
    "Kavita Global Industrial Solution supplies corrugation & packaging machinery, mechanical seals & fluid handling equipment, and electrical & power systems to manufacturing plants across India. Enquire on WhatsApp for pricing and availability.",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
