import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";
import logoBeige from "@/assets/lsn-logo-beige.png.asset.json";

const explore = [
  { label: "The Lagree Method", to: "/the-method" },
  { label: "Class Formats", to: "/classes" },
  { label: "Schedule", to: "/classes/schedule" },
  { label: "Pricing", to: "/classes/pricing" },
  { label: "Your First Class", to: "/classes/first-class" },
  { label: "FAQ", to: "/faq" },
];

const studio = [
  { label: "About LSN", to: "/studio" },
  { label: "The Founders", to: "/studio/founders" },
  { label: "The Space", to: "/studio/the-space" },
  { label: "Franchise", to: "/franchise" },
  { label: "Careers", to: "/studio/careers" },
  { label: "Journal", to: "/community/journal" },
  { label: "Events", to: "/community/events" },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-20 text-sand-light sm:pb-16 md:pt-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <img src={logoBeige.url} alt="LSN Lagree" width={160} height={48} className="h-8 w-auto" loading="lazy" />
            <p className="mt-6 max-w-[16rem] text-sm leading-relaxed text-sand-light/60">
              India's first Lagree studio. Santacruz, Mumbai.
            </p>
          </div>

          <nav className="lg:col-span-2" aria-label="Explore">
            <h2 className="eyebrow mb-6 text-sand">Explore</h2>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="text-sm text-sand-light/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Studio">
            <h2 className="eyebrow mb-6 text-sand">Studio</h2>
            <ul className="space-y-3">
              {studio.map((l) => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="text-sm text-sand-light/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="eyebrow mb-6 text-sand">Visit</h2>
            <address className="space-y-3 text-sm not-italic leading-relaxed text-sand-light/70">
              <p>[Full studio address], Santacruz, Mumbai [PIN code]</p>
              <p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer noopener" className="link-underline">
                  Google Maps
                </a>
              </p>
              <p>[Phone number]</p>
              <p>[Email]</p>
              <p>Mon–Fri [hours] / Sat–Sun [hours]</p>
            </address>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl">Stay close.</h2>
            <p className="mt-3 text-sm leading-relaxed text-sand-light/65">
              Class drops, studio news and the occasional long read. No noise.
            </p>
            <NewsletterForm tone="dark" className="mt-6 flex-col sm:flex-col sm:items-stretch" />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/12 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="text-sand-light/60 transition-colors hover:text-white">
              <Instagram className="h-4 w-4" strokeWidth={1.3} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer noopener" aria-label="YouTube" className="text-sand-light/60 transition-colors hover:text-white">
              <Youtube className="h-4 w-4" strokeWidth={1.3} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp" className="text-sand-light/60 transition-colors hover:text-white">
              <MessageCircle className="h-4 w-4" strokeWidth={1.3} />
            </a>
          </div>
          <p className="text-xs tracking-wide text-sand-light/45">
            © 2026 LSN Sculpt LLP. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6 text-xs text-sand-light/45">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
