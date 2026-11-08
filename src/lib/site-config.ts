export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+254700000000";
export const whatsappLinkNumber = whatsappNumber.replace(/\D/g, "");
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@kraftkilnstudio.co.ke";
