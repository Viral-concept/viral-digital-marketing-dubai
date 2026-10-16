import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/config/site";

/** Hidden until a verified business WhatsApp number is configured. */
export function WhatsAppButton({ label }: { label: string }) {
  const url = whatsappHref();
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-5 end-5 z-40 grid size-14 place-items-center rounded-full bg-lagoon text-ink shadow-[0_10px_40px_-10px_rgba(95,224,198,0.7)] transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
