import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import "../css/kg.css";
import type { Metadata, Viewport } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Providers from "./providers";
import WhatsAppFab from "@/components/Common/WhatsAppFab";

export const metadata: Metadata = {
  title: {
    default: "Kavita Global Industrial Solution | Industrial Trading & Services",
    template: "%s | Kavita Global Industrial Solution",
  },
  description:
    "Corrugation and packaging machinery, mechanical seals and fluid handling, and electrical and power systems — supplied from Vapi, Gujarat to plants across India and for export.",
};

export const viewport: Viewport = {
  themeColor: "#0F1B2D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="kg">
        <Providers>
          <Header />
          {children}
          <Footer />
          <WhatsAppFab />
        </Providers>
      </body>
    </html>
  );
}
