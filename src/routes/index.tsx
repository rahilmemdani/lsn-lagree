import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Section,
  SectionHead,
  Eyebrow,
  ActionLink,
  BookButton,
} from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { AutoCarousel, SplitCarouselSection } from "@/components/Carousel";
import { Marquee } from "@/components/Marquee";
import { NewsletterForm } from "@/components/NewsletterForm";
import { CLASS_FORMATS, FOUNDERS, JOURNAL_POSTS } from "@/lib/site";
import heroStudio from "@/assets/hero-studio.jpg";
import heroA from "@/assets/hero-a.jpg";
import heroB from "@/assets/hero-b.jpg";
import theSpace from "@/assets/the-space.jpg";
import classDetail from "@/assets/class-detail.jpg";
import machineDetail from "@/assets/machine-detail.jpg";
import studioLight from "@/assets/studio-light.jpg";
import studioCorner from "@/assets/studio-corner.jpg";
import memberA from "@/assets/member-a.jpg";
import detailHandle from "@/assets/detail-handle.jpg";

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

const WHY_ITEMS = [
  {
    n: "01",
    label: "The Method",
    head: "A method, not a workout.",
    body: "Lagree is a defined discipline with its own principles, equipment and progression. We teach it the way it was designed to be taught.",
    src: studioLight,
    alt: "Bright, airy studio floor at LSN Lagree",
    caption: "01 — Built for focus",
  },
  {
    n: "02",
    label: "The Machines",
    head: "Five Micro Pros.",
    body: "Our floor is built around five Lagree Micro Pro machines. Spring-loaded, precision-calibrated, scaling from class 1 to 500.",
    src: detailHandle,
    alt: "Close detail of the cable handle on a Micro Pro machine",
    caption: "02 — Constant tension",
  },
  {
    n: "03",
    label: "The Room",
    head: "Five people. One coach.",
    body: "Every class caps at five. Your form is watched, corrected and progressed by name. Nobody trains at the back.",
    src: theSpace,
    alt: "The LSN Lagree studio floor with five Micro Pro machines",
    caption: "03 — Five machines, one room",
  },
  {
    n: "04",
    label: "The Coaching",
    head: "Trained at the source.",
    body: "Our team is led by Arpan Kripalani, Master Trainer and co-founder — certified to teach Lagree in India.",
    src: memberA,
    alt: "A member working through a slow repetition on the machine",
    caption: "04 — Coached by name",
  },
];

function WhySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WHY_ITEMS.length);
    }, 4800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-svh flex-col justify-between border-b border-border bg-sand-light overflow-hidden lg:grid lg:grid-cols-2 lg:justify-stretch">
      {/* Left panel / Minimalist luxury editorial index list */}
      <div className="flex flex-1 flex-col justify-center px-6 py-6 md:px-12 lg:px-16 lg:py-12 overflow-hidden">
        <div className="w-full max-w-xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-10 bg-clay/50" />
              <p className="eyebrow">Why LSN</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-3 md:mt-4 lg:mt-5">
              Built around five.
            </h2>
          </Reveal>

          {/* Minimalist Editorial Accordion Index */}
          <div className="mt-5 border-t border-border/80 md:mt-8 lg:mt-10">
            {WHY_ITEMS.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={item.n}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "group block w-full border-b border-border/70 py-3 md:py-4 text-left transition-all duration-500",
                    isActive ? "bg-white/40 px-2 sm:px-3" : "hover:bg-white/20",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span
                        className={cn(
                          "font-display text-xs md:text-sm transition-colors duration-500",
                          isActive ? "text-clay font-medium" : "text-clay/40 group-hover:text-clay/70",
                        )}
                      >
                        {item.n}
                      </span>
                      <h3
                        className={cn(
                          "font-display text-base sm:text-lg md:text-xl transition-colors duration-500",
                          isActive ? "text-ink font-normal" : "text-muted-foreground group-hover:text-ink",
                        )}
                      >
                        {item.head}
                      </h3>
                    </div>

                    <span
                      className={cn(
                        "text-[0.625rem] md:text-xs uppercase tracking-[0.2em] transition-colors duration-500 shrink-0 ml-2",
                        isActive ? "text-clay" : "text-muted-foreground/40 group-hover:text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Active expanded paragraph */}
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-in-out",
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-2 md:mt-3"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-6 md:pl-8 text-xs md:text-sm font-light leading-relaxed text-muted-foreground max-w-lg">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right panel / Full height synchronized carousel */}
      <div className="relative h-44 w-full overflow-hidden bg-sand-light sm:h-56 lg:h-full lg:w-full">
        {WHY_ITEMS.map((item, i) => (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={1408}
            height={1760}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-in-out",
              i === activeIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none",
            )}
          />
        ))}

        {/* Soft edge gradient overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Minimalist pill caption & indicator dots */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
          <p className="rounded-full bg-white/20 px-3.5 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {WHY_ITEMS[activeIndex].caption}
          </p>

          <div className="flex items-center gap-1.5">
            {WHY_ITEMS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "h-1 transition-all duration-500 rounded-full",
                  i === activeIndex ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




function Home() {
  return (
    <>
      {/* Hero — left copy panel, right auto carousel with arrows, one viewport */}
      <section className="relative flex min-h-svh flex-col border-b border-border bg-background pt-[76px] md:pt-[92px] lg:h-svh lg:overflow-hidden">
        <div className="grid flex-1 items-stretch lg:grid-cols-[1fr_1.05fr]">
          <div className="flex items-center px-6 py-12 md:px-12 lg:order-1 lg:px-16 lg:py-0">
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

          <AutoCarousel
            eager
            showArrows
            slides={HERO_SLIDES}
            className="aspect-[4/5] w-full sm:aspect-[16/10] lg:order-2 lg:aspect-auto lg:h-full"
          />
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

      {/* Why LSN — Synchronized single-frame split section */}
      <WhySection />




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
      <SplitCarouselSection
        eyebrow="The space"
        title="A studio built for focus."
        tone="sand"
        reverse
        body={
          <p>
            Low light. Considered sound. Clean lines and nothing on the walls that asks for your
            attention. The room is designed to hold five people and one intention — and nothing
            else.
          </p>
        }
        slides={[
          {
            src: theSpace,
            alt: "The LSN Lagree studio floor with five Micro Pro machines",
            caption: "Five machines, one floor",
          },
          {
            src: studioLight,
            alt: "Bright studio floor at LSN Lagree with natural daylight",
            caption: "Daylight and quiet",
          },
          {
            src: studioCorner,
            alt: "The reception corner of the LSN Lagree studio",
            caption: "Considered detail",
          },
        ]}
      >
        <ActionLink to="/studio/the-space" variant="outline">
          See the Studio
        </ActionLink>
      </SplitCarouselSection>

      {/* First timers */}
      <SplitCarouselSection
        eyebrow="First timers"
        title="Never done Lagree before?"
        body={
          <p>
            Good. Most people in the room started exactly where you are. Your first class is guided
            from the first spring to the last count — what to wear, what to expect, and how to
            survive the first eight minutes.
          </p>
        }
        slides={[
          {
            src: classDetail,
            alt: "A coach correcting a member's form during a Lagree class at LSN",
            caption: "Coached by name",
          },
          {
            src: memberA,
            alt: "A member holding a slow, controlled position on the machine",
            caption: "Slow and controlled",
          },
          {
            src: detailHandle,
            alt: "Hands gripping the cable handle of a Micro Pro machine",
            caption: "Constant tension",
          },
        ]}
      />


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
