import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Slide = { src: string; alt: string; caption?: string };

export function AutoCarousel({
  slides,
  interval = 4200,
  className,
  imageClassName,
  showCaption = true,
  eager = false,
}: {
  slides: Slide[];
  interval?: number;
  className?: string;
  imageClassName?: string;
  showCaption?: boolean;
  eager?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className={cn("relative overflow-hidden bg-sand-light", className)}>
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={1408}
          height={1760}
          loading={eager && i === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            i === index ? "opacity-100" : "opacity-0",
            imageClassName,
          )}
        />
      ))}

      {/* soft edge so overlaid type stays readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/25 to-transparent" />

      {showCaption && slides[index]?.caption ? (
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 md:bottom-8 md:left-8 md:right-8">
          <p className="max-w-[16rem] text-[0.62rem] uppercase tracking-[0.26em] text-white/90">
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
