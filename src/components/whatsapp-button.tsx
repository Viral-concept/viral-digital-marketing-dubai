import { whatsappHref } from "@/config/site";

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.45 9.43m8.04-17.47A11.3 11.3 0 0 0 12.05.5C5.78.5.68 5.6.67 11.86c0 2 .52 3.96 1.52 5.68L.57 23.5l6.1-1.6a11.4 11.4 0 0 0 5.37 1.37h.01c6.27 0 11.37-5.1 11.38-11.37a11.3 11.3 0 0 0-3.33-8.04" />
    </svg>
  );
}

/** Floating WhatsApp button: opens a chat with the business number and a prefilled greeting. */
export function WhatsAppButton({ label, message }: { label: string; message?: string }) {
  const url = whatsappHref(message);
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed bottom-5 end-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp p-3.5 text-white shadow-[0_14px_40px_-12px_rgba(37,211,102,0.8)] transition-transform duration-300 hover:scale-105 sm:pe-5"
    >
      <span aria-hidden="true" className="absolute inset-0 -z-10 animate-[ping_2.4s_ease-out_3] rounded-full bg-whatsapp opacity-40" />
      <WhatsAppIcon className="size-7" />
      <span className="hidden text-[0.95rem] font-semibold sm:inline">{label}</span>
    </a>
  );
}
