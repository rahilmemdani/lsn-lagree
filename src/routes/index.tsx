import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import {
  Section,
  SectionHead,
  Eyebrow,
  ActionLink,
  BookButton,
} from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { AutoCarousel } from "@/components/Carousel";
import { Marquee } from "@/components/Marquee";
import { NewsletterForm } from "@/components/NewsletterForm";
import { CLASS_FORMATS, FOUNDERS, JOURNAL_POSTS } from "@/lib/site";
import heroStudio from "@/assets/hero-studio.jpg";
import heroA from "@/assets/hero-a.jpg";
import heroB from "@/assets/hero-b.jpg";
import theSpace from "@/assets/the-space.jpg";
import classDetail from "@/assets/class-detail.jpg";
import machineDetail from "@/assets/machine-detail.jpg";

const HERO_SLIDES = [
  {
    src: heroA,
    alt: "A member working through a slow, controlled movement on a Micro Pro machine at LSN Lagree",
    caption: "The method, on the machine",
  },
  {
    src: heroStudio,
    alt: "The LSN Lagree studio floor in Santacruz, Mumbai",
    caption: "Santacruz, Mumbai",
  },
  {
    src: heroB,
    alt: "Hands gripping the cable handle of a spring-loaded Micro Pro machine",
    caption: "Constant tension, both directions",
  },
];

const HERO_STATS = [
  { value: "50", label: "Minutes" },
  { value: "5", label: "Machines" },
  { value: "01", label: "Method" },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LSN Lagree | India's First Lagree Studio, Mumbai" },
      {
        name: "description",
        content:
          "India's first Lagree studio, in Santacruz, Mumbai. Fifty minutes, five machines, high intensity with zero impact. Book your first class.",
      },
      { property: "og:title", content: "LSN Lagree | India's First Lagree Studio, Mumbai" },
      {
        property: "og:description",
        content:
          "Fifty minutes, five machines, high intensity with zero impact. Santacruz, Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const WHY = [
  {
    n: "01",
    head: "A method, not a workout.",
    body: "Lagree is a defined discipline with its own principles, its own equipment and its own progression. We teach it the way it was designed to be taught.",
    label: "The Method",
  },
  {
    n: "02",
    head: "Five Micro Pros.",
    body: "Our floor is built around five Lagree Micro Pro machines. Spring-loaded, precision-calibrated, and capable of scaling from your first class to your five hundredth.",
    label: "The Machines",
  },
  {
    n: "03",
    head: "Five people. One coach.",
    body: "Every class caps at five. Your form is watched, corrected and progressed by name. Nobody trains at the back of the room here.",
    label: "The Room",
  },
  {
    n: "04",
    head: "Trained at the source.",
    body: "Our team is led by Arpan Kripalani, our Master Trainer and co-founder — one of the few certified to teach the Lagree Method in India.",
    label: "The Coaching",
  },
];

function Home() {
  return (
    <>
      {/* Hero — split: auto carousel panel + editorial copy panel, locked to one viewport */}
      <section className="relative flex min-h-svh flex-col border-b border-border bg-background pt-[76px] md:pt-[92px] lg:h-svh lg:overflow-hidden">
        <div className="grid flex-1 items-stretch lg:grid-cols-[1.05fr_1fr]">
          <AutoCarousel
            eager
            slides={HERO_SLIDES}
            className="h-[42vh] min-h-[300px] lg:h-full"
          />

          <div className="flex items-center px-6 py-10 md:px-12 lg:px-16 lg:py-0">
            <div className="w-full max-w-xl">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-10 bg-clay/50" />
                  <p className="eyebrow">Santacruz, Mumbai</p>
                </div>
              </Reveal>
              <Reveal delay={110}>
                <h1 className="mt-6 font-display text-[clamp(2.25rem,4.4vw,4.5rem)] font-normal leading-[0.98] tracking-[-0.02em] text-ink">
                  India&rsquo;s first Lagree studio.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="lede mt-6 max-w-md">
                  Five machines. Fifty minutes. One method that changes how you train.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-8 flex flex-wrap gap-3">
                <BookButton>Book Your First Class</BookButton>
                <ActionLink to="/the-method" variant="outline">
                  What Is Lagree?
                </ActionLink>
              </Reveal>

              <Reveal delay={380} className="mt-12">
                <div className="rule-hairline" />
                <div className="mt-6 flex divide-x divide-border">
                  {HERO_STATS.map((s) => (
                    <div key={s.label} className="flex-1 px-6 first:pl-0 last:pr-0 md:px-8">
                      <p className="font-display text-3xl tabular-nums text-clay md:text-4xl">
                        {s.value}
                      </p>
                      <p className="mt-2 text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={["Control", "Strength", "Endurance", "Precision", "Tension", "Discipline"]}
      />


      {/* One-line explainer */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Eyebrow>The premise</Eyebrow>
            <h2 className="display-lg mt-5">
              High intensity.
              <br />
              Zero impact.
            </h2>
          </Reveal>
          <Reveal delay={140} className="space-y-6 lg:col-span-7">
            <p className="lede">
              Lagree is a strength method built on slow, controlled movement under constant
              tension. No running. No jumping. No pounding your joints. Just fifty minutes of
              continuous, deliberate resistance that works your muscles to the point of change —
              and leaves the rest of you intact.
            </p>
            <p className="text-lg font-normal text-ink">
              It is not a class you drift through. It is a method you learn.
            </p>
            <div className="pt-4">
              <ActionLink to="/the-method" variant="outline">
                Explore the Method
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Why LSN */}
      <Section tone="sand" className="overflow-hidden">
        <SectionHead eyebrow="Why LSN" title="Built around five." />
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {WHY.map((c, i) => (
            <Reveal key={c.n} delay={i * 90} className="bg-sand-light p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow">{c.label}</span>
                <span className="font-display text-sm text-clay/50">{c.n}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl leading-tight">{c.head}</h3>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted-foreground">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Classes preview */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHead
            eyebrow="Classes"
            title="Find your format."
            lede="Every class runs fifty minutes on the machine. What changes is the emphasis, the tempo and how hard we push the tension."
            className="md:max-w-2xl"
          />
        </div>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {CLASS_FORMATS.slice(0, 3).map((c, i) => (
            <Reveal key={c.name} delay={i * 100} className="bg-background p-8 md:p-10">
              <h3 className="font-display text-3xl">{c.name}</h3>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-clay">{c.level}</p>
              <p className="mt-6 text-[0.9rem] leading-relaxed text-muted-foreground">
                {c.description}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <ActionLink to="/classes" variant="outline">
            See All Classes
          </ActionLink>
        </Reveal>
      </Section>

      {/* Founders strip */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>The founders</Eyebrow>
            <h2 className="display-lg mt-5">Four people. One obsession.</h2>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-7 lg:pt-4">
            <p className="lede">
              LSN was built by a trainer, a strategist, an investor and a voice — each of whom
              found Lagree separately, and none of whom could find it in India.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 90} className="bg-background p-6 md:p-8">
              <div className="flex aspect-[3/4] items-center justify-center bg-sand/50 transition-colors duration-700 hover:bg-clay/20">
                <span className="font-display text-4xl text-clay/70">{f.initials}</span>
              </div>
              <h3 className="mt-5 font-display text-xl">{f.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {f.title}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link
            to="/studio/founders"
            className="link-underline inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-clay"
          >
            Meet the Founders <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.4} />
          </Link>
        </Reveal>
      </Section>

      {/* The space */}
      <section className="grid lg:grid-cols-2">
        <Reveal className="order-2 flex items-center bg-sand-light px-6 py-20 md:px-14 lg:order-1 lg:px-20 lg:py-32">
          <div className="max-w-lg">
            <Eyebrow>The space</Eyebrow>
            <h2 className="display-lg mt-5">A studio built for focus.</h2>
            <p className="lede mt-6">
              Low light. Considered sound. Clean lines and nothing on the walls that asks for your
              attention. The room is designed to hold five people and one intention — and nothing
              else.
            </p>
            <div className="mt-10">
              <ActionLink to="/studio/the-space" variant="outline">
                See the Studio
              </ActionLink>
            </div>
          </div>
        </Reveal>
        <AutoCarousel
          className="order-1 min-h-[380px] lg:order-2 lg:min-h-[640px]"
          interval={5200}
          slides={[
            {
              src: theSpace,
              alt: "The LSN Lagree studio floor with five Micro Pro machines",
              caption: "Five machines, one floor",
            },
            {
              src: machineDetail,
              alt: "Detail of a Micro Pro spring and carriage assembly",
              caption: "Calibrated spring system",
            },
            {
              src: classDetail,
              alt: "A coach correcting a member's form during a class at LSN Lagree",
              caption: "Coached by name",
            },
          ]}
        />
      </section>

      {/* First timers */}
      <section className="grid lg:grid-cols-2">
        <div className="min-h-[380px] lg:min-h-[640px]">
          <img
            src={classDetail}
            alt="A coach correcting a member's form during a Lagree class at LSN"
            width={1200}
            height={1504}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <Reveal className="flex items-center bg-background px-6 py-20 md:px-14 lg:px-20 lg:py-32">
          <div className="max-w-lg">
            <Eyebrow>First timers</Eyebrow>
            <h2 className="display-lg mt-5">Never done Lagree before?</h2>
            <p className="lede mt-6">
              Good. Most people in the room started exactly where you are. Your first class is
              guided from the first spring to the last count — what to wear, what to expect, and
              how to survive the first eight minutes.
            </p>
            <div className="mt-10">
              <ActionLink to="/classes/first-class">Start Here</ActionLink>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Journal preview */}
      <Section>
        <SectionHead eyebrow="Journal" title="From the Journal" />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {JOURNAL_POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} as="article">
              <Link to="/community/journal" className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-sand-light">
                  <img
                    src={machineDetail}
                    alt=""
                    width={1200}
                    height={1504}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-6">{p.category}</p>
                <h3 className="mt-3 font-display text-2xl leading-snug transition-colors group-hover:text-clay">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {p.readTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <ActionLink to="/community/journal" variant="outline">
            Read the Journal
          </ActionLink>
        </Reveal>
      </Section>

      {/* Newsletter */}
      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-5">
            <h2 className="display-lg">Stay close.</h2>
            <p className="lede mt-5">
              Class drops, studio news and the occasional long read on training well. No noise.
            </p>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-7">
            <NewsletterForm />
          </Reveal>
        </div>
      </Section>

      {/* Franchise teaser */}
      <Section tone="clay">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Franchise</p>
            <h2 className="display-lg mt-5">Bring Lagree to your city.</h2>
            <p className="mt-6 max-w-xl text-lg font-light text-ink-soft">
              We opened the first Lagree studio in India. We are now building the second, the tenth
              and the fiftieth — with partners who understand what this method deserves.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <ActionLink to="/franchise">
              Franchise Enquiries
            </ActionLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
