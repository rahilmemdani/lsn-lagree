import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with LSN Lagree on WhatsApp"
      className="fixed bottom-20 right-5 z-[65] flex h-12 w-12 items-center justify-center rounded-full bg-clay text-white shadow-[0_18px_40px_-18px_rgba(43,33,26,0.7)] transition-transform duration-500 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.4} />
    </a>
  );
}
