import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CtaBand } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/community/events")({
  head: () => ({
    meta: [
      { title: "Events and Workshops | LSN Lagree Mumbai" },
      {
        name: "description",
        content:
          "Member mornings, technique workshops and pop-up Lagree classes at LSN in Santacruz, Mumbai.",
      },
      { property: "og:title", content: "Events and Workshops | LSN Lagree Mumbai" },
      {
        property: "og:description",
        content: "Member mornings, technique workshops and pop-ups at India's first Lagree studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  ["Member Morning", "[Date]", "An early class followed by coffee and a slower conversation about training."],
  ["Technique Workshop", "[Date]", "Ninety minutes on spring settings, tempo and the five positions people get wrong."],
  ["Pop-Up Class", "[Date]", "A machine, a location outside the studio, and five spots."],
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Events"
        lede="Occasional gatherings for people who take this seriously."
      />
      <Section>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {EVENTS.map(([t, d, b], i) => (
            <Reveal key={t} delay={i * 90} className="bg-background p-8 md:p-10">
              <p className="eyebrow">{d}</p>
              <h2 className="mt-5 font-display text-2xl">{t}</h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted-foreground">{b}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand title="Spots are limited to five. As always." />
    </>
  );
}
