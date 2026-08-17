import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Kavita Global Industrial Solution",
  description:
    "Get in touch with Kavita Global Industrial Solution for machinery, sealing & fluid handling, and electrical & power systems enquiries. Call, WhatsApp or email us.",
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
