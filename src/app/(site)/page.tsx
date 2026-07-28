import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kavita Global Industrial Solution | Trading and Services",
  description: "This is Home Kavita Global Industrial Solution",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
