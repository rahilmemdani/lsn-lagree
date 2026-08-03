import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [slides.length, interval, index]);

  return (
    <div className={cn("group relative overflow-hidden bg-sand-light", className)}>
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={1408}
          height={1760}
          loading={eager && i === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            i === index ? "opacity-100" : "opacity-0",
            imageClassName,
          )}
        />
      ))}

      {/* soft edge so overlaid type stays readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/25 to-transparent" />

      {showArrows && slides.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/25 p-2.5 text-white backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-ink md:left-6"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/25 p-2.5 text-white backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-ink md:right-6"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </>
      ) : null}

      {showCaption && slides[index]?.caption ? (
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 md:bottom-8 md:left-8 md:right-8">
          <p className="max-w-[16rem] rounded-full bg-white/20 px-4 py-2 text-[0.6rem] uppercase tracking-[0.24em] text-white backdrop-blur-md">
            {slides[index].caption}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-[2px] transition-all duration-700",
                  i === index ? "w-8 bg-white" : "w-4 bg-white/45",
                )}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

/**
 * Editorial split section: copy panel on one side, auto carousel on the other.
 * Desktop locks to one viewport height; mobile stacks with a safe image ratio.
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
      <div
        className={cn(
          "flex items-center px-6 py-16 md:px-14 lg:px-20 lg:py-0",
          reverse ? "lg:order-2" : "lg:order-1",
        )}
      >
        <div className="max-w-lg">
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-10 bg-clay/50" />
            <p className="eyebrow">{eyebrow}</p>
          </div>
          <h2 className="display-lg mt-6">{title}</h2>
          <div className="lede mt-6 space-y-5">{body}</div>
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
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
