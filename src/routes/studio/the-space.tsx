import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, CtaBand } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import theSpace from "@/assets/the-space.jpg";
import heroStudio from "@/assets/hero-studio.jpg";
import machineDetail from "@/assets/machine-detail.jpg";
import classDetail from "@/assets/class-detail.jpg";

export const Route = createFileRoute("/studio/the-space")({
  head: () => ({
    meta: [
      { title: "The Space | LSN Lagree Studio, Santacruz Mumbai" },
      {
        name: "description",
        content:
          "Inside the LSN Lagree studio in Santacruz, Mumbai. Five Micro Pro machines, low light, considered sound and a room built for focus.",
      },
      { property: "og:title", content: "The Space | LSN Lagree Studio, Santacruz Mumbai" },
      {
        property: "og:description",
        content: "Low light, clean lines and five machines. The room, in detail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpacePage,
});

const AMENITIES = [
  "Five Lagree Micro Pro machines",
  "Grip socks available at the studio",
  "Changing rooms and showers",
  "Filtered water and towels",
  "Secure storage for phones and bags",
  "Street and building parking nearby",
];

function SpacePage() {
  return (
    <>
      <PageHero
        eyebrow="Studio"
        title="The space"
        lede="Low light. Considered sound. Nothing on the walls that asks for your attention."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <img
              src={theSpace}
              alt="The main studio floor with five Lagree machines"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="md:col-span-4">
            <img
              src={machineDetail}
              alt="Detail of a Micro Pro carriage and springs"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={150} className="md:col-span-5">
            <img
              src={classDetail}
              alt="A coach adjusting a member's position mid-class"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={200} className="md:col-span-7">
            <img
              src={heroStudio}
              alt="The studio lit low before an evening class"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead
          eyebrow="Amenities"
          title="Everything you need. Nothing you do not."
        />
        <ul className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a, i) => (
            <Reveal key={a} delay={(i % 3) * 80} as="li" className="bg-sand-light p-8">
              <p className="text-[0.95rem]">{a}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand title="See the room in person." />
    </>
  );
}
