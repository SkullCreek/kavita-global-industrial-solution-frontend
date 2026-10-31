import { whatsappLink } from "@/constants/contact";
import { IconWhatsApp } from "./Icons";

const WhatsAppFab = () => (
  <a
    href={whatsappLink("Hi, I'd like to enquire about a product from your catalogue.")}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="fixed z-[60] bottom-5 right-5 flex items-center gap-2 rounded-full bg-kg-wa text-white shadow-[0_8px_24px_rgba(15,27,45,0.28)] pl-3.5 pr-4 py-3 hover:bg-kg-wa-dark transition-colors"
  >
    <IconWhatsApp size={22} />
    <span className="hidden sm:inline font-medium text-[15px]">WhatsApp us</span>
  </a>
);

export default WhatsAppFab;
