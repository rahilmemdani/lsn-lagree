import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CtaBand, BookButton, Eyebrow } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/classes/schedule")({
  head: () => ({
    meta: [
      { title: "Class Schedule | LSN Lagree Santacruz, Mumbai" },
      {
        name: "description",
        content:
          "Weekly Lagree class schedule at LSN in Santacruz, Mumbai. Fifty-minute classes, five spots each, booked through the LSN app.",
      },
      { property: "og:title", content: "Class Schedule | LSN Lagree Santacruz, Mumbai" },
      {
        property: "og:description",
        content: "Weekly Lagree class times in Santacruz, Mumbai. Five spots per class.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SchedulePage,
});

const DAYS = [
  ["Monday", ["[06:30] LSN Full Body", "[08:00] LSN Core", "[18:30] LSN Lower", "[19:45] LSN Full Body"]],
  ["Tuesday", ["[07:00] LSN Foundations", "[09:00] LSN Upper and Core", "[18:30] LSN Full Body"]],
  ["Wednesday", ["[06:30] LSN Core", "[08:00] LSN Full Body", "[19:00] LSN Lower"]],
  ["Thursday", ["[07:00] LSN Full Body", "[09:00] LSN Foundations", "[18:30] LSN Upper and Core"]],
  ["Friday", ["[06:30] LSN Lower", "[08:00] LSN Full Body", "[18:30] LSN Core"]],
  ["Saturday", ["[08:00] LSN Full Body", "[09:15] LSN Foundations", "[10:30] LSN Core"]],
  ["Sunday", ["[09:00] LSN Full Body", "[10:15] LSN Lower"]],
] as const;

function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Classes"
        title="The week ahead"
        lede="Classes are released weekly and fill quickly. Five spots, every time."
      >
        <BookButton>Book in the App</BookButton>
      </PageHero>

      <Section>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {DAYS.map((d, i) => (
            <Reveal key={d[0]} delay={(i % 4) * 80} className="bg-background p-8">
              <h2 className="font-display text-2xl">{d[0]}</h2>
              <ul className="mt-6 space-y-4">
                {d[1].map((s) => (
                  <li key={s} className="border-t border-border pt-4 text-sm text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 max-w-2xl border-l-2 border-clay/40 pl-6">
          <Eyebrow>Booking and cancellation</Eyebrow>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
            All classes are booked in the LSN app. Cancellations and reschedules can be made up to
            [X] hours before the start time. Late cancellations and no-shows are charged in full,
            as the spot cannot be given to anyone else.
          </p>
        </Reveal>
      </Section>

      <CtaBand title="Five spots a class. They go." />
    </>
  );
}
