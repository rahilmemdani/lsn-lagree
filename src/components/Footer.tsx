import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";
import { INSTAGRAM_URL } from "@/lib/site";
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
    <footer className="border-t border-border bg-sand pb-24 pt-20 text-ink sm:pb-16 md:pt-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-3">
            <img src={logoBeige.url} alt="LSN Lagree" width={160} height={48} className="h-8 w-auto" loading="lazy" />
            <p className="mt-6 max-w-[16rem] text-sm leading-relaxed text-ink-soft">
              India's first Lagree studio. Santacruz, Mumbai.
            </p>
          </div>

          <nav className="lg:col-span-2" aria-label="Explore">
            <h2 className="eyebrow mb-6">Explore</h2>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="text-sm text-ink-soft transition-colors hover:text-clay">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Studio">
            <h2 className="eyebrow mb-6">Studio</h2>
            <ul className="space-y-3">
              {studio.map((l) => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="text-sm text-ink-soft transition-colors hover:text-clay">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-2">
            <h2 className="eyebrow mb-6">Visit</h2>
            <address className="space-y-3 text-sm not-italic leading-relaxed text-ink-soft">
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

          <div className="col-span-2 lg:col-span-3">
            <h2 className="font-display text-2xl">Stay close.</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Class drops, studio news and the occasional long read. No noise.
            </p>
            <NewsletterForm className="mt-6 flex-col sm:flex-col sm:items-stretch" />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="text-ink-soft transition-colors hover:text-clay">
              <Instagram className="h-4 w-4" strokeWidth={1.3} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer noopener" aria-label="YouTube" className="text-ink-soft transition-colors hover:text-clay">
              <Youtube className="h-4 w-4" strokeWidth={1.3} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp" className="text-ink-soft transition-colors hover:text-clay">
              <MessageCircle className="h-4 w-4" strokeWidth={1.3} />
            </a>
          </div>
          <p className="text-xs font-medium tracking-wide text-muted-foreground">
            © 2026 LSN Sculpt LLP. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6 text-xs text-muted-foreground">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
