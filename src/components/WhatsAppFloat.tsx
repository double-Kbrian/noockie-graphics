
import { MessageCircle } from "lucide-react";
import { whatsappLinkNumber } from "@/lib/site-config";

export default function WhatsAppFloat() {
  const defaultMessage =
    "Hello Noockie Graphics, I would like to inquire about your branding and signage services.";

  // Validate the publicly accessible business number
  const isValidNumber =
    typeof whatsappLinkNumber === "string" &&
    /^\d{10,15}$/.test(whatsappLinkNumber);

  // Do not render a broken contact link
  if (!isValidNumber) return null;

  const whatsappUrl = `https://wa.me/${whatsappLinkNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Noockie Graphics on WhatsApp"
      title="Chat with Noockie Graphics"
      className="fixed bottom-6 right-6 z-50
        w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a]
        text-white rounded-full flex items-center
        justify-center shadow-2xl transition-all
        duration-300 hover:scale-110
        focus-visible:outline-none
        focus-visible:ring-4
        focus-visible:ring-[#25D366]/40 group"
    >
      <MessageCircle className="w-7 h-7" />

      <span
        className="absolute right-full mr-3
          bg-charcoal-light border border-white/15
          text-ivory text-xs px-3 py-1.5
          rounded-lg shadow-xl opacity-0
          group-hover:opacity-100
          group-focus-visible:opacity-100
          transition-opacity whitespace-nowrap
          pointer-events-none font-medium"
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
