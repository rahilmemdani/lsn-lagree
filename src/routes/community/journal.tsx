import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CtaBand } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { JOURNAL_POSTS } from "@/lib/site";
import machineDetail from "@/assets/machine-detail.jpg";

export const Route = createFileRoute("/community/journal")({
  head: () => ({
    meta: [
      { title: "The Journal | Lagree Training Notes | LSN Lagree" },
      {
        name: "description",
        content:
          "Long reads on the Lagree Method, training well and what actually happens in fifty minutes on the machine. From LSN Lagree, Mumbai.",
      },
      { property: "og:title", content: "The Journal | Lagree Training Notes | LSN Lagree" },
      {
        property: "og:description",
        content: "Writing on the method, the machine and training that lasts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="The Journal"
        lede="Writing on the method, the machine and how to train for another twenty years."
      />
      <Section>
        <div className="grid gap-14 md:grid-cols-3">
          {JOURNAL_POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} as="article">
              <div className="aspect-[4/3] overflow-hidden bg-sand-light">
                <img
                  src={machineDetail}
                  alt=""
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="eyebrow mt-6">{p.category}</p>
              <h2 className="mt-3 font-display text-2xl leading-snug">{p.title}</h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {p.readTime}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand title="Reading is not training." />
    </>
  );
}
