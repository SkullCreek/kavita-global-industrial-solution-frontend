"use client";
import { ReduxProvider } from "@/redux/provider";
import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";

// Kept so the older template pages (cart, wishlist, blog) still render.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <CartModalProvider>
        <ModalProvider>
          <PreviewSliderProvider>{children}</PreviewSliderProvider>
        </ModalProvider>
      </CartModalProvider>
    </ReduxProvider>
  );
}
