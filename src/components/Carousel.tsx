import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Slide = { src: string; alt: string; caption?: string };

export function AutoCarousel({
  slides,
  interval = 4200,
  className,
  imageClassName,
  showCaption = true,
  showArrows = false,
  eager = false,
}: {
  slides: Slide[];
  interval?: number;
  className?: string;
  imageClassName?: string;
  showCaption?: boolean;
  showArrows?: boolean;
  eager?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const go = useCallback(
    (dir: number) => {
      setPrev(index);
      setIndex((i) => (i + dir + slides.length) % slides.length);
    },
    [slides.length, index],
  );

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setPrev(index);
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [slides.length, interval, index]);

  return (
    <div className={cn("group relative overflow-hidden bg-sand-light", className)}>
      {/* Images with Ken Burns zoom effect */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1400ms] ease-in-out",
            i === index ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <img
            src={s.src}
            alt={s.alt}
            width={1408}
            height={1760}
            loading={eager && i === 0 ? "eager" : "lazy"}
            className={cn(
              "h-full w-full object-cover object-center",
              i === index
                ? "scale-100 transition-transform duration-[8000ms] ease-[cubic-bezier(0.0,0.0,0.2,1)]"
                : "scale-110",
              imageClassName,
            )}
          />
        </div>
      ))}

      {/* Luxurious gradient overlay — bottom heavy */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-20" />
      {/* Subtle left edge vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-20" />

      {showArrows && slides.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 h-11 w-11 flex items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-ink hover:scale-110 md:left-6 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 h-11 w-11 flex items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-ink hover:scale-110 md:right-6 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </>
      ) : null}

      {showCaption && (
        <div className="absolute bottom-0 left-0 right-0 z-30 p-6 md:p-8 lg:p-10">
          <div className="flex items-end justify-between gap-4">
            {/* Caption with pill tag */}
            <div className="flex-1">
              {slides[index]?.caption && (
                <p
                  key={index}
                  className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.28em] text-white backdrop-blur-md border border-white/15 transition-all duration-700"
                >
                  {slides[index].caption}
                </p>
              )}
            </div>

            {/* Slide counter + indicator bars */}
            <div className="flex shrink-0 flex-col items-end gap-3">
              <span className="font-display text-[0.65rem] tabular-nums text-white/60">
                {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => { setPrev(index); setIndex(i); }}
                    className={cn(
                      "h-[2px] rounded-full transition-all duration-700",
                      i === index ? "w-8 bg-white" : "w-3 bg-white/35 hover:bg-white/60",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Editorial split section — premium magazine-level layout.
 * Left panel: rich copy with decorative accent. Right: full-bleed carousel.
 */
export function SplitCarouselSection({
  eyebrow,
  title,
  body,
  children,
  slides,
  reverse = false,
  tone = "white",
  interval = 5200,
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  children?: React.ReactNode;
  slides: Slide[];
  reverse?: boolean;
  tone?: "white" | "sand";
  interval?: number;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "grid border-b border-border lg:h-svh lg:grid-cols-2 lg:overflow-hidden",
        tone === "sand" ? "bg-sand-light" : "bg-background",
      )}
    >
      {/* Copy panel */}
      <div
        className={cn(
          "relative flex items-center px-6 py-16 md:px-14 lg:px-20 lg:py-0",
          reverse ? "lg:order-2" : "lg:order-1",
        )}
      >
        {/* Decorative vertical accent */}
        <div className="absolute left-0 top-1/2 h-24 w-[3px] -translate-y-1/2 bg-gradient-to-b from-transparent via-clay to-transparent hidden lg:block" />

        <div className="max-w-lg">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-clay/60" />
            <p className="eyebrow">{eyebrow}</p>
          </div>
          <h2 className="display-lg mt-5">{title}</h2>
          <div className="lede mt-6 space-y-5 text-ink-soft leading-relaxed">{body}</div>
          {children ? (
            <div className="mt-9 flex flex-wrap gap-3">{children}</div>
          ) : null}
        </div>
      </div>

      <AutoCarousel
        showArrows
        interval={interval}
        slides={slides}
        className={cn(
          "aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full",
          reverse ? "lg:order-1" : "lg:order-2",
        )}
      />
    </section>
  );
}
