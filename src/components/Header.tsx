import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV, BOOKING_URL } from "@/lib/site";
import logoBrown from "@/assets/lsn-logo-brown.png.asset.json";
import logoBeige from "@/assets/lsn-logo-beige.png.asset.json";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overDark = false;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled || !isHome
            ? "border-border bg-background/92 backdrop-blur-xl"
            : "border-transparent bg-background",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-6 px-6 py-4 md:px-10 md:py-5 lg:px-16">
          <Link to="/" aria-label="LSN Lagree home" className="shrink-0">
            <img
              src={overDark ? logoBeige.url : logoBrown.url}
              alt="LSN Lagree"
              width={148}
              height={44}
              className="h-7 w-auto transition-opacity duration-500 md:h-8"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV.filter((i) => i.label !== "Home").map((item) => (
              <div key={item.label} className="group relative py-3">
                <Link
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300",
                    overDark ? "text-white/85 hover:text-white" : "text-ink-soft hover:text-clay",
                  )}
                  activeProps={{ className: overDark ? "text-white" : "text-clay" }}
                  activeOptions={{ exact: item.children ? false : true }}
                >
                  {item.label}
                  {item.children ? <ChevronDown className="h-3 w-3 opacity-60" /> : null}
                </Link>
                {item.children ? (
                  <div className="pointer-events-none absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 border border-border bg-background p-2 opacity-0 shadow-[0_24px_60px_-30px_rgba(43,33,26,0.45)] transition-all duration-400 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.to + c.label}
                        to={c.to}
                        className="block px-4 py-2.5 text-[0.8rem] text-ink-soft transition-colors hover:bg-sand-light hover:text-clay"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden bg-clay px-6 py-3.5 text-[0.65rem] uppercase tracking-[0.24em] text-white transition-colors duration-500 hover:bg-clay-deep sm:inline-block"
            >
              Book a Class
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "p-2 lg:hidden",
                overDark ? "text-white" : "text-ink",
              )}
            >
              <Menu className="h-6 w-6" strokeWidth={1.2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-sand-light transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <img src={logoBrown.url} alt="LSN Lagree" width={148} height={44} className="h-7 w-auto" />
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
            <X className="h-6 w-6" strokeWidth={1.2} />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 pb-32">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-border">
              <div className="flex items-center justify-between">
                <Link to={item.to} className="block flex-1 py-5 font-display text-2xl">
                  {item.label}
                </Link>
                {item.children ? (
                  <button
                    type="button"
                    aria-label={`Expand ${item.label}`}
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className="p-3 text-clay"
                  >
                    <Plus
                      className={cn(
                        "h-4 w-4 transition-transform duration-400",
                        expanded === item.label && "rotate-45",
                      )}
                      strokeWidth={1.4}
                    />
                  </button>
                ) : null}
              </div>
              {item.children ? (
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    expanded === item.label ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    {item.children.map((c) => (
                      <Link
                        key={c.to + c.label}
                        to={c.to}
                        className="block py-2.5 text-sm text-ink-soft"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>

      {/* Sticky mobile booking bar */}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed inset-x-0 bottom-0 z-[70] block bg-clay py-4 text-center text-[0.7rem] uppercase tracking-[0.28em] text-white sm:hidden"
      >
        Book a Class
      </a>
    </>
  );
}
