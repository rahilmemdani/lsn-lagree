import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/site";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "sand" | "clay" | "ink";
  id?: string;
}) {
  const tones = {
    white: "bg-background text-foreground",
    sand: "bg-sand-light text-foreground",
    clay: "bg-sand text-ink",
    ink: "bg-sand-light text-ink",
  } as const;
  return (
    <section id={id} className={cn("py-20 md:py-28 lg:py-36", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
      <h2 className="display-lg">{title}</h2>
      {lede ? <p className="lede mt-6">{lede}</p> : null}
    </Reveal>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "light";
  className?: string;
};

const buttonBase =
  "group inline-flex items-center justify-center gap-3 px-8 py-4 text-[0.7rem] font-normal uppercase tracking-[0.24em] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";

const buttonVariants = {
  solid: "bg-clay text-white hover:bg-clay-deep",
  outline: "border border-clay/40 text-clay hover:border-clay hover:bg-clay hover:text-white",
  ghost: "text-foreground hover:text-clay",
  light: "bg-sand-light text-ink hover:bg-white",
} as const;

export function ActionLink({
  to,
  variant = "solid",
  className,
  children,
}: ButtonProps & { to: string }) {
  return (
    <Link to={to} className={cn(buttonBase, buttonVariants[variant], className)}>
      {children}
    </Link>
  );
}

export function BookButton({
  variant = "solid",
  className,
  children = "Book a Class",
}: Partial<ButtonProps>) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(buttonBase, buttonVariants[variant], className)}
    >
      {children}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-sand-light pt-40 pb-16 md:pt-52 md:pb-24">
      <Container>
        <Reveal className="max-w-4xl">
          {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
          <h1 className="display-xl">{title}</h1>
          {lede ? <p className="lede mt-8 max-w-2xl">{lede}</p> : null}
          {children ? <div className="mt-10 flex flex-wrap gap-4">{children}</div> : null}
        </Reveal>
      </Container>
    </header>
  );
}

export function CtaBand({
  title,
  body,
  children,
}: {
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <Section tone="clay">
      <Reveal className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="display-lg">{title}</h2>
          {body ? <p className="mt-6 text-lg font-light text-ink-soft">{body}</p> : null}
        </div>
        <div className="flex flex-wrap gap-4">
          {children ?? <BookButton variant="solid">Book Your First Class</BookButton>}
        </div>
      </Reveal>
    </Section>
  );
}

export function Numbered({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid gap-4 border-t border-border py-9 md:grid-cols-[6rem_1fr_1.4fr] md:gap-10">
      <span className="font-display text-2xl text-clay">{index}</span>
      <h3 className="text-xl md:text-2xl">{title}</h3>
      <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
