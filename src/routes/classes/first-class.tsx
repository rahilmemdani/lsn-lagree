import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, CtaBand, Numbered } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/Accordion";
import { FAQS } from "@/lib/site";
import classDetail from "@/assets/class-detail.jpg";

export const Route = createFileRoute("/classes/first-class")({
  head: () => ({
    meta: [
      { title: "Your First Lagree Class | What to Expect | LSN Mumbai" },
      {
        name: "description",
        content:
          "What to wear, when to arrive and what the first fifty minutes on a Lagree machine actually feel like. Your first class at LSN, Santacruz.",
      },
      { property: "og:title", content: "Your First Lagree Class | What to Expect | LSN Mumbai" },
      {
        property: "og:description",
        content: "Everything you need before your first fifty minutes on the machine.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FirstClassPage,
});

const STEPS = [
  {
    n: "01",
    title: "Book in the app",
    body: "Download the LSN app, create your account and choose LSN Foundations if this is your first time on the machine.",
  },
  {
    n: "02",
    title: "Arrive fifteen minutes early",
    body: "Enough time to be shown the machine, set your springs and ask anything before the class begins.",
  },
  {
    n: "03",
    title: "Wear fitted activewear and grip socks",
    body: "Grip socks are compulsory on the machine. Bring your own or buy a pair at the studio.",
  },
  {
    n: "04",
    title: "Expect the shake",
    body: "Somewhere in the first ten minutes your muscles will start to tremble. That is the method working, not a sign that you are doing it wrong.",
  },
  {
    n: "05",
    title: "Tell your coach everything",
    body: "Injuries, surgeries, pregnancy, a bad knee from a decade ago. It changes how we set you up.",
  },
];

function FirstClassPage() {
  return (
    <>
      <PageHero
        eyebrow="Classes"
        title="Your first class"
        lede="Nobody walks in knowing how to do this. Here is exactly how the first fifty minutes go."
      />

      <Section>
        <SectionHead eyebrow="Before you arrive" title="Five things to know." />
        <div className="mt-12">
          {STEPS.map((s) => (
            <Numbered key={s.n} index={s.n} title={s.title} body={s.body} />
          ))}
        </div>
      </Section>

      <section className="grid lg:grid-cols-2">
        <div className="min-h-[340px] lg:min-h-[600px]">
          <img
            src={classDetail}
            alt="A first-time member being set up on a Lagree machine by a coach"
            width={1200}
            height={1504}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <Reveal className="flex items-center bg-sand-light px-6 py-20 md:px-14 lg:px-20">
          <div className="max-w-lg">
            <p className="eyebrow">In the room</p>
            <h2 className="display-md mt-4">Fifty minutes, minute by minute.</h2>
            <ul className="mt-8 space-y-5">
              {[
                "Minutes 0–5: springs set, positions explained, the first slow sequence.",
                "Minutes 5–20: lower body under continuous tension. The shaking starts here.",
                "Minutes 20–35: core and obliques, with no release between movements.",
                "Minutes 35–48: upper body through the cables, core still holding.",
                "Minutes 48–50: down off the machine. Slower breathing. A different body.",
              ].map((l) => (
                <li key={l} className="border-t border-border pt-4 text-[0.95rem] text-muted-foreground">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <Section>
        <SectionHead eyebrow="Questions" title="The ones everyone asks." />
        <div className="mt-12">
          <Accordion items={FAQS.slice(0, 8)} />
        </div>
      </Section>

      <CtaBand title="The first one is the hardest. Book it." />
    </>
  );
}
