import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { NewsletterForm } from "@/components/NewsletterForm";

export const Route = createFileRoute("/community/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter | LSN Lagree Mumbai" },
      {
        name: "description",
        content:
          "Class drops, studio news and occasional long reads on training well, from India's first Lagree studio in Mumbai.",
      },
      { property: "og:title", content: "Newsletter | LSN Lagree Mumbai" },
      {
        property: "og:description",
        content: "Class drops, studio news and the occasional long read. No noise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsletterPage,
});

function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Stay close"
        lede="Class drops, studio news and the occasional long read on training well."
      />
      <Section>
        <Reveal className="max-w-2xl">
          <p className="lede">
            We send it rarely, and only when there is something worth saying. Unsubscribe in one
            click, whenever you like.
          </p>
          <div className="mt-10">
            <NewsletterForm />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
