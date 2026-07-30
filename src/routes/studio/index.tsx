import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, CtaBand, ActionLink } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import theSpace from "@/assets/the-space.jpg";

export const Route = createFileRoute("/studio/")({
  head: () => ({
    meta: [
      { title: "About LSN | India's First Lagree Studio, Mumbai" },
      {
        name: "description",
        content:
          "LSN brought the Lagree Method to India. A five-machine studio in Santacruz, Mumbai, built around coaching, precision and small rooms.",
      },
      { property: "og:title", content: "About LSN | India's First Lagree Studio, Mumbai" },
      {
        property: "og:description",
        content: "Why we built India's first Lagree studio, and what we refuse to compromise on.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioPage,
});

const VALUES = [
  ["Precision over volume", "We would rather you take two perfect classes a week than seven careless ones."],
  ["Coaching, not commanding", "Nobody is shouted at here. You are corrected, adjusted and progressed."],
  ["Small rooms", "Five machines is not a limitation. It is the entire premise."],
  ["The method, intact", "We teach Lagree as it was designed. Nothing diluted for the local market."],
];

function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio"
        title="About LSN"
        lede="We did not adapt a method for India. We brought it here properly, and built a room worthy of it."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <h2 className="display-md">Why we exist</h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 lg:col-span-8">
            <p className="lede">
              Four people found the Lagree Method separately, in four different cities, and came
              home to a country where it did not exist. LSN is the answer to that.
            </p>
            <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
              We opened in Santacruz with five Micro Pro machines, a Master Trainer certified in the
              method, and a decision that the room would never take more people than it could coach
              properly. Everything else — the light, the sound, the way a class is programmed — was
              built backwards from that.
            </p>
            <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
              We are not a gym with a machine in the corner. We are a studio built around a single
              method, taught by people trained to teach it.
            </p>
          </Reveal>
        </div>
      </Section>

      <div className="h-[45vh] min-h-[300px] w-full md:h-[70vh]">
        <img
          src={theSpace}
          alt="The LSN Lagree studio in Santacruz, Mumbai"
          width={1600}
          height={1008}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <Section tone="sand">
        <SectionHead eyebrow="What we hold to" title="Four non-negotiables." />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {VALUES.map(([t, b], i) => (
            <Reveal key={t} delay={i * 90} className="bg-sand-light p-8 md:p-12">
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{b}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex flex-wrap gap-4">
          <ActionLink to="/studio/founders" variant="outline">
            The Founders
          </ActionLink>
          <ActionLink to="/studio/the-space" variant="outline">
            The Space
          </ActionLink>
          <ActionLink to="/studio/careers" variant="outline">
            Careers
          </ActionLink>
        </Reveal>
      </Section>

      <CtaBand title="Come see what we built." />
    </>
  );
}
