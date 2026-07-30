import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-border">
      {items.map((item, i) => (
        <div key={item.q} className="border-b border-border">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-clay"
          >
            <span className="font-display text-lg md:text-xl">{item.q}</span>
            <Plus
              className={cn(
                "h-4 w-4 shrink-0 text-clay transition-transform duration-500",
                open === i && "rotate-45",
              )}
              strokeWidth={1.4}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              open === i ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <p className="max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
