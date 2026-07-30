import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, CtaBand, BookButton } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/classes/pricing")({
  head: () => ({
    meta: [
      { title: "Lagree Class Pricing and Packages | LSN Lagree Mumbai" },
      {
        name: "description",
        content:
          "Intro offers, class packs, unlimited memberships and private sessions at LSN Lagree in Santacruz, Mumbai.",
      },
      { property: "og:title", content: "Lagree Class Pricing and Packages | LSN Lagree Mumbai" },
      {
        property: "og:description",
        content: "Intro offers, class packs, memberships and privates at India's first Lagree studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const PLANS = [
  {
    name: "First Class",
    price: "[₹X]",
    note: "One class",
    lines: ["A single fifty-minute class", "Grip socks included", "Arrive fifteen minutes early"],
    featured: false,
  },
  {
    name: "Intro Pack",
    price: "[₹X]",
    note: "Three classes",
    lines: [
      "Three classes, valid [X] days",
      "The honest way to judge the method",
      "Best taken across one week",
    ],
    featured: true,
  },
  {
    name: "Class Packs",
    price: "[₹X]",
    note: "5, 10 or 20 classes",
    lines: ["Valid [X] months", "Shareable: no", "Rate improves with pack size"],
    featured: false,
  },
  {
    name: "Unlimited",
    price: "[₹X]",
    note: "Per month",
    lines: ["Unlimited classes", "Priority booking window", "Member events and guest rates"],
    featured: false,
  },
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Classes"
        title="Pricing and packages"
        lede="Two to three classes a week is where most people see change. The packages are built around that."
      />

      <Section>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 90}
              className={p.featured ? "bg-ink p-8 text-sand-light md:p-10" : "bg-background p-8 md:p-10"}
            >
              <p
                className={
                  p.featured
                    ? "eyebrow text-sand"
                    : "eyebrow"
                }
              >
                {p.note}
              </p>
              <h2 className="mt-6 font-display text-3xl">{p.name}</h2>
              <p className="mt-4 font-display text-4xl">{p.price}</p>
              <ul className="mt-8 space-y-3">
                {p.lines.map((l) => (
                  <li
                    key={l}
                    className={
                      p.featured
                        ? "border-t border-white/12 pt-3 text-sm text-sand-light/70"
                        : "border-t border-border pt-3 text-sm text-muted-foreground"
                    }
                  >
                    {l}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <BookButton variant={p.featured ? "light" : "outline"}>Book</BookButton>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead
          eyebrow="Also available"
          title="Private and group sessions."
          lede="One machine, one coach, one focus — or the whole room booked out for your team."
        />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {[
            [
              "Private sessions",
              "[₹X] per session. One to one with a certified trainer, built around an injury, a goal or simply a pace of your own.",
            ],
            [
              "Corporate and group bookings",
              "Rates on request. Five machines, your people, and a coach who runs the room end to end.",
            ],
          ].map(([t, b], i) => (
            <Reveal key={t} delay={i * 90} className="bg-sand-light p-8 md:p-12">
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Start with three classes." body="It takes about that long to understand what the method is doing." />
    </>
  );
}
