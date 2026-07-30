import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CtaBand } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { FOUNDERS } from "@/lib/site";

export const Route = createFileRoute("/studio/founders")({
  head: () => ({
    meta: [
      { title: "The Founders | LSN Lagree Mumbai" },
      {
        name: "description",
        content:
          "Meet the founders of LSN Lagree: Arpan Kripalani, Tarana Dodani, Sasha Dcunha and brand ambassador Malvika Raaj.",
      },
      { property: "og:title", content: "The Founders | LSN Lagree Mumbai" },
      {
        property: "og:description",
        content: "A trainer, a strategist, an investor and a voice — the people behind LSN Lagree.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FoundersPage,
});

function FoundersPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio"
        title="The founders"
        lede="Four people who found Lagree separately, and none of whom could find it in India."
      />

      <Section>
        <div className="space-y-24 md:space-y-32">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={i % 2 === 1 ? "lg:order-2 lg:col-span-4" : "lg:col-span-4"}>
                <div className="flex aspect-[3/4] items-center justify-center bg-sand-light">
                  <span className="font-display text-6xl text-clay/60">{f.initials}</span>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1 lg:col-span-8" : "lg:col-span-8"}>
                <p className="eyebrow">{f.title}</p>
                <h2 className="display-md mt-4">{f.name}</h2>
                <div className="mt-8 space-y-5">
                  {f.bio.map((p) => (
                    <p key={p} className="text-[0.98rem] leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Train with the people who built this." />
    </>
  );
}
