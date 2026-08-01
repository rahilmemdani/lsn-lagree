export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-sand-light py-4">
      <div className="flex min-w-max animate-[lsn-marquee_38s_linear_infinite] items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-[0.62rem] uppercase tracking-[0.34em] text-ink-soft"
          >
            <span className="inline-block h-1 w-1 rounded-full bg-clay/70" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
