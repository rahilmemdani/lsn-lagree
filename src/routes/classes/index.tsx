import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, CtaBand, ActionLink } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { CLASS_FORMATS } from "@/lib/site";

export const Route = createFileRoute("/classes/")({
  head: () => ({
    meta: [
      { title: "Lagree Class Formats in Mumbai | LSN Lagree" },
      {
        name: "description",
        content:
          "Six fifty-minute Lagree class formats in Santacruz, Mumbai. Full Body, Core, Lower, Upper and Core, Foundations and Private sessions.",
      },
      { property: "og:title", content: "Lagree Class Formats in Mumbai | LSN Lagree" },
      {
        property: "og:description",
        content: "Fifty minutes. Five machines. Six formats. Find the one to start with.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClassesPage,
});

function ClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="Classes"
        title="Fifty minutes. Five machines."
        lede="Every class runs fifty minutes and caps at five people. What changes is the emphasis, the tempo and how hard we push the tension."
      />

      <Section>
        <div className="grid gap-px bg-border md:grid-cols-2">
          {CLASS_FORMATS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 90} className="bg-background p-8 md:p-12">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-3xl md:text-4xl">{c.name}</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {c.duration}
                </span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-clay">{c.level}</p>
              <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground">
                {c.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead
          eyebrow="Levels"
          title="Where to begin."
          lede="Nobody is put in the wrong room here. If you are unsure, start with Foundations and let your coach move you up."
        />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {[
            ["Beginner", "Your first four classes. Foundations, and the machine taught properly."],
            [
              "All levels",
              "The main body of the schedule. Spring load and range are adjusted to you inside the class.",
            ],
            [
              "Intermediate",
              "Faster transitions and longer holds, for people who have the fundamentals in place.",
            ],
          ].map(([t, b], i) => (
            <Reveal key={t} delay={i * 90} className="bg-sand-light p-8 md:p-10">
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted-foreground">{b}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex flex-wrap gap-4">
          <ActionLink to="/classes/schedule" variant="outline">
            View the Schedule
          </ActionLink>
          <ActionLink to="/classes/pricing" variant="outline">
            Pricing and Packages
          </ActionLink>
        </Reveal>
      </Section>

      <CtaBand title="Pick a format. Book a machine." />
    </>
  );
}
