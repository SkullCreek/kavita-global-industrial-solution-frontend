export const COMPANY_NAME = "Kavita Global Industrial Solution";

export const WHATSAPP_NUMBER = "919998726601";
export const PHONE_DISPLAY = "+91 99987 26601";
export const PHONE_TEL = "+919998726601";
export const EMAIL = "bahadur.kavita79@gmail.com";

export const ADDRESS =
  "A 1103, Param Skywalk, Pramukh Swami Marg, Near Shaligram Bungalows, Chala, Vapi, Gujarat, 396191";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const enquiryMessage = (productTitle: string) =>
  `Hi, I'm interested in the ${productTitle}. Could you please share the price, availability and delivery details?`;

export const mailtoLink = (subject: string, body: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
