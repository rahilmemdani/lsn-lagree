import { createFileRoute } from "@tanstack/react-router";
import { Section, PageHero, CtaBand } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import machineDetail from "@/assets/machine-detail.jpg";
import theSpace from "@/assets/the-space.jpg";

export const Route = createFileRoute("/the-method/the-micro-pro")({
  head: () => ({
    meta: [
      { title: "The Lagree Micro Pro Machine | LSN Lagree Mumbai" },
      {
        name: "description",
        content:
          "Inside the Micro Pro, the spring-based machine behind the Lagree Method. Five of them on our studio floor in Santacruz, Mumbai.",
      },
      { property: "og:title", content: "The Lagree Micro Pro Machine | LSN Lagree Mumbai" },
      {
        property: "og:description",
        content:
          "A moving carriage, a calibrated spring system and over one hundred exercises. The machine the method is built on.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MicroProPage,
});

const SPECS = [
  "Spring-based resistance, adjusted per person, per exercise.",
  "Over one hundred exercises possible on a single machine.",
  "Scales from complete beginner to professional athlete without changing the equipment.",
  "Compact footprint, full-body capability.",
];

function MicroProPage() {
  return (
    <>
      <PageHero
        eyebrow="The Method"
        title="The machine"
        lede="The Micro Pro is the machine the method is built on."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="space-y-6 lg:col-span-7">
            <p className="lede">
              A moving carriage, a calibrated spring system, adjustable handlebars, cables,
              platforms and straps — every element engineered so that resistance can be added,
              removed or redirected in seconds.
            </p>
            <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
              Our studio floor holds five of them. That is a deliberate number. It is enough to
              build a room with energy in it, and small enough that every single person is coached
              by name.
            </p>
            <ul className="pt-4">
              {SPECS.map((s) => (
                <li key={s} className="border-t border-border py-5 text-[0.98rem]">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <img
              src={machineDetail}
              alt="Close detail of the Micro Pro carriage, springs and cables"
              width={1200}
              height={1504}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <div className="h-[45vh] min-h-[320px] w-full md:h-[70vh]">
        <img
          src={theSpace}
          alt="Five Micro Pro machines on the LSN Lagree studio floor"
          width={1600}
          height={1008}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <CtaBand title="Five machines. One room. Fifty minutes." />
    </>
  );
}
