import { createFileRoute } from "@tanstack/react-router";
import { Section, PageHero, CtaBand } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import machineDetail from "@/assets/machine-detail.jpg";

export const Route = createFileRoute("/the-method/sebastian-lagree")({
  head: () => ({
    meta: [
      { title: "Sebastian Lagree | The Founder of the Lagree Method" },
      {
        name: "description",
        content:
          "The story of Sebastian Lagree, the trainer who created the Lagree Method and the machine it is built on, now taught in India at LSN.",
      },
      { property: "og:title", content: "Sebastian Lagree | The Founder of the Lagree Method" },
      {
        property: "og:description",
        content:
          "The trainer who created the Lagree Method and the machine it is built on, now taught in India at LSN Lagree.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SebastianPage,
});

function SebastianPage() {
  return (
    <>
      <PageHero
        eyebrow="The Method"
        title="The man who built the method"
        lede="Sebastian Lagree developed a method, and then built the machine it needed."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <img
              src={machineDetail}
              alt="Detail of the calibrated spring and pulley system on a Lagree machine"
              width={1200}
              height={1504}
              loading="lazy"
              className="w-full object-cover"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Machine detail, LSN studio floor
            </p>
          </Reveal>
          <Reveal delay={120} className="space-y-6 lg:col-span-7">
            <p className="lede">
              Sebastian Lagree is a French-American trainer who developed the Lagree Method in Los
              Angeles while working with clients who wanted strength without bulk, and results
              without hours in a gym. Frustrated by the limitations of the equipment available to
              him, he began designing his own.
            </p>
            <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
              The machine he built — and the many patents that followed — allowed him to keep a
              muscle under continuous load through a full range of movement, while demanding
              balance and core control at the same time. The method that grew around that machine
              has since spread from a single Los Angeles studio to studios across the world.
            </p>
            <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
              He is still directly involved in how the method is taught and how trainers are
              certified. That standard is the reason Lagree feels the same in Mumbai as it does in
              Los Angeles.
            </p>
            <p className="font-display text-2xl leading-snug">
              LSN Lagree brings that method to India for the first time.
            </p>
          </Reveal>
        </div>
      </Section>

      <CtaBand title="Learn it the way it was designed." />
    </>
  );
}
