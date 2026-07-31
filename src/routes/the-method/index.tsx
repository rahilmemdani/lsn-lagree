import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHead, PageHero, CtaBand, Numbered, ActionLink } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { PRINCIPLES } from "@/lib/site";
import machineDetail from "@/assets/machine-detail.jpg";

export const Route = createFileRoute("/the-method/")({
  head: () => ({
    meta: [
      { title: "The Lagree Method Explained | LSN Lagree Mumbai" },
      {
        name: "description",
        content:
          "What the Lagree Method is, how it works and why slow, constant tension builds strength without impact. Taught in Mumbai at LSN Lagree.",
      },
      { property: "og:title", content: "The Lagree Method Explained | LSN Lagree Mumbai" },
      {
        property: "og:description",
        content:
          "Slow is harder. Tension is the point. Fifty minutes is enough. The Lagree Method, taught in Santacruz, Mumbai.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MethodPage,
});

const COMPARISON = [
  ["Tempo", "Fast, momentum assisted", "Slow and continuously controlled"],
  ["Tension", "Released between repetitions", "Sustained throughout the set"],
  ["Impact on joints", "Moderate to high", "Minimal"],
  ["Core involvement", "Isolated to core exercises", "Engaged for the full fifty minutes"],
  ["Session length", "60 to 90 minutes", "50 minutes, once"],
  ["Progression", "Add weight over weeks", "Adjust spring, range and tempo in real time"],
];

const WHO = [
  "Beginners who want a strength practice that will not injure them while they learn it.",
  "Athletes and lifters looking for the conditioning and stability work their programme is missing.",
  "Anyone returning to training after a long gap, an injury or a pregnancy, cleared by their doctor.",
  "People who train constantly and have stopped seeing change.",
  "People with joint sensitivity who have been told to avoid impact.",
];

function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="The Method"
        title="The Lagree Method"
        lede="Slow is harder. Tension is the point. Fifty minutes is enough."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <h2 className="display-md">What is Lagree?</h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 lg:col-span-8">
            <p className="lede">
              Lagree is a strength training method performed on a patented machine with a moving
              carriage and adjustable spring resistance. Movements are performed slowly and
              continuously, so the muscle never gets a moment of rest. That sustained tension is
              what drives the result.
            </p>
            <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
              Where conventional training relies on load and momentum, Lagree relies on time,
              control and instability. You move at roughly a third of the speed you think you
              should. Your muscles are placed under tension and kept there. Within minutes, muscles
              you have trained for years start shaking in ways they never have.
            </p>
            <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
              It is a full-body method. Strength, endurance, core stability, flexibility and
              cardiovascular work happen inside the same fifty minutes, on the same machine,
              without a single impact on your joints.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead eyebrow="Core principles" title="Six things that make it work." />
        <div className="mt-12">
          {PRINCIPLES.map((p) => (
            <Numbered key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <h2 className="display-md">Who it is for</h2>
            <p className="lede mt-6">Lagree scales. That is its defining quality.</p>
          </Reveal>
          <div className="lg:col-span-8">
            <ul>
              {WHO.map((w, i) => (
                <Reveal key={w} delay={i * 70} as="li" className="border-t border-border py-6">
                  <p className="text-lg font-light leading-relaxed">{w}</p>
                </Reveal>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-clay/40 pl-5 text-sm italic leading-relaxed text-muted-foreground">
              If you are pregnant, recovering from surgery or managing an injury, please speak to
              your doctor and tell us before your first class.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHead
          eyebrow="Comparison"
          title="Lagree, against conventional training."
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="w-1/4 py-4 pr-6 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                  &nbsp;
                </th>
                <th className="py-4 pr-6 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                  Conventional training
                </th>
                <th className="py-4 text-[0.65rem] uppercase tracking-[0.24em] text-clay">
                  The Lagree Method
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row[0]} className="border-b border-border">
                  <th scope="row" className="py-6 pr-6 font-display text-lg font-normal">
                    {row[0]}
                  </th>
                  <td className="py-6 pr-6 text-sm text-muted-foreground">{row[1]}</td>
                  <td className="py-6 text-sm text-ink">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <section className="grid lg:grid-cols-2">
        <div className="min-h-[360px] lg:min-h-[620px]">
          <img
            src={machineDetail}
            alt="Detail of the spring system on a Lagree Micro Pro machine"
            width={1200}
            height={1504}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <Reveal className="flex items-center bg-sand-light px-6 py-20 md:px-14 lg:px-20">
          <div className="max-w-lg space-y-8">
            <div>
              <p className="eyebrow">Go deeper</p>
              <h2 className="display-md mt-4">The man and the machine.</h2>
              <p className="lede mt-5">
                Two pages that explain where the method came from, and what it is built on.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ActionLink to="/the-method/sebastian-lagree" variant="outline">
                Sebastian Lagree
              </ActionLink>
              <ActionLink to="/the-method/the-micro-pro" variant="outline">
                The Micro Pro
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand title="Reading about it will only take you so far." />
    </>
  );
}
