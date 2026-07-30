import { useState } from "react";
import { cn } from "@/lib/utils";

export function NewsletterForm({
  tone = "light",
  withName = false,
  className,
}: {
  tone?: "light" | "dark";
  withName?: boolean;
  className?: string;
}) {
  const [done, setDone] = useState(false);

  const field = cn(
    "w-full border-b bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-current/45",
    tone === "dark"
      ? "border-white/30 text-white focus:border-white"
      : "border-border text-ink focus:border-clay",
  );

  if (done) {
    return (
      <p className={cn("py-3 text-sm", tone === "dark" ? "text-white/85" : "text-muted-foreground", className)}>
        You are on the list. Look out for us in your inbox.
      </p>
    );
  }

  return (
    <form
      className={cn("flex w-full flex-col gap-4 sm:flex-row sm:items-end", className)}
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      {withName ? (
        <label className="flex-1">
          <span className="sr-only">First name</span>
          <input required name="firstName" placeholder="First name" className={field} />
        </label>
      ) : null}
      <label className="flex-1">
        <span className="sr-only">Email address</span>
        <input required type="email" name="email" placeholder="Email address" className={field} />
      </label>
      <button
        type="submit"
        className={cn(
          "shrink-0 px-8 py-3.5 text-[0.65rem] uppercase tracking-[0.24em] transition-colors duration-500",
          tone === "dark" ? "bg-white text-ink hover:bg-sand" : "bg-clay text-white hover:bg-clay-deep",
        )}
      >
        Subscribe
      </button>
    </form>
  );
}
